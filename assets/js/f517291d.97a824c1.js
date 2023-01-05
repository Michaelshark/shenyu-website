"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28022],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return t?a.createElement(g,r(r({ref:n},s),{},{components:t})):a.createElement(g,r({ref:n},s))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[d]="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},33037:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const l={sidebar_position:2,title:"Plugin Handle Explanation",keywords:["plugin"],description:"plugin handle explanation"},r=void 0,o={unversionedId:"admin/plugin-handle-explanation",id:"version-2.3.0-Legacy/admin/plugin-handle-explanation",isDocsHomePage:!1,title:"Plugin Handle Explanation",description:"plugin handle explanation",source:"@site/versioned_docs/version-2.3.0-Legacy/admin/plugin-handle-explanation.md",sourceDirName:"admin",slug:"/admin/plugin-handle-explanation",permalink:"/docs/2.3.0-Legacy/admin/plugin-handle-explanation",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/admin/plugin-handle-explanation.md",version:"2.3.0-Legacy",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Plugin Handle Explanation",keywords:["plugin"],description:"plugin handle explanation"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Dict Management",permalink:"/docs/2.3.0-Legacy/admin/dictionary-management"},next:{title:"Selector Detailed Explanation",permalink:"/docs/2.3.0-Legacy/admin/selector-and-rule"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Table Design",id:"table-design",children:[]},{value:"Tutorial",id:"tutorial",children:[]}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In our Soul-Admin background, each plugin uses the Handle field to represent a different processing, and plugin processing is used to manage and edit custom processing fields in JSON."),(0,i.kt)("li",{parentName:"ul"},"This feature is mainly used to support the plug-in handling template configuration")),(0,i.kt)("h2",{id:"table-design"},"Table Design"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sql")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `plugin_handle` (\n  `id` varchar(128) NOT NULL,\n  `plugin_id` varchar(128) NOT NULL COMMENT 'plugin id',\n  `field` varchar(100) NOT NULL COMMENT 'field',\n  `label` varchar(100) DEFAULT NULL COMMENT 'label',\n  `data_type` smallint(6) NOT NULL DEFAULT '1' COMMENT 'data type 1 number 2 string 3 select box',\n  `type` smallint(6) NULL COMMENT 'type, 1 means selector, 2 means rule',\n  `sort` int(4)  NULL COMMENT 'sort',\n  `ext_obj` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'extra configuration (json format data)',\n  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `plugin_id_field_type` (`plugin_id`,`field`,`type`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;\n")),(0,i.kt)("h2",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"eg. When we developed the ",(0,i.kt)("inlineCode",{parentName:"p"},"springCloud")," plugin, the rule table needed to store some configuration into the handle field,\nConfigure the corresponding entity class as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"    public class SpringCloudRuleHandle implements RuleHandle {\n    \n        /**\n         * this remote uri path.\n         */\n        private String path;\n    \n        /**\n         * timeout is required.\n         */\n        private long timeout = Constants.TIME_OUT;    \n    }\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"step1.")," We can go directly to the plug-in management link  ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:9095/#/system/plugin")," Click Edit Plugin for processing\n",(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/plugin-manager.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"step2.")," Add a string type field path and a numeric type TIMEOUT"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/add-plugin-handle.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"step3.")," Finally, you can enter path, TIMEOUT and commit to the handle field when you add a rule in the plugin rule configuration page"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/springcloud-rule-handle.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: If data_type is configured to be ",(0,i.kt)("inlineCode",{parentName:"em"},"3")," ",(0,i.kt)("inlineCode",{parentName:"em"},"selection box"),", the input field drop-down selection on the new rule page is displayed by going to the ",(0,i.kt)("a",{parentName:"em",href:"/docs/2.3.0-Legacy/admin/dictionary-management"},"soul_dict\uff09")," table to find all the options available")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Sentinel plug-in, for example, is shown below:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/sentinel-rule-handle.png",alt:null})))}s.isMDXComponent=!0}}]);