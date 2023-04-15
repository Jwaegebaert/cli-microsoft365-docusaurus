"use strict";(self.webpackChunkcli_for_microsoft_365_docs=self.webpackChunkcli_for_microsoft_365_docs||[]).push([[9051],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>p});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=n.createContext({}),l=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,c=t.parentName,s=m(t,["components","mdxType","originalType","parentName"]),u=l(a),b=i,p=u["".concat(c,".").concat(b)]||u[b]||h[b]||r;return a?n.createElement(p,o(o({ref:e},s),{},{components:a})):n.createElement(p,o({ref:e},s))}));function p(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,o=new Array(r);o[0]=b;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=t,m[u]="string"==typeof t?t:i,o[1]=m;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},16171:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>v,contentTitle:()=>k,default:()=>P,frontMatter:()=>w,metadata:()=>f,toc:()=>S});var n=a(87462),i=a(67294),r=a(3905),o=a(44996);const m="grid_w7NI",c="gridItemContainer_bM_y",l="gridItem_nErF",s="gridItemAlignCenter_ggF4",u="gridItemImg_bztR",h="gridItemText_ru2m",b="gridItemName_exZo",p="gridItemCompany_urF2",y="gridItemLink_KSGK",g="gridItemLinkImg_bSmv",d=t=>{let{individuals:e}=t;return i.createElement("div",{className:m},e.map((t=>i.createElement("div",{className:c},i.createElement("div",{className:l},i.createElement("div",{className:s},i.createElement("img",{src:t.github?`https://github.com/${t.github}.png`:`https://ui-avatars.com/api/?name=${t.name}`,className:u})),i.createElement("div",{className:s},i.createElement("div",{className:h},i.createElement("div",{className:b},t.name),i.createElement("div",{className:p},t.company))),i.createElement("div",{className:s},t.github&&i.createElement("a",{href:`https://github.com/${t.github}`,title:"GitHub",className:y},i.createElement("img",{alt:"GitHub",src:(0,o.Z)("/img/github-icon.svg"),className:g})),t.twitter&&i.createElement("a",{href:`https://twitter.com/${t.twitter}`,title:"Twitter",className:y},i.createElement("img",{alt:"Twitter",src:(0,o.Z)("/img/twitter-icon.svg"),className:g}))))))))},w={sidebar_position:5,hide_table_of_contents:!0},k="Meet the Team",f={unversionedId:"about/team",id:"about/team",title:"Meet the Team",description:"Do you want to know the curious and bright minds behind the CLI for Microsoft 365? Look no further! Below you will find a list of all our hard-working maintainers and brilliant contributors.",source:"@site/docs/about/team.mdx",sourceDirName:"about",slug:"/about/team",permalink:"/cli-microsoft365-docusaurus/about/team",draft:!1,editUrl:"https://github.com/pnp/cli-microsoft365/blob/main/docs/docs/about/team.mdx",tags:[],version:"current",lastUpdatedAt:1681508106,formattedLastUpdatedAt:"Apr 14, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,hide_table_of_contents:!0},sidebar:"about",previous:{title:"Release notes",permalink:"/cli-microsoft365-docusaurus/about/release-notes"},next:{title:"License",permalink:"/cli-microsoft365-docusaurus/about/license"}},v={},S=[{value:"Maintainers",id:"maintainers",level:2},{value:"Contributors",id:"contributors",level:2}],M={toc:S},j="wrapper";function P(t){let{components:e,...a}=t;return(0,r.kt)(j,(0,n.Z)({},M,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"meet-the-team"},"Meet the Team"),(0,r.kt)("p",null,"Do you want to know the curious and bright minds behind the CLI for Microsoft 365? Look no further! Below you will find a list of all our hard-working maintainers and brilliant contributors."),(0,r.kt)("h2",{id:"maintainers"},"Maintainers"),(0,r.kt)(d,{individuals:[{name:"Adam Wojcik",company:"",github:"Adam-it",twitter:"Adam25858782"},{name:"Albert-Jan Schot",company:"Blis Digital",github:"appieschot",twitter:"appieschot"},{name:"Arjun Menon",company:"Tata Consultancy Services",github:"arjunumenon",twitter:"arjunumenon"},{name:"Garry Trinder",company:"Microsoft",github:"garrytrinder",twitter:"garrytrinder"},{name:"Jasey Waegebaert",company:"GMI group",github:"Jwaegebaert",twitter:"jwaegebaert"},{name:"Martin Lingstuyl",company:"I4-YOU",github:"martinlingstuyl",twitter:"martinlingstuyl"},{name:"Milan Holemans",company:"VanRoey",github:"milanholemans",twitter:""},{name:"Patrick Lamber",company:"EasyLife 365",github:"plamber",twitter:"patricklamber"},{name:"Rabia Williams",company:"Microsoft",github:"rabwill",twitter:"williamsrabia"},{name:"Waldek Mastykarz",company:"Microsoft",github:"waldekmastykarz",twitter:"waldekm"}],mdxType:"TeamCardOverview"}),(0,r.kt)("h2",{id:"contributors"},"Contributors"),(0,r.kt)(d,{individuals:[{name:"Aakash Bhardwaj",company:"",github:"aakashbhardwaj619",twitter:"aakash_316"},{name:"Aaron Sotelo",company:"",github:"AaronS16",twitter:""},{name:"Abderahman Moujahid",company:"",github:"Abderahman88",twitter:""},{name:"Abhishek K M",company:"",github:"",twitter:""},{name:"Adam Wojcik",company:"",github:"Adam-it",twitter:"Adam25858782"},{name:"Akash Karda",company:"",github:"akashkarda",twitter:"akkikarda"},{name:"Albert-Jan Schot",company:"Blis Digital",github:"appieschot",twitter:"appieschot"},{name:"Aleksandar Nikoli\u0107",company:"",github:"alexandair",twitter:"alexandair"},{name:"Allan Hvam",company:"",github:"",twitter:""},{name:"Andrew Connell",company:"Voitanos",github:"andrewconnell",twitter:"andrewconnell"},{name:"Anoop Tatti",company:"Content+Cloud",github:"anoopt",twitter:"anooptells"},{name:"Arjen Bloemsma",company:"Bloemium",github:"arjenbloemsma",twitter:""},{name:"Arjun Menon",company:"Tata Consultancy Services",github:"arjunumenon",twitter:"arjunumenon"},{name:"Arnie Raju",company:"",github:"",twitter:""},{name:"Atharva Patil",company:"",github:"Atharva321",twitter:""},{name:"Balamurugan Kailasam",company:"",github:"clientbala",twitter:""},{name:"Bassem Khalil",company:"",github:"",twitter:""},{name:"Bruce Albany",company:"Telstra Purple",github:"balbany",twitter:"brucealbany"},{name:"Cas van Iersel",company:"Rapid Circle",github:"casvaniersel",twitter:"casvaniersel"},{name:"Chinu Anand",company:"",github:"chinu-anand",twitter:"anand_chinu"},{name:"Christian Bewernitz",company:"",github:"karfau",twitter:""},{name:"Conor O'Callaghan",company:"",github:"Conor0Callaghan",twitter:""},{name:"Cyril C Kurian",company:"",github:"cyrilckurian",twitter:"chirackalcyril"},{name:"Dan Greuel",company:"",github:"dgreuel",twitter:""},{name:"Daniaal Nadir",company:"Smoothwall",github:"daniaalnadir",twitter:"daniaalnadir"},{name:"Daniel Laskewitz",company:"Microsoft",github:"Laskewitz",twitter:"Laskewitz"},{name:"Danish Shafi",company:"",github:"builtbydans",twitter:"builtbydan"},{name:"David Calabro",company:"",github:"DaveCalGH",twitter:"AllTheCodez"},{name:"David Ramalho",company:"",github:"",twitter:""},{name:"Dipen Shah",company:"Rapid Circle",github:"dips365",twitter:"Dips_365"},{name:"Don Kirkham",company:"Probitas Data Solutions",github:"DonKirkham",twitter:"donkirkham"},{name:"Douglas Rom\xe3o",company:"",github:"",twitter:""},{name:"Dushyant Sharma",company:"",github:"techsnap",twitter:""},{name:"Elio Struyf",company:"Struyf Consulting",github:"estruyf",twitter:"eliostruyf"},{name:"Erwin van Hunen ",company:"Valo Intranet",github:"erwinvanhunen",twitter:"erwinvanhunen"},{name:"Fredrik Thorild ",company:"Sogeti Sweden",github:"fthorild",twitter:"taxonomythorild"},{name:"Ganesh Sanap",company:"",github:"ganesh-sanap",twitter:"ganeshsanap20"},{name:"Garry Trinder",company:"Microsoft",github:"garrytrinder",twitter:"garrytrinder"},{name:"Gaston Flores ",company:"Flybondi",github:"gaston-flores",twitter:""},{name:"Geoffrey Hunt",company:"",github:"runningdeveloper",twitter:"geoff4l"},{name:"Hugo Bernier",company:"Microsoft",github:"hugoabernier",twitter:"bernierh"},{name:"H\xfcseyin Saat\xe7i",company:"",github:"huseyinsaatci",twitter:"huseyinn_saatci"},{name:"Jasey Waegebaert",company:"GMI group",github:"Jwaegebaert",twitter:"jwaegebaert"},{name:"Jayakumar Balasubramaniam",company:"Hubfly",github:"JayakumarB",twitter:"jayakumrb"},{name:"Joakim Hagstr\xf6m",company:"Microsoft",github:"jhagstrom",twitter:""},{name:"Joakim H\xf6gberg",company:"Bravero",github:"joakimhogberg",twitter:"joakimhogberg"},{name:"John Rafael",company:"",github:"",twitter:""},{name:"Joseph Velliah",company:"",github:"sprider",twitter:"JosephVelliah"},{name:"Karnail Singh Choudhary",company:"",github:"nightfury-crypto",twitter:"3_karnail"},{name:"Kevin McDonnell",company:"CPS",github:"kevmcdonk",twitter:"kevmcdonk"},{name:"Kislay Sinha",company:"",github:"sinhakislay",twitter:""},{name:"Laurent Sittler",company:"",github:"Laul0",twitter:""},{name:"Lee Ford",company:"Symity Ltd",github:"leeford",twitter:"lee_ford"},{name:"Luise Freese",company:"M365 Princess",github:"LuiseFreese",twitter:"LuiseFreese"},{name:"Mark Powney",company:"Valo Intranet",github:"mpowney",twitter:"mpowney"},{name:"Mark Priem",company:"",github:"mpriem",twitter:""},{name:"Mark van Dijk",company:"Ichicraft",github:"MarksPoint",twitter:"MarksPoint"},{name:"Martin Lingstuyl",company:"I4-YOU",github:"martinlingstuyl",twitter:"martinlingstuyl"},{name:"Mathijs Verbeeck",company:"Xylos",github:"MathijsVerbeeck",twitter:"mathijsverbeeck"},{name:"Micha\xebl Maillot",company:"onepoint",github:"michaelmaillot",twitter:"michael_maillot"},{name:"Mikael Svenson",company:"Microsoft",github:"wobba",twitter:"mikaelsvenson"},{name:"Milan Holemans",company:"VanRoey",github:"milanholemans",twitter:""},{name:"Mohamed Ashiq Faleel",company:"TCS",github:"ashiqf",twitter:"ashiqfaleel"},{name:"Nanddeep Nachan",company:"",github:"nanddeepn",twitter:"NanddeepNachan"},{name:"Nicholas Honen",company:"",github:"nickhonen",twitter:"nickhonen4"},{name:"Nico De Cleyre",company:"Ordina Belgium",github:"nicodecleyre",twitter:"NicoDeCleyre"},{name:"Nicolas",company:"Mendable",github:"nickscamara",twitter:""},{name:"Otto",company:"",github:"berot3",twitter:""},{name:"Patrick Lamber",company:"Experts Inside",github:"plamber",twitter:"patricklamber"},{name:"Paul Keijzers",company:"KbWorks",github:"KbWorks",twitter:"KbWorks"},{name:"Paul Schaeflein",company:"AddIn365",github:"pschaeflein",twitter:"paulschaeflein"},{name:"Pawe\u0142 Hawrylak",company:"EG A/S",github:"phawrylak",twitter:""},{name:"Pete Skelly",company:"@transport4",github:"pkskelly",twitter:"pskelly"},{name:"Peter Biro",company:"",github:"",twitter:""},{name:"Peter Tane",company:"",github:"pdtane",twitter:""},{name:"Phil Harding",company:"",github:"phillipharding",twitter:"phillipharding"},{name:"Piotr Siatka",company:"Valo Intranet",github:"siata13",twitter:"PiotrSiatka"},{name:"Pramod Ghuge",company:"",github:"pramod74",twitter:""},{name:"Prasad Kasireddy",company:"Capgemini Technology Services India",github:"PrasadKasireddy",twitter:"Prasad_kasiredd"},{name:"Priyanshu Ahlawat",company:"GEU",github:"PriyanshuAhlawat",twitter:"PriyanshuAhla13"},{name:"Rabia Williams",company:"Microsoft",github:"rabwill",twitter:"williamsrabia"},{name:"Rajesh Sitaraman",company:"aws",github:"rjesh-git",twitter:"rjesh"},{name:"Reshmee Auckloo",company:"",github:"reshmee011",twitter:""},{name:"Riccardo Solazzi",company:"",github:"theZal",twitter:""},{name:"Rick van Rousselt",company:"Advantive",github:"RickVanRousselt",twitter:"rickvanrousselt"},{name:"Robert Dyjas",company:"",github:"robdy",twitter:"robdyy"},{name:"Robert Jaakke",company:"Rapid Circle",github:"rjaakke",twitter:""},{name:"Robert Schouten",company:"Rapid Circle",github:"rfjschouten",twitter:"rfjschouten"},{name:"Rodrigo Romano",company:"Viloc",github:"RARomano",twitter:"rodrigo_romano"},{name:"Roman Rozinov",company:"CG-Sogeti",github:"romanatsogeti",twitter:"romanrozinov"},{name:"Sebastian Sch\xfctze",company:"DB Systel GmbH",github:"SebastianSchuetze",twitter:"RazorSPoint"},{name:"Sebastien Levert",company:"Microsoft",github:"sebastienlevert",twitter:"sebastienlevert"},{name:"Sekar Thangavel",company:"Qatar Foundation",github:"SekarThangavel",twitter:"SekThang"},{name:"Shantha Kumar",company:"",github:"ktskumar",twitter:"ktskumar"},{name:"Siddharth Vaghasia",company:"",github:"siddharth-vaghasia",twitter:"siddh_me"},{name:"Simon \xc5gren",company:"Advania - Knowledge Factory",github:"simonagren",twitter:"agrenpoint"},{name:"Smita Nachan",company:"",github:"SmitaNachan",twitter:"smitanachan"},{name:"Stefan Bauer",company:"N8D",github:"StfBauer",twitter:"stfbauer"},{name:"Steve M\xfccklisch",company:"",github:"muecs",twitter:""},{name:"Stijn Brouwers",company:"BD Commit",github:"stijnbrouwers",twitter:"stijnbrouwers85"},{name:"Stijn Haerkens",company:"VanRoey.be",github:"stijnhaerkenss",twitter:""},{name:"Sudharsan Kesavanarayanan",company:"NTT Ltd",github:"sudharsank",twitter:"sudharsank"},{name:"Taaqif Peck",company:"",github:"Taaqif",twitter:""},{name:"Tanmay Rathi",company:"Intuit",github:"Tanmay-21",twitter:""},{name:"Thomas G\xf6lles",company:"Solvion",github:"thomyg",twitter:"thomyg"},{name:"Tim Van de Voorde",company:"IW",github:"timdelavoorde",twitter:""},{name:"Trygvi Zachariassen Laksafoss",company:"Lundbeck",github:"TrygviZL",twitter:""},{name:"Valeras Narbutas",company:"Macaw",github:"ValerasNarbutas",twitter:"ValerasNarbutas"},{name:"Vardhaman Deshpande",company:"",github:"vman",twitter:"vrdmn"},{name:"Velin Georgiev",company:"",github:"VelinGeorgiev",twitter:"velingeorgiev"},{name:"Veronique Lengelle",company:"CPS",github:"veronicageek",twitter:"veronicageek"},{name:"Vincent Biret",company:"Microsoft",github:"baywet",twitter:""},{name:"Vipul Kelkar",company:"Rapid Circle",github:"vipulkelkar",twitter:"vipulkelkar"},{name:"Vividh Pandey ",company:"",github:"VividhPandey003",twitter:"VividhPandey13"},{name:"Waldek Mastykarz",company:"Microsoft",github:"waldekmastykarz",twitter:"waldekm"},{name:"Wictor Wil\xe9n",company:"Microsoft",github:"wictorwilen",twitter:"wictor"},{name:"Yannick Plenevaux",company:"PVX Solutions",github:"ypcode",twitter:"yp_code"},{name:"Yannick Reekmans",company:"Qubix365",github:"YannickRe",twitter:"YannickReekmans"},{name:"strafe",company:"",github:"strafe",twitter:""}],mdxType:"TeamCardOverview"}))}P.isMDXComponent=!0}}]);