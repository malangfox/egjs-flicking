"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53702],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=s(t),m=a,d=g["".concat(c,".").concat(m)]||g[m]||p[m]||l;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[g]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(96540),a=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,i),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>x});var r=t(58168),a=t(96540),l=t(20053),i=t(23104),o=t(56347),c=t(57485),s=t(31682),u=t(89466);function g(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??g(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function d(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,s]=d({queryString:t,groupId:r}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),h=(()=>{const e=c??g;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&o(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,l]),tabValues:l}}var h=t(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:o,selectValue:c,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),p=e=>{const n=e.currentTarget,t=u.indexOf(n),r=s[t].value;r!==o&&(g(n),c(r))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.A)("tabs__item",y.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function k(e){const n=f(e);return a.createElement("div",{className:(0,l.A)("tabs-container",y.tabList)},a.createElement(b,(0,r.A)({},e,n)),a.createElement(v,(0,r.A)({},e,n)))}function x(e){const n=(0,h.A)();return a.createElement(k,(0,r.A)({key:String(n)},e))}},35395:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>g,toc:()=>m});var r=t(58168),a=(t(96540),t(15680)),l=t(75489),i=t(86025),o=t(11470),c=t(19365);const s={title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},u=void 0,g={unversionedId:"using-the-methods",id:"version-4.3.1/using-the-methods",title:"Using the Methods",description:"<Tabs",source:"@site/versioned_docs/version-4.3.1/using-the-methods.mdx",sourceDirName:".",slug:"/using-the-methods",permalink:"/egjs-flicking/docs/4.3.1/using-the-methods",draft:!1,editUrl:null,tags:[],version:"4.3.1",frontMatter:{title:"Using the Methods",id:"using-the-methods",slug:"/using-the-methods",custom_edit_url:null},sidebar:"version-4.3.1/docs",previous:{title:"Quick Start",permalink:"/egjs-flicking/docs/4.3.1/quick-start"},next:{title:"Listening to Events",permalink:"/egjs-flicking/docs/4.3.1/listening-to-events"}},p={},m=[],d={toc:m},f="wrapper";function h(e){let{components:n,...t}=e;return(0,a.yg)(f,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)(o.A,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,a.yg)(c.A,{value:"js",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods directly from the Flicking instance."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#el", options);\n\nflicking.next();\n'))),(0,a.yg)(c.A,{value:"react",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods of Flicking by getting a ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," of Flicking"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, Component } from "react";\nimport Flicking, { FlickingError } from "@egjs/react-flicking";\n\nclass MyComponent extends Component {\n  constructor(props) {\n    super(props);\n    this.flicking = createRef();\n    this.panels = [0, 1, 2];\n  }\n  render() {\n    return <Flicking ref={this.flicking}>\n      { this.panels.map(idx => <div className="panel" key={idx}>{idx}</div>) }\n    </Flicking>;\n  }\n  async moveToNextPanel() {\n    try {\n      await this.flicking.next();\n    } catch (e) {\n      console.log(e instanceof FlickingError); // true\n      console.log(e.code);\n    }\n  }\n}\n')),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.yg)(c.A,{value:"vue",mdxType:"TabItem"},(0,a.yg)("p",null,"You can access instance of Flicking component with the ",(0,a.yg)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),(0,a.yg)("p",null,"Then call methods of it like"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),(0,a.yg)(c.A,{value:"vue3",mdxType:"TabItem"},(0,a.yg)("p",null,"You can access instance of Flicking component with the ",(0,a.yg)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-edge-cases.html#Accessing-Child-Component-Instances-amp-Child-Elements"},"ref")," property."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'<Flicking ref="flicking"></Flicking>\n')),(0,a.yg)("p",null,"Then call methods of it like"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},"this.$refs.flicking.next();\n"))),(0,a.yg)(c.A,{value:"angular",mdxType:"TabItem"},(0,a.yg)("p",null,"There're few ways to interact with child component in Angular.",(0,a.yg)("br",{parentName:"p"}),"\n","See ",(0,a.yg)("a",{parentName:"p",href:"https://angular.io/guide/component-interaction#parent-interacts-with-child-via-local-variable"},"Component Interaction")," page from Angular official document, and use that to interact with Flicking."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-js"},'@Component({\n  selector: \'flicking-parent\',\n  template: `\n    <button (click)="flick.prev()">Prev</button>\n    <button (click)="flick.next()">Next</button>\n    <ngx-flicking #flick></ngx-flicking>\n  `\n})\nexport class FlickingParent { }\n'))),(0,a.yg)(c.A,{value:"preact",mdxType:"TabItem"},(0,a.yg)("p",null,"You can call methods of Flicking by getting a ",(0,a.yg)("inlineCode",{parentName:"p"},"ref")," of Flicking"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'import { createRef, render } from "preact";\nimport Flicking, { FlickingError } from "@egjs/preact-flicking";\n\nconst ref = createRef();\nrender(<Flicking ref={ref}>{...}</Flicking>, dom);\n\nconst flicking = ref.current;\nflicking.next();\n')),(0,a.yg)("p",null,"See ",(0,a.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/refs-and-the-dom.html"},"React Refs and the DOM")," for more info.")),(0,a.yg)(c.A,{value:"svelte",mdxType:"TabItem"},(0,a.yg)("p",null,"You can use ",(0,a.yg)("a",{parentName:"p",href:"https://svelte.dev/tutorial/bind-this"},"bind:this")," syntax of svelte to get the reference of Flicking."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-jsx"},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n\n  let flicking: Flicking;\n<\/script>\n\n<Flicking bind:this={flicking}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n<button on:click{() => { flicking.next(); }} />\n')))),(0,a.yg)("p",null,"See all available methods at our ",(0,a.yg)(l.A,{to:(0,i.A)("docs/api/Flicking#methods"),mdxType:"Link"},"API")," page."))}h.isMDXComponent=!0}}]);