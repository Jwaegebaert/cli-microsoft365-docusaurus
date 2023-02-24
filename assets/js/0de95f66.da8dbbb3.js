"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[17694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),m=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),u=o,h=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const i={},l="outlook mail send",s={unversionedId:"cmd/outlook/mail/mail-send",id:"cmd/outlook/mail/mail-send",title:"outlook mail send",description:"Sends an email",source:"@site/docs/cmd/outlook/mail/mail-send.md",sourceDirName:"cmd/outlook/mail",slug:"/cmd/outlook/mail/mail-send",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/mail/mail-send",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/outlook/mail/mail-send.md",tags:[],version:"current",lastUpdatedAt:1667081596,formattedLastUpdatedAt:"Oct 29, 2022",frontMatter:{},sidebar:"commands",previous:{title:"onenote page list",permalink:"/cli-microsoft365-docusaurus/cmd/onenote/page/page-list"},next:{title:"outlook message get",permalink:"/cli-microsoft365-docusaurus/cmd/outlook/message/message-get"}},r={},m=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Attachments",id:"attachments",level:3},{value:"If you are connected using app only authentication",id:"if-you-are-connected-using-app-only-authentication",level:3},{value:"If you are connected with a regular user account",id:"if-you-are-connected-with-a-regular-user-account",level:3},{value:"Examples",id:"examples",level:2}],c={toc:m},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outlook-mail-send"},"outlook mail send"),(0,o.kt)("p",null,"Sends an email"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"m365 outlook mail send [options]\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-s, --subject <subject>"),"\n: Email subject"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-t, --to <to>"),"\n: Comma-separated list of emails to send the message to."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--cc [cc]"),"\n: Comma-separated list of CC recipients for the message."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--bcc [bcc]"),"\n: Comma-separated list of BCC recipients for the message."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--sender [sender]"),"\n: Optional upn or user id to specify what account to send the message from. Also see the remarks section."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-m, --mailbox [mailbox]"),"\n: Specify this option to send the email on behalf of another mailbox, for example a shared mailbox, group or distribution list. The sender needs to be a delegate on the specified mailbox. Also see the remarks section."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--bodyContents <bodyContents>"),"\n: String containing the body of the email to send."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--bodyContentType [bodyContentType]"),"\n: Type of the body content. Available options: ",(0,o.kt)("inlineCode",{parentName:"p"},"Text,HTML"),". Default ",(0,o.kt)("inlineCode",{parentName:"p"},"Text"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--importance [importance]"),"\n: The importance of the message. Available options: ",(0,o.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"normal")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"high"),". Default is ",(0,o.kt)("inlineCode",{parentName:"p"},"normal"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--attachment [attachment]"),"\n: Path to the file that will be added as attachment to the email. This option can be used multiple times to attach multiple attachments."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--saveToSentItems [saveToSentItems]"),"\n: Save email in the sent items folder. Default ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("h3",{id:"attachments"},"Attachments"),(0,o.kt)("p",null,"When using the ",(0,o.kt)("inlineCode",{parentName:"p"},"attachment")," option, note that the total size of all attachment files cannot exceed 3 MB."),(0,o.kt)("h3",{id:"if-you-are-connected-using-app-only-authentication"},"If you are connected using app only authentication"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Always specify a user id or upn in the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," option. The email will be sent as if it came from the specified user, and can optionally be saved in the sent folder of that user account."),(0,o.kt)("li",{parentName:"ul"},"You can optionally also specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--mailbox")," option to send mail on behalf of a shared mailbox, group or distribution list. The account used in the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," option, needs to have 'Send on behalf of' permissions on the mailbox in question.")),(0,o.kt)("p",null,"!!! important\nYou need ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail.Send")," application permissions on the Microsoft Graph to be able to send mails using an application identity. "),(0,o.kt)("h3",{id:"if-you-are-connected-with-a-regular-user-account"},"If you are connected with a regular user account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--mailbox")," option if you want to send an email on behalf of another mailbox. This can be a shared mailbox, group or distribution list. It will be visible in the email that the email was sent by you. You need to be assigned ",(0,o.kt)("inlineCode",{parentName:"li"},"Send on behalf of")," permissions on the mailbox in question.  "),(0,o.kt)("li",{parentName:"ul"},"You can specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," option if you want to send an email as if you were the other user.\nThe sent email can optionally be saved in the sent folder of that user account. You'll need ",(0,o.kt)("inlineCode",{parentName:"li"},"Read and manage (Full Access)")," permissions on the mailbox of the other user. You can combine the ",(0,o.kt)("inlineCode",{parentName:"li"},"--sender")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"--mailbox")," options to let the other user send a mail on behalf of the specified mailbox.")),(0,o.kt)("p",null,"!!! important\nYou need at least ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail.Send")," delegated permissions on the Microsoft Graph to be able to send emails. When specifying another user as sender, you'll need ",(0,o.kt)("inlineCode",{parentName:"p"},"Mail.Send.Shared")," permissions."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Send a text email to the specified email address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site"\n')),(0,o.kt)("p",null,"Send an HTML email to the specified email addresses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to "chris@contoso.com,brian@contoso.com" --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the <a href=\'https://contoso.sharepoint.com/sites/marketing\'>team site</a>" --bodyContentType HTML\n')),(0,o.kt)("p",null,"Send an HTML email to the specified email address loading email contents from a file on disk"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents @email.html --bodyContentType HTML\n')),(0,o.kt)("p",null,"Send a text email to the specified email address. Don't store the email in sent items"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --saveToSentItems false\n')),(0,o.kt)("p",null,"Send an email on behalf of a shared mailbox using the signed in user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --mailbox sales@contoso.com\n')),(0,o.kt)("p",null,"Send an email as another user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --sender svc_project@contoso.com\n')),(0,o.kt)("p",null,"Send an email as another user, on behalf of a shared mailbox"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --sender svc_project@contoso.com --mailbox sales@contoso.com\n')),(0,o.kt)("p",null,"Send an email with cc and bcc recipients marked as important"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --cc claire@contoso.com --bcc randy@contoso.com --subject "DG2000 Data Sheets" --bodyContents "The latest data sheets are in the team site" --importance high\n')),(0,o.kt)("p",null,"Send an email with multiple attachments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'m365 outlook mail send --to chris@contoso.com --subject "Monthly reports" --bodyContents "Here are the reports of this month." --attachment "C:/Reports/File1.jpg" --attachment "C:/Reports/File2.docx" --attachment "C:/Reports/File3.xlsx"\n')))}d.isMDXComponent=!0}}]);