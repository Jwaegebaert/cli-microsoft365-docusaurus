"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[44111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=s(n),m=a,y=l["".concat(d,".").concat(m)]||l[m]||u[m]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[l]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="purview retentioneventtype add",p={unversionedId:"cmd/purview/retentioneventtype/retentioneventtype-add",id:"cmd/purview/retentioneventtype/retentioneventtype-add",title:"purview retentioneventtype add",description:"Create a retention event type",source:"@site/docs/cmd/purview/retentioneventtype/retentioneventtype-add.md",sourceDirName:"cmd/purview/retentioneventtype",slug:"/cmd/purview/retentioneventtype/retentioneventtype-add",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-add",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/purview/retentioneventtype/retentioneventtype-add.md",tags:[],version:"current",lastUpdatedAt:1675885708,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{},sidebar:"commands",previous:{title:"purview retentionevent remove",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentionevent/retentionevent-remove"},next:{title:"purview retentioneventtype get",permalink:"/cli-microsoft365-docusaurus/cmd/purview/retentioneventtype/retentioneventtype-get"}},d={},s=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Remarks",id:"remarks",level:2},{value:"More information",id:"more-information",level:2},{value:"Response",id:"response",level:2}],c={toc:s},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"purview-retentioneventtype-add"},"purview retentioneventtype add"),(0,a.kt)("p",null,"Create a retention event type"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentioneventtype add [options]\n")),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-n, --displayName <displayName>"),"\n: The display name of the event type."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"-d, --description [description]"),"\n: A description for the event type."),(0,a.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Create a retention event type ",(0,a.kt)("em",{parentName:"p"},"Contract Expiry"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"m365 purview retentioneventtype add --displayName 'Contract Expiry' --description 'A retention event type to start a retention period based on the date that a contract expired.'\n")),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"!!! attention\nThis command is based on a Microsoft Graph API that is currently in preview and is subject to change once the API reached general availability."),(0,a.kt)("p",null,"!!! attention\nThis command currently only supports delegated permissions."),(0,a.kt)("h2",{id:"more-information"},"More information"),(0,a.kt)("p",null,"This command is part of a series of commands that have to do with event-based retention. Event-based retention is about starting a retention period when a specific event occurs, instead of the moment a document was labeled or created. ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/microsoft-365/compliance/event-driven-retention?view=o365-worldwide"},"Read more about event-based retention here")),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,'=== "JSON"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```json\n{\n  {\n    "displayName": "Contract Expiry",\n    "description": "A retention event type to start a retention period based on the date that a contract expired.",\n    "createdDateTime": "2023-01-31T20:33:33Z",\n    "lastModifiedDateTime": "2023-01-31T20:33:33Z",\n    "id": "f15d2493-7ad2-4185-a3f6-9580542490a0",\n    "createdBy": {\n      "user": {\n        "id": null,\n        "displayName": "Mathijs Verbeeck"\n      }\n    },\n    "lastModifiedBy": {\n      "user": {\n        "id": null,\n        "displayName": "Mathijs Verbeeck"\n      }\n    }\n  }\n}\n```\n')),(0,a.kt)("p",null,'=== "Text"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```text\ncreatedBy           : {"user":{"id":null,"displayName":"Mathijs Verbeeck"}}\ncreatedDateTime     : 2023-01-31T20:40:40Z\ndescription         : A retention event type to start a retention period based on the date that a contract expired.\ndisplayName         : Contract Expiry\nid                  : 806cb481-4cc6-47c3-af26-26d64f6e7aab\nlastModifiedBy      : {"user":{"id":null,"displayName":"Mathijs Verbeeck"}}\nlastModifiedDateTime: 2023-01-31T20:40:40Z\n```\n')),(0,a.kt)("p",null,'=== "CSV"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```csv\ndisplayName,description,createdDateTime,lastModifiedDateTime,id,createdBy,lastModifiedBy\nContract Expiry,A retention event type to start a retention period based on the date that a contract expired.,2023-01-31T20:53:23Z,2023-01-31T20:53:23Z,b430ae4c-1e26-422f-9544-67df3abfb200,"{""user"":{""id"":null,""displayName"":""Mathijs Verbeeck""}}","{""user"":{""id"":null,""displayName"":""Mathijs Verbeeck""}}"\n```\n')),(0,a.kt)("p",null,'=== "Markdown"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'```md\n# purview retentioneventtype add --displayName "Contract Expiry" --description "A retention event type to start a retention period based on the date that a contract expired."\n\nDate: 31/01/2023\n\n## Contract Expiry (ca0e1f8d-4e42-4a81-be85-022502d70c4e)\n\nProperty | Value\n---------|-------\ndisplayName | Contract Expiry\ndescription | A retention event type to start a retention period based on the date that a contract expired.\ncreatedDateTime | 2023-01-31T20:55:35Z\nlastModifiedDateTime | 2023-01-31T20:55:35Z\nid | ca0e1f8d-4e42-4a81-be85-022502d70c4e\ncreatedBy | {"user":{"id":null,"displayName":"Mathijs Verbeeck"}}\nlastModifiedBy | {"user":{"id":null,"displayName":"Mathijs Verbeeck"}}\n```\n')))}u.isMDXComponent=!0}}]);