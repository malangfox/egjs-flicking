"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93499],{15680:(e,a,t)=>{t.d(a,{xA:()=>y,yg:()=>d});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},y=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),s=o(t),c=r,d=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return t?n.createElement(d,g(g({ref:a},y),{},{components:t})):n.createElement(d,g({ref:a},y))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,g=new Array(l);g[0]=c;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[s]="string"==typeof e?e:r,g[1]=i;for(var o=2;o<l;o++)g[o]=t[o];return n.createElement.apply(null,g)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},48588:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=t(58168),r=(t(96540),t(15680));const l={custom_edit_url:null},g=void 0,i={unversionedId:"api/SnapControl",id:"version-4.0.0/api/SnapControl",title:"SnapControl",description:"A Control that uses a release momentum to choose destination panel",source:"@site/versioned_docs/version-4.0.0/api/SnapControl.mdx",sourceDirName:"api",slug:"/api/SnapControl",permalink:"/egjs-flicking/docs/4.0.0/api/SnapControl",draft:!1,editUrl:null,tags:[],version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"FreeControl",permalink:"/egjs-flicking/docs/4.0.0/api/FreeControl"},next:{title:"AnimatingState",permalink:"/egjs-flicking/docs/4.0.0/api/AnimatingState"}},p={},o=[{value:"Properties",id:"properties",level:2},{value:"controller",id:"controller",level:3},{value:"activeIndex",id:"activeIndex",level:3},{value:"activePanel",id:"activePanel",level:3},{value:"animating",id:"animating",level:3},{value:"holding",id:"holding",level:3},{value:"Methods",id:"methods",level:2},{value:"moveToPosition",id:"moveToPosition",level:3},{value:"init",id:"init",level:3},{value:"destroy",id:"destroy",level:3},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"updatePosition",id:"updatePosition",level:3},{value:"updateInput",id:"updateInput",level:3},{value:"resetActive",id:"resetActive",level:3},{value:"moveToPanel",id:"moveToPanel",level:3}],y={toc:o},s="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(s,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class SnapControl extends Control\n")),(0,r.yg)("p",null,"A ",(0,r.yg)("a",{parentName:"p",href:"Control"},"Control")," that uses a release momentum to choose destination panel"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#controller"},"controller"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activeIndex"},"activeIndex"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#activePanel"},"activePanel"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#holding"},"holding")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#moveToPosition"},"moveToPosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#init"},"init"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#destroy"},"destroy"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#enable"},"enable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#disable"},"disable"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updatePosition"},"updatePosition"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#updateInput"},"updateInput"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#resetActive"},"resetActive"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#moveToPanel"},"moveToPanel")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"controller"},"controller"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"A controller that handles the ",(0,r.yg)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes")," events"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"AxesController"},"AxesController")),(0,r.yg)("h3",{id:"activeIndex"},"activeIndex"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Index number of the ",(0,r.yg)("a",{parentName:"p",href:"Flicking#currentPanel"},"currentPanel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default"),": 0"),(0,r.yg)("h3",{id:"activePanel"},"activePanel"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"An active panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": ",(0,r.yg)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Whether Flicking's animating"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-warning"},"readonly"),(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Whether user is clicking or touching"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"moveToPosition"},"moveToPosition"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to the given position"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target position")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"position"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target position to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the panel movement animation (unit: ms).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))),(0,r.yg)("h3",{id:"init"},"init"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Initialize Control"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of ",(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking"))))),(0,r.yg)("h3",{id:"destroy"},"destroy"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Destroy Control and return to initial state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("h3",{id:"enable"},"enable"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Enable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"disable"},"disable"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Disable input from the user (mouse/touch)"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"updatePosition"},"updatePosition"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited"),(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,"Update position after resizing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"progressInPanel"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Previous camera's progress in active panel before resize")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")," When ",(0,r.yg)("a",{parentName:"p",href:"Camera#init"},"init")," is not called before"),(0,r.yg)("h3",{id:"updateInput"},"updateInput"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Update ",(0,r.yg)("a",{parentName:"p",href:"Control#controller"},"controller"),"'s state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"resetActive"},"resetActive"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited")),(0,r.yg)("p",null,"Reset ",(0,r.yg)("a",{parentName:"p",href:"Control#activePanel"},"activePanel")," and ",(0,r.yg)("a",{parentName:"p",href:"Control#activeAnchor"},"activeAnchor")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"null")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": this"),(0,r.yg)("h3",{id:"moveToPanel"},"moveToPanel"),(0,r.yg)("div",{className:"bulma-tags"},(0,r.yg)("span",{className:"bulma-tag is-danger"},"inherited"),(0,r.yg)("span",{className:"bulma-tag is-success"},"async")),(0,r.yg)("p",null,"Move ",(0,r.yg)("a",{parentName:"p",href:"Camera"},"Camera")," to the given panel"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the target panel")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Emits"),": ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveStart"},"Flicking#event:moveStart"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-move"},"Flicking#event:move"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-moveEnd"},"Flicking#event:moveEnd"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willChange"},"Flicking#event:willChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-changed"},"Flicking#event:changed"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-willRestore"},"Flicking#event:willRestore"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-restored"},"Flicking#event:restored"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-needPanel"},"Flicking#event:needPanel"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-visibleChange"},"Flicking#event:visibleChange"),", ",(0,r.yg)("a",{parentName:"p",href:"Flicking#event-reachEdge"},"Flicking#event:reachEdge")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"panel"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Panel"},"Panel")),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The target panel to move")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"options"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An options object")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"duration"),(0,r.yg)("td",{parentName:"tr",align:"center"},"number"),(0,r.yg)("td",{parentName:"tr",align:"center"},"no"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#event-release"},"release")," event of ",(0,r.yg)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/"},"Axes"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"direction"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),(0,r.yg)("td",{parentName:"tr",align:"center"},"yes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"DIRECTION.NONE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Direction to move, only available in the ",(0,r.yg)("a",{parentName:"td",href:"Flicking#circular"},"circular")," mode")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Throws"),": ",(0,r.yg)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"code"),(0,r.yg)("th",{parentName:"tr",align:null},"condition"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"POSITION_NOT_REACHABLE")),(0,r.yg)("td",{parentName:"tr",align:null},"When the given panel is already removed or not in the Camera's ",(0,r.yg)("a",{parentName:"td",href:"Camera#range"},"range"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),(0,r.yg)("td",{parentName:"tr",align:null},"When ",(0,r.yg)("a",{parentName:"td",href:"Control#init"},"init")," is not called before")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("a",{parentName:"td",href:"ERROR_CODE"},"STOP_CALLED_BY_USER")),(0,r.yg)("td",{parentName:"tr",align:null},"When the animation is interrupted by user input")))))}m.isMDXComponent=!0}}]);