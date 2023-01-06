"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,p(p({ref:t},l),{},{components:r})):n.createElement(h,p({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71010:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},p="spfx project upgrade",s={unversionedId:"cmd/spfx/project/project-upgrade",id:"cmd/spfx/project/project-upgrade",title:"spfx project upgrade",description:"Upgrades SharePoint Framework project to the specified version",source:"@site/docs/cmd/spfx/project/project-upgrade.md",sourceDirName:"cmd/spfx/project",slug:"/cmd/spfx/project/project-upgrade",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-upgrade",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spfx/project/project-upgrade.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spfx project rename",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/project/project-rename"},next:{title:"spfx doctor",permalink:"/cli-microsoft365-docusaurus/cmd/spfx/spfx-doctor"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spfx-project-upgrade"},"spfx project upgrade"),(0,o.kt)("p",null,"Upgrades SharePoint Framework project to the specified version"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-v, --toVersion [toVersion]"),"\n: The version of SharePoint Framework to which upgrade the project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--packageManager [packageManager]"),"\n: The package manager you use. Supported managers ",(0,o.kt)("inlineCode",{parentName:"p"},"npm,pnpm,yarn"),". Default ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--shell [shell]"),"\n: The shell you use. Supported shells ",(0,o.kt)("inlineCode",{parentName:"p"},"bash,powershell,cmd"),". Default ",(0,o.kt)("inlineCode",{parentName:"p"},"bash")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--preview"),"\n: Upgrade project to the latest SPFx preview version"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-f, --outputFile [outputFile]"),"\n: Path to the file where the upgrade report should be stored in. Ignored when ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"tour")),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("p",null,"!!! important\nRun this command in the folder where the project that you want to upgrade is located. This command doesn't change your project files."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"spfx project upgrade")," command helps you upgrade your SharePoint Framework project to the specified version. If no version is specified, the command will upgrade to the latest version of the SharePoint Framework it supports (v1.16.1)."),(0,o.kt)("p",null,"This command doesn't change your project files. Instead, it gives you a report with all steps necessary to upgrade your project to the specified version of the SharePoint Framework. Changing project files is error-prone, especially when it comes to updating your solution's code. This is why at this moment, this command produces a report that you can use yourself to perform the necessary updates and verify that everything is working as expected."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to SharePoint Framework version 1.5.0 and save the findings in a Markdown file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spfx project upgrade --toVersion 1.5.0 --output md > "upgrade-report.md"\n')),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to SharePoint Framework version 1.5.0 and show the summary of the findings in the shell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --toVersion 1.5.0 --output text\n")),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to the latest preview version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --preview --output text\n")),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to the specified preview version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --toVersion 1.12.1-rc.0 --output text\n")),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to the latest SharePoint Framework version supported by the CLI for Microsoft 365 using pnpm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --packageManager pnpm --output text\n")),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to the latest SharePoint Framework version supported by the CLI for Microsoft 365"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --output text\n")),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to the latest SharePoint Framework version supported by the CLI for Microsoft 365 using PowerShell"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --shell powershell --output text\n")),(0,o.kt)("p",null,"Get instructions to upgrade the current SharePoint Framework project to the latest version of SharePoint Framework and save the findings in a ",(0,o.kt)("a",{parentName:"p",href:"https://aka.ms/codetour"},"CodeTour")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spfx project upgrade --output tour\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"When upgrading an SPFx project built using version 1.15.0 to SPFx version 1.15.2, you'll get output similar to following (output is truncated):"),(0,o.kt)("p",null,'=== "JSON"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```json\n[\n  {\n    "description": "Upgrade SharePoint Framework dependency package @microsoft/sp-core-library",\n    "id": "FN001001",\n    "file": "./package.json",\n    "position": {\n      "line": 15,\n      "character": 5\n    },\n    "resolution": "npm i -SE @microsoft/sp-core-library@1.15.2",\n    "resolutionType": "cmd",\n    "severity": "Required",\n    "title": "@microsoft/sp-core-library"\n  },\n  {\n    "description": "Update version in .yo-rc.json",\n    "id": "FN010001",\n    "file": "./.yo-rc.json",\n    "position": {\n      "line": 5,\n      "character": 5\n    },\n    "resolution": "{\\\\\\n  \\"@microsoft/generator-sharepoint\\": {\\\\\\n    \\"version\\": \\"1.15.2\\"\\\\\\n  }\\\\\\n}",\n    "resolutionType": "json",\n    "severity": "Recommended",\n    "title": ".yo-rc.json version"\n  }\n]\n```\n')),(0,o.kt)("p",null,'=== "Text"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'```text\nExecute in bash\n-----------------------\nnpm i -SE @microsoft/sp-core-library@1.15.2\n\n./.yo-rc.json\n-------------\nUpdate version in .yo-rc.json:\n{\n  "@microsoft/generator-sharepoint": {\n    "version": "1.15.2"\n  }\n}\n```\n')),(0,o.kt)("p",null,'=== "Markdown"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'````md\n# Upgrade project HelloWorld to v1.15.2\n\nDate: 20/11/2022\n\n## Findings\n\nFollowing is the list of steps required to upgrade your project to SharePoint Framework version 1.15.2. [Summary](#Summary) of the modifications is included at the end of the report.\n\n### FN001001 @microsoft/sp-core-library | Required\n\nUpgrade SharePoint Framework dependency package @microsoft/sp-core-library\n\nExecute the following command:\n\n```sh\nnpm i -SE @microsoft/sp-core-library@1.15.2\n```\n\nFile: [./package.json:17:5](./package.json)\n\n## Summary\n\n### Execute script\n\n```sh\nnpm i -SE @microsoft/sp-core-library@1.15.2\n```\n\n### Modify files\n\n#### [./.yo-rc.json](./.yo-rc.json)\n\nUpdate version in .yo-rc.json:\n\n```json\n{\n  "@microsoft/generator-sharepoint": {\n    "version": "1.15.2"\n  }\n}\n```\n````\n')))}u.isMDXComponent=!0}}]);