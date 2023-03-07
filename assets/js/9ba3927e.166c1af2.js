"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8115],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||l;return t?i.createElement(h,r(r({ref:n},u),{},{components:t})):i.createElement(h,r({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[s]="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27331:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=t(87462),a=(t(67294),t(3905));const l={title:"Cache Plugin",keywords:["Cache"],description:"Cache Plugin"},r="1. Overview",o={unversionedId:"plugin-center/cache/cache-plugin",id:"version-2.4.3/plugin-center/cache/cache-plugin",isDocsHomePage:!1,title:"Cache Plugin",description:"Cache Plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/cache/cache-plugin.md",sourceDirName:"plugin-center/cache",slug:"/plugin-center/cache/cache-plugin",permalink:"/docs/2.4.3/plugin-center/cache/cache-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/cache/cache-plugin.md",version:"2.4.3",frontMatter:{title:"Cache Plugin",keywords:["Cache"],description:"Cache Plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"GeneralContext Plugin",permalink:"/docs/2.4.3/plugin-center/common/general-context-plugin"},next:{title:"Custom Load Balancer",permalink:"/docs/2.4.3/developer/spi/custom-load-balance"}},c=[{value:"1.1 Plugin Name",id:"11-plugin-name",children:[]},{value:"1.2 Appropriate Scenario",id:"12-appropriate-scenario",children:[]},{value:"1.3 Plugin functionality",id:"13-plugin-functionality",children:[]},{value:"1.4 Plugin code",id:"14-plugin-code",children:[]},{value:"1.5 Added Since Which shenyu version",id:"15-added-since-which-shenyu-version",children:[]},{value:"2.1 Plugin-use procedure chart",id:"21-plugin-use-procedure-chart",children:[]},{value:"2.2 Import pom",id:"22-import-pom",children:[]},{value:"2.3 Enable plugin",id:"23-enable-plugin",children:[]},{value:"2.4 Config plugin",id:"24-config-plugin",children:[{value:"2.4.1 Plugin Config",id:"241-plugin-config",children:[]},{value:"2.4.2 Selector Config",id:"242-selector-config",children:[]},{value:"2.4.3 Rule Config",id:"243-rule-config",children:[]}]},{value:"2.5 Examples",id:"25-examples",children:[{value:"2.5.1 Use redis cache request result",id:"251-use-redis-cache-request-result",children:[]}]}],p={toc:c},u="wrapper";function s(e){let{components:n,...l}=e;return(0,a.kt)(u,(0,i.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-overview"},"1. Overview"),(0,a.kt)("h2",{id:"11-plugin-name"},"1.1 Plugin Name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cache Plugin")),(0,a.kt)("h2",{id:"12-appropriate-scenario"},"1.2 Appropriate Scenario"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Situation where data is not updated frequently and a large number of calls are required.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"For Situation where data consistency is not required."))),(0,a.kt)("h2",{id:"13-plugin-functionality"},"1.3 Plugin functionality"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Cache")," plugin is able to cache the results of the target service, allowing the user to configure the expiration\ntime of the cached results.")),(0,a.kt)("h2",{id:"14-plugin-code"},"1.4 Plugin code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Module ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-cache-handler"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Module ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-cache-redis"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Module ",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-plugin-cache-memory"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Class ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cache.CachePlugin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Class ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cache.redis.RedisCache"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Class ",(0,a.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.cache.memory.MemoryCache")))),(0,a.kt)("h2",{id:"15-added-since-which-shenyu-version"},"1.5 Added Since Which shenyu version"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Since 2.4.3")),(0,a.kt)("h1",{id:"2-how-to-use-plugin"},"2. How to use plugin"),(0,a.kt)("h2",{id:"21-plugin-use-procedure-chart"},"2.1 Plugin-use procedure chart"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(74327).Z})),(0,a.kt)("h2",{id:"22-import-pom"},"2.2 Import pom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Import cache plugin dependency in ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenYu Bootstrap"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--shenyu cache plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-cache</artifactId>\n  <version>${project.version}</version>\n</dependency>\n\x3c!--shenyu cache plugin end--\x3e\n")),(0,a.kt)("h2",{id:"23-enable-plugin"},"2.3 Enable plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In shenyu-admin --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"cache")," set Status enabled.")),(0,a.kt)("h2",{id:"24-config-plugin"},"2.4 Config plugin"),(0,a.kt)("h3",{id:"241-plugin-config"},"2.4.1 Plugin Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(16498).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cacheType"),": Cache currently supports two modes of caching data.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"memory\uff1alocal memory mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"redis\uff1aredis mode"))),(0,a.kt)("p",null,"The current default is ",(0,a.kt)("inlineCode",{parentName:"p"},"local memory mode"),", the results of the target service are stored in the local memory, if the\ngateway is deployed by way of cluster, it is not recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"local memory mode"),", it is recommended to\nuse ",(0,a.kt)("inlineCode",{parentName:"p"},"redis mode"),", the data of the target service are cached in redis."),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"local memory mode"),", you only need to select memory in cacheType, no other configuration is needed."),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("inlineCode",{parentName:"p"},"redis mode"),", select redis in cacheType, and the parameters are as follows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"database"),": which database the cache results are stored in, the default is index database 0.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"master"),": default is master.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"mode"),": the working mode of redis, the default is single-point mode: ",(0,a.kt)("inlineCode",{parentName:"p"},"standalone"),", in addition to cluster\nmode: ",(0,a.kt)("inlineCode",{parentName:"p"},"cluster"),", sentinel mode: ",(0,a.kt)("inlineCode",{parentName:"p"},"sentinel"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"url"),": configure the IP and port of the redis database, configured by colon connection, example: ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.1:6379"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"password"),": the password of the redis database, if not, you can not configure.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"maxldle"),": the maximum free connections in the connection pool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"minldle"),": minimum idle connections in the connection pool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"maxActive"),": the maximum number of connections in the connection pool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"maxWait"),": the maximum blocking wait time for the connection pool (use negative values to indicate no limit) default -1"))),(0,a.kt)("h3",{id:"242-selector-config"},"2.4.2 Selector Config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"))),(0,a.kt)("h3",{id:"243-rule-config"},"2.4.3 Rule Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(86956).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Only matching requests will be cached by the Cache plugin for the results of the target service.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"timeoutSecods"),": the value is the target service result data cache time, the default is 60, in ",(0,a.kt)("inlineCode",{parentName:"p"},"seconds"),"."),(0,a.kt)("p",null,"Notice: The current version of the Cache plugin uses the url as a unique key to identify the same request."),(0,a.kt)("h2",{id:"25-examples"},"2.5 Examples"),(0,a.kt)("h3",{id:"251-use-redis-cache-request-result"},"2.5.1 Use redis cache request result"),(0,a.kt)("h4",{id:"2511-plugin-config"},"2.5.1.1 Plugin Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(31773).Z})),(0,a.kt)("p",null,"select redis cache type, config redis database, url, mode, password"),(0,a.kt)("h4",{id:"2512-selector-config"},"2.5.1.2 Selector Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(44432).Z})),(0,a.kt)("h4",{id:"2513-rule-config"},"2.5.1.3 Rule Config"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(86956).Z})),(0,a.kt)("h4",{id:"2514-send-request"},"2.5.1.4 Send Request"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"send http request to cache result.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http",metastring:'title="request"',title:'"request"'},"### shengyu getway proxy orderSave\nGET http://localhost:9195/http/order/findById?id=123\nAccept: application/json\nContent-Type: application/json\n")),(0,a.kt)("h4",{id:"2515-check-result"},"2.5.1.5 Check Result"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(499).Z})),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(11521).Z})),(0,a.kt)("h1",{id:"3-how-to-disable-plugin"},"3. How to disable plugin"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"cache")," set Status disable.")))}s.isMDXComponent=!0},16498:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cache-plugin-config-en-a94429e8eb8d41ab800b4cf63f83ebd6.png"},31773:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cache-plugin-config-example-en-51e820d0cd6ca19fb8ebea5ee045352d.png"},86956:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cache-plugin-rule-en-f87256d214b81b378f155e1cf02b6fdf.png"},44432:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cache-plugin-selector-en-a4d58981c816f3776646f74865ae102c.png"},11521:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cache-result-check-0070758c84d5ab1ba0d88d4bab73fe92.png"},499:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cache-result-6cf64e74954ad4fb3bbd1f0bae2cfc9b.jpg"},74327:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin_use_en-8b5661551cdf92fdabc9cb2e7947cffc.jpg"}}]);