"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[15839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=o,k=m["".concat(i,".").concat(u)]||m[u]||c[u]||r;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>l});var n=a(87462),o=(a(67294),a(3905));const r={toc:[]},s="wrapper";function l(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,n.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,o.kt)("code",{parentName:"p"},"options"),", ",(0,o.kt)("code",{parentName:"p"},"examples"),", ",(0,o.kt)("code",{parentName:"p"},"remarks"),", ",(0,o.kt)("code",{parentName:"p"},"response"),", ",(0,o.kt)("code",{parentName:"p"},"full"),". Default is ",(0,o.kt)("code",{parentName:"p"},"full"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--query [query]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,o.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Output type. ",(0,o.kt)("code",{parentName:"p"},"json"),", ",(0,o.kt)("code",{parentName:"p"},"text"),", ",(0,o.kt)("code",{parentName:"p"},"csv"),", ",(0,o.kt)("code",{parentName:"p"},"md"),". Default ",(0,o.kt)("code",{parentName:"p"},"json"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--verbose"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--debug"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}l.isMDXComponent=!0},62885:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905)),r=a(26054);const s={},l="outlook mail send",i={unversionedId:"cmd/outlook/mail/mail-send",id:"cmd/outlook/mail/mail-send",title:"outlook mail send",description:"Sends an email",source:"@site/docs/cmd/outlook/mail/mail-send.mdx",sourceDirName:"cmd/outlook/mail",slug:"/cmd/outlook/mail/mail-send",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/mail/mail-send",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/mail/mail-send.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"onenote page list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/page/page-list"},next:{title:"outlook message get",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/message/message-get"}},p={},d=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Attachments",id:"attachments",level:3},{value:"If you are connected using app only authentication",id:"if-you-are-connected-using-app-only-authentication",level:3},{value:"If you are connected with a regular user account",id:"if-you-are-connected-with-a-regular-user-account",level:3},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outlook-mail-send"},"outlook mail send"),(0,o.kt)("p",null,"Sends an email"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook mail send [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("dl",null,(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-s, --subject <subject>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Email subject.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-t, --to <to>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Comma-separated list of emails to send the message to.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--cc [cc]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Comma-separated list of CC recipients for the message.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--bcc [bcc]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Comma-separated list of BCC recipients for the message.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--sender [sender]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Optional upn or user id to specify what account to send the message from. Also see the remarks section.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"-m, --mailbox [mailbox]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Specify this option to send the email on behalf of another mailbox, for example a shared mailbox, group or distribution list. The sender needs to be a delegate on the specified mailbox. Also see the remarks section.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--bodyContents <bodyContents>"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"String containing the body of the email to send.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--bodyContentType [bodyContentType]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Type of the body content. Available options: ",(0,o.kt)("code",{parentName:"p"},"Text"),", ",(0,o.kt)("code",{parentName:"p"},"HTML"),". Default is ",(0,o.kt)("code",{parentName:"p"},"Text"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--importance [importance]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"The importance of the message. Available options: ",(0,o.kt)("code",{parentName:"p"},"low"),", ",(0,o.kt)("code",{parentName:"p"},"normal"),", or ",(0,o.kt)("code",{parentName:"p"},"high"),". Default is ",(0,o.kt)("code",{parentName:"p"},"normal"),".")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--attachment [attachment]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Path to the file that will be added as attachment to the email. This option can be used multiple times to attach multiple attachments.")),(0,o.kt)("dt",{parentName:"dl"},(0,o.kt)("p",{parentName:"dt"},(0,o.kt)("code",{parentName:"p"},"--saveToSentItems [saveToSentItems]"))),(0,o.kt)("dd",{parentName:"dl"},(0,o.kt)("p",{parentName:"dd"},"Save email in the sent items folder. Default ",(0,o.kt)("code",{parentName:"p"},"true"),"."))),(0,o.kt)(r.ZP,{mdxType:"Global"}),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("h3",{id:"attachments"},"Attachments"),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"attachment")," option, note that the total size of all attachment files cannot exceed 3 MB."),(0,o.kt)("h3",{id:"if-you-are-connected-using-app-only-authentication"},"If you are connected using app only authentication"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always specify a user id or upn in the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," option. The email will be sent as if it came from the specified user, and can optionally be saved in the sent folder of that user account."),(0,o.kt)("li",{parentName:"ul"},"You can optionally also specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--mailbox")," option to send mail on behalf of a shared mailbox, group or distribution list. The account used in the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," option, needs to have 'Send on behalf of' permissions on the mailbox in question.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You need ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail.Send")," application permissions on the Microsoft Graph to be able to send mails using an application identity. ")),(0,o.kt)("h3",{id:"if-you-are-connected-with-a-regular-user-account"},"If you are connected with a regular user account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--mailbox")," option if you want to send an email on behalf of another mailbox. This can be a shared mailbox, group or distribution list. It will be visible in the email that the email was sent by you. You need to be assigned ",(0,o.kt)("inlineCode",{parentName:"li"},"Send on behalf of")," permissions on the mailbox in question.  "),(0,o.kt)("li",{parentName:"ul"},"You can specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," option if you want to send an email as if you were the other user.\nThe sent email can optionally be saved in the sent folder of that user account. You'll need ",(0,o.kt)("inlineCode",{parentName:"li"},"Read and manage (Full Access)")," permissions on the mailbox of the other user. You can combine the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--mailbox")," options to let the other user send a mail on behalf of the specified mailbox.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You need at least ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail.Send")," delegated permissions on the Microsoft Graph to be able to send emails. When specifying another user as sender, you'll need ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail.Send.Shared")," permissions.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Send a text email to the specified email address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site"\n')),(0,o.kt)("p",null,"Send an HTML email to the specified email addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to "chris@contoso.com,brian@contoso.com" --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the <a href=\'https://contoso.sharepoint.com/sites/marketing\'>team site</a>" --bodyContentType HTML\n')),(0,o.kt)("p",null,"Send an HTML email to the specified email address loading email contents from a file on disk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents @email.html --bodyContentType HTML\n')),(0,o.kt)("p",null,"Send a text email to the specified email address. Don't store the email in sent items"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --saveToSentItems false\n')),(0,o.kt)("p",null,"Send an email on behalf of a shared mailbox using the signed in user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --mailbox sales@contoso.com\n')),(0,o.kt)("p",null,"Send an email as another user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --sender svc_project@contoso.com\n')),(0,o.kt)("p",null,"Send an email as another user, on behalf of a shared mailbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --sender svc_project@contoso.com --mailbox sales@contoso.com\n')),(0,o.kt)("p",null,"Send an email with cc and bcc recipients marked as important"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --cc claire@contoso.com --bcc randy@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --importance high\n')),(0,o.kt)("p",null,"Send an email with multiple attachments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "Monthly reports" --bodyContents "Here are the reports of this month." --attachment "C:/Reports/File1.jpg" --attachment "C:/Reports/File2.docx" --attachment "C:/Reports/File3.xlsx"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);