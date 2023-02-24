"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[71983],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>d});var l=i(67294);function I(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){I(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,I=function(e,t){if(null==e)return{};var i,l,I={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(I[i]=e[i]);return I}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(I[i]=e[i])}return I}var s=l.createContext({}),a=function(e){var t=l.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):c(c({},t),e)),i},m=function(e){var t=a(e.components);return l.createElement(s.Provider,{value:t},e.children)},r="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},Z=l.forwardRef((function(e,t){var i=e.components,I=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),r=a(i),Z=I,d=r["".concat(s,".").concat(Z)]||r[Z]||u[Z]||n;return i?l.createElement(d,c(c({ref:t},m),{},{components:i})):l.createElement(d,c({ref:t},m))}));function d(e,t){var i=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var n=i.length,c=new Array(n);c[0]=Z;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[r]="string"==typeof e?e:I,c[1]=o;for(var a=2;a<n;a++)c[a]=i[a];return l.createElement.apply(null,c)}return l.createElement.apply(null,i)}Z.displayName="MDXCreateElement"},90846:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>a});var l=i(87462),I=(i(67294),i(3905));const n={},c="util accesstoken get",o={unversionedId:"cmd/util/accesstoken/accesstoken-get",id:"cmd/util/accesstoken/accesstoken-get",title:"util accesstoken get",description:"Gets access token for the specified resource",source:"@site/docs/cmd/util/accesstoken/accesstoken-get.md",sourceDirName:"cmd/util/accesstoken",slug:"/cmd/util/accesstoken/accesstoken-get",permalink:"/cli-microsoft365-docusaurus/cmd/util/accesstoken/accesstoken-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/util/accesstoken/accesstoken-get.md",tags:[],version:"current",lastUpdatedAt:1667518590,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{},sidebar:"commands",previous:{title:"yammer search",permalink:"/cli-microsoft365-docusaurus/cmd/yammer/yammer-search"}},s={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:a},r="wrapper";function u(e){let{components:t,...i}=e;return(0,I.kt)(r,(0,l.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"util-accesstoken-get"},"util accesstoken get"),(0,I.kt)("p",null,"Gets access token for the specified resource"),(0,I.kt)("h2",{id:"usage"},"Usage"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get [options]\n")),(0,I.kt)("h2",{id:"options"},"Options"),(0,I.kt)("p",null,(0,I.kt)("inlineCode",{parentName:"p"},"-r, --resource <resource>"),"\n: The resource for which to retrieve an access token"),(0,I.kt)("p",null,(0,I.kt)("inlineCode",{parentName:"p"},"--new"),"\n: Retrieve a new access token to ensure that it's valid for as long as possible"),(0,I.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,I.kt)("h2",{id:"remarks"},"Remarks"),(0,I.kt)("p",null,"The ",(0,I.kt)("inlineCode",{parentName:"p"},"util accesstoken get")," command returns an access token for the specified resource. If an access token has been previously retrieved and is still valid, the command will return the cached token. If you want to ensure that the returned access token is valid for as long as possible, you can force the command to retrieve a new access token by using the ",(0,I.kt)("inlineCode",{parentName:"p"},"--new")," option."),(0,I.kt)("p",null,"If the URL of your SharePoint tenant has been previously retrieved, you can use ",(0,I.kt)("inlineCode",{parentName:"p"},"sharepoint")," as the resource to retrieve access token for SharePoint. To verify if the URL of your SharePoint tenant has been previously retrieved, use the ",(0,I.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/spo-get"},(0,I.kt)("inlineCode",{parentName:"a"},"spo get"))," command. To explicitly set the URL of your SharePoint tenant use the ",(0,I.kt)("a",{parentName:"p",href:"/cli-microsoft365-docusaurus/cmd/spo/spo-set"},(0,I.kt)("inlineCode",{parentName:"a"},"spo set"))," command."),(0,I.kt)("h2",{id:"examples"},"Examples"),(0,I.kt)("p",null,"Get access token for the Microsoft Graph"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get --resource https://graph.microsoft.com\n")),(0,I.kt)("p",null,"Get access token for SharePoint Online using the shorthand identifier"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get --resource sharepoint\n")),(0,I.kt)("p",null,"Get a new access token for SharePoint Online"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get --resource https://contoso.sharepoint.com --new\n")),(0,I.kt)("h2",{id:"response"},"Response"),(0,I.kt)("p",null,'=== "JSON"'),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre"},'```json\n"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.ewogICJhdWQiOiAiaHR0cHM6Ly9jb250b3NvLnNoYXJlcG9pbnQuY29tIiwKICAiaXNzIjogImh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2VhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOC8iLAogICJpYXQiOiAxNjY3NTE2MDM1LAogICJuYmYiOiAxNjY3NTE2MDM1LAogICJleHAiOiAxNjY3NTIwODE3LAogICJhY3IiOiAiMSIsCiAgImFpbyI6ICJBVFFBeS84VEFBQUE0NFZrYm45YWNXa3Y1RVIzT1M1R3N3WWxZdzlHRlpvQmtQUG50VHhlTDY4ZDNRUXdheFFlMU01OW1ycnBXOVlFIiwKICAiYW1yIjogWwogICAgInB3ZCIKICBdLAogICJhcHBfZGlzcGxheW5hbWUiOiAiUG5QIE1hbmFnZW1lbnQgU2hlbGwiLAogICJhcHBpZCI6ICIzMTM1OWM3Zi1iZDdlLTQ3NWMtODZkYi1mZGI4YzkzNzU0OGUiLAogICJhcHBpZGFjciI6ICIwIiwKICAiZmFtaWx5X25hbWUiOiAiRG9lIiwKICAiZ2l2ZW5fbmFtZSI6ICJKb2huIiwKICAiaWR0eXAiOiAidXNlciIsCiAgImlwYWRkciI6ICIyMTMuNDkuMTM3LjQ2IiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgIm9pZCI6ICJiMjA5MWUxOC03ODgyLTRlZmUtYjdkMS05MDcwM2Y1YTVjNjUiLAogICJwdWlkIjogIjEwMDMyMDAwMzJEQTIyQ0EiLAogICJyaCI6ICIwLkFURUFXSmVGOVhveE0wV0hDRVY0SHBnOGFnTUFBQUFBQVBFUHpnQUFBQUFBQUFBeEFIYy4iLAogICJzY3AiOiAiQWxsU2l0ZXMuRnVsbENvbnRyb2wgQXBwQ2F0YWxvZy5SZWFkV3JpdGUuQWxsIEF1ZGl0TG9nLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIENoYW5uZWxNZW1iZXIuUmVhZFdyaXRlLkFsbCBDaGFubmVsTWVzc2FnZS5SZWFkLkFsbCBDaGFubmVsTWVzc2FnZS5TZW5kIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIENoYXQuUmVhZCBDaGF0LlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBFeHRlcm5hbENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5UHJvdmlkZXIuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTm90ZXMuUmVhZC5BbGwgUGxhY2UuUmVhZC5BbGwgUG9saWN5LlJlYWQuQWxsIFJlcG9ydHMuUmVhZC5BbGwgU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwgU2VydmljZUhlYWx0aC5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZS5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZVZpZXdwb2ludC5Xcml0ZSBUYXNrcy5SZWFkV3JpdGUgVGVhbS5DcmVhdGUgVGVhbU1lbWJlci5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclVzZXIgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCBVc2VyLkludml0ZS5BbGwgVXNlci5SZWFkV3JpdGUuQWxsIiwKICAic2lkIjogImQwNzE4ZmE2LTYyYzAtNDExYi04YTFjLTIyNjdhNWM5N2VkNSIsCiAgInNpZ25pbl9zdGF0ZSI6IFsKICAgICJrbXNpIgogIF0sCiAgInN1YiI6ICJCdFhiMVdVdmIzOVp6UXoyd2tTenozZnZ5emFwSFl5b1dlRHlhNzF2S3ZRIiwKICAidGlkIjogImVhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOCIsCiAgInVuaXF1ZV9uYW1lIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXBuIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXRpIjogIjdvdDQ4UjhlQmttbk5QTnpGM1F3QUEiLAogICJ2ZXIiOiAiMS4wIiwKICAid2lkcyI6IFsKICAgICI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLAogICAgImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSIKICBdCn0=.Y6yWiwlla_qNGKjePmkLsF8Oq0ZFK3ujk8eHixwtHIyus5g1ojbo7K-1lgExXrKGAp59YGLIKWoU7t-LeblKrdB35QHGjRoiQk0VaomE75iX9k-if_5D98h2N6t9WwSHGQcBj3lMonG4lmQfNV5hmBx9xFwJtCkbInaFRmoLZPBCcAFKrLRzE6LjdecXaBnGtxucWKsVOZVc6RRLTvWNpKbQLuJ3azremB77qZ49BxtuVLCgYzYsf8a14mJhMlEN4_m6mPjhdmElcr8JSe6EZRxrGlKMhUhkhc4zhjkQ_nDHqzXkin80FUbyX1y5U4r71KUJvtn5bqxeDK20DQD6mQ"\n```\n')),(0,I.kt)("p",null,'=== "Text"'),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre"},"```text\neyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.ewogICJhdWQiOiAiaHR0cHM6Ly9jb250b3NvLnNoYXJlcG9pbnQuY29tIiwKICAiaXNzIjogImh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2VhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOC8iLAogICJpYXQiOiAxNjY3NTE2MDM1LAogICJuYmYiOiAxNjY3NTE2MDM1LAogICJleHAiOiAxNjY3NTIwODE3LAogICJhY3IiOiAiMSIsCiAgImFpbyI6ICJBVFFBeS84VEFBQUE0NFZrYm45YWNXa3Y1RVIzT1M1R3N3WWxZdzlHRlpvQmtQUG50VHhlTDY4ZDNRUXdheFFlMU01OW1ycnBXOVlFIiwKICAiYW1yIjogWwogICAgInB3ZCIKICBdLAogICJhcHBfZGlzcGxheW5hbWUiOiAiUG5QIE1hbmFnZW1lbnQgU2hlbGwiLAogICJhcHBpZCI6ICIzMTM1OWM3Zi1iZDdlLTQ3NWMtODZkYi1mZGI4YzkzNzU0OGUiLAogICJhcHBpZGFjciI6ICIwIiwKICAiZmFtaWx5X25hbWUiOiAiRG9lIiwKICAiZ2l2ZW5fbmFtZSI6ICJKb2huIiwKICAiaWR0eXAiOiAidXNlciIsCiAgImlwYWRkciI6ICIyMTMuNDkuMTM3LjQ2IiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgIm9pZCI6ICJiMjA5MWUxOC03ODgyLTRlZmUtYjdkMS05MDcwM2Y1YTVjNjUiLAogICJwdWlkIjogIjEwMDMyMDAwMzJEQTIyQ0EiLAogICJyaCI6ICIwLkFURUFXSmVGOVhveE0wV0hDRVY0SHBnOGFnTUFBQUFBQVBFUHpnQUFBQUFBQUFBeEFIYy4iLAogICJzY3AiOiAiQWxsU2l0ZXMuRnVsbENvbnRyb2wgQXBwQ2F0YWxvZy5SZWFkV3JpdGUuQWxsIEF1ZGl0TG9nLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIENoYW5uZWxNZW1iZXIuUmVhZFdyaXRlLkFsbCBDaGFubmVsTWVzc2FnZS5SZWFkLkFsbCBDaGFubmVsTWVzc2FnZS5TZW5kIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIENoYXQuUmVhZCBDaGF0LlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBFeHRlcm5hbENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5UHJvdmlkZXIuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTm90ZXMuUmVhZC5BbGwgUGxhY2UuUmVhZC5BbGwgUG9saWN5LlJlYWQuQWxsIFJlcG9ydHMuUmVhZC5BbGwgU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwgU2VydmljZUhlYWx0aC5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZS5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZVZpZXdwb2ludC5Xcml0ZSBUYXNrcy5SZWFkV3JpdGUgVGVhbS5DcmVhdGUgVGVhbU1lbWJlci5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclVzZXIgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCBVc2VyLkludml0ZS5BbGwgVXNlci5SZWFkV3JpdGUuQWxsIiwKICAic2lkIjogImQwNzE4ZmE2LTYyYzAtNDExYi04YTFjLTIyNjdhNWM5N2VkNSIsCiAgInNpZ25pbl9zdGF0ZSI6IFsKICAgICJrbXNpIgogIF0sCiAgInN1YiI6ICJCdFhiMVdVdmIzOVp6UXoyd2tTenozZnZ5emFwSFl5b1dlRHlhNzF2S3ZRIiwKICAidGlkIjogImVhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOCIsCiAgInVuaXF1ZV9uYW1lIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXBuIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXRpIjogIjdvdDQ4UjhlQmttbk5QTnpGM1F3QUEiLAogICJ2ZXIiOiAiMS4wIiwKICAid2lkcyI6IFsKICAgICI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLAogICAgImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSIKICBdCn0=.Y6yWiwlla_qNGKjePmkLsF8Oq0ZFK3ujk8eHixwtHIyus5g1ojbo7K-1lgExXrKGAp59YGLIKWoU7t-LeblKrdB35QHGjRoiQk0VaomE75iX9k-if_5D98h2N6t9WwSHGQcBj3lMonG4lmQfNV5hmBx9xFwJtCkbInaFRmoLZPBCcAFKrLRzE6LjdecXaBnGtxucWKsVOZVc6RRLTvWNpKbQLuJ3azremB77qZ49BxtuVLCgYzYsf8a14mJhMlEN4_m6mPjhdmElcr8JSe6EZRxrGlKMhUhkhc4zhjkQ_nDHqzXkin80FUbyX1y5U4r71KUJvtn5bqxeDK20DQD6mQ\n```\n")),(0,I.kt)("p",null,'=== "CSV"'),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre"},"```csv\neyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.ewogICJhdWQiOiAiaHR0cHM6Ly9jb250b3NvLnNoYXJlcG9pbnQuY29tIiwKICAiaXNzIjogImh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2VhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOC8iLAogICJpYXQiOiAxNjY3NTE2MDM1LAogICJuYmYiOiAxNjY3NTE2MDM1LAogICJleHAiOiAxNjY3NTIwODE3LAogICJhY3IiOiAiMSIsCiAgImFpbyI6ICJBVFFBeS84VEFBQUE0NFZrYm45YWNXa3Y1RVIzT1M1R3N3WWxZdzlHRlpvQmtQUG50VHhlTDY4ZDNRUXdheFFlMU01OW1ycnBXOVlFIiwKICAiYW1yIjogWwogICAgInB3ZCIKICBdLAogICJhcHBfZGlzcGxheW5hbWUiOiAiUG5QIE1hbmFnZW1lbnQgU2hlbGwiLAogICJhcHBpZCI6ICIzMTM1OWM3Zi1iZDdlLTQ3NWMtODZkYi1mZGI4YzkzNzU0OGUiLAogICJhcHBpZGFjciI6ICIwIiwKICAiZmFtaWx5X25hbWUiOiAiRG9lIiwKICAiZ2l2ZW5fbmFtZSI6ICJKb2huIiwKICAiaWR0eXAiOiAidXNlciIsCiAgImlwYWRkciI6ICIyMTMuNDkuMTM3LjQ2IiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgIm9pZCI6ICJiMjA5MWUxOC03ODgyLTRlZmUtYjdkMS05MDcwM2Y1YTVjNjUiLAogICJwdWlkIjogIjEwMDMyMDAwMzJEQTIyQ0EiLAogICJyaCI6ICIwLkFURUFXSmVGOVhveE0wV0hDRVY0SHBnOGFnTUFBQUFBQVBFUHpnQUFBQUFBQUFBeEFIYy4iLAogICJzY3AiOiAiQWxsU2l0ZXMuRnVsbENvbnRyb2wgQXBwQ2F0YWxvZy5SZWFkV3JpdGUuQWxsIEF1ZGl0TG9nLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIENoYW5uZWxNZW1iZXIuUmVhZFdyaXRlLkFsbCBDaGFubmVsTWVzc2FnZS5SZWFkLkFsbCBDaGFubmVsTWVzc2FnZS5TZW5kIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIENoYXQuUmVhZCBDaGF0LlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBFeHRlcm5hbENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5UHJvdmlkZXIuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTm90ZXMuUmVhZC5BbGwgUGxhY2UuUmVhZC5BbGwgUG9saWN5LlJlYWQuQWxsIFJlcG9ydHMuUmVhZC5BbGwgU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwgU2VydmljZUhlYWx0aC5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZS5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZVZpZXdwb2ludC5Xcml0ZSBUYXNrcy5SZWFkV3JpdGUgVGVhbS5DcmVhdGUgVGVhbU1lbWJlci5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclVzZXIgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCBVc2VyLkludml0ZS5BbGwgVXNlci5SZWFkV3JpdGUuQWxsIiwKICAic2lkIjogImQwNzE4ZmE2LTYyYzAtNDExYi04YTFjLTIyNjdhNWM5N2VkNSIsCiAgInNpZ25pbl9zdGF0ZSI6IFsKICAgICJrbXNpIgogIF0sCiAgInN1YiI6ICJCdFhiMVdVdmIzOVp6UXoyd2tTenozZnZ5emFwSFl5b1dlRHlhNzF2S3ZRIiwKICAidGlkIjogImVhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOCIsCiAgInVuaXF1ZV9uYW1lIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXBuIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXRpIjogIjdvdDQ4UjhlQmttbk5QTnpGM1F3QUEiLAogICJ2ZXIiOiAiMS4wIiwKICAid2lkcyI6IFsKICAgICI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLAogICAgImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSIKICBdCn0=.Y6yWiwlla_qNGKjePmkLsF8Oq0ZFK3ujk8eHixwtHIyus5g1ojbo7K-1lgExXrKGAp59YGLIKWoU7t-LeblKrdB35QHGjRoiQk0VaomE75iX9k-if_5D98h2N6t9WwSHGQcBj3lMonG4lmQfNV5hmBx9xFwJtCkbInaFRmoLZPBCcAFKrLRzE6LjdecXaBnGtxucWKsVOZVc6RRLTvWNpKbQLuJ3azremB77qZ49BxtuVLCgYzYsf8a14mJhMlEN4_m6mPjhdmElcr8JSe6EZRxrGlKMhUhkhc4zhjkQ_nDHqzXkin80FUbyX1y5U4r71KUJvtn5bqxeDK20DQD6mQ\n```\n")))}u.isMDXComponent=!0}}]);