(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,16015,(e,t,i)=>{},98547,(e,t,i)=>{var l=e.i(47167);e.r(16015);var r=e.r(71645),o=r&&"object"==typeof r&&"default"in r?r:{default:r},n=void 0!==l.default&&l.default.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(e){var t=void 0===e?{}:e,i=t.name,l=void 0===i?"stylesheet":i,r=t.optimizeForSpeed,o=void 0===r?n:r;d(s(l),"`name` must be a string"),this._name=l,this._deletedRulePlaceholder="#"+l+"-deleted-rule____{}",d("boolean"==typeof o,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=o,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var a="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');this._nonce=a?a.getAttribute("content"):null}var t,i=e.prototype;return i.setOptimizeForSpeed=function(e){d("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),d(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},i.isOptimizeForSpeed=function(){return this._optimizeForSpeed},i.inject=function(){var e=this;if(d(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);return}this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"==typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},i.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},i.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},i.insertRule=function(e,t){if(d(s(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!=typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(t){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var l=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,l))}return this._rulesCount++},i.replaceRule=function(e,t){if(this._optimizeForSpeed||"u"<typeof window){var i="u">typeof window?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(l){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var l=this._tags[e];d(l,"old rule at index `"+e+"` not found"),l.textContent=t}return e},i.deleteRule=function(e){if("u"<typeof window)return void this._serverSheet.deleteRule(e);if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];d(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}},i.flush=function(){this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]},i.cssRules=function(){var e=this;return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[])},i.makeStyleTag=function(e,t,i){t&&d(s(t),"makeStyleTag accepts only strings as second parameter");var l=document.createElement("style");this._nonce&&l.setAttribute("nonce",this._nonce),l.type="text/css",l.setAttribute("data-"+e,""),t&&l.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return i?r.insertBefore(l,i):r.appendChild(l),l},t=[{key:"length",get:function(){return this._rulesCount}}],function(e,t){for(var i=0;i<t.length;i++){var l=t[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}(e.prototype,t),e}();function d(e,t){if(!e)throw Error("StyleSheet: "+t+".")}var c=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0},p={};function u(e,t){if(!t)return"jsx-"+e;var i=String(t),l=e+i;return p[l]||(p[l]="jsx-"+c(e+"-"+i)),p[l]}function h(e,t){"u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var i=e+t;return p[i]||(p[i]=t.replace(/__jsx-style-dynamic-selector/g,e)),p[i]}var m=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,l=void 0===i?null:i,r=t.optimizeForSpeed,o=void 0!==r&&r;this._sheet=l||new a({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),l&&"boolean"==typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var i=this.getIdAndRules(e),l=i.styleId,r=i.rules;if(l in this._instancesCounts){this._instancesCounts[l]+=1;return}var o=r.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return -1!==e});this._indices[l]=o,this._instancesCounts[l]=1},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var l=this._fromServer&&this._fromServer[i];l?(l.parentNode.removeChild(l),delete this._fromServer[i]):(this._indices[i].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return i[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return!!e[1]}))},t.styles=function(e){var t,i;return t=this.cssRules(),void 0===(i=e)&&(i={}),t.map(function(e){var t=e[0],l=e[1];return o.default.createElement("style",{id:"__"+t,key:"__"+t,nonce:i.nonce?i.nonce:void 0,dangerouslySetInnerHTML:{__html:l}})})},t.getIdAndRules=function(e){var t=e.children,i=e.dynamic,l=e.id;if(i){var r=u(l,i);return{styleId:r,rules:Array.isArray(t)?t.map(function(e){return h(r,e)}):[h(r,t)]}}return{styleId:u(l),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})},e}(),f=r.createContext(null);function x(){return new m}function y(){return r.useContext(f)}f.displayName="StyleSheetContext";var g=o.default.useInsertionEffect||o.default.useLayoutEffect,b="u">typeof window?x():void 0;function v(e){var t=b||y();return t&&("u"<typeof window?t.add(e):g(function(){return t.add(e),function(){t.remove(e)}},[e.id,String(e.dynamic)])),null}v.dynamic=function(e){return e.map(function(e){return u(e[0],e[1])}).join(" ")},i.StyleRegistry=function(e){var t=e.registry,i=e.children,l=r.useContext(f),n=r.useState(function(){return l||t||x()})[0];return o.default.createElement(f.Provider,{value:n},i)},i.createStyleRegistry=x,i.style=v,i.useStyleRegistry=y},37902,(e,t,i)=>{t.exports=e.r(98547).style},52683,e=>{"use strict";let t,i,l,r;var o,n,s,a,d,c,p,u=e.i(43476),h=e.i(37902),m=e.i(71645),f=e.i(75157);function x({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"card",className:(0,f.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function y({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"card-header",className:(0,f.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function g({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"card-title",className:(0,f.cn)("leading-none font-semibold",e),...t})}function b({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"card-description",className:(0,f.cn)("text-muted-foreground text-sm",e),...t})}function v({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"card-content",className:(0,f.cn)("px-6",e),...t})}var w=e.i(20783),j=Symbol.for("react.lazy"),N=m[" use ".trim().toString()];function S(e){var t;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===j&&"_payload"in e&&"object"==typeof(t=e._payload)&&null!==t&&"then"in t}function k(e){var t;let i,l=(t=e,(i=m.forwardRef((e,t)=>{let{children:i,...l}=e;if(S(i)&&"function"==typeof N&&(i=N(i._payload)),m.isValidElement(i)){var r;let e,o,n=(r=i,(o=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?r.ref:(o=(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?r.props.ref:r.props.ref||r.ref),s=function(e,t){let i={...t};for(let l in t){let r=e[l],o=t[l];/^on[A-Z]/.test(l)?r&&o?i[l]=(...e)=>{let t=o(...e);return r(...e),t}:r&&(i[l]=r):"style"===l?i[l]={...r,...o}:"className"===l&&(i[l]=[r,o].filter(Boolean).join(" "))}return{...e,...i}}(l,i.props);return i.type!==m.Fragment&&(s.ref=t?(0,w.composeRefs)(t,n):n),m.cloneElement(i,s)}return m.Children.count(i)>1?m.Children.only(null):null})).displayName=`${t}.SlotClone`,i),r=m.forwardRef((e,t)=>{let{children:i,...r}=e;S(i)&&"function"==typeof N&&(i=N(i._payload));let o=m.Children.toArray(i),n=o.find(C);if(n){let e=n.props.children,i=o.map(t=>t!==n?t:m.Children.count(e)>1?m.Children.only(null):m.isValidElement(e)?e.props.children:null);return(0,u.jsx)(l,{...r,ref:t,children:m.isValidElement(e)?m.cloneElement(e,void 0,i):null})}return(0,u.jsx)(l,{...r,ref:t,children:i})});return r.displayName=`${e}.Slot`,r}var q=k("Slot"),T=Symbol("radix.slottable");function C(e){return m.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===T}var A=e.i(25913);let R=(0,A.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function _({className:e,variant:t,size:i,asChild:l=!1,...r}){return(0,u.jsx)(l?q:"button",{"data-slot":"button",className:(0,f.cn)(R({variant:t,size:i,className:e})),...r})}e.i(74080);var E=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=k(`Primitive.${t}`),l=m.forwardRef((e,l)=>{let{asChild:r,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(r?i:t,{...o,ref:l})});return l.displayName=`Primitive.${t}`,{...e,[t]:l}},{}),I="Progress",[z,P]=function(e,t=[]){let i=[],l=()=>{let t=i.map(e=>m.createContext(e));return function(i){let l=i?.[e]||t;return m.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return l.scopeName=e,[function(t,l){let r=m.createContext(l);r.displayName=t+"Context";let o=i.length;i=[...i,l];let n=t=>{let{scope:i,children:l,...n}=t,s=i?.[e]?.[o]||r,a=m.useMemo(()=>n,Object.values(n));return(0,u.jsx)(s.Provider,{value:a,children:l})};return n.displayName=t+"Provider",[n,function(i,n){let s=n?.[e]?.[o]||r,a=m.useContext(s);if(a)return a;if(void 0!==l)return l;throw Error(`\`${i}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let i=()=>{let i=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let l=i.reduce((t,{useScope:i,scopeName:l})=>{let r=i(e)[`__scope${l}`];return{...t,...r}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return i.scopeName=t.scopeName,i}(l,...t)]}(I),[O,M]=z(I),H=m.forwardRef((e,t)=>{var i,l;let{__scopeProgress:r,value:o=null,max:n,getValueLabel:s=F,...a}=e;(n||0===n)&&!B(n)&&console.error((i=`${n}`,`Invalid prop \`max\` of value \`${i}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));let d=B(n)?n:100;null===o||W(o,d)||console.error((l=`${o}`,`Invalid prop \`value\` of value \`${l}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));let c=W(o,d)?o:null,p=$(c)?s(c,d):void 0;return(0,u.jsx)(O,{scope:r,value:c,max:d,children:(0,u.jsx)(E.div,{"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":$(c)?c:void 0,"aria-valuetext":p,role:"progressbar","data-state":V(c,d),"data-value":c??void 0,"data-max":d,...a,ref:t})})});H.displayName=I;var L="ProgressIndicator",D=m.forwardRef((e,t)=>{let{__scopeProgress:i,...l}=e,r=M(L,i);return(0,u.jsx)(E.div,{"data-state":V(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...l,ref:t})});function F(e,t){return`${Math.round(e/t*100)}%`}function V(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function $(e){return"number"==typeof e}function B(e){return $(e)&&!isNaN(e)&&e>0}function W(e,t){return $(e)&&!isNaN(e)&&e<=t&&e>=0}function X({className:e,value:t,...i}){return(0,u.jsx)(H,{"data-slot":"progress",className:(0,f.cn)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",e),...i,children:(0,u.jsx)(D,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})})}D.displayName=L;let U=(0,A.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function K({className:e,variant:t,asChild:i=!1,...l}){return(0,u.jsx)(i?q:"span",{"data-slot":"badge",className:(0,f.cn)(U({variant:t}),e),...l})}function Q({className:e,type:t,...i}){return(0,u.jsx)("input",{type:t,"data-slot":"input",className:(0,f.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...i})}var Y=e.i(81140),Z=e.i(30030),J=e.i(34620),G=m[" useId ".trim().toString()]||(()=>void 0),ee=0;function et(e){let[t,i]=m.useState(G());return(0,J.useLayoutEffect)(()=>{e||i(e=>e??String(ee++))},[e]),e||(t?`radix-${t}`:"")}var ei=e.i(69340),el=e.i(26330),er=e.i(48425),eo=e.i(30207),en="focusScope.autoFocusOnMount",es="focusScope.autoFocusOnUnmount",ea={bubbles:!1,cancelable:!0},ed=m.forwardRef((e,t)=>{let{loop:i=!1,trapped:l=!1,onMountAutoFocus:r,onUnmountAutoFocus:o,...n}=e,[s,a]=m.useState(null),d=(0,eo.useCallbackRef)(r),c=(0,eo.useCallbackRef)(o),p=m.useRef(null),h=(0,w.useComposedRefs)(t,e=>a(e)),f=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(l){let e=function(e){if(f.paused||!s)return;let t=e.target;s.contains(t)?p.current=t:eu(p.current,{select:!0})},t=function(e){if(f.paused||!s)return;let t=e.relatedTarget;null!==t&&(s.contains(t)||eu(p.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let i=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&eu(s)});return s&&i.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),i.disconnect()}}},[l,s,f.paused]),m.useEffect(()=>{if(s){eh.add(f);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(en,ea);s.addEventListener(en,d),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let i=document.activeElement;for(let l of e)if(eu(l,{select:t}),document.activeElement!==i)return}(ec(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&eu(s))}return()=>{s.removeEventListener(en,d),setTimeout(()=>{let t=new CustomEvent(es,ea);s.addEventListener(es,c),s.dispatchEvent(t),t.defaultPrevented||eu(e??document.body,{select:!0}),s.removeEventListener(es,c),eh.remove(f)},0)}}},[s,d,c,f]);let x=m.useCallback(e=>{if(!i&&!l||f.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){var o;let t,l=e.currentTarget,[n,s]=[ep(t=ec(o=l),o),ep(t.reverse(),o)];n&&s?e.shiftKey||r!==s?e.shiftKey&&r===n&&(e.preventDefault(),i&&eu(s,{select:!0})):(e.preventDefault(),i&&eu(n,{select:!0})):r===l&&e.preventDefault()}},[i,l,f.paused]);return(0,u.jsx)(er.Primitive.div,{tabIndex:-1,...n,ref:h,onKeyDown:x})});function ec(e){let t=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)t.push(i.currentNode);return t}function ep(e,t){for(let i of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(i,{upTo:t}))return i}function eu(e,{select:t=!1}={}){if(e&&e.focus){var i;let l=document.activeElement;e.focus({preventScroll:!0}),e!==l&&(i=e)instanceof HTMLInputElement&&"select"in i&&t&&e.select()}}ed.displayName="FocusScope";var eh=(l=[],{add(e){let t=l[0];e!==t&&t?.pause(),(l=em(l,e)).unshift(e)},remove(e){l=em(l,e),l[0]?.resume()}});function em(e,t){let i=[...e],l=i.indexOf(t);return -1!==l&&i.splice(l,1),i}var ef=e.i(74606),ex=e.i(96626),ey=0;function eg(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var eb=function(){return(eb=Object.assign||function(e){for(var t,i=1,l=arguments.length;i<l;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function ev(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(i[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,l=Object.getOwnPropertySymbols(e);r<l.length;r++)0>t.indexOf(l[r])&&Object.prototype.propertyIsEnumerable.call(e,l[r])&&(i[l[r]]=e[l[r]]);return i}var ew=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),ej="width-before-scroll-bar";function eN(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var eS="u">typeof window?m.useLayoutEffect:m.useEffect,ek=new WeakMap,eq=(void 0===o&&(o={}),(void 0===n&&(n=function(e){return e}),s=[],a=!1,d={read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return s.length?s[s.length-1]:null},useMedium:function(e){var t=n(e,a);return s.push(t),function(){s=s.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(a=!0;s.length;){var t=s;s=[],t.forEach(e)}s={push:function(t){return e(t)},filter:function(){return s}}},assignMedium:function(e){a=!0;var t=[];if(s.length){var i=s;s=[],i.forEach(e),t=s}var l=function(){var i=t;t=[],i.forEach(e)},r=function(){return Promise.resolve().then(l)};r(),s={push:function(e){t.push(e),r()},filter:function(e){return t=t.filter(e),s}}}}).options=eb({async:!0,ssr:!1},o),d),eT=function(){},eC=m.forwardRef(function(e,t){var i,l,r,o,n=m.useRef(null),s=m.useState({onScrollCapture:eT,onWheelCapture:eT,onTouchMoveCapture:eT}),a=s[0],d=s[1],c=e.forwardProps,p=e.children,u=e.className,h=e.removeScrollBar,f=e.enabled,x=e.shards,y=e.sideCar,g=e.noRelative,b=e.noIsolation,v=e.inert,w=e.allowPinchZoom,j=e.as,N=e.gapMode,S=ev(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=(i=[n,t],l=function(e){return i.forEach(function(t){return eN(t,e)})},(r=(0,m.useState)(function(){return{value:null,callback:l,facade:{get current(){return r.value},set current(value){var e=r.value;e!==value&&(r.value=value,r.callback(value,e))}}}})[0]).callback=l,o=r.facade,eS(function(){var e=ek.get(o);if(e){var t=new Set(e),l=new Set(i),r=o.current;t.forEach(function(e){l.has(e)||eN(e,null)}),l.forEach(function(e){t.has(e)||eN(e,r)})}ek.set(o,i)},[i]),o),q=eb(eb({},S),a);return m.createElement(m.Fragment,null,f&&m.createElement(y,{sideCar:eq,removeScrollBar:h,shards:x,noRelative:g,noIsolation:b,inert:v,setCallbacks:d,allowPinchZoom:!!w,lockRef:n,gapMode:N}),c?m.cloneElement(m.Children.only(p),eb(eb({},q),{ref:k})):m.createElement(void 0===j?"div":j,eb({},q,{className:u,ref:k}),p))});eC.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},eC.classNames={fullWidth:ej,zeroRight:ew};var eA=function(e){var t=e.sideCar,i=ev(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var l=t.read();if(!l)throw Error("Sidecar medium not found");return m.createElement(l,eb({},i))};eA.isSideCarExport=!0;var eR=function(){var e=0,t=null;return{add:function(i){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=p||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var l,r;(l=t).styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i)),r=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(r)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},e_=function(){var e=eR();return function(t,i){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&i])}},eE=function(){var e=e_();return function(t){return e(t.styles,t.dynamic),null}},eI={left:0,top:0,right:0,gap:0},ez=function(e){return parseInt(e||"",10)||0},eP=function(e){var t=window.getComputedStyle(document.body),i=t["padding"===e?"paddingLeft":"marginLeft"],l=t["padding"===e?"paddingTop":"marginTop"],r=t["padding"===e?"paddingRight":"marginRight"];return[ez(i),ez(l),ez(r)]},eO=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return eI;var t=eP(e),i=document.documentElement.clientWidth,l=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,l-i+t[2]-t[0])}},eM=eE(),eH="data-scroll-locked",eL=function(e,t,i,l){var r=e.left,o=e.top,n=e.right,s=e.gap;return void 0===i&&(i="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(l,";\n   padding-right: ").concat(s,"px ").concat(l,";\n  }\n  body[").concat(eH,"] {\n    overflow: hidden ").concat(l,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(l,";"),"margin"===i&&"\n    padding-left: ".concat(r,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(n,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s,"px ").concat(l,";\n    "),"padding"===i&&"padding-right: ".concat(s,"px ").concat(l,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(ew," {\n    right: ").concat(s,"px ").concat(l,";\n  }\n  \n  .").concat(ej," {\n    margin-right: ").concat(s,"px ").concat(l,";\n  }\n  \n  .").concat(ew," .").concat(ew," {\n    right: 0 ").concat(l,";\n  }\n  \n  .").concat(ej," .").concat(ej," {\n    margin-right: 0 ").concat(l,";\n  }\n  \n  body[").concat(eH,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(s,"px;\n  }\n")},eD=function(){var e=parseInt(document.body.getAttribute(eH)||"0",10);return isFinite(e)?e:0},eF=function(){m.useEffect(function(){return document.body.setAttribute(eH,(eD()+1).toString()),function(){var e=eD()-1;e<=0?document.body.removeAttribute(eH):document.body.setAttribute(eH,e.toString())}},[])},eV=function(e){var t=e.noRelative,i=e.noImportant,l=e.gapMode,r=void 0===l?"margin":l;eF();var o=m.useMemo(function(){return eO(r)},[r]);return m.createElement(eM,{styles:eL(o,!t,r,i?"":"!important")})},e$=!1;if("u">typeof window)try{var eB=Object.defineProperty({},"passive",{get:function(){return e$=!0,!0}});window.addEventListener("test",eB,eB),window.removeEventListener("test",eB,eB)}catch(e){e$=!1}var eW=!!e$&&{passive:!1},eX=function(e,t){if(!(e instanceof Element))return!1;var i=window.getComputedStyle(e);return"hidden"!==i[t]&&(i.overflowY!==i.overflowX||"TEXTAREA"===e.tagName||"visible"!==i[t])},eU=function(e,t){var i=t.ownerDocument,l=t;do{if("u">typeof ShadowRoot&&l instanceof ShadowRoot&&(l=l.host),eK(e,l)){var r=eQ(e,l);if(r[1]>r[2])return!0}l=l.parentNode}while(l&&l!==i.body)return!1},eK=function(e,t){return"v"===e?eX(t,"overflowY"):eX(t,"overflowX")},eQ=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eY=function(e,t,i,l,r){var o,n=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),s=n*l,a=i.target,d=t.contains(a),c=!1,p=s>0,u=0,h=0;do{if(!a)break;var m=eQ(e,a),f=m[0],x=m[1]-m[2]-n*f;(f||x)&&eK(e,a)&&(u+=x,h+=f);var y=a.parentNode;a=y&&y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?y.host:y}while(!d&&a!==document.body||d&&(t.contains(a)||t===a))return p&&(r&&1>Math.abs(u)||!r&&s>u)?c=!0:!p&&(r&&1>Math.abs(h)||!r&&-s>h)&&(c=!0),c},eZ=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eJ=function(e){return[e.deltaX,e.deltaY]},eG=function(e){return e&&"current"in e?e.current:e},e0=0,e1=[];let e4=(c=function(e){var t=m.useRef([]),i=m.useRef([0,0]),l=m.useRef(),r=m.useState(e0++)[0],o=m.useState(eE)[0],n=m.useRef(e);m.useEffect(function(){n.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(r));var t=(function(e,t,i){if(i||2==arguments.length)for(var l,r=0,o=t.length;r<o;r++)!l&&r in t||(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eG),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(r))}),function(){document.body.classList.remove("block-interactivity-".concat(r)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(r))})}}},[e.inert,e.lockRef.current,e.shards]);var s=m.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!n.current.allowPinchZoom;var r,o=eZ(e),s=i.current,a="deltaX"in e?e.deltaX:s[0]-o[0],d="deltaY"in e?e.deltaY:s[1]-o[1],c=e.target,p=Math.abs(a)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===p&&"range"===c.type)return!1;var u=window.getSelection(),h=u&&u.anchorNode;if(h&&(h===c||h.contains(c)))return!1;var m=eU(p,c);if(!m)return!0;if(m?r=p:(r="v"===p?"h":"v",m=eU(p,c)),!m)return!1;if(!l.current&&"changedTouches"in e&&(a||d)&&(l.current=r),!r)return!0;var f=l.current||r;return eY(f,t,e,"h"===f?a:d,!0)},[]),a=m.useCallback(function(e){if(e1.length&&e1[e1.length-1]===o){var i="deltaY"in e?eJ(e):eZ(e),l=t.current.filter(function(t){var l;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(l=t.delta,l[0]===i[0]&&l[1]===i[1])})[0];if(l&&l.should){e.cancelable&&e.preventDefault();return}if(!l){var r=(n.current.shards||[]).map(eG).filter(Boolean).filter(function(t){return t.contains(e.target)});(r.length>0?s(e,r[0]):!n.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=m.useCallback(function(e,i,l,r){var o={name:e,delta:i,target:l,should:r,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(l)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=m.useCallback(function(e){i.current=eZ(e),l.current=void 0},[]),p=m.useCallback(function(t){d(t.type,eJ(t),t.target,s(t,e.lockRef.current))},[]),u=m.useCallback(function(t){d(t.type,eZ(t),t.target,s(t,e.lockRef.current))},[]);m.useEffect(function(){return e1.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:u}),document.addEventListener("wheel",a,eW),document.addEventListener("touchmove",a,eW),document.addEventListener("touchstart",c,eW),function(){e1=e1.filter(function(e){return e!==o}),document.removeEventListener("wheel",a,eW),document.removeEventListener("touchmove",a,eW),document.removeEventListener("touchstart",c,eW)}},[]);var h=e.removeScrollBar,f=e.inert;return m.createElement(m.Fragment,null,f?m.createElement(o,{styles:"\n  .block-interactivity-".concat(r," {pointer-events: none;}\n  .allow-interactivity-").concat(r," {pointer-events: all;}\n")}):null,h?m.createElement(eV,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},eq.useMedium(c),eA);var e3=m.forwardRef(function(e,t){return m.createElement(eC,eb({},e,{ref:t,sideCar:e4}))});e3.classNames=eC.classNames;var e5=new WeakMap,e2=new WeakMap,e7={},e9=0,e6=function(e){return e&&(e.host||e6(e.parentNode))},e8=function(e,t,i,l){var r=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var i=e6(e);return i&&t.contains(i)?i:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});e7[i]||(e7[i]=new WeakMap);var o=e7[i],n=[],s=new Set,a=new Set(r),d=function(e){!e||s.has(e)||(s.add(e),d(e.parentNode))};r.forEach(d);var c=function(e){!e||a.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))c(e);else try{var t=e.getAttribute(l),r=null!==t&&"false"!==t,a=(e5.get(e)||0)+1,d=(o.get(e)||0)+1;e5.set(e,a),o.set(e,d),n.push(e),1===a&&r&&e2.set(e,!0),1===d&&e.setAttribute(i,"true"),r||e.setAttribute(l,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return c(t),s.clear(),e9++,function(){n.forEach(function(e){var t=e5.get(e)-1,r=o.get(e)-1;e5.set(e,t),o.set(e,r),t||(e2.has(e)||e.removeAttribute(l),e2.delete(e)),r||e.removeAttribute(i)}),--e9||(e5=new WeakMap,e5=new WeakMap,e2=new WeakMap,e7={})}},te=function(e,t,i){void 0===i&&(i="data-aria-hidden");var l=Array.from(Array.isArray(e)?e:[e]),r=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return r?(l.push.apply(l,Array.from(r.querySelectorAll("[aria-live], script"))),e8(l,r,i,"aria-hidden")):function(){return null}},tt=Symbol("radix.slottable");function ti(e){return m.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===tt}var tl="Dialog",[tr,to]=(0,Z.createContextScope)(tl),[tn,ts]=tr(tl),ta=e=>{let{__scopeDialog:t,children:i,open:l,defaultOpen:r,onOpenChange:o,modal:n=!0}=e,s=m.useRef(null),a=m.useRef(null),[d,c]=(0,ei.useControllableState)({prop:l,defaultProp:r??!1,onChange:o,caller:tl});return(0,u.jsx)(tn,{scope:t,triggerRef:s,contentRef:a,contentId:et(),titleId:et(),descriptionId:et(),open:d,onOpenChange:c,onOpenToggle:m.useCallback(()=>c(e=>!e),[c]),modal:n,children:i})};ta.displayName=tl;var td="DialogTrigger";m.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,r=ts(td,i),o=(0,w.useComposedRefs)(t,r.triggerRef);return(0,u.jsx)(er.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":tA(r.open),...l,ref:o,onClick:(0,Y.composeEventHandlers)(e.onClick,r.onOpenToggle)})}).displayName=td;var tc="DialogPortal",[tp,tu]=tr(tc,{forceMount:void 0}),th=e=>{let{__scopeDialog:t,forceMount:i,children:l,container:r}=e,o=ts(tc,t);return(0,u.jsx)(tp,{scope:t,forceMount:i,children:m.Children.map(l,e=>(0,u.jsx)(ex.Presence,{present:i||o.open,children:(0,u.jsx)(ef.Portal,{asChild:!0,container:r,children:e})}))})};th.displayName=tc;var tm="DialogOverlay",tf=m.forwardRef((e,t)=>{let i=tu(tm,e.__scopeDialog),{forceMount:l=i.forceMount,...r}=e,o=ts(tm,e.__scopeDialog);return o.modal?(0,u.jsx)(ex.Presence,{present:l||o.open,children:(0,u.jsx)(ty,{...r,ref:t})}):null});tf.displayName=tm;var tx=((r=m.forwardRef((e,t)=>{let{children:i,...l}=e;if(m.isValidElement(i)){var r;let e,o,n=(r=i,(o=(e=Object.getOwnPropertyDescriptor(r.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?r.ref:(o=(e=Object.getOwnPropertyDescriptor(r,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?r.props.ref:r.props.ref||r.ref),s=function(e,t){let i={...t};for(let l in t){let r=e[l],o=t[l];/^on[A-Z]/.test(l)?r&&o?i[l]=(...e)=>{let t=o(...e);return r(...e),t}:r&&(i[l]=r):"style"===l?i[l]={...r,...o}:"className"===l&&(i[l]=[r,o].filter(Boolean).join(" "))}return{...e,...i}}(l,i.props);return i.type!==m.Fragment&&(s.ref=t?(0,w.composeRefs)(t,n):n),m.cloneElement(i,s)}return m.Children.count(i)>1?m.Children.only(null):null})).displayName="DialogOverlay.RemoveScroll.SlotClone",t=r,(i=m.forwardRef((e,i)=>{let{children:l,...r}=e,o=m.Children.toArray(l),n=o.find(ti);if(n){let e=n.props.children,l=o.map(t=>t!==n?t:m.Children.count(e)>1?m.Children.only(null):m.isValidElement(e)?e.props.children:null);return(0,u.jsx)(t,{...r,ref:i,children:m.isValidElement(e)?m.cloneElement(e,void 0,l):null})}return(0,u.jsx)(t,{...r,ref:i,children:l})})).displayName="DialogOverlay.RemoveScroll.Slot",i),ty=m.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,r=ts(tm,i);return(0,u.jsx)(e3,{as:tx,allowPinchZoom:!0,shards:[r.contentRef],children:(0,u.jsx)(er.Primitive.div,{"data-state":tA(r.open),...l,ref:t,style:{pointerEvents:"auto",...l.style}})})}),tg="DialogContent",tb=m.forwardRef((e,t)=>{let i=tu(tg,e.__scopeDialog),{forceMount:l=i.forceMount,...r}=e,o=ts(tg,e.__scopeDialog);return(0,u.jsx)(ex.Presence,{present:l||o.open,children:o.modal?(0,u.jsx)(tv,{...r,ref:t}):(0,u.jsx)(tw,{...r,ref:t})})});tb.displayName=tg;var tv=m.forwardRef((e,t)=>{let i=ts(tg,e.__scopeDialog),l=m.useRef(null),r=(0,w.useComposedRefs)(t,i.contentRef,l);return m.useEffect(()=>{let e=l.current;if(e)return te(e)},[]),(0,u.jsx)(tj,{...e,ref:r,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,Y.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),i.triggerRef.current?.focus()}),onPointerDownOutside:(0,Y.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,i=0===t.button&&!0===t.ctrlKey;(2===t.button||i)&&e.preventDefault()}),onFocusOutside:(0,Y.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),tw=m.forwardRef((e,t)=>{let i=ts(tg,e.__scopeDialog),l=m.useRef(!1),r=m.useRef(!1);return(0,u.jsx)(tj,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(l.current||i.triggerRef.current?.focus(),t.preventDefault()),l.current=!1,r.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(l.current=!0,"pointerdown"===t.detail.originalEvent.type&&(r.current=!0));let o=t.target;i.triggerRef.current?.contains(o)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&r.current&&t.preventDefault()}})}),tj=m.forwardRef((e,t)=>{let{__scopeDialog:i,trapFocus:l,onOpenAutoFocus:r,onCloseAutoFocus:o,...n}=e,s=ts(tg,i),a=m.useRef(null),d=(0,w.useComposedRefs)(t,a);return m.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??eg()),document.body.insertAdjacentElement("beforeend",e[1]??eg()),ey++,()=>{1===ey&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),ey--}},[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(ed,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:r,onUnmountAutoFocus:o,children:(0,u.jsx)(el.DismissableLayer,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":tA(s.open),...n,ref:d,onDismiss:()=>s.onOpenChange(!1)})}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(tI,{titleId:s.titleId}),(0,u.jsx)(tz,{contentRef:a,descriptionId:s.descriptionId})]})]})}),tN="DialogTitle",tS=m.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,r=ts(tN,i);return(0,u.jsx)(er.Primitive.h2,{id:r.titleId,...l,ref:t})});tS.displayName=tN;var tk="DialogDescription",tq=m.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,r=ts(tk,i);return(0,u.jsx)(er.Primitive.p,{id:r.descriptionId,...l,ref:t})});tq.displayName=tk;var tT="DialogClose",tC=m.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,r=ts(tT,i);return(0,u.jsx)(er.Primitive.button,{type:"button",...l,ref:t,onClick:(0,Y.composeEventHandlers)(e.onClick,()=>r.onOpenChange(!1))})});function tA(e){return e?"open":"closed"}tC.displayName=tT;var tR="DialogTitleWarning",[t_,tE]=(0,Z.createContext)(tR,{contentName:tg,titleName:tN,docsSlug:"dialog"}),tI=({titleId:e})=>{let t=tE(tR),i=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return m.useEffect(()=>{e&&(document.getElementById(e)||console.error(i))},[i,e]),null},tz=({contentRef:e,descriptionId:t})=>{let i=tE("DialogDescriptionWarning"),l=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${i.contentName}}.`;return m.useEffect(()=>{let i=e.current?.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(l))},[l,e,t]),null},tP=e.i(41947),tP=tP;function tO({...e}){return(0,u.jsx)(ta,{"data-slot":"dialog",...e})}function tM({...e}){return(0,u.jsx)(th,{"data-slot":"dialog-portal",...e})}function tH({className:e,...t}){return(0,u.jsx)(tf,{"data-slot":"dialog-overlay",className:(0,f.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function tL({className:e,children:t,showCloseButton:i=!0,...l}){return(0,u.jsxs)(tM,{"data-slot":"dialog-portal",children:[(0,u.jsx)(tH,{}),(0,u.jsxs)(tb,{"data-slot":"dialog-content",className:(0,f.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...l,children:[t,i&&(0,u.jsxs)(tC,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,u.jsx)(tP.default,{}),(0,u.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function tD({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"dialog-header",className:(0,f.cn)("flex flex-col gap-2 text-center sm:text-left",e),...t})}function tF({className:e,...t}){return(0,u.jsx)("div",{"data-slot":"dialog-footer",className:(0,f.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function tV({className:e,...t}){return(0,u.jsx)(tS,{"data-slot":"dialog-title",className:(0,f.cn)("text-lg leading-none font-semibold",e),...t})}function t$({className:e,...t}){return(0,u.jsx)(tq,{"data-slot":"dialog-description",className:(0,f.cn)("text-muted-foreground text-sm",e),...t})}var tB="Checkbox",[tW,tX]=(0,Z.createContextScope)(tB),[tU,tK]=tW(tB);function tQ(e){let{__scopeCheckbox:t,checked:i,children:l,defaultChecked:r,disabled:o,form:n,name:s,onCheckedChange:a,required:d,value:c="on",internal_do_not_use_render:p}=e,[h,f]=(0,ei.useControllableState)({prop:i,defaultProp:r??!1,onChange:a,caller:tB}),[x,y]=m.useState(null),[g,b]=m.useState(null),v=m.useRef(!1),w=!x||!!n||!!x.closest("form"),j={checked:h,disabled:o,setChecked:f,control:x,setControl:y,name:s,form:n,value:c,hasConsumerStoppedPropagationRef:v,required:d,defaultChecked:!t3(r)&&r,isFormControl:w,bubbleInput:g,setBubbleInput:b};return(0,u.jsx)(tU,{scope:t,...j,children:"function"==typeof p?p(j):l})}var tY="CheckboxTrigger",tZ=m.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:i,...l},r)=>{let{control:o,value:n,disabled:s,checked:a,required:d,setControl:c,setChecked:p,hasConsumerStoppedPropagationRef:h,isFormControl:f,bubbleInput:x}=tK(tY,e),y=(0,w.useComposedRefs)(r,c),g=m.useRef(a);return m.useEffect(()=>{let e=o?.form;if(e){let t=()=>p(g.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[o,p]),(0,u.jsx)(er.Primitive.button,{type:"button",role:"checkbox","aria-checked":t3(a)?"mixed":a,"aria-required":d,"data-state":t5(a),"data-disabled":s?"":void 0,disabled:s,value:n,...l,ref:y,onKeyDown:(0,Y.composeEventHandlers)(t,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,Y.composeEventHandlers)(i,e=>{p(e=>!!t3(e)||!e),x&&f&&(h.current=e.isPropagationStopped(),h.current||e.stopPropagation())})})});tZ.displayName=tY;var tJ=m.forwardRef((e,t)=>{let{__scopeCheckbox:i,name:l,checked:r,defaultChecked:o,required:n,disabled:s,value:a,onCheckedChange:d,form:c,...p}=e;return(0,u.jsx)(tQ,{__scopeCheckbox:i,checked:r,defaultChecked:o,disabled:s,required:n,onCheckedChange:d,name:l,form:c,value:a,internal_do_not_use_render:({isFormControl:e})=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(tZ,{...p,ref:t,__scopeCheckbox:i}),e&&(0,u.jsx)(t4,{__scopeCheckbox:i})]})})});tJ.displayName=tB;var tG="CheckboxIndicator",t0=m.forwardRef((e,t)=>{let{__scopeCheckbox:i,forceMount:l,...r}=e,o=tK(tG,i);return(0,u.jsx)(ex.Presence,{present:l||t3(o.checked)||!0===o.checked,children:(0,u.jsx)(er.Primitive.span,{"data-state":t5(o.checked),"data-disabled":o.disabled?"":void 0,...r,ref:t,style:{pointerEvents:"none",...e.style}})})});t0.displayName=tG;var t1="CheckboxBubbleInput",t4=m.forwardRef(({__scopeCheckbox:e,...t},i)=>{let l,{control:r,hasConsumerStoppedPropagationRef:o,checked:n,defaultChecked:s,required:a,disabled:d,name:c,value:p,form:h,bubbleInput:f,setBubbleInput:x}=tK(t1,e),y=(0,w.useComposedRefs)(i,x),g=(l=m.useRef({value:n,previous:n}),m.useMemo(()=>(l.current.value!==n&&(l.current.previous=l.current.value,l.current.value=n),l.current.previous),[n])),b=function(e){let[t,i]=m.useState(void 0);return(0,J.useLayoutEffect)(()=>{if(e){i({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let l,r;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;l=t.inlineSize,r=t.blockSize}else l=e.offsetWidth,r=e.offsetHeight;i({width:l,height:r})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}i(void 0)},[e]),t}(r);m.useEffect(()=>{if(!f)return;let e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set,t=!o.current;if(g!==n&&e){let i=new Event("click",{bubbles:t});f.indeterminate=t3(n),e.call(f,!t3(n)&&n),f.dispatchEvent(i)}},[f,g,n,o]);let v=m.useRef(!t3(n)&&n);return(0,u.jsx)(er.Primitive.input,{type:"checkbox","aria-hidden":!0,defaultChecked:s??v.current,required:a,disabled:d,name:c,value:p,form:h,...t,tabIndex:-1,ref:y,style:{...t.style,...b,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});function t3(e){return"indeterminate"===e}function t5(e){return t3(e)?"indeterminate":e?"checked":"unchecked"}t4.displayName=t1;var t2=e.i(75254);let t7=(0,t2.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function t9({className:e,...t}){return(0,u.jsx)(tJ,{"data-slot":"checkbox",className:(0,f.cn)("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,u.jsx)(t0,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:(0,u.jsx)(t7,{className:"size-3.5"})})})}var t6=e.i(75830),t8=m.createContext(void 0);function ie(e){let t=m.useContext(t8);return e||t||"ltr"}var it="rovingFocusGroup.onEntryFocus",ii={bubbles:!1,cancelable:!0},il="RovingFocusGroup",[ir,io,is]=(0,t6.createCollection)(il),[ia,id]=(0,Z.createContextScope)(il,[is]),[ic,ip]=ia(il),iu=m.forwardRef((e,t)=>(0,u.jsx)(ir.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(ir.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,u.jsx)(ih,{...e,ref:t})})}));iu.displayName=il;var ih=m.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:i,orientation:l,loop:r=!1,dir:o,currentTabStopId:n,defaultCurrentTabStopId:s,onCurrentTabStopIdChange:a,onEntryFocus:d,preventScrollOnEntryFocus:c=!1,...p}=e,h=m.useRef(null),f=(0,w.useComposedRefs)(t,h),x=ie(o),[y,g]=(0,ei.useControllableState)({prop:n,defaultProp:s??null,onChange:a,caller:il}),[b,v]=m.useState(!1),j=(0,eo.useCallbackRef)(d),N=io(i),S=m.useRef(!1),[k,q]=m.useState(0);return m.useEffect(()=>{let e=h.current;if(e)return e.addEventListener(it,j),()=>e.removeEventListener(it,j)},[j]),(0,u.jsx)(ic,{scope:i,orientation:l,dir:x,loop:r,currentTabStopId:y,onItemFocus:m.useCallback(e=>g(e),[g]),onItemShiftTab:m.useCallback(()=>v(!0),[]),onFocusableItemAdd:m.useCallback(()=>q(e=>e+1),[]),onFocusableItemRemove:m.useCallback(()=>q(e=>e-1),[]),children:(0,u.jsx)(er.Primitive.div,{tabIndex:b||0===k?-1:0,"data-orientation":l,...p,ref:f,style:{outline:"none",...e.style},onMouseDown:(0,Y.composeEventHandlers)(e.onMouseDown,()=>{S.current=!0}),onFocus:(0,Y.composeEventHandlers)(e.onFocus,e=>{let t=!S.current;if(e.target===e.currentTarget&&t&&!b){let t=new CustomEvent(it,ii);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=N().filter(e=>e.focusable);ig([e.find(e=>e.active),e.find(e=>e.id===y),...e].filter(Boolean).map(e=>e.ref.current),c)}}S.current=!1}),onBlur:(0,Y.composeEventHandlers)(e.onBlur,()=>v(!1))})})}),im="RovingFocusGroupItem",ix=m.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:i,focusable:l=!0,active:r=!1,tabStopId:o,children:n,...s}=e,a=et(),d=o||a,c=ip(im,i),p=c.currentTabStopId===d,h=io(i),{onFocusableItemAdd:f,onFocusableItemRemove:x,currentTabStopId:y}=c;return m.useEffect(()=>{if(l)return f(),()=>x()},[l,f,x]),(0,u.jsx)(ir.ItemSlot,{scope:i,id:d,focusable:l,active:r,children:(0,u.jsx)(er.Primitive.span,{tabIndex:p?0:-1,"data-orientation":c.orientation,...s,ref:t,onMouseDown:(0,Y.composeEventHandlers)(e.onMouseDown,e=>{l?c.onItemFocus(d):e.preventDefault()}),onFocus:(0,Y.composeEventHandlers)(e.onFocus,()=>c.onItemFocus(d)),onKeyDown:(0,Y.composeEventHandlers)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void c.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=function(e,t,i){var l;let r=(l=e.key,"rtl"!==i?l:"ArrowLeft"===l?"ArrowRight":"ArrowRight"===l?"ArrowLeft":l);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(r))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(r)))return iy[r]}(e,c.orientation,c.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){var i,l;"prev"===t&&r.reverse();let o=r.indexOf(e.currentTarget);r=c.loop?(i=r,l=o+1,i.map((e,t)=>i[(l+t)%i.length])):r.slice(o+1)}setTimeout(()=>ig(r))}}),children:"function"==typeof n?n({isCurrentTabStop:p,hasTabStop:null!=y}):n})})});ix.displayName=im;var iy={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ig(e,t=!1){let i=document.activeElement;for(let l of e)if(l===i||(l.focus({preventScroll:t}),document.activeElement!==i))return}var ib="Tabs",[iv,iw]=(0,Z.createContextScope)(ib,[id]),ij=id(),[iN,iS]=iv(ib),ik=m.forwardRef((e,t)=>{let{__scopeTabs:i,value:l,onValueChange:r,defaultValue:o,orientation:n="horizontal",dir:s,activationMode:a="automatic",...d}=e,c=ie(s),[p,h]=(0,ei.useControllableState)({prop:l,onChange:r,defaultProp:o??"",caller:ib});return(0,u.jsx)(iN,{scope:i,baseId:et(),value:p,onValueChange:h,orientation:n,dir:c,activationMode:a,children:(0,u.jsx)(er.Primitive.div,{dir:c,"data-orientation":n,...d,ref:t})})});ik.displayName=ib;var iq="TabsList",iT=m.forwardRef((e,t)=>{let{__scopeTabs:i,loop:l=!0,...r}=e,o=iS(iq,i),n=ij(i);return(0,u.jsx)(iu,{asChild:!0,...n,orientation:o.orientation,dir:o.dir,loop:l,children:(0,u.jsx)(er.Primitive.div,{role:"tablist","aria-orientation":o.orientation,...r,ref:t})})});iT.displayName=iq;var iC="TabsTrigger",iA=m.forwardRef((e,t)=>{let{__scopeTabs:i,value:l,disabled:r=!1,...o}=e,n=iS(iC,i),s=ij(i),a=iE(n.baseId,l),d=iI(n.baseId,l),c=l===n.value;return(0,u.jsx)(ix,{asChild:!0,...s,focusable:!r,active:c,children:(0,u.jsx)(er.Primitive.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":d,"data-state":c?"active":"inactive","data-disabled":r?"":void 0,disabled:r,id:a,...o,ref:t,onMouseDown:(0,Y.composeEventHandlers)(e.onMouseDown,e=>{r||0!==e.button||!1!==e.ctrlKey?e.preventDefault():n.onValueChange(l)}),onKeyDown:(0,Y.composeEventHandlers)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&n.onValueChange(l)}),onFocus:(0,Y.composeEventHandlers)(e.onFocus,()=>{let e="manual"!==n.activationMode;c||r||!e||n.onValueChange(l)})})})});iA.displayName=iC;var iR="TabsContent",i_=m.forwardRef((e,t)=>{let{__scopeTabs:i,value:l,forceMount:r,children:o,...n}=e,s=iS(iR,i),a=iE(s.baseId,l),d=iI(s.baseId,l),c=l===s.value,p=m.useRef(c);return m.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.jsx)(ex.Presence,{present:r||c,children:({present:i})=>(0,u.jsx)(er.Primitive.div,{"data-state":c?"active":"inactive","data-orientation":s.orientation,role:"tabpanel","aria-labelledby":a,hidden:!i,id:d,tabIndex:0,...n,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:i&&o})})});function iE(e,t){return`${e}-trigger-${t}`}function iI(e,t){return`${e}-content-${t}`}function iz({className:e,...t}){return(0,u.jsx)(ik,{"data-slot":"tabs",className:(0,f.cn)("flex flex-col gap-2",e),...t})}function iP({className:e,...t}){return(0,u.jsx)(iT,{"data-slot":"tabs-list",className:(0,f.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...t})}function iO({className:e,...t}){return(0,u.jsx)(iA,{"data-slot":"tabs-trigger",className:(0,f.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function iM({className:e,...t}){return(0,u.jsx)(i_,{"data-slot":"tabs-content",className:(0,f.cn)("flex-1 outline-none",e),...t})}i_.displayName=iR;var iH="ScrollArea",[iL,iD]=(0,Z.createContextScope)(iH),[iF,iV]=iL(iH),i$=m.forwardRef((e,t)=>{let{__scopeScrollArea:i,type:l="hover",dir:r,scrollHideDelay:o=600,...n}=e,[s,a]=m.useState(null),[d,c]=m.useState(null),[p,h]=m.useState(null),[f,x]=m.useState(null),[y,g]=m.useState(null),[b,v]=m.useState(0),[j,N]=m.useState(0),[S,k]=m.useState(!1),[q,T]=m.useState(!1),C=(0,w.useComposedRefs)(t,e=>a(e)),A=ie(r);return(0,u.jsx)(iF,{scope:i,type:l,dir:A,scrollHideDelay:o,scrollArea:s,viewport:d,onViewportChange:c,content:p,onContentChange:h,scrollbarX:f,onScrollbarXChange:x,scrollbarXEnabled:S,onScrollbarXEnabledChange:k,scrollbarY:y,onScrollbarYChange:g,scrollbarYEnabled:q,onScrollbarYEnabledChange:T,onCornerWidthChange:v,onCornerHeightChange:N,children:(0,u.jsx)(er.Primitive.div,{dir:A,...n,ref:C,style:{position:"relative","--radix-scroll-area-corner-width":b+"px","--radix-scroll-area-corner-height":j+"px",...e.style}})})});i$.displayName=iH;var iB="ScrollAreaViewport",iW=m.forwardRef((e,t)=>{let{__scopeScrollArea:i,children:l,nonce:r,...o}=e,n=iV(iB,i),s=m.useRef(null),a=(0,w.useComposedRefs)(t,s,n.onViewportChange);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),(0,u.jsx)(er.Primitive.div,{"data-radix-scroll-area-viewport":"",...o,ref:a,style:{overflowX:n.scrollbarXEnabled?"scroll":"hidden",overflowY:n.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,u.jsx)("div",{ref:n.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});iW.displayName=iB;var iX="ScrollAreaScrollbar",iU=m.forwardRef((e,t)=>{let{forceMount:i,...l}=e,r=iV(iX,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:n}=r,s="horizontal"===e.orientation;return m.useEffect(()=>(s?o(!0):n(!0),()=>{s?o(!1):n(!1)}),[s,o,n]),"hover"===r.type?(0,u.jsx)(iK,{...l,ref:t,forceMount:i}):"scroll"===r.type?(0,u.jsx)(iQ,{...l,ref:t,forceMount:i}):"auto"===r.type?(0,u.jsx)(iY,{...l,ref:t,forceMount:i}):"always"===r.type?(0,u.jsx)(iZ,{...l,ref:t}):null});iU.displayName=iX;var iK=m.forwardRef((e,t)=>{let{forceMount:i,...l}=e,r=iV(iX,e.__scopeScrollArea),[o,n]=m.useState(!1);return m.useEffect(()=>{let e=r.scrollArea,t=0;if(e){let i=()=>{window.clearTimeout(t),n(!0)},l=()=>{t=window.setTimeout(()=>n(!1),r.scrollHideDelay)};return e.addEventListener("pointerenter",i),e.addEventListener("pointerleave",l),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",i),e.removeEventListener("pointerleave",l)}}},[r.scrollArea,r.scrollHideDelay]),(0,u.jsx)(ex.Presence,{present:i||o,children:(0,u.jsx)(iY,{"data-state":o?"visible":"hidden",...l,ref:t})})}),iQ=m.forwardRef((e,t)=>{var i;let{forceMount:l,...r}=e,o=iV(iX,e.__scopeScrollArea),n="horizontal"===e.orientation,s=lo(()=>d("SCROLL_END"),100),[a,d]=(i={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},m.useReducer((e,t)=>i[e][t]??e,"hidden"));return m.useEffect(()=>{if("idle"===a){let e=window.setTimeout(()=>d("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(e)}},[a,o.scrollHideDelay,d]),m.useEffect(()=>{let e=o.viewport,t=n?"scrollLeft":"scrollTop";if(e){let i=e[t],l=()=>{let l=e[t];i!==l&&(d("SCROLL"),s()),i=l};return e.addEventListener("scroll",l),()=>e.removeEventListener("scroll",l)}},[o.viewport,n,d,s]),(0,u.jsx)(ex.Presence,{present:l||"hidden"!==a,children:(0,u.jsx)(iZ,{"data-state":"hidden"===a?"hidden":"visible",...r,ref:t,onPointerEnter:(0,Y.composeEventHandlers)(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:(0,Y.composeEventHandlers)(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),iY=m.forwardRef((e,t)=>{let i=iV(iX,e.__scopeScrollArea),{forceMount:l,...r}=e,[o,n]=m.useState(!1),s="horizontal"===e.orientation,a=lo(()=>{if(i.viewport){let e=i.viewport.offsetWidth<i.viewport.scrollWidth,t=i.viewport.offsetHeight<i.viewport.scrollHeight;n(s?e:t)}},10);return ln(i.viewport,a),ln(i.content,a),(0,u.jsx)(ex.Presence,{present:l||o,children:(0,u.jsx)(iZ,{"data-state":o?"visible":"hidden",...r,ref:t})})}),iZ=m.forwardRef((e,t)=>{let{orientation:i="vertical",...l}=e,r=iV(iX,e.__scopeScrollArea),o=m.useRef(null),n=m.useRef(0),[s,a]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=le(s.viewport,s.content),c={...l,sizes:s,onSizesChange:a,hasThumb:!!(d>0&&d<1),onThumbChange:e=>o.current=e,onThumbPointerUp:()=>n.current=0,onThumbPointerDown:e=>n.current=e};function p(e,t){return function(e,t,i,l="ltr"){let r=lt(i),o=t||r/2,n=i.scrollbar.paddingStart+o,s=i.scrollbar.size-i.scrollbar.paddingEnd-(r-o),a=i.content-i.viewport;return ll([n,s],"ltr"===l?[0,a]:[-1*a,0])(e)}(e,n.current,s,t)}return"horizontal"===i?(0,u.jsx)(iJ,{...c,ref:t,onThumbPositionChange:()=>{if(r.viewport&&o.current){let e=li(r.viewport.scrollLeft,s,r.dir);o.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{r.viewport&&(r.viewport.scrollLeft=e)},onDragScroll:e=>{r.viewport&&(r.viewport.scrollLeft=p(e,r.dir))}}):"vertical"===i?(0,u.jsx)(iG,{...c,ref:t,onThumbPositionChange:()=>{if(r.viewport&&o.current){let e=li(r.viewport.scrollTop,s);o.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{r.viewport&&(r.viewport.scrollTop=e)},onDragScroll:e=>{r.viewport&&(r.viewport.scrollTop=p(e))}}):null}),iJ=m.forwardRef((e,t)=>{let{sizes:i,onSizesChange:l,...r}=e,o=iV(iX,e.__scopeScrollArea),[n,s]=m.useState(),a=m.useRef(null),d=(0,w.useComposedRefs)(t,a,o.onScrollbarXChange);return m.useEffect(()=>{a.current&&s(getComputedStyle(a.current))},[a]),(0,u.jsx)(i4,{"data-orientation":"horizontal",...r,ref:d,sizes:i,style:{bottom:0,left:"rtl"===o.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===o.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":lt(i)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,i)=>{if(o.viewport){var l,r;let n=o.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),l=n,r=i,l>0&&l<r&&t.preventDefault()}},onResize:()=>{a.current&&o.viewport&&n&&l({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:a.current.clientWidth,paddingStart:i8(n.paddingLeft),paddingEnd:i8(n.paddingRight)}})}})}),iG=m.forwardRef((e,t)=>{let{sizes:i,onSizesChange:l,...r}=e,o=iV(iX,e.__scopeScrollArea),[n,s]=m.useState(),a=m.useRef(null),d=(0,w.useComposedRefs)(t,a,o.onScrollbarYChange);return m.useEffect(()=>{a.current&&s(getComputedStyle(a.current))},[a]),(0,u.jsx)(i4,{"data-orientation":"vertical",...r,ref:d,sizes:i,style:{top:0,right:"ltr"===o.dir?0:void 0,left:"rtl"===o.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":lt(i)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,i)=>{if(o.viewport){var l,r;let n=o.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),l=n,r=i,l>0&&l<r&&t.preventDefault()}},onResize:()=>{a.current&&o.viewport&&n&&l({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:a.current.clientHeight,paddingStart:i8(n.paddingTop),paddingEnd:i8(n.paddingBottom)}})}})}),[i0,i1]=iL(iX),i4=m.forwardRef((e,t)=>{let{__scopeScrollArea:i,sizes:l,hasThumb:r,onThumbChange:o,onThumbPointerUp:n,onThumbPointerDown:s,onThumbPositionChange:a,onDragScroll:d,onWheelScroll:c,onResize:p,...h}=e,f=iV(iX,i),[x,y]=m.useState(null),g=(0,w.useComposedRefs)(t,e=>y(e)),b=m.useRef(null),v=m.useRef(""),j=f.viewport,N=l.content-l.viewport,S=(0,eo.useCallbackRef)(c),k=(0,eo.useCallbackRef)(a),q=lo(p,10);function T(e){b.current&&d({x:e.clientX-b.current.left,y:e.clientY-b.current.top})}return m.useEffect(()=>{let e=e=>{let t=e.target;x?.contains(t)&&S(e,N)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[j,x,N,S]),m.useEffect(k,[l,k]),ln(x,q),ln(f.content,q),(0,u.jsx)(i0,{scope:i,scrollbar:x,hasThumb:r,onThumbChange:(0,eo.useCallbackRef)(o),onThumbPointerUp:(0,eo.useCallbackRef)(n),onThumbPositionChange:k,onThumbPointerDown:(0,eo.useCallbackRef)(s),children:(0,u.jsx)(er.Primitive.div,{...h,ref:g,style:{position:"absolute",...h.style},onPointerDown:(0,Y.composeEventHandlers)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),b.current=x.getBoundingClientRect(),v.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),T(e))}),onPointerMove:(0,Y.composeEventHandlers)(e.onPointerMove,T),onPointerUp:(0,Y.composeEventHandlers)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=v.current,f.viewport&&(f.viewport.style.scrollBehavior=""),b.current=null})})})}),i3="ScrollAreaThumb",i5=m.forwardRef((e,t)=>{let{forceMount:i,...l}=e,r=i1(i3,e.__scopeScrollArea);return(0,u.jsx)(ex.Presence,{present:i||r.hasThumb,children:(0,u.jsx)(i2,{ref:t,...l})})}),i2=m.forwardRef((e,t)=>{let{__scopeScrollArea:i,style:l,...r}=e,o=iV(i3,i),n=i1(i3,i),{onThumbPositionChange:s}=n,a=(0,w.useComposedRefs)(t,e=>n.onThumbChange(e)),d=m.useRef(void 0),c=lo(()=>{d.current&&(d.current(),d.current=void 0)},100);return m.useEffect(()=>{let e=o.viewport;if(e){let t=()=>{c(),d.current||(d.current=lr(e,s),s())};return s(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[o.viewport,c,s]),(0,u.jsx)(er.Primitive.div,{"data-state":n.hasThumb?"visible":"hidden",...r,ref:a,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,Y.composeEventHandlers)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),i=e.clientX-t.left,l=e.clientY-t.top;n.onThumbPointerDown({x:i,y:l})}),onPointerUp:(0,Y.composeEventHandlers)(e.onPointerUp,n.onThumbPointerUp)})});i5.displayName=i3;var i7="ScrollAreaCorner",i9=m.forwardRef((e,t)=>{let i=iV(i7,e.__scopeScrollArea),l=!!(i.scrollbarX&&i.scrollbarY);return"scroll"!==i.type&&l?(0,u.jsx)(i6,{...e,ref:t}):null});i9.displayName=i7;var i6=m.forwardRef((e,t)=>{let{__scopeScrollArea:i,...l}=e,r=iV(i7,i),[o,n]=m.useState(0),[s,a]=m.useState(0),d=!!(o&&s);return ln(r.scrollbarX,()=>{let e=r.scrollbarX?.offsetHeight||0;r.onCornerHeightChange(e),a(e)}),ln(r.scrollbarY,()=>{let e=r.scrollbarY?.offsetWidth||0;r.onCornerWidthChange(e),n(e)}),d?(0,u.jsx)(er.Primitive.div,{...l,ref:t,style:{width:o,height:s,position:"absolute",right:"ltr"===r.dir?0:void 0,left:"rtl"===r.dir?0:void 0,bottom:0,...e.style}}):null});function i8(e){return e?parseInt(e,10):0}function le(e,t){let i=e/t;return isNaN(i)?0:i}function lt(e){let t=le(e.viewport,e.content),i=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-i)*t,18)}function li(e,t,i="ltr"){let l=lt(t),r=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-r,n=t.content-t.viewport,s=function(e,[t,i]){return Math.min(i,Math.max(t,e))}(e,"ltr"===i?[0,n]:[-1*n,0]);return ll([0,n],[0,o-l])(s)}function ll(e,t){return i=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(i-e[0])}}var lr=(e,t=()=>{})=>{let i={left:e.scrollLeft,top:e.scrollTop},l=0;return!function r(){let o={left:e.scrollLeft,top:e.scrollTop},n=i.left!==o.left,s=i.top!==o.top;(n||s)&&t(),i=o,l=window.requestAnimationFrame(r)}(),()=>window.cancelAnimationFrame(l)};function lo(e,t){let i=(0,eo.useCallbackRef)(e),l=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(l.current),[]),m.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(i,t)},[i,t])}function ln(e,t){let i=(0,eo.useCallbackRef)(t);(0,J.useLayoutEffect)(()=>{let t=0;if(e){let l=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(i)});return l.observe(e),()=>{window.cancelAnimationFrame(t),l.unobserve(e)}}},[e,i])}function ls({className:e,children:t,...i}){return(0,u.jsxs)(i$,{"data-slot":"scroll-area",className:(0,f.cn)("relative",e),...i,children:[(0,u.jsx)(iW,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:t}),(0,u.jsx)(la,{}),(0,u.jsx)(i9,{})]})}function la({className:e,orientation:t="vertical",...i}){return(0,u.jsx)(iU,{"data-slot":"scroll-area-scrollbar",orientation:t,className:(0,f.cn)("flex touch-none p-px transition-colors select-none","vertical"===t&&"h-full w-2.5 border-l border-l-transparent","horizontal"===t&&"h-2.5 flex-col border-t border-t-transparent",e),...i,children:(0,u.jsx)(i5,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}var ld=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=k(`Primitive.${t}`),l=m.forwardRef((e,l)=>{let{asChild:r,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,u.jsx)(r?i:t,{...o,ref:l})});return l.displayName=`Primitive.${t}`,{...e,[t]:l}},{}),lc="horizontal",lp=["horizontal","vertical"],lu=m.forwardRef((e,t)=>{var i;let{decorative:l,orientation:r=lc,...o}=e,n=(i=r,lp.includes(i))?r:lc;return(0,u.jsx)(ld.div,{"data-orientation":n,...l?{role:"none"}:{"aria-orientation":"vertical"===n?n:void 0,role:"separator"},...o,ref:t})});function lh({className:e,orientation:t="horizontal",decorative:i=!0,...l}){return(0,u.jsx)(lu,{"data-slot":"separator",decorative:i,orientation:t,className:(0,f.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...l})}lu.displayName="Separator";let lm=(0,t2.default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),lf=(0,t2.default)("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),lx=(0,t2.default)("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]),ly=(0,t2.default)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),lg=(0,t2.default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),lb=(0,t2.default)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),lv=(0,t2.default)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]),lw=(0,t2.default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),lj=(0,t2.default)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),lN=(0,t2.default)("search",[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]),lS=(0,t2.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),lk=(0,t2.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),lq=(0,t2.default)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]),lT=(0,t2.default)("medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]),lC=(0,t2.default)("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]),lA=(0,t2.default)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),lR=(0,t2.default)("book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]),l_=(0,t2.default)("flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),lE=(0,t2.default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),lI=(0,t2.default)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),lz=(0,t2.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),lP=[{name:"Новичок",minLevel:1,icon:"🌱",color:"text-gray-400"},{name:"Ученик",minLevel:5,icon:"📚",color:"text-green-400"},{name:"Отличник",minLevel:10,icon:"⭐",color:"text-blue-400"},{name:"Знаток",minLevel:20,icon:"🎓",color:"text-purple-400"},{name:"Мастер",minLevel:35,icon:"🏆",color:"text-amber-400"},{name:"Эксперт",minLevel:50,icon:"👑",color:"text-yellow-400"},{name:"Гений",minLevel:75,icon:"💎",color:"text-cyan-400"},{name:"Легенда",minLevel:100,icon:"🌟",color:"text-pink-400"}],lO=(0,t2.default)("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),lM=(0,t2.default)("calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),lH=(0,t2.default)("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),lL={id:0,name:"Подготовительный класс",shortName:"Подг.",subjects:[{id:"prep-writing",title:"Подготовка к письму",icon:(0,u.jsx)(lO,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Развитие навыков письма и мелкой моторики",topics:[{id:"t1",title:"Обведение контуров",description:"Учимся обводить фигуры по контуру",theory:`<h3>Что такое обведение контуров?</h3>
          <p>Обведение контуров — это первое упражнение для подготовки руки к письму. Ребёнок учится контролировать движение карандаша, следуя по готовой линии.</p>
          <h4>Почему это важно?</h4>
          <ul>
            <li>Развивает мелкую моторику пальцев</li>
            <li>Учит координировать движения руки и глаза</li>
            <li>Подготавливает мышцы руки к письму</li>
            <li>Формирует правильный захват карандаша</li>
          </ul>
          <h4>Как выполнять?</h4>
          <p>Начинайте с простых фигур: круги, квадраты, треугольники. Постепенно переходите к более сложным узорам и орнаментам.</p>`,examples:["Обведи солнышко","Обведи листочек","Обведи геометрические фигуры"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t2",title:"Работа с прописями",description:"Первые навыки письма букв",theory:`<h3>Прописи — первый шаг к письму</h3>
          <p>Прописи — это специальные тетради с упражнениями для обучения письму. Они содержат буквы, слоги и слова, написанные пунктирными линиями.</p>
          <h4>Этапы работы с прописями:</h4>
          <ol>
            <li>Обведение букв по пунктиру</li>
            <li>Дописывание элементов букв</li>
            <li>Самостоятельное написание букв</li>
            <li>Написание слогов и слов</li>
          </ol>`,examples:["Пропись с буквами А, О, У","Пропись с элементами букв","Пропись с цифрами"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t3",title:"Развитие мелкой моторики",description:"Упражнения для развития пальцев",theory:`<h3>Мелкая моторика — основа письма</h3>
          <p>Мелкая моторика — это способность выполнять точные движения пальцами и кистями рук. Она напрямую связана с развитием речи и мышления.</p>
          <h4>Упражнения для развития:</h4>
          <ul>
            <li>Пальчиковая гимнастика</li>
            <li>Лепка из пластилина</li>
            <li>Нанизывание бусин</li>
            <li>Вырезание ножницами</li>
            <li>Рисование и раскрашивание</li>
          </ul>`,examples:['Игра "Пальчики здороваются"',"Лепка шариков из пластилина","Сбор пирамидки"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t4",title:"Рисование линий и узоров",description:"Учимся проводить прямые и волнистые линии",theory:`<h3>Линии — основа всех букв</h3>
          <p>Все буквы состоят из простых линий: прямых, наклонных, закруглённых и волнистых. Научившись рисовать линии, ребёнок легко освоит написание букв.</p>
          <h4>Виды линий:</h4>
          <ul>
            <li>Прямые горизонтальные (—)</li>
            <li>Прямые вертикальные (|)</li>
            <li>Наклонные (/ и \\)</li>
            <li>Закруглённые (◡)</li>
            <li>Волнистые (~)</li>
          </ul>`,examples:["Нарисуй заборчик","Нарисуй волны","Нарисуй лесенку"],completed:!1,difficulty:"easy",estimatedTime:15}],quiz:[{id:"q1",question:"Какой навык развивает обведение контуров?",options:["Память","Мелкую моторику","Слух","Зрение"],correctAnswer:1,explanation:"Обведение контуров развивает мелкую моторику рук — способность выполнять точные движения пальцами. Это важнейший навык для подготовки к письму.",difficulty:"easy",points:10},{id:"q2",question:"Что такое прописи?",options:["Книжки с картинками","Тетради для обучения письму","Игрушки","Краски"],correctAnswer:1,explanation:"Прописи — это специальные тетради с упражнениями для обучения письму. Они содержат буквы и элементы букв, написанные пунктирными линиями.",difficulty:"easy",points:10}]},{id:"prep-math",title:"Основы счёта",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-cyan-500",description:"Знакомство с числами и основами математики",topics:[{id:"t1",title:"Счёт до 10",description:"Учимся считать от 1 до 10",theory:`<h3>Первые шаги в математике</h3>
          <p>Счёт — это основа всей математики. Начинать нужно с простого пересчёта предметов: один, два, три...</p>
          <h4>Этапы обучения счёту:</h4>
          <ol>
            <li>Счёт от 1 до 5</li>
            <li>Счёт от 1 до 10</li>
            <li>Обратный счёт от 10 до 1</li>
            <li>Счёт предметов в группе</li>
          </ol>
          <h4>Советы:</h4>
          <p>Считайте всё вокруг: ступеньки, игрушки, фрукты. Это поможет ребёнку понять, что числа — это не просто слова, а количество предметов.</p>`,examples:["Посчитай пальчики на руке","Сколько яблок на столе?","Посчитай машинки"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t2",title:"Игры с цифрами",description:"Знакомство с написанием цифр",theory:`<h3>Цифры от 0 до 9</h3>
          <p>Цифры — это знаки для записи чисел. Всего существует 10 цифр: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9. Из них можно составить любое число!</p>
          <h4>Как запомнить цифры:</h4>
          <ul>
            <li>1 — похожа на палочку</li>
            <li>2 — похожа на лебедя</li>
            <li>3 — похожа на ушки зайца</li>
            <li>4 — похожа на стульчик</li>
            <li>5 — похожа на крючок</li>
          </ul>`,examples:["Найди цифру 3","Напиши цифру 5","Собери пазл с цифрами"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t3",title:"Сравнение количества",description:"Больше, меньше, равно",theory:`<h3>Сравниваем количества</h3>
          <p>Важно уметь сравнивать группы предметов: где больше, где меньше, а где поровну.</p>
          <h4>Знаки сравнения:</h4>
          <ul>
            <li>> больше (птичка открывает клюв к большему числу)</li>
            <li>< меньше</li>
            <li>= равно (две одинаковые палочки)</li>
          </ul>
          <h4>Примеры:</h4>
          <p>5 > 3 (пять больше трёх)<br/>
          2 < 4 (два меньше четырёх)<br/>
          3 = 3 (три равно трём)</p>`,examples:["Сравни: 3 яблока и 5 груш","Где больше кружочков?","Сделай поровну"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t4",title:"Простые логические задачи",description:"Развитие логического мышления",theory:`<h3>Учимся думать логически</h3>
          <p>Логические задачи учат ребёнка рассуждать, находить закономерности и делать выводы.</p>
          <h4>Типы задач:</h4>
          <ul>
            <li>Найди лишнее</li>
            <li>Продолжи ряд</li>
            <li>Что сначала, что потом?</li>
            <li>Найди закономерность</li>
          </ul>`,examples:["Найди лишнее: яблоко, груша, морковь, банан","Какой фигуры не хватает?","Продолжи: 🔴🔵🔴🔵..."],completed:!1,difficulty:"medium",estimatedTime:20}],quiz:[{id:"q1",question:"Сколько пальцев на одной руке?",options:["3","4","5","6"],correctAnswer:2,explanation:"На одной руке 5 пальцев: большой, указательный, средний, безымянный и мизинец. Это помогает детям научиться считать до 5!",difficulty:"easy",points:10},{id:"q2",question:"Какое число больше: 3 или 7?",options:["3","7","Они равны","Не знаю"],correctAnswer:1,explanation:"7 больше, чем 3. Когда считаем: 1, 2, 3, 4, 5, 6, 7 — число 7 идёт позже, значит оно больше!",difficulty:"easy",points:10},{id:"q3",question:"Продолжи ряд: 2, 4, 6, ...?",options:["7","8","9","10"],correctAnswer:1,explanation:"Это ряд чётных чисел! Каждое следующее число на 2 больше предыдущего: 2+2=4, 4+2=6, 6+2=8.",difficulty:"medium",points:15}]},{id:"prep-world",title:"Окружающий мир",icon:(0,u.jsx)(lH,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-emerald-500",description:"Знакомство с природой и окружающим миром",topics:[{id:"t1",title:"Времена года",description:"Зима, весна, лето, осень",theory:`<h3>Четыре времени года</h3>
          <p>В году четыре времени года, каждое длится три месяца:</p>
          <h4>❄️ Зима (декабрь, январь, февраль)</h4>
          <p>Холодно, снег, лыжи, снеговики, Новый год</p>
          <h4>🌸 Весна (март, апрель, май)</h4>
          <p>Тает снег, распускаются листья, прилетают птицы</p>
          <h4>☀️ Лето (июнь, июль, август)</h4>
          <p>Тепло, солнце, ягоды, купание, каникулы</p>
          <h4>🍂 Осень (сентябрь, октябрь, ноябрь)</h4>
          <p>Листья желтеют и падают, дожди, птицы улетают на юг</p>`,examples:["Какое сейчас время года?","Найди картинки с зимой","Что бывает летом?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t2",title:"Домашние животные",description:"Кошки, собаки и другие питомцы",theory:`<h3>Наши друзья — домашние животные</h3>
          <p>Домашние животные живут с людьми. Мы заботимся о них, а они дарят нам любовь и радость.</p>
          <h4>Популярные домашние животные:</h4>
          <ul>
            <li>🐱 Кошка — мяукает, ловит мышей, любит спать</li>
            <li>🐕 Собака — лает, охраняет дом, верный друг</li>
            <li>🐹 Хомяк — маленький, живёт в клетке</li>
            <li>🐟 Рыбки — плавают в аквариуме</li>
            <li>🐦 Попугай — умеет говорить</li>
          </ul>`,examples:["Как кричит кошка?","Кто охраняет дом?","Покажи собаку на картинке"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t3",title:"Безопасность дома",description:"Правила безопасного поведения",theory:`<h3>Правила безопасности дома</h3>
          <p>Дома нас тоже могут подстерегать опасности. Важно знать правила!</p>
          <h4>⛔ Опасно:</h4>
          <ul>
            <li>Трогать розетки и провода</li>
            <li>Играть со спичками и зажигалками</li>
            <li>Открывать дверь незнакомцам</li>
            <li>Брать острые предметы без взрослых</li>
            <li>Лезть на подоконники</li>
          </ul>
          <h4>✅ Правильно:</h4>
          <p>Всегда спрашивай разрешения у взрослых, если не уверен!</p>`,examples:["Что нельзя трогать?","Открывать ли дверь незнакомцу?","Кто поможет в опасности?"],completed:!1,difficulty:"easy",estimatedTime:15}],quiz:[{id:"q1",question:"Какое время года наступает после зимы?",options:["Лето","Осень","Весна","Зима"],correctAnswer:2,explanation:"После зимы наступает весна! Снег тает, солнышко греет теплее, распускаются первые цветы и почки на деревьях.",difficulty:"easy",points:10},{id:"q2",question:'Какое животное говорит "мяу"?',options:["Собака","Корова","Кошка","Свинья"],correctAnswer:2,explanation:'Кошка говорит "мяу"! Собака лает "гав", корова мычит "му", а свинья хрюкает "хрю".',difficulty:"easy",points:10}]}]},lD=(0,t2.default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),lF={id:1,name:"1 класс",shortName:"1 кл.",subjects:[{id:"math1",title:"Математика",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Основы математики: счёт, сложение, вычитание",topics:[{id:"t1",title:"Числа от 1 до 10",description:"Знакомство с числами первого десятка",theory:`<h3>Числа от 1 до 10</h3>
          <p>Первый десяток чисел — основа всей математики. Каждое число обозначает количество предметов.</p>
          <h4>Числа и их обозначения:</h4>
          <ul>
            <li>1 — один (один предмет)</li>
            <li>2 — два (пара предметов)</li>
            <li>3 — три</li>
            <li>... и так до 10</li>
          </ul>
          <h4>Состав числа:</h4>
          <p>Каждое число можно представить как сумму двух чисел:<br/>
          5 = 1 + 4 = 2 + 3 = 3 + 2 = 4 + 1</p>`,examples:["Сколько яблок? 🍎🍎🍎","Напиши число 7","Найди пару: 3 и ? = 5"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t2",title:"Сложение",description:"Учимся складывать числа",theory:`<h3>Сложение — объединяем группы</h3>
          <p>Сложение — это когда мы объединяем две группы предметов в одну. Знак сложения: + (плюс)</p>
          <h4>Примеры:</h4>
          <p>🍎🍎 + 🍎 = 🍎🍎🍎<br/>
          2 + 1 = 3</p>
          <h4>Правила:</h4>
          <ul>
            <li>От перестановки слагаемых сумма не меняется: 3 + 2 = 2 + 3 = 5</li>
            <li>При сложении с нулём число не меняется: 5 + 0 = 5</li>
          </ul>`,examples:["3 + 2 = ?","Реши: 4 + 1","Сколько будет 5 + 5?"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"t3",title:"Вычитание",description:"Учимся вычитать числа",theory:`<h3>Вычитание — убираем часть</h3>
          <p>Вычитание — это когда мы убираем часть предметов из группы. Знак вычитания: − (минус)</p>
          <h4>Примеры:</h4>
          <p>🍎🍎🍎 − 🍎 = 🍎🍎<br/>
          3 − 1 = 2</p>
          <h4>Правила:</h4>
          <ul>
            <li>При вычитании самого числа получается ноль: 5 − 5 = 0</li>
            <li>При вычитании нуля число не меняется: 5 − 0 = 5</li>
          </ul>`,examples:["5 − 2 = ?","Было 7 конфет, съели 3. Сколько осталось?","10 − 5 = ?"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"t4",title:"Геометрические фигуры",description:"Круг, квадрат, треугольник",theory:`<h3>Основные геометрические фигуры</h3>
          <h4>⚪ Круг</h4>
          <p>Фигура без углов, похож на солнышко или колесо</p>
          <h4>⬜ Квадрат</h4>
          <p>У квадрата 4 равные стороны и 4 угла. Все углы прямые (90\xb0)</p>
          <h4>🔺 Треугольник</h4>
          <p>У треугольника 3 стороны и 3 угла</p>
          <h4>Прямоугольник</h4>
          <p>4 стороны, противоположные стороны равны, все углы прямые</p>`,examples:["Найди все круги","Чем отличается квадрат от прямоугольника?","Посчитай углы у треугольника"],completed:!1,difficulty:"easy",estimatedTime:20}],quiz:[{id:"q1",question:"Чему равно 3 + 2?",options:["4","5","6","7"],correctAnswer:1,explanation:"3 + 2 = 5. Три предмета и ещё два предмета вместе составляют пять. Можно посчитать на пальцах: 3 пальца + 2 пальца = 5 пальцев!",difficulty:"easy",points:10},{id:"q2",question:"Чему равно 7 − 3?",options:["3","4","5","6"],correctAnswer:1,explanation:"7 − 3 = 4. Было 7 предметов, убрали 3, осталось 4. Можно проверить сложением: 4 + 3 = 7.",difficulty:"easy",points:10},{id:"q3",question:"Какая фигура имеет 4 равные стороны?",options:["Треугольник","Круг","Квадрат","Прямоугольник"],correctAnswer:2,explanation:"Квадрат — это фигура с 4 равными сторонами. У прямоугольника только противоположные стороны равны, у треугольника 3 стороны, а у круга вообще нет сторон!",difficulty:"medium",points:15},{id:"q4",question:"Сколько углов у треугольника?",options:["2","3","4","5"],correctAnswer:1,explanation:'У треугольника 3 угла. Это видно даже из названия: "три" + "угольник" = фигура с тремя углами!',difficulty:"easy",points:10}]},{id:"russian1",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Обучение грамоте и письму",topics:[{id:"t1",title:"Алфавит",description:"33 буквы русского алфавита",theory:`<h3>Русский алфавит</h3>
          <p>В русском алфавите 33 буквы. Они делятся на гласные и согласные.</p>
          <h4>Гласные буквы (10):</h4>
          <p>А, Е, Ё, И, О, У, Ы, Э, Ю, Я</p>
          <h4>Согласные буквы (21):</h4>
          <p>Б, В, Г, Д, Ж, З, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ</p>
          <h4>Особые буквы (2):</h4>
          <p>Ь (мягкий знак) и Ъ (твёрдый знак) — не обозначают звуков</p>`,examples:["Назови буквы по порядку","Какая буква после К?","Найди гласные буквы"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"t2",title:"Гласные и согласные звуки",description:"Различаем звуки речи",theory:`<h3>Звуки и буквы</h3>
          <p>Буквы мы пишем и видим, а звуки — произносим и слышим.</p>
          <h4>Гласные звуки:</h4>
          <p>Произносятся голосом, воздух свободно проходит через рот. При произношении рот открыт.</p>
          <p>Гласные звуки: [а], [о], [у], [ы], [и], [э]</p>
          <h4>Согласные звуки:</h4>
          <p>Произносятся с препятствием (губы, зубы, язык). Могут быть твёрдыми и мягкими, звонкими и глухими.</p>`,examples:["Какой звук в слове мама?","Назови согласные в слове кот","Твердый или мягкий согласный?"],completed:!1,difficulty:"medium",estimatedTime:20},{id:"t3",title:"Слоги",description:"Делим слова на слоги",theory:`<h3>Что такое слог?</h3>
          <p>Слог — это часть слова, которую можно произнести одним выдохом. В слоге обязательно есть гласный звук.</p>
          <h4>Правило:</h4>
          <p>Сколько в слове гласных — столько и слогов!</p>
          <h4>Примеры:</h4>
          <ul>
            <li>кот — 1 слог (1 гласная: о)</li>
            <li>ма-ма — 2 слога (2 гласные: а, а)</li>
            <li>па-на-ма — 3 слога (3 гласные: а, а, а)</li>
          </ul>`,examples:["Раздели на слоги: молоко",'Сколько слогов в слове "ручка"?',"Придумай слово из 2 слогов"],completed:!1,difficulty:"easy",estimatedTime:15}],quiz:[{id:"q1",question:"Сколько букв в русском алфавите?",options:["30","31","33","34"],correctAnswer:2,explanation:"В русском алфавите 33 буквы. Первая буква — А, последняя — Я.",difficulty:"easy",points:10},{id:"q2",question:'Сколько слогов в слове "молоко"?',options:["2","3","4","5"],correctAnswer:1,explanation:'В слове "молоко" 3 гласные буквы (о, о, о), значит 3 слога: мо-ло-ко.',difficulty:"easy",points:10}]},{id:"world1",title:"Окружающий мир",icon:(0,u.jsx)(lD,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-teal-500",description:"Знакомство с миром вокруг нас",topics:[{id:"t1",title:"Правила дорожного движения",description:"Безопасность на дороге",theory:`<h3>Правила дорожного движения</h3>
          <h4>🚦 Светофор:</h4>
          <ul>
            <li>🔴 Красный — стой! Идти нельзя</li>
            <li>🟡 Жёлтый — жди! Приготовься</li>
            <li>🟢 Зелёный — иди! Можно переходить</li>
          </ul>
          <h4>🚶 Пешеходный переход:</h4>
          <p>Переходи дорогу только по "зебре" — белым полоскам на асфальте.</p>
          <h4>Важно:</h4>
          <ul>
            <li>Сначала посмотри налево</li>
            <li>Дойди до середины</li>
            <li>Посмотри направо</li>
            <li>Переходи спокойно, не беги!</li>
          </ul>`,examples:["Какой свет светофора разрешает идти?","Где нужно переходить дорогу?","Куда смотреть сначала?"],completed:!1,difficulty:"easy",estimatedTime:20}],quiz:[{id:"q1",question:"Какой цвет светофора разрешает переходить дорогу?",options:["Красный","Жёлтый","Зелёный","Синий"],correctAnswer:2,explanation:"Зелёный свет светофора разрешает движение пешеходам. Красный — стой, жёлтый — жди, зелёный — иди!",difficulty:"easy",points:10}]}]},lV={id:2,name:"2 класс",shortName:"2 кл.",subjects:[{id:"math2",title:"Математика",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Счёт до 100, сложение и вычитание в столбик",topics:[{id:"t1",title:"Счёт до 100",description:"Числа от 10 до 100",theory:`<h3>Числа второго десятка и до 100</h3>
          <p>После 10 идут числа: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20...</p>
          <h4>Десятки:</h4>
          <ul>
            <li>10 — десять (1 десяток)</li>
            <li>20 — двадцать (2 десятка)</li>
            <li>30 — тридцать (3 десятка)</li>
            <li>... до 100 — сто (10 десятков)</li>
          </ul>
          <h4>Состав числа:</h4>
          <p>25 = 2 десятка + 5 единиц = 20 + 5</p>`,examples:["Сколько десятков в числе 47?","Напиши число: 6 десятков 3 единицы","Какое число между 39 и 41?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t2",title:"Сложение в столбик",description:"Учимся складывать двузначные числа",theory:`<h3>Сложение в столбик</h3>
          <p>Когда числа большие, удобно складывать в столбик.</p>
          <h4>Правило:</h4>
          <pre>
   45
 + 23
 ----
   68
          </pre>
          <ol>
            <li>Записываем числа друг под другом (единицы под единицами, десятки под десятками)</li>
            <li>Складываем единицы: 5 + 3 = 8</li>
            <li>Складываем десятки: 4 + 2 = 6</li>
            <li>Ответ: 68</li>
          </ol>`,examples:["Реши: 36 + 42","Посчитай: 58 + 17","Найди сумму: 45 + 38"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t3",title:"Единицы измерения",description:"Метр, сантиметр, килограмм",theory:`<h3>Единицы измерения</h3>
          <h4>Длина:</h4>
          <ul>
            <li>1 см (сантиметр) — маленькая единица</li>
            <li>1 дм (дециметр) = 10 см</li>
            <li>1 м (метр) = 100 см = 10 дм</li>
          </ul>
          <h4>Масса:</h4>
          <ul>
            <li>1 кг (килограмм) — масса арбуза</li>
            <li>1 г (грамм) — маленькая единица</li>
          </ul>`,examples:["Сколько см в 1 метре?","Что тяжелее: 1 кг ваты или 1 кг железа?","Измерь длину карандаша"],completed:!1,difficulty:"medium",estimatedTime:20}],quiz:[{id:"q1",question:"Чему равно 25 + 17?",options:["42","41","43","40"],correctAnswer:0,explanation:"25 + 17 = 42. При сложении в столбик: 5+7=12 (пишем 2, 1 запоминаем), 2+1+1=4. Ответ: 42",difficulty:"medium",points:15},{id:"q2",question:"Сколько сантиметров в одном метре?",options:["10","50","100","1000"],correctAnswer:2,explanation:"В одном метре 100 сантиметров. 1 м = 100 см. Это нужно запомнить!",difficulty:"easy",points:10}]},{id:"russian2",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Правописание жи-ши, ча-ща, чу-щу",topics:[{id:"t1",title:"Правописание ЖИ-ШИ",description:"Пишем И после Ж и Ш",theory:`<h3>Правило ЖИ-ШИ</h3>
          <p>После Ж и Ш пишется буква И!</p>
          <h4>Запомни:</h4>
          <ul>
            <li>жи́знь, ши́на, маши́на</li>
            <li>жи́р, ши́ть, ле́жи́ть</li>
            <li>лы́жи, моржи́, ежи́</li>
          </ul>
          <h4>Как проверить:</h4>
          <p>ЖИ и ШИ — пиши с буквой И, даже если слышится Ы!</p>`,examples:["Вставь букву: маш_на","Исправь ошибку: жызнь","Какая буква после Ш?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t2",title:"Правописание ЧА-ЩА",description:"Пишем А после Ч и Щ",theory:`<h3>Правило ЧА-ЩА</h3>
          <p>После Ч и Щ пишется буква А!</p>
          <h4>Запомни:</h4>
          <ul>
            <li>ча́шка, площа́дка, да́ча</li>
            <li>ща́вель, ча́й, ча́ща</li>
          </ul>
          <h4>Стишок для запоминания:</h4>
          <p>ЧА и ЩА — пиши с буквой А!</p>`,examples:["Вставь букву: ч_шка","Исправь: щявель","Какая буква: ч_й?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"t3",title:"Правописание ЧУ-ЩУ",description:"Пишем У после Ч и Щ",theory:`<h3>Правило ЧУ-ЩУ</h3>
          <p>После Ч и Щ пишется буква У!</p>
          <h4>Запомни:</h4>
          <ul>
            <li>чу́до, щу́ка, чу́лок</li>
            <li>ищу́, та́щу, кричу́</li>
          </ul>
          <h4>Стишок:</h4>
          <p>ЧУ и ЩУ — пиши с буквой У!</p>`,examples:["Вставь букву: щ_ка","Исправь: чюдо","Какая буква: тащ_?"],completed:!1,difficulty:"easy",estimatedTime:15}],quiz:[{id:"q1",question:"Как правильно написать слово?",options:["жызнь","жизнь","жизнь","жызнь"],correctAnswer:1,explanation:"После Ж пишется И! Правило: ЖИ-ШИ пиши с буквой И.",difficulty:"easy",points:10},{id:"q2",question:"Какая буква пропущена: ч_шка?",options:["и","ы","а","я"],correctAnswer:2,explanation:"После Ч пишется А! Правило: ЧА-ЩА пиши с буквой А. Правильно: чАшка.",difficulty:"easy",points:10},{id:"q3",question:"Как правильно: щ_ка?",options:["щи́ка","щы́ка","щу́ка","щя́ка"],correctAnswer:2,explanation:"После Щ пишется У! Правило: ЧУ-ЩУ пиши с буквой У. Правильно: щУка.",difficulty:"easy",points:10}]},{id:"literature2",title:"Литературное чтение",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-violet-500",description:"Русские народные сказки, стихи",topics:[{id:"t1",title:"Русские народные сказки",description:"Колобок, Теремок, Репка",theory:`<h3>Русские народные сказки</h3>
          <p>Сказки создавались народом и передавались из поколения в поколение. У них нет одного автора.</p>
          <h4>Особенности русских народных сказок:</h4>
          <ul>
            <li>Зачин: "Жили-были...", "В некотором царстве..."</li>
            <li>Троекратные повторы</li>
            <li>Борьба добра со злом</li>
            <li>Добро побеждает</li>
          </ul>
          <h4>Известные сказки:</h4>
          <p>"Колобок", "Теремок", "Репка", "Курочка Ряба", "Маша и медведь"</p>`,examples:['Как начинается сказка "Колобок"?',"Кто сломал теремок?",'Чьи домики в сказке "Три поросёнка"?'],completed:!1,difficulty:"easy",estimatedTime:20}],quiz:[{id:"q1",question:"Кто первый встретился Колобку?",options:["Волк","Заяц","Медведь","Лиса"],correctAnswer:1,explanation:"Первым Колобку встретился Заяц! Колобок покатился по дорожке и первым увидел Зайца.",difficulty:"easy",points:10}]}]},l$={id:3,name:"3 класс",shortName:"3 кл.",subjects:[{id:"math3",title:"Математика",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Таблица умножения, периметр и площадь",topics:[{id:"t1",title:"Таблица умножения",description:"Учим умножать числа",theory:`<h3>Таблица умножения</h3>
          <p>Умножение — это быстрое сложение одинаковых чисел.</p>
          <h4>Что такое умножение:</h4>
          <p>3 \xd7 4 = 3 + 3 + 3 + 3 = 12 (три взяли 4 раза)</p>
          <h4>Таблица на 2:</h4>
          <p>2\xd71=2, 2\xd72=4, 2\xd73=6, 2\xd74=8, 2\xd75=10, 2\xd76=12, 2\xd77=14, 2\xd78=16, 2\xd79=18</p>
          <h4>Таблица на 9 (лайфхак):</h4>
          <p>9\xd76: согни 6-й палец. До него 5, после 4 → 54!</p>`,examples:["Сколько будет 7×8?","Реши: 6×9","Проверь: 5×5=?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Периметр и площадь",description:"Вычисляем периметр и площадь фигур",theory:`<h3>Периметр</h3>
          <p>Периметр — это сумма длин всех сторон фигуры.</p>
          <h4>Формулы:</h4>
          <ul>
            <li>Периметр прямоугольника: P = (a + b) \xd7 2</li>
            <li>Периметр квадрата: P = a \xd7 4</li>
          </ul>
          <h3>Площадь</h3>
          <p>Площадь — это место, которое занимает фигура.</p>
          <h4>Формулы:</h4>
          <ul>
            <li>Площадь прямоугольника: S = a \xd7 b</li>
            <li>Площадь квадрата: S = a \xd7 a</li>
          </ul>`,examples:["Найди периметр квадрата со стороной 5 см","Вычисли площадь прямоугольника 6×4","Сравни периметры"],completed:!1,difficulty:"medium",estimatedTime:25}],quiz:[{id:"q1",question:"Чему равно 7 × 8?",options:["54","56","58","48"],correctAnswer:1,explanation:"7 × 8 = 56. Запомни: 56 = 7 × 8 (цифры идут подряд: 5, 6, 7, 8!).",difficulty:"medium",points:15},{id:"q2",question:"Периметр квадрата со стороной 4 см равен:",options:["8 см","12 см","16 см","20 см"],correctAnswer:2,explanation:"Периметр квадрата = сторона × 4. P = 4 × 4 = 16 см.",difficulty:"medium",points:15}]},{id:"russian3",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Части речи, падежи",topics:[{id:"t1",title:"Имя существительное",description:"Слова-предметы",theory:`<h3>Имя существительное</h3>
          <p>Имя существительное — это часть речи, обозначающая предмет. Отвечает на вопросы: КТО? ЧТО?</p>
          <h4>Примеры:</h4>
          <ul>
            <li>Кто? — кошка, мальчик, учитель</li>
            <li>Что? — стол, книга, солнце</li>
          </ul>
          <h4>Признаки существительного:</h4>
          <ul>
            <li>Одушевлённое/неодушевлённое</li>
            <li>Собственное/нарицательное</li>
            <li>Род: м., ж., ср.</li>
            <li>Число: ед., мн.</li>
            <li>Падеж (6 падежей)</li>
          </ul>`,examples:["Найди существительное: красный шар",'Определи род слова "окно"',"Одушевлённое или нет: бабочка?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Имя прилагательное",description:"Слова-признаки",theory:`<h3>Имя прилагательное</h3>
          <p>Имя прилагательное — это часть речи, обозначающая признак предмета. Отвечает на вопросы: КАКОЙ? КАКАЯ? КАКОЕ? КАКИЕ?</p>
          <h4>Примеры:</h4>
          <ul>
            <li>красный шар (какой? — красный)</li>
            <li>тёплое солнце (какое? — тёплое)</li>
            <li>весёлая девочка (какая? — весёлая)</li>
          </ul>
          <h4>Признаки прилагательного:</h4>
          <p>Род, число, падеж — прилагательное согласуется с существительным!</p>`,examples:["Найди прилагательное: большой дом",'Подбери прилагательное к слову "кошка"',"Определи род: синее небо"],completed:!1,difficulty:"medium",estimatedTime:20}],quiz:[{id:"q1",question:"Какая часть речи обозначает предмет?",options:["Глагол","Прилагательное","Существительное","Наречие"],correctAnswer:2,explanation:"Имя существительное обозначает предмет и отвечает на вопросы КТО? ЧТО? Примеры: стол, кот, книга.",difficulty:"easy",points:10}]}]},lB={id:4,name:"4 класс",shortName:"4 кл.",subjects:[{id:"history4",title:"История России",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"Древняя Русь, крещение Руси",topics:[{id:"t1",title:"Древняя Русь",description:"Возникновение Древнерусского государства",theory:`<h3>Древняя Русь</h3>
          <p>Древнерусское государство возникло в IX веке (862 год).</p>
          <h4>Первые князья:</h4>
          <ul>
            <li>Рюрик (862-879) — первый князь</li>
            <li>Олег (879-912) — объединил Новгород и Киев</li>
            <li>Игорь (912-945)</li>
            <li>Ольга (945-962) — первая женщина-правитель</li>
            <li>Святослав (962-972) — воин</li>
            <li>Владимир (980-1015) — крестил Русь</li>
          </ul>`,examples:["Кто был первым князем?","Когда возникла Русь?","Кто крестил Русь?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Крещение Руси",description:"988 год — важное событие",theory:`<h3>Крещение Руси (988 год)</h3>
          <p>Князь Владимир крестил Русь в 988 году. Это важнейшее событие в истории России.</p>
          <h4>Почему это важно:</h4>
          <ul>
            <li>Русь приняла христианство</li>
            <li>Появилась письменность (кириллица)</li>
            <li>Строились храмы и монастыри</li>
            <li>Развивалась культура</li>
          </ul>
          <h4>Главный храм:</h4>
          <p>Софийский собор в Киеве (XI век)</p>`,examples:["В каком году крестили Русь?","Кто крестил Русь?","Что появилось с христианством?"],completed:!1,difficulty:"medium",estimatedTime:20}],quiz:[{id:"q1",question:"Кто крестил Русь в 988 году?",options:["Иван Грозный","Князь Владимир","Пётр I","Ярослав Мудрый"],correctAnswer:1,explanation:"Князь Владимир Святославич крестил Русь в 988 году. Это событие изменило всю историю России.",difficulty:"medium",points:15},{id:"q2",question:"В каком году возникло Древнерусское государство?",options:["800","862","988","1000"],correctAnswer:1,explanation:"Древнерусское государство возникло в 862 году, когда Рюрик стал первым князем.",difficulty:"medium",points:15}]}]},lW={id:5,name:"5 класс",shortName:"5 кл.",subjects:[{id:"bio5",title:"Биология",icon:(0,u.jsx)(lH,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Строение клетки, классификация организмов",topics:[{id:"t1",title:"Строение клетки",description:"Основные части клетки",theory:`<h3>Клетка — единица живого</h3>
          <p>Все живые организмы состоят из клеток. Клетка — наименьшая единица живого.</p>
          <h4>Основные части клетки:</h4>
          <ul>
            <li><strong>Ядро</strong> — содержит наследственную информацию (ДНК)</li>
            <li><strong>Цитоплазма</strong> — внутренняя среда клетки</li>
            <li><strong>Клеточная мембрана</strong> — защищает клетку</li>
            <li><strong>Митохондрии</strong> — "энергетические станции"</li>
            <li><strong>Рибосомы</strong> — синтез белков</li>
          </ul>
          <h4>Различия:</h4>
          <p>Растительные клетки имеют клеточную стенку и хлоропласты, животные — нет.</p>`,examples:["Какая часть клетки хранит ДНК?","Чем отличаются растительные клетки?","Что такое митохондрии?"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:'Какой органоид называют "энергетической станцией" клетки?',options:["Ядро","Митохондрия","Рибосома","Вакуоль"],correctAnswer:1,explanation:'Митохондрии вырабатывают энергию (АТФ) для клетки, поэтому их называют "энергетическими станциями".',difficulty:"medium",points:15}]},{id:"history5",title:"История Древнего мира",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Древний Египет, Греция, Рим",topics:[{id:"t1",title:"Древний Египет",description:"Цивилизация на берегах Нила",theory:`<h3>Древний Египет</h3>
          <p>Древний Египет возник около 5000 лет назад вдоль реки Нил.</p>
          <h4>Достижения египтян:</h4>
          <ul>
            <li>Пирамиды Гизы</li>
            <li>Иероглифы — письменность</li>
            <li>Папирус — бумага</li>
            <li>Календарь</li>
            <li>Мумификация</li>
          </ul>
          <h4>Фараоны:</h4>
          <p>Правители Египта. Самый известный — Тутанхамон.</p>`,examples:["Где находится Египет?","Для чего строили пирамиды?","Что такое папирус?"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Где находятся знаменитые пирамиды?",options:["В Греции","В Риме","В Египте","В Китае"],correctAnswer:2,explanation:"Пирамиды Гизы находятся в Египте, около Каира. Великая пирамида Хеопса — одно из семи чудес света.",difficulty:"easy",points:10}]}]},lX=(0,t2.default)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]),lU=(0,t2.default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]),lK={id:6,name:"6 класс",shortName:"6 кл.",subjects:[{id:"physics6",title:"Физика",icon:(0,u.jsx)(lX,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Механика, силы, движение",topics:[{id:"t1",title:"Механическое движение",description:"Что такое движение?",theory:`<h3>Механическое движение</h3>
          <p>Механическое движение — это изменение положения тела относительно других тел с течением времени.</p>
          <h4>Характеристики движения:</h4>
          <ul>
            <li><strong>Путь (S)</strong> — длина траектории, [м]</li>
            <li><strong>Время (t)</strong> — [с]</li>
            <li><strong>Скорость (v)</strong> — путь за единицу времени, [м/с]</li>
          </ul>
          <h4>Формула:</h4>
          <p>v = S / t (скорость = путь / время)</p>`,examples:["Что такое путь?","Единицы скорости?","Рассчитай скорость: 100 м за 20 с"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Силы в природе",description:"Сила тяжести, трения, упругости",theory:`<h3>Силы в природе</h3>
          <h4>Сила тяжести:</h4>
          <p>Сила, с которой Земля притягивает тело. F = mg, где g ≈ 10 м/с\xb2</p>
          <h4>Сила трения:</h4>
          <p>Препятствует движению тела. Зависит от поверхности.</p>
          <h4>Сила упругости:</h4>
          <p>Возникает при деформации. Закон Гука: F = kx</p>`,examples:["Что такое сила тяжести?","От чего зависит трение?","Рассчитай F для m=5 кг"],completed:!1,difficulty:"medium",estimatedTime:25}],quiz:[{id:"q1",question:"Какая сила препятствует движению тела?",options:["Сила тяжести","Сила трения","Сила упругости","Архимедова сила"],correctAnswer:1,explanation:"Сила трения всегда препятствует движению. Благодаря ей мы можем ходить и ездить на машинах.",difficulty:"easy",points:10}]},{id:"chem6",title:"Химия",icon:(0,u.jsx)(lU,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Периодическая таблица, химические реакции",topics:[{id:"t1",title:"Периодическая таблица",description:"Таблица Менделеева",theory:`<h3>Периодическая таблица Д.И. Менделеева</h3>
          <p>Таблица, в которой химические элементы расположены в порядке возрастания заряда ядра.</p>
          <h4>Структура:</h4>
          <ul>
            <li><strong>Периоды</strong> — горизонтальные ряды (7 периодов)</li>
            <li><strong>Группы</strong> — вертикальные столбцы (8 групп)</li>
          </ul>
          <h4>Важные элементы:</h4>
          <p>H (водород), O (кислород), C (углерод), Fe (железо), Au (золото)</p>`,examples:["Сколько периодов?","Что такое группа?","Символ кислорода?"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какой символ у кислорода?",options:["C","O","K","Ca"],correctAnswer:1,explanation:"Кислород обозначается символом O (от лат. Oxygenium). Атомный номер — 8.",difficulty:"easy",points:10}]}]},lQ={id:7,name:"7 класс",shortName:"7 кл.",subjects:[{id:"algebra7",title:"Алгебра",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Уравнения, функции, формулы",topics:[{id:"t1",title:"Линейные уравнения",description:"Решение уравнений вида ax + b = 0",theory:`<h3>Линейные уравнения</h3>
          <p>Линейное уравнение — уравнение вида ax + b = 0, где a и b — числа, x — неизвестное.</p>
          <h4>Алгоритм решения:</h4>
          <ol>
            <li>Перенеси слагаемые с x влево, без x — вправо</li>
            <li>Приведи подобные слагаемые</li>
            <li>Раздели обе части на коэффициент при x</li>
          </ol>
          <h4>Пример:</h4>
          <p>2x + 5 = 15<br/>
          2x = 15 - 5<br/>
          2x = 10<br/>
          x = 5</p>`,examples:["Реши: 3x - 7 = 8","Найди x: 5x + 10 = 0","Решите: 2(x - 3) = 10"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Функции и графики",description:"Линейная функция y = kx + b",theory:`<h3>Линейная функция</h3>
          <p>Функция вида y = kx + b называется линейной.</p>
          <h4>График:</h4>
          <p>График линейной функции — прямая линия.</p>
          <h4>Коэффициенты:</h4>
          <ul>
            <li><strong>k</strong> — угловой коэффициент (наклон прямой)</li>
            <li><strong>b</strong> — точка пересечения с осью Y</li>
          </ul>
          <h4>Частные случаи:</h4>
          <p>y = kx (прямая пропорциональность) — проходит через начало координат</p>`,examples:["Построй график y = 2x + 1","Найди k и b для y = -3x + 5","Что такое угловой коэффициент?"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Решите уравнение: 2x + 5 = 15",options:["x = 5","x = 10","x = 7","x = 3"],correctAnswer:0,explanation:"2x + 5 = 15 → 2x = 10 → x = 5. Переносим 5 вправо и делим на 2.",difficulty:"medium",points:15}]},{id:"geometry7",title:"Геометрия",icon:(0,u.jsx)(lg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Треугольники, теоремы, площади",topics:[{id:"t1",title:"Треугольники",description:"Виды треугольников и их свойства",theory:`<h3>Треугольник</h3>
          <p>Треугольник — фигура, состоящая из трёх точек, не лежащих на одной прямой, и трёх отрезков, их соединяющих.</p>
          <h4>Виды треугольников:</h4>
          <ul>
            <li><strong>Остроугольный</strong> — все углы острые (< 90\xb0)</li>
            <li><strong>Прямоугольный</strong> — один угол 90\xb0</li>
            <li><strong>Тупоугольный</strong> — один угол > 90\xb0</li>
          </ul>
          <h4>По сторонам:</h4>
          <ul>
            <li>Равносторонний — все стороны равны</li>
            <li>Равнобедренный — две стороны равны</li>
            <li>Разносторонний — все стороны разные</li>
          </ul>`,examples:["Определи вид треугольника","Найди периметр","Сумма углов треугольника?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Теорема Пифагора",description:"a² + b² = c²",theory:`<h3>Теорема Пифагора</h3>
          <p>В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов.</p>
          <h4>Формула:</h4>
          <p>a\xb2 + b\xb2 = c\xb2</p>
          <p>где a, b — катеты, c — гипотенуза</p>
          <h4>Пример:</h4>
          <p>Катеты 3 и 4: c\xb2 = 9 + 16 = 25, c = 5</p>
          <p>Это "египетский треугольник" (3, 4, 5)</p>`,examples:["Найди гипотенузу: a=6, b=8","Проверь: 5, 12, 13","Катет = ? если a=5, c=13"],completed:!1,difficulty:"medium",estimatedTime:25}],quiz:[{id:"q1",question:"Чему равна гипотенуза прямоугольного треугольника с катетами 3 и 4?",options:["5","6","7","8"],correctAnswer:0,explanation:'По теореме Пифагора: c² = 3² + 4² = 9 + 16 = 25, значит c = 5. Это знаменитый "египетский треугольник"!',difficulty:"medium",points:15}]}]},lY=(0,t2.default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),lZ=(0,t2.default)("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]),lJ=(0,t2.default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),lG=(0,t2.default)("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]),l0={id:8,name:"8 класс",shortName:"8 кл.",subjects:[{id:"algebra8",title:"Алгебра",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Квадратные уравнения, неравенства, функции",topics:[{id:"t1",title:"Квадратные уравнения",description:"Решение уравнений вида ax² + bx + c = 0",theory:`<h3>Квадратные уравнения</h3>
          <p>Квадратное уравнение — уравнение вида ax\xb2 + bx + c = 0, где a ≠ 0.</p>
          <h4>Дискриминант:</h4>
          <p>D = b\xb2 - 4ac</p>
          <ul>
            <li>D > 0 — два корня</li>
            <li>D = 0 — один корень</li>
            <li>D < 0 — нет корней</li>
          </ul>
          <h4>Формула корней:</h4>
          <p>x = (-b \xb1 √D) / 2a</p>
          <h4>Теорема Виета:</h4>
          <p>x₁ + x₂ = -b/a, x₁ \xb7 x₂ = c/a</p>`,examples:["Реши: x² - 5x + 6 = 0","Найди D для 2x² + 3x - 5","Сколько корней?"],completed:!1,difficulty:"hard",estimatedTime:35},{id:"t2",title:"Квадратные неравенства",description:"Решение неравенств вида ax² + bx + c > 0",theory:`<h3>Квадратные неравенства</h3>
          <p>Неравенства вида ax\xb2 + bx + c > 0, ax\xb2 + bx + c < 0</p>
          <h4>Алгоритм решения:</h4>
          <ol>
            <li>Найти корни квадратного уравнения</li>
            <li>Отметить корни на числовой прямой</li>
            <li>Определить знаки на интервалах</li>
            <li>Выбрать нужные интервалы</li>
          </ol>
          <h4>Правило:</h4>
          <ul>
            <li>Если a > 0, то ветви параболы направлены вверх</li>
            <li>Если a < 0, то ветви параболы направлены вниз</li>
          </ul>
          <h4>Пример:</h4>
          <p>x\xb2 - 4 > 0 → x < -2 или x > 2</p>`,examples:["Реши: x² - 9 > 0","Реши: x² + 2x - 3 < 0","Метод интервалов"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Квадратичная функция",description:"График функции y = ax² + bx + c",theory:`<h3>Квадратичная функция</h3>
          <p>y = ax\xb2 + bx + c — графиком является парабола</p>
          <h4>Свойства:</h4>
          <ul>
            <li>Вершина: x₀ = -b/(2a), y₀ = f(x₀)</li>
            <li>Ось симметрии: x = -b/(2a)</li>
            <li>a > 0 — ветви вверх, минимум в вершине</li>
            <li>a < 0 — ветви вниз, максимум в вершине</li>
          </ul>
          <h4>Построение графика:</h4>
          <ol>
            <li>Найти вершину</li>
            <li>Найти точки пересечения с осями</li>
            <li>Построить симметричные точки</li>
          </ol>`,examples:["Найди вершину параболы","Построй график","Найди нули функции"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t4",title:"Рациональные уравнения",description:"Уравнения с дробями",theory:`<h3>Рациональные уравнения</h3>
          <p>Уравнения, содержащие дроби с переменной.</p>
          <h4>Алгоритм решения:</h4>
          <ol>
            <li>Найти ОДЗ (знаменатель ≠ 0)</li>
            <li>Привести к общему знаменателю</li>
            <li>Решить полученное уравнение</li>
            <li>Проверить корни по ОДЗ</li>
          </ol>
          <h4>Пример:</h4>
          <p>(x+2)/(x-1) = 3</p>
          <p>ОДЗ: x ≠ 1</p>
          <p>x + 2 = 3(x - 1)</p>
          <p>x = 2.5</p>`,examples:["Реши дробное уравнение","Найди ОДЗ","Проверь корни"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Решите уравнение: x² - 5x + 6 = 0",options:["x = 2 и x = 3","x = 1 и x = 6","x = -2 и x = -3","x = 2 и x = -3"],correctAnswer:0,explanation:"По теореме Виета: x₁ + x₂ = 5, x₁ · x₂ = 6. Ответ: x₁ = 2, x₂ = 3. Проверка: 2² - 5·2 + 6 = 4 - 10 + 6 = 0 ✓",difficulty:"medium",points:15},{id:"q2",question:"Чему равен дискриминант уравнения x² - 4x + 4 = 0?",options:["0","4","8","-4"],correctAnswer:0,explanation:"D = b² - 4ac = (-4)² - 4·1·4 = 16 - 16 = 0. Уравнение имеет один корень x = 2.",difficulty:"easy",points:10},{id:"q3",question:"Куда направлены ветви параболы y = -2x² + 4x - 1?",options:["Вверх","Вниз","Вправо","Влево"],correctAnswer:1,explanation:"Так как a = -2 < 0, ветви параболы направлены вниз.",difficulty:"easy",points:10}]},{id:"geometry8",title:"Геометрия",icon:(0,u.jsx)(lg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Подобные треугольники, окружность",topics:[{id:"t1",title:"Подобные треугольники",description:"Признаки подобия треугольников",theory:`<h3>Подобные треугольники</h3>
          <p>Треугольники подобны, если их углы равны, а стороны пропорциональны.</p>
          <h4>Признаки подобия:</h4>
          <ul>
            <li><strong>I признак:</strong> по двум углам</li>
            <li><strong>II признак:</strong> по двум пропорциональным сторонам и углу между ними</li>
            <li><strong>III признак:</strong> по трём пропорциональным сторонам</li>
          </ul>
          <h4>Коэффициент подобия:</h4>
          <p>k = A₁B₁/AB = B₁C₁/BC = A₁C₁/AC</p>
          <h4>Отношение площадей:</h4>
          <p>S₁/S₂ = k\xb2</p>`,examples:["Докажи подобие","Найди коэффициент подобия","Отношение площадей"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Теорема Пифагора",description:"a² + b² = c²",theory:`<h3>Теорема Пифагора</h3>
          <p>В прямоугольном треугольнике квадрат гипотенузы равен сумме квадратов катетов.</p>
          <h4>Формула:</h4>
          <p>c\xb2 = a\xb2 + b\xb2</p>
          <h4>Примеры:</h4>
          <ul>
            <li>Египетский треугольник: 3, 4, 5</li>
            <li>Катеты 6 и 8 → гипотенуза 10</li>
          </ul>
          <h4>Обратная теорема:</h4>
          <p>Если c\xb2 = a\xb2 + b\xb2, то треугольник прямоугольный</p>
          <h4>Применение:</h4>
          <p>Нахождение расстояний, высот, диагоналей</p>`,examples:["Найди гипотенузу","Найди катет","Докажи прямоугольность"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Окружность",description:"Касательная, хорды, дуги",theory:`<h3>Окружность</h3>
          <p>Окружность — множество точек, равноудалённых от центра.</p>
          <h4>Элементы:</h4>
          <ul>
            <li>Радиус R — расстояние от центра до любой точки окружности</li>
            <li>Диаметр D = 2R</li>
            <li>Хорда — отрезок, соединяющий две точки окружности</li>
            <li>Касательная — прямая, имеющая одну общую точку</li>
          </ul>
          <h4>Свойства:</h4>
          <ul>
            <li>Касательная перпендикулярна радиусу в точке касания</li>
            <li>Диаметр, перпендикулярный хорде, делит её пополам</li>
          </ul>
          <h4>Длина окружности:</h4>
          <p>C = 2πR</p>`,examples:["Найди длину окружности","Свойства касательной","Хорды и дуги"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t4",title:"Вписанные и описанные окружности",description:"Окружности и треугольники",theory:`<h3>Вписанная окружность</h3>
          <p>Окружность, касающаяся всех сторон треугольника.</p>
          <h4>Центр:</h4>
          <p>Точка пересечения биссектрис</p>
          <h4>Радиус:</h4>
          <p>r = S/p, где p — полупериметр</p>
          <h3>Описанная окружность</h3>
          <p>Окружность, проходящая через все вершины треугольника.</p>
          <h4>Центр:</h4>
          <p>Точка пересечения серединных перпендикуляров</p>
          <h4>Радиус:</h4>
          <p>R = abc/(4S)</p>`,examples:["Найди центр вписанной","Радиус описанной","Вневписанная окружность"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Чему равна гипотенуза прямоугольного треугольника с катетами 6 и 8?",options:["10","12","14","100"],correctAnswer:0,explanation:"По теореме Пифагора: c² = 6² + 8² = 36 + 64 = 100, значит c = 10.",difficulty:"easy",points:10},{id:"q2",question:"Как называется отрезок, соединяющий две точки окружности?",options:["Радиус","Диаметр","Хорда","Касательная"],correctAnswer:2,explanation:"Хорда — отрезок, соединяющий две точки окружности. Диаметр — хорда, проходящая через центр.",difficulty:"easy",points:10},{id:"q3",question:"Где находится центр вписанной окружности треугольника?",options:["В точке пересечения медиан","В точке пересечения биссектрис","В точке пересечения высот","В центре тяжести"],correctAnswer:1,explanation:"Центр вписанной окружности — точка пересечения биссектрис треугольника.",difficulty:"medium",points:15}]},{id:"russian8",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Синтаксис, пунктуация, речь",topics:[{id:"t1",title:"Синтаксис простого предложения",description:"Строение предложений",theory:`<h3>Синтаксис</h3>
          <p>Синтаксис — раздел языкознания, изучающий строение предложений.</p>
          <h4>Члены предложения:</h4>
          <ul>
            <li><strong>Подлежащее</strong> — о ком/чём говорится (кто? что?)</li>
            <li><strong>Сказуемое</strong> — что делает предмет? (глагол)</li>
            <li><strong>Дополнение</strong> — косвенные падежи (кому? чему?)</li>
            <li><strong>Определение</strong> — какой? чей? (прилагательное)</li>
            <li><strong>Обстоятельство</strong> — где? когда? как? (наречие)</li>
          </ul>
          <h4>Виды предложений:</h4>
          <ul>
            <li>По цели высказывания: повествовательные, вопросительные, побудительные</li>
            <li>По интонации: невосклицательные, восклицательные</li>
          </ul>`,examples:["Разбери по членам","Определи вид предложения","Синтаксический разбор"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Обособленные члены предложения",description:"Обособление определений, приложений, обстоятельств",theory:`<h3>Обособление</h3>
          <p>Выделение членов предложения интонацией и запятыми.</p>
          <h4>Обособляются:</h4>
          <ul>
            <li><strong>Причастный оборот</strong> после определяемого слова: Книга, прочитанная мной, интересна</li>
            <li><strong>Деепричастный оборот</strong>: Читая книгу, я делал пометки</li>
            <li><strong>Приложения</strong> с союзом как (если имеют причинное значение)</li>
            <li><strong>Уточняющие члены</strong>: Летом, в июле, мы поедем на дачу</li>
          </ul>
          <h4>Не обособляется:</h4>
          <p>Причастный оборот перед определяемым словом</p>`,examples:["Найди обособленный член","Поставь запятые","Причастный оборот"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Прямая и косвенная речь",description:"Передача чужой речи",theory:`<h3>Прямая речь</h3>
          <p>Точная передача чужих слов: Пушкин писал: "Я помню чудное мгновенье".</p>
          <h4>Оформление:</h4>
          <p>А: "П". "П", — а. "П, — а, — п".</p>
          <h3>Косвенная речь</h3>
          <p>Передача чужих слов в форме придаточного предложения.</p>
          <h4>Замена:</h4>
          <ul>
            <li>Я → он, мы → они</li>
            <li>Этот → тот</li>
            <li>Здесь → там</li>
            <li>Сейчас → тогда</li>
          </ul>
          <h4>Пример:</h4>
          <p>Он сказал, что придёт завтра.</p>`,examples:["Прямая → косвенная","Расставь знаки","Диалог"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:'Какой член предложения отвечает на вопрос "какой?"',options:["Подлежащее","Сказуемое","Определение","Обстоятельство"],correctAnswer:2,explanation:"Определение отвечает на вопросы какой? чей? и обозначает признак предмета.",difficulty:"easy",points:10},{id:"q2",question:"Когда причастный оборот обособляется?",options:["Всегда","Никогда","После определяемого слова","Перед определяемым словом"],correctAnswer:2,explanation:"Причастный оборот обособляется, если стоит после определяемого слова. Перед определяемым словом — не обособляется.",difficulty:"medium",points:15}]},{id:"literature8",title:"Литература",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Русская и зарубежная классика",topics:[{id:"t1",title:"А.С. Пушкин",description:"Капитанская дочка",theory:`<h3>А.С. Пушкин (1799-1837)</h3>
          <h4>Повесть "Капитанская дочка" (1836):</h4>
          <ul>
            <li>Тема: пугачёвское восстание 1773-1775 гг.</li>
            <li>Жанр: историческая повесть</li>
          </ul>
          <h4>Главные герои:</h4>
          <ul>
            <li><strong>Пётр Гринёв</strong> — молодой дворянин, главный герой</li>
            <li><strong>Маша Миронова</strong> — дочь коменданта, "капитанская дочка"</li>
            <li><strong>Емельян Пугачёв</strong> — предводитель восстания</li>
            <li><strong>Швабрин</strong> — антигерой, предатель</li>
          </ul>
          <h4>Тема чести:</h4>
          <p>"Береги честь смолоду" — эпиграф повести</p>`,examples:["Образ Гринёва","Образ Пугачёва","Тема чести"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"М.Ю. Лермонтов",description:"Мцыри, лирика",theory:`<h3>М.Ю. Лермонтов (1814-1841)</h3>
          <h4>Поэма "Мцыри" (1840):</h4>
          <ul>
            <li>Жанр: романтическая поэма</li>
            <li>Тема: жажда свободы, одиночество</li>
          </ul>
          <h4>Образ Мцыри:</h4>
          <ul>
            <li>Горец, пленённый в детстве</li>
            <li>Мечта о свободе и родине</li>
            <li>Три дня на воле — жизнь вне стен монастыря</li>
          </ul>
          <h4>Смысл финала:</h4>
          <p>Гибель, но и духовная победа — он был свободен</p>
          <h4>Известные стихи:</h4>
          <p>"Парус", "Тучи", "Смерть поэта"</p>`,examples:["Образ Мцыри","Романтизм","Лирика Лермонтова"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Н.В. Гоголь",description:"Ревизор",theory:`<h3>Н.В. Гоголь (1809-1852)</h3>
          <h4>Комедия "Ревизор" (1836):</h4>
          <ul>
            <li>Жанр: сатирическая комедия</li>
            <li>Тема: чиновничество, коррупция</li>
          </ul>
          <h4>Главные герои:</h4>
          <ul>
            <li><strong>Хлестаков</strong> — мелкий чиновник, принятый за ревизора</li>
            <li><strong>Городничий</strong> — глава города, взяточник</li>
            <li><strong>Земляника, Ляпкин-Тяпкин</strong> — коррумпированные чиновники</li>
          </ul>
          <h4>Немая сцена:</h4>
          <p>Финал пьесы: известие о настоящем ревизоре</p>
          <h4>Сатира:</h4>
          <p>Высмеивание пороков общества</p>`,examples:["Образ Хлестакова","Сатира в пьесе","Немая сцена"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:'Как звали главного героя повести "Капитанская дочка"?',options:["Евгений Онегин","Пётр Гринёв","Григорий Печорин","Андрей Болконский"],correctAnswer:1,explanation:'Пётр Андреевич Гринёв — главный герой повести А.С. Пушкина "Капитанская дочка".',difficulty:"easy",points:10},{id:"q2",question:'Кто автор поэмы "Мцыри"?',options:["Пушкин","Лермонтов","Гоголь","Тургенев"],correctAnswer:1,explanation:'"Мцыри" — романтическая поэма М.Ю. Лермонтова, написанная в 1840 году.',difficulty:"easy",points:10},{id:"q3",question:'В каком произведении есть "немая сцена"?',options:["Капитанская дочка","Мцыри","Ревизор","Евгений Онегин"],correctAnswer:2,explanation:'Немая сцена — финал комедии Н.В. Гоголя "Ревизор", где все застывают при известии о настоящем ревизоре.',difficulty:"medium",points:15}]},{id:"physics8",title:"Физика",icon:(0,u.jsx)(lX,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Электричество, тепловые явления",topics:[{id:"t1",title:"Электрический ток",description:"Закон Ома, мощность",theory:`<h3>Электрический ток</h3>
          <p>Электрический ток — направленное движение заряженных частиц.</p>
          <h4>Закон Ома:</h4>
          <p>I = U / R</p>
          <p>где I — сила тока (А), U — напряжение (В), R — сопротивление (Ом)</p>
          <h4>Сопротивление:</h4>
          <p>R = ρ\xb7l/S (удельное сопротивление \xd7 длина / площадь сечения)</p>
          <h4>Мощность:</h4>
          <p>P = U\xb7I = I\xb2R = U\xb2/R (Вт)</p>
          <h4>Работа тока:</h4>
          <p>A = U\xb7I\xb7t (Дж)</p>`,examples:["Найди I, если U=12В, R=4Ом","Вычисли мощность","Работа электрического тока"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Последовательное и параллельное соединение",description:"Соединение проводников",theory:`<h3>Последовательное соединение</h3>
          <ul>
            <li>Сила тока: I = I₁ = I₂</li>
            <li>Напряжение: U = U₁ + U₂</li>
            <li>Сопротивление: R = R₁ + R₂</li>
          </ul>
          <h3>Параллельное соединение</h3>
          <ul>
            <li>Сила тока: I = I₁ + I₂</li>
            <li>Напряжение: U = U₁ = U₂</li>
            <li>Сопротивление: 1/R = 1/R₁ + 1/R₂</li>
          </ul>
          <h4>Применение:</h4>
          <p>Гирлянды — последовательное, бытовые приборы — параллельное</p>`,examples:["Найди общее сопротивление","Смешанное соединение","Расчёт цепи"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Тепловые явления",description:"Теплопередача, количество теплоты",theory:`<h3>Тепловые явления</h3>
          <h4>Виды теплопередачи:</h4>
          <ul>
            <li><strong>Теплопроводность</strong> — через вещество</li>
            <li><strong>Конвекция</strong> — потоками жидкости или газа</li>
            <li><strong>Излучение</strong> — электромагнитные волны</li>
          </ul>
          <h4>Количество теплоты:</h4>
          <p>Q = cm(t₂ - t₁)</p>
          <p>c — удельная теплоёмкость, Дж/(кг\xb7\xb0C)</p>
          <h4>Сгорание топлива:</h4>
          <p>Q = qm, где q — удельная теплота сгорания</p>`,examples:["Вычисли количество теплоты","Теплопроводность веществ","Удельная теплоёмкость"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t4",title:"Агрегатные состояния вещества",description:"Плавление, испарение, кипение",theory:`<h3>Переходы вещества</h3>
          <h4>Плавление:</h4>
          <p>Переход из твёрдого в жидкое состояние</p>
          <p>Q = λm, λ — удельная теплота плавления</p>
          <h4>Кристаллизация:</h4>
          <p>Переход из жидкого в твёрдое (отдача тепла)</p>
          <h4>Испарение и кипение:</h4>
          <p>Переход из жидкого в газообразное</p>
          <p>Q = Lm, L — удельная теплота парообразования</p>
          <h4>Температура плавления:</h4>
          <p>Лёд: 0\xb0C, железо: 1538\xb0C, вода: 100\xb0C (кипение)</p>`,examples:["Найди Q для плавления","Температура плавления","Испарение и конденсация"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"По закону Ома, чему равна сила тока при U=12В и R=4Ом?",options:["2 А","3 А","4 А","48 А"],correctAnswer:1,explanation:"По закону Ома: I = U/R = 12/4 = 3 А. Напряжение делим на сопротивление.",difficulty:"medium",points:15},{id:"q2",question:"Каково общее сопротивление двух резисторов по 4 Ом, соединённых последовательно?",options:["2 Ом","4 Ом","8 Ом","16 Ом"],correctAnswer:2,explanation:"При последовательном соединении R = R₁ + R₂ = 4 + 4 = 8 Ом.",difficulty:"easy",points:10},{id:"q3",question:"При каком процессе вода переходит из жидкого в газообразное состояние?",options:["Плавление","Кристаллизация","Испарение","Конденсация"],correctAnswer:2,explanation:"Испарение — переход из жидкого состояния в газообразное. Кипение — испарение по всему объёму жидкости.",difficulty:"easy",points:10}]},{id:"chemistry8",title:"Химия",icon:(0,u.jsx)(lU,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Химические реакции, классы веществ",topics:[{id:"t1",title:"Химические реакции",description:"Типы химических реакций",theory:`<h3>Химические реакции</h3>
          <p>Превращение одних веществ в другие.</p>
          <h4>Типы реакций:</h4>
          <ul>
            <li><strong>Соединения:</strong> A + B = AB (2H₂ + O₂ = 2H₂O)</li>
            <li><strong>Разложения:</strong> AB = A + B (2H₂O = 2H₂ + O₂)</li>
            <li><strong>Замещения:</strong> A + BC = AC + B (Zn + 2HCl = ZnCl₂ + H₂)</li>
            <li><strong>Обмена:</strong> AB + CD = AD + CB</li>
          </ul>
          <h4>Признаки реакций:</h4>
          <ul>
            <li>Выделение газа</li>
            <li>Образование осадка</li>
            <li>Изменение цвета</li>
            <li>Выделение/поглощение тепла</li>
          </ul>`,examples:["Определи тип реакции","Уравняй реакцию","Признаки реакций"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Кислоты, основания, соли",description:"Классификация неорганических веществ",theory:`<h3>Кислоты</h3>
          <p>Вещества, состоящие из атомов водорода и кислотного остатка.</p>
          <p>Примеры: HCl, H₂SO₄, HNO₃</p>
          <h3>Основания (щёлочи)</h3>
          <p>Вещества, состоящие из атомов металла и гидроксогрупп OH.</p>
          <p>Примеры: NaOH, KOH, Ca(OH)₂</p>
          <h3>Соли</h3>
          <p>Вещества, состоящие из атомов металла и кислотного остатка.</p>
          <p>Примеры: NaCl, CaCO₃, K₂SO₄</p>
          <h4>Реакция нейтрализации:</h4>
          <p>Кислота + Основание = Соль + Вода</p>`,examples:["Определи класс вещества","Реакция нейтрализации","Номенклатура солей"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Периодическая таблица",description:"Строение периодической системы",theory:`<h3>Периодическая система Д.И. Менделеева</h3>
          <h4>Структура:</h4>
          <ul>
            <li><strong>Периоды</strong> — горизонтальные ряды (7 периодов)</li>
            <li><strong>Группы</strong> — вертикальные столбцы (8 групп)</li>
          </ul>
          <h4>Закономерности:</h4>
          <ul>
            <li>В периоде: заряд ядда ↑, металлические свойства ↓</li>
            <li>В группе: заряд ядра ↓, металлические свойства ↑</li>
          </ul>
          <h4>Группы элементов:</h4>
          <ul>
            <li>I группа — щелочные металлы (Li, Na, K)</li>
            <li>VII группа — галогены (F, Cl, Br, I)</li>
            <li>VIII группа — инертные газы (He, Ne, Ar)</li>
          </ul>`,examples:["Свойства элементов","Периоды и группы","Металлы и неметаллы"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какой тип реакции: 2H₂ + O₂ = 2H₂O?",options:["Разложения","Соединения","Замещения","Обмена"],correctAnswer:1,explanation:"Реакция соединения: из двух веществ (H₂ и O₂) образуется одно (H₂O).",difficulty:"easy",points:10},{id:"q2",question:"Какая формула у соляной кислоты?",options:["H₂SO₄","HNO₃","HCl","H₃PO₄"],correctAnswer:2,explanation:"HCl — соляная кислота (хлороводородная). H₂SO₄ — серная, HNO₃ — азотная, H₃PO₄ — фосфорная.",difficulty:"easy",points:10}]},{id:"biology8",title:"Биология",icon:(0,u.jsx)(lH,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Организм человека, экология",topics:[{id:"t1",title:"Организм человека",description:"Органы и системы органов",theory:`<h3>Организм человека</h3>
          <h4>Системы органов:</h4>
          <ul>
            <li><strong>Опорно-двигательная</strong> — скелет, мышцы</li>
            <li><strong>Кровеносная</strong> — сердце, сосуды</li>
            <li><strong>Дыхательная</strong> — лёгкие, бронхи</li>
            <li><strong>Пищеварительная</strong> — желудок, кишечник</li>
            <li><strong>Нервная</strong> — головной и спинной мозг</li>
            <li><strong>Выделительная</strong> — почки</li>
          </ul>
          <h4>Внутренняя среда:</h4>
          <p>Кровь, лимфа, тканевая жидкость</p>`,examples:["Строение сердца","Пищеварение","Нервная система"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Кровь и кровообращение",description:"Состав крови, работа сердца",theory:`<h3>Кровь</h3>
          <h4>Состав:</h4>
          <ul>
            <li><strong>Эритроциты</strong> — красные клетки, переносят кислород</li>
            <li><strong>Лейкоциты</strong> — белые клетки, иммунитет</li>
            <li><strong>Тромбоциты</strong> — свёртывание крови</li>
            <li><strong>Плазма</strong> — жидкая часть крови</li>
          </ul>
          <h4>Сердце:</h4>
          <ul>
            <li>4 камеры: 2 предсердия, 2 желудочка</li>
            <li>Большой и малый круги кровообращения</li>
          </ul>
          <h4>Группы крови:</h4>
          <p>I (0), II (A), III (B), IV (AB)</p>`,examples:["Группы крови","Круги кровообращения","Иммунитет"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Обмен веществ",description:"Пластический и энергетический обмен",theory:`<h3>Обмен веществ</h3>
          <h4>Пластический обмен:</h4>
          <p>Синтез веществ, рост организма</p>
          <h4>Энергетический обмен:</h4>
          <p>Расщепление веществ с выделением энергии</p>
          <h4>Витамины:</h4>
          <ul>
            <li>A — зрение, рост (морковь, печень)</li>
            <li>C — иммунитет (цитрусовые)</li>
            <li>D — кости (рыбий жир, солнце)</li>
            <li>B₁ — нервная система</li>
          </ul>
          <h4>Заболевания:</h4>
          <p>Авитаминоз, гиповитаминоз</p>`,examples:["Витамины","Обмен веществ","Правильное питание"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какие клетки крови переносят кислород?",options:["Лейкоциты","Эритроциты","Тромбоциты","Плазма"],correctAnswer:1,explanation:"Эритроциты (красные кровяные клетки) содержат гемоглобин, который связывает и переносит кислород.",difficulty:"easy",points:10},{id:"q2",question:"Сколько камер в сердце человека?",options:["2","3","4","6"],correctAnswer:2,explanation:"Сердце человека имеет 4 камеры: 2 предсердия и 2 желудочка.",difficulty:"easy",points:10}]},{id:"history8",title:"История",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"История России XVI-XVII веков",topics:[{id:"t1",title:"Иван Грозный",description:"Первый русский царь",theory:`<h3>Иван IV Грозный (1530-1584)</h3>
          <h4>Реформы:</h4>
          <ul>
            <li>Создание стрелецкого войска</li>
            <li>Судебник 1550 года</li>
            <li>Земские соборы</li>
            <li>Опричнина (1565-1572)</li>
          </ul>
          <h4>Ливонская война (1558-1583):</h4>
          <p>Борьба за выход к Балтийскому морю. Поражение России.</p>
          <h4>Присоединение земель:</h4>
          <ul>
            <li>Казанское ханство (1552)</li>
            <li>Астраханское ханство (1556)</li>
            <li>Начало освоения Сибири (Ермак)</li>
          </ul>`,examples:["Реформы Ивана IV","Опричнина","Присоединение Казани"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"Смутное время",description:"1598-1613 годы",theory:`<h3>Смутное время (1598-1613)</h3>
          <h4>Причины:</h4>
          <ul>
            <li>Пресечение династии Рюриковичей</li>
            <li>Голод 1601-1603 годов</li>
            <li>Социальные противоречия</li>
          </ul>
          <h4>События:</h4>
          <ul>
            <li>Лжедмитрий I (1605-1606)</li>
            <li>Восстание Болотникова</li>
            <li>Польская интервенция</li>
            <li>Первое и второе ополчение</li>
          </ul>
          <h4>1612 год:</h4>
          <p>Освобождение Москвы ополчением Минина и Пожарского</p>`,examples:["Причины Смуты","Лжедмитрий","Ополчение 1612 года"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t3",title:"Первые Романовы",description:"XVII век",theory:`<h3>Династия Романовых (с 1613)</h3>
          <h4>Михаил Фёдорович (1613-1645):</h4>
          <ul>
            <li>Первый царь из династии Романовых</li>
            <li>Восстановление государства</li>
          </ul>
          <h4>Алексей Михайлович (1645-1676):</h4>
          <ul>
            <li>Соборное уложение 1649 — закрепощение крестьян</li>
            <li>Церковный раскол (Никон, Аввакум)</li>
            <li>Восстание Степана Разина (1670-1671)</li>
          </ul>
          <h4>Внешняя политика:</h4>
          <ul>
            <li>Присоединение Левобережной Украины (1654)</li>
            <li>Выход к Балтийскому морю не получен</li>
          </ul>`,examples:["Соборное уложение","Церковный раскол","Восстание Разина"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Кто был первым русским царём?",options:["Иван III","Иван IV Грозный","Пётр I","Алексей Михайлович"],correctAnswer:1,explanation:"Иван IV Грозный принял титул царя в 1547 году. До этого правители назывались великими князьями.",difficulty:"easy",points:10},{id:"q2",question:"Когда было освобождение Москвы от поляков?",options:["1598","1612","1613","1645"],correctAnswer:1,explanation:"В 1612 году народное ополчение под руководством Минина и Пожарского освободило Москву от польских захватчиков.",difficulty:"easy",points:10},{id:"q3",question:"Какое событие произошло в 1654 году?",options:["Принятие Соборного уложения","Церковный раскол","Присоединение Украины к России","Начало Смуты"],correctAnswer:2,explanation:"В 1654 году Левобережная Украина вошла в состав России по решению Переяславской рады.",difficulty:"medium",points:15}]},{id:"social8",title:"Обществознание",icon:(0,u.jsx)(lY,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Общество, человек, деятельность",topics:[{id:"t1",title:"Общество",description:"Понятие общества",theory:`<h3>Общество</h3>
          <p>Общество — совокупность людей, объединённых исторически сложившимися формами взаимодействия.</p>
          <h4>Сферы общества:</h4>
          <ul>
            <li><strong>Экономическая</strong> — производство, обмен, потребление</li>
            <li><strong>Политическая</strong> — государство, партии, власть</li>
            <li><strong>Социальная</strong> — классы, слои, семья</li>
            <li><strong>Духовная</strong> — культура, наука, религия</li>
          </ul>
          <h4>Функции общества:</h4>
          <ul>
            <li>Воспроизводство населения</li>
            <li>Социализация</li>
            <li>Регуляция поведения</li>
          </ul>`,examples:["Сферы общества","Функции","Типы обществ"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Человек и его деятельность",description:"Личность, социализация",theory:`<h3>Человек</h3>
          <h4>Человек как биосоциальное существо:</h4>
          <ul>
            <li>Биологическое — инстинкты, потребности</li>
            <li>Социальное — сознание, речь, труд</li>
          </ul>
          <h4>Индивид, индивидуальность, личность:</h4>
          <ul>
            <li><strong>Индивид</strong> — отдельный представитель человечества</li>
            <li><strong>Индивидуальность</strong> — неповторимые черты</li>
            <li><strong>Личность</strong> — человек с устойчивыми качествами</li>
          </ul>
          <h4>Социализация:</h4>
          <p>Процесс становления личности (семья, школа, общество)</p>`,examples:["Индивид и личность","Социализация","Потребности человека"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Познание мира",description:"Чувственное и рациональное познание",theory:`<h3>Познание</h3>
          <p>Познание — процесс получения знаний о мире.</p>
          <h4>Виды познания:</h4>
          <ul>
            <li><strong>Чувственное</strong> — ощущения, восприятие, представление</li>
            <li><strong>Рациональное</strong> — понятие, суждение, умозаключение</li>
          </ul>
          <h4>Истина:</h4>
          <ul>
            <li><strong>Абсолютная</strong> — полное, исчерпывающее знание</li>
            <li><strong>Относительная</strong> — неполное, ограниченное знание</li>
          </ul>
          <h4>Критерии истины:</h4>
          <p>Практика, логика, наблюдение</p>`,examples:["Виды познания","Истина","Научное познание"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какая сфера общества связана с властью и государством?",options:["Экономическая","Политическая","Социальная","Духовная"],correctAnswer:1,explanation:"Политическая сфера — это отношения по поводу власти. Сюда входят государство, партии, выборы.",difficulty:"easy",points:10},{id:"q2",question:"Что такое социализация?",options:["Рождение человека","Процесс становления личности","Старение","Работа"],correctAnswer:1,explanation:"Социализация — процесс усвоения человеком социальных норм и ценностей, становление личности.",difficulty:"easy",points:10}]},{id:"geography8",title:"География",icon:(0,u.jsx)(lZ,{className:"w-5 h-5"}),color:"text-teal-400",gradient:"from-teal-500 to-cyan-500",description:"География России",topics:[{id:"t1",title:"Географическое положение России",description:"Особенности положения страны",theory:`<h3>Географическое положение России</h3>
          <h4>Площадь:</h4>
          <p>17.1 млн км\xb2 — первое место в мире</p>
          <h4>Границы:</h4>
          <ul>
            <li>Сухопутные: 14 стран-соседей</li>
            <li>Морские: 12 морей</li>
            <li>Омывается 3 океанами: Тихий, Атлантический, Северный Ледовитый</li>
          </ul>
          <h4>Крайние точки:</h4>
          <ul>
            <li>Северная — м. Челюскин</li>
            <li>Южная — г. Базардюзю</li>
            <li>Западная — Балтийская коса</li>
            <li>Восточная — м. Дежнёва</li>
          </ul>`,examples:["Соседи России","Моря России","Крайние точки"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Рельеф России",description:"Равнины и горы",theory:`<h3>Рельеф России</h3>
          <h4>Равнины:</h4>
          <ul>
            <li>Восточно-Европейская (Русская) равнина</li>
            <li>Западно-Сибирская равнина</li>
            <li>Среднесибирское плоскогорье</li>
          </ul>
          <h4>Горы:</h4>
          <ul>
            <li>Кавказ — высшая точка г. Эльбрус (5642 м)</li>
            <li>Урал — граница Европы и Азии</li>
            <li>Алтай, Саяны</li>
            <li>Верхоянский хребет</li>
          </ul>
          <h4>Полезные ископаемые:</h4>
          <p>Нефть, газ, уголь, руды металлов</p>`,examples:["Равнины России","Горы России","Полезные ископаемые"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Климат России",description:"Климатические пояса",theory:`<h3>Климат России</h3>
          <h4>Климатообразующие факторы:</h4>
          <ul>
            <li>Географическая широта</li>
            <li>Подстилающая поверхность</li>
            <li>Циркуляция атмосферы</li>
          </ul>
          <h4>Климатические пояса:</h4>
          <ul>
            <li>Арктический</li>
            <li>Субарктический</li>
            <li>Умеренный (основной)</li>
          </ul>
          <h4>Типы климата:</h4>
          <ul>
            <li>Умеренно-континентальный</li>
            <li>Континентальный</li>
            <li>Резко континентальный</li>
            <li>Муссонный</li>
          </ul>`,examples:["Климат России","Зима и лето","Осадки"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какова площадь России?",options:["10.5 млн км²","14.2 млн км²","17.1 млн км²","22.4 млн км²"],correctAnswer:2,explanation:"Площадь России — 17.1 млн км². Это первое место в мире по площади территории.",difficulty:"easy",points:10},{id:"q2",question:"Какая гора является высшей точкой России?",options:["Казбек","Эльбрус","Белуха","Народная"],correctAnswer:1,explanation:"Эльбрус (5642 м) — высшая точка России и Европы. Расположен на Кавказе.",difficulty:"easy",points:10}]},{id:"informatics8",title:"Информатика",icon:(0,u.jsx)(lJ,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программирование, алгоритмы",topics:[{id:"t1",title:"Алгоритмы",description:"Понятие алгоритма и его свойства",theory:`<h3>Алгоритм</h3>
          <p>Алгоритм — точное описание порядка действий для решения задачи.</p>
          <h4>Свойства алгоритма:</h4>
          <ul>
            <li><strong>Дискретность</strong> — состоит из шагов</li>
            <li><strong>Понятность</strong> — понятен исполнителю</li>
            <li><strong>Определённость</strong> — каждый шаг однозначен</li>
            <li><strong>Результативность</strong> — приводит к результату</li>
            <li><strong>Массовость</strong> — применим к множеству данных</li>
          </ul>
          <h4>Способы записи:</h4>
          <ul>
            <li>Словесный</li>
            <li>Блок-схема</li>
            <li>Программа</li>
          </ul>`,examples:["Составь алгоритм","Нарисуй блок-схему","Свойства алгоритма"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Программирование на Python",description:"Основы языка Python",theory:`<h3>Основы Python</h3>
          <h4>Переменные:</h4>
          <pre>
name = "Анна"
age = 14
height = 1.65
          </pre>
          <h4>Условия:</h4>
          <pre>
if age >= 18:
    print("Взрослый")
else:
    print("Ребёнок")
          </pre>
          <h4>Циклы:</h4>
          <pre>
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
          </pre>`,examples:["Напиши программу","Цикл for","Условный оператор"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Системы счисления",description:"Двоичная, восьмеричная, шестнадцатеричная",theory:`<h3>Системы счисления</h3>
          <h4>Десятичная (основание 10):</h4>
          <p>Цифры: 0-9. Пример: 255₁₀</p>
          <h4>Двоичная (основание 2):</h4>
          <p>Цифры: 0, 1. Пример: 11111111₂ = 255₁₀</p>
          <h4>Перевод из двоичной в десятичную:</h4>
          <p>1011₂ = 1\xb72\xb3 + 0\xb72\xb2 + 1\xb72\xb9 + 1\xb72⁰ = 8 + 0 + 2 + 1 = 11₁₀</p>
          <h4>Перевод из десятичной в двоичную:</h4>
          <p>Деление на 2 с записью остатков снизу вверх</p>
          <h4>Применение:</h4>
          <p>Компьютеры работают в двоичной системе</p>`,examples:["Переведи 1010₂","Переведи 25 в двоичную","Сложи двоичные числа"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Чему равно 1010₂ в десятичной системе?",options:["8","10","12","5"],correctAnswer:1,explanation:"1010₂ = 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10₁₀",difficulty:"medium",points:15},{id:"q2",question:"Какая команда в Python выводит текст?",options:["input()","print()","output()","show()"],correctAnswer:1,explanation:'print() — функция вывода в Python. Пример: print("Привет") выведет "Привет".',difficulty:"easy",points:10}]},{id:"english8",title:"Иностранный язык",icon:(0,u.jsx)(lG,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Английский язык, грамматика",topics:[{id:"t1",title:"Времена: Past Simple",description:"Прошедшее простое время",theory:`<h3>Past Simple</h3>
          <p>Прошедшее простое время — для действий в прошлом.</p>
          <h4>Образование:</h4>
          <ul>
            <li>Правильные глаголы: V + ed (worked, played, studied)</li>
            <li>Неправильные: II форма (went, saw, made)</li>
          </ul>
          <h4>Утверждение:</h4>
          <p>I worked yesterday. She went to school.</p>
          <h4>Отрицание:</h4>
          <p>I did not (didn't) work. She didn't go.</p>
          <h4>Вопрос:</h4>
          <p>Did you work? Did she go?</p>
          <h4>Маркеры:</h4>
          <p>yesterday, last week, 2 days ago, in 2010</p>`,examples:["Поставь в Past Simple","Отрицание в Past Simple","Вопрос в Past Simple"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Модальные глаголы",description:"Can, must, should",theory:`<h3>Модальные глаголы</h3>
          <h4>Can (мочь, уметь):</h4>
          <p>I can swim. Can you help me? He can't come.</p>
          <h4>Must (должен):</h4>
          <p>You must do your homework. (обязанность)</p>
          <h4>Should (следует):</h4>
          <p>You should study more. (совет)</p>
          <h4>May (может быть, можно):</h4>
          <p>May I come in? (просьба разрешения)</p>
          <h4>Особенности:</h4>
          <ul>
            <li>Не имеют окончаний -s, -ed, -ing</li>
            <li>После них идёт инфинитив без to</li>
          </ul>`,examples:["Вставь модальный глагол","Can vs Must","Переведи предложения"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t3",title:"Степени сравнения",description:"Сравнение прилагательных",theory:`<h3>Степени сравнения прилагательных</h3>
          <h4>Правила:</h4>
          <ul>
            <li>Короткие: big → bigger → the biggest</li>
            <li>Длинные: interesting → more interesting → the most interesting</li>
            <li>-y → -ier: happy → happier → the happiest</li>
          </ul>
          <h4>Исключения:</h4>
          <ul>
            <li>good → better → the best</li>
            <li>bad → worse → the worst</li>
            <li>far → farther/further → the farthest/furthest</li>
          </ul>
          <h4>Примеры:</h4>
          <p>This book is more interesting than that one.</p>
          <p>She is the tallest in the class.</p>`,examples:["Сравни прилагательные","Превосходная степень","Исключения"],completed:!1,difficulty:"medium",estimatedTime:25}],quiz:[{id:"q1",question:'Выбери правильную форму: "She ___ to school yesterday."',options:["go","goes","went","going"],correctAnswer:2,explanation:"Past Simple — went (II форма неправильного глагола go). Yesterday — маркер прошедшего времени.",difficulty:"easy",points:10},{id:"q2",question:'Как перевести "You must do homework"?',options:["Ты можешь сделать","Ты должен сделать","Ты должен был сделать","Ты хочешь сделать"],correctAnswer:1,explanation:"Must — долженствование, обязанность. You must = ты должен.",difficulty:"easy",points:10}]}]},l1={id:9,name:"9 класс",shortName:"9 кл.",subjects:[{id:"algebra9",title:"Алгебра",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Тригонометрия, прогрессии, ОГЭ",topics:[{id:"t1",title:"Тригонометрия",description:"Синус, косинус, тангенс",theory:`<h3>Тригонометрия</h3>
          <h4>Основные функции:</h4>
          <ul>
            <li>sin α — противолежащий катет / гипотенуза</li>
            <li>cos α — прилежащий катет / гипотенуза</li>
            <li>tg α = sin α / cos α</li>
            <li>ctg α = cos α / sin α</li>
          </ul>
          <h4>Таблица значений:</h4>
          <p>sin 30\xb0 = 1/2, sin 45\xb0 = √2/2, sin 60\xb0 = √3/2</p>
          <p>cos 30\xb0 = √3/2, cos 45\xb0 = √2/2, cos 60\xb0 = 1/2</p>`,examples:["sin 90° = ?","cos 60° = ?","tg 45° = ?"],completed:!1,difficulty:"hard",estimatedTime:35}],quiz:[{id:"q1",question:"Чему равно sin(90°)?",options:["0","1/2","1","-1"],correctAnswer:2,explanation:"sin(90°) = 1. Это максимальное значение синуса. При угле 90° противолежащий катет равен гипотенузе.",difficulty:"medium",points:15}]},{id:"psychology9",title:"Психология",icon:(0,u.jsx)(lj,{className:"w-5 h-5"}),color:"text-fuchsia-400",gradient:"from-fuchsia-500 to-purple-500",description:"Эмоциональный интеллект, профориентация",topics:[{id:"t1",title:"Эмоциональный интеллект",description:"Управление эмоциями",theory:`<h3>Эмоциональный интеллект (EQ)</h3>
          <p>Эмоциональный интеллект — способность распознавать, понимать и управлять своими эмоциями и эмоциями других людей.</p>
          <h4>Компоненты EQ:</h4>
          <ul>
            <li>Самосознание — понимание своих эмоций</li>
            <li>Саморегуляция — управление эмоциями</li>
            <li>Мотивация — внутренний стимул</li>
            <li>Эмпатия — понимание других</li>
            <li>Социальные навыки — общение</li>
          </ul>`,examples:["Как развить EQ?","Что такое эмпатия?","Как управлять стрессом?"],completed:!1,difficulty:"medium",estimatedTime:25}],quiz:[{id:"q1",question:"Что такое эмоциональный интеллект?",options:["Умение считать","Способность понимать и управлять эмоциями","Знание языков","Физическая сила"],correctAnswer:1,explanation:"Эмоциональный интеллект (EQ) — это способность распознавать, понимать и управлять своими эмоциями и эмоциями других людей.",difficulty:"easy",points:10},{id:"q2",question:"Что такое эмпатия?",options:["Агрессия","Способность понимать чувства других","Равнодушие","Эгоизм"],correctAnswer:1,explanation:"Эмпатия — это способность понимать и разделять чувства другого человека. Это важный компонент эмоционального интеллекта.",difficulty:"easy",points:10}]},{id:"geometry9",title:"Геометрия",icon:(0,u.jsx)(lg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Векторы, метод координат, площади",topics:[{id:"t1",title:"Векторы на плоскости",description:"Понятие вектора и операции с ним",theory:`<h3>Векторы</h3>
          <p>Вектор — это направленный отрезок. Имеет начало, конец и направление.</p>
          <h4>Обозначение:</h4>
          <p>Вектор обозначается: AB или a⃗</p>
          <h4>Операции с векторами:</h4>
          <ul>
            <li><strong>Сложение:</strong> a⃗ + b⃗ (правило треугольника)</li>
            <li><strong>Вычитание:</strong> a⃗ - b⃗</li>
            <li><strong>Умножение на число:</strong> k\xb7a⃗</li>
            <li><strong>Скалярное произведение:</strong> a⃗\xb7b⃗ = |a⃗|\xb7|b⃗|\xb7cos(α)</li>
          </ul>`,examples:["Найди сумму векторов","Вычисли скалярное произведение","Определи координаты вектора"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Метод координат",description:"Решение задач координатным способом",theory:`<h3>Метод координат</h3>
          <p>Метод координат позволяет решать геометрические задачи алгебраически.</p>
          <h4>Формулы:</h4>
          <ul>
            <li>Расстояние между точками: d = √((x₂-x₁)\xb2 + (y₂-y₁)\xb2)</li>
            <li>Середина отрезка: M = ((x₁+x₂)/2, (y₁+y₂)/2)</li>
            <li>Уравнение окружности: (x-a)\xb2 + (y-b)\xb2 = R\xb2</li>
          </ul>`,examples:["Найди расстояние между точками","Запиши уравнение окружности","Найди середину отрезка"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t3",title:"Площади фигур",description:"Вычисление площадей различных фигур",theory:`<h3>Формулы площадей</h3>
          <h4>Треугольник:</h4>
          <ul>
            <li>S = \xbd\xb7a\xb7h (основание \xd7 высота)</li>
            <li>S = \xbd\xb7a\xb7b\xb7sin(γ) (по двум сторонам и углу)</li>
            <li>S = √(p(p-a)(p-b)(p-c)) (формула Герона)</li>
          </ul>
          <h4>Четырёхугольники:</h4>
          <ul>
            <li>Параллелограмм: S = a\xb7h</li>
            <li>Трапеция: S = \xbd\xb7(a+b)\xb7h</li>
            <li>Ромб: S = \xbd\xb7d₁\xb7d₂</li>
          </ul>`,examples:["Вычисли площадь треугольника","Найди площадь трапеции","Формула Герона"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Чему равна площадь треугольника со сторонами 3, 4 и 5?",options:["6","12","10","7.5"],correctAnswer:0,explanation:"Это прямоугольный треугольник (египетский). S = ½·3·4 = 6. Или по формуле Герона: p = 6, S = √(6·3·2·1) = √36 = 6.",difficulty:"medium",points:15},{id:"q2",question:"Что такое вектор?",options:["Число","Направленный отрезок","Точка","Прямая"],correctAnswer:1,explanation:"Вектор — это направленный отрезок, который имеет длину (модуль) и направление.",difficulty:"easy",points:10}]},{id:"russian9",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Синтаксис, пунктуация, подготовка к ОГЭ",topics:[{id:"t1",title:"Сложноподчинённые предложения",description:"СПП с различными видами придаточных",theory:`<h3>Сложноподчинённые предложения (СПП)</h3>
          <p>СПП состоит из главной и придаточной частей, связанных подчинительными союзами или союзными словами.</p>
          <h4>Виды придаточных:</h4>
          <ul>
            <li><strong>Определительные:</strong> который, какой, что (книга, которую я читаю)</li>
            <li><strong>Изъяснительные:</strong> что, чтобы, как (я знаю, что он придёт)</li>
            <li><strong>Обстоятельственные:</strong> времени, места, причины, цели, условия</li>
          </ul>
          <h4>Союзы:</h4>
          <p>что, чтобы, если, когда, потому что, хотя, если бы</p>`,examples:["Найди главную часть СПП","Определи вид придаточного","Поставь запятые"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Пунктуация в сложном предложении",description:"Знаки препинания в ССП и СПП",theory:`<h3>Правила пунктуации</h3>
          <h4>Сложносочинённые предложения (ССП):</h4>
          <p>Запятая ставится перед союзами: и, а, но, да, или, либо</p>
          <p>Пример: Солнце село, и стало прохладно.</p>
          <h4>Сложноподчинённые предложения (СПП):</h4>
          <p>Запятая ставится между главной и придаточной частями.</p>
          <p>Пример: Я знаю, что ты придёшь.</p>
          <h4>Исключения:</h4>
          <p>Не ставится запятая, если есть общая часть: Вечером пошёл дождь и подул ветер.</p>`,examples:["Расставь знаки препинания","Объясни постановку запятой","Найди ошибку"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t3",title:"Изложение и сочинение",description:"Подготовка к ОГЭ",theory:`<h3>Изложение (ОГЭ)</h3>
          <p>Сжатое изложение — передача основного содержания текста.</p>
          <h4>Приёмы сжатия:</h4>
          <ul>
            <li>Исключение подробностей</li>
            <li>Обобщение частных фактов</li>
            <li>Упрощение синтаксических конструкций</li>
          </ul>
          <h3>Сочинение-рассуждение</h3>
          <h4>Структура:</h4>
          <ol>
            <li>Тезис (вступление)</li>
            <li>Аргументы (доказательства)</li>
            <li>Вывод (заключение)</li>
          </ol>`,examples:["Напиши тезис","Подбери аргументы","Сделай вывод"],completed:!1,difficulty:"hard",estimatedTime:40}],quiz:[{id:"q1",question:"Какой союз используется в сложноподчинённом предложении?",options:["и","а","но","что"],correctAnswer:3,explanation:'Союзы "что, чтобы, если, когда, потому что" — подчинительные, используются в СПП. Союзы "и, а, но" — сочинительные, для ССП.',difficulty:"easy",points:10},{id:"q2",question:"Сколько частей в сложноподчинённом предложении?",options:["Одна","Две и более","Только три","Не менее четырёх"],correctAnswer:1,explanation:"СПП состоит из главной части и одной или нескольких придаточных частей. Минимум — две части.",difficulty:"easy",points:10}]},{id:"literature9",title:"Литература",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Русская классика XIX века",topics:[{id:"t1",title:"А.С. Пушкин",description:"Евгений Онегин, лирика",theory:`<h3>Александр Сергеевич Пушкин (1799-1837)</h3>
          <p>Величайший русский поэт, основоположник современного русского литературного языка.</p>
          <h4>Роман в стихах "Евгений Онегин":</h4>
          <ul>
            <li>Главные герои: Онегин, Татьяна, Ленский, Ольга</li>
            <li>Онегин — "лишний человек", эгоист</li>
            <li>Татьяна — "милый идеал" Пушкина</li>
          </ul>
          <h4>Известные стихотворения:</h4>
          <p>"К Чаадаеву", "К морю", "Я помню чудное мгновенье", "Пророк"</p>`,examples:["Анализ главы Онегина","Образ Татьяны","Онегинская строфа"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"М.Ю. Лермонтов",description:"Герой нашего времени",theory:`<h3>Михаил Юрьевич Лермонтов (1814-1841)</h3>
          <p>Русский поэт, прозаик и драматург.</p>
          <h4>Роман "Герой нашего времени":</h4>
          <ul>
            <li>Печорин — главный герой, "портрет поколения"</li>
            <li>Композиция: нарушена хронология</li>
            <li>Тема: судьба, воля, противоречия души</li>
          </ul>
          <h4>Глава "Княжна Мери":</h4>
          <p>Дуэль Печорина и Грушницкого, любовь к Мери</p>`,examples:["Образ Печорина","Композиция романа","Анализ главы"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Н.В. Гоголь",description:"Мёртвые души",theory:`<h3>Николай Васильевич Гоголь (1809-1852)</h3>
          <p>Русский писатель, мастер сатиры и мистики.</p>
          <h4>Поэма "Мёртвые души":</h4>
          <ul>
            <li>Чичиков — аферист, скупает "мёртвые души"</li>
            <li>Помещики: Манилов, Коробочка, Ноздрёв, Собакевич, Плюшкин</li>
            <li>Тема: деградация дворянства</li>
          </ul>
          <h4>Характеристика помещиков:</h4>
          <p>Манилов — мечтатель, Коробочка — жадность, Ноздрёв — азарт, Собакевич — грубость, Плюшкин — патологическая скупость</p>`,examples:["Образ Чичикова","Галерея помещиков","Смысл названия"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:'Кто автор романа "Герой нашего времени"?',options:["Пушкин","Лермонтов","Гоголь","Тургенев"],correctAnswer:1,explanation:'"Герой нашего времени" — роман М.Ю. Лермонтова, написанный в 1838-1840 годах. Главный герой — Григорий Печорин.',difficulty:"easy",points:10},{id:"q2",question:'Как зовут главного героя поэмы "Мёртвые души"?',options:["Онегин","Печорин","Чичиков","Базаров"],correctAnswer:2,explanation:'Павел Иванович Чичиков — главный герой поэмы Н.В. Гоголя "Мёртвые души". Он скупает умерших крестьян (мёртвые души).',difficulty:"easy",points:10},{id:"q3",question:'Кого Пушкин называл "милым идеалом"?',options:["Ольгу","Татьяну","Мари","Наташу"],correctAnswer:1,explanation:'Татьяна Ларина — "милый идеал" Пушкина. В письме к Татьяне он признаётся в любви к её образу.',difficulty:"medium",points:15}]},{id:"physics9",title:"Физика",icon:(0,u.jsx)(lX,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Законы Ньютона, механика, ОГЭ",topics:[{id:"t1",title:"Законы Ньютона",description:"Три закона механики",theory:`<h3>Законы Ньютона</h3>
          <h4>I закон (закон инерции):</h4>
          <p>Тело сохраняет состояние покоя или равномерного прямолинейного движения, если на него не действуют силы.</p>
          <h4>II закон:</h4>
          <p>F = ma (сила = масса \xd7 ускорение)</p>
          <h4>III закон:</h4>
          <p>Сила действия равна силе противодействия: F₁ = -F₂</p>
          <h4>Примеры:</h4>
          <ul>
            <li>Мяч останавливается из-за трения</li>
            <li>Ракета взлетает за счёт реактивной тяги</li>
          </ul>`,examples:["Реши задачу на II закон","Объясни III закон","Найди ускорение"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Закон сохранения импульса",description:"Импульс тела и системы",theory:`<h3>Импульс</h3>
          <p>Импульс тела: p = mv (импульс = масса \xd7 скорость)</p>
          <h4>Закон сохранения импульса:</h4>
          <p>В замкнутой системе суммарный импульс сохраняется:</p>
          <p>m₁v₁ + m₂v₂ = m₁v₁' + m₂v₂'</p>
          <h4>Применение:</h4>
          <ul>
            <li>Реактивное движение</li>
            <li>Столкновения тел</li>
            <li>Отдача при выстреле</li>
          </ul>`,examples:["Найди скорость после столкновения","Задача на реактивное движение","Вычисли импульс"],completed:!1,difficulty:"hard",estimatedTime:35},{id:"t3",title:"Механические колебания",description:"Маятник, волны",theory:`<h3>Колебательное движение</h3>
          <h4>Пружинный маятник:</h4>
          <p>Период: T = 2π√(m/k)</p>
          <h4>Математический маятник:</h4>
          <p>Период: T = 2π√(l/g)</p>
          <h4>Характеристики:</h4>
          <ul>
            <li>Амплитуда (A) — максимальное отклонение</li>
            <li>Период (T) — время одного колебания</li>
            <li>Частота (ν) = 1/T</li>
          </ul>`,examples:["Найди период маятника","Вычисли частоту","Определи амплитуду"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какая формула выражает II закон Ньютона?",options:["F = ma","E = mc²","p = mv","A = Fs"],correctAnswer:0,explanation:"F = ma — второй закон Ньютона. Сила равна произведению массы на ускорение. Единица измерения: Н (ньютон).",difficulty:"easy",points:10},{id:"q2",question:"Чему равен импульс тела массой 2 кг, движущегося со скоростью 3 м/с?",options:["5 кг·м/с","6 кг·м/с","1.5 кг·м/с","9 кг·м/с"],correctAnswer:1,explanation:"Импульс p = mv = 2 × 3 = 6 кг·м/с. Импульс — векторная величина, равная произведению массы на скорость.",difficulty:"easy",points:10}]},{id:"chemistry9",title:"Химия",icon:(0,u.jsx)(lU,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Органическая химия, реакции",topics:[{id:"t1",title:"Органическая химия",description:"Предельные углеводороды",theory:`<h3>Предельные углеводороды (алканы)</h3>
          <p>Алканы — углеводороды с общей формулой CₙH₂ₙ₊₂</p>
          <h4>Первые алканы:</h4>
          <ul>
            <li>CH₄ — метан</li>
            <li>C₂H₆ — этан</li>
            <li>C₃H₈ — пропан</li>
            <li>C₄H₁₀ — бутан</li>
            <li>C₅H₁₂ — пентан</li>
          </ul>
          <h4>Химические свойства:</h4>
          <p>Горение, замещение, дегидрирование</p>`,examples:["Назови алкан C₆H₁₄","Реакция горения метана","Составь формулу гептана"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Алкены и алкины",description:"Непредельные углеводороды",theory:`<h3>Алкены (CₙH₂ₙ)</h3>
          <p>Содержат двойную связь C=C</p>
          <p>Примеры: этилен C₂H₄, пропилен C₃H₆</p>
          <h4>Реакции:</h4>
          <ul>
            <li>Гидрирование: C₂H₄ + H₂ → C₂H₆</li>
            <li>Галогенирование (качественная реакция)</li>
          </ul>
          <h3>Алкины (CₙH₂ₙ₋₂)</h3>
          <p>Содержат тройную связь C≡C</p>
          <p>Пример: ацетилен C₂H₂</p>`,examples:["Отличи этан от этена","Качественная реакция","Гидрирование алкена"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Спирты и кислоты",description:"Кислородсодержащие соединения",theory:`<h3>Спирты</h3>
          <p>Общая формула: R-OH</p>
          <p>Метанол CH₃OH, этанол C₂H₅OH</p>
          <h4>Свойства спиртов:</h4>
          <ul>
            <li>Горение</li>
            <li>Окисление до альдегидов</li>
            <li>Реакция с натрием</li>
          </ul>
          <h3>Карбоновые кислоты</h3>
          <p>Общая формула: R-COOH</p>
          <p>Уксусная кислота CH₃COOH</p>`,examples:["Получи этанол","Свойства уксусной кислоты","Реакция этерификации"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Какая формула у метана?",options:["C₂H₆","CH₄","C₃H₈","C₂H₄"],correctAnswer:1,explanation:"Метан — простейший алкан, формула CH₄. Это природный газ, используется как топливо.",difficulty:"easy",points:10},{id:"q2",question:"Какой класс соединений содержит двойную связь?",options:["Алканы","Алкены","Алкины","Спирты"],correctAnswer:1,explanation:"Алкены содержат одну двойную связь C=C. Пример: этилен C₂H₄. Алкины содержат тройную связь.",difficulty:"easy",points:10},{id:"q3",question:"Формула этанола:",options:["CH₃OH","C₂H₅OH","C₃H₇OH","CH₃COOH"],correctAnswer:1,explanation:"Этанол (этиловый спирт) — C₂H₅OH. Используется в медицине и промышленности.",difficulty:"medium",points:15}]},{id:"social9",title:"Обществознание",icon:(0,u.jsx)(lY,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Право, экономика, политика",topics:[{id:"t1",title:"Правовое государство",description:"Принципы правового государства",theory:`<h3>Правовое государство</h3>
          <p>Государство, в котором власть ограничена правом.</p>
          <h4>Признаки:</h4>
          <ul>
            <li>Верховенство права</li>
            <li>Разделение властей (законодательная, исполнительная, судебная)</li>
            <li>Защита прав человека</li>
            <li>Взаимная ответственность государства и личности</li>
          </ul>
          <h4>Конституция РФ (ст. 1):</h4>
          <p>Россия — демократическое федеративное правовое государство с республиканской формой правления.</p>`,examples:["Приведи пример разделения властей","Как защищаются права?","Структура власти в РФ"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Права человека",description:"Основные права и свободы",theory:`<h3>Права человека</h3>
          <h4>Естественные права:</h4>
          <ul>
            <li>Право на жизнь</li>
            <li>Право на свободу</li>
            <li>Право на личную неприкосновенность</li>
          </ul>
          <h4>Конституционные права граждан РФ:</h4>
          <ul>
            <li>Право на образование</li>
            <li>Право на труд</li>
            <li>Право на жилище</li>
            <li>Право на охрану здоровья</li>
          </ul>
          <h4>Всеобщая декларация прав человека (1948):</h4>
          <p>Международный документ, закрепляющий основные права.</p>`,examples:["Перечисли права гражданина","Что такое Декларация?","Защита прав в суде"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t3",title:"Экономика",description:"Основы экономики",theory:`<h3>Что такое экономика?</h3>
          <p>Экономика — система хозяйствования, обеспечивающая общество благами.</p>
          <h4>Основные вопросы экономики:</h4>
          <ul>
            <li>Что производить?</li>
            <li>Как производить?</li>
            <li>Для кого производить?</li>
          </ul>
          <h4>Типы экономических систем:</h4>
          <ul>
            <li>Традиционная</li>
            <li>Командная (плановая)</li>
            <li>Рыночная</li>
            <li>Смешанная</li>
          </ul>`,examples:["Сравни типы экономик","Что такое рынок?","Спрос и предложение"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Сколько ветвей власти в правовом государстве?",options:["Одна","Две","Три","Четыре"],correctAnswer:2,explanation:"Три ветви власти: законодательная (принимает законы), исполнительная (исполняет), судебная (судит).",difficulty:"easy",points:10},{id:"q2",question:"Какой документ закрепляет права человека?",options:["Уголовный кодекс","Конституция","Бюджет","Устав школы"],correctAnswer:1,explanation:"Конституция — основной закон государства, закрепляющий права и свободы граждан.",difficulty:"easy",points:10},{id:"q3",question:"Какой тип экономики основан на частной собственности?",options:["Командная","Традиционная","Рыночная","Плановая"],correctAnswer:2,explanation:"Рыночная экономика основана на частной собственности, конкуренции и свободном ценообразовании.",difficulty:"medium",points:15}]},{id:"informatics9",title:"Информатика",icon:(0,u.jsx)(lJ,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программирование, алгоритмы, ОГЭ",topics:[{id:"t1",title:"Алгоритмы",description:"Основы алгоритмизации",theory:`<h3>Алгоритм</h3>
          <p>Алгоритм — точное описание порядка действий для решения задачи.</p>
          <h4>Свойства алгоритма:</h4>
          <ul>
            <li>Дискретность (шаги)</li>
            <li>Определённость (однозначность)</li>
            <li>Результативность</li>
            <li>Массовость (применимость к разным данным)</li>
          </ul>
          <h4>Способы записи:</h4>
          <ul>
            <li>Словесный</li>
            <li>Блок-схема</li>
            <li>Программа на языке программирования</li>
          </ul>`,examples:["Составь алгоритм","Нарисуй блок-схему","Найди ошибку в алгоритме"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Программирование на Python",description:"Основы языка Python",theory:`<h3>Основы Python</h3>
          <h4>Переменные и типы данных:</h4>
          <pre>
x = 5          # целое число
s = "Привет"   # строка
a = [1, 2, 3]  # список
          </pre>
          <h4>Условия:</h4>
          <pre>
if x > 0:
    print("Положительное")
else:
    print("Неположительное")
          </pre>
          <h4>Циклы:</h4>
          <pre>
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
          </pre>`,examples:["Напиши программу","Найди ошибку","Что выведет код?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Системы счисления",description:"Перевод чисел между системами",theory:`<h3>Системы счисления</h3>
          <h4>Десятичная (основание 10):</h4>
          <p>Цифры: 0-9. Пример: 255₁₀</p>
          <h4>Двоичная (основание 2):</h4>
          <p>Цифры: 0, 1. Пример: 11111111₂ = 255₁₀</p>
          <h4>Перевод из двоичной в десятичную:</h4>
          <p>1011₂ = 1\xb72\xb3 + 0\xb72\xb2 + 1\xb72\xb9 + 1\xb72⁰ = 8 + 0 + 2 + 1 = 11₁₀</p>
          <h4>Перевод из десятичной в двоичную:</h4>
          <p>Делить на 2, записывать остатки снизу вверх</p>`,examples:["Переведи 1010₂ в десятичную","Переведи 25 в двоичную","Сложи двоичные числа"],completed:!1,difficulty:"medium",estimatedTime:25}],quiz:[{id:"q1",question:"Чему равно 1010₂ в десятичной системе?",options:["8","10","12","5"],correctAnswer:1,explanation:"1010₂ = 1·2³ + 0·2² + 1·2¹ + 0·2⁰ = 8 + 0 + 2 + 0 = 10₁₀",difficulty:"medium",points:15},{id:"q2",question:"Какая команда в Python выводит текст на экран?",options:["input()","print()","output()","show()"],correctAnswer:1,explanation:'print() — функция вывода в Python. Пример: print("Привет") выведет "Привет".',difficulty:"easy",points:10},{id:"q3",question:"Какое свойство алгоритма означает, что он состоит из отдельных шагов?",options:["Результативность","Массовость","Дискретность","Определённость"],correctAnswer:2,explanation:"Дискретность — алгоритм состоит из отдельных шагов, которые выполняются последовательно.",difficulty:"medium",points:15}]},{id:"oge9",title:"Подготовка к ОГЭ",icon:(0,u.jsx)(lf,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Стратегии, типовые задания",topics:[{id:"t1",title:"Структура ОГЭ",description:"Формат экзамена",theory:`<h3>Основной государственный экзамен (ОГЭ)</h3>
          <p>ОГЭ — государственная итоговая аттестация для 9 класса.</p>
          <h4>Обязательные предметы:</h4>
          <ul>
            <li>Русский язык</li>
            <li>Математика</li>
          </ul>
          <h4>Предметы по выбору:</h4>
          <ul>
            <li>Физика, Химия, Биология</li>
            <li>История, Обществознание, География</li>
            <li>Информатика, Литература</li>
            <li>Иностранный язык</li>
          </ul>
          <h4>Баллы:</h4>
          <p>Первичные баллы переводятся в оценки по шкале.</p>`,examples:["Сколько предметов сдавать?","Минимальные баллы","Как выбрать предметы?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t2",title:"Стратегии решения",description:"Как решать задания",theory:`<h3>Стратегии подготовки</h3>
          <h4>Время на экзамене:</h4>
          <ul>
            <li>Сначала решай лёгкие задания</li>
            <li>Оставь время на проверку</li>
            <li>Не застревай на трудных заданиях</li>
          </ul>
          <h4>Советы:</h4>
          <ul>
            <li>Внимательно читай условие</li>
            <li>Проверяй ответы</li>
            <li>Не оставляй пустых полей</li>
            <li>Следи за временем</li>
          </ul>
          <h4>Оформление:</h4>
          <p>Черновик → чистовик → бланк ответов</p>`,examples:["Как распределить время?","Что делать если не знаешь ответ?","Типичные ошибки"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"t3",title:"Типовые задания",description:"Разбор примеров",theory:`<h3>Типы заданий ОГЭ</h3>
          <h4>Математика:</h4>
          <ul>
            <li>Часть 1: задания с кратким ответом</li>
            <li>Часть 2: развёрнутые решения</li>
          </ul>
          <h4>Русский язык:</h4>
          <ul>
            <li>Изложение (сжатое)</li>
            <li>Тестовая часть</li>
            <li>Сочинение-рассуждение</li>
          </ul>
          <h4>Пример задания:</h4>
          <p>Решите уравнение: 2x + 5 = 15. Ответ: x = 5</p>`,examples:["Реши пример задания","Напиши изложение","Сочинение-рассуждение"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"Сколько обязательных предметов на ОГЭ?",options:["Один","Два","Три","Четыре"],correctAnswer:1,explanation:"Обязательных предмета два: Русский язык и Математика. Остальные — по выбору.",difficulty:"easy",points:10},{id:"q2",question:"Что такое ОГЭ?",options:["ЕГЭ для 11 класса","Экзамен для 9 класса","Вступительный экзамен","Олимпиада"],correctAnswer:1,explanation:"ОГЭ — Основной государственный экзамен, государственная итоговая аттестация для 9 класса.",difficulty:"easy",points:10}]}]},l4=(0,t2.default)("telescope",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]),l3=[lL,lF,lV,l$,lB,lW,lK,lQ,l0,l1,{id:10,name:"10 класс",shortName:"10 кл.",subjects:[{id:"algebra10",title:"Алгебра и начала анализа",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Производные, тригонометрия, функции",topics:[{id:"t1",title:"Производная функции",description:"Понятие производной и её применение",theory:`<h3>Производная функции</h3>
          <p>Производная — это скорость изменения функции в данной точке.</p>
          <h4>Определение:</h4>
          <p>f'(x) = lim(Δx→0) [f(x+Δx) - f(x)] / Δx</p>
          <h4>Геометрический смысл:</h4>
          <p>Производная равна угловому коэффициенту касательной: f'(x₀) = tg(α)</p>
          <h4>Физический смысл:</h4>
          <p>Производная пути по времени — скорость: v = S'(t)</p>
          <h4>Таблица производных:</h4>
          <ul>
            <li>(xⁿ)' = n\xb7xⁿ⁻\xb9</li>
            <li>(sin x)' = cos x</li>
            <li>(cos x)' = -sin x</li>
            <li>(eˣ)' = eˣ</li>
            <li>(ln x)' = 1/x</li>
          </ul>`,examples:["Найди производную x⁴","Вычисли f'(2) для f(x)=x³","Найди тангенс угла наклона"],completed:!1,difficulty:"hard",estimatedTime:40},{id:"t2",title:"Применение производной",description:"Исследование функций с помощью производной",theory:`<h3>Исследование функции</h3>
          <h4>Возрастание и убывание:</h4>
          <ul>
            <li>f'(x) > 0 — функция возрастает</li>
            <li>f'(x) < 0 — функция убывает</li>
          </ul>
          <h4>Экстремумы:</h4>
          <ul>
            <li>Точка максимума: f'(x₀) = 0, f' меняется с + на −</li>
            <li>Точка минимума: f'(x₀) = 0, f' меняется с − на +</li>
          </ul>
          <h4>Алгоритм исследования:</h4>
          <ol>
            <li>Найти область определения</li>
            <li>Найти производную</li>
            <li>Найти критические точки</li>
            <li>Определить знаки производной</li>
            <li>Найти экстремумы</li>
          </ol>`,examples:["Найди точки экстремума","Исследуй функцию","Построй график"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t3",title:"Тригонометрические уравнения",description:"Решение тригонометрических уравнений",theory:`<h3>Тригонометрические уравнения</h3>
          <h4>Простейшие уравнения:</h4>
          <ul>
            <li>sin x = a, x = (−1)ⁿ arcsin(a) + πn</li>
            <li>cos x = a, x = \xb1arccos(a) + 2πn</li>
            <li>tg x = a, x = arctg(a) + πn</li>
          </ul>
          <h4>Частные случаи:</h4>
          <ul>
            <li>sin x = 0, x = πn</li>
            <li>cos x = 0, x = π/2 + πn</li>
            <li>sin x = 1, x = π/2 + 2πn</li>
          </ul>
          <h4>Методы решения:</h4>
          <p>Замена переменной, разложение на множители, формулы приведения</p>`,examples:["Реши: sin x = 1/2","Реши: cos 2x = 1","Реши: sin²x - sin x = 0"],completed:!1,difficulty:"hard",estimatedTime:40}],quiz:[{id:"q1",question:"Чему равна производная функции f(x) = x³?",options:["x²","3x²","3x","x³"],correctAnswer:1,explanation:"По правилу (xⁿ)' = n·xⁿ⁻¹. Поэтому (x³)' = 3x².",difficulty:"medium",points:15},{id:"q2",question:"Если f'(x) > 0, то функция:",options:["Убывает","Возрастает","Постоянна","Не определена"],correctAnswer:1,explanation:"Если производная положительна, функция возрастает. Если отрицательна — убывает.",difficulty:"easy",points:10},{id:"q3",question:"Решите уравнение: sin x = 0",options:["x = πn","x = π/2 + πn","x = 2πn","x = π + πn"],correctAnswer:0,explanation:"sin x = 0 при x = 0, π, 2π, ... Общая формула: x = πn, где n ∈ Z.",difficulty:"medium",points:15}]},{id:"geometry10",title:"Геометрия",icon:(0,u.jsx)(lg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Стереометрия, тела вращения",topics:[{id:"t1",title:"Многогранники",description:"Призма, пирамида и их свойства",theory:`<h3>Многогранники</h3>
          <h4>Призма:</h4>
          <p>Многогранник с двумя равными основаниями и параллельными боковыми рёбрами.</p>
          <ul>
            <li>Объём: V = Sосн \xb7 h</li>
            <li>Площадь поверхности: S = 2Sосн + Sбок</li>
          </ul>
          <h4>Пирамида:</h4>
          <p>Многогранник с основанием и вершиной, соединённой со всеми точками основания.</p>
          <ul>
            <li>Объём: V = 1/3 \xb7 Sосн \xb7 h</li>
            <li>Правильная пирамида: в основании правильный многоугольник</li>
          </ul>`,examples:["Найди объём призмы","Вычисли объём пирамиды","Найди площадь поверхности"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Тела вращения",description:"Цилиндр, конус, шар",theory:`<h3>Цилиндр</h3>
          <ul>
            <li>Объём: V = πR\xb2h</li>
            <li>Площадь боковой: Sбок = 2πRh</li>
          </ul>
          <h3>Конус</h3>
          <ul>
            <li>Объём: V = 1/3 \xb7 πR\xb2h</li>
            <li>Площадь боковой: Sбок = πRl (l — образующая)</li>
          </ul>
          <h3>Шар</h3>
          <ul>
            <li>Объём: V = 4/3 \xb7 πR\xb3</li>
            <li>Площадь поверхности: S = 4πR\xb2</li>
          </ul>`,examples:["Найди объём цилиндра","Объём шара радиуса 3","Площадь поверхности конуса"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Координаты в пространстве",description:"Метод координат в стереометрии",theory:`<h3>Координаты точки</h3>
          <p>Точка в пространстве: M(x, y, z)</p>
          <h4>Формулы:</h4>
          <ul>
            <li>Расстояние между точками: d = √((x₂-x₁)\xb2 + (y₂-y₁)\xb2 + (z₂-z₁)\xb2)</li>
            <li>Середина отрезка: M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)</li>
            <li>Уравнение сферы: (x-a)\xb2 + (y-b)\xb2 + (z-c)\xb2 = R\xb2</li>
          </ul>
          <h4>Векторы:</h4>
          <p>Координаты вектора: a⃗ = (x, y, z)</p>
          <p>Длина вектора: |a⃗| = √(x\xb2 + y\xb2 + z\xb2)</p>`,examples:["Найди расстояние между точками","Запиши уравнение сферы","Найди длину вектора"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Формула объёма пирамиды:",options:["V = Sосн · h","V = 1/3 · Sосн · h","V = 1/2 · Sосн · h","V = Sосн · h / 4"],correctAnswer:1,explanation:"Объём пирамиды V = 1/3 · Sосн · h. Это одна треть от объёма призмы с тем же основанием и высотой.",difficulty:"easy",points:10},{id:"q2",question:"Чему равен объём шара радиуса 3?",options:["12π","27π","36π","36π"],correctAnswer:2,explanation:"V = 4/3 · πR³ = 4/3 · π · 27 = 36π.",difficulty:"medium",points:15}]},{id:"russian10",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Стилистика, культура речи, ЕГЭ",topics:[{id:"t1",title:"Функциональные стили речи",description:"Научный, официально-деловой, публицистический",theory:`<h3>Стили речи</h3>
          <h4>Научный стиль:</h4>
          <ul>
            <li>Точность, логичность</li>
            <li>Терминология</li>
            <li>Безобразность</li>
            <li>Примеры: учебники, статьи, диссертации</li>
          </ul>
          <h4>Официально-деловой стиль:</h4>
          <ul>
            <li>Стандартизированность</li>
            <li>Безличность</li>
            <li>Примеры: законы, приказы, заявления</li>
          </ul>
          <h4>Публицистический стиль:</h4>
          <ul>
            <li>Воздействие на читателя</li>
            <li>Эмоциональность</li>
            <li>Примеры: статьи, очерки, речи</li>
          </ul>`,examples:["Определи стиль текста","Найди признаки стиля","Анализ научного текста"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Нормы русского языка",description:"Орфоэпические, лексические, грамматические нормы",theory:`<h3>Нормы языка</h3>
          <h4>Орфоэпические нормы:</h4>
          <p>Правильное произношение: каталОг, звонИт, тОрты</p>
          <h4>Лексические нормы:</h4>
          <ul>
            <li>Употребление слов в правильном значении</li>
            <li>Избегание плеоназмов (свободная вакансия)</li>
            <li>Избегание тавтологии (памятный сувенир)</li>
          </ul>
          <h4>Грамматические нормы:</h4>
          <ul>
            <li>Правильные формы: две STUDENTKI, красивEE</li>
            <li>Управление: согласно ПРИКАЗУ (не приказа)</li>
          </ul>`,examples:["Поставь ударение","Исправь ошибку","Выбери правильную форму"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Подготовка к ЕГЭ",description:"Тестовая часть, сочинение",theory:`<h3>Структура ЕГЭ по русскому языку</h3>
          <h4>Тестовая часть (27 заданий):</h4>
          <ul>
            <li>Орфография (правописание корней, приставок)</li>
            <li>Пунктуация</li>
            <li>Грамматические нормы</li>
            <li>Текст и речь</li>
          </ul>
          <h4>Сочинение (задание 27):</h4>
          <ul>
            <li>Проблема исходного текста</li>
            <li>Комментарий с примерами</li>
            <li>Позиция автора</li>
            <li>Своя позиция и аргументы</li>
            <li>Вывод</li>
          </ul>`,examples:["Реши тестовые задания","Напиши сочинение","Найди грамматические ошибки"],completed:!1,difficulty:"hard",estimatedTime:45}],quiz:[{id:"q1",question:'Ударение в слове "звонит":',options:["звОнит","звонИт","звонит","Звонит"],correctAnswer:1,explanation:"Правильно: звонИт. Ударение падает на последний слог. Это орфоэпическая норма.",difficulty:"easy",points:10},{id:"q2",question:"Какой стиль используется в научных статьях?",options:["Разговорный","Художественный","Научный","Официально-деловой"],correctAnswer:2,explanation:"Научные статьи пишутся в научном стиле — точном, логичном, с использованием терминологии.",difficulty:"easy",points:10}]},{id:"literature10",title:"Литература",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Русская литература XIX-XX века",topics:[{id:"t1",title:"И.С. Тургенев",description:"Отцы и дети",theory:`<h3>И.С. Тургенев (1818-1883)</h3>
          <h4>Роман "Отцы и дети" (1862):</h4>
          <ul>
            <li>Тема: конфликт поколений</li>
            <li>Базаров — нигилист, отрицает искусство, любовь, религию</li>
            <li>Павел Петрович — представитель "отцов", аристократ</li>
          </ul>
          <h4>Нигилизм Базарова:</h4>
          <p>Отрицание общепринятых ценностей. "Сначала нужно место расчистить".</p>
          <h4>Любовь к Одинцовой:</h4>
          <p>Испытание любовью. Базаров не может справиться с чувствами.</p>
          <h4>Смысл финала:</h4>
          <p>Смерть Базарова — крах нигилизма, но и признание его силы.</p>`,examples:["Образ Базарова","Конфликт отцов и детей","Нигилизм в романе"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"Ф.М. Достоевский",description:"Преступление и наказание",theory:`<h3>Ф.М. Достоевский (1821-1881)</h3>
          <h4>Роман "Преступление и наказание" (1866):</h4>
          <ul>
            <li>Раскольников — теория "сверхчеловека"</li>
            <li>"Тварь я дрожащая или право имею?"</li>
          </ul>
          <h4>Теория Раскольникова:</h4>
          <p>Люди делятся на "обыкновенных" и "необыкновенных". Последние имеют право нарушать законы.</p>
          <h4>Соня Мармеладова:</h4>
          <p>Путь к спасению через веру и любовь. Символ жертвенности.</p>
          <h4>Наказание:</h4>
          <p>Не каторга, а муки совести. "Раскольников" — от слова "раскол".</p>`,examples:["Теория Раскольникова","Образ Сони","Петербург Достоевского"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t3",title:"Л.Н. Толстой",description:"Война и мир",theory:`<h3>Л.Н. Толстой (1828-1910)</h3>
          <h4>Роман-эпопея "Война и мир" (1863-1869):</h4>
          <ul>
            <li>Масштаб: 559 персонажей</li>
            <li>Исторические события: 1805-1812 годы</li>
          </ul>
          <h4>Главные герои:</h4>
          <ul>
            <li>Андрей Болконский — путь от славы к семье и смерти</li>
            <li>Пьер Безухов — путь исканий, масоны, любовь</li>
            <li>Наташа Ростова — жизнелюбие, развитие личности</li>
          </ul>
          <h4>Философия истории:</h4>
          <p>Народ — главная сила истории. Кутузов — народный полководец.</p>`,examples:["Образ Андрея Болконского","Путь Пьера Безухова","Наташа Ростова"],completed:!1,difficulty:"hard",estimatedTime:50}],quiz:[{id:"q1",question:'Кто главный герой романа "Отцы и дети"?',options:["Павел Петрович","Аркадий","Базаров","Николай Петрович"],correctAnswer:2,explanation:"Евгений Базаров — главный герой романа, нигилист, студент-медик.",difficulty:"easy",points:10},{id:"q2",question:"Какую теорию создал Раскольников?",options:["Теория прогресса","Теория сверхчеловека","Теория эволюции","Теория относительности"],correctAnswer:1,explanation:'Раскольников создал теорию деления людей на "обыкновенных" и "необыкновенных", которые имеют право нарушать законы ради великих целей.',difficulty:"medium",points:15},{id:"q3",question:'Кто автор романа "Война и мир"?',options:["Тургенев","Достоевский","Толстой","Гоголь"],correctAnswer:2,explanation:'"Война и мир" — роман-эпопея Льва Николаевича Толстого, написанный в 1863-1869 годах.',difficulty:"easy",points:10}]},{id:"physics10",title:"Физика",icon:(0,u.jsx)(lX,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Молекулярная физика, термодинамика",topics:[{id:"t1",title:"Молекулярно-кинетическая теория",description:"Основы МКТ",theory:`<h3>Основные положения МКТ</h3>
          <h4>Три положения:</h4>
          <ol>
            <li>Все вещества состоят из молекул</li>
            <li>Молекулы находятся в непрерывном движении</li>
            <li>Молекулы взаимодействуют друг с другом</li>
          </ol>
          <h4>Основное уравнение МКТ:</h4>
          <p>p = 1/3 \xb7 n \xb7 m₀ \xb7 v\xb2 = n\xb7k\xb7T</p>
          <p>где n — концентрация, k — постоянная Больцмана</p>
          <h4>Температура:</h4>
          <p>T = 2/3 \xb7 Eкин/k — мера средней кинетической энергии</p>`,examples:["Давление идеального газа","Средняя скорость молекул","Температура и энергия"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Уравнение состояния идеального газа",description:"Уравнение Менделеева-Клапейрона",theory:`<h3>Уравнение состояния</h3>
          <h4>Уравнение Менделеева-Клапейрона:</h4>
          <p>pV = νRT = m/M \xb7 R \xb7 T</p>
          <h4>Газовые законы:</h4>
          <ul>
            <li><strong>Закон Бойля-Мариотта:</strong> pV = const (T = const)</li>
            <li><strong>Закон Гей-Люссака:</strong> V/T = const (p = const)</li>
            <li><strong>Закон Шарля:</strong> p/T = const (V = const)</li>
          </ul>
          <h4>Универсальная газовая постоянная:</h4>
          <p>R = 8.31 Дж/(моль\xb7К)</p>`,examples:["Реши задачу на газовые законы","Найди давление","Изотермический процесс"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Первый закон термодинамики",description:"Закон сохранения энергии в тепловых процессах",theory:`<h3>Первый закон термодинамики</h3>
          <p>Q = ΔU + A</p>
          <p>Количество теплоты идёт на изменение внутренней энергии и совершение работы.</p>
          <h4>Применение к изопроцессам:</h4>
          <ul>
            <li><strong>Изохорный:</strong> Q = ΔU (A = 0)</li>
            <li><strong>Изотермический:</strong> Q = A (ΔU = 0)</li>
            <li><strong>Адиабатный:</strong> A = -ΔU (Q = 0)</li>
          </ul>
          <h4>КПД теплового двигателя:</h4>
          <p>η = A/Q₁ = (Q₁ - Q₂)/Q₁ = 1 - Q₂/Q₁</p>`,examples:["Реши задачу на I закон","Найди КПД","Адиабатный процесс"],completed:!1,difficulty:"hard",estimatedTime:40}],quiz:[{id:"q1",question:"Какой газовый закон описывает процесс при постоянной температуре?",options:["Закон Шарля","Закон Гей-Люссака","Закон Бойля-Мариотта","Закон Авогадро"],correctAnswer:2,explanation:"Закон Бойля-Мариотта: pV = const при T = const. Это изотермический процесс.",difficulty:"medium",points:15},{id:"q2",question:"Формула первого закона термодинамики:",options:["Q = U + A","Q = ΔU + A","Q = U - A","Q = ΔU - A"],correctAnswer:1,explanation:"Q = ΔU + A — количество теплоты идёт на изменение внутренней энергии и совершение работы.",difficulty:"easy",points:10}]},{id:"chemistry10",title:"Химия",icon:(0,u.jsx)(lU,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Химическая кинетика, растворы",topics:[{id:"t1",title:"Химическая кинетика",description:"Скорость химических реакций",theory:`<h3>Скорость реакции</h3>
          <p>v = ΔC/Δt — изменение концентрации в единицу времени</p>
          <h4>Факторы, влияющие на скорость:</h4>
          <ul>
            <li>Природа реагентов</li>
            <li>Концентрация (закон действующих масс)</li>
            <li>Температура (правило Вант-Гоффа)</li>
            <li>Поверхность соприкосновения</li>
            <li>Катализаторы</li>
          </ul>
          <h4>Правило Вант-Гоффа:</h4>
          <p>v₂/v₁ = γ^((T₂-T₁)/10), где γ ≈ 2-4</p>`,examples:["Рассчитай скорость реакции","Как влияет температура?","Действие катализатора"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Химическое равновесие",description:"Обратимые реакции",theory:`<h3>Химическое равновесие</h3>
          <p>Состояние, когда скорости прямой и обратной реакций равны.</p>
          <h4>Константа равновесия:</h4>
          <p>K = [C]^c \xb7 [D]^d / ([A]^a \xb7 [B]^b)</p>
          <h4>Принцип Ле Шателье:</h4>
          <p>При воздействии на систему равновесие смещается в сторону, ослабляющую это воздействие.</p>
          <ul>
            <li>Повышение давления → в сторону меньшего объёма</li>
            <li>Повышение температуры → в сторону эндотермической реакции</li>
          </ul>`,examples:["Смещение равновесия","Константа равновесия","Принцип Ле Шателье"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Электролитическая диссоциация",description:"Растворы электролитов",theory:`<h3>Электролиты</h3>
          <p>Вещества, распадающиеся на ионы в растворах или расплавах.</p>
          <h4>Степень диссоциации:</h4>
          <p>α = n(диссоциировавших) / n(общее)</p>
          <h4>Сильные электролиты:</h4>
          <p>Кислоты: HCl, H₂SO₄, HNO₃</p>
          <p>Щёлочи: NaOH, KOH</p>
          <p>Соли (большинство)</p>
          <h4>Реакции ионного обмена:</h4>
          <p>Идут до конца, если образуется осадок, газ или вода.</p>`,examples:["Напиши уравнение диссоциации","Определи тип электролита","Реакции обмена"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Что такое катализатор?",options:["Увеличивает скорость реакции","Изменяет равновесие","Участвует в реакции","Все ответы верны"],correctAnswer:0,explanation:"Катализатор увеличивает скорость реакции, не расходуется и не изменяет положение равновесия.",difficulty:"easy",points:10},{id:"q2",question:"К сильным электролитам относится:",options:["Уксусная кислота","Соляная кислота","Аммиак","Вода"],correctAnswer:1,explanation:"HCl — сильная кислота, полностью диссоциирует. Уксусная кислота и аммиак — слабые электролиты.",difficulty:"medium",points:15}]},{id:"biology10",title:"Биология",icon:(0,u.jsx)(lH,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Общая биология, генетика",topics:[{id:"t1",title:"Основы генетики",description:"Законы наследственности",theory:`<h3>Законы Менделя</h3>
          <h4>I закон (единообразия):</h4>
          <p>При скрещивании гомозигот все потомки единообразны.</p>
          <h4>II закон (расщепления):</h4>
          <p>При скрещивании гетерозигот (Aa \xd7 Aa) — расщепление 3:1 по фенотипу, 1:2:1 по генотипу.</p>
          <h4>III закон (независимого наследования):</h4>
          <p>Гены разных признаков наследуются независимо.</p>
          <h4>Обозначения:</h4>
          <p>AA, Aa, aa — генотипы; A — доминантный, a — рецессивный</p>`,examples:["Реши задачу на моногибридное скрещивание","Найди генотип","Дигибридное скрещивание"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"ДНК и РНК",description:"Нуклеиновые кислоты",theory:`<h3>Структура ДНК</h3>
          <p>Двойная спираль (Уотсон и Крик, 1953)</p>
          <h4>Правило Чаргаффа:</h4>
          <p>А = Т, Г = Ц (аденин = тимин, гуанин = цитозин)</p>
          <h4>Комплементарность:</h4>
          <p>А-Т, Г-Ц — водородные связи</p>
          <h3>Виды РНК:</h3>
          <ul>
            <li><strong>иРНК (мРНК)</strong> — перенос информации</li>
            <li><strong>тРНК</strong> — транспорт аминокислот</li>
            <li><strong>рРНК</strong> — входит в состав рибосом</li>
          </ul>`,examples:["Принцип комплементарности","Транскрипция","Трансляция"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Эволюция",description:"Теория Чарльза Дарвина",theory:`<h3>Эволюционное учение</h3>
          <h4>Основные положения Дарвина:</h4>
          <ul>
            <li>Наследственная изменчивость</li>
            <li>Борьба за существование</li>
            <li>Естественный отбор</li>
          </ul>
          <h4>Движущие силы эволюции:</h4>
          <ul>
            <li>Мутации — источник материала</li>
            <li>Популяционные волны</li>
            <li>Дрейф генов</li>
            <li>Естественный отбор</li>
          </ul>
          <h4>Результаты эволюции:</h4>
          <p>Приспособленность организмов, образование новых видов</p>`,examples:["Приспособления организмов","Видообразование","Доказательства эволюции"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"При скрещивании Aa × Aa расщепление по фенотипу:",options:["1:1","1:2:1","3:1","9:3:3:1"],correctAnswer:2,explanation:"При моногибридном скрещивании гетерозигот расщепление по фенотипу 3:1 (3 доминантных : 1 рецессивный).",difficulty:"medium",points:15},{id:"q2",question:"Какие нуклеотиды комплементарны в ДНК?",options:["А-Г, Т-Ц","А-Т, Г-Ц","А-Ц, Г-Т","А-А, Т-Т"],correctAnswer:1,explanation:"Правило комплементарности: Аденин соединяется с Тимином (2 водородные связи), Гуанин с Цитозином (3 связи).",difficulty:"easy",points:10}]},{id:"history10",title:"История",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"История России XIX-XX век",topics:[{id:"t1",title:"Отечественная война 1812 года",description:"Война с Наполеоном",theory:`<h3>Отечественная война 1812</h3>
          <h4>Причины:</h4>
          <p>Нарушение Тильзитского мира, континентальная блокада</p>
          <h4>Основные события:</h4>
          <ul>
            <li>Июнь 1812 — вторжение Наполеона (600 тыс. армия)</li>
            <li>Бородинское сражение (26 августа)</li>
            <li>Оставление Москвы</li>
            <li>Тарутинский манёвр Кутузова</li>
            <li>Изгнание французов</li>
          </ul>
          <h4>Герои:</h4>
          <p>Кутузов, Багратион, Раевский, Давыдов</p>`,examples:["Значение Бородинского сражения","Тактика Кутузова","Партизанское движение"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Движение декабристов",description:"Восстание 1825 года",theory:`<h3>Декабристы</h3>
          <h4>Причины:</h4>
          <p>Влияние идей Просвещения, патриотизм после 1812 года, крепостное право</p>
          <h4>Организации:</h4>
          <ul>
            <li>Союз спасения (1816)</li>
            <li>Союз благоденствия (1818)</li>
            <li>Северное общество (Петербург) — Муравьёв</li>
            <li>Южное общество (Украина) — Пестель</li>
          </ul>
          <h4>14 декабря 1825:</h4>
          <p>Восстание на Сенатской площади. 5 казнены, более 100 сосланы.</p>`,examples:["Программы декабристов","Причины поражения","Значение движения"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Отмена крепостного права",description:"Реформы Александра II",theory:`<h3>Крестьянская реформа 1861</h3>
          <h4>Основные положения:</h4>
          <ul>
            <li>Крестьяне получали личную свободу</li>
            <li>Наделы земли (за выкуп)</li>
            <li>Отрезки — изъятие части земель</li>
            <li>Временнообязанное состояние (до выкупа)</li>
          </ul>
          <h4>Другие реформы:</h4>
          <ul>
            <li>Земская (1864) — местное самоуправление</li>
            <li>Судебная (1864) — гласность, несменяемость судей</li>
            <li>Военная (1874) — всеобщая воинская повинность</li>
          </ul>`,examples:["Значение реформ","Отрезки","Выкупная операция"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Когда произошло Бородинское сражение?",options:["1810","1812","1814","1815"],correctAnswer:1,explanation:"Бородинское сражение — 26 августа (7 сентября) 1812 года. Самое кровопролитное сражение XIX века.",difficulty:"easy",points:10},{id:"q2",question:"Кто был главой Южного общества декабристов?",options:["Муравьёв","Пестель","Рылеев","Бестужев"],correctAnswer:1,explanation:'Павел Пестель — руководитель Южного общества, автор "Русской правды". Муравьёв возглавлял Северное общество.',difficulty:"medium",points:15},{id:"q3",question:"В каком году отменено крепостное право?",options:["1855","1861","1865","1870"],correctAnswer:1,explanation:"19 февраля 1861 года Александр II подписал Манифест об отмене крепостного права.",difficulty:"easy",points:10}]},{id:"social10",title:"Обществознание",icon:(0,u.jsx)(lY,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Политика, право, социология",topics:[{id:"t1",title:"Политическая система",description:"Государство и политические режимы",theory:`<h3>Государство</h3>
          <h4>Признаки государства:</h4>
          <ul>
            <li>Территория и население</li>
            <li>Публичная власть</li>
            <li>Право</li>
            <li>Налоги</li>
            <li>Суверенитет</li>
          </ul>
          <h4>Формы правления:</h4>
          <ul>
            <li>Монархия (абсолютная, конституционная)</li>
            <li>Республика (президентская, парламентская, смешанная)</li>
          </ul>
          <h4>Формы государственного устройства:</h4>
          <p>Унитарное, федерация, конфедерация</p>`,examples:["Определи форму правления","Признаки государства","Федерация или унитарное?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Политические режимы",description:"Демократия и недемократические режимы",theory:`<h3>Виды режимов</h3>
          <h4>Демократия:</h4>
          <ul>
            <li>Власть народа</li>
            <li>Выборность органов власти</li>
            <li>Разделение властей</li>
            <li>Права и свободы граждан</li>
            <li>Многопартийность</li>
          </ul>
          <h4>Авторитаризм:</h4>
          <p>Ограниченная демократия, власть в руках одного лица или группы</p>
          <h4>Тоталитаризм:</h4>
          <p>Полный контроль государства над обществом, единственная идеология</p>`,examples:["Признаки демократии","Сравни режимы","Примеры стран"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Гражданское общество",description:"Общественные организации, партии",theory:`<h3>Гражданское общество</h3>
          <p>Совокупность негосударственных отношений и организаций.</p>
          <h4>Институты гражданского общества:</h4>
          <ul>
            <li>Общественные организации</li>
            <li>Политические партии</li>
            <li>Профсоюзы</li>
            <li>Средства массовой информации</li>
            <li>Церковь</li>
          </ul>
          <h4>Функции:</h4>
          <ul>
            <li>Защита интересов граждан</li>
            <li>Контроль над государством</li>
            <li>Развитие самоуправления</li>
          </ul>`,examples:["Примеры организаций","Роль партий","Функции СМИ"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какой признак НЕ относится к государству?",options:["Территория","Налоги","Многопартийность","Суверенитет"],correctAnswer:2,explanation:"Многопартийность — признак демократии, но не обязательный признак государства. Государство может быть однопартийным.",difficulty:"medium",points:15},{id:"q2",question:"Россия по форме правления:",options:["Монархия","Президентская республика","Парламентская республика","Смешанная республика"],correctAnswer:3,explanation:"Россия — смешанная (президентско-парламентская) республика. Президент избирается всенародно, но есть и сильный парламент.",difficulty:"medium",points:15}]},{id:"informatics10",title:"Информатика",icon:(0,u.jsx)(lJ,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программирование, базы данных",topics:[{id:"t1",title:"Массивы и обработка данных",description:"Работа с массивами в программировании",theory:`<h3>Массивы</h3>
          <p>Массив — упорядоченный набор данных одного типа.</p>
          <h4>Операции с массивами:</h4>
          <ul>
            <li>Создание: A = [1, 2, 3, 4, 5]</li>
            <li>Доступ: A[0] — первый элемент</li>
            <li>Изменение: A[2] = 10</li>
            <li>Длина: len(A)</li>
          </ul>
          <h4>Алгоритмы обработки:</h4>
          <ul>
            <li>Поиск максимального/минимального</li>
            <li>Сумма элементов</li>
            <li>Сортировка</li>
            <li>Поиск элемента</li>
          </ul>
          <h4>Пример:</h4>
          <pre>
A = [3, 1, 4, 1, 5]
max_val = A[0]
for x in A:
    if x > max_val:
        max_val = x
          </pre>`,examples:["Найди максимум в массиве","Отсортируй массив","Поиск элемента"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Базы данных",description:"Основы работы с БД",theory:`<h3>Базы данных</h3>
          <p>БД — организованная совокупность данных.</p>
          <h4>Реляционные БД:</h4>
          <ul>
            <li>Таблицы (отношения)</li>
            <li>Строки (записи)</li>
            <li>Столбцы (поля)</li>
            <li>Ключи (первичный, внешний)</li>
          </ul>
          <h4>SQL — язык запросов:</h4>
          <pre>
SELECT * FROM students
WHERE grade > 8
ORDER BY name;
          </pre>
          <h4>Операции:</h4>
          <p>SELECT — выборка, INSERT — вставка, UPDATE — обновление, DELETE — удаление</p>`,examples:["Напиши SQL запрос","Создай таблицу","Найди записи по условию"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Компьютерные сети",description:"Основы сетевых технологий",theory:`<h3>Компьютерные сети</h3>
          <h4>Виды сетей:</h4>
          <ul>
            <li>LAN — локальная сеть</li>
            <li>WAN — глобальная сеть</li>
            <li>Интернет — сеть сетей</li>
          </ul>
          <h4>IP-адрес:</h4>
          <p>Уникальный адрес устройства в сети. IPv4: 192.168.1.1</p>
          <h4>Протоколы:</h4>
          <ul>
            <li>HTTP/HTTPS — веб-страницы</li>
            <li>FTP — передача файлов</li>
            <li>SMTP/POP3 — электронная почта</li>
            <li>TCP/IP — базовые протоколы</li>
          </ul>
          <h4>DNS:</h4>
          <p>Система доменных имён — переводит имена в IP-адреса</p>`,examples:["Определи IP-адрес","Протоколы интернета","Как работает DNS"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Что выведет код: A = [5, 2, 8]; print(A[1])?",options:["5","2","8","Ошибка"],correctAnswer:1,explanation:"Индексация начинается с 0. A[0]=5, A[1]=2, A[2]=8. Поэтому A[1] выведет 2.",difficulty:"easy",points:10},{id:"q2",question:"Какой SQL-запрос выбирает все данные из таблицы users?",options:["GET * FROM users","SELECT * FROM users","FIND * FROM users","SHOW users"],correctAnswer:1,explanation:"SELECT * FROM users — выбирает все столбцы (*) из таблицы users.",difficulty:"easy",points:10},{id:"q3",question:"Что такое IP-адрес?",options:["Имя сайта","Уникальный адрес устройства в сети","Протокол передачи","Пароль"],correctAnswer:1,explanation:"IP-адрес — уникальный числовой адрес устройства в компьютерной сети. Например: 192.168.1.1",difficulty:"easy",points:10}]},{id:"astronomy10",title:"Астрономия",icon:(0,u.jsx)(l4,{className:"w-5 h-5"}),color:"text-violet-400",gradient:"from-violet-500 to-purple-500",description:"Солнечная система, звёзды, галактики",topics:[{id:"t1",title:"Солнечная система",description:"Планеты и их особенности",theory:`<h3>Солнечная система</h3>
          <p>Солнечная система состоит из Солнца и 8 планет.</p>
          <h4>Планеты по порядку:</h4>
          <p>Меркурий → Венера → Земля → Марс → Юпитер → Сатурн → Уран → Нептун</p>
          <h4>Запоминание:</h4>
          <p>"Мы Все Знаем: Мама Юли Села Утром На Пилюли"</p>
          <h4>Крупнейшие:</h4>
          <p>Юпитер — самая большая, Меркурий — самая маленькая</p>`,examples:["Сколько планет?","Какая самая большая?","Какая ближе к Солнцу?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"t2",title:"Звёзды и их эволюция",description:"Жизненный цикл звёзд",theory:`<h3>Звёзды</h3>
          <p>Звезда — массивное газовое тело, излучающее свет.</p>
          <h4>Эволюция звезды:</h4>
          <ol>
            <li>Протозвезда (сжатие облака)</li>
            <li>Главная последовательность (горение водорода)</li>
            <li>Красный гигант</li>
            <li>Белый карлик / Нейтронная звезда / Чёрная дыра</li>
          </ol>
          <h4>Характеристики звёзд:</h4>
          <ul>
            <li>Температура (цвет)</li>
            <li>Светимость</li>
            <li>Масса</li>
            <li>Размер</li>
          </ul>`,examples:["Что будет с Солнцем?","Типы звёзд","Диаграмма Герцшпрунга-Рассела"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Галактики",description:"Строение Вселенной",theory:`<h3>Галактики</h3>
          <p>Галактика — гравитационно связанная система звёзд.</p>
          <h4>Типы галактик:</h4>
          <ul>
            <li>Спиральные (Млечный Путь)</li>
            <li>Эллиптические</li>
            <li>Неправильные</li>
          </ul>
          <h4>Млечный Путь:</h4>
          <ul>
            <li>Наша галактика</li>
            <li>Диаметр ~100 000 световых лет</li>
            <li>~200 млрд звёзд</li>
          </ul>
          <h4>Вселенная:</h4>
          <p>Возраст ~13.8 млрд лет. Теория Большого взрыва.</p>`,examples:["Строение Млечного Пути","Виды галактик","Расширение Вселенной"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какая планета самая большая в Солнечной системе?",options:["Сатурн","Юпитер","Уран","Нептун"],correctAnswer:1,explanation:"Юпитер — самая большая планета Солнечной системы. Его масса в 318 раз больше массы Земли, а диаметр — около 140 000 км.",difficulty:"easy",points:10},{id:"q2",question:"Как называется наша Галактика?",options:["Андромеда","Млечный Путь","Магелланово облако","Туманность Ориона"],correctAnswer:1,explanation:"Млечный Путь — спиральная галактика, в которой находится наше Солнце и Солнечная система.",difficulty:"easy",points:10},{id:"q3",question:"Во что превращается звезда после стадии красного гиганта?",options:["Протозвезда","Белый карлик","Нейтронная звезда","Зависит от массы"],correctAnswer:3,explanation:"Судьба звезды зависит от массы: небольшие становятся белыми карликами, средние — нейтронными звёздами, массивные — чёрными дырами.",difficulty:"medium",points:15}]},{id:"ege10",title:"Подготовка к ЕГЭ",icon:(0,u.jsx)(lf,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Стратегии подготовки к экзаменам",topics:[{id:"t1",title:"Структура ЕГЭ",description:"Формат экзамена",theory:`<h3>Единый государственный экзамен (ЕГЭ)</h3>
          <p>ЕГЭ — государственная итоговая аттестация для 11 класса.</p>
          <h4>Обязательные предметы:</h4>
          <ul>
            <li>Русский язык</li>
            <li>Математика (базовая или профильная)</li>
          </ul>
          <h4>Предметы по выбору:</h4>
          <ul>
            <li>Физика, Химия, Биология</li>
            <li>История, Обществознание, География</li>
            <li>Информатика, Литература</li>
            <li>Иностранный язык</li>
          </ul>
          <h4>Проходные баллы:</h4>
          <p>Зависят от вуза и специальности. Минимальные — для получения аттестата.</p>`,examples:["Минимальные баллы","Выбор предметов","Проходные баллы вузов"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t2",title:"Стратегии подготовки",description:"Эффективные методы",theory:`<h3>Как готовиться к ЕГЭ</h3>
          <h4>Планирование:</h4>
          <ul>
            <li>Составь расписание</li>
            <li>Определи слабые места</li>
            <li>Чередуй предметы</li>
          </ul>
          <h4>Методы:</h4>
          <ul>
            <li>Решай варианты ФИПИ</li>
            <li>Разбирай ошибки</li>
            <li>Используй таймер</li>
            <li>Учи формулы</li>
          </ul>
          <h4>Психологическая подготовка:</h4>
          <ul>
            <li>Высыпайся</li>
            <li>Делай перерывы</li>
            <li>Верь в себя</li>
          </ul>`,examples:["Составь план","Методы запоминания","Борьба со стрессом"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"t3",title:"Работа с бланками",description:"Правила заполнения",theory:`<h3>Бланки ЕГЭ</h3>
          <h4>Виды бланков:</h4>
          <ul>
            <li>Регистрационный бланк</li>
            <li>Бланк ответов №1 (тестовая часть)</li>
            <li>Бланк ответов №2 (развёрнутые ответы)</li>
            <li>Дополнительный бланк</li>
          </ul>
          <h4>Правила:</h4>
          <ul>
            <li>Писать чёрной гелевой ручкой</li>
            <li>Не выходить за границы</li>
            <li>Замена ошибочных ответов</li>
            <li>Подписывать бланки</li>
          </ul>
          <h4>Совет:</h4>
          <p>Сначала записывай ответ в КИМ, потом переноси в бланк</p>`,examples:["Как исправить ошибку?","Образец заполнения","Типичные ошибки"],completed:!1,difficulty:"easy",estimatedTime:20}],quiz:[{id:"q1",question:"Сколько обязательных предметов на ЕГЭ?",options:["Один","Два","Три","Четыре"],correctAnswer:1,explanation:"Обязательных предмета два: Русский язык и Математика (базовая или профильная).",difficulty:"easy",points:10},{id:"q2",question:"Какой ручкой нужно заполнять бланки ЕГЭ?",options:["Синей","Чёрной гелевой","Любой","Карандашом"],correctAnswer:1,explanation:"Бланки ЕГЭ заполняются чёрной гелевой ручкой. Это требование для корректного сканирования.",difficulty:"easy",points:10}]}]},{id:11,name:"11 класс",shortName:"11 кл.",subjects:[{id:"algebra11",title:"Алгебра и начала анализа",icon:(0,u.jsx)(lM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Интегралы, уравнения, ЕГЭ",topics:[{id:"t1",title:"Первообразная и интеграл",description:"Нахождение первообразных функций",theory:`<h3>Первообразная</h3>
          <p>Первообразная функции f(x) — это функция F(x), такая что F'(x) = f(x).</p>
          <h4>Таблица первообразных:</h4>
          <ul>
            <li>xⁿ → xⁿ⁺\xb9/(n+1)</li>
            <li>sin x → -cos x</li>
            <li>cos x → sin x</li>
            <li>eˣ → eˣ</li>
            <li>1/x → ln|x|</li>
          </ul>
          <h3>Определённый интеграл:</h3>
          <p>∫[a,b] f(x)dx = F(b) - F(a) — формула Ньютона-Лейбница</p>
          <h4>Применение:</h4>
          <ul>
            <li>Вычисление площадей</li>
            <li>Вычисление объёмов тел вращения</li>
            <li>Физические приложения</li>
          </ul>`,examples:["Найди первообразную x³","Вычисли интеграл","Найди площадь под графиком"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t2",title:"Показательные уравнения",description:"Решение уравнений вида aˣ = b",theory:`<h3>Показательные уравнения</h3>
          <p>Уравнения вида aˣ = b, где a > 0, a ≠ 1.</p>
          <h4>Методы решения:</h4>
          <ul>
            <li>Приведение к одному основанию: 2ˣ = 8 → 2ˣ = 2\xb3 → x = 3</li>
            <li>Логарифмирование: 3ˣ = 5 → x = log₃5</li>
            <li>Замена переменной: 4ˣ - 5\xb72ˣ + 4 = 0</li>
          </ul>
          <h4>Свойства степеней:</h4>
          <ul>
            <li>aˣ \xb7 aʸ = aˣ⁺ʸ</li>
            <li>aˣ / aʸ = aˣ⁻ʸ</li>
            <li>(aˣ)ʸ = aˣʸ</li>
          </ul>`,examples:["Реши: 2ˣ = 16","Реши: 3ˣ = 1/9","Реши: 4ˣ - 6·2ˣ + 8 = 0"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Логарифмические уравнения",description:"Решение логарифмических уравнений",theory:`<h3>Логарифмы</h3>
          <p>logₐb = c означает aᶜ = b</p>
          <h4>Свойства логарифмов:</h4>
          <ul>
            <li>logₐ(xy) = logₐx + logₐy</li>
            <li>logₐ(x/y) = logₐx - logₐy</li>
            <li>logₐxⁿ = n\xb7logₐx</li>
            <li>logₐa = 1, logₐ1 = 0</li>
          </ul>
          <h4>Методы решения:</h4>
          <ul>
            <li>По определению: log₂x = 3 → x = 2\xb3 = 8</li>
            <li>Потенцирование</li>
            <li>Замена переменной</li>
          </ul>
          <h4>ОДЗ:</h4>
          <p>Выражение под логарифмом > 0</p>`,examples:["Реши: log₂x = 5","Реши: lg(x+1) + lg(x-1) = lg3","Реши: log₂²x - 3log₂x + 2 = 0"],completed:!1,difficulty:"hard",estimatedTime:40},{id:"t4",title:"Иррациональные уравнения",description:"Уравнения с корнями",theory:`<h3>Иррациональные уравнения</h3>
          <p>Уравнения, содержащие переменную под знаком корня.</p>
          <h4>Методы решения:</h4>
          <ul>
            <li>Возведение в степень: √(x-2) = 3 → x-2 = 9 → x = 11</li>
            <li>Замена переменной: ˣ√x = x</li>
            <li>Использование свойств корней</li>
          </ul>
          <h4>Важно:</h4>
          <ul>
            <li>Проверка корней обязательна!</li>
            <li>ОДЗ: подкоренное выражение ≥ 0</li>
            <li>Возведение в чётную степень может дать посторонние корни</li>
          </ul>`,examples:["Реши: √(x+3) = 5","Реши: √x + √(x-3) = 3","Реши: √(x²-3) = x-3"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Чему равна первообразная функции f(x) = x²?",options:["x³","x³/3","2x","x³/2"],correctAnswer:1,explanation:"Первообразная x² равна x³/3 + C. Проверка: (x³/3)' = 3x²/3 = x².",difficulty:"medium",points:15},{id:"q2",question:"Решите уравнение: 2ˣ = 8",options:["x = 2","x = 3","x = 4","x = 8"],correctAnswer:1,explanation:"2ˣ = 8 = 2³, следовательно x = 3.",difficulty:"easy",points:10},{id:"q3",question:"Чему равен log₂8?",options:["2","3","4","8"],correctAnswer:1,explanation:"log₂8 = 3, так как 2³ = 8.",difficulty:"easy",points:10}]},{id:"geometry11",title:"Геометрия",icon:(0,u.jsx)(lg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Стереометрия, тела, координаты",topics:[{id:"t1",title:"Объёмы тел",description:"Вычисление объёмов многогранников и тел вращения",theory:`<h3>Формулы объёмов</h3>
          <h4>Многогранники:</h4>
          <ul>
            <li>Призма: V = Sосн \xb7 h</li>
            <li>Пирамида: V = 1/3 \xb7 Sосн \xb7 h</li>
            <li>Усечённая пирамида: V = 1/3 \xb7 h(S₁ + S₂ + √(S₁S₂))</li>
          </ul>
          <h4>Тела вращения:</h4>
          <ul>
            <li>Цилиндр: V = πR\xb2h</li>
            <li>Конус: V = 1/3 \xb7 πR\xb2h</li>
            <li>Шар: V = 4/3 \xb7 πR\xb3</li>
            <li>Шаровой сегмент: V = πh\xb2(R - h/3)</li>
          </ul>`,examples:["Найди объём конуса","Объём шара радиуса 2","Объём правильной пирамиды"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Площади поверхностей",description:"Вычисление площадей поверхностей тел",theory:`<h3>Площади поверхностей</h3>
          <h4>Многогранники:</h4>
          <ul>
            <li>Призма: S = 2Sосн + Sбок</li>
            <li>Пирамида: S = Sосн + Sбок</li>
          </ul>
          <h4>Тела вращения:</h4>
          <ul>
            <li>Цилиндр: S = 2πR(R + h)</li>
            <li>Конус: S = πR(R + l), где l — образующая</li>
            <li>Шар: S = 4πR\xb2</li>
          </ul>
          <h4>Боковая поверхность:</h4>
          <ul>
            <li>Цилиндр: Sбок = 2πRh</li>
            <li>Конус: Sбок = πRl</li>
          </ul>`,examples:["Площадь поверхности цилиндра","S конуса с R=3, l=5","S шара радиуса 4"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Векторы в пространстве",description:"Координаты и действия с векторами",theory:`<h3>Векторы в пространстве</h3>
          <p>Вектор a⃗ = (x, y, z)</p>
          <h4>Формулы:</h4>
          <ul>
            <li>Длина вектора: |a⃗| = √(x\xb2 + y\xb2 + z\xb2)</li>
            <li>Сложение: a⃗ + b⃗ = (x₁+x₂, y₁+y₂, z₁+z₂)</li>
            <li>Скалярное произведение: a⃗\xb7b⃗ = x₁x₂ + y₁y₂ + z₁z₂</li>
            <li>Угол между векторами: cos(α) = (a⃗\xb7b⃗)/(|a⃗||b⃗|)</li>
          </ul>
          <h4>Уравнение плоскости:</h4>
          <p>Ax + By + Cz + D = 0</p>
          <p>Нормальный вектор: n⃗ = (A, B, C)</p>`,examples:["Найди длину вектора","Скалярное произведение","Уравнение плоскости"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Объём шара радиуса 3 равен:",options:["12π","27π","36π","36π"],correctAnswer:2,explanation:"V = 4/3 · πR³ = 4/3 · π · 27 = 36π.",difficulty:"medium",points:15},{id:"q2",question:"Площадь поверхности шара радиуса 2:",options:["4π","8π","16π","32π"],correctAnswer:2,explanation:"S = 4πR² = 4π · 4 = 16π.",difficulty:"easy",points:10}]},{id:"russian11",title:"Русский язык",icon:(0,u.jsx)(lR,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Сочинение ЕГЭ, нормы языка",topics:[{id:"t1",title:"Сочинение ЕГЭ",description:"Структура и написание сочинения",theory:`<h3>Сочинение по русскому языку (задание 27)</h3>
          <h4>Структура сочинения:</h4>
          <ol>
            <li><strong>Вступление</strong> — формулировка проблемы</li>
            <li><strong>Комментарий</strong> — 2 примера-иллюстрации из текста</li>
            <li><strong>Позиция автора</strong> — что хотел сказать автор</li>
            <li><strong>Своя позиция</strong> — согласие/несогласие</li>
            <li><strong>Аргументация</strong> — обоснование своей позиции</li>
            <li><strong>Заключение</strong> — вывод</li>
          </ol>
          <h4>Критерии оценки:</h4>
          <p>Максимум 24 балла. Важно: К1 (проблема) + К2-К4 (комментарий) обязательны.</p>`,examples:["Сформулируй проблему","Напиши комментарий","Аргументируй позицию"],completed:!1,difficulty:"hard",estimatedTime:50},{id:"t2",title:"Орфография в ЕГЭ",description:"Правописание корней, приставок, суффиксов",theory:`<h3>Орфография</h3>
          <h4>Корни с чередованием:</h4>
          <ul>
            <li>-раст-/-ращ-/-рос- (перед ст, щ — а)</li>
            <li>-лаг-/-лож- (перед ж — о)</li>
            <li>-кас-/-кос- (перед а — с)</li>
            <li>-бер-/-бир- (перед а — и)</li>
          </ul>
          <h4>Приставки:</h4>
          <ul>
            <li>пре-/при- (пре = очень, пере; при = приближение, присоединение)</li>
            <li>раз-/рас- (перед глухими — с)</li>
          </ul>
          <h4>Н/НН:</h4>
          <p>В прилагательных: -Н- (кожаный), -НН- (клюквенный, соломенный)</p>`,examples:["Вставь пропущенные буквы","Правило Н/НН","Чередующиеся корни"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Пунктуация в ЕГЭ",description:"Знаки препинания в сложных предложениях",theory:`<h3>Пунктуация</h3>
          <h4>Запятая ставится:</h4>
          <ul>
            <li>Между частями ССП</li>
            <li>Между частями СПП</li>
            <li>При причастных оборотах после определяемого слова</li>
            <li>При деепричастных оборотах</li>
            <li>При вводных словах</li>
          </ul>
          <h4>Двоеточие:</h4>
          <p>В бессоюзном предложении (причина, пояснение, дополнение)</p>
          <h4>Тире:</h4>
          <p>В бессоюзном предложении (противопоставление, следствие)</p>`,examples:["Расставь знаки препинания","Объясни постановку","Бессоюзные предложения"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Какое слово пишется с НН?",options:["серебря...ый","глиня...ый","торжестве...ый","птичий"],correctAnswer:2,explanation:"Торжественный — пишется НН (образовано от основы на -н- + суффикс -енн-).",difficulty:"medium",points:15},{id:"q2",question:"В каком случае нужна запятая?",options:["читал_и писал","быстро_но уверенно","идти_не зная куда","очень_красивый"],correctAnswer:2,explanation:'Запятая нужна перед деепричастным оборотом "не зная куда".',difficulty:"medium",points:15}]},{id:"literature11",title:"Литература",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Литература XX века, сочинение",topics:[{id:"t1",title:"М.А. Булгаков",description:"Мастер и Маргарита",theory:`<h3>М.А. Булгаков (1891-1940)</h3>
          <h4>Роман "Мастер и Маргарита" (1928-1940):</h4>
          <ul>
            <li>Два временных пласта: Москва 1930-х и Ершалаим</li>
            <li>Три сюжетные линии: Воланд, Мастер, Понтий Пилат</li>
          </ul>
          <h4>Образы:</h4>
          <ul>
            <li><strong>Воланд</strong> — дьявол, носитель зла, карающий пошлость</li>
            <li><strong>Мастер</strong> — творец, нашедший истину</li>
            <li><strong>Маргарита</strong> — любовь, ради которой можно на всё</li>
            <li><strong>Понтий Пилат</strong> — трусость как главный грех</li>
          </ul>
          <h4>Темы:</h4>
          <p>Добро и зло, творчество, любовь, ответственность</p>`,examples:["Образ Воланда","Тема добра и зла","Евангельская линия"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t2",title:"М.А. Шолохов",description:"Тихий Дон",theory:`<h3>М.А. Шолохов (1905-1984)</h3>
          <h4>Роман-эпопея "Тихий Дон" (1925-1940):</h4>
          <ul>
            <li>Нобелевская премия 1965 года</li>
            <li>Эпоха: Первая мировая, революция, гражданская война</li>
          </ul>
          <h4>Григорий Мелехов:</h4>
          <ul>
            <li>Главный герой, казак</li>
            <li>Между красными и белыми</li>
            <li>Трагедия человека в эпоху перемен</li>
          </ul>
          <h4>Любовь:</h4>
          <p>Аксинья — страстная любовь, Наталья — жена, мать детей</p>
          <h4>Темы:</h4>
          <p>Судьба народа, война, любовь, трагедия выбора</p>`,examples:["Образ Григория Мелехова","Женские образы","Тема гражданской войны"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t3",title:"А.И. Солженицын",description:"Один день Ивана Денисовича",theory:`<h3>А.И. Солженицын (1918-2008)</h3>
          <h4>Рассказ "Один день Ивана Денисовича" (1962):</h4>
          <ul>
            <li>Первое произведение о ГУЛАГе в СССР</li>
            <li>Опубликован в "Новом мире" по разрешению Хрущёва</li>
          </ul>
          <h4>Иван Денисович Шухов:</h4>
          <ul>
            <li>Простой крестьянин, солдат</li>
            <li>"Попал" в лагерь по обвинению в шпионаже</li>
            <li>Сохраняет человеческое достоинство</li>
          </ul>
          <h4>Тема:</h4>
          <p>Сохранение личности в нечеловеческих условиях</p>
          <h4>Смысл финала:</h4>
          <p>"Прошёл день, ничем не омрачённый, почти счастливый."</p>`,examples:["Образ Шухова","Лагерная жизнь","Нравственный выбор"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:'Кто автор романа "Мастер и Маргарита"?',options:["Шолохов","Булгаков","Солженицын","Пастернак"],correctAnswer:1,explanation:'"Мастер и Маргарита" — роман Михаила Афанасьевича Булгакова, написанный в 1928-1940 годах.',difficulty:"easy",points:10},{id:"q2",question:'Как зовут главного героя "Тихого Дона"?',options:["Андрей Болконский","Григорий Мелехов","Пётр Гринёв","Евгений Онегин"],correctAnswer:1,explanation:'Григорий Пантелеевич Мелехов — главный герой романа-эпопеи М.А. Шолохова "Тихий Дон".',difficulty:"easy",points:10},{id:"q3",question:'О чём рассказывает "Один день Ивана Денисовича"?',options:["О войне","О колхозе","О жизни в лагере","О городе"],correctAnswer:2,explanation:"Рассказ Солженицына описывает один день заключённого в сталинском лагере.",difficulty:"easy",points:10}]},{id:"physics11",title:"Физика",icon:(0,u.jsx)(lX,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Электродинамика, квантовая физика",topics:[{id:"t1",title:"Электромагнитная индукция",description:"Закон Фарадея, правило Ленца",theory:`<h3>Электромагнитная индукция</h3>
          <h4>Закон Фарадея:</h4>
          <p>ЭДС индукции: ε = -ΔΦ/Δt</p>
          <p>Магнитный поток: Φ = B\xb7S\xb7cos(α)</p>
          <h4>Правило Ленца:</h4>
          <p>Индукционный ток направлен так, чтобы противодействовать причине его возникновения.</p>
          <h4>Самоиндукция:</h4>
          <p>ЭДС самоиндукции: ε = -L\xb7ΔI/Δt</p>
          <p>L — индуктивность, [Гн]</p>
          <h4>Энергия магнитного поля:</h4>
          <p>W = LI\xb2/2</p>`,examples:["Найди ЭДС индукции","Индуктивность катушки","Энергия магнитного поля"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Электромагнитные колебания",description:"Колебательный контур",theory:`<h3>Колебательный контур</h3>
          <p>Цепь из катушки и конденсатора.</p>
          <h4>Формула Томсона:</h4>
          <p>T = 2π√(LC) — период свободных колебаний</p>
          <h4>Частота:</h4>
          <p>ν = 1/T = 1/(2π√(LC))</p>
          <h4>Энергия:</h4>
          <ul>
            <li>Электрическая: Wэ = q\xb2/2C</li>
            <li>Магнитная: Wм = LI\xb2/2</li>
            <li>Полная: W = q\xb2/2C + LI\xb2/2 = const</li>
          </ul>`,examples:["Период колебаний контура","Частота по L и C","Энергия контура"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Квантовая физика",description:"Фотоэффект, строение атома",theory:`<h3>Фотоэффект</h3>
          <h4>Законы Столетова:</h4>
          <ul>
            <li>Фототок насыщения пропорционален интенсивности света</li>
            <li>Максимальная кинетическая энергия ~ частоте света</li>
          </ul>
          <h4>Уравнение Эйнштейна:</h4>
          <p>hν = Aвых + Ek</p>
          <p>h = 6.63\xb710⁻\xb3⁴ Дж\xb7с — постоянная Планка</p>
          <h4>Красная граница:</h4>
          <p>νmin = Aвых/h</p>
          <h3>Строение атома:</h3>
          <ul>
            <li>Постулаты Бора</li>
            <li>E = hν — энергия кванта</li>
          </ul>`,examples:["Работа выхода","Кинетическая энергия фотоэлектронов","Красная граница"],completed:!1,difficulty:"hard",estimatedTime:40}],quiz:[{id:"q1",question:"Формула закона электромагнитной индукции:",options:["ε = B·S","ε = -ΔΦ/Δt","ε = L·I","ε = q/C"],correctAnswer:1,explanation:"ЭДС индукции равна скорости изменения магнитного потока со знаком минус: ε = -ΔΦ/Δt.",difficulty:"medium",points:15},{id:"q2",question:"Период колебаний в контуре с L=1 Гн и C=1 мкФ:",options:["2π·10⁻³ с","2π·10⁻⁶ с","2π с","π с"],correctAnswer:0,explanation:"T = 2π√(LC) = 2π√(1·10⁻⁶) = 2π·10⁻³ с ≈ 6.28 мс.",difficulty:"medium",points:15},{id:"q3",question:"Что такое фотоэффект?",options:["Испускание электронов веществом под действием света","Отражение света","Преломление света","Поляризация света"],correctAnswer:0,explanation:"Фотоэффект — испускание электронов веществом под действием электромагнитного излучения (света).",difficulty:"easy",points:10}]},{id:"chemistry11",title:"Химия",icon:(0,u.jsx)(lU,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Общая химия, биохимия",topics:[{id:"t1",title:"Окислительно-восстановительные реакции",description:"ОВР и электронный баланс",theory:`<h3>ОВР</h3>
          <p>Реакции с изменением степеней окисления.</p>
          <h4>Степень окисления:</h4>
          <ul>
            <li>Элемент в простом веществе: 0</li>
            <li>H: +1 (в металлогидридах -1)</li>
            <li>O: -2 (в пероксидах -1)</li>
          </ul>
          <h4>Окислитель:</h4>
          <p>Принимает электроны, понижает с.о.</p>
          <h4>Восстановитель:</h4>
          <p>Отдаёт электроны, повышает с.о.</p>
          <h4>Метод электронного баланса:</h4>
          <ol>
            <li>Определить с.о. элементов</li>
            <li>Составить электронные уравнения</li>
            <li>Найти НОК и коэффициенты</li>
          </ol>`,examples:["Расставь коэффициенты в ОВР","Определи окислитель","Электронный баланс"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"Гидролиз солей",description:"Взаимодействие солей с водой",theory:`<h3>Гидролиз солей</h3>
          <p>Взаимодействие ионов соли с водой.</p>
          <h4>Типы гидролиза:</h4>
          <ul>
            <li><strong>По катиону:</strong> соль слабого основания + сильной кислоты (NH₄Cl)</li>
            <li><strong>По аниону:</strong> соль сильного основания + слабой кислоты (CH₃COONa)</li>
            <li><strong>По катиону и аниону:</strong> соль слабого основания + слабой кислоты</li>
            <li><strong>Не идёт:</strong> соль сильного основания + сильной кислоты (NaCl)</li>
          </ul>
          <h4>Среда раствора:</h4>
          <ul>
            <li>pH < 7 — кислая</li>
            <li>pH = 7 — нейтральная</li>
            <li>pH > 7 — щелочная</li>
          </ul>`,examples:["Определи тип гидролиза","Реакция гидролиза","pH раствора соли"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Химия и жизнь",description:"Биологически важные вещества",theory:`<h3>Биохимия</h3>
          <h4>Белки:</h4>
          <ul>
            <li>Полимеры аминокислот</li>
            <li>Пептидная связь: -CO-NH-</li>
            <li>Функции: каталитическая, структурная, транспортная</li>
          </ul>
          <h4>Углеводы:</h4>
          <ul>
            <li>Моносахариды: глюкоза C₆H₁₂O₆</li>
            <li>Дисахариды: сахароза, мальтоза</li>
            <li>Полисахариды: крахмал, целлюлоза</li>
          </ul>
          <h4>Жиры:</h4>
          <p>Сложные эфиры глицерина и жирных кислот</p>
          <h4>Нуклеиновые кислоты:</h4>
          <p>ДНК, РНК — носители генетической информации</p>`,examples:["Строение белков","Реакции глюкозы","Гидролиз жиров"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Степень окисления азота в HNO₃:",options:["+3","+4","+5","+2"],correctAnswer:2,explanation:"HNO₃: H(+1), O(-2)·3 = -6, значит N = +5. Проверка: +1 + 5 + (-6) = 0.",difficulty:"medium",points:15},{id:"q2",question:"Какая соль подвергается гидролизу по аниону?",options:["NaCl","K₂SO₄","CH₃COONa","NH₄Cl"],correctAnswer:2,explanation:"CH₃COONa — ацетат натрия. Ацетат-ион связывает H⁺, среда щелочная.",difficulty:"medium",points:15}]},{id:"biology11",title:"Биология",icon:(0,u.jsx)(lH,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Общая биология, экология",topics:[{id:"t1",title:"Наследственность и изменчивость",description:"Генетика и мутации",theory:`<h3>Изменчивость</h3>
          <h4>Виды изменчивости:</h4>
          <ul>
            <li><strong>Модификационная:</strong> ненаследственная, адаптация к условиям</li>
            <li><strong>Мутационная:</strong> наследственная, случайная</li>
            <li><strong>Комбинативная:</strong> перекомбинация генов</li>
          </ul>
          <h4>Мутации:</h4>
          <ul>
            <li>Генные — изменение нуклеотидов</li>
            <li>Хромосомные — изменение структуры хромосом</li>
            <li>Геномные — изменение числа хромосом</li>
          </ul>
          <h4>Мутагены:</h4>
          <p>Физические (радиация), химические, биологические</p>`,examples:["Виды мутаций","Примеры модификаций","Мутагенные факторы"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Селекция",description:"Выведение новых пород и сортов",theory:`<h3>Селекция</h3>
          <p>Наука о выведении новых пород, сортов, штаммов.</p>
          <h4>Методы селекции:</h4>
          <ul>
            <li>Отбор (массовый, индивидуальный)</li>
            <li>Гибридизация (инбридинг, аутбридинг)</li>
            <li>Полиплоидия</li>
            <li>Мутагенез</li>
          </ul>
          <h4>Достижения:</h4>
          <ul>
            <li>Н.И. Вавилов — центры происхождения культурных растений</li>
            <li>Гетерозис — гибридная сила</li>
          </ul>
          <h4>Биотехнология:</h4>
          <p>Генная инженерия, клонирование, получение препаратов</p>`,examples:["Методы селекции","Центры Вавилова","Биотехнология"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Экология",description:"Взаимодействие организмов и среды",theory:`<h3>Экология</h3>
          <h4>Уровни организации:</h4>
          <ul>
            <li>Организм → Популяция → Вид → Биоценоз → Биосфера</li>
          </ul>
          <h4>Экологические факторы:</h4>
          <ul>
            <li>Абиотические (температура, свет, вода)</li>
            <li>Биотические (взаимодействие организмов)</li>
            <li>Антропогенные (влияние человека)</li>
          </ul>
          <h4>Цепи питания:</h4>
          <p>Продуценты → Консументы I порядка → Консументы II порядка → Редуценты</p>
          <h4>Правило 10%:</h4>
          <p>Переход энергии на следующий уровень ~10%</p>`,examples:["Экологические пирамиды","Цепи питания","Охрана природы"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Какой вид изменчивости наследуется?",options:["Модификационная","Мутационная","Фенотипическая","Онтогенетическая"],correctAnswer:1,explanation:"Мутационная изменчивость связана с изменением генетического материала и передаётся потомству.",difficulty:"medium",points:15},{id:"q2",question:"Кто открыл центры происхождения культурных растений?",options:["Менделеев","Дарвин","Вавилов","Мичурин"],correctAnswer:2,explanation:"Н.И. Вавилов выделил 7 центров происхождения культурных растений.",difficulty:"easy",points:10}]},{id:"social11",title:"Обществознание",icon:(0,u.jsx)(lY,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Право, экономика, социология",topics:[{id:"t1",title:"Конституционное право",description:"Основы конституционного строя РФ",theory:`<h3>Конституция РФ (1993)</h3>
          <h4>Основы конституционного строя:</h4>
          <ul>
            <li>Россия — демократическое федеративное правовое государство</li>
            <li>Республиканская форма правления</li>
            <li>Человек, его права и свободы — высшая ценность</li>
            <li>Светское государство</li>
          </ul>
          <h4>Федеративное устройство:</h4>
          <ul>
            <li>Республики, края, области, города федерального значения</li>
            <li>Автономная область, автономные округа</li>
          </ul>
          <h4>Президент РФ:</h4>
          <p>Глава государства, срок 6 лет, не более 2 сроков подряд</p>`,examples:["Структура Конституции","Полномочия Президента","Федеральные округа"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Гражданское право",description:"Гражданский кодекс РФ",theory:`<h3>Гражданское право</h3>
          <h4>Гражданская правоспособность:</h4>
          <p>Способность иметь гражданские права и обязанности. Возникает с рождения.</p>
          <h4>Дееспособность:</h4>
          <ul>
            <li>Полная — с 18 лет</li>
            <li>Частичная — с 14 лет</li>
            <li>До 14 лет — недееспособные (от имени — родители)</li>
          </ul>
          <h4>Сделки:</h4>
          <p>Действия граждан и юр. лиц, направленные на установление, изменение или прекращение прав.</p>
          <h4>Договоры:</h4>
          <p>Купля-продажа, аренда, дарение, наследование</p>`,examples:["Виды договоров","Дееспособность","Наследование"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t3",title:"Экономика",description:"Экономические системы, рынок",theory:`<h3>Экономика</h3>
          <h4>Факторы производства:</h4>
          <ul>
            <li>Труд</li>
            <li>Земля</li>
            <li>Капитал</li>
            <li>Предпринимательство</li>
          </ul>
          <h4>Рыночная экономика:</h4>
          <ul>
            <li>Спрос и предложение</li>
            <li>Рыночное равновесие</li>
            <li>Конкуренция</li>
          </ul>
          <h4>Банковская система:</h4>
          <ul>
            <li>ЦБ РФ — эмиссия денег</li>
            <li>Коммерческие банки — кредитование</li>
          </ul>
          <h4>Инфляция:</h4>
          <p>Обесценивание денег, рост цен</p>`,examples:["Закон спроса","Виды безработицы","Налоги"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Когда была принята действующая Конституция РФ?",options:["1991","1993","2000","2008"],correctAnswer:1,explanation:"Конституция РФ принята всенародным голосованием 12 декабря 1993 года.",difficulty:"easy",points:10},{id:"q2",question:"С какого возраста наступает полная дееспособность?",options:["С 14 лет","С 16 лет","С 18 лет","С 21 года"],correctAnswer:2,explanation:"Полная гражданская дееспособность наступает с 18 лет (совершеннолетие).",difficulty:"easy",points:10},{id:"q3",question:"Что такое инфляция?",options:["Рост зарплат","Обесценивание денег","Снижение цен","Безработица"],correctAnswer:1,explanation:"Инфляция — устойчивое повышение общего уровня цен, обесценивание денег.",difficulty:"easy",points:10}]},{id:"history11",title:"История",icon:(0,u.jsx)(lm,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"История XX-XXI веков",topics:[{id:"t1",title:"Великая Отечественная война",description:"1941-1945 годы",theory:`<h3>Великая Отечественная война (1941-1945)</h3>
          <h4>Периодизация:</h4>
          <ul>
            <li>22 июня 1941 — начало войны</li>
            <li>1941-1942 — оборонительный период</li>
            <li>Сталинградская битва (1942-1943) — перелом</li>
            <li>Курская битва (1943) — коренной перелом</li>
            <li>9 мая 1945 — Победа</li>
          </ul>
          <h4>Герои:</h4>
          <ul>
            <li>Г.К. Жуков — маршал Победы</li>
            <li>Зоя Космодемьянская — партизанка</li>
            <li>Александр Матросов — подвиг самопожертвования</li>
          </ul>
          <h4>Итоги:</h4>
          <p>27 млн погибших, разрушенные города, Победа над фашизмом</p>`,examples:["Битва за Москву","Блокада Ленинграда","Освобождение Европы"],completed:!1,difficulty:"medium",estimatedTime:45},{id:"t2",title:"СССР в 1953-1991",description:"Оттепель, застой, перестройка",theory:`<h3>История СССР после Сталина</h3>
          <h4>Н.С. Хрущёв (1953-1964):</h4>
          <ul>
            <li>XX съезд КПСС (1956) — развенчание культа личности</li>
            <li>Освоение целины</li>
            <li>Полёт Ю.А. Гагарина (1961)</li>
          </ul>
          <h4>Л.И. Брежнев (1964-1982):</h4>
          <ul>
            <li>"Застой" в экономике</li>
            <li>Ввод войск в Афганистан (1979)</li>
          </ul>
          <h4>М.С. Горбачёв (1985-1991):</h4>
          <ul>
            <li>Перестройка, гласность</li>
            <li>Распад СССР (декабрь 1991)</li>
          </ul>`,examples:["XX съезд КПСС","Гагарин","Распад СССР"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Современная Россия",description:"РФ с 1991 года",theory:`<h3>Российская Федерация</h3>
          <h4>Б.Н. Ельцин (1991-1999):</h4>
          <ul>
            <li>Распад СССР, становление независимой России</li>
            <li>Конституция 1993 года</li>
            <li>Экономические реформы ("шоковая терапия")</li>
          </ul>
          <h4>В.В. Путин (с 2000):</h4>
          <ul>
            <li>Укрепление вертикали власти</li>
            <li>Экономический рост</li>
            <li>Воссоединение с Крымом (2014)</li>
          </ul>
          <h4>Важные события:</h4>
          <ul>
            <li>Олимпиада в Сочи (2014)</li>
            <li>Специальная военная операция (с 2022)</li>
          </ul>`,examples:["Экономические реформы","Внешняя политика","Достижения России"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Когда началась Великая Отечественная война?",options:["22 июня 1940","22 июня 1941","1 сентября 1939","9 мая 1945"],correctAnswer:1,explanation:"22 июня 1941 года Германия напала на СССР — начало Великой Отечественной войны.",difficulty:"easy",points:10},{id:"q2",question:"Кто был первым космонавтом?",options:["Armstrong","Гагарин","Титов","Леонов"],correctAnswer:1,explanation:"Юрий Алексеевич Гагарин — первый человек в космосе, 12 апреля 1961 года.",difficulty:"easy",points:10},{id:"q3",question:"Когда был принят референдумом текст Конституции РФ?",options:["1991","1993","1996","2000"],correctAnswer:1,explanation:"Конституция РФ принята всенародным голосованием 12 декабря 1993 года.",difficulty:"easy",points:10}]},{id:"informatics11",title:"Информатика",icon:(0,u.jsx)(lJ,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программирование, ЕГЭ",topics:[{id:"t1",title:"Алгоритмы и структуры данных",description:"Сортировка, поиск, рекурсия",theory:`<h3>Алгоритмы</h3>
          <h4>Сортировки:</h4>
          <ul>
            <li>Пузырьком: O(n\xb2)</li>
            <li>Быстрая (QuickSort): O(n log n)</li>
            <li>Слиянием (MergeSort): O(n log n)</li>
          </ul>
          <h4>Поиск:</h4>
          <ul>
            <li>Линейный: O(n)</li>
            <li>Бинарный: O(log n) — только в отсортированном массиве</li>
          </ul>
          <h4>Структуры данных:</h4>
          <ul>
            <li>Массив — индексированный доступ O(1)</li>
            <li>Список — вставка/удаление O(1)</li>
            <li>Стек — LIFO (Last In, First Out)</li>
            <li>Очередь — FIFO (First In, First Out)</li>
          </ul>`,examples:["Реализуй сортировку","Бинарный поиск","Рекурсивный алгоритм"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t2",title:"Динамическое программирование",description:"Решение задач оптимизации",theory:`<h3>Динамическое программирование</h3>
          <p>Метод решения задач путём разбиения на подзадачи.</p>
          <h4>Принципы:</h4>
          <ul>
            <li>Оптимальная подструктура</li>
            <li>Перекрывающиеся подзадачи</li>
            <li>Запоминание результатов (мемоизация)</li>
          </ul>
          <h4>Примеры задач:</h4>
          <ul>
            <li>Числа Фибоначчи</li>
            <li>Задача о рюкзаке</li>
            <li>Наибольшая общая подпоследовательность</li>
            <li>Путь с минимальной стоимостью</li>
          </ul>
          <h4>Реализация:</h4>
          <p>Сверху вниз (рекурсия + мемоизация) или снизу вверх (итерация)</p>`,examples:["Числа Фибоначчи","Задача о рюкзаке","Наибольшая сумма пути"],completed:!1,difficulty:"hard",estimatedTime:50},{id:"t3",title:"Теория графов",description:"Графы и алгоритмы на графах",theory:`<h3>Графы</h3>
          <p>Граф G = (V, E) — множество вершин и рёбер.</p>
          <h4>Виды графов:</h4>
          <ul>
            <li>Ориентированный / неориентированный</li>
            <li>Взвешенный / невзвешенный</li>
            <li>Связный / несвязный</li>
          </ul>
          <h4>Способы хранения:</h4>
          <ul>
            <li>Матрица смежности: O(V\xb2)</li>
            <li>Список смежности: O(V + E)</li>
          </ul>
          <h4>Алгоритмы:</h4>
          <ul>
            <li>Обход в ширину (BFS) — кратчайший путь</li>
            <li>Обход в глубину (DFS) — связность</li>
            <li>Дейкстра — кратчайший путь с весами</li>
          </ul>`,examples:["BFS поиск пути","DFS обход","Кратчайший путь Дейкстры"],completed:!1,difficulty:"hard",estimatedTime:45}],quiz:[{id:"q1",question:"Какова сложность бинарного поиска?",options:["O(n)","O(n²)","O(log n)","O(1)"],correctAnswer:2,explanation:"Бинарный поиск делит массив пополам на каждом шаге, сложность O(log n).",difficulty:"medium",points:15},{id:"q2",question:"Какой принцип работы стека?",options:["FIFO","LIFO","LILO","FILO"],correctAnswer:1,explanation:"LIFO — Last In, First Out. Последний вошёл — первый вышел.",difficulty:"easy",points:10},{id:"q3",question:"Что такое граф?",options:["Упорядоченный набор","Множество вершин и рёбер","Таблица данных","Функция"],correctAnswer:1,explanation:"Граф — это множество вершин (V) и рёбер (E), соединяющих эти вершины.",difficulty:"easy",points:10}]},{id:"english11",title:"Иностранный язык",icon:(0,u.jsx)(lG,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Английский язык, ЕГЭ",topics:[{id:"t1",title:"Грамматика: времена",description:"Система времён английского языка",theory:`<h3>Времена в английском языке</h3>
          <h4>Present:</h4>
          <ul>
            <li>Simple: I work (регулярность)</li>
            <li>Continuous: I am working (в процессе)</li>
            <li>Perfect: I have worked (результат)</li>
            <li>Perfect Continuous: I have been working (длительность + результат)</li>
          </ul>
          <h4>Past:</h4>
          <ul>
            <li>Simple: I worked (факт в прошлом)</li>
            <li>Continuous: I was working (процесс в прошлом)</li>
            <li>Perfect: I had worked (предпрошедшее)</li>
          </ul>
          <h4>Future:</h4>
          <ul>
            <li>Simple: I will work</li>
            <li>Continuous: I will be working</li>
            <li>Perfect: I will have worked</li>
          </ul>`,examples:["Present Perfect vs Past Simple","Выбери правильное время","Переведи предложение"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"Conditionals",description:"Условные предложения",theory:`<h3>Условные предложения</h3>
          <h4>Type 0 (General):</h4>
          <p>If + Present, Present (факты)</p>
          <p>If you heat ice, it melts.</p>
          <h4>Type 1 (Real):</h4>
          <p>If + Present, will + V (реальное условие)</p>
          <p>If it rains, I will stay at home.</p>
          <h4>Type 2 (Unreal present):</h4>
          <p>If + Past, would + V (нереальное настоящее)</p>
          <p>If I had money, I would buy a car.</p>
          <h4>Type 3 (Unreal past):</h4>
          <p>If + Past Perfect, would have + V3 (сожаление о прошлом)</p>
          <p>If I had studied, I would have passed.</p>`,examples:["Определи тип условного","Раскрой скобки","Переделай в Type 3"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"ЕГЭ: Speaking и Writing",description:"Устная и письменная часть",theory:`<h3>Устная часть (Speaking)</h3>
          <h4>Задания:</h4>
          <ul>
            <li>Task 1 — чтение текста вслух</li>
            <li>Task 2 — описание изображения</li>
            <li>Task 3 — ответы на вопросы</li>
            <li>Task 4 — сравнение фотографий</li>
          </ul>
          <h3>Письменная часть (Writing)</h3>
          <h4>Задание 37 (Email):</h4>
          <ul>
            <li>Ответ на письмо друга</li>
            <li>3 вопроса в ответ</li>
            <li>Объём: 100-140 слов</li>
          </ul>
          <h4>Задание 38 (Essay):</h4>
          <ul>
            <li>Эссе-мнение</li>
            <li>Структура: вступление, аргументы, заключение</li>
            <li>Объём: 200-250 слов</li>
          </ul>`,examples:["Напиши email",'Эссе "За и против"',"Опиши фото"],completed:!1,difficulty:"medium",estimatedTime:45}],quiz:[{id:"q1",question:'Выбери правильный вариант: "I ___ to Paris last year."',options:["have been","was","had been","am"],correctAnswer:1,explanation:"Past Simple используется для действий в прошлом с указанием времени (last year).",difficulty:"medium",points:15},{id:"q2",question:'Какой тип условного: "If I were rich, I would travel."',options:["Type 0","Type 1","Type 2","Type 3"],correctAnswer:2,explanation:"Type 2 — нереальное условие в настоящем. If + Past, would + V.",difficulty:"medium",points:15}]},{id:"ege11",title:"Подготовка к ЕГЭ",icon:(0,u.jsx)(lf,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Финальная подготовка к экзаменам",topics:[{id:"t1",title:"Стратегии сдачи ЕГЭ",description:"Как максимизировать баллы",theory:`<h3>Подготовка к ЕГЭ</h3>
          <h4>За месяц до экзамена:</h4>
          <ul>
            <li>Решай полные варианты</li>
            <li>Учи формулы и определения</li>
            <li>Анализируй ошибки</li>
            <li>Следи за режимом сна</li>
          </ul>
          <h4>В день экзамена:</h4>
          <ul>
            <li>Приди заранее</li>
            <li>Возьми паспорт и пропуск</li>
            <li>Начни с лёгких заданий</li>
            <li>Следи за временем</li>
            <li>Проверь ответы перед сдачей</li>
          </ul>
          <h4>Распределение времени:</h4>
          <p>Часть 1 (тестовая): 30-40% времени</p>
          <p>Часть 2 (развёрнутая): 60-70% времени</p>`,examples:["Пробный ЕГЭ","Тайминг по предметам","Работа над ошибками"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"t2",title:"Поступление в вузы",description:"Выбор вуза и специальности",theory:`<h3>Поступление</h3>
          <h4>Этапы:</h4>
          <ol>
            <li>Выбор направления и вуза</li>
            <li>Подача документов (до 1 августа)</li>
            <li>Отслеживание конкурсных списков</li>
            <li>Подача согласия на зачисление</li>
          </ol>
          <h4>Способы подачи:</h4>
          <ul>
            <li>Лично в приёмной комиссии</li>
            <li>Через Госуслуги</li>
            <li>Почтой России</li>
          </ul>
          <h4>Документы:</h4>
          <ul>
            <li>Паспорт</li>
            <li>Аттестат</li>
            <li>СНИЛС</li>
            <li>Фотографии</li>
          </ul>
          <h4>Особые права:</h4>
          <p>Целевое обучение, олимпиады, квоты</p>`,examples:["Калькулятор баллов","Список вузов","Проходные баллы"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"t3",title:"Выбор профессии",description:"Профориентация",theory:`<h3>Выбор профессии</h3>
          <h4>Критерии выбора:</h4>
          <ul>
            <li>Интересы и способности</li>
            <li>Востребованность профессии</li>
            <li>Уровень зарплаты</li>
            <li>Возможности карьерного роста</li>
          </ul>
          <h4>Типы профессий:</h4>
          <ul>
            <li>Человек — природа</li>
            <li>Человек — техника</li>
            <li>Человек — человек</li>
            <li>Человек — знаковая система</li>
            <li>Человек — художественный образ</li>
          </ul>
          <h4>Профессии будущего:</h4>
          <p>IT, медицина, экология, робототехника</p>`,examples:["Тест на профориентацию","Профессии будущего","Востребованные специальности"],completed:!1,difficulty:"easy",estimatedTime:25}],quiz:[{id:"q1",question:"До какого числа подаются документы в вуз?",options:["До 1 июля","До 1 августа","До 15 августа","До 1 сентября"],correctAnswer:1,explanation:"Документы в вузы принимаются до 1 августа (очная форма обучения).",difficulty:"easy",points:10},{id:"q2",question:"Что нужно взять на ЕГЭ обязательно?",options:["Телефон","Паспорт","Книги","Ноутбук"],correctAnswer:1,explanation:"Паспорт — обязательный документ для допуска к ЕГЭ. Также нужен пропуск.",difficulty:"easy",points:10}]}]}],l5=[{id:"first_step",title:"Первый шаг",description:"Изучите первую тему",icon:(0,u.jsx)(ly,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_1_topic",points:50,rarity:"common"},{id:"explorer",title:"Исследователь",description:"Изучите 10 тем",icon:(0,u.jsx)(lg,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_10_topics",points:100,rarity:"common"},{id:"scholar",title:"Учёный",description:"Изучите 50 тем",icon:(0,u.jsx)(lm,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_50_topics",points:300,rarity:"rare"},{id:"expert",title:"Эксперт",description:"Изучите 100 тем",icon:(0,u.jsx)(lf,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_100_topics",points:500,rarity:"rare"},{id:"quiz_master",title:"Мастер тестов",description:"Пройдите 5 квизов",icon:(0,u.jsx)(lx,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_5_quizzes",points:150,rarity:"common"},{id:"perfect_score",title:"Идеальный результат",description:"Получите 100% в квизе",icon:(0,u.jsx)(lT,{className:"w-6 h-6"}),unlocked:!1,condition:"perfect_quiz",points:200,rarity:"rare"},{id:"streak_3",title:"3 дня подряд",description:"Занимайтесь 3 дня подряд",icon:(0,u.jsx)(l_,{className:"w-6 h-6"}),unlocked:!1,condition:"3_day_streak",points:100,rarity:"common"},{id:"streak_7",title:"Неделя знаний",description:"Занимайтесь 7 дней подряд",icon:(0,u.jsx)(lw,{className:"w-6 h-6"}),unlocked:!1,condition:"7_day_streak",points:300,rarity:"rare"},{id:"all_classes",title:"Все классы",description:"Откройте все классы",icon:(0,u.jsx)(lC,{className:"w-6 h-6"}),unlocked:!1,condition:"visit_all_classes",points:250,rarity:"epic"},{id:"genius",title:"Гений",description:"Изучите все темы",icon:(0,u.jsx)(lA,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_all",points:1e3,rarity:"legendary"}],l2=[{id:"daily_topics",title:"Изучить темы",description:"Изучите 3 темы сегодня",target:3,progress:0,reward:30,completed:!1,type:"topics"},{id:"daily_quiz",title:"Пройти тест",description:"Пройдите 1 квиз сегодня",target:1,progress:0,reward:25,completed:!1,type:"quizzes"},{id:"daily_points",title:"Набрать очки",description:"Наберите 50 очков сегодня",target:50,progress:0,reward:20,completed:!1,type:"points"}];function l7(){let[e,t]=(0,m.useState)(1),[i,l]=(0,m.useState)(""),[r,o]=(0,m.useState)({}),[n,s]=(0,m.useState)({level:1,experience:0,totalPoints:0,topicsCompleted:0,quizzesCompleted:0,perfectQuizzes:0,streak:0,maxStreak:0,lastActiveDate:"",totalStudyTime:0,rank:"Новичок"}),[a,d]=(0,m.useState)(l5),[c,p]=(0,m.useState)(l2),[f,w]=(0,m.useState)(!1),[j,N]=(0,m.useState)([]),[S,k]=(0,m.useState)(""),[q,T]=(0,m.useState)(0),[C,A]=(0,m.useState)(null),[R,E]=(0,m.useState)(!1),[I,z]=(0,m.useState)(0),[P,O]=(0,m.useState)("subjects"),[M,H]=(0,m.useState)(null),[L,D]=(0,m.useState)(null),[F,V]=(0,m.useState)(!1),[$,B]=(0,m.useState)(new Set([1])),[W,U]=(0,m.useState)(!1);(0,m.useEffect)(()=>{let e=localStorage.getItem("schoolProgress_v2"),t=localStorage.getItem("schoolStats_v2"),i=localStorage.getItem("schoolAchievements_v2"),l=localStorage.getItem("visitedClasses_v2"),r=localStorage.getItem("dailyTasks_v2"),n=localStorage.getItem("lastActiveDate_v2");e&&o(JSON.parse(e)),t&&s(JSON.parse(t)),i&&d(JSON.parse(i)),l&&B(new Set(JSON.parse(l))),r&&p(JSON.parse(r));let a=new Date().toDateString(),c=n||"";if(c!==a){let e=new Date;e.setDate(e.getDate()-1),c===e.toDateString()?s(e=>({...e,streak:e.streak+1,maxStreak:Math.max(e.maxStreak,e.streak+1),lastActiveDate:a})):""!==c?(s(e=>({...e,streak:1,lastActiveDate:a})),p(l2)):s(e=>({...e,lastActiveDate:a})),localStorage.setItem("lastActiveDate_v2",a)}},[]),(0,m.useEffect)(()=>{localStorage.setItem("schoolProgress_v2",JSON.stringify(r)),localStorage.setItem("schoolStats_v2",JSON.stringify(n)),localStorage.setItem("schoolAchievements_v2",JSON.stringify(a)),localStorage.setItem("visitedClasses_v2",JSON.stringify([...$])),localStorage.setItem("dailyTasks_v2",JSON.stringify(c))},[r,n,a,$,c]);let Y=(0,m.useMemo)(()=>{let e=0,t=0;return l3.forEach(i=>{i.subjects.forEach(i=>{e+=i.topics.length,i.topics.forEach(e=>{r[i.id]?.[e.id]&&t++})})}),e>0?Math.round(t/e*100):0},[r]),Z=(0,m.useMemo)(()=>{let e=0;return l3.forEach(t=>{t.subjects.forEach(t=>{t.topics.forEach(i=>{r[t.id]?.[i.id]&&e++})})}),e},[r]),J=(0,m.useCallback)(e=>{let t=lP[0];for(let i of lP)e>=i.minLevel&&(t=i);return t},[]),G=(0,m.useCallback)(e=>{s(t=>{let i=t.experience+e,l=t.level,r=t.totalPoints+e;for(;i>=100;)i-=100,l++;let o=J(l);return{...t,experience:i,level:l,totalPoints:r,rank:o.name}})},[J]),ee=(0,m.useCallback)((e,t)=>{let i=r[e]?.[t.id];if(o(l=>{let r={...l};return r[e]||(r[e]={}),r[e][t.id]=!i,r}),!i){let e="easy"===t.difficulty?15:"medium"===t.difficulty?25:40;G(e),p(t=>t.map(t=>{if("topics"===t.type&&!t.completed){let e=t.progress+1;return{...t,progress:e,completed:e>=t.target}}if("points"===t.type&&!t.completed){let i=t.progress+e;return{...t,progress:i,completed:i>=t.target}}return t}))}s(e=>({...e,topicsCompleted:i?e.topicsCompleted-1:e.topicsCompleted+1}))},[r,G]);(0,m.useEffect)(()=>{let e=[...a],t=!1,i=(i,l)=>{let r=e.findIndex(e=>e.id===i);-1!==r&&!e[r].unlocked&&l&&(e[r].unlocked=!0,e[r].unlockedAt=new Date().toISOString(),t=!0,G(e[r].points),U(!0),setTimeout(()=>U(!1),3e3))};i("first_step",Z>=1),i("explorer",Z>=10),i("scholar",Z>=50),i("expert",Z>=100),i("quiz_master",n.quizzesCompleted>=5),i("streak_3",n.streak>=3),i("streak_7",n.streak>=7),i("all_classes",$.size>=12),t&&d(e)},[Z,n.quizzesCompleted,n.streak,$.size,a,G]);let et=(0,m.useCallback)(e=>Math.round(e.topics.filter(t=>r[e.id]?.[t.id]).length/e.topics.length*100),[r]),ei=(0,m.useCallback)(e=>{e.quiz&&e.quiz.length>0&&(N(e.quiz),k(e.title),T(0),A(null),E(!1),z(0),w(!0))},[]),el=(0,m.useCallback)(e=>{R||(A(e),E(!0),e===j[q].correctAnswer&&z(e=>e+1))},[R,j,q]),er=(0,m.useCallback)(()=>{if(q<j.length-1)T(e=>e+1),A(null),E(!1);else{if(I+ +(C===j[q].correctAnswer)===j.length){let e=a.findIndex(e=>"perfect_score"===e.id);if(-1!==e&&!a[e].unlocked){let t=[...a];t[e].unlocked=!0,t[e].unlockedAt=new Date().toISOString(),d(t),G(t[e].points),s(e=>({...e,perfectQuizzes:e.perfectQuizzes+1}))}}j.reduce((e,t)=>e+t.points,0);let e=j.slice(0,q+1).reduce((e,t,i)=>e+(i<q&&i<I?t.points:0),0)+(C===j[q].correctAnswer?j[q].points:0);G(e),s(e=>({...e,quizzesCompleted:e.quizzesCompleted+1})),p(t=>t.map(t=>{if("quizzes"===t.type&&!t.completed)return{...t,progress:t.progress+1,completed:!0};if("points"===t.type&&!t.completed){let i=t.progress+e;return{...t,progress:i,completed:i>=t.target}}return t})),w(!1),U(!0),setTimeout(()=>U(!1),3e3)}},[q,j,C,I,a,G]),eo=(0,m.useCallback)(e=>{t(e),B(t=>new Set([...t,e])),H(null)},[]),en=(0,m.useMemo)(()=>{let t=l3.find(t=>t.id===e);return t?i?t.subjects.filter(e=>e.title.toLowerCase().includes(i.toLowerCase())||e.topics.some(e=>e.title.toLowerCase().includes(i.toLowerCase()))):t.subjects:[]},[e,i]);l3.find(t=>t.id===e);let es=J(n.level);return(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden",children:[W&&(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 fixed inset-0 pointer-events-none z-50",children:Array.from({length:50}).map((e,t)=>(0,u.jsx)("div",{style:{left:`${100*Math.random()}%`,top:"-20px",animationDelay:`${2*Math.random()}s`,animationDuration:`${2+3*Math.random()}s`},className:"jsx-3acdb17415a25d39 absolute animate-fall",children:(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 text-2xl",children:["🎉","⭐","🏆","✨","🌟","💫","🎊"][Math.floor(7*Math.random())]})},t))}),(0,u.jsx)("header",{className:"jsx-3acdb17415a25d39 sticky top-0 z-40 backdrop-blur-xl bg-slate-900/80 border-b border-white/10",children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 max-w-7xl mx-auto px-4 py-3",children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center justify-between gap-4 flex-wrap",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 p-2 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg shadow-purple-500/30",children:(0,u.jsx)(lf,{className:"w-7 h-7 text-white"})}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39",children:[(0,u.jsx)("h1",{className:"jsx-3acdb17415a25d39 text-xl font-bold text-white",children:"ИНЕТШКОЛА"}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2 text-sm text-purple-300",children:[(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39",children:[es.icon," ",es.name]}),(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 text-white/30",children:"•"}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39",children:["Уровень ",n.level]})]})]})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30",children:[(0,u.jsx)(l_,{className:"w-4 h-4 text-orange-400"}),(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 font-bold text-orange-400",children:n.streak})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 hidden sm:flex items-center gap-2",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 w-32 h-2 bg-white/10 rounded-full overflow-hidden",children:(0,u.jsx)("div",{style:{width:`${n.experience/100*100}%`},className:"jsx-3acdb17415a25d39 h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"})}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-xs text-gray-400",children:[n.experience,"/",100," XP"]})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30",children:[(0,u.jsx)(ly,{className:"w-4 h-4 text-yellow-400"}),(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 font-bold text-yellow-400",children:n.totalPoints})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 relative hidden md:block",children:[(0,u.jsx)(lN,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),(0,u.jsx)(Q,{placeholder:"Поиск...",value:i,onChange:e=>l(e.target.value),className:"pl-9 w-48 h-9 bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-sm"})]})]})]})})}),(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 max-w-7xl mx-auto px-4 py-3",children:(0,u.jsx)(x,{className:"bg-white/5 border-white/10 backdrop-blur overflow-hidden",children:(0,u.jsxs)(v,{className:"p-4",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center justify-between mb-2",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2",children:[(0,u.jsx)(lq,{className:"w-5 h-5 text-green-400"}),(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 text-white font-medium",children:"Общий прогресс"})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-4 text-sm",children:[(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-gray-400",children:[Z," тем"]}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-green-400 font-bold",children:[Y,"%"]})]})]}),(0,u.jsx)(X,{value:Y,className:"h-2"})]})})}),(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 max-w-7xl mx-auto px-4 pb-3",children:(0,u.jsx)(ls,{className:"w-full",children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 flex gap-2 pb-2",children:l3.map(t=>(0,u.jsx)(_,{onClick:()=>eo(t.id),variant:e===t.id?"default":"outline",className:`shrink-0 h-9 ${e===t.id?"bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white":"bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"}`,children:t.shortName},t.id))})})}),(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 max-w-7xl mx-auto px-4 pb-8",children:(0,u.jsxs)(iz,{value:P,onValueChange:O,className:"w-full",children:[(0,u.jsxs)(iP,{className:"bg-white/5 border border-white/10 mb-4 h-10",children:[(0,u.jsxs)(iO,{value:"subjects",className:"data-[state=active]:bg-purple-600 h-8 text-sm",children:[(0,u.jsx)(lR,{className:"w-4 h-4 mr-1.5"}),"Предметы"]}),(0,u.jsxs)(iO,{value:"tasks",className:"data-[state=active]:bg-purple-600 h-8 text-sm",children:[(0,u.jsx)(lE,{className:"w-4 h-4 mr-1.5"}),"Задания",c.some(e=>e.completed)&&(0,u.jsxs)(K,{className:"ml-1.5 h-5 px-1.5 bg-green-500/20 text-green-300 text-xs",children:[c.filter(e=>e.completed).length,"/",c.length]})]}),(0,u.jsxs)(iO,{value:"achievements",className:"data-[state=active]:bg-purple-600 h-8 text-sm",children:[(0,u.jsx)(lx,{className:"w-4 h-4 mr-1.5"}),"Достижения"]}),(0,u.jsxs)(iO,{value:"stats",className:"data-[state=active]:bg-purple-600 h-8 text-sm",children:[(0,u.jsx)(lz,{className:"w-4 h-4 mr-1.5"}),"Статистика"]})]}),(0,u.jsx)(iM,{value:"subjects",className:"space-y-4",children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 grid grid-cols-1 md:grid-cols-2 gap-4",children:en.map(e=>{let t=et(e),i=M===e.id;return(0,u.jsxs)(x,{className:`bg-gradient-to-br ${e.gradient} bg-opacity-10 border-white/10 backdrop-blur overflow-hidden transition-all duration-300 ${i?"md:col-span-2":""}`,children:[(0,u.jsx)(y,{className:"pb-2 cursor-pointer",onClick:()=>H(i?null:e.id),children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center justify-between",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("div",{className:`jsx-3acdb17415a25d39 p-2 rounded-lg bg-white/10 ${e.color}`,children:e.icon}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39",children:[(0,u.jsx)(g,{className:"text-white text-lg",children:e.title}),(0,u.jsx)(b,{className:"text-white/60",children:e.description})]})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2",children:[e.quiz.length>0&&(0,u.jsxs)(_,{size:"sm",onClick:t=>{t.stopPropagation(),ei(e)},className:"bg-white/20 hover:bg-white/30 text-white h-8",children:[(0,u.jsx)(lw,{className:"w-4 h-4 mr-1"}),"Тест"]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 text-right",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 text-white/60 text-sm",children:[t,"%"]}),(0,u.jsx)(lS,{className:`w-4 h-4 text-white/40 transition-transform ${i?"rotate-90":""}`})]})]})]})}),(0,u.jsxs)(v,{children:[(0,u.jsx)(X,{value:t,className:"h-1.5 mb-3"}),i&&(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 space-y-3 mt-4",children:[(0,u.jsx)(lh,{className:"bg-white/10"}),(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 space-y-2",children:e.topics.map(t=>(0,u.jsxs)("div",{onClick:()=>{ee(e.id,t)},className:`jsx-3acdb17415a25d39 flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${r[e.id]?.[t.id]?"bg-green-500/10 border border-green-500/20":"bg-white/5 hover:bg-white/10 border border-transparent"}`,children:[(0,u.jsx)(t9,{checked:r[e.id]?.[t.id]||!1,className:"data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500",onCheckedChange:()=>{}}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex-1 min-w-0",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2",children:[(0,u.jsx)("span",{className:`jsx-3acdb17415a25d39 truncate ${r[e.id]?.[t.id]?"text-green-300 line-through":"text-white"}`,children:t.title}),(0,u.jsx)(K,{className:`text-xs px-1.5 h-5 ${"easy"===t.difficulty?"bg-green-500/20 text-green-300":"medium"===t.difficulty?"bg-yellow-500/20 text-yellow-300":"bg-red-500/20 text-red-300"}`,children:"easy"===t.difficulty?"Легко":"medium"===t.difficulty?"Средне":"Сложно"})]}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-xs text-gray-400 truncate",children:t.description})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-1 text-xs text-gray-400",children:[(0,u.jsx)(lk,{className:"w-3 h-3"}),t.estimatedTime," мин"]}),(0,u.jsx)(_,{size:"sm",variant:"ghost",onClick:e=>{e.stopPropagation(),D(t),V(!0)},className:"h-7 w-7 p-0 text-white/40 hover:text-white",children:(0,u.jsx)(lm,{className:"w-3.5 h-3.5"})})]},t.id))}),e.quiz.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(lh,{className:"bg-white/10"}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center justify-between",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-2 text-white/60",children:[(0,u.jsx)(lj,{className:"w-4 h-4"}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-sm",children:["Тест: ",e.quiz.length," вопросов"]})]}),(0,u.jsxs)(_,{size:"sm",onClick:()=>ei(e),className:"bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",children:[(0,u.jsx)(lI,{className:"w-4 h-4 mr-1.5"}),"Начать тест"]})]})]})]})]})]},e.id)})})}),(0,u.jsx)(iM,{value:"tasks",className:"space-y-4",children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 grid grid-cols-1 md:grid-cols-3 gap-4",children:c.map(e=>(0,u.jsx)(x,{className:`${e.completed?"bg-green-500/10 border-green-500/30":"bg-white/5 border-white/10"} backdrop-blur`,children:(0,u.jsx)(v,{className:"p-4",children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-start gap-3",children:[(0,u.jsxs)("div",{className:`jsx-3acdb17415a25d39 p-2 rounded-lg ${e.completed?"bg-green-500/20":"bg-white/10"}`,children:["topics"===e.type&&(0,u.jsx)(lR,{className:`w-5 h-5 ${e.completed?"text-green-400":"text-white/60"}`}),"quizzes"===e.type&&(0,u.jsx)(lw,{className:`w-5 h-5 ${e.completed?"text-green-400":"text-white/60"}`}),"points"===e.type&&(0,u.jsx)(ly,{className:`w-5 h-5 ${e.completed?"text-green-400":"text-white/60"}`})]}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex-1",children:[(0,u.jsx)("h3",{className:"jsx-3acdb17415a25d39 font-medium text-white",children:e.title}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-sm text-gray-400",children:e.description}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 mt-2",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex justify-between text-xs mb-1",children:[(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-gray-400",children:[e.progress,"/",e.target]}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-amber-400",children:["+",e.reward," XP"]})]}),(0,u.jsx)(X,{value:e.progress/e.target*100,className:"h-1.5"})]})]}),e.completed&&(0,u.jsx)(lb,{className:"w-5 h-5 text-green-400"})]})})},e.id))})}),(0,u.jsx)(iM,{value:"achievements",className:"space-y-4",children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",children:a.map(e=>{let t={common:"from-gray-500/20 to-gray-600/20 border-gray-500/30",rare:"from-blue-500/20 to-cyan-500/20 border-blue-500/30",epic:"from-purple-500/20 to-pink-500/20 border-purple-500/30",legendary:"from-amber-500/20 to-yellow-500/20 border-amber-500/30"};return(0,u.jsx)(x,{className:`${e.unlocked?`bg-gradient-to-br ${t[e.rarity]}`:"bg-white/5 border-white/10 opacity-50"} backdrop-blur transition-all hover:scale-[1.02]`,children:(0,u.jsxs)(v,{className:"p-4 text-center",children:[(0,u.jsx)("div",{className:`jsx-3acdb17415a25d39 mx-auto w-14 h-14 rounded-full flex items-center justify-center mb-3 ${e.unlocked?`bg-gradient-to-br ${t[e.rarity]}`:"bg-gray-700"}`,children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 "+((e.unlocked?"text-white":"text-gray-500")||""),children:e.icon})}),(0,u.jsx)("h3",{className:"jsx-3acdb17415a25d39 font-bold text-white mb-1",children:e.title}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-xs text-gray-400 mb-2",children:e.description}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center justify-center gap-2",children:[(0,u.jsx)(K,{className:`text-xs ${{common:"bg-gray-500/20 text-gray-300",rare:"bg-blue-500/20 text-blue-300",epic:"bg-purple-500/20 text-purple-300",legendary:"bg-amber-500/20 text-amber-300"}[e.rarity]}`,children:"common"===e.rarity?"Обычное":"rare"===e.rarity?"Редкое":"epic"===e.rarity?"Эпическое":"Легендарное"}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-xs text-amber-400",children:["+",e.points," XP"]})]}),e.unlocked&&(0,u.jsxs)(K,{className:"mt-2 bg-green-500/20 text-green-300 border-green-500/30",children:[(0,u.jsx)(lb,{className:"w-3 h-3 mr-1"}),"Получено"]})]})},e.id)})})}),(0,u.jsxs)(iM,{value:"stats",className:"space-y-4",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,u.jsx)(x,{className:"bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/30",children:(0,u.jsx)(v,{className:"p-4",children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 p-2 rounded-xl bg-purple-500/20",children:(0,u.jsx)(lR,{className:"w-6 h-6 text-purple-400"})}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39",children:[(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-gray-400 text-xs",children:"Изучено тем"}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-2xl font-bold text-white",children:n.topicsCompleted})]})]})})}),(0,u.jsx)(x,{className:"bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/30",children:(0,u.jsx)(v,{className:"p-4",children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 p-2 rounded-xl bg-green-500/20",children:(0,u.jsx)(lg,{className:"w-6 h-6 text-green-400"})}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39",children:[(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-gray-400 text-xs",children:"Пройдено тестов"}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-2xl font-bold text-white",children:n.quizzesCompleted})]})]})})}),(0,u.jsx)(x,{className:"bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border-amber-500/30",children:(0,u.jsx)(v,{className:"p-4",children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 p-2 rounded-xl bg-amber-500/20",children:(0,u.jsx)(ly,{className:"w-6 h-6 text-amber-400"})}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39",children:[(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-gray-400 text-xs",children:"Всего очков"}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-2xl font-bold text-white",children:n.totalPoints})]})]})})}),(0,u.jsx)(x,{className:"bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/30",children:(0,u.jsx)(v,{className:"p-4",children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 p-2 rounded-xl bg-orange-500/20",children:(0,u.jsx)(l_,{className:"w-6 h-6 text-orange-400"})}),(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39",children:[(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-gray-400 text-xs",children:"Серия дней"}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-2xl font-bold text-white",children:n.streak})]})]})})})]}),(0,u.jsxs)(x,{className:"bg-white/5 border-white/10",children:[(0,u.jsx)(y,{children:(0,u.jsx)(g,{className:"text-white text-lg",children:"Прогресс по классам"})}),(0,u.jsx)(v,{children:(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 space-y-3",children:l3.map(e=>{let t=0,i=0;e.subjects.forEach(e=>{t+=e.topics.length,e.topics.forEach(t=>{r[e.id]?.[t.id]&&i++})});let l=t>0?Math.round(i/t*100):0;return(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 space-y-1",children:[(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex justify-between text-sm",children:[(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 text-white",children:e.name}),(0,u.jsxs)("span",{className:"jsx-3acdb17415a25d39 text-gray-400",children:[i,"/",t," (",l,"%)"]})]}),(0,u.jsx)(X,{value:l,className:"h-1.5"})]},e.id)})})})]})]})]})}),(0,u.jsx)(tO,{open:f,onOpenChange:w,children:(0,u.jsxs)(tL,{className:"bg-slate-900 border-white/10 text-white max-w-lg",children:[(0,u.jsxs)(tD,{children:[(0,u.jsxs)(tV,{className:"flex items-center gap-2 text-lg",children:[(0,u.jsx)(lw,{className:"w-5 h-5 text-yellow-400"}),"Тест: ",S]}),(0,u.jsxs)(t$,{className:"text-gray-400",children:["Вопрос ",q+1," из ",j.length]})]}),j.length>0&&(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 space-y-4",children:[(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 flex gap-1",children:j.map((e,t)=>(0,u.jsx)("div",{className:`jsx-3acdb17415a25d39 h-1 flex-1 rounded-full ${t<q?"bg-green-500":t===q?"bg-purple-500":"bg-white/10"}`},t))}),(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 p-4 rounded-xl bg-white/5 border border-white/10",children:(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-lg font-medium text-white",children:j[q].question})}),(0,u.jsx)("div",{className:"jsx-3acdb17415a25d39 space-y-2",children:j[q].options.map((e,t)=>{let i=C===t,l=t===j[q].correctAnswer,r="bg-white/5 hover:bg-white/10 border-white/10";return R&&(l?r="bg-green-500/20 border-green-500/30":i&&!l&&(r="bg-red-500/20 border-red-500/30")),(0,u.jsx)("button",{onClick:()=>el(t),disabled:R,className:`jsx-3acdb17415a25d39 w-full p-3 rounded-xl border text-left transition-all ${r}`,children:(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 flex items-center gap-3",children:[(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium shrink-0",children:String.fromCharCode(65+t)}),(0,u.jsx)("span",{className:"jsx-3acdb17415a25d39 text-white",children:e}),R&&l&&(0,u.jsx)(lb,{className:"w-5 h-5 text-green-400 ml-auto"}),R&&i&&!l&&(0,u.jsx)(lv,{className:"w-5 h-5 text-red-400 ml-auto"})]})},t)})}),R&&(0,u.jsxs)("div",{className:`jsx-3acdb17415a25d39 p-3 rounded-xl text-sm ${C===j[q].correctAnswer?"bg-green-500/10 border border-green-500/20":"bg-red-500/10 border border-red-500/20"}`,children:[(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 font-medium mb-1",children:C===j[q].correctAnswer?"✓ Правильно!":"✗ Неправильно"}),(0,u.jsx)("p",{className:"jsx-3acdb17415a25d39 text-gray-400",children:j[q].explanation})]}),R&&(0,u.jsx)(_,{onClick:er,className:"w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700",children:q<j.length-1?"Следующий вопрос":"Завершить тест"})]})]})}),(0,u.jsx)(tO,{open:F,onOpenChange:V,children:(0,u.jsxs)(tL,{className:"bg-slate-900 border-white/10 text-white max-w-2xl max-h-[80vh] overflow-hidden",children:[(0,u.jsxs)(tD,{children:[(0,u.jsxs)(tV,{className:"flex items-center gap-2",children:[(0,u.jsx)(lm,{className:"w-5 h-5 text-purple-400"}),L?.title]}),(0,u.jsx)(t$,{className:"text-gray-400",children:L?.description})]}),(0,u.jsx)(ls,{className:"h-[50vh]",children:L&&(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 space-y-4 pr-4",children:[(0,u.jsx)("div",{dangerouslySetInnerHTML:{__html:L.theory},className:"jsx-3acdb17415a25d39 prose prose-invert prose-sm max-w-none"}),L.examples.length>0&&(0,u.jsxs)("div",{className:"jsx-3acdb17415a25d39 space-y-2",children:[(0,u.jsx)("h4",{className:"jsx-3acdb17415a25d39 text-white font-medium",children:"Примеры:"}),(0,u.jsx)("ul",{className:"jsx-3acdb17415a25d39 space-y-1",children:L.examples.map((e,t)=>(0,u.jsxs)("li",{className:"jsx-3acdb17415a25d39 flex items-center gap-2 text-gray-300",children:[(0,u.jsx)(lS,{className:"w-4 h-4 text-purple-400"}),e]},t))})]})]})}),(0,u.jsx)(tF,{children:(0,u.jsxs)(_,{onClick:()=>{if(L){for(let e of l3)for(let t of e.subjects)if(t.topics.find(e=>e.id===L.id)){ee(t.id,L);break}}V(!1)},className:"bg-gradient-to-r from-green-600 to-emerald-600",children:[(0,u.jsx)(lb,{className:"w-4 h-4 mr-2"}),"Отметить как изученное"]})})]})}),(0,u.jsx)(h.default,{id:"3acdb17415a25d39",children:"@keyframes fall{0%{opacity:1;transform:translateY(0)rotate(0)}to{opacity:0;transform:translateY(100vh)rotate(720deg)}}.animate-fall{animation:linear forwards fall}.prose h3{color:#fff;margin-top:1rem;margin-bottom:.5rem;font-size:1.1rem;font-weight:600}.prose h4{color:#ffffffe6;margin-top:.75rem;margin-bottom:.25rem;font-size:1rem;font-weight:500}.prose p{color:#fffc;line-height:1.6}.prose ul,.prose ol{color:#fffc;padding-left:1.5rem}.prose li{margin:.25rem 0}.prose pre{background:#ffffff0d;border-radius:.5rem;padding:.5rem;font-family:monospace}"})]})}e.s(["default",()=>l7],52683)}]);