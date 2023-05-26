"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[95414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=m(a),u=n,k=l["".concat(s,".").concat(u)]||l[u]||i[u]||p;return a?r.createElement(k,d(d({ref:t},c),{},{components:a})):r.createElement(k,d({ref:t},c))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,d=new Array(p);d[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[l]="string"==typeof e?e:n,d[1]=o;for(var m=2;m<p;m++)d[m]=a[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26054:(e,t,a)=>{a.d(t,{ZP:()=>o});var r=a(87462),n=(a(67294),a(3905));const p={toc:[]},d="wrapper";function o(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,n.kt)("code",{parentName:"p"},"options"),", ",(0,n.kt)("code",{parentName:"p"},"examples"),", ",(0,n.kt)("code",{parentName:"p"},"remarks"),", ",(0,n.kt)("code",{parentName:"p"},"response"),", ",(0,n.kt)("code",{parentName:"p"},"full"),". Default is ",(0,n.kt)("code",{parentName:"p"},"full"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--query [query]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,n.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Output type. ",(0,n.kt)("code",{parentName:"p"},"json"),", ",(0,n.kt)("code",{parentName:"p"},"text"),", ",(0,n.kt)("code",{parentName:"p"},"csv"),", ",(0,n.kt)("code",{parentName:"p"},"md"),". Default ",(0,n.kt)("code",{parentName:"p"},"json"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--verbose"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--debug"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}o.isMDXComponent=!0},13637:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905)),p=a(26054);const d={},o="aad user set",s={unversionedId:"cmd/aad/user/user-set",id:"cmd/aad/user/user-set",title:"aad user set",description:"Updates information of the specified user",source:"@site/docs/cmd/aad/user/user-set.mdx",sourceDirName:"cmd/aad/user",slug:"/cmd/aad/user/user-set",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/aad/user/user-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"aad user remove",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-remove"},next:{title:"aad user guest add",permalink:"/cli-microsoft365-docusaurus/cmd/aad/user/user-guest-add"}},m={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],l={toc:c},i="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(i,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aad-user-set"},"aad user set"),(0,n.kt)("p",null,"Updates information of the specified user"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user set [options]\n")),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("dl",null,(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-i, --objectId [objectId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The object ID of the user to update. Specify ",(0,n.kt)("code",{parentName:"p"},"objectId")," or ",(0,n.kt)("code",{parentName:"p"},"userPrincipalName")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"-n, --userPrincipalName [userPrincipalName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"User principal name of the user to update. Specify ",(0,n.kt)("code",{parentName:"p"},"objectId")," or ",(0,n.kt)("code",{parentName:"p"},"userPrincipalName")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--accountEnabled [accountEnabled]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Boolean value specifying whether the account is enabled. Valid values are ",(0,n.kt)("code",{parentName:"p"},"true")," or ",(0,n.kt)("code",{parentName:"p"},"false"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--resetPassword"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"If specified, the password of the user will be reset. This will make the parameter ",(0,n.kt)("code",{parentName:"p"},"newPassword")," required.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--forceChangePasswordNextSignIn"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"If specified, the user will have to change his password the next time they log in. Can only be set in combination with ",(0,n.kt)("code",{parentName:"p"},"resetPassword"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--forceChangePasswordNextSignInWithMfa"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Whether the user should change his/her password on the next login and setup MFA. Can only be set in combination with ",(0,n.kt)("code",{parentName:"p"},"resetPassword"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--currentPassword [currentPassword]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Current password of the user that is signed in. If this parameter is set, ",(0,n.kt)("code",{parentName:"p"},"newPassword")," is mandatory. Can't be combined with ",(0,n.kt)("code",{parentName:"p"},"resetPassword"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--newPassword [newPassword]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"New password to be set. Must be set when specifying either ",(0,n.kt)("code",{parentName:"p"},"resetPassword")," or ",(0,n.kt)("code",{parentName:"p"},"currentPassword"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--displayName [displayName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name to display in the address book for the user.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--firstName [firstName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The given name (first name) of the user. Maximum length is 64 characters.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--lastName [lastName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The user's surname (family name or last name). Maximum length is 64 characters.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--usageLocation [usageLocation]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"A two letter ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/partner-center/commercial-marketplace-co-sell-location-codes#country-and-region-codes"},"country code")," (ISO standard 3166). Required for users that will be assigned licenses.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--officeLocation [officeLocation]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The office location in the user's place of business.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--jobTitle [jobTitle]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The user's job title. Maximum length is 128 characters.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--companyName [companyName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The company name which the user is associated. The maximum length is 64 characters.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--department [department]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The name for the department in which the user works. Maximum length is 64 characters.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--preferredLanguage [preferredLanguage]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"The preferred language for the user. Should follow ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/openspecs/office_standards/ms-oe376/6c085406-a698-4e12-9d4d-c3b0ee3dbc4a"},"ISO 639-1 Code"),". Example: ",(0,n.kt)("code",{parentName:"p"},"en-US"),".")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--managerUserId [managerUserId]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"User ID of the user's manager. Specify ",(0,n.kt)("code",{parentName:"p"},"managerUserId"),", ",(0,n.kt)("code",{parentName:"p"},"managerUserName")," or ",(0,n.kt)("code",{parentName:"p"},"removeManager")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--managerUserName [managerUserName]"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"User principal name of the manager. Specify ",(0,n.kt)("code",{parentName:"p"},"managerUserId"),", ",(0,n.kt)("code",{parentName:"p"},"managerUserName")," or ",(0,n.kt)("code",{parentName:"p"},"removeManager")," but not both.")),(0,n.kt)("dt",{parentName:"dl"},(0,n.kt)("p",{parentName:"dt"},(0,n.kt)("code",{parentName:"p"},"--removeManager"))),(0,n.kt)("dd",{parentName:"dl"},(0,n.kt)("p",{parentName:"dd"},"Remove currently set manager. The user will have no manager when this flag is set. Specify ",(0,n.kt)("code",{parentName:"p"},"managerUserId"),", ",(0,n.kt)("code",{parentName:"p"},"managerUserName")," or ",(0,n.kt)("code",{parentName:"p"},"removeManager")," but not both."))),(0,n.kt)(p.ZP,{mdxType:"Global"}),(0,n.kt)("h2",{id:"remarks"},"Remarks"),(0,n.kt)("p",null,"This command allows using unknown options. For a comprehensive list of user properties, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/graph/api/resources/user?view=graph-rest-1.0#properties"},"Graph documentation page"),"."),(0,n.kt)("p",null,"If the user with the specified ID or username doesn't exist, or if the specified option is not found, you will receive a ",(0,n.kt)("inlineCode",{parentName:"p"},"Resource 'xyz' does not exist or one of its queried reference-property objects are not present.")," error."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("p",null,"Update specific property ",(0,n.kt)("em",{parentName:"p"},"department")," of user with id ",(0,n.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user set --objectId 1caf7dcd-7e83-4c3a-94f7-932a1299c844 --Department IT\n")),(0,n.kt)("p",null,"Update multiple properties of user by name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user set --userPrincipalName steve@contoso.onmicrosoft.com --firstName John --lastName Doe --jobTitle "Sales Manager" --companyName Contoso --department Sales --officeLocation "New York"\n')),(0,n.kt)("p",null,"Enable user with id ",(0,n.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user set --objectId 1caf7dcd-7e83-4c3a-94f7-932a1299c844 --accountEnabled true\n")),(0,n.kt)("p",null,"Disable user with id ",(0,n.kt)("em",{parentName:"p"},"1caf7dcd-7e83-4c3a-94f7-932a1299c844")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user set --objectId 1caf7dcd-7e83-4c3a-94f7-932a1299c844 --accountEnabled false\n")),(0,n.kt)("p",null,"Reset password of a given user by userPrincipalName and require the user to change the password on the next sign in"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user set --userPrincipalName steve@contoso.onmicrosoft.com --resetPassword --newPassword 6NLUId79Lc24 --forceChangePasswordNextSignIn\n")),(0,n.kt)("p",null,"Change password of the currently logged in user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"m365 aad user set --objectId 1caf7dcd-7e83-4c3a-94f7-932a1299c844 --currentPassword SLBF5gnRtyYc --newPassword 6NLUId79Lc24\n")),(0,n.kt)("p",null,"Updates a user with a manager"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user set --displayName "John Doe" --userName "john.doe@contoso.com" --managerUserName "adele@contoso.com"\n')),(0,n.kt)("p",null,"Updates a user by removing its manager"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'m365 aad user set --userName "john.doe@contoso.com" --removeManager\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("p",null,"The command won't return a response on success."))}u.isMDXComponent=!0}}]);