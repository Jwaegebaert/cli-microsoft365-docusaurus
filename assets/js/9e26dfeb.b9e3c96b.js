"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[48498],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Run CLI in a Docker Container",sidebar_position:3},o="Run CLI for Microsoft 365 in a Docker Container",s={unversionedId:"user-guide/run-cli-in-docker-container",id:"user-guide/run-cli-in-docker-container",title:"Run CLI in a Docker Container",description:"You can use Docker to run a standalone Linux container with CLI for Microsoft 365 and PowerShell pre-installed, with command completion (tab) automatically configured for you in both bash and pwsh, without having to install any of the required dependencies on your host machine. We've also included some useful utilities in the container for you such as curl, jq and jmespath-terminal.",source:"@site/docs/user-guide/run-cli-in-docker-container.md",sourceDirName:"user-guide",slug:"/user-guide/run-cli-in-docker-container",permalink:"/cli-microsoft365-docusaurus/user-guide/run-cli-in-docker-container",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/run-cli-in-docker-container.md",tags:[],version:"current",lastUpdatedAt:1672829078,formattedLastUpdatedAt:"Jan 4, 2023",sidebarPosition:3,frontMatter:{title:"Run CLI in a Docker Container",sidebar_position:3},sidebar:"userGuide",previous:{title:"Use the CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/using-cli"},next:{title:"Log in to Microsoft 365",permalink:"/cli-microsoft365-docusaurus/user-guide/connecting-office-365"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install and run latest",id:"install-and-run-latest",level:2},{value:"Install and run beta",id:"install-and-run-beta",level:2},{value:"Install and run specific versions",id:"install-and-run-specific-versions",level:2},{value:"Using JMESPath Terminal to author JMESPath queries",id:"using-jmespath-terminal-to-author-jmespath-queries",level:2},{value:"Execute script in container",id:"execute-script-in-container",level:2},{value:"Set Environment Variables",id:"set-environment-variables",level:2},{value:"Combining script and environment variables",id:"combining-script-and-environment-variables",level:2},{value:"Update Docker Image",id:"update-docker-image",level:2},{value:"Uninstall Docker Image",id:"uninstall-docker-image",level:2},{value:"Published Tags",id:"published-tags",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"run-cli-for-microsoft-365-in-a-docker-container"},"Run CLI for Microsoft 365 in a Docker Container"),(0,i.kt)("p",null,"You can use Docker to run a standalone Linux container with CLI for Microsoft 365 and PowerShell pre-installed, with command completion (tab) automatically configured for you in both ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pwsh"),", without having to install any of the required dependencies on your host machine. We've also included some useful utilities in the container for you such as ",(0,i.kt)("inlineCode",{parentName:"p"},"curl"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"jq")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"jmespath-terminal"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"To use the published Docker images, you will first need to have Docker installed and configured on your host machine. Please refer to the Docker documentation on how to ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"install Docker")," on Windows, Mac and Linux."),(0,i.kt)("h2",{id:"install-and-run-latest"},"Install and run latest"),(0,i.kt)("p",null,"To install and run the latest version of CLI for Microsoft 365, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command and specify the CLI docker image name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --rm -it m365pnp/cli-microsoft365:latest\n")),(0,i.kt)("p",null,"Executing this command for the first time will download the image onto your machine and start the container and invoke an interactive session automatically ",(0,i.kt)("inlineCode",{parentName:"p"},"(-it)"),", displaying a bash shell prompt."),(0,i.kt)("p",null,"You can exit from the prompt by closing the terminal window or typing ",(0,i.kt)("inlineCode",{parentName:"p"},"exit"),". When you exit the container it will be automatically stopped to free up system resources ",(0,i.kt)("inlineCode",{parentName:"p"},"(--rm)"),"."),(0,i.kt)("p",null,"Alternatively, you can use PowerShell as the default shell by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"pwsh")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command after the image name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker run --rm -it m365pnp/cli-microsoft365:latest pwsh\n")),(0,i.kt)("p",null,"!!! info\nAuthentication information is not persisted in the Docker container. When you exit from the container, you will need to authenticate with your Microsoft 365 tenant the next time you run the container."),(0,i.kt)("h2",{id:"install-and-run-beta"},"Install and run beta"),(0,i.kt)("p",null,"We regularly release beta versions of the CLI, to install and run the latest beta release use the ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm -it m365pnp/cli-microsoft365:next\n")),(0,i.kt)("h2",{id:"install-and-run-specific-versions"},"Install and run specific versions"),(0,i.kt)("p",null,"We have published Docker images for every minor release of v3 of CLI for Microsoft 365 to date. "),(0,i.kt)("p",null,"To install and run a specific version of the CLI, state the version number as a tag after the image name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm -it m365pnp/cli-microsoft365:3.0.0\n")),(0,i.kt)("p",null,"You can also install and run specific beta versions of the CLI, state the beta version as a tag after the image name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --rm -it m365pnp/cli-microsoft365:3.4.0-beta.0dbd08d\n")),(0,i.kt)("h2",{id:"using-jmespath-terminal-to-author-jmespath-queries"},"Using JMESPath Terminal to author JMESPath queries"),(0,i.kt)("p",null,"One of the best ways to learn the JMESPath language is to experiment by creating your own JMESPath expressions, to make this easier for you we have bundled the JMESPath Terminal library to make it easy for you to see the results of your JMESPath expressions immediately as you type."),(0,i.kt)("p",null,"The JMESPath Terminal accepts piped JSON input in both ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pwsh")," prompts, for example, executing ",(0,i.kt)("inlineCode",{parentName:"p"},"m365 tenant serviceannouncement health list | jpterm")," will pipe the response output from the command into a JMESPath Terminal interactive session."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"JMESPath Terminal",src:n(72039).Z,width:"1200",height:"871"})),(0,i.kt)("p",null,"!!! info\nFor more information on how to use JMESPath Terminal, please consult the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jmespath/jmespath.terminal"},"documenation"),"."),(0,i.kt)("h2",{id:"execute-script-in-container"},"Execute script in container"),(0,i.kt)("p",null,"In scenarios where you may already have a script that uses the CLI for Microsoft 365 and you want to execute it within the container, you can use a volume mount to share files on your host machine with the Docker container."),(0,i.kt)("p",null,"For example, lets say we have a script called ",(0,i.kt)("inlineCode",{parentName:"p"},"test.sh")," and we want to execute that script inside the container. We can do this by mapping the current working directory on our host machine to the working directory in the container ",(0,i.kt)("inlineCode",{parentName:"p"},"(-v)"),", pass ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," as the shell we want to use and the name of the file that we want to execute as additional arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it -v ${PWD}:/home/cli-microsoft365/scripts m365pnp/cli-microsoft365:latest bash scripts/test.sh\n")),(0,i.kt)("p",null,"Alternatively, if we want to execute a PowerShell script, you can do this in the same way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -it -v ${PWD}:/home/cli-microsoft365/scripts m365pnp/cli-microsoft365:latest pwsh scripts/test.ps1\n")),(0,i.kt)("p",null,"!!! info\nWe have created a non-root user called ",(0,i.kt)("inlineCode",{parentName:"p"},"cli-microsoft365")," inside the container.  When the container starts, the working directory is set to the home directory of this user, hence the need to add ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/cli-microsoft365")," to the volume mapping."),(0,i.kt)("h2",{id:"set-environment-variables"},"Set Environment Variables"),(0,i.kt)("p",null,"In scenarios where you need to set environment variables, for example, you want to use a custom Azure AD identity when logging into your Microsoft 365 tenant using the CLI. You can set these variables by passing them in as options arguments ",(0,i.kt)("inlineCode",{parentName:"p"},"(-e)")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -it -e "CLIMICROSOFT365_AADAPPID=51078274-0353-4f6a-b9f5-8674ab2e524c" -e "CLIMICROSOFT365_TENANT=9455bc83-d5af-4ccf-93f6-0af3f71aaf8e" m365pnp/cli-microsoft365:latest\n')),(0,i.kt)("h2",{id:"combining-script-and-environment-variables"},"Combining script and environment variables"),(0,i.kt)("p",null,"Combining scripts and environment variables is a powerful way to run the CLI in Docker, we can set environment variables which we can reference in the script that is executed in the running container and also."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'docker run --rm -it -v ${PWD}:/home/cli-microsoft365/scripts -e "CLIMICROSOFT365_AADAPPID=da049853-dd90-49df-aa21-4e0c8b646a36" -e "CLIMICROSOFT365_TENANT=e8954f17-a373-4b61-b54d-45c038fe3188" -e "M365_USER=user@contoso.com" -e "M365_PASSWORD=password" m365pnp/cli-microsoft365:next pwsh scripts/script.ps1\n')),(0,i.kt)("p",null,"We can reference the environment variables passed in to the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run")," command and use them in the script, in this example, passing the username and password variables into the ",(0,i.kt)("inlineCode",{parentName:"p"},"m365 login")," command to login in to Microsoft 365 using password authentication."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"m365 login --authType password --userName $env:M365_USER --password $env:M365_PASSWORD\n")),(0,i.kt)("h2",{id:"update-docker-image"},"Update Docker Image"),(0,i.kt)("p",null,"We will be regularly updating the images of the ",(0,i.kt)("inlineCode",{parentName:"p"},"latest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," tags, to ensure you have the most upto date version of these images, you can update your local image using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker pull")," specifying the version you want to update using the relevant tag."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull m365pnp/cli-microsoft365:latest\n")),(0,i.kt)("h2",{id:"uninstall-docker-image"},"Uninstall Docker Image"),(0,i.kt)("p",null,"If you would like to remove an image from your host machine, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"rmi")," command, specifying the version you wish to remove as a tag after the image name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"docker rmi m365pnp/cli-microsoft365:latest\n")),(0,i.kt)("h2",{id:"published-tags"},"Published Tags"),(0,i.kt)("p",null,"See the list of available tags on the m365pnp/cli-microsoft365 repository on ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/m365pnp/cli-microsoft365/"},"Docker Hub"),"."))}p.isMDXComponent=!0},72039:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jpterm-example-722a706fe25631cb033c7396eab2e3f3.png"}}]);