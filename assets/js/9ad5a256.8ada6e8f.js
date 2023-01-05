"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=r,g=u["".concat(l,".").concat(y)]||u[y]||d[y]||o;return n?a.createElement(g,p(p({ref:t},s),{},{components:n})):a.createElement(g,p({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,p[1]=i;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},50780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},p="pp gateway get",i={unversionedId:"cmd/pp/gateway/gateway-get",id:"cmd/pp/gateway/gateway-get",title:"pp gateway get",description:"Get information about the specified gateway",source:"@site/docs/cmd/pp/gateway/gateway-get.md",sourceDirName:"cmd/pp/gateway",slug:"/cmd/pp/gateway/gateway-get",permalink:"/cmd/pp/gateway/gateway-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/pp/gateway/gateway-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"pp environment list",permalink:"/cmd/pp/environment/environment-list"},next:{title:"pp gateway list",permalink:"/cmd/pp/gateway/gateway-list"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"pp-gateway-get"},"pp gateway get"),(0,r.kt)("p",null,"Get information about the specified gateway"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp gateway get [options]\n")),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-i, --id <id>"),"\n: ID of the Gateway."),(0,r.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Get information about the specified gateway."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"m365 pp gateway get --id 1f69e798-5852-4fdd-ab01-33bb14b6e934\n")),(0,r.kt)("h2",{id:"response"},"Response"),(0,r.kt)("p",null,'=== "JSON"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'```json\n{\n  "id":"22660b34-31b3-4744-a99c-5e154458a784",\n  "gatewayId":0,\n  "name":"Contoso Gateway",\n  "type":"Resource",\n  "publicKey":{\n    "exponent":"AQAB",\n    "modulus":"okJBN8MJyaVkjfkN75B6OgP7RYiC3KFMFaky9KqqudqiTOcZPRXlsG+emrbnnBpFzw7ywe4gWtUGnPCqy01RKeDZrFA3QfkVPJpH28OWfrmgkMQNsI4Op2uxwEyjnJAyfYxIsHlpevOZoDKpWJgV+sH6MRf/+LK4hN3vNJuWKKpf90rNwjipnYMumHyKVkd4Vssc9Ftsu4Samu0/TkXzUkyje5DxMF2ZK1Nt2TgItBcpKi4wLCP4bPDYYaa9vfOmBlji7U+gwuE5bjnmjazFljQ5sOP0VdA0fRoId3+nI7n1rSgRq265jNHX84HZbm2D/Pk8C0dElTmYEswGPDWEJQ=="\n  },\n  "gatewayAnnotation":"{\\"gatewayContactInformation\\":[\\"admin@contoso.onmicrosoft.com\\"],\\"gatewayVersion\\":\\"3000.122.8\\",\\"gatewayWitnessString\\":\\"{\\\\\\"EncryptedResult\\\\\\":\\\\\\"UyfEqNSy0e9S4D0m9oacPyYhgiXLWusCiKepoLudnTEe68iw9qEaV6qNqTbSKlVUwUkD9KjbnbV0O3vU97Q/KTJXpw9/1SiyhpO+JN1rcaL51mPjyQo0WwMHMo2PU3rdEyxsLjkJxJZHTh4+XGB/lQ==\\\\\\",\\\\\\"IV\\\\\\":\\\\\\"QxCYjHEl8Ab9i78ZBYpnDw==\\\\\\",\\\\\\"Signature\\\\\\":\\\\\\"upVXK3DvWdj5scw8iUDDilzQz1ovuNgeuXRpmf0N828=\\\\\\"}\\",\\"gatewayMachine\\":\\"SPFxDevelop\\",\\"gatewaySalt\\":\\"rA1M34AdgdCbOYQMvo/izA==\\",\\"gatewayWitnessStringLegacy\\":null,\\"gatewaySaltLegacy\\":null,\\"gatewayDepartment\\":null,\\"gatewayVirtualNetworkSubnetId\\":null}"\n}\n```\n')),(0,r.kt)("p",null,'=== "Text"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```text\nid  : 22660b34-31b3-4744-a99c-5e154458a784    \nname: Contoso Gateway \n```\n")),(0,r.kt)("p",null,'=== "CSV"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"```csv\nid,name\n22660b34-31b3-4744-a99c-5e154458a784,Contoso Gateway\n```\n")))}u.isMDXComponent=!0}}]);