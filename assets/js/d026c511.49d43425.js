"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||p;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<p;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const p={},a="spo group set",i={unversionedId:"cmd/spo/group/group-set",id:"cmd/spo/group/group-set",title:"spo group set",description:"Updates a group in the specified site",source:"@site/docs/cmd/spo/group/group-set.md",sourceDirName:"cmd/spo/group",slug:"/cmd/spo/group/group-set",permalink:"/cmd/spo/group/group-set",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/spo/group/group-set.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"spo group remove",permalink:"/cmd/spo/group/group-remove"},next:{title:"spo hidedefaultthemes get",permalink:"/cmd/spo/hidedefaultthemes/hidedefaultthemes-get"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2}],u={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"spo-group-set"},"spo group set"),(0,r.kt)("p",null,"Updates a group in the specified site"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group set [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-u, --webUrl <webUrl>"),"\n: URL of the site where the group is located."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id [id]"),"\n: ID of the group to update. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-n, --name [name]"),"\n: Name of the group. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--newName [newName]"),"\n: New name for the group."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--description [description]"),"\n: The description for the group."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowMembersEditMembership [allowMembersEditMembership]"),"\n: Who can edit the membership of the group? When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," members can edit membership, otherwise only owners can do this."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--onlyAllowMembersViewMembership [onlyAllowMembersViewMembership]"),"\n: Who can view the membership of the group? When ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," only group members can view the membership, otherwise everyone can."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--allowRequestToJoinLeave [allowRequestToJoinLeave]"),"\n: Specify whether to allow users to request membership in this group and allow users to request to leave the group."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--autoAcceptRequestToJoinLeave [autoAcceptRequestToJoinLeave]"),"\n: If auto-accept is enabled, users will automatically be added or removed when they make a request."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--requestToJoinLeaveEmailSetting [requestToJoinLeaveEmailSetting]"),"\n: All membership requests will be sent to the email address specified."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerEmail [ownerEmail]"),"\n: Set user with this email as owner of the group. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerEmail")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerUserName")," but not both."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--ownerUserName [ownerUserName]"),"\n: Set user with this login name as owner of the group. Specify either ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerEmail")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ownerUserName")," but not both."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Update group title and description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group set --webUrl https://contoso.sharepoint.com/sites/project-x --id 18 --newTitle "Project leaders" --description "This group contains all project leaders"\n')),(0,r.kt)("p",null,"Update group with membership requests"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'m365 spo group set --webUrl https://contoso.sharepoint.com/sites/project-x --title "Project leaders" --allowRequestToJoinLeave true --requestToJoinLeaveEmailSetting john.doe@contoso.com\n')),(0,r.kt)("p",null,"Sets a specified user as group owner"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 spo group set --webUrl https://contoso.sharepoint.com/sites/project-x --id 18 --ownerEmail john.doe@contoso.com\n")))}m.isMDXComponent=!0}}]);