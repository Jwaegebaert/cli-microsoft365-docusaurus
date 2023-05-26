"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[9558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,f=u["".concat(l,".").concat(c)]||u[c]||d[c]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},73469:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"Filter CLI data",sidebar_position:6},o="Filter CLI for Microsoft 365 data",s={unversionedId:"user-guide/filter-cli-data",id:"user-guide/filter-cli-data",title:"Filter CLI data",description:"CLI for Microsoft 365 supports filtering, sorting, and querying data using JMESPath queries. By specifying the --query option on each command you can create complex queries.",source:"@site/docs/user-guide/filter-cli-data.mdx",sourceDirName:"user-guide",slug:"/user-guide/filter-cli-data",permalink:"/cli-microsoft365-docusaurus/user-guide/filter-cli-data",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/user-guide/filter-cli-data.mdx",tags:[],version:"current",lastUpdatedAt:1685107590,formattedLastUpdatedAt:"May 26, 2023",sidebarPosition:6,frontMatter:{title:"Filter CLI data",sidebar_position:6},sidebar:"userGuide",previous:{title:"CLI output mode",permalink:"/cli-microsoft365-docusaurus/user-guide/cli-output-mode"},next:{title:"Configure CLI",permalink:"/cli-microsoft365-docusaurus/user-guide/configuring-cli"}},l={},p=[{value:"Testing JMESPath queries",id:"testing-jmespath-queries",level:2},{value:"Basic array filters",id:"basic-array-filters",level:2},{value:"Other array filters",id:"other-array-filters",level:2},{value:"Ordering the dataset",id:"ordering-the-dataset",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"filter-cli-for-microsoft-365-data"},"Filter CLI for Microsoft 365 data"),(0,i.kt)("p",null,"CLI for Microsoft 365 supports filtering, sorting, and querying data using ",(0,i.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"JMESPath")," queries. By specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"--query")," option on each command you can create complex queries."),(0,i.kt)("p",null,"There are two types of data returned by the CLI for Microsoft 365 when retrieving data as JSON. In most cases, it returns an array of items, but some of the older commands the response is encapsulated in a ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," object. For both scenario's you can use JMESPath to filter, but the queries are a bit different."),(0,i.kt)("h2",{id:"testing-jmespath-queries"},"Testing JMESPath queries"),(0,i.kt)("p",null,"You can test your queries using the ",(0,i.kt)("a",{parentName:"p",href:"http://jmespath.org/"},"JMESPath")," interactive homepage. You can execute a CLI for Microsoft 365 command, get the JSON response and paste it on the homepage and test your queries from there if you do not want to test them while writing scripts. It is a great way to learn what's possible!"),(0,i.kt)("h2",{id:"basic-array-filters"},"Basic array filters"),(0,i.kt)("p",null,"Let's start with a basic command and return some results using the following command: ",(0,i.kt)("inlineCode",{parentName:"p"},"m365 spo site list"),". To simplify the testing most of the properties are removed, but the result would look similarly to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[{\n    "_ObjectType_": "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties",\n    "AllowDownloadingNonWebViewableFiles": true,\n    "AllowEditing": false,\n    "Title": "Demo 1",\n    "Status": "Active",\n    "StorageMaximumLevel": 26214400,\n    "StorageQuotaType": null\n },\n {\n    "_ObjectType_": "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties",\n    "AllowDownloadingNonWebViewableFiles": false,\n    "AllowEditing": false,\n    "Title": "A Demo 2",\n    "Status": "Active",\n    "StorageMaximumLevel": 26214400,\n    "StorageQuotaType": null\n },\n {\n    "_ObjectType_": "Microsoft.Online.SharePoint.TenantAdministration.SiteProperties",\n    "AllowDownloadingNonWebViewableFiles": true,\n    "AllowEditing": false,\n    "Title": "Sample 1",\n    "Status": "Active",\n    "StorageMaximumLevel": 26214400,\n    "StorageQuotaType": null\n}]\n')),(0,i.kt)("p",null,"Using JMESPath queries you can do basic filtering as well as more complex scenario's like ",(0,i.kt)("inlineCode",{parentName:"p"},"starts_with")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ends_with"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?Title == 'Demo 1']")," returns only the ",(0,i.kt)("strong",{parentName:"li"},"first item")," from the array as it matches on the title ",(0,i.kt)("strong",{parentName:"li"},"Demo 1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?contains(Title, 'Demo')]")," would return the ",(0,i.kt)("strong",{parentName:"li"},"first two items")," as it matches the title on the word ",(0,i.kt)("strong",{parentName:"li"},"Demo"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?contains(*, 'Demo 1')]")," would return any item in the array where the value of any property is ",(0,i.kt)("strong",{parentName:"li"},"Demo 1"),", currently only the ",(0,i.kt)("strong",{parentName:"li"},"first item"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?starts_with(Title, 'Demo')]")," would only return the ",(0,i.kt)("strong",{parentName:"li"},"first item")," as it filters the title to start with ",(0,i.kt)("strong",{parentName:"li"},"Demo"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?ends_with(Title, '1')]")," returns the ",(0,i.kt)("strong",{parentName:"li"},"first and last item"),", as the title ends with a ",(0,i.kt)("strong",{parentName:"li"},"1"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?contains(Title, 'Demo') && AllowDownloadingNonWebViewableFiles]")," returns only the ",(0,i.kt)("strong",{parentName:"li"},"first item")," as it ",(0,i.kt)("strong",{parentName:"li"},"combines a title filter, and a check on AllowDownloadingNonWebViewableFiles")," two filters.")),(0,i.kt)("p",null,"Besides filtering, you can also scope what will be returned as a result:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[*].Title")," returns only the Title for all items."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[*].{Title: Title}")," returns all items as array with a Title property.")),(0,i.kt)("p",null,"Or you can combine both a filter query and scope the results:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?contains(Title, 'Demo') && AllowDownloadingNonWebViewableFiles].Title"),"  returns only the ",(0,i.kt)("strong",{parentName:"li"},"first item title"))),(0,i.kt)("h2",{id:"other-array-filters"},"Other array filters"),(0,i.kt)("p",null,"Some of the commands return complex types. Querying or filtering based on values in complex types can be done with JMESPath as well. The query, however, will look different. Executing the following command ",(0,i.kt)("inlineCode",{parentName:"p"},"m365 flow environment list --output json")," will return a complex type and the result will be similar to the sample below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "name": "4be50206-9576-4237-8b17-36d8aadfaa36",\n    "location": "europe",\n    "type": "Microsoft.ProcessSimple/environments",\n    "id": "/providers/Microsoft.ProcessSimple/environments/4be50206-9576-4237-8b17-36d8aadfaa36",\n    "properties": {\n      "displayName": "Contoso Dev Environment",\n      "createdTime": "2021-06-18T16:36:20.5687306Z",\n      "createdBy": {\n        "id": "SYSTEM",\n        "displayName": "SYSTEM",\n        "type": "NotSpecified"\n      },\n      "lastModifiedTime": "2021-06-18T16:40:32.7592868Z",\n      "provisioningState": "Succeeded",\n      "creationType": "Developer",\n      "environmentSku": "Developer",\n      "environmentType": "NotSpecified",\n      "states": {\n        "management": {\n          "id": "Ready"\n        },\n        "runtime": {\n          "id": "Enabled"\n        }\n      },\n      "isDefault": false,\n      "azureRegionHint": "westeurope",\n      "runtimeEndpoints": {\n        "microsoft.BusinessAppPlatform": "https://europe.api.bap.microsoft.com",\n        "microsoft.CommonDataModel": "https://europe.api.cds.microsoft.com",\n        "microsoft.PowerApps": "https://europe.api.powerapps.com",\n        "microsoft.Flow": "https://europe.api.flow.microsoft.com",\n        "microsoft.PowerAppsAdvisor": "https://europe.api.advisor.powerapps.com",\n        "microsoft.ApiManagement": "https://management.EUR.azure-apihub.net"\n      },\n      "environmentFeatures": {\n        "isOpenApiEnabled": false\n      }\n    },\n    "displayName": "Contoso Dev Environment"\n  },\n  {\n    "name": "Default-3ca3eaa6-140f-4175-9563-2272edf9f338",\n    "location": "europe",\n    "type": "Microsoft.ProcessSimple/environments",\n    "id": "/providers/Microsoft.ProcessSimple/environments/Default-3ca3eaa6-140f-4175-9563-2272edf9f338",\n    "properties": {\n      "displayName": "contoso (default)",\n      "createdTime": "2016-10-28T10:32:54.1945519Z",\n      "createdBy": {\n        "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e",\n        "displayName": "Garth Fort",\n        "type": "NotSpecified"\n      },\n      "lastModifiedTime": "2020-07-28T08:58:12.5785779Z",\n      "lastModifiedBy": {\n        "id": "88e85b64-e687-4e0b-bbf4-f42f5f8e674e",\n        "displayName": "Garth Fort",\n        "email": "garthf@contoso.nl",\n        "type": "User",\n        "tenantId": "3ca3eaa6-140f-4175-9563-2272edf9f338",\n        "userPrincipalName": "garthf@contoso.nl"\n      },\n      "provisioningState": "Succeeded",\n      "creationType": "DefaultTenant",\n      "environmentSku": "Default",\n      "environmentType": "NotSpecified",\n      "states": {\n        "management": {\n          "id": "NotSpecified"\n        },\n        "runtime": {\n          "id": "Enabled"\n        }\n      },\n      "isDefault": true,\n      "azureRegionHint": "westeurope",\n      "runtimeEndpoints": {\n        "microsoft.BusinessAppPlatform": "https://europe.api.bap.microsoft.com",\n        "microsoft.CommonDataModel": "https://europe.api.cds.microsoft.com",\n        "microsoft.PowerApps": "https://europe.api.powerapps.com",\n        "microsoft.Flow": "https://europe.api.flow.microsoft.com",\n        "microsoft.PowerAppsAdvisor": "https://europe.api.advisor.powerapps.com",\n        "microsoft.ApiManagement": "https://management.EUR.azure-apihub.net"\n      },\n      "environmentFeatures": {\n        "isOpenApiEnabled": false\n      }\n    },\n    "displayName": "contoso (default)"\n  }\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?name == '4be50206-9576-4237-8b17-36d8aadfaa36']")," returns only the ",(0,i.kt)("strong",{parentName:"li"},"first item")," from the array as it matches on ",(0,i.kt)("strong",{parentName:"li"},"4be50206-9576-4237-8b17-36d8aadfaa36"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?properties.displayName == 'Contoso Dev Environment']")," would return the ",(0,i.kt)("strong",{parentName:"li"},"first item")," from the array as it matches on ",(0,i.kt)("strong",{parentName:"li"},"Contoso Dev Environment"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?properties.provisioningState == 'Succeeded']")," would return the ",(0,i.kt)("strong",{parentName:"li"},"both items")," from the array as both had provisioningState ",(0,i.kt)("strong",{parentName:"li"},"Succeeded"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?starts_with(properties.displayName, 'Contoso')]")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"[?starts_with(displayName, 'Contoso')]")," would return the ",(0,i.kt)("strong",{parentName:"li"},"first item")," of the array as it filters on the displayName for ",(0,i.kt)("strong",{parentName:"li"},"Contoso")," and each filter is case-sensitive."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[?ends_with(properties.azureRegionHint, 'europe')]")," would return ",(0,i.kt)("strong",{parentName:"li"},"both")," items as it filters on ",(0,i.kt)("strong",{parentName:"li"},"europe"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All JMESPath queries are case sensitive")),(0,i.kt)("h2",{id:"ordering-the-dataset"},"Ordering the dataset"),(0,i.kt)("p",null,"Besides filtering, there are several use cases where it makes sense to order the returned result set. Lets say you want to retrieve SharePoint Online user activity, something that can be achieved using the following command ",(0,i.kt)("inlineCode",{parentName:"p"},"m365 spo report activityuserdetail --period D7 --output json"),". You then might want to filter, but perhaps you want to also sort the result set based on dates or activity. The returned result looks similar to the ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," sample:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Report Refresh Date": "2021-06-15",\n    "User Principal Name": "garthf@contoso.com",\n    "Is Deleted": "False",\n    "Deleted Date": "",\n    "Last Activity Date": "2020-07-07",\n    "Viewed Or Edited File Count": "0",\n    "Synced File Count": "0",\n    "Shared Internally File Count": "0",\n    "Shared Externally File Count": "0",\n    "Visited Page Count": "0",\n    "Assigned Products": "OFFICE 365 E3",\n    "Report Period": "7"\n  },\n  {\n    "Report Refresh Date": "2021-06-15",\n    "User Principal Name": "sands@contoso.com",\n    "Is Deleted": "False",\n    "Deleted Date": "",\n    "Last Activity Date": "",\n    "Viewed Or Edited File Count": "152",\n    "Synced File Count": "0",\n    "Shared Internally File Count": "0",\n    "Shared Externally File Count": "0",\n    "Visited Page Count": "0",\n    "Assigned Products": "OFFICE 365 E3",\n    "Report Period": "7"\n  },\n  {\n    "Report Refresh Date": "2021-06-15",\n    "User Principal Name": "janets@contoso.com",\n    "Is Deleted": "True",\n    "Deleted Date": "2021-05-15",\n    "Last Activity Date": "",\n    "Viewed Or Edited File Count": "0",\n    "Synced File Count": "0",\n    "Shared Internally File Count": "0",\n    "Shared Externally File Count": "0",\n    "Visited Page Count": "0",\n    "Assigned Products": "OFFICE 365 E3",\n    "Report Period": "7"\n  }\n]\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'sort_by(@, &"Last Activity Date")')," would return the result set with the first ",(0,i.kt)("strong",{parentName:"li"},"Last Activity Date")," on top. That means empty dates first."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'reverse(sort_by(@, &"Last Activity Date"))')," returns the result in reversed order, it thus shows the most recent last activity date on top."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'reverse(sort_by(@, &"Viewed Or Edited File Count"))')," return the user with the most edited items on top."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'reverse(sort_by(@, &"Viewed Or Edited File Count"))[*]."User Principal Name')," would sort and only return the ",(0,i.kt)("strong",{parentName:"li"},"User Principal Name")," property. The result is sorted to show the username ordered by the most edited files on top."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'reverse(sort_by(@, &"Viewed Or Edited File Count")) | [0]."User Principal Name"')," would sort and return the ",(0,i.kt)("strong",{parentName:"li"},"User Principal Name")," for the user with the most edited files. It thus only returns one name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'reverse(sort_by(@, &"Viewed Or Edited File Count")) | [?"Is Deleted" == \'False\']."User Principal Name"')," sorts by then ",(0,i.kt)("strong",{parentName:"li"},"Viewed Or Edited File Count"),", then filters out deleted users and finally returns the ",(0,i.kt)("strong",{parentName:"li"},"User Principal Name"))),(0,i.kt)("p",null,"Combining sorting and filtering makes for a powerful cross-platform way of presenting your data. You are not dependent on ",(0,i.kt)("inlineCode",{parentName:"p"},"PowerShell")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Bash")," to get the result you are looking for."),(0,i.kt)("p",null,"For complete list of filter options check out the ",(0,i.kt)("a",{parentName:"p",href:"https://jmespath.org/examples.html"},"JMESPath Examples"),"."))}d.isMDXComponent=!0}}]);