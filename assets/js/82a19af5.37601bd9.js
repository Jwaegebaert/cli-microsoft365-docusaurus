"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71983],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>d});var i=l(67294);function I(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function c(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){I(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function s(e,t){if(null==e)return{};var l,i,I=function(e,t){if(null==e)return{};var l,i,I={},n=Object.keys(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||(I[l]=e[l]);return I}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)l=n[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(I[l]=e[l])}return I}var o=i.createContext({}),a=function(e){var t=i.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):c(c({},t),e)),l},m=function(e){var t=a(e.components);return i.createElement(o.Provider,{value:t},e.children)},r="mdxType",Z={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var l=e.components,I=e.mdxType,n=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),r=a(l),u=I,d=r["".concat(o,".").concat(u)]||r[u]||Z[u]||n;return l?i.createElement(d,c(c({ref:t},m),{},{components:l})):i.createElement(d,c({ref:t},m))}));function d(e,t){var l=arguments,I=t&&t.mdxType;if("string"==typeof e||I){var n=l.length,c=new Array(n);c[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[r]="string"==typeof e?e:I,c[1]=s;for(var a=2;a<n;a++)c[a]=l[a];return i.createElement.apply(null,c)}return i.createElement.apply(null,l)}u.displayName="MDXCreateElement"},90846:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>r,frontMatter:()=>n,metadata:()=>s,toc:()=>a});var i=l(87462),I=(l(67294),l(3905));const n={},c="util accesstoken get",s={unversionedId:"cmd/util/accesstoken/accesstoken-get",id:"cmd/util/accesstoken/accesstoken-get",title:"util accesstoken get",description:"Gets access token for the specified resource",source:"@site/docs/cmd/util/accesstoken/accesstoken-get.md",sourceDirName:"cmd/util/accesstoken",slug:"/cmd/util/accesstoken/accesstoken-get",permalink:"/cmd/util/accesstoken/accesstoken-get",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/cmd/util/accesstoken/accesstoken-get.md",tags:[],version:"current",lastUpdatedBy:"Jwaegebaert",lastUpdatedAt:1672930100,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{},sidebar:"commands",previous:{title:"Utilities (util)",permalink:"/cmd/groups/util"}},o={},a=[{value:"Usage",id:"usage",level:2},{value:"Options",id:"options",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:a};function r(e){let{components:t,...l}=e;return(0,I.kt)("wrapper",(0,i.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,I.kt)("h1",{id:"util-accesstoken-get"},"util accesstoken get"),(0,I.kt)("p",null,"Gets access token for the specified resource"),(0,I.kt)("h2",{id:"usage"},"Usage"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get [options]\n")),(0,I.kt)("h2",{id:"options"},"Options"),(0,I.kt)("p",null,(0,I.kt)("inlineCode",{parentName:"p"},"-r, --resource <resource>"),"\n: The resource for which to retrieve an access token"),(0,I.kt)("p",null,(0,I.kt)("inlineCode",{parentName:"p"},"--new"),"\n: Retrieve a new access token to ensure that it's valid for as long as possible"),(0,I.kt)("p",null,'--8<-- "docs/cmd/_global.md"'),(0,I.kt)("h2",{id:"remarks"},"Remarks"),(0,I.kt)("p",null,"The ",(0,I.kt)("inlineCode",{parentName:"p"},"util accesstoken get")," command returns an access token for the specified resource. If an access token has been previously retrieved and is still valid, the command will return the cached token. If you want to ensure that the returned access token is valid for as long as possible, you can force the command to retrieve a new access token by using the ",(0,I.kt)("inlineCode",{parentName:"p"},"--new")," option."),(0,I.kt)("p",null,"If the URL of your SharePoint tenant has been previously retrieved, you can use ",(0,I.kt)("inlineCode",{parentName:"p"},"sharepoint")," as the resource to retrieve access token for SharePoint. To verify if the URL of your SharePoint tenant has been previously retrieved, use the ",(0,I.kt)("a",{parentName:"p",href:"/cmd/spo/spo-get"},(0,I.kt)("inlineCode",{parentName:"a"},"spo get"))," command. To explicitly set the URL of your SharePoint tenant use the ",(0,I.kt)("a",{parentName:"p",href:"/cmd/spo/spo-set"},(0,I.kt)("inlineCode",{parentName:"a"},"spo set"))," command."),(0,I.kt)("h2",{id:"examples"},"Examples"),(0,I.kt)("p",null,"Get access token for the Microsoft Graph"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get --resource https://graph.microsoft.com\n")),(0,I.kt)("p",null,"Get access token for SharePoint Online using the shorthand identifier"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get --resource sharepoint\n")),(0,I.kt)("p",null,"Get a new access token for SharePoint Online"),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre",className:"language-sh"},"m365 util accesstoken get --resource https://contoso.sharepoint.com --new\n")),(0,I.kt)("h2",{id:"response"},"Response"),(0,I.kt)("p",null,'=== "JSON"'),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre"},'```json\n"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.ewogICJhdWQiOiAiaHR0cHM6Ly9jb250b3NvLnNoYXJlcG9pbnQuY29tIiwKICAiaXNzIjogImh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2VhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOC8iLAogICJpYXQiOiAxNjY3NTE2MDM1LAogICJuYmYiOiAxNjY3NTE2MDM1LAogICJleHAiOiAxNjY3NTIwODE3LAogICJhY3IiOiAiMSIsCiAgImFpbyI6ICJBVFFBeS84VEFBQUE0NFZrYm45YWNXa3Y1RVIzT1M1R3N3WWxZdzlHRlpvQmtQUG50VHhlTDY4ZDNRUXdheFFlMU01OW1ycnBXOVlFIiwKICAiYW1yIjogWwogICAgInB3ZCIKICBdLAogICJhcHBfZGlzcGxheW5hbWUiOiAiUG5QIE1hbmFnZW1lbnQgU2hlbGwiLAogICJhcHBpZCI6ICIzMTM1OWM3Zi1iZDdlLTQ3NWMtODZkYi1mZGI4YzkzNzU0OGUiLAogICJhcHBpZGFjciI6ICIwIiwKICAiZmFtaWx5X25hbWUiOiAiRG9lIiwKICAiZ2l2ZW5fbmFtZSI6ICJKb2huIiwKICAiaWR0eXAiOiAidXNlciIsCiAgImlwYWRkciI6ICIyMTMuNDkuMTM3LjQ2IiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgIm9pZCI6ICJiMjA5MWUxOC03ODgyLTRlZmUtYjdkMS05MDcwM2Y1YTVjNjUiLAogICJwdWlkIjogIjEwMDMyMDAwMzJEQTIyQ0EiLAogICJyaCI6ICIwLkFURUFXSmVGOVhveE0wV0hDRVY0SHBnOGFnTUFBQUFBQVBFUHpnQUFBQUFBQUFBeEFIYy4iLAogICJzY3AiOiAiQWxsU2l0ZXMuRnVsbENvbnRyb2wgQXBwQ2F0YWxvZy5SZWFkV3JpdGUuQWxsIEF1ZGl0TG9nLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIENoYW5uZWxNZW1iZXIuUmVhZFdyaXRlLkFsbCBDaGFubmVsTWVzc2FnZS5SZWFkLkFsbCBDaGFubmVsTWVzc2FnZS5TZW5kIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIENoYXQuUmVhZCBDaGF0LlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBFeHRlcm5hbENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5UHJvdmlkZXIuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTm90ZXMuUmVhZC5BbGwgUGxhY2UuUmVhZC5BbGwgUG9saWN5LlJlYWQuQWxsIFJlcG9ydHMuUmVhZC5BbGwgU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwgU2VydmljZUhlYWx0aC5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZS5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZVZpZXdwb2ludC5Xcml0ZSBUYXNrcy5SZWFkV3JpdGUgVGVhbS5DcmVhdGUgVGVhbU1lbWJlci5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclVzZXIgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCBVc2VyLkludml0ZS5BbGwgVXNlci5SZWFkV3JpdGUuQWxsIiwKICAic2lkIjogImQwNzE4ZmE2LTYyYzAtNDExYi04YTFjLTIyNjdhNWM5N2VkNSIsCiAgInNpZ25pbl9zdGF0ZSI6IFsKICAgICJrbXNpIgogIF0sCiAgInN1YiI6ICJCdFhiMVdVdmIzOVp6UXoyd2tTenozZnZ5emFwSFl5b1dlRHlhNzF2S3ZRIiwKICAidGlkIjogImVhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOCIsCiAgInVuaXF1ZV9uYW1lIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXBuIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXRpIjogIjdvdDQ4UjhlQmttbk5QTnpGM1F3QUEiLAogICJ2ZXIiOiAiMS4wIiwKICAid2lkcyI6IFsKICAgICI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLAogICAgImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSIKICBdCn0=.Y6yWiwlla_qNGKjePmkLsF8Oq0ZFK3ujk8eHixwtHIyus5g1ojbo7K-1lgExXrKGAp59YGLIKWoU7t-LeblKrdB35QHGjRoiQk0VaomE75iX9k-if_5D98h2N6t9WwSHGQcBj3lMonG4lmQfNV5hmBx9xFwJtCkbInaFRmoLZPBCcAFKrLRzE6LjdecXaBnGtxucWKsVOZVc6RRLTvWNpKbQLuJ3azremB77qZ49BxtuVLCgYzYsf8a14mJhMlEN4_m6mPjhdmElcr8JSe6EZRxrGlKMhUhkhc4zhjkQ_nDHqzXkin80FUbyX1y5U4r71KUJvtn5bqxeDK20DQD6mQ"\n```\n')),(0,I.kt)("p",null,'=== "Text"'),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre"},"```text\neyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.ewogICJhdWQiOiAiaHR0cHM6Ly9jb250b3NvLnNoYXJlcG9pbnQuY29tIiwKICAiaXNzIjogImh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2VhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOC8iLAogICJpYXQiOiAxNjY3NTE2MDM1LAogICJuYmYiOiAxNjY3NTE2MDM1LAogICJleHAiOiAxNjY3NTIwODE3LAogICJhY3IiOiAiMSIsCiAgImFpbyI6ICJBVFFBeS84VEFBQUE0NFZrYm45YWNXa3Y1RVIzT1M1R3N3WWxZdzlHRlpvQmtQUG50VHhlTDY4ZDNRUXdheFFlMU01OW1ycnBXOVlFIiwKICAiYW1yIjogWwogICAgInB3ZCIKICBdLAogICJhcHBfZGlzcGxheW5hbWUiOiAiUG5QIE1hbmFnZW1lbnQgU2hlbGwiLAogICJhcHBpZCI6ICIzMTM1OWM3Zi1iZDdlLTQ3NWMtODZkYi1mZGI4YzkzNzU0OGUiLAogICJhcHBpZGFjciI6ICIwIiwKICAiZmFtaWx5X25hbWUiOiAiRG9lIiwKICAiZ2l2ZW5fbmFtZSI6ICJKb2huIiwKICAiaWR0eXAiOiAidXNlciIsCiAgImlwYWRkciI6ICIyMTMuNDkuMTM3LjQ2IiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgIm9pZCI6ICJiMjA5MWUxOC03ODgyLTRlZmUtYjdkMS05MDcwM2Y1YTVjNjUiLAogICJwdWlkIjogIjEwMDMyMDAwMzJEQTIyQ0EiLAogICJyaCI6ICIwLkFURUFXSmVGOVhveE0wV0hDRVY0SHBnOGFnTUFBQUFBQVBFUHpnQUFBQUFBQUFBeEFIYy4iLAogICJzY3AiOiAiQWxsU2l0ZXMuRnVsbENvbnRyb2wgQXBwQ2F0YWxvZy5SZWFkV3JpdGUuQWxsIEF1ZGl0TG9nLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIENoYW5uZWxNZW1iZXIuUmVhZFdyaXRlLkFsbCBDaGFubmVsTWVzc2FnZS5SZWFkLkFsbCBDaGFubmVsTWVzc2FnZS5TZW5kIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIENoYXQuUmVhZCBDaGF0LlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBFeHRlcm5hbENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5UHJvdmlkZXIuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTm90ZXMuUmVhZC5BbGwgUGxhY2UuUmVhZC5BbGwgUG9saWN5LlJlYWQuQWxsIFJlcG9ydHMuUmVhZC5BbGwgU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwgU2VydmljZUhlYWx0aC5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZS5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZVZpZXdwb2ludC5Xcml0ZSBUYXNrcy5SZWFkV3JpdGUgVGVhbS5DcmVhdGUgVGVhbU1lbWJlci5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclVzZXIgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCBVc2VyLkludml0ZS5BbGwgVXNlci5SZWFkV3JpdGUuQWxsIiwKICAic2lkIjogImQwNzE4ZmE2LTYyYzAtNDExYi04YTFjLTIyNjdhNWM5N2VkNSIsCiAgInNpZ25pbl9zdGF0ZSI6IFsKICAgICJrbXNpIgogIF0sCiAgInN1YiI6ICJCdFhiMVdVdmIzOVp6UXoyd2tTenozZnZ5emFwSFl5b1dlRHlhNzF2S3ZRIiwKICAidGlkIjogImVhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOCIsCiAgInVuaXF1ZV9uYW1lIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXBuIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXRpIjogIjdvdDQ4UjhlQmttbk5QTnpGM1F3QUEiLAogICJ2ZXIiOiAiMS4wIiwKICAid2lkcyI6IFsKICAgICI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLAogICAgImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSIKICBdCn0=.Y6yWiwlla_qNGKjePmkLsF8Oq0ZFK3ujk8eHixwtHIyus5g1ojbo7K-1lgExXrKGAp59YGLIKWoU7t-LeblKrdB35QHGjRoiQk0VaomE75iX9k-if_5D98h2N6t9WwSHGQcBj3lMonG4lmQfNV5hmBx9xFwJtCkbInaFRmoLZPBCcAFKrLRzE6LjdecXaBnGtxucWKsVOZVc6RRLTvWNpKbQLuJ3azremB77qZ49BxtuVLCgYzYsf8a14mJhMlEN4_m6mPjhdmElcr8JSe6EZRxrGlKMhUhkhc4zhjkQ_nDHqzXkin80FUbyX1y5U4r71KUJvtn5bqxeDK20DQD6mQ\n```\n")),(0,I.kt)("p",null,'=== "CSV"'),(0,I.kt)("pre",null,(0,I.kt)("code",{parentName:"pre"},"```csv\neyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.ewogICJhdWQiOiAiaHR0cHM6Ly9jb250b3NvLnNoYXJlcG9pbnQuY29tIiwKICAiaXNzIjogImh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2VhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOC8iLAogICJpYXQiOiAxNjY3NTE2MDM1LAogICJuYmYiOiAxNjY3NTE2MDM1LAogICJleHAiOiAxNjY3NTIwODE3LAogICJhY3IiOiAiMSIsCiAgImFpbyI6ICJBVFFBeS84VEFBQUE0NFZrYm45YWNXa3Y1RVIzT1M1R3N3WWxZdzlHRlpvQmtQUG50VHhlTDY4ZDNRUXdheFFlMU01OW1ycnBXOVlFIiwKICAiYW1yIjogWwogICAgInB3ZCIKICBdLAogICJhcHBfZGlzcGxheW5hbWUiOiAiUG5QIE1hbmFnZW1lbnQgU2hlbGwiLAogICJhcHBpZCI6ICIzMTM1OWM3Zi1iZDdlLTQ3NWMtODZkYi1mZGI4YzkzNzU0OGUiLAogICJhcHBpZGFjciI6ICIwIiwKICAiZmFtaWx5X25hbWUiOiAiRG9lIiwKICAiZ2l2ZW5fbmFtZSI6ICJKb2huIiwKICAiaWR0eXAiOiAidXNlciIsCiAgImlwYWRkciI6ICIyMTMuNDkuMTM3LjQ2IiwKICAibmFtZSI6ICJKb2huIERvZSIsCiAgIm9pZCI6ICJiMjA5MWUxOC03ODgyLTRlZmUtYjdkMS05MDcwM2Y1YTVjNjUiLAogICJwdWlkIjogIjEwMDMyMDAwMzJEQTIyQ0EiLAogICJyaCI6ICIwLkFURUFXSmVGOVhveE0wV0hDRVY0SHBnOGFnTUFBQUFBQVBFUHpnQUFBQUFBQUFBeEFIYy4iLAogICJzY3AiOiAiQWxsU2l0ZXMuRnVsbENvbnRyb2wgQXBwQ2F0YWxvZy5SZWFkV3JpdGUuQWxsIEF1ZGl0TG9nLlJlYWQuQWxsIEJvb2tpbmdzLlJlYWQuQWxsIENoYW5uZWxNZW1iZXIuUmVhZFdyaXRlLkFsbCBDaGFubmVsTWVzc2FnZS5SZWFkLkFsbCBDaGFubmVsTWVzc2FnZS5TZW5kIENoYW5uZWxTZXR0aW5ncy5SZWFkV3JpdGUuQWxsIENoYXQuUmVhZCBDaGF0LlJlYWRXcml0ZSBEaXJlY3RvcnkuQWNjZXNzQXNVc2VyLkFsbCBEaXJlY3RvcnkuUmVhZFdyaXRlLkFsbCBFeHRlcm5hbENvbm5lY3Rpb24uUmVhZFdyaXRlLkFsbCBHcm91cC5SZWFkV3JpdGUuQWxsIElkZW50aXR5UHJvdmlkZXIuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBNYWlsLlNlbmQgTm90ZXMuUmVhZC5BbGwgUGxhY2UuUmVhZC5BbGwgUG9saWN5LlJlYWQuQWxsIFJlcG9ydHMuUmVhZC5BbGwgU2VjdXJpdHlFdmVudHMuUmVhZC5BbGwgU2VydmljZUhlYWx0aC5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZS5SZWFkLkFsbCBTZXJ2aWNlTWVzc2FnZVZpZXdwb2ludC5Xcml0ZSBUYXNrcy5SZWFkV3JpdGUgVGVhbS5DcmVhdGUgVGVhbU1lbWJlci5SZWFkV3JpdGUuQWxsIFRlYW1zQXBwSW5zdGFsbGF0aW9uLlJlYWRXcml0ZUZvclVzZXIgVGVhbVNldHRpbmdzLlJlYWRXcml0ZS5BbGwgVGVhbXNUYWIuUmVhZFdyaXRlLkFsbCBUZXJtU3RvcmUuUmVhZFdyaXRlLkFsbCBVc2VyLkludml0ZS5BbGwgVXNlci5SZWFkV3JpdGUuQWxsIiwKICAic2lkIjogImQwNzE4ZmE2LTYyYzAtNDExYi04YTFjLTIyNjdhNWM5N2VkNSIsCiAgInNpZ25pbl9zdGF0ZSI6IFsKICAgICJrbXNpIgogIF0sCiAgInN1YiI6ICJCdFhiMVdVdmIzOVp6UXoyd2tTenozZnZ5emFwSFl5b1dlRHlhNzF2S3ZRIiwKICAidGlkIjogImVhNjExNDcxLTE2ZTEtNDEwMS1hN2M0LTMzNTNmNjc1YTBkOCIsCiAgInVuaXF1ZV9uYW1lIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXBuIjogImpvaG4uZG9lQGNvbnRvc28ub25taWNyb3NvZnQuY29tIiwKICAidXRpIjogIjdvdDQ4UjhlQmttbk5QTnpGM1F3QUEiLAogICJ2ZXIiOiAiMS4wIiwKICAid2lkcyI6IFsKICAgICI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLAogICAgImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSIKICBdCn0=.Y6yWiwlla_qNGKjePmkLsF8Oq0ZFK3ujk8eHixwtHIyus5g1ojbo7K-1lgExXrKGAp59YGLIKWoU7t-LeblKrdB35QHGjRoiQk0VaomE75iX9k-if_5D98h2N6t9WwSHGQcBj3lMonG4lmQfNV5hmBx9xFwJtCkbInaFRmoLZPBCcAFKrLRzE6LjdecXaBnGtxucWKsVOZVc6RRLTvWNpKbQLuJ3azremB77qZ49BxtuVLCgYzYsf8a14mJhMlEN4_m6mPjhdmElcr8JSe6EZRxrGlKMhUhkhc4zhjkQ_nDHqzXkin80FUbyX1y5U4r71KUJvtn5bqxeDK20DQD6mQ\n```\n")))}r.isMDXComponent=!0}}]);