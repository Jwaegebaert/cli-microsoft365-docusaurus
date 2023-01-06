"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94658],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61918:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:0},i="request",l={unversionedId:"cmd/request",id:"cmd/request",title:"request",description:"Executes the specified web request using CLI for Microsoft 365",source:"@site/docs/cmd/request.md",sourceDirName:"cmd",slug:"/cmd/request",permalink:"/cli-microsoft365-docusaurus/cmd/request",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/request.md",tags:[],version:"current",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"commands",previous:{title:"logout",permalink:"/cli-microsoft365-docusaurus/cmd/logout"},next:{title:"status",permalink:"/cli-microsoft365-docusaurus/cmd/status"}},s={},p=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request"},"request"),(0,o.kt)("p",null,"Executes the specified web request using CLI for Microsoft 365"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 request [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-u, --url <url>"),"\n: The request URL."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-m, --method [method]"),"\n: The HTTP request method. Accepted values are ",(0,o.kt)("inlineCode",{parentName:"p"},"get, post, put, patch, delete, head, options"),". The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-r, --resource [resource]"),"\n: The resource uri for which the CLI should acquire a token from AAD in order to access\nthe service."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-b, --body [body]"),"\n: The request body. Optionally use ",(0,o.kt)("inlineCode",{parentName:"p"},"@example.json")," to load the body from a file."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-p, --filePath [filePath]"),"\n: The file path to save the response to. This option can be used when downloading files."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"When executing a request, CLI will take care of the very basic configuration, and you'll need to specify all additional information, such as headers, method and body. CLI will take care for you of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"applying compression and handling throttling,"),(0,o.kt)("li",{parentName:"ul"},"setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"accept")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json")," if you don't specify it yourself,"),(0,o.kt)("li",{parentName:"ul"},"setting the ",(0,o.kt)("inlineCode",{parentName:"li"},"authorization")," header to the bearer token obtained for the resource determined from the request URL")),(0,o.kt)("p",null,"If you specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," option, the CLI will try to retrieve a valid token for the resource instead of determining the resource based on the url. The value doesn't have to be a URL. It can be also a URI like ",(0,o.kt)("inlineCode",{parentName:"p"},"app://<guid>"),"."),(0,o.kt)("p",null,"Specify additional headers by typing them as options, for example: ",(0,o.kt)("inlineCode",{parentName:"p"},'--content-type "application/json"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'--if-match "*"'),", ",(0,o.kt)("inlineCode",{parentName:"p"},'--x-requestdigest "somedigest"'),"."),(0,o.kt)("p",null,"!!! important\nWhen building the request, depending on the shell you use, you might need to escape all ",(0,o.kt)("inlineCode",{parentName:"p"},"$")," characters in the URL, request headers, and the body. If you don't do it, the shell will treat it as a variable and will remove the following word from the request, breaking the request."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Call the SharePoint Rest API using a GET request with a constructed URL containing expands, filters and selects."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 request --url "https://contoso.sharepoint.com/sites/project-x/_api/web/siteusers?\\$filter=IsShareByEmailGuestUser eq true&\\$expand=Groups&\\$select=Title,LoginName,Email,Groups/LoginName" --accept "application/json;odata=nometadata"\n')),(0,o.kt)("p",null,"Call the Microsoft Graph beta endpoint using a GET request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 request --url "https://graph.microsoft.com/beta/me"\n')),(0,o.kt)("p",null,"Call the SharePoint API to retrieve a form digest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 request --method post --url "https://contoso.sharepoint.com/sites/project-x/_api/contextinfo"\n')),(0,o.kt)("p",null,"Call the SharePoint API to update a site title."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 request --method post --url "https://contoso.sharepoint.com/sites/project-x/_api/web" --body \'{ "Title": "New title" }\' --content-type "application/json" --x-http-method "PATCH"\n')),(0,o.kt)("p",null,"Call the Microsoft Graph to get a profile photo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 request --url "https://graph.microsoft.com/beta/me/photo/\\$value" --filePath ./profile-pic.jpg\n')))}c.isMDXComponent=!0}}]);