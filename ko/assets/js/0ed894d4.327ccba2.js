"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69181],{15680:(e,a,n)=>{n.d(a,{xA:()=>o,yg:()=>m});var t=n(96540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=t.createContext({}),c=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},o=function(e){var a=c(e.components);return t.createElement(u.Provider,{value:a},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=l,m=g["".concat(u,".").concat(d)]||g[d]||p[d]||r;return n?t.createElement(m,s(s({ref:a},o),{},{components:n})):t.createElement(m,s({ref:a},o))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[g]="string"==typeof e?e:l,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>s});var t=n(96540),l=n(20053);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:n,className:s}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.A)(r.tabItem,s),hidden:n},a)}},11470:(e,a,n)=>{n.d(a,{A:()=>j});var t=n(58168),l=n(96540),r=n(20053),s=n(23104),i=n(56347),u=n(57485),c=n(31682),o=n(89466);function g(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:l}}=e;return{value:a,label:n,attributes:t,default:l}}))}function p(e){const{values:a,children:n}=e;return(0,l.useMemo)((()=>{const e=a??g(n);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:n}=e;const t=(0,i.W6)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,u.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(t.location.search);a.set(r,e),t.replace({...t.location,search:a.toString()})}),[r,t])]}function y(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,r=p(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:r}))),[u,c]=m({queryString:n,groupId:t}),[g,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,r]=(0,o.Dv)(n);return[t,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:t}),f=(()=>{const e=u??g;return d({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),y(e)}),[c,y,r]),tabValues:r}}var f=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:a,block:n,selectedValue:i,selectValue:u,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:g}=(0,s.a_)(),p=e=>{const a=e.currentTarget,n=o.indexOf(a),t=c[n].value;t!==i&&(g(a),u(t))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;a=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;a=o[n]??o[o.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},a)},c.map((e=>{let{value:a,label:n,attributes:s}=e;return l.createElement("li",(0,t.A)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>o.push(e),onKeyDown:d,onClick:p},s,{className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":i===a})}),n??a)})))}function h(e){let{lazy:a,children:n,selectedValue:t}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function k(e){const a=y(e);return l.createElement("div",{className:(0,r.A)("tabs-container",v.tabList)},l.createElement(b,(0,t.A)({},e,a)),l.createElement(h,(0,t.A)({},e,a)))}function j(e){const a=(0,f.A)();return l.createElement(k,(0,t.A)({key:String(a)},e))}},89819:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var t=n(58168),l=(n(96540),n(15680)),r=n(11470),s=n(19365);const i={title:"Installation",id:"installation",slug:"/",custom_edit_url:null,sidebar_position:1},u=void 0,c={unversionedId:"tutorials/installation",id:"version-4.8.1/tutorials/installation",title:"Installation",description:"Using the package managers (recommended)",source:"@site/versioned_docs/version-4.8.1/tutorials/installation.mdx",sourceDirName:"tutorials",slug:"/",permalink:"/egjs-flicking/ko/docs/4.8.1/",draft:!1,editUrl:null,tags:[],version:"4.8.1",sidebarPosition:1,frontMatter:{title:"Installation",id:"installation",slug:"/",custom_edit_url:null,sidebar_position:1},sidebar:"docs",next:{title:"Quick Start",permalink:"/egjs-flicking/ko/docs/4.8.1/quick-start"}},o={},g=[{value:"Using the package managers (recommended)",id:"using-the-package-managers-recommended",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"CDN Links",id:"cdn-links",level:2},{value:"packaged(with dependencies)",id:"packagedwith-dependencies",level:3},{value:"CSS files",id:"css-files",level:3}],p={toc:g},d="wrapper";function m(e){let{components:a,...n}=e;return(0,l.yg)(d,(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"using-the-package-managers-recommended"},"Using the package managers (recommended)"),(0,l.yg)("p",null,"You can easily install Flicking with package managers like ",(0,l.yg)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," or ",(0,l.yg)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/"},"yarn")),(0,l.yg)("h3",{id:"npm"},"npm"),(0,l.yg)(r.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"js",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/flicking\n"))),(0,l.yg)(s.A,{value:"react",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/react-flicking\n"))),(0,l.yg)(s.A,{value:"vue",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue-flicking\n"))),(0,l.yg)(s.A,{value:"vue3",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/vue3-flicking\n"))),(0,l.yg)(s.A,{value:"angular",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/ngx-flicking\n"))),(0,l.yg)(s.A,{value:"preact",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/preact-flicking\n"))),(0,l.yg)(s.A,{value:"svelte",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"npm install @egjs/svelte-flicking\n")))),(0,l.yg)("h3",{id:"yarn"},"yarn"),(0,l.yg)(r.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,l.yg)(s.A,{value:"js",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/flicking\n"))),(0,l.yg)(s.A,{value:"react",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/react-flicking\n"))),(0,l.yg)(s.A,{value:"vue",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue-flicking\n"))),(0,l.yg)(s.A,{value:"vue3",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/vue3-flicking\n"))),(0,l.yg)(s.A,{value:"angular",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/ngx-flicking\n"))),(0,l.yg)(s.A,{value:"preact",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/preact-flicking\n"))),(0,l.yg)(s.A,{value:"svelte",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-shell"},"yarn add @egjs/svelte-flicking\n")))),(0,l.yg)("h2",{id:"cdn-links"},"CDN Links"),(0,l.yg)("h3",{id:"packagedwith-dependencies"},"packaged(with dependencies)"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n\x3c!-- cdnjs --\x3e\n<script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n')),(0,l.yg)("h3",{id:"css-files"},"CSS files"),(0,l.yg)("p",null,"Choose ",(0,l.yg)("inlineCode",{parentName:"p"},"flicking-inline.css")," if you have to support IE9"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-html"},'\x3c!-- unpkg --\x3e\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossorigin="anonymous" />\n\x3c!-- cdnjs --\x3e\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css" crossorigin="anonymous" />\n<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css" crossorigin="anonymous" />\n')))}m.isMDXComponent=!0}}]);