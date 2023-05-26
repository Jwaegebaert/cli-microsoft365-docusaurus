"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[45071],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Automate your CI/CD workflow using CLI for Microsoft 365 GitHub Actions",sidebar_position:12},r="Automate your CI/CD workflow using CLI for Microsoft 365 GitHub Actions",l={unversionedId:"user-guide/github-actions",id:"user-guide/github-actions",title:"Automate your CI/CD workflow using CLI for Microsoft 365 GitHub Actions",description:"GitHub Actions help you automate your software development workflows in the same place you store code and collaborate on pull requests and issues. You can write individual tasks, called actions, and combine them to create a custom workflow.",source:"@site/docs/user-guide/github-actions.mdx",sourceDirName:"user-guide",slug:"/user-guide/github-actions",permalink:"/cli-microsoft365-docusaurus/user-guide/github-actions",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/github-actions.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",sidebarPosition:12,frontMatter:{title:"Automate your CI/CD workflow using CLI for Microsoft 365 GitHub Actions",sidebar_position:12},sidebar:"userGuide",previous:{title:"Caveats when working with the CLI and certificate login",permalink:"/cli-microsoft365-docusaurus/user-guide/cli-certificate-caveats"},next:{title:"Manage Microsoft 365 apps with the CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/manage-microsoft-365-apps"}},s={},p=[{value:"Actions",id:"actions",level:2},{value:"CLI for Microsoft 365 Login",id:"cli-for-microsoft-365-login",level:3},{value:"CLI for Microsoft 365 Deploy App",id:"cli-for-microsoft-365-deploy-app",level:3},{value:"Microsoft 365 Run Script",id:"microsoft-365-run-script",level:3},{value:"Tutorial",id:"tutorial",level:2},{value:"Creating a basic workflow which authenticates with an Microsoft 365 tenant",id:"creating-a-basic-workflow-which-authenticates-with-an-microsoft-365-tenant",level:3},{value:"Create secrets",id:"create-secrets",level:4},{value:"Delegated secrets",id:"delegated-secrets",level:5},{value:"Application secrets",id:"application-secrets",level:5},{value:"Setup workflow",id:"setup-workflow",level:4},{value:"Update the build definition file",id:"update-the-build-definition-file",level:4},{value:"Login with delegated secrets",id:"login-with-delegated-secrets",level:5},{value:"Login with application secrets",id:"login-with-application-secrets",level:5},{value:"Confirm the build has completed successfully",id:"confirm-the-build-has-completed-successfully",level:4},{value:"Specify the version of CLI for Microsoft 365",id:"specify-the-version-of-cli-for-microsoft-365",level:4},{value:"Specify the tenant to connect to",id:"specify-the-tenant-to-connect-to",level:4},{value:"How-To Guides",id:"how-to-guides",level:2},{value:"Deploy an app using the CLI for Microsoft 365 Deploy App action",id:"deploy-an-app-using-the-cli-for-microsoft-365-deploy-app-action",level:3},{value:"Execute an inline script using the CLI for Microsoft 365 Run Script action",id:"execute-an-inline-script-using-the-cli-for-microsoft-365-run-script-action",level:3},{value:"Execute a script file using the CLI for Microsoft 365 Run Script action",id:"execute-a-script-file-using-the-cli-for-microsoft-365-run-script-action",level:3},{value:"Reference",id:"reference",level:2},{value:"CLI for Microsoft 365 Login",id:"cli-for-microsoft-365-login-1",level:3},{value:"Inputs",id:"inputs",level:4},{value:"Microsoft 365 Deploy App",id:"microsoft-365-deploy-app",level:3},{value:"Inputs",id:"inputs-1",level:4},{value:"Output",id:"output",level:4},{value:"Microsoft 365 Run Script",id:"microsoft-365-run-script-1",level:3},{value:"Inputs",id:"inputs-2",level:4},{value:"Contributions and Issues",id:"contributions-and-issues",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"automate-your-cicd-workflow-using-cli-for-microsoft-365-github-actions"},"Automate your CI/CD workflow using CLI for Microsoft 365 GitHub Actions"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/features/actions"},"GitHub Actions")," help you automate your software development workflows in the same place you store code and collaborate on pull requests and issues. You can write individual tasks, called actions, and combine them to create a custom workflow."),(0,a.kt)("h2",{id:"actions"},"Actions"),(0,a.kt)("p",null,"We have built and published actions to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace?type=actions"},"GitHub Marketplace")," that will enable you to easily install and execute CLI for Microsoft 365 commands from within your own custom workflows."),(0,a.kt)("h3",{id:"cli-for-microsoft-365-login"},"CLI for Microsoft 365 Login"),(0,a.kt)("p",null,"This action performs two roles, firstly it installs the CLI for Microsoft 365 into your build host agent and secondly, it creates a connection to your Microsoft 365 tenant which can then be used by other actions."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This action is required to be executed in a step before any other CLI for Microsoft 365 actions")),(0,a.kt)("h3",{id:"cli-for-microsoft-365-deploy-app"},"CLI for Microsoft 365 Deploy App"),(0,a.kt)("p",null,"This action simplifies the installation and deployment of a SharePoint Framework app to either a tenant level or site collection level app catalog."),(0,a.kt)("h3",{id:"microsoft-365-run-script"},"Microsoft 365 Run Script"),(0,a.kt)("p",null,"This action provides the ability to execute an inline script or script file using either ",(0,a.kt)("inlineCode",{parentName:"p"},"bash")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"PowerShell")," as the executing shell."),(0,a.kt)("h2",{id:"tutorial"},"Tutorial"),(0,a.kt)("h3",{id:"creating-a-basic-workflow-which-authenticates-with-an-microsoft-365-tenant"},"Creating a basic workflow which authenticates with an Microsoft 365 tenant"),(0,a.kt)("p",null,"We are going to assume that you have a GitHub repository already created, which you are also the owner of."),(0,a.kt)("h4",{id:"create-secrets"},"Create secrets"),(0,a.kt)("p",null,"When connecting to any system or service, we need to make sure that the account details used to connect are kept in a safe and secure way. GitHub provides a way of storing these credentials in encrypted form in your repository, which can then be reused in your custom workflows."),(0,a.kt)("p",null,"First you will need to need to navigate, in your browser, to your repository on GitHub.com and go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings")," tab, from here choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Secrets")," item on the left hand menu."),(0,a.kt)("p",null,"You may have two options when registering secrets in order to log in to your tenant:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Using username / password (perfect to test your workflow, in a dev context, for personal usage) ==> ",(0,a.kt)("strong",{parentName:"li"},"delegated secrets"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"In that case, the CLI commands will run as if it was you (list item updates, site creation...)")))),(0,a.kt)("li",{parentName:"ul"},"Using Azure AD (AAD) application id / certificate (perfect in a production context, without creating any dependencies to an account) ==> ",(0,a.kt)("strong",{parentName:"li"},"application secrets"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Here, the CLI commands will run through an app, not a user"))))),(0,a.kt)("h5",{id:"delegated-secrets"},"Delegated secrets"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add new secret")," link, enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN_USERNAME")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," field and the username of the account that you are to use to connect to your Microsoft 365 tenant with, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"user@tenant.onmicrosoft.com"),". ",(0,a.kt)("em",{parentName:"p"},"Note: This account should not be protected with multi-factor authentication")),(0,a.kt)("p",null,"Repeat the above step to also store the account password which should be named ",(0,a.kt)("inlineCode",{parentName:"p"},"ADMIN_PASSWORD"),"."),(0,a.kt)("h5",{id:"application-secrets"},"Application secrets"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add new secret")," link, enter the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_ID")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," field and the (client) id of the AAD application to connect to your Microsoft 365 tenant with, e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"d355e6f0-0aec-4b1f-b458-7040f91bc297"),"."),(0,a.kt)("p",null,"Repeat the above step to also store the application's encoded certificate which should be named ",(0,a.kt)("inlineCode",{parentName:"p"},"CERTIFICATE_ENCODED"),". If your certificate is encrypted with a password, then repeat one last time the previous step with a secret called ",(0,a.kt)("inlineCode",{parentName:"p"},"CERTIFICATE_PASSWORD"),"."),(0,a.kt)("h4",{id:"setup-workflow"},"Setup workflow"),(0,a.kt)("p",null,"Now that we have secured the account credentials, we can start to create the workflow."),(0,a.kt)("p",null,"Select ",(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," tab and you will be presented with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Get started with GitHub Actions")," page. This will display a selection of templates to start your workflow from, however, for the purpose of this tutorial we will create a new workflow from scratch."),(0,a.kt)("p",null,"To do that, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Setup a workflow yourself")," button which is placed on the far right of the page."),(0,a.kt)("h4",{id:"update-the-build-definition-file"},"Update the build definition file"),(0,a.kt)("p",null,"You will be presented with a screen displaying a file editor which has the below ",(0,a.kt)("inlineCode",{parentName:"p"},"yaml"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"YAML")," file represents a custom workflow and is sometimes referred to as ",(0,a.kt)("inlineCode",{parentName:"p"},"Build Definition as Code"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"name: CI\n\non: [push]\n\njobs:\n  build:\n\n    runs-on: ubuntu-latest\n\n    steps:\n    - uses: actions/checkout@v1\n    - name: Run a one-line script\n      run: echo Hello, world!\n    - name: Run a multi-line script\n      run: |\n        echo Add other actions to build,\n        echo test, and deploy your project.\n")),(0,a.kt)("p",null,"The above configuration defines a simple workflow named ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," that is triggered on the ",(0,a.kt)("inlineCode",{parentName:"p"},"push")," of new code to the repository, it contains a single ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," that is executed on an ",(0,a.kt)("inlineCode",{parentName:"p"},"ubuntu")," hosted agent and has multiple steps that, execute a single line script and multi line script, both printing text to the logs."),(0,a.kt)("p",null,"We will update the initial configuration as shown below, replacing the existing steps with the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI for Microsoft 365 Login")," action instead."),(0,a.kt)("h5",{id:"login-with-delegated-secrets"},"Login with delegated secrets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: CI\n\n  on: [push]\n\n  jobs:\n    build:\n\n      runs-on: ubuntu-latest\n\n      steps:\n\n      - name: Login to tenant\n        uses: pnp/action-cli-login@v2.2.1\n        with:\n          ADMIN_USERNAME:  ${{ secrets.ADMIN_USERNAME }}\n          ADMIN_PASSWORD:  ${{ secrets.ADMIN_PASSWORD }}\n")),(0,a.kt)("h5",{id:"login-with-application-secrets"},"Login with application secrets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: CI\n\n  on: [push]\n\n  jobs:\n    build:\n\n      runs-on: ubuntu-latest\n\n      steps:\n\n      - name: Login to tenant\n        uses: pnp/action-cli-login@v2.2.1\n        with:\n          APP_ID: ${{ secrets.APP_ID }}\n          CERTIFICATE_ENCODED: ${{ secrets.CERTIFICATE_ENCODED }}\n          CERTIFICATE_PASSWORD: ${{ secrets.CERTIFICATE_PASSWORD }}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"uses")," property tells the build agent to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI for Microsoft 365")," GitHub Action for the step, this will automatically become available when the workflow is triggered, no installation is required."),(0,a.kt)("p",null,"The action accepts an admin username and password (or an application id / encoded certificate), which are used to authenticate with your Microsoft 365 tenant, these credentials are provided by an environment variable called ",(0,a.kt)("inlineCode",{parentName:"p"},"secrets")," which contains properties exposing the secured credentials that we saved earlier."),(0,a.kt)("p",null,"Lastly, we need to commit the ",(0,a.kt)("inlineCode",{parentName:"p"},"main.yaml")," file to the repository, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Start Commit")," button and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Commit new file"),". You may want enter a custom commit message at this point, however the default will be fine for this tutorial."),(0,a.kt)("h4",{id:"confirm-the-build-has-completed-successfully"},"Confirm the build has completed successfully"),(0,a.kt)("p",null,"As we setup the workflow to be triggered on the ",(0,a.kt)("inlineCode",{parentName:"p"},"push")," of new code to the repository, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," workflow is automatically run when we initially created the workflow in the repository."),(0,a.kt)("p",null,"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"Actions")," tab, this time you will be presented with a table that displays the ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," run either in progress or completed, click on the run called ",(0,a.kt)("inlineCode",{parentName:"p"},"CI")," in the table to view the workflow output logs."),(0,a.kt)("p",null,"You will see that all steps have a green tick, expanding the ",(0,a.kt)("inlineCode",{parentName:"p"},"Login tenant")," step will display further detail generated from the ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI for Microsoft 365 Login")," action, with the last log confirming that the login was successful.  "),(0,a.kt)("p",null,"Congratulations! You have just setup your first custom workflow in a GitHub repository and successfully logged into Microsoft 365 using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft 365 Login")," action."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CI Successful build",src:n(36335).Z,title:"CI Successful Build",width:"2560",height:"1440"})),(0,a.kt)("h4",{id:"specify-the-version-of-cli-for-microsoft-365"},"Specify the version of CLI for Microsoft 365"),(0,a.kt)("p",null,"Sometimes, you would like to use the next (beta) version or a previous one of the CLI (because of a bug that is currently being addressed or to leverage a new feature to come)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI for Microsoft 365 Login")," action provides an optional input to specify a version tag which can be ",(0,a.kt)("inlineCode",{parentName:"p"},"latest")," (default if not specified), ",(0,a.kt)("inlineCode",{parentName:"p"},"next")," or a specific one (",(0,a.kt)("inlineCode",{parentName:"p"},"5.9.0"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: CI\n\n  on: [push]\n\n  jobs:\n    build:\n\n      runs-on: ubuntu-latest\n\n      steps:\n\n      - name: Login to tenant\n        uses: pnp/action-cli-login@v2.2.1\n        with:\n          APP_ID: ${{ secrets.APP_ID }}\n          CERTIFICATE_ENCODED: ${{ secrets.CERTIFICATE_ENCODED }}\n          CERTIFICATE_PASSWORD: ${{ secrets.CERTIFICATE_PASSWORD }}\n          CLI_VERSION: next\n")),(0,a.kt)("h4",{id:"specify-the-tenant-to-connect-to"},"Specify the tenant to connect to"),(0,a.kt)("p",null,"Depending on the context, you could have to specify the tenant id if you have access to multiple tenants."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CLI for Microsoft 365 Login")," allows you to indicate the targeting tenant (default ",(0,a.kt)("inlineCode",{parentName:"p"},"common"),"). It can be ",(0,a.kt)("inlineCode",{parentName:"p"},"organization")," (if using an Azure AD app which is multitenant) or a tenant id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  name: CI\n\n  on: [push]\n\n  jobs:\n    build:\n\n      runs-on: ubuntu-latest\n\n      steps:\n\n      - name: Login to tenant\n        uses: pnp/action-cli-login@v2.2.1\n        with:\n          APP_ID: ${{ secrets.APP_ID }}\n          CERTIFICATE_ENCODED: ${{ secrets.CERTIFICATE_ENCODED }}\n          CERTIFICATE_PASSWORD: ${{ secrets.CERTIFICATE_PASSWORD }}\n          TENANT: 1e0e6964-032a-4e62-a8d7-4c6469d7554b\n")),(0,a.kt)("h2",{id:"how-to-guides"},"How-To Guides"),(0,a.kt)("p",null,"These guides presuppose some familiarity with using GitHub Actions and CLI for Microsoft 365."),(0,a.kt)("h3",{id:"deploy-an-app-using-the-cli-for-microsoft-365-deploy-app-action"},"Deploy an app using the CLI for Microsoft 365 Deploy App action"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," file within the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflow")," folder with the below build definition to deploy an app to a tenant level app catalog."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'name: SPFx CI/CD with CLI for Microsoft 365\n\non: [push]\n\njobs:\n  build:\n    ##\n    ## Build code omitted\n    ##\n\n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    strategy:\n      matrix:\n        node-version: [10.x]\n\n    steps:\n\n    ##\n    ## Code to get the package omitted\n    ##\n\n    - name: Login to tenant\n      uses: pnp/action-cli-login@v2.2.1\n      with:\n        APP_ID: ${{ secrets.APP_ID }}\n        CERTIFICATE_ENCODED: ${{ secrets.CERTIFICATE_ENCODED }}\n        CERTIFICATE_PASSWORD: ${{ secrets.CERTIFICATE_PASSWORD }}\n\n    - name: Deploy app to tenant app catalog\n      id: M365clideploy\n      uses: pnp/action-cli-deploy@v3.0.1\n      with:\n        APP_FILE_PATH: sharepoint/solution/spfx-m365-cli-action.sppkg\n        SKIP_FEATURE_DEPLOYMENT: true\n        OVERWRITE: true\n\n    - name: Get the id of the app deployed\n      run: echo "The id of the app deployed is ${{ steps.M365clideploy.outputs.APP_ID }}"\n')),(0,a.kt)("p",null,"Alternatively, you can deploy the app to a site collection based app catalog by using the below step in replacement of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deploy app to tenant app catalog")," step."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Deploy app to a site collection app catalog\n  id: M365clideploy\n  uses: pnp/action-cli-deploy@v3.0.1\n  with:\n    APP_FILE_PATH: sharepoint/solution/spfx-m365-cli-action.sppkg\n    SCOPE: sitecollection\n    SITE_COLLECTION_URL: https://contoso.sharepoint.com/sites/teamsite\n")),(0,a.kt)("h3",{id:"execute-an-inline-script-using-the-cli-for-microsoft-365-run-script-action"},"Execute an inline script using the CLI for Microsoft 365 Run Script action"),(0,a.kt)("p",null,"Add this step to a ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," build file contained within the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows")," folder to send an email from SharePoint to a user by executing the ",(0,a.kt)("inlineCode",{parentName:"p"},"spo mail send")," command as an inline script."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Send email\n      uses: pnp/action-cli-runscript@v2.0.1\n      with:\n        M365_CLI_SCRIPT: m365 spo mail send --webUrl https://contoso.sharepoint.com/sites/teamsite --to 'user@contoso.onmicrosoft.com' --subject 'Deployment done' --body '<h2>CLI for Microsoft 365</h2> <p>The deployment is complete.</p> <br/> Email sent via CLI for Microsoft 365 GitHub Action.'\n")),(0,a.kt)("h3",{id:"execute-a-script-file-using-the-cli-for-microsoft-365-run-script-action"},"Execute a script file using the CLI for Microsoft 365 Run Script action"),(0,a.kt)("p",null,"Add the respective script file to your repository and this step to a ",(0,a.kt)("inlineCode",{parentName:"p"},".yaml")," build file contained within the ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows")," folder to create lists by executing the commands contained within the script file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Create lists\n      uses: pnp/action-cli-runscript@v2.0.1\n      with:\n        M365_CLI_SCRIPT_PATH: ./script/lists.ps1 \n")),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("h3",{id:"cli-for-microsoft-365-login-1"},"CLI for Microsoft 365 Login"),(0,a.kt)("p",null,"View on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/cli-for-microsoft-365-login"},"GitHub Marketplace")),(0,a.kt)("h4",{id:"inputs"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ADMIN_USERNAME")),(0,a.kt)("td",{parentName:"tr",align:null},"The username of the account used to login"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional (but required if ",(0,a.kt)("inlineCode",{parentName:"td"},"authType")," is ",(0,a.kt)("inlineCode",{parentName:"td"},"password"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ADMIN_PASSWORD")),(0,a.kt)("td",{parentName:"tr",align:null},"The password of the account used to login"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional (but required if ",(0,a.kt)("inlineCode",{parentName:"td"},"authType")," is ",(0,a.kt)("inlineCode",{parentName:"td"},"password"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"APP_ID")),(0,a.kt)("td",{parentName:"tr",align:null},"App ID of the Azure AD application to use for certificate authentication"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional (but required if ",(0,a.kt)("inlineCode",{parentName:"td"},"authType")," is ",(0,a.kt)("inlineCode",{parentName:"td"},"certificate"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CERTIFICATE_ENCODED")),(0,a.kt)("td",{parentName:"tr",align:null},"Base64-encoded string with certificate private key"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional (but required if ",(0,a.kt)("inlineCode",{parentName:"td"},"authType")," is ",(0,a.kt)("inlineCode",{parentName:"td"},"certificate"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CERTIFICATE_PASSWORD")),(0,a.kt)("td",{parentName:"tr",align:null},"Password for the certificate"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"TENANT")),(0,a.kt)("td",{parentName:"tr",align:null},"ID of the tenant from which accounts should be able to authenticate"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CLI_VERSION")),(0,a.kt)("td",{parentName:"tr",align:null},"Accepts ",(0,a.kt)("inlineCode",{parentName:"td"},"latest"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"next")," or a specific version tag"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("h3",{id:"microsoft-365-deploy-app"},"Microsoft 365 Deploy App"),(0,a.kt)("p",null,"View on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/cli-for-microsoft-365-deploy-app"},"GitHub Marketplace")),(0,a.kt)("h4",{id:"inputs-1"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"APP_FILE_PATH")),(0,a.kt)("td",{parentName:"tr",align:null},"Relative path of the app in your repo"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SCOPE")),(0,a.kt)("td",{parentName:"tr",align:null},"Scope of the app catalog: ",(0,a.kt)("inlineCode",{parentName:"td"},"tenant,sitecollection"),". Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"tenant")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SITE_COLLECTION_URL")),(0,a.kt)("td",{parentName:"tr",align:null},"The URL of the site collection where the solution package will be added"),(0,a.kt)("td",{parentName:"tr",align:null},"Required if scope is set to ",(0,a.kt)("inlineCode",{parentName:"td"},"sitecollection"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"SKIP_FEATURE_DEPLOYMENT")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true,false")," If the app supports tenant-wide deployment, deploy it to the whole tenant. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"OVERWRITE")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true,false")," Set to overwrite the existing package file. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("h4",{id:"output"},"Output"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"APP_ID")," of the app that has been deployed."),(0,a.kt)("h3",{id:"microsoft-365-run-script-1"},"Microsoft 365 Run Script"),(0,a.kt)("p",null,"View on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/marketplace/actions/cli-for-microsoft-365-run-script"},"GitHub Marketplace")),(0,a.kt)("h4",{id:"inputs-2"},"Inputs"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"M365_CLI_SCRIPT_PATH")),(0,a.kt)("td",{parentName:"tr",align:null},"Relative path to the script"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"M365_CLI_SCRIPT")),(0,a.kt)("td",{parentName:"tr",align:null},"The script to run"),(0,a.kt)("td",{parentName:"tr",align:null},"Required")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"IS_POWERSHELL")),(0,a.kt)("td",{parentName:"tr",align:null},"Used only with ",(0,a.kt)("inlineCode",{parentName:"td"},"M365_CLI_SCRIPT"),". If ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"M365_CLI_SCRIPT")," will be passed as a PowerShell script, otherwise the assumption is ",(0,a.kt)("inlineCode",{parentName:"td"},"bash")," script. Default is ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"One of ",(0,a.kt)("inlineCode",{parentName:"p"},"M365_CLI_SCRIPT_PATH")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"M365_CLI_SCRIPT")," is mandatory, in case both are defined ",(0,a.kt)("inlineCode",{parentName:"p"},"M365_CLI_SCRIPT_PATH")," gets preference.")),(0,a.kt)("h2",{id:"contributions-and-issues"},"Contributions and Issues"),(0,a.kt)("p",null,"Due to the requirement that a GitHub action must be located within its own repository, these actions are not managed within the main CLI for Microsoft 365 repository."),(0,a.kt)("p",null,"If you have any ideas or issues regarding any of the actions, please raise them within the issue list of their respective repositories."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pnp/action-cli-login/issues"},"CLI for Microsoft 365 Login Issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pnp/action-cli-deploy/issues"},"CLI for Microsoft 365 Deploy Issues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/pnp/action-cli-runscript/issues"},"CLI for Microsoft 365 Run Script Issues"))))}d.isMDXComponent=!0},36335:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/github-actions-tutorial-success-2d9f625dba2c93b8c7d8e5513de1908d.png"}}]);