"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71628],{15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>s});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},g=Object.keys(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(e);for(a=0;a<g.length;a++)n=g[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=a.createContext({}),c=function(e){var t=a.useContext(y),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=c(e.components);return a.createElement(y.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,g=e.originalType,y=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,s=p["".concat(y,".").concat(m)]||p[m]||d[m]||g;return n?a.createElement(s,l(l({ref:t},o),{},{components:n})):a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var g=n.length,l=new Array(g);l[0]=m;var i={};for(var y in t)hasOwnProperty.call(t,y)&&(i[y]=t[y]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<g;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>l,default:()=>d,frontMatter:()=>g,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(96540),n(15680));const g={custom_edit_url:null},l=void 0,i={unversionedId:"api/State",id:"api/State",title:"State",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/docs/api/State.mdx",sourceDirName:"api",slug:"/api/State",permalink:"/egjs-flicking/docs/next/api/State",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null}},y={},c=[{value:"Properties",id:"properties",level:2},{value:"holding",id:"holding",level:3},{value:"animating",id:"animating",level:3},{value:"delta",id:"delta",level:3},{value:"targetPanel",id:"targetPanel",level:3},{value:"Methods",id:"methods",level:2},{value:"onEnter",id:"onEnter",level:3},{value:"onHold",id:"onHold",level:3},{value:"onChange",id:"onChange",level:3},{value:"onRelease",id:"onRelease",level:3},{value:"onAnimationEnd",id:"onAnimationEnd",level:3},{value:"onFinish",id:"onFinish",level:3}],o={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",(0,r.yg)("strong",null,"internal")," use only."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"class State\n")),(0,r.yg)("div",null),(0,r.yg)("p",null,"A component that shows the current status of the user input or the animation"),(0,r.yg)("div",{className:"container"},(0,r.yg)("div",{className:"row mb-2"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Properties")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("strong",null,"Methods"))),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#holding"},"holding"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#animating"},"animating"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#delta"},"delta"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#targetPanel"},"targetPanel")),(0,r.yg)("div",{className:"col col--6"},(0,r.yg)("a",{href:"#onEnter"},"onEnter"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onHold"},"onHold"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onChange"},"onChange"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onRelease"},"onRelease"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onAnimationEnd"},"onAnimationEnd"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"#onFinish"},"onFinish")))),(0,r.yg)("h2",{id:"properties"},"Properties"),(0,r.yg)("h3",{id:"holding"},"holding"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Whether user is clicking or touching"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"animating"},"animating"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"Whether Flicking's animating"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": boolean"),(0,r.yg)("h3",{id:"delta"},"delta"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A sum of delta values of change events from the last hold event of Axes"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h3",{id:"targetPanel"},"targetPanel"),(0,r.yg)("div",null,(0,r.yg)("span",{className:"badge badge--warning"},"readonly")),(0,r.yg)("p",null,"A panel to set as ",(0,r.yg)("a",{parentName:"p",href:"Control#activePanel"},"Control#activePanel")," after the animation is finished"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Type"),": number"),(0,r.yg)("h2",{id:"methods"},"Methods"),(0,r.yg)("h3",{id:"onEnter"},"onEnter"),(0,r.yg)("div",null),(0,r.yg)("p",null,"An callback which is called when state has changed to this state"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"prevState"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"State"},"State")),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An previous state")))),(0,r.yg)("h3",{id:"onHold"},"onHold"),(0,r.yg)("div",null),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:hold"},"hold")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onChange"},"onChange"),(0,r.yg)("div",null),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:change"},"change")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onRelease"},"onRelease"),(0,r.yg)("div",null),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:release"},"release")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onAnimationEnd"},"onAnimationEnd"),(0,r.yg)("div",null),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:animationEnd"},"animationEnd")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))),(0,r.yg)("h3",{id:"onFinish"},"onFinish"),(0,r.yg)("div",null),(0,r.yg)("p",null,"An event handler for Axes's ",(0,r.yg)("a",{parentName:"p",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," event"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Returns"),": void"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,r.yg)("th",{parentName:"tr",align:"center"},"TYPE"),(0,r.yg)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,r.yg)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Event context")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.flicking"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"An instance of Flicking")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.axesEvent"),(0,r.yg)("td",{parentName:"tr",align:"center"},"object"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A ",(0,r.yg)("a",{parentName:"td",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html#event:finish"},"finish")," event of Axes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"ctx.transitTo"),(0,r.yg)("td",{parentName:"tr",align:"center"},"function"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"A function for changing current state to other state")))))}d.isMDXComponent=!0}}]);