"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71863],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>c});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function g(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=t.createContext({}),p=function(e){var a=t.useContext(y),n=a;return e&&(n="function"==typeof e?e(a):g(g({},a),e)),n},o=function(e){var a=p(e.components);return t.createElement(y.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,y=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,c=s["".concat(y,".").concat(d)]||s[d]||m[d]||l;return n?t.createElement(c,g(g({ref:a},o),{},{components:n})):t.createElement(c,g({ref:a},o))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,g=new Array(l);g[0]=d;var i={};for(var y in a)hasOwnProperty.call(a,y)&&(i[y]=a[y]);i.originalType=e,i[s]="string"==typeof e?e:r,g[1]=i;for(var p=2;p<l;p++)g[p]=n[p];return t.createElement.apply(null,g)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61825:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/Panel",id:"version-4.7.3/api/Panel",title:"Panel",description:"A slide data component that holds information of a single HTMLElement",source:"@site/versioned_docs/version-4.7.3/api/Panel.mdx",sourceDirName:"api",slug:"/api/Panel",permalink:"/egjs-flicking/docs/4.7.3/api/Panel",draft:!1,editUrl:null,tags:[],version:"4.7.3",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Viewport",permalink:"/egjs-flicking/docs/4.7.3/api/Viewport"},next:{title:"VirtualPanel",permalink:"/egjs-flicking/docs/4.7.3/api/VirtualPanel"}},y={},p=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"element",id:"element",level:3},{value:"elementProvider",id:"elementProvider",level:3},{value:"index",id:"index",level:3},{value:"position",id:"position",level:3},{value:"size",id:"size",level:3},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",level:3},{value:"height",id:"height",level:3},{value:"margin",id:"margin",level:3},{value:"alignPosition",id:"alignPosition",level:3},{value:"removed",id:"removed",level:3},{value:"rendered",id:"rendered",level:3},{value:"loading",id:"loading",level:3},{value:"range",id:"range",level:3},{value:"toggled",id:"toggled",level:3},{value:"toggleDirection",id:"toggleDirection",level:3},{value:"offset",id:"offset",level:3},{value:"progress",id:"progress",level:3},{value:"outsetProgress",id:"outsetProgress",level:3},{value:"visibleRatio",id:"visibleRatio",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"markForShow",id:"markForShow",level:3},{value:"markForHide",id:"markForHide",level:3},{value:"resize",id:"resize",level:3},{value:"setSize",id:"setSize",level:3},{value:"contains",id:"contains",level:3},{value:"destroy",id:"destroy",level:3},{value:"includePosition",id:"includePosition",level:3},{value:"includeRange",id:"includeRange",level:3},{value:"isVisibleOnRange",id:"isVisibleOnRange",level:3},{value:"focus",id:"focus",level:3},{value:"prev",id:"prev",level:3},{value:"next",id:"next",level:3},{value:"increaseIndex",id:"increaseIndex",level:3},{value:"decreaseIndex",id:"decreaseIndex",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"toggle",id:"toggle",level:3},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",level:3}],o={toc:p},s="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(s,(0,t.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class Panel\n")),(0,r.yg)("p",null,"A slide data component that holds information of a single HTMLElement"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#element"},"element"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#elementProvider"},"elementProvider"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#index"},"index"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#position"},"position"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#size"},"size"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#height"},"height"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#margin"},"margin"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#alignPosition"},"alignPosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#removed"},"removed"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#rendered"},"rendered"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#loading"},"loading"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#range"},"range"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#toggled"},"toggled"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#toggleDirection"},"toggleDirection"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#offset"},"offset"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#progress"},"progress"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#outsetProgress"},"outsetProgress"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#visibleRatio"},"visibleRatio"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#align"},"align")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#markForShow"},"markForShow"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#markForHide"},"markForHide"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#resize"},"resize"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#setSize"},"setSize"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#contains"},"contains"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#includePosition"},"includePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#includeRange"},"includeRange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#isVisibleOnRange"},"isVisibleOnRange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#focus"},"focus"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#prev"},"prev"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#next"},"next"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#increaseIndex"},"increaseIndex"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#decreaseIndex"},"decreaseIndex"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePosition"},"updatePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#toggle"},"toggle"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),(0,r.yg)("h2",{id:"constructor"},"Constructor"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"new Panel(options, options.index, options.align, options.flicking, options.elementProvider)\n")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options.index"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An initial index of the panel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options.align"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An initial ",(0,r.yg)("a",{parentName:"td",href:"Flicking#align"},"align")," value of the panel")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A Flicking instance panel's referencing")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options.elementProvider"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A provider instance that redirects elements")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"element"},"element"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HTMLElement")," that panel's referencing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": HTMLElement"),(0,r.yg)("h3",{id:"elementProvider"},"elementProvider"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This member is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"index"},"index"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Index of the panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"position"},"position"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Position of the panel, including ",(0,r.yg)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"size"},"size"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Cached size of the panel element",(0,r.yg)("br",{parentName:"p"}),"\n","This is equal to ",(0,r.yg)("a",{parentName:"p",href:"Panel#element"},"element"),"'s ",(0,r.yg)("inlineCode",{parentName:"p"},"offsetWidth")," if ",(0,r.yg)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"offsetHeight")," else"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Panel's size including CSS ",(0,r.yg)("inlineCode",{parentName:"p"},"margin"),(0,r.yg)("br",{parentName:"p"}),"\n","This value includes ",(0,r.yg)("a",{parentName:"p",href:"Panel#element"},"element"),"'s margin left/right if ",(0,r.yg)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),", and margin top/bottom else"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"height"},"height"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Height of the panel element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"margin"},"margin"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Cached CSS ",(0,r.yg)("inlineCode",{parentName:"p"},"margin")," value of the panel element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": object"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prev"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,r.yg)("inlineCode",{parentName:"td"},"margin-left")," when the ",(0,r.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"margin-top")," else")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"next"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"CSS ",(0,r.yg)("inlineCode",{parentName:"td"},"margin-right")," when the ",(0,r.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",(0,r.yg)("inlineCode",{parentName:"td"},"true"),", and ",(0,r.yg)("inlineCode",{parentName:"td"},"margin-bottom")," else")))),(0,r.yg)("h3",{id:"alignPosition"},"alignPosition"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Align position inside the panel where ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera"),"'s ",(0,r.yg)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," inside viewport should be located at"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"removed"},"removed"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A value indicating whether the panel's ",(0,r.yg)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"d"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"rendered"},"rendered"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A value indicating whether the panel's element is being rendered on the screen"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"loading"},"loading"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A value indicating whether the panel's image/video is not loaded and waiting for resize"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"range"},"range"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Panel element's range of the bounding box"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": object"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"min"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Bounding box's left(",(0,r.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",(0,r.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"max"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Bounding box's right(",(0,r.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",(0,r.yg)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),(0,r.yg)("h3",{id:"toggled"},"toggled"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A value indicating whether the panel's position is toggled by circular behavior"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"toggleDirection"},"toggleDirection"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"A direction where the panel's position is toggled"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),(0,r.yg)("h3",{id:"offset"},"offset"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Actual position offset determined by ",(0,r.yg)("a",{parentName:"p",href:"Panel#order"},"Panel#order")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"progress"},"progress"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Progress of movement between previous or next panel relative to current panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"outsetProgress"},"outsetProgress"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Progress of movement between points that panel is completely invisible outside of viewport(prev direction: -1, selected point: 0, next direction: 1)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"visibleRatio"},"visibleRatio"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly")),(0,r.yg)("p",null,"Percentage of area where panel is visible in the viewport"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"align"},"align"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"A value indicating where the ",(0,r.yg)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at inside the panel element"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"markForShow"},"markForShow"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Mark panel element to be appended on the camera element"),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"markForHide"},"markForHide"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Mark panel element to be removed from the camera element"),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"resize"},"resize"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Update size of the panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"cached"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Predefined cached size of the panel")))),(0,r.yg)("h3",{id:"setSize"},"setSize"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Change panel's size. This will change the actual size of the panel element by changing its CSS width/height property"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"size"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"New panel size")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"size.width"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"size.height"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number ","|"," string"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")))),(0,r.yg)("h3",{id:"contains"},"contains"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Check whether the given element is inside of this panel's ",(0,r.yg)("a",{parentName:"p",href:"Panel#element"},"element")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Boolean value indicating the element is inside of this panel ",(0,r.yg)("a",{parentName:"li",href:"Panel#element"},"element"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"element"),(0,r.yg)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The HTMLElement to check")))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Reset internal state and set ",(0,r.yg)("a",{parentName:"p",href:"Panel#removed"},"removed")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"includePosition"},"includePosition"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Check whether the given position is inside of this panel's ",(0,r.yg)("a",{parentName:"p",href:"Panel#range"},"range")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Boolean value indicating whether the given position is included in the panel range")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"pos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A position to check")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"includeMargin"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"false"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Include ",(0,r.yg)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),(0,r.yg)("h3",{id:"includeRange"},"includeRange"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Check whether the given range is fully included in this panel's area (inclusive)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Boolean value indicating whether the given range is fully included in the panel range")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"min"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Minimum value of the range to check")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"max"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Maximum value of the range to check")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"includeMargin"),(0,r.yg)("td",{parentName:"tr",align:"center"},"boolean"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"},"false"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Include ",(0,r.yg)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),(0,r.yg)("h3",{id:"isVisibleOnRange"},"isVisibleOnRange"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Check whether the panel is visble in the given range (exclusive)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Boolean value indicating whether the panel is visible")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"min"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Minimum value of the range to check")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"max"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Maximum value of the range to check")))),(0,r.yg)("h3",{id:"focus"},"focus"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to this panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the panel")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")))),(0,r.yg)("h3",{id:"prev"},"prev"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Get previous(",(0,r.yg)("inlineCode",{parentName:"p"},"index - 1"),") panel. When the previous panel does not exist, this will return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," instead",(0,r.yg)("br",{parentName:"p"}),"\n","If the ",(0,r.yg)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the last panel if called from the first panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The previous panel")),(0,r.yg)("h3",{id:"next"},"next"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Get next(",(0,r.yg)("inlineCode",{parentName:"p"},"index + 1"),") panel. When the next panel does not exist, this will return ",(0,r.yg)("inlineCode",{parentName:"p"},"null")," instead",(0,r.yg)("br",{parentName:"p"}),"\n","If the ",(0,r.yg)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the first panel if called from the last panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The previous panel")),(0,r.yg)("h3",{id:"increaseIndex"},"increaseIndex"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Increase panel's index by the given value"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"val"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"decreaseIndex"},"decreaseIndex"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,"Decrease panel's index by the given value"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"val"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"updatePosition"},"updatePosition"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"toggle"},"toggle"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": boolean"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"toggled")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prevPos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"newPos"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),(0,r.yg)("div",{className:"bulma-tags"}),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,r.yg)("strong",null,"internal")," use only."))}m.isMDXComponent=!0}}]);