"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[12717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var a=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,p=function(e,t){if(null==e)return{};var r,a,p={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},i="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,m=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),i=s(r),u=p,k=i["".concat(m,".").concat(u)]||i[u]||c[u]||o;return r?a.createElement(k,n(n({ref:t},l),{},{components:r})):a.createElement(k,n({ref:t},l))}));function k(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,n=new Array(o);n[0]=u;var d={};for(var m in t)hasOwnProperty.call(t,m)&&(d[m]=t[m]);d.originalType=e,d[i]="string"==typeof e?e:p,n[1]=d;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26054:(e,t,r)=>{r.d(t,{ZP:()=>d});var a=r(87462),p=(r(67294),r(3905));const o={toc:[]},n="wrapper";function d(e){let{components:t,...r}=e;return(0,p.kt)(n,(0,a.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-h, --help [help]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output usage information. Optionally, specify which section of command's help you want to see. Allowed values are ",(0,p.kt)("code",{parentName:"p"},"options"),", ",(0,p.kt)("code",{parentName:"p"},"examples"),", ",(0,p.kt)("code",{parentName:"p"},"remarks"),", ",(0,p.kt)("code",{parentName:"p"},"response"),", ",(0,p.kt)("code",{parentName:"p"},"full"),". Default is ",(0,p.kt)("code",{parentName:"p"},"full"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--query [query]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"JMESPath query string. See ",(0,p.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"http://jmespath.org/")," for more information and examples.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-o, --output [output]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Output type. ",(0,p.kt)("code",{parentName:"p"},"json"),", ",(0,p.kt)("code",{parentName:"p"},"text"),", ",(0,p.kt)("code",{parentName:"p"},"csv"),", ",(0,p.kt)("code",{parentName:"p"},"md"),". Default ",(0,p.kt)("code",{parentName:"p"},"json"),".")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--verbose"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with verbose logging.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--debug"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Runs command with debug logging."))))}d.isMDXComponent=!0},25431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>u,frontMatter:()=>n,metadata:()=>m,toc:()=>l});var a=r(87462),p=(r(67294),r(3905)),o=r(26054);const n={},d="spo group set",m={unversionedId:"cmd/spo/group/group-set",id:"cmd/spo/group/group-set",title:"spo group set",description:"Updates a group in the specified site",source:"@site/docs/cmd/spo/group/group-set.mdx",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-set",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-set.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group remove",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-remove"},next:{title:"spo group member add",permalink:"/cli-microsoft365-docusaurus/cmd/spo/group/group-member-add"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],i={toc:l},c="wrapper";function u(e){let{components:t,...r}=e;return(0,p.kt)(c,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"spo-group-set"},"spo group set"),(0,p.kt)("p",null,"Updates a group in the specified site"),(0,p.kt)("h2",{id:"usage"},"Usage"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group set [options]\n")),(0,p.kt)("h2",{id:"options"},"Options"),(0,p.kt)("dl",null,(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-u, --webUrl <webUrl>"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"URL of the site where the group is located.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-i, --id [id]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"ID of the group to update. Specify either ",(0,p.kt)("code",{parentName:"p"},"id")," or ",(0,p.kt)("code",{parentName:"p"},"name")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"-n, --name [name]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Name of the group. Specify either ",(0,p.kt)("code",{parentName:"p"},"id")," or ",(0,p.kt)("code",{parentName:"p"},"name")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--newName [newName]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"New name for the group.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--description [description]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"The description for the group.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--allowMembersEditMembership [allowMembersEditMembership]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Who can edit the membership of the group? When ",(0,p.kt)("code",{parentName:"p"},"true")," members can edit membership, otherwise only owners can do this.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--onlyAllowMembersViewMembership [onlyAllowMembersViewMembership]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Who can view the membership of the group? When ",(0,p.kt)("code",{parentName:"p"},"true")," only group members can view the membership, otherwise everyone can.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--allowRequestToJoinLeave [allowRequestToJoinLeave]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Specify whether to allow users to request membership in this group and allow users to request to leave the group.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--autoAcceptRequestToJoinLeave [autoAcceptRequestToJoinLeave]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"If auto-accept is enabled, users will automatically be added or removed when they make a request.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--requestToJoinLeaveEmailSetting [requestToJoinLeaveEmailSetting]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"All membership requests will be sent to the email address specified.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--ownerEmail [ownerEmail]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Set user with this email as owner of the group. Specify either ",(0,p.kt)("code",{parentName:"p"},"ownerEmail")," or ",(0,p.kt)("code",{parentName:"p"},"ownerUserName")," but not both.")),(0,p.kt)("dt",{parentName:"dl"},(0,p.kt)("p",{parentName:"dt"},(0,p.kt)("code",{parentName:"p"},"--ownerUserName [ownerUserName]"))),(0,p.kt)("dd",{parentName:"dl"},(0,p.kt)("p",{parentName:"dd"},"Set user with this login name as owner of the group. Specify either ",(0,p.kt)("code",{parentName:"p"},"ownerEmail")," or ",(0,p.kt)("code",{parentName:"p"},"ownerUserName")," but not both."))),(0,p.kt)(o.ZP,{mdxType:"Global"}),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("p",null,"Update group title and description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group set --webUrl https://contoso.sharepoint.com/sites/project-x --id 18 --newTitle "Project leaders" --description "This group contains all project leaders"\n')),(0,p.kt)("p",null,"Update group with membership requests"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group set --webUrl https://contoso.sharepoint.com/sites/project-x --title "Project leaders" --allowRequestToJoinLeave true --requestToJoinLeaveEmailSetting john.doe@contoso.com\n')),(0,p.kt)("p",null,"Sets a specified user as group owner"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group set --webUrl https://contoso.sharepoint.com/sites/project-x --id 18 --ownerEmail john.doe@contoso.com\n")))}u.isMDXComponent=!0}}]);