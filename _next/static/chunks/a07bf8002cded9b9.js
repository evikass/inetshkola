(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88143,(e,t,i)=>{"use strict";function l({widthInt:e,heightInt:t,blurWidth:i,blurHeight:l,blurDataURL:s,objectFit:o}){let n=i?40*i:e,r=l?40*l:t,a=n&&r?`viewBox='0 0 ${n} ${r}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${a}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${a?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${s}'/%3E%3C/svg%3E`}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImageBlurSvg",{enumerable:!0,get:function(){return l}})},87690,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l={VALID_LOADERS:function(){return o},imageConfigDefault:function(){return n}};for(var s in l)Object.defineProperty(i,s,{enumerable:!0,get:l[s]});let o=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumRedirects:3,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1}},8927,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"getImgProps",{enumerable:!0,get:function(){return d}}),e.r(33525);let l=e.r(43369),s=e.r(88143),o=e.r(87690),n=["-moz-initial","fill","none","scale-down",void 0];function r(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function d({src:e,sizes:t,unoptimized:i=!1,priority:d=!1,preload:c=!1,loading:p,className:h,quality:u,width:m,height:f,fill:y=!1,style:x,overrideSrc:g,onLoad:b,onLoadingComplete:v,placeholder:w="empty",blurDataURL:j,fetchPriority:T,decoding:q="async",layout:k,objectFit:N,objectPosition:S,lazyBoundary:A,lazyRoot:C,...P},E){var M;let I,R,z,{imgConf:_,showAltText:O,blurComplete:D,defaultLoader:V}=E,L=_||o.imageConfigDefault;if("allSizes"in L)I=L;else{let e=[...L.deviceSizes,...L.imageSizes].sort((e,t)=>e-t),t=L.deviceSizes.sort((e,t)=>e-t),i=L.qualities?.sort((e,t)=>e-t);I={...L,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===V)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let F=P.loader||V;delete P.loader,delete P.srcSet;let H="__next_img_default"in F;if(H){if("custom"===I.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=F;F=t=>{let{config:i,...l}=t;return e(l)}}if(k){"fill"===k&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[k];e&&(x={...x,...e});let i={responsive:"100vw",fill:"100vw"}[k];i&&!t&&(t=i)}let B="",$=a(m),U=a(f);if((M=e)&&"object"==typeof M&&(r(M)||void 0!==M.src)){let t=r(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(R=t.blurWidth,z=t.blurHeight,j=j||t.blurDataURL,B=t.src,!y)if($||U){if($&&!U){let e=$/t.width;U=Math.round(t.height*e)}else if(!$&&U){let e=U/t.height;$=Math.round(t.width*e)}}else $=t.width,U=t.height}let W=!d&&!c&&("lazy"===p||void 0===p);(!(e="string"==typeof e?e:B)||e.startsWith("data:")||e.startsWith("blob:"))&&(i=!0,W=!1),I.unoptimized&&(i=!0),H&&!I.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(i=!0);let X=a(u),Y=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:S}:{},O?{}:{color:"transparent"},x),K=D||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,s.getImageBlurSvg)({widthInt:$,heightInt:U,blurWidth:R,blurHeight:z,blurDataURL:j||"",objectFit:Y.objectFit})}")`:`url("${w}")`,Q=n.includes(Y.objectFit)?"fill"===Y.objectFit?"100% 100%":"cover":Y.objectFit,G=K?{backgroundSize:Q,backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},J=function({config:e,src:t,unoptimized:i,width:s,quality:o,sizes:n,loader:r}){if(i){let e=(0,l.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//")&&e){let i=t.includes("?")?"&":"?";t=`${t}${i}dpl=${e}`}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:a,kind:d}=function({deviceSizes:e,allSizes:t},i,l){if(l){let i=/(^|\s)(1?\d?\d)vw/g,s=[];for(let e;e=i.exec(l);)s.push(parseInt(e[2]));if(s.length){let i=.01*Math.min(...s);return{widths:t.filter(t=>t>=e[0]*i),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof i?{widths:e,kind:"w"}:{widths:[...new Set([i,2*i].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,s,n),c=a.length-1;return{sizes:n||"w"!==d?n:"100vw",srcSet:a.map((i,l)=>`${r({config:e,src:t,quality:o,width:i})} ${"w"===d?i:l+1}${d}`).join(", "),src:r({config:e,src:t,quality:o,width:a[c]})}}({config:I,src:e,unoptimized:i,width:$,quality:X,sizes:t,loader:F}),Z=W?"lazy":p;return{props:{...P,loading:Z,fetchPriority:T,width:$,height:U,decoding:q,className:h,style:{...Y,...G},sizes:J.sizes,srcSet:J.srcSet,src:g||J.src},meta:{unoptimized:i,preload:c||d,placeholder:w,fill:y}}}},98879,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return r}});let l=e.r(71645),s="u"<typeof window,o=s?()=>{}:l.useLayoutEffect,n=s?()=>{}:l.useEffect;function r(e){let{headManager:t,reduceComponentsToState:i}=e;function r(){if(t&&t.mountedInstances){let e=l.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return s&&(t?.mountedInstances?.add(e.children),r()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},25633,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l={default:function(){return f},defaultHead:function(){return p}};for(var s in l)Object.defineProperty(i,s,{enumerable:!0,get:l[s]});let o=e.r(55682),n=e.r(90809),r=e.r(43476),a=n._(e.r(71645)),d=o._(e.r(98879)),c=e.r(42732);function p(){return[(0,r.jsx)("meta",{charSet:"utf-8"},"charset"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(33525);let u=["name","httpEquiv","charSet","itemProp"];function m(e){let t,i,l,s;return e.reduce(h,[]).reverse().concat(p().reverse()).filter((t=new Set,i=new Set,l=new Set,s={},e=>{let o=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?o=!1:i.add(e.type);break;case"meta":for(let t=0,i=u.length;t<i;t++){let i=u[t];if(e.props.hasOwnProperty(i))if("charSet"===i)l.has(i)?o=!1:l.add(i);else{let t=e.props[i],l=s[i]||new Set;("name"!==i||!n)&&l.has(t)?o=!1:(l.add(t),s[i]=l)}}}return o})).reverse().map((e,t)=>{let i=e.key||t;return a.default.cloneElement(e,{key:i})})}let f=function({children:e}){let t=(0,a.useContext)(c.HeadManagerContext);return(0,r.jsx)(d.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},18556,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let l=e.r(55682)._(e.r(71645)),s=e.r(87690),o=l.default.createContext(s.imageConfigDefault)},65856,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"RouterContext",{enumerable:!0,get:function(){return l}});let l=e.r(55682)._(e.r(71645)).default.createContext(null)},70965,(e,t,i)=>{"use strict";function l(e,t){let i=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-i)<Math.abs(e-i)?t:e,0):i}Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"findClosestQuality",{enumerable:!0,get:function(){return l}})},1948,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return n}});let l=e.r(70965),s=e.r(43369);function o({config:e,src:t,width:i,quality:o}){if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let n=(0,l.findClosestQuality)(o,e),r=(0,s.getDeploymentId)();return`${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${n}${t.startsWith("/")&&r?`&dpl=${r}`:""}`}o.__next_img_default=!0;let n=o},18581,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"useMergedRef",{enumerable:!0,get:function(){return s}});let l=e.r(71645);function s(e,t){let i=(0,l.useRef)(null),s=(0,l.useRef)(null);return(0,l.useCallback)(l=>{if(null===l){let e=i.current;e&&(i.current=null,e());let t=s.current;t&&(s.current=null,t())}else e&&(i.current=o(e,l)),t&&(s.current=o(t,l))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let i=e(t);return"function"==typeof i?i:()=>e(null)}}("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},85437,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"Image",{enumerable:!0,get:function(){return v}});let l=e.r(55682),s=e.r(90809),o=e.r(43476),n=s._(e.r(71645)),r=l._(e.r(74080)),a=l._(e.r(25633)),d=e.r(8927),c=e.r(87690),p=e.r(18556);e.r(33525);let h=e.r(65856),u=l._(e.r(1948)),m=e.r(18581),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/inetshkola/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function y(e,t,i,l,s,o,n){let r=e?.src;e&&e["data-loaded-src"]!==r&&(e["data-loaded-src"]=r,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),i?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let l=!1,s=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>l,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{l=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}l?.current&&l.current(e)}}))}function x(e){return n.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let g=(0,n.forwardRef)(({src:e,srcSet:t,sizes:i,height:l,width:s,decoding:r,className:a,style:d,fetchPriority:c,placeholder:p,loading:h,unoptimized:u,fill:f,onLoadRef:g,onLoadingCompleteRef:b,setBlurComplete:v,setShowAltText:w,sizesInput:j,onLoad:T,onError:q,...k},N)=>{let S=(0,n.useCallback)(e=>{e&&(q&&(e.src=e.src),e.complete&&y(e,p,g,b,v,u,j))},[e,p,g,b,v,q,u,j]),A=(0,m.useMergedRef)(N,S);return(0,o.jsx)("img",{...k,...x(c),loading:h,width:s,height:l,decoding:r,"data-nimg":f?"fill":"1",className:a,style:d,sizes:i,srcSet:t,src:e,ref:A,onLoad:e=>{y(e.currentTarget,p,g,b,v,u,j)},onError:e=>{w(!0),"empty"!==p&&v(!0),q&&q(e)}})});function b({isAppRouter:e,imgAttributes:t}){let i={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...x(t.fetchPriority)};return e&&r.default.preload?(r.default.preload(t.src,i),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...i},"__nimg-"+t.src+t.srcSet+t.sizes)})}let v=(0,n.forwardRef)((e,t)=>{let i=(0,n.useContext)(h.RouterContext),l=(0,n.useContext)(p.ImageConfigContext),s=(0,n.useMemo)(()=>{let e=f||l||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t),s=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i,qualities:s,localPatterns:"u"<typeof window?l?.localPatterns:e.localPatterns}},[l]),{onLoad:r,onLoadingComplete:a}=e,m=(0,n.useRef)(r);(0,n.useEffect)(()=>{m.current=r},[r]);let y=(0,n.useRef)(a);(0,n.useEffect)(()=>{y.current=a},[a]);let[x,v]=(0,n.useState)(!1),[w,j]=(0,n.useState)(!1),{props:T,meta:q}=(0,d.getImgProps)(e,{defaultLoader:u.default,imgConf:s,blurComplete:x,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(g,{...T,unoptimized:q.unoptimized,placeholder:q.placeholder,fill:q.fill,onLoadRef:m,onLoadingCompleteRef:y,setBlurComplete:v,setShowAltText:j,sizesInput:e.sizes,ref:t}),q.preload?(0,o.jsx)(b,{isAppRouter:!i,imgAttributes:T}):null]})});("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},94909,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var l={default:function(){return c},getImageProps:function(){return d}};for(var s in l)Object.defineProperty(i,s,{enumerable:!0,get:l[s]});let o=e.r(55682),n=e.r(8927),r=e.r(85437),a=o._(e.r(1948));function d(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/inetshkola/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let c=r.Image},57688,(e,t,i)=>{t.exports=e.r(94909)},52683,e=>{"use strict";let t,i,l,s,o,n,r;var a,d,c,p,h,u,m,f,y=e.i(43476),x=e.i(71645),g=e.i(81140),b=e.i(30030),v=e.i(75830),w=e.i(20783),j=e.i(34620),T=x[" useId ".trim().toString()]||(()=>void 0),q=0;function k(e){let[t,i]=x.useState(T());return(0,j.useLayoutEffect)(()=>{e||i(e=>e??String(q++))},[e]),e||(t?`radix-${t}`:"")}var N=e.i(48425),S=e.i(30207),A=e.i(69340),C=x.createContext(void 0);function P(e){let t=x.useContext(C);return e||t||"ltr"}var E="rovingFocusGroup.onEntryFocus",M={bubbles:!1,cancelable:!0},I="RovingFocusGroup",[R,z,_]=(0,v.createCollection)(I),[O,D]=(0,b.createContextScope)(I,[_]),[V,L]=O(I),F=x.forwardRef((e,t)=>(0,y.jsx)(R.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,y.jsx)(R.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,y.jsx)(H,{...e,ref:t})})}));F.displayName=I;var H=x.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:i,orientation:l,loop:s=!1,dir:o,currentTabStopId:n,defaultCurrentTabStopId:r,onCurrentTabStopIdChange:a,onEntryFocus:d,preventScrollOnEntryFocus:c=!1,...p}=e,h=x.useRef(null),u=(0,w.useComposedRefs)(t,h),m=P(o),[f,b]=(0,A.useControllableState)({prop:n,defaultProp:r??null,onChange:a,caller:I}),[v,j]=x.useState(!1),T=(0,S.useCallbackRef)(d),q=z(i),k=x.useRef(!1),[C,R]=x.useState(0);return x.useEffect(()=>{let e=h.current;if(e)return e.addEventListener(E,T),()=>e.removeEventListener(E,T)},[T]),(0,y.jsx)(V,{scope:i,orientation:l,dir:m,loop:s,currentTabStopId:f,onItemFocus:x.useCallback(e=>b(e),[b]),onItemShiftTab:x.useCallback(()=>j(!0),[]),onFocusableItemAdd:x.useCallback(()=>R(e=>e+1),[]),onFocusableItemRemove:x.useCallback(()=>R(e=>e-1),[]),children:(0,y.jsx)(N.Primitive.div,{tabIndex:v||0===C?-1:0,"data-orientation":l,...p,ref:u,style:{outline:"none",...e.style},onMouseDown:(0,g.composeEventHandlers)(e.onMouseDown,()=>{k.current=!0}),onFocus:(0,g.composeEventHandlers)(e.onFocus,e=>{let t=!k.current;if(e.target===e.currentTarget&&t&&!v){let t=new CustomEvent(E,M);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=q().filter(e=>e.focusable);W([e.find(e=>e.active),e.find(e=>e.id===f),...e].filter(Boolean).map(e=>e.ref.current),c)}}k.current=!1}),onBlur:(0,g.composeEventHandlers)(e.onBlur,()=>j(!1))})})}),B="RovingFocusGroupItem",$=x.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:i,focusable:l=!0,active:s=!1,tabStopId:o,children:n,...r}=e,a=k(),d=o||a,c=L(B,i),p=c.currentTabStopId===d,h=z(i),{onFocusableItemAdd:u,onFocusableItemRemove:m,currentTabStopId:f}=c;return x.useEffect(()=>{if(l)return u(),()=>m()},[l,u,m]),(0,y.jsx)(R.ItemSlot,{scope:i,id:d,focusable:l,active:s,children:(0,y.jsx)(N.Primitive.span,{tabIndex:p?0:-1,"data-orientation":c.orientation,...r,ref:t,onMouseDown:(0,g.composeEventHandlers)(e.onMouseDown,e=>{l?c.onItemFocus(d):e.preventDefault()}),onFocus:(0,g.composeEventHandlers)(e.onFocus,()=>c.onItemFocus(d)),onKeyDown:(0,g.composeEventHandlers)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey)return void c.onItemShiftTab();if(e.target!==e.currentTarget)return;let t=function(e,t,i){var l;let s=(l=e.key,"rtl"!==i?l:"ArrowLeft"===l?"ArrowRight":"ArrowRight"===l?"ArrowLeft":l);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(s))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(s)))return U[s]}(e,c.orientation,c.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let s=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)s.reverse();else if("prev"===t||"next"===t){var i,l;"prev"===t&&s.reverse();let o=s.indexOf(e.currentTarget);s=c.loop?(i=s,l=o+1,i.map((e,t)=>i[(l+t)%i.length])):s.slice(o+1)}setTimeout(()=>W(s))}}),children:"function"==typeof n?n({isCurrentTabStop:p,hasTabStop:null!=f}):n})})});$.displayName=B;var U={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function W(e,t=!1){let i=document.activeElement;for(let l of e)if(l===i||(l.focus({preventScroll:t}),document.activeElement!==i))return}var X=e.i(96626),Y="Tabs",[K,Q]=(0,b.createContextScope)(Y,[D]),G=D(),[J,Z]=K(Y),ee=x.forwardRef((e,t)=>{let{__scopeTabs:i,value:l,onValueChange:s,defaultValue:o,orientation:n="horizontal",dir:r,activationMode:a="automatic",...d}=e,c=P(r),[p,h]=(0,A.useControllableState)({prop:l,onChange:s,defaultProp:o??"",caller:Y});return(0,y.jsx)(J,{scope:i,baseId:k(),value:p,onValueChange:h,orientation:n,dir:c,activationMode:a,children:(0,y.jsx)(N.Primitive.div,{dir:c,"data-orientation":n,...d,ref:t})})});ee.displayName=Y;var et="TabsList",ei=x.forwardRef((e,t)=>{let{__scopeTabs:i,loop:l=!0,...s}=e,o=Z(et,i),n=G(i);return(0,y.jsx)(F,{asChild:!0,...n,orientation:o.orientation,dir:o.dir,loop:l,children:(0,y.jsx)(N.Primitive.div,{role:"tablist","aria-orientation":o.orientation,...s,ref:t})})});ei.displayName=et;var el="TabsTrigger",es=x.forwardRef((e,t)=>{let{__scopeTabs:i,value:l,disabled:s=!1,...o}=e,n=Z(el,i),r=G(i),a=er(n.baseId,l),d=ea(n.baseId,l),c=l===n.value;return(0,y.jsx)($,{asChild:!0,...r,focusable:!s,active:c,children:(0,y.jsx)(N.Primitive.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":d,"data-state":c?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:a,...o,ref:t,onMouseDown:(0,g.composeEventHandlers)(e.onMouseDown,e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():n.onValueChange(l)}),onKeyDown:(0,g.composeEventHandlers)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&n.onValueChange(l)}),onFocus:(0,g.composeEventHandlers)(e.onFocus,()=>{let e="manual"!==n.activationMode;c||s||!e||n.onValueChange(l)})})})});es.displayName=el;var eo="TabsContent",en=x.forwardRef((e,t)=>{let{__scopeTabs:i,value:l,forceMount:s,children:o,...n}=e,r=Z(eo,i),a=er(r.baseId,l),d=ea(r.baseId,l),c=l===r.value,p=x.useRef(c);return x.useEffect(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,y.jsx)(X.Presence,{present:s||c,children:({present:i})=>(0,y.jsx)(N.Primitive.div,{"data-state":c?"active":"inactive","data-orientation":r.orientation,role:"tabpanel","aria-labelledby":a,hidden:!i,id:d,tabIndex:0,...n,ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0},children:i&&o})})});function er(e,t){return`${e}-trigger-${t}`}function ea(e,t){return`${e}-content-${t}`}en.displayName=eo;var ed=e.i(75157);function ec({className:e,...t}){return(0,y.jsx)(ee,{"data-slot":"tabs",className:(0,ed.cn)("flex flex-col gap-2",e),...t})}function ep({className:e,...t}){return(0,y.jsx)(ei,{"data-slot":"tabs-list",className:(0,ed.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...t})}function eh({className:e,...t}){return(0,y.jsx)(es,{"data-slot":"tabs-trigger",className:(0,ed.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function eu({className:e,...t}){return(0,y.jsx)(en,{"data-slot":"tabs-content",className:(0,ed.cn)("flex-1 outline-none",e),...t})}let em=[{name:"Новичок",minLevel:1,icon:"🌱",color:"text-gray-400"},{name:"Ученик",minLevel:5,icon:"📚",color:"text-green-400"},{name:"Отличник",minLevel:10,icon:"⭐",color:"text-blue-400"},{name:"Знаток",minLevel:20,icon:"🎓",color:"text-purple-400"},{name:"Мастер",minLevel:35,icon:"🏆",color:"text-amber-400"},{name:"Эксперт",minLevel:50,icon:"👑",color:"text-yellow-400"},{name:"Гений",minLevel:75,icon:"💎",color:"text-cyan-400"},{name:"Легенда",minLevel:100,icon:"🌟",color:"text-pink-400"}];var ef=e.i(75254);let ey=(0,ef.default)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),ex=(0,ef.default)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),eg=(0,ef.default)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),eb=(0,ef.default)("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),ev=(0,ef.default)("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]),ew=(0,ef.default)("medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]),ej=(0,ef.default)("flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]),eT=(0,ef.default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),eq=(0,ef.default)("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]),ek=(0,ef.default)("sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]),eN=(0,ef.default)("brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]),eS=(0,ef.default)("heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),eA=(0,ef.default)("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),eC=[{id:"first_step",title:"Первый шаг",description:"Изучите первую тему",icon:(0,y.jsx)(ey,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_1_topic",points:50,rarity:"common"},{id:"explorer",title:"Исследователь",description:"Изучите 10 тем",icon:(0,y.jsx)(ex,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_10_topics",points:100,rarity:"common"},{id:"quiz_master",title:"Мастер тестов",description:"Пройдите 5 квизов",icon:(0,y.jsx)(ev,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_5_quizzes",points:150,rarity:"common"},{id:"streak_3",title:"3 дня подряд",description:"Занимайтесь 3 дня подряд",icon:(0,y.jsx)(ej,{className:"w-6 h-6"}),unlocked:!1,condition:"3_day_streak",points:100,rarity:"common"},{id:"scholar",title:"Учёный",description:"Изучите 50 тем",icon:(0,y.jsx)(eg,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_50_topics",points:300,rarity:"rare"},{id:"expert",title:"Эксперт",description:"Изучите 100 тем",icon:(0,y.jsx)(eb,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_100_topics",points:500,rarity:"rare"},{id:"perfect_score",title:"Идеальный результат",description:"Получите 100% в квизе",icon:(0,y.jsx)(ew,{className:"w-6 h-6"}),unlocked:!1,condition:"perfect_quiz",points:200,rarity:"rare"},{id:"streak_7",title:"Неделя знаний",description:"Занимайтесь 7 дней подряд",icon:(0,y.jsx)(eT,{className:"w-6 h-6"}),unlocked:!1,condition:"7_day_streak",points:300,rarity:"rare"},{id:"brain_power",title:"Мозговая сила",description:"Наберите 1000 очков",icon:(0,y.jsx)(eN,{className:"w-6 h-6"}),unlocked:!1,condition:"1000_points",points:250,rarity:"rare"},{id:"all_classes",title:"Все классы",description:"Откройте все классы",icon:(0,y.jsx)(eq,{className:"w-6 h-6"}),unlocked:!1,condition:"visit_all_classes",points:250,rarity:"epic"},{id:"streak_30",title:"Месяц упорства",description:"Занимайтесь 30 дней подряд",icon:(0,y.jsx)(eS,{className:"w-6 h-6"}),unlocked:!1,condition:"30_day_streak",points:500,rarity:"epic"},{id:"all_subjects",title:"Энциклопедист",description:"Изучите темы по всем предметам класса",icon:(0,y.jsx)(eA,{className:"w-6 h-6"}),unlocked:!1,condition:"all_subjects_in_grade",points:400,rarity:"epic"},{id:"genius",title:"Гений",description:"Изучите все темы",icon:(0,y.jsx)(ek,{className:"w-6 h-6"}),unlocked:!1,condition:"complete_all",points:1e3,rarity:"legendary"},{id:"streak_100",title:"Легенда упорства",description:"Занимайтесь 100 дней подряд",icon:(0,y.jsx)(eq,{className:"w-6 h-6"}),unlocked:!1,condition:"100_day_streak",points:1e3,rarity:"legendary"}],eP=[{id:"daily_topics",title:"Изучить темы",description:"Изучите 3 темы сегодня",target:3,progress:0,reward:30,completed:!1,type:"topics"},{id:"daily_quiz",title:"Пройти тест",description:"Пройдите 1 квиз сегодня",target:1,progress:0,reward:25,completed:!1,type:"quizzes"},{id:"daily_points",title:"Набрать очки",description:"Наберите 50 очков сегодня",target:50,progress:0,reward:20,completed:!1,type:"points"},{id:"daily_streak",title:"Поддержать серию",description:"Занимайтесь без перерыва",target:1,progress:0,reward:15,completed:!1,type:"topics"},{id:"daily_perfect",title:"Идеальный тест",description:"Получите 100% в квизе",target:1,progress:0,reward:50,completed:!1,type:"quizzes"}],eE=(0,ef.default)("pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),eM=(0,ef.default)("calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]),eI=(0,ef.default)("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),eR=(0,ef.default)("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]),ez=(0,ef.default)("palette",[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]]),e_={id:0,name:"Подготовительный класс",shortName:"Подг.",subjects:[{id:"prep-writing",title:"Подготовка к письму",icon:(0,y.jsx)(eE,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Развитие навыков письма и мелкой моторики",sections:[{id:"s1",title:"Развитие моторики",description:"Подготовка руки к письму",topics:[{id:"t1",title:"Обведение контуров",description:"Учимся обводить фигуры по контуру",lessons:[{id:"l1",title:"Обведение простых фигур",description:"Круги, квадраты, треугольники",theory:`<h3>Что такое обведение контуров?</h3>
                  <p>Обведение контуров — это первое упражнение для подготовки руки к письму. Ребёнок учится контролировать движение карандаша, следуя по готовой линии.</p>
                  <h4>Почему это важно?</h4>
                  <ul>
                    <li>Развивает мелкую моторику пальцев</li>
                    <li>Учит координировать движения руки и глаза</li>
                    <li>Подготавливает мышцы руки к письму</li>
                    <li>Формирует правильный захват карандаша</li>
                  </ul>
                  <h4>Как выполнять?</h4>
                  <p>Начинайте с простых фигур: круги, квадраты, треугольники. Постепенно переходите к более сложным узорам и орнаментам.</p>`,examples:["Обведи солнышко","Обведи листочек","Обведи геометрические фигуры"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Обведение узоров",description:"Более сложные орнаменты",theory:`<h3>Узоры и орнаменты</h3>
                  <p>После простых фигур переходим к узорам. Это развивает внимание и точность движений.</p>
                  <h4>Виды узоров:</h4>
                  <ul>
                    <li>Волнистые линии</li>
                    <li>Петельки</li>
                    <li>Заборчики</li>
                    <li>Лесенки</li>
                  </ul>`,examples:["Нарисуй волну","Сделай заборчик","Петельки как у букв"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Развитие мелкой моторики",description:"Упражнения для развития пальцев",lessons:[{id:"l1",title:"Пальчиковая гимнастика",description:"Упражнения для пальчиков",theory:`<h3>Мелкая моторика — основа письма</h3>
                  <p>Мелкая моторика — это способность выполнять точные движения пальцами и кистями рук. Она напрямую связана с развитием речи и мышления.</p>
                  <h4>Упражнения для развития:</h4>
                  <ul>
                    <li>Пальчиковая гимнастика</li>
                    <li>Лепка из пластилина</li>
                    <li>Нанизывание бусин</li>
                    <li>Вырезание ножницами</li>
                    <li>Рисование и раскрашивание</li>
                  </ul>`,examples:['Игра "Пальчики здороваются"',"Лепка шариков из пластилина","Сбор пирамидки"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"s2",title:"Написание букв",description:"Знакомство с буквами и их написанием",topics:[{id:"t1",title:"Печатные буквы",description:"Учимся писать печатные буквы",lessons:[{id:"l1",title:"Буквы А, О, У, И",description:"Простые гласные буквы",theory:`<h3>Первые буквы</h3>
                  <p>Начинаем с простых гласных букв. Они состоят из простых элементов и легко запоминаются.</p>
                  <h4>Буква А:</h4>
                  <p>Состоит из двух наклонных линий и перекладины. Похожа на крышу домика.</p>
                  <h4>Буква О:</h4>
                  <p>Овал, похож на колечко или солнышко.</p>
                  <h4>Буква У:</h4>
                  <p>Две линии, соединённые внизу. Похожа на веточку.</p>
                  <h4>Буква И:</h4>
                  <p>Две вертикальные линии, соединённые наклонной.</p>`,examples:["Напиши букву А","Обведи букву О","Допиши букву У"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"l2",title:"Буквы М, С, Х, Т",description:"Простые согласные буквы",theory:`<h3>Согласные буквы</h3>
                  <p>Продолжаем знакомство с буквами. Эти согласные буквы тоже простые для написания.</p>
                  <h4>Буква М:</h4>
                  <p>Две вертикальные линии и две наклонные внизу. Похожа на горки.</p>
                  <h4>Буква С:</h4>
                  <p>Полумесяц, половинка овала.</p>
                  <h4>Буква Х:</h4>
                  <p>Две наклонные линии, пересекающиеся посередине.</p>
                  <h4>Буква Т:</h4>
                  <p>Вертикальная линия и перекладина сверху.</p>`,examples:["Напиши букву М","Обведи букву С","Допиши букву Х"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"s3",title:"Написание слогов",description:"Соединяем буквы в слоги",topics:[{id:"t1",title:"Простые слоги",description:"МА, ПА, ТА, НА и подобные",lessons:[{id:"l1",title:"Слоги с буквой А",description:"МА, ПА, ТА, НА, СА",theory:`<h3>Что такое слог?</h3>
                  <p>Слог — это часть слова, которая произносится одним выдохом. Слог может состоять из одной буквы или нескольких.</p>
                  <h4>Простые слоги:</h4>
                  <ul>
                    <li><strong>МА</strong> — согласная М + гласная А</li>
                    <li><strong>ПА</strong> — согласная П + гласная А</li>
                    <li><strong>ТА</strong> — согласная Т + гласная А</li>
                    <li><strong>НА</strong> — согласная Н + гласная А</li>
                  </ul>
                  <h4>Слова из этих слогов:</h4>
                  <p>МА-МА, ПА-ПА, ТА-ТА, НА-ТА</p>`,examples:["Напиши слог МА","Прочитай: МА-МА","Составь слово из слогов"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"l2",title:"Слоги с буквой О",description:"МО, ПО, ТО, НО, СО",theory:`<h3>Слоги с буквой О</h3>
                  <p>Теперь учимся писать слоги с гласной О.</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li><strong>МО</strong> — МО-ЛО-КО</li>
                    <li><strong>ПО</strong> — ПО-ЛЕ</li>
                    <li><strong>ТО</strong> — ТО-М</li>
                    <li><strong>НО</strong> — НО-ГА</li>
                  </ul>`,examples:["Напиши слог МО","Прочитай слово МО-ЛО-КО","Найди слог в слове"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"t2",title:"Слоги из двух согласных",description:"СЛО, КРО, ПРИ и подобные",lessons:[{id:"l1",title:"Слоги со стечением согласных",description:"СЛО, КРО, ПРИ",theory:`<h3>Сложные слоги</h3>
                  <p>Некоторые слоги начинаются с двух согласных звуков. Это сложнее для написания и чтения.</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li><strong>СЛО</strong> — СЛО-ВО</li>
                    <li><strong>КРО</strong> — КРО-ВА</li>
                    <li><strong>ПРИ</strong> — ПРИ-РО-ДА</li>
                  </ul>
                  <h4>Совет:</h4>
                  <p>Произноси слог целиком, не разделяй согласные!</p>`,examples:["Прочитай: СЛО-ВО","Напиши слог КРО","Раздели слово на слоги"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Какой навык развивает обведение контуров?",options:["Память","Мелкую моторику","Слух","Зрение"],correctAnswer:1,explanation:"Обведение контуров развивает мелкую моторику рук — способность выполнять точные движения пальцами.",difficulty:"easy",points:10},{id:"q2",question:"Из каких элементов состоит буква А?",options:["Один круг","Две наклонные линии и перекладина","Одна линия","Три круга"],correctAnswer:1,explanation:"Буква А состоит из двух наклонных линий и перекладины между ними.",difficulty:"easy",points:10},{id:"q3",question:"Что такое слог?",options:["Одна буква","Часть слова, произносимая одним выдохом","Целое слово","Предложение"],correctAnswer:1,explanation:"Слог — это часть слова, которая произносится одним выдохом.",difficulty:"easy",points:10},{id:"q4",question:'Сколько слогов в слове "МА-МА"?',options:["1","2","3","4"],correctAnswer:1,explanation:"В слове МА-МА два слога: МА и МА.",difficulty:"easy",points:10},{id:"q5",question:"Какая буква похожа на крышу домика?",options:["О","А","М","Т"],correctAnswer:1,explanation:"Буква А похожа на крышу домика — две наклонные линии и перекладина.",difficulty:"easy",points:10},{id:"q6",question:"Какое слово составляют слоги ПА-ПА?",options:["МАМА","ПАПА","ТАТА","НАНА"],correctAnswer:1,explanation:"Слоги ПА-ПА составляют слово ПАПА.",difficulty:"easy",points:10}]},{id:"prep-math",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-cyan-500",description:"Знакомство с числами и основами математики",sections:[{id:"s1",title:"Счёт до 10",description:"Учимся считать от 1 до 10",topics:[{id:"t1",title:"Числа 1-5",description:"Первые числа и их написание",lessons:[{id:"l1",title:"Знакомство с числами 1, 2, 3",description:"Учимся считать до трёх",theory:`<h3>Первые шаги в математике</h3>
                  <p>Счёт — это основа всей математики. Начинать нужно с простого пересчёта предметов.</p>
                  <h4>Число 1 (ОДИН):</h4>
                  <p>Одно яблоко, один шарик, один домик.</p>
                  <h4>Число 2 (ДВА):</h4>
                  <p>Два уха, два глаза, две руки.</p>
                  <h4>Число 3 (ТРИ):</h4>
                  <p>Три медведя, три поросёнка, три колеса у трицикла.</p>`,examples:["Посчитай пальчики на руке","Сколько яблок на столе?","Найди один предмет"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Числа 4 и 5",description:"Продолжаем считать",theory:`<h3>Числа 4 и 5</h3>
                  <h4>Число 4 (ЧЕТЫРЕ):</h4>
                  <p>Четыре лапы у кошки, четыре колеса у машины, четыре времени года.</p>
                  <h4>Число 5 (ПЯТЬ):</h4>
                  <p>Пять пальцев на руке, пять лучей у звезды.</p>
                  <h4>Запомни:</h4>
                  <p>1, 2, 3, 4, 5 — научился я считать!</p>`,examples:["Сколько лап у собаки?","Посчитай до 5","Покажи 4 пальчика"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Числа 6-10",description:"Счёт от шести до десяти",lessons:[{id:"l1",title:"Числа 6, 7, 8",description:"Продолжаем изучать числа",theory:`<h3>Числа 6, 7, 8</h3>
                  <h4>Число 6 (ШЕСТЬ):</h4>
                  <p>Шесть лапок у насекомых, шесть граней у кубика.</p>
                  <h4>Число 7 (СЕМЬ):</h4>
                  <p>Семь дней в неделе, семь цветов радуги.</p>
                  <h4>Число 8 (ВОСЕМЬ):</h4>
                  <p>Восемь ног у паука, восемь октав в музыке.</p>`,examples:["Сколько дней в неделе?","Посчитай до 8","Найди 7 предметов"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Числа 9 и 10",description:"Завершаем счёт до десяти",theory:`<h3>Числа 9 и 10</h3>
                  <h4>Число 9 (ДЕВЯТЬ):</h4>
                  <p>Девять — самое большое однозначное число.</p>
                  <h4>Число 10 (ДЕСЯТЬ):</h4>
                  <p>Десять — первое двузначное число. Десять пальцев на двух руках.</p>
                  <h4>Молодец!</h4>
                  <p>Теперь ты умеешь считать от 1 до 10!</p>`,examples:["Посчитай до 10","Сколько пальцев на двух руках?","Обратный счёт от 10"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"s2",title:"Счёт до 20",description:"Учимся считать до двадцати",topics:[{id:"t1",title:"Числа 11-15",description:"Первые двузначные числа",lessons:[{id:"l1",title:"Образование чисел 11-15",description:"Как получаются числа после 10",theory:`<h3>Числа после десяти</h3>
                  <p>Когда мы прибавляем к 10 ещё один, получается 11 (один-на-дцать).</p>
                  <h4>Названия чисел:</h4>
                  <ul>
                    <li><strong>11</strong> — одиннадцать (один на десять)</li>
                    <li><strong>12</strong> — двенадцать (два на десять)</li>
                    <li><strong>13</strong> — тринадцать (три на десять)</li>
                    <li><strong>14</strong> — четырнадцать</li>
                    <li><strong>15</strong> — пятнадцать</li>
                  </ul>`,examples:["Посчитай от 10 до 15","Какое число после 12?","Напиши число 13"],completed:!1,difficulty:"medium",estimatedTime:20}]},{id:"t2",title:"Числа 16-20",description:"Завершаем счёт до двадцати",lessons:[{id:"l1",title:"Образование чисел 16-20",description:"Последние числа второго десятка",theory:`<h3>Числа 16-20</h3>
                  <h4>Названия чисел:</h4>
                  <ul>
                    <li><strong>16</strong> — шестнадцать</li>
                    <li><strong>17</strong> — семнадцать</li>
                    <li><strong>18</strong> — восемнадцать</li>
                    <li><strong>19</strong> — девятнадцать</li>
                    <li><strong>20</strong> — двадцать (два десятка)</li>
                  </ul>
                  <h4>Запомни:</h4>
                  <p>20 = 2 десятка = двадцать!</p>`,examples:["Посчитай от 15 до 20","Какое число перед 20?","Напиши число 17"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"s3",title:"Сравнение чисел",description:"Больше, меньше, равно",topics:[{id:"t1",title:"Знаки сравнения",description:"Учимся сравнивать числа",lessons:[{id:"l1",title:"Больше и меньше",description:"Знаки > и <",theory:`<h3>Сравниваем количества</h3>
                  <p>Важно уметь сравнивать числа: какое больше, какое меньше.</p>
                  <h4>Знаки сравнения:</h4>
                  <ul>
                    <li><strong>></strong> больше (птичка открывает клюв к большему числу)</li>
                    <li><strong><</strong> меньше</li>
                    <li><strong>=</strong> равно (две одинаковые палочки)</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>5 > 3 (пять больше трёх)<br/>
                  2 < 4 (два меньше четырёх)<br/>
                  3 = 3 (три равно трём)</p>`,examples:["Сравни: 3 и 5","Поставь знак > или <","Где больше?"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Сравнение групп предметов",description:"Практическое сравнение",lessons:[{id:"l1",title:"Сравниваем группы",description:"Где больше, где меньше?",theory:`<h3>Сравниваем группы</h3>
                  <p>Чтобы сравнить группы предметов, нужно посчитать количество в каждой группе.</p>
                  <h4>Пример:</h4>
                  <p>🍎🍎🍎 (3 яблока) и 🍐🍐🍐🍐 (4 груши)</p>
                  <p>3 < 4 — яблок меньше, чем груш</p>
                  <h4>Как сделать поровну:</h4>
                  <ul>
                    <li>Добавить яблоки</li>
                    <li>Убрать груши</li>
                  </ul>`,examples:["Сравни кружочки","Где больше звёздочек?","Сделай поровну"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Сколько пальцев на одной руке?",options:["3","4","5","6"],correctAnswer:2,explanation:"На одной руке 5 пальцев: большой, указательный, средний, безымянный и мизинец.",difficulty:"easy",points:10},{id:"q2",question:"Какое число больше: 7 или 5?",options:["5","7","Они равны","Не знаю"],correctAnswer:1,explanation:"7 больше, чем 5. Когда считаем: 1, 2, 3, 4, 5, 6, 7 — число 7 идёт позже.",difficulty:"easy",points:10},{id:"q3",question:"Какое число идёт после 9?",options:["8","10","11","0"],correctAnswer:1,explanation:"После 9 идёт число 10. Это первое двузначное число!",difficulty:"easy",points:10},{id:"q4",question:"Сколько дней в неделе?",options:["5","6","7","8"],correctAnswer:2,explanation:"В неделе 7 дней: понедельник, вторник, среда, четверг, пятница, суббота, воскресенье.",difficulty:"easy",points:10},{id:"q5",question:"Какой знак ставится, когда числа равны?",options:[">","<","=","+"],correctAnswer:2,explanation:"Знак = означает, что числа равны. Например: 5 = 5.",difficulty:"easy",points:10},{id:"q6",question:"Какое число состоит из двух десятков?",options:["10","12","19","20"],correctAnswer:3,explanation:"20 = 2 десятка. Двадцать — это два раза по десять.",difficulty:"medium",points:15}]},{id:"prep-world",title:"Окружающий мир",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-emerald-500",description:"Знакомство с природой и окружающим миром",sections:[{id:"s1",title:"Природа",description:"Что такое природа",topics:[{id:"t1",title:"Живая и неживая природа",description:"Различаем живое и неживое",lessons:[{id:"l1",title:"Что такое природа?",description:"Знакомство с природой",theory:`<h3>Природа вокруг нас</h3>
                  <p>Природа — это всё, что создано без участия человека: солнце, небо, деревья, животные.</p>
                  <h4>Живая природа:</h4>
                  <ul>
                    <li>Люди</li>
                    <li>Животные</li>
                    <li>Растения</li>
                    <li>Грибы</li>
                  </ul>
                  <h4>Неживая природа:</h4>
                  <ul>
                    <li>Солнце, луна, звёзды</li>
                    <li>Камни, песок</li>
                    <li>Вода, воздух</li>
                  </ul>`,examples:["Найди предмет живой природы","Что относится к неживой природе?","Сравни камень и цветок"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"s2",title:"Животные",description:"Разнообразие животного мира",topics:[{id:"t1",title:"Домашние животные",description:"Наши питомцы",lessons:[{id:"l1",title:"Кошки и собаки",description:"Самые популярные питомцы",theory:`<h3>Наши друзья — домашние животные</h3>
                  <p>Домашние животные живут с людьми. Мы заботимся о них, а они дарят нам любовь и радость.</p>
                  <h4>🐱 Кошка:</h4>
                  <ul>
                    <li>Мяукает</li>
                    <li>Ловит мышей</li>
                    <li>Любит спать</li>
                    <li>Мурлычет, когда довольна</li>
                  </ul>
                  <h4>🐕 Собака:</h4>
                  <ul>
                    <li>Лает</li>
                    <li>Охраняет дом</li>
                    <li>Верный друг</li>
                    <li>Любит гулять</li>
                  </ul>`,examples:["Как кричит кошка?","Кто охраняет дом?","Покажи собаку на картинке"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Дикие животные",description:"Животные леса",lessons:[{id:"l1",title:"Животные леса",description:"Кто живёт в лесу",theory:`<h3>Дикие животные</h3>
                  <p>Дикие животные живут в природе, сами добывают еду и строят жилища.</p>
                  <h4>Животные леса:</h4>
                  <ul>
                    <li>🐻 Медведь — большой, спит зимой</li>
                    <li>🦊 Лиса — рыжая, хитрая</li>
                    <li>🐰 Заяц — серый зимой, серый летом</li>
                    <li>🦔 Ёжик — колючий, сворачивается в клубок</li>
                    <li>🦌 Олень — красивые рога</li>
                  </ul>`,examples:["Кто спит зимой?","Какой цвет у лисы?","Кто колючий?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"s3",title:"Растения",description:"Мир растений",topics:[{id:"t1",title:"Деревья и кустарники",description:"Разные виды растений",lessons:[{id:"l1",title:"Деревья",description:"Высокие растения с одним стволом",theory:`<h3>Деревья</h3>
                  <p>Деревья — это крупные растения с одним главным стволом.</p>
                  <h4>Части дерева:</h4>
                  <ul>
                    <li>Корни — в земле, пьют воду</li>
                    <li>Ствол — главный, толстый</li>
                    <li>Ветки — растут от ствола</li>
                    <li>Листья — на ветках</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>🌳 Дуб — мощное дерево</li>
                    <li>🌲 Сосна — хвойное дерево</li>
                    <li>🍎 Яблоня — даёт яблоки</li>
                  </ul>`,examples:["Назови части дерева","Какое дерево даёт яблоки?","Найди дерево на картинке"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Цветы",description:"Красивые растения",lessons:[{id:"l1",title:"Цветы",description:"Полевые и садовые цветы",theory:`<h3>Цветы</h3>
                  <p>Цветы — это самые красивые растения. Они бывают дикие и культурные.</p>
                  <h4>Полевые цветы:</h4>
                  <ul>
                    <li>🌼 Ромашка — белые лепестки</li>
                    <li>🌻 Одуванчик — жёлтый, пушистый</li>
                    <li>🌷 Колокольчик — синий</li>
                  </ul>
                  <h4>Садовые цветы:</h4>
                  <ul>
                    <li>🌹 Роза — красивая, ароматная</li>
                    <li>🌷 Тюльпан — весенний цветок</li>
                    <li>🌸 Пион — большой, пушистый</li>
                  </ul>`,examples:["Какого цвета ромашка?","Найди розу","Какой цветок жёлтый?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"s4",title:"Времена года",description:"Зима, весна, лето, осень",topics:[{id:"t1",title:"Зима и весна",description:"Холодные времена года",lessons:[{id:"l1",title:"Зима",description:"Снежное время года",theory:`<h3>❄️ Зима</h3>
                  <p>Зима — самое холодное время года. Длится декабрь, январь, февраль.</p>
                  <h4>Признаки зимы:</h4>
                  <ul>
                    <li>Холодно</li>
                    <li>Снег на земле</li>
                    <li>Дни короткие</li>
                    <li>Деревья без листьев</li>
                  </ul>
                  <h4>Зимние забавы:</h4>
                  <ul>
                    <li>Лепить снеговика</li>
                    <li>Кататься на лыжах</li>
                    <li>Новогодняя ёлка</li>
                  </ul>`,examples:["Какие зимние месяцы?","Что можно лепить из снега?","Какой праздник зимой?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Весна",description:"Пробуждение природы",theory:`<h3>🌸 Весна</h3>
                  <p>Весна идёт после зимы. Длится март, апрель, май.</p>
                  <h4>Признаки весны:</h4>
                  <ul>
                    <li>Тает снег</li>
                    <li>Теплеет</li>
                    <li>Появляются почки и листья</li>
                    <li>Прилетают птицы</li>
                    <li>Расцветают цветы</li>
                  </ul>
                  <h4>Весенние цветы:</h4>
                  <p>Подснежник, мать-и-мачеха, тюльпан</p>`,examples:["Какие весенние месяцы?","Что происходит со снегом?","Какие птицы прилетают?"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Лето и осень",description:"Тёплое и дождливое времена года",lessons:[{id:"l1",title:"Лето",description:"Самое тёплое время года",theory:`<h3>☀️ Лето</h3>
                  <p>Лето — самое тёплое время года. Длится июнь, июль, август.</p>
                  <h4>Признаки лета:</h4>
                  <ul>
                    <li>Жарко, много солнца</li>
                    <li>Дни длинные</li>
                    <li>Много ягод и фруктов</li>
                    <li>Школьные каникулы</li>
                  </ul>
                  <h4>Летние занятия:</h4>
                  <ul>
                    <li>Купаться в речке</li>
                    <li>Собирать ягоды</li>
                    <li>Гулять в лесу</li>
                  </ul>`,examples:["Какие летние месяцы?","Что можно купать летом?","Какие ягоды созревают?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Осень",description:"Золотое время года",theory:`<h3>🍂 Осень</h3>
                  <p>Осень идёт после лета. Длится сентябрь, октябрь, ноябрь.</p>
                  <h4>Признаки осени:</h4>
                  <ul>
                    <li>Листья желтеют и падают</li>
                    <li>Становится холоднее</li>
                    <li>Часто идут дожди</li>
                    <li>Птицы улетают на юг</li>
                  </ul>
                  <h4>Осенние дары:</h4>
                  <ul>
                    <li>Яблоки, груши</li>
                    <li>Грибы</li>
                    <li>Овощи с огорода</li>
                  </ul>`,examples:["Какие осенние месяцы?","Почему листья падают?","Куда улетают птицы?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Какое время года наступает после зимы?",options:["Лето","Осень","Весна","Зима"],correctAnswer:2,explanation:"После зимы наступает весна! Снег тает, солнышко греет теплее.",difficulty:"easy",points:10},{id:"q2",question:'Какое животное говорит "мяу"?',options:["Собака","Корова","Кошка","Свинья"],correctAnswer:2,explanation:'Кошка говорит "мяу"! Собака лает "гав", корова мычит "му".',difficulty:"easy",points:10},{id:"q3",question:"Что относится к живой природе?",options:["Камень","Дерево","Вода","Солнце"],correctAnswer:1,explanation:"Дерево — это живая природа. Оно растёт, дышит, питается.",difficulty:"easy",points:10},{id:"q4",question:"Какой праздник бывает зимой?",options:["День рождения","Новый год","8 Марта","1 Сентября"],correctAnswer:1,explanation:"Новый год — зимний праздник, его отмечают 1 января!",difficulty:"easy",points:10},{id:"q5",question:"Какие месяцы относятся к лету?",options:["Март, апрель, май","Июнь, июль, август","Сентябрь, октябрь, ноябрь","Декабрь, январь, февраль"],correctAnswer:1,explanation:"Летние месяцы: июнь, июль, август — самые тёплые месяцы года.",difficulty:"easy",points:10},{id:"q6",question:"Кто спит зимой в берлоге?",options:["Заяц","Лиса","Медведь","Волк"],correctAnswer:2,explanation:"Медведь зимой спит в берлоге. Это называется зимняя спячка.",difficulty:"easy",points:10}]},{id:"prep-speech",title:"Развитие речи",icon:(0,y.jsx)(eR,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-amber-500",description:"Развитие речи и речевого слуха",sections:[{id:"s1",title:"Звуки речи",description:"Знакомство со звуками",topics:[{id:"t1",title:"Гласные звуки",description:"Звуки, которые можно пропеть",lessons:[{id:"l1",title:"Звуки А, О, У, И, Ы",description:"Основные гласные звуки",theory:`<h3>Гласные звуки</h3>
                  <p>Гласные звуки можно пропеть. При их произнесении воздух свободно проходит через рот.</p>
                  <h4>Гласные звуки:</h4>
                  <ul>
                    <li><strong>А</strong> — широко открываем рот</li>
                    <li><strong>О</strong> — округляем губы</li>
                    <li><strong>У</strong> — вытягиваем губы трубочкой</li>
                    <li><strong>И</strong> — растягиваем губы в улыбке</li>
                    <li><strong>Ы</strong> — среднее положение губ</li>
                  </ul>
                  <h4>Запомни!</h4>
                  <p>Гласных звуков — 6: А, О, У, И, Ы, Э</p>`,examples:["Произнеси звук А","Проспой звук О","Угадай звук по артикуляции"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Согласные звуки",description:"Звуки, которые нельзя пропеть",lessons:[{id:"l1",title:"Твёрдые и мягкие согласные",description:"Различаем твёрдые и мягкие звуки",theory:`<h3>Согласные звуки</h3>
                  <p>Согласные звуки нельзя пропеть. При их произнесении воздух встречает преграду.</p>
                  <h4>Твёрдые согласные:</h4>
                  <p>М, Н, Р, Л, Б, В, Г, Д, Ж, З, К, П, С, Т, Ф, Х, Ц, Ч, Ш, Щ</p>
                  <h4>Мягкие согласные:</h4>
                  <p>Мь, Нь, Рь, Ль, Бь, Вь, Гь, Дь, Зь, Кь, Пь, Сь, Ть, Фь, Хь</p>
                  <h4>Пара звуков:</h4>
                  <p>М — Мь (мыло — мишка)</p>
                  <p>Н — Нь (нос — нёс)</p>`,examples:["Произнеси М и Мь","Определи: мягкий или твёрдый?","Найди пару звуков"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"s2",title:"Слова",description:"Работа со словами",topics:[{id:"t1",title:"Деление слов на слоги",description:"Учимся делить слова",lessons:[{id:"l1",title:"Слоги в словах",description:"Сколько слогов в слове?",theory:`<h3>Слоги в словах</h3>
                  <p>Слово можно разделить на части — слоги. Сколько гласных, столько и слогов!</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li><strong>ДОМ</strong> — 1 слог (одна гласная О)</li>
                    <li><strong>МА-МА</strong> — 2 слога (две гласные А и А)</li>
                    <li><strong>МО-ЛО-КО</strong> — 3 слога (три гласные)</li>
                  </ul>
                  <h4>Правило:</h4>
                  <p>Гласные образуют слог! Согласные присоединяются к гласным.</p>`,examples:["Раздели слово на слоги",'Сколько слогов в слове "КОШКА"?',"Посчитай гласные"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Ударение",description:"Ударный слог",lessons:[{id:"l1",title:"Ударение в словах",description:"Какой слог ударный?",theory:`<h3>Ударение</h3>
                  <p>Ударение — это выделение одного слога в слове. Ударный слог произносится сильнее.</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>ДО'М — ударение на слог ДОМ</li>
                    <li>КО'Ш-КА — ударение на первый слог</li>
                    <li>МА-ЛИ'НА — ударение на второй слог</li>
                  </ul>
                  <h4>Как найти ударение:</h4>
                  <p>Произнеси слово и послушай, какой слог звучит громче!</p>`,examples:["Поставь ударение в слове","Какой слог ударный?","Произнеси с ударением"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"s3",title:"Предложения",description:"Работа с предложениями",topics:[{id:"t1",title:"Составление предложений",description:"Учимся строить предложения",lessons:[{id:"l1",title:"Что такое предложение?",description:"Предложение выражает мысль",theory:`<h3>Предложение</h3>
                  <p>Предложение — это одно или несколько слов, которые выражают законченную мысль.</p>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Предложение начинается с большой буквы</li>
                    <li>В конце предложения ставится точка, вопросительный или восклицательный знак</li>
                    <li>Слова в предложении связаны по смыслу</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>Мама готовит обед.<br/>
                  Где моя игрушка?<br/>
                  Какой красивый цветок!</p>`,examples:["Составь предложение","Найди начало и конец предложения","Большая буква и точка"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"t2",title:"Слова в предложении",description:"Порядок слов",lessons:[{id:"l1",title:"Порядок слов",description:"Слова должны стоять правильно",theory:`<h3>Порядок слов в предложении</h3>
                  <p>Слова в предложении должны стоять в определённом порядке, иначе меняется смысл.</p>
                  <h4>Пример:</h4>
                  <p>✅ Мама моет посуду. (правильно)<br/>
                  ❌ Посуду моет мама. (тоже можно, но акцент другой)<br/>
                  ❌ Моет мама посуду. (неправильный порядок)</p>
                  <h4>Совет:</h4>
                  <p>Сначала говорим КТО? ЧТО ДЕЛАЕТ? ЧТО? или С ЧЕМ?</p>`,examples:["Расставь слова правильно","Исправь предложение","Составь из слов предложение"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Какие звуки можно пропеть?",options:["Согласные","Гласные","Твёрдые","Мягкие"],correctAnswer:1,explanation:"Гласные звуки можно пропеть: А, О, У, И, Ы, Э.",difficulty:"easy",points:10},{id:"q2",question:'Сколько слогов в слове "МА-МА"?',options:["1","2","3","4"],correctAnswer:1,explanation:"В слове МА-МА два слога, потому что две гласные буквы А.",difficulty:"easy",points:10},{id:"q3",question:"С какой буквы начинается предложение?",options:["С маленькой","С большой","С любой","С цифры"],correctAnswer:1,explanation:"Предложение всегда начинается с большой (заглавной) буквы.",difficulty:"easy",points:10},{id:"q4",question:"Какой знак ставится в конце вопросительного предложения?",options:["Точка","Запятая","Вопросительный знак","Восклицательный знак"],correctAnswer:2,explanation:"В конце вопросительного предложения ставится вопросительный знак (?).",difficulty:"easy",points:10},{id:"q5",question:"Сколько гласных звуков в русском языке?",options:["5","6","10","33"],correctAnswer:1,explanation:"В русском языке 6 гласных звуков: А, О, У, И, Ы, Э.",difficulty:"medium",points:15},{id:"q6",question:"Что такое ударение?",options:["Точка в конце","Выделение слога","Большая буква","Запятая"],correctAnswer:1,explanation:"Ударение — это выделение одного слога в слове голосом.",difficulty:"easy",points:10}]},{id:"prep-art",title:"Творчество",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Развитие творческих способностей",sections:[{id:"s1",title:"Рисование",description:"Учимся рисовать",topics:[{id:"t1",title:"Цвета и краски",description:"Знакомство с цветами",lessons:[{id:"l1",title:"Основные цвета",description:"Красный, жёлтый, синий",theory:`<h3>Основные цвета</h3>
                  <p>Три основных цвета: красный, жёлтый, синий. Из них можно получить все остальные!</p>
                  <h4>Смешивание цветов:</h4>
                  <ul>
                    <li>🔴 Красный + 🟡 Жёлтый = 🟠 Оранжевый</li>
                    <li>🔴 Красный + 🔵 Синий = 🟣 Фиолетовый</li>
                    <li>🔵 Синий + 🟡 Жёлтый = 🟢 Зелёный</li>
                  </ul>
                  <h4>Тёплые и холодные цвета:</h4>
                  <ul>
                    <li>Тёплые: красный, оранжевый, жёлтый</li>
                    <li>Холодные: синий, зелёный, фиолетовый</li>
                  </ul>`,examples:["Назови основные цвета","Смешай красный и жёлтый","Какой цвет тёплый?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Рисуем простые фигуры",description:"Круг, квадрат, треугольник",theory:`<h3>Простые фигуры</h3>
                  <p>Все рисунки состоят из простых фигур!</p>
                  <h4>Фигуры:</h4>
                  <ul>
                    <li>⭕ Круг — солнышко, мячик, лицо</li>
                    <li>🟦 Квадрат — домик, окно, книга</li>
                    <li>🔺 Треугольник — крыша, ёлочка, горка</li>
                  </ul>
                  <h4>Рисуем солнышко:</h4>
                  <p>1. Рисуем круг<br/>
                  2. Рисуем лучики-палочки вокруг</p>`,examples:["Нарисуй круг","Нарисуй солнышко","Составь домик из фигур"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"s2",title:"Лепка",description:"Работа с пластилином",topics:[{id:"t1",title:"Основы лепки",description:"Простые формы",lessons:[{id:"l1",title:"Шар и колбаска",description:"Базовые формы из пластилина",theory:`<h3>Лепим из пластилина</h3>
                  <p>Пластилин — мягкий материал, из которого можно лепить разные фигурки.</p>
                  <h4>Базовые формы:</h4>
                  <ul>
                    <li><strong>Шар</strong> — катаем между ладонями круговыми движениями</li>
                    <li><strong>Колбаска</strong> — катаем между ладонями вперёд-назад</li>
                    <li><strong>Блинчик</strong> — сплющиваем шар</li>
                  </ul>
                  <h4>Что можно слепить:</h4>
                  <ul>
                    <li>Гусеница — несколько шариков</li>
                    <li>Змея — длинная колбаска</li>
                    <li>Гриб — шар и колбаска</li>
                  </ul>`,examples:["Слепи шарик","Сделай колбаску","Слепи гусеницу"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"s3",title:"Аппликация",description:"Вырезание и наклеивание",topics:[{id:"t1",title:"Работа с бумагой",description:"Вырезаем и клеим",lessons:[{id:"l1",title:"Безопасность с ножницами",description:"Правила работы",theory:`<h3>Правила работы с ножницами</h3>
                  <p>Ножницы — острый инструмент. Нужно работать аккуратно!</p>
                  <h4>Правила:</h4>
                  <ul>
                    <li>✅ Держи ножницы правильно</li>
                    <li>✅ Режь от себя</li>
                    <li>✅ Не держи ножницы остриём вверх</li>
                    <li>✅ Не бегай с ножницами</li>
                    <li>✅ Передавай ножницы кольцами вперёд</li>
                  </ul>
                  <h4>Техника:</h4>
                  <p>Большой палец в верхнем кольце, указательный и средний — в нижнем.</p>`,examples:["Как держать ножницы?","Как передавать ножницы?","Покажи правильно"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"l2",title:"Простые аппликации",description:"Вырезаем и наклеиваем",theory:`<h3>Аппликация</h3>
                  <p>Аппликация — это вырезание фигур из бумаги и наклеивание их на основу.</p>
                  <h4>Этапы работы:</h4>
                  <ol>
                    <li>Выбери рисунок</li>
                    <li>Подбери цвета бумаги</li>
                    <li>Вырежи детали</li>
                    <li>Намажь клеем</li>
                    <li>Приклей на основу</li>
                  </ol>
                  <h4>Простые аппликации:</h4>
                  <ul>
                    <li>🏠 Домик (квадрат + треугольник)</li>
                    <li>🌳 Дерево (прямоугольник + круг)</li>
                    <li>🌸 Цветок (круги + полоска)</li>
                  </ul>`,examples:["Вырежи квадрат",'Сделай аппликацию "Домик"',"Приклей детали"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Какой цвет получится, если смешать красный и жёлтый?",options:["Зелёный","Оранжевый","Фиолетовый","Синий"],correctAnswer:1,explanation:"Красный + Жёлтый = Оранжевый. Как апельсин!",difficulty:"easy",points:10},{id:"q2",question:"Как называется фигура без углов?",options:["Квадрат","Треугольник","Круг","Прямоугольник"],correctAnswer:2,explanation:"Круг — фигура без углов, круглая как солнышко!",difficulty:"easy",points:10},{id:"q3",question:"Как правильно передавать ножницы?",options:["Остриём вперёд","Кольцами вперёд","В кармане","Бросить"],correctAnswer:1,explanation:"Ножницы нужно передавать кольцами вперёд, чтобы не поранить другого человека.",difficulty:"easy",points:10},{id:"q4",question:"Какая форма нужна для лепки гусеницы?",options:["Только колбаски","Только шарики","Несколько шариков","Только блинчики"],correctAnswer:2,explanation:"Гусеницу делают из нескольких шариков, соединённых друг с другом.",difficulty:"easy",points:10},{id:"q5",question:"Какие цвета относятся к тёплым?",options:["Синий, зелёный","Красный, оранжевый, жёлтый","Фиолетовый, синий","Белый, чёрный"],correctAnswer:1,explanation:"Тёплые цвета: красный, оранжевый, жёлтый — они напоминают солнце и огонь.",difficulty:"medium",points:15},{id:"q6",question:"Что такое аппликация?",options:["Лепка из пластилина","Рисование красками","Вырезание и наклеивание","Лепка из теста"],correctAnswer:2,explanation:"Аппликация — это техника, при которой вырезают фигуры из бумаги и наклеивают их на основу.",difficulty:"easy",points:10}]}]},eO=(0,ef.default)("book",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]),eD=(0,ef.default)("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),eV=(0,ef.default)("languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]),eL=(0,ef.default)("music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),eF=(0,ef.default)("dumbbell",[["path",{d:"M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z",key:"9m4mmf"}],["path",{d:"m2.5 21.5 1.4-1.4",key:"17g3f0"}],["path",{d:"m20.1 3.9 1.4-1.4",key:"1qn309"}],["path",{d:"M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z",key:"1t2c92"}],["path",{d:"m9.6 14.4 4.8-4.8",key:"6umqxw"}]]),eH=(0,ef.default)("shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]),eB=(0,ef.default)("monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),e$={id:1,name:"1 класс",shortName:"1 кл.",subjects:[{id:"math1",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Основы математики: счёт, сложение, вычитание",sections:[{id:"math1-sec1",title:"Числа и счёт",description:"Знакомство с числами от 1 до 20",topics:[{id:"math1-sec1-t1",title:"Числа от 1 до 10",description:"Знакомство с числами первого десятка",lessons:[{id:"math1-sec1-t1-l1",title:"Числа 1, 2, 3",description:"Первые три числа",theory:`<h3>🔢 Числа 1, 2, 3</h3>
                  <p>Первые три числа — это начало математики!</p>
                  <h4>Один (1)</h4>
                  <p>Один предмет: ⭐, 🍎, 🐱</p>
                  <h4>Два (2)</h4>
                  <p>Два предмета: ⭐⭐, 🍎🍎</p>
                  <h4>Три (3)</h4>
                  <p>Три предмета: ⭐⭐⭐, 🍎🍎🍎</p>`,examples:["Покажи 1 палец","Покажи 2 пальца","Сколько яблок: 🍎🍎🍎?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"math1-sec1-t1-l2",title:"Числа 4, 5, 6",description:"Продолжаем считать",theory:`<h3>🔢 Числа 4, 5, 6</h3>
                  <h4>Четыре (4)</h4>
                  <p>Четыре предмета: ⭐⭐⭐⭐</p>
                  <h4>Пять (5)</h4>
                  <p>Пять — это все пальцы на одной руке! ✋</p>
                  <h4>Шесть (6)</h4>
                  <p>Шесть предметов: ⭐⭐⭐⭐⭐⭐</p>`,examples:["Сколько пальцев на руке?","Посчитай звёзды: ⭐⭐⭐⭐"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"math1-sec1-t1-l3",title:"Числа 7, 8, 9, 10",description:"Завершаем первый десяток",theory:`<h3>🔢 Числа 7, 8, 9, 10</h3>
                  <h4>Семь (7)</h4>
                  <p>Семь дней в неделе!</p>
                  <h4>Восемь (8)</h4>
                  <p>Восемь ног у паука 🕷️</p>
                  <h4>Девять (9)</h4>
                  <p>Почти десять!</p>
                  <h4>Десять (10)</h4>
                  <p>Десять — это все пальцы на двух руках! ✋✋</p>`,examples:["Сколько дней в неделе?","Покажи 10 пальцев"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"math1-sec1-t2",title:"Сравнение чисел",description:"Больше, меньше, равно",lessons:[{id:"math1-sec1-t2-l1",title:"Знаки сравнения",description:"Знаки >, <, =",theory:`<h3>⚖️ Сравниваем числа</h3>
                  <h4>Знаки:</h4>
                  <ul>
                    <li><strong>></strong> — больше (птичка смотрит на большее)</li>
                    <li><strong><</strong> — меньше</li>
                    <li><strong>=</strong> — равно</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>5 > 3 (пять больше трёх)</p>
                  <p>2 < 7 (два меньше семи)</p>
                  <p>4 = 4 (четыре равно четырём)</p>`,examples:["Сравни: 6 _ 4","Какое число больше: 3 или 8?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"math1-sec2",title:"Арифметические действия",description:"Сложение и вычитание",topics:[{id:"math1-sec2-t1",title:"Сложение",description:"Учимся складывать числа",lessons:[{id:"math1-sec2-t1-l1",title:"Что такое сложение?",description:"Объединяем группы предметов",theory:`<h3>➕ Сложение</h3>
                  <p>Сложение — это объединение групп.</p>
                  <h4>Пример:</h4>
                  <p>🍎🍎 + 🍎 = 🍎🍎🍎</p>
                  <p>2 + 1 = 3</p>
                  <h4>Правило:</h4>
                  <p>От перестановки слагаемых сумма не меняется: 3 + 2 = 2 + 3</p>`,examples:["2 + 3 = ?","4 + 1 = ?","Сколько будет 5 + 5?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math1-sec2-t1-l2",title:"Таблица сложения до 10",description:"Запоминаем примеры",theory:`<h3>📋 Таблица сложения</h3>
                  <h4>Прибавляем 1:</h4>
                  <p>1+1=2, 2+1=3, 3+1=4...</p>
                  <h4>Прибавляем 2:</h4>
                  <p>1+2=3, 2+2=4, 3+2=5...</p>
                  <h4>Состав числа 10:</h4>
                  <p>1+9=10, 2+8=10, 3+7=10, 4+6=10, 5+5=10</p>`,examples:["3 + 2 = ?","Сколько будет 7 + 3?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"math1-sec2-t2",title:"Вычитание",description:"Учимся вычитать числа",lessons:[{id:"math1-sec2-t2-l1",title:"Что такое вычитание?",description:"Убираем часть предметов",theory:`<h3>➖ Вычитание</h3>
                  <p>Вычитание — это удаление части группы.</p>
                  <h4>Пример:</h4>
                  <p>🍎🍎🍎 − 🍎 = 🍎🍎</p>
                  <p>3 − 1 = 2</p>
                  <h4>Связь со сложением:</h4>
                  <p>Если 3 + 2 = 5, то 5 − 2 = 3</p>`,examples:["5 − 2 = ?","Было 7, убрали 3. Сколько осталось?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"math1-sec3",title:"Геометрия",description:"Геометрические фигуры",topics:[{id:"math1-sec3-t1",title:"Основные фигуры",description:"Круг, квадрат, треугольник",lessons:[{id:"math1-sec3-t1-l1",title:"Круг и треугольник",description:"Фигуры без углов и с тремя углами",theory:`<h3>⚪ Круг</h3>
                  <p>Круг — фигура без углов. Можно катить!</p>
                  <h3>🔺 Треугольник</h3>
                  <p>Треугольник — 3 стороны, 3 угла.</p>
                  <p>Название: "три" + "угольник"</p>`,examples:["Найди круги вокруг","Посчитай углы треугольника"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"math1-sec3-t1-l2",title:"Квадрат и прямоугольник",description:"Фигуры с четырьмя углами",theory:`<h3>⬜ Квадрат</h3>
                  <p>4 равные стороны, 4 угла.</p>
                  <h3>▬ Прямоугольник</h3>
                  <p>4 стороны, противоположные равны.</p>
                  <h4>Важно:</h4>
                  <p>Квадрат — это особый прямоугольник!</p>`,examples:["Чем отличается квадрат от прямоугольника?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Чему равно 3 + 2?",options:["4","5","6","7"],correctAnswer:1,explanation:"3 + 2 = 5. Можно посчитать на пальцах!",difficulty:"easy",points:10},{id:"q2",question:"Чему равно 7 − 3?",options:["3","4","5","6"],correctAnswer:1,explanation:"7 − 3 = 4. Было 7, убрали 3, осталось 4.",difficulty:"easy",points:10},{id:"q3",question:"Сколько углов у квадрата?",options:["2","3","4","5"],correctAnswer:2,explanation:"У квадрата 4 угла!",difficulty:"easy",points:10}]},{id:"russian1",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Обучение грамоте и письму",sections:[{id:"russian1-sec1",title:"Алфавит и звуки",description:"Буквы и звуки русского языка",topics:[{id:"russian1-sec1-t1",title:"Русский алфавит",description:"33 буквы алфавита",lessons:[{id:"russian1-sec1-t1-l1",title:"Гласные буквы",description:"10 гласных букв",theory:`<h3>🔴 Гласные буквы (10)</h3>
                  <p>А, Е, Ё, И, О, У, Ы, Э, Ю, Я</p>
                  <h4>Особенность:</h4>
                  <p>Гласные можно пропеть: "А-а-а-а!"</p>`,examples:["Назови все гласные",'Найди гласные в слове "молоко"'],completed:!1,difficulty:"easy",estimatedTime:15},{id:"russian1-sec1-t1-l2",title:"Согласные буквы",description:"21 согласная буква",theory:`<h3>🔵 Согласные буквы (21)</h3>
                  <p>Б, В, Г, Д, Ж, З, Й, К, Л, М, Н, П, Р, С, Т, Ф, Х, Ц, Ч, Ш, Щ</p>
                  <h4>Особенность:</h4>
                  <p>При произношении воздух встречает преграду</p>`,examples:["Назови согласные",'Найди согласные в слове "кот"'],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"russian1-sec1-t2",title:"Звуки речи",description:"Гласные и согласные звуки",lessons:[{id:"russian1-sec1-t2-l1",title:"Звуки и буквы",description:"Различие между звуками и буквами",theory:`<h3>📝 Буквы vs 🗣️ Звуки</h3>
                  <p>Буквы — пишем и видим (33)</p>
                  <p>Звуки — произносим и слышим (42)</p>
                  <h4>Звуки в квадратных скобках:</h4>
                  <p>[а], [о], [м], [к]</p>`,examples:["Сколько букв? Сколько звуков?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"russian1-sec2",title:"Слоги и слова",description:"Деление на слоги, ударение",topics:[{id:"russian1-sec2-t1",title:"Деление на слоги",description:"Правила деления слов на слоги",lessons:[{id:"russian1-sec2-t1-l1",title:"Что такое слог?",description:"Правило слогов",theory:`<h3>📦 Слог</h3>
                  <p>Слог — часть слова, произносимая одним выдохом.</p>
                  <h4>Главное правило:</h4>
                  <p>⚡ СКОЛЬКО ГЛАСНЫХ — СТОЛЬКО СЛОГОВ! ⚡</p>
                  <h4>Примеры:</h4>
                  <p>кот — 1 слог (1 гласная)</p>
                  <p>ма-ма — 2 слога</p>
                  <p>мо-ло-ко — 3 слога</p>`,examples:['Раздели "карандаш" на слоги','Сколько слогов в "ручка"?'],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Сколько букв в русском алфавите?",options:["30","31","33","34"],correctAnswer:2,explanation:"В русском алфавите 33 буквы.",difficulty:"easy",points:10},{id:"q2",question:'Сколько слогов в слове "молоко"?',options:["2","3","4","5"],correctAnswer:1,explanation:"3 гласные = 3 слога: мо-ло-ко",difficulty:"easy",points:10}]},{id:"literature1",title:"Литературное чтение",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Азбука, первые сказки, стихи",sections:[{id:"lit1-sec1",title:"Устное народное творчество",description:"Русские народные сказки",topics:[{id:"lit1-sec1-t1",title:"Русские народные сказки",description:"Колобок, Теремок, Репка",lessons:[{id:"lit1-sec1-t1-l1",title:'Сказка "Колобок"',description:"Путешествие колобка",theory:`<h3>🍞 Колобок</h3>
                  <p>Колобок — круглый хлебец, который убежал от дедушки и бабушки.</p>
                  <h4>Кого встретил Колобок:</h4>
                  <ol>
                    <li>Зайца 🐰</li>
                    <li>Волка 🐺</li>
                    <li>Медведя 🐻</li>
                    <li>Лису 🦊</li>
                  </ol>
                  <h4>Песенка Колобка:</h4>
                  <p>"Я по коробу скребён, по сусеку метён..."</p>`,examples:["Кто съел Колобка?","Какую песенку пел Колобок?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"lit1-sec1-t1-l2",title:'Сказка "Теремок"',description:"Дружба зверей",theory:`<h3>🏠 Теремок</h3>
                  <p>Сказка о зверях, которые нашли домик в лесу.</p>
                  <h4>Кто жил в теремке:</h4>
                  <ol>
                    <li>Мышка-норушка 🐭</li>
                    <li>Лягушка-квакушка 🐸</li>
                    <li>Зайчик-побегайчик 🐰</li>
                    <li>Лисичка-сестричка 🦊</li>
                    <li>Волчок-серый бочок 🐺</li>
                    <li>Медведь косолапый 🐻</li>
                  </ol>`,examples:["Кто первый пришёл в теремок?","Кто сломал теремок?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"lit1-sec2",title:"Детская поэзия",description:"Стихи любимых поэтов",topics:[{id:"lit1-sec2-t1",title:"К. Чуковский",description:"Сказки Корнея Чуковского",lessons:[{id:"lit1-sec2-t1-l1",title:"Мойдодыр",description:"Сказка о чистоте",theory:`<h3>🚿 Мойдодыр</h3>
                  <p>К.И. Чуковский написал эту сказку в 1923 году.</p>
                  <h4>О чём сказка:</h4>
                  <p>О мальчике, который не хотел умываться. Его вещи убежали от него!</p>
                  <h4>Главная мысль:</h4>
                  <p>Надо быть чистым и опрятным!</p>`,examples:["Кто такой Мойдодыр?","Чему учит сказка?"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"lit1-sec2-t2",title:"А. Барто",description:"Стихи Агнии Барто",lessons:[{id:"lit1-sec2-t2-l1",title:"Игрушки",description:"Стихи о любимых игрушках",theory:`<h3>🧸 Игрушки А. Барто</h3>
                  <h4>Известные стихи:</h4>
                  <ul>
                    <li>"Уронили мишку на пол..."</li>
                    <li>"Зайку бросила хозяйка..."</li>
                    <li>"Идёт бычок, качается..."</li>
                    <li>"Наша Таня громко плачет..."</li>
                  </ul>`,examples:['Продолжи: "Уронили мишку..."','О ком стих "Наша Таня"?'],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Кто съел Колобка?",options:["Волк","Заяц","Медведь","Лиса"],correctAnswer:3,explanation:"Лиса обманула Колобка!",difficulty:"easy",points:10},{id:"q2",question:'Кто написал "Мойдодыр"?',options:["А. Барто","С. Маршак","К. Чуковский","С. Михалков"],correctAnswer:2,explanation:'Корней Чуковский написал "Мойдодыр".',difficulty:"easy",points:10}]},{id:"world1",title:"Окружающий мир",icon:(0,y.jsx)(eD,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-teal-500",description:"Знакомство с миром вокруг нас",sections:[{id:"world1-sec1",title:"Природа",description:"Живая и неживая природа",topics:[{id:"world1-sec1-t1",title:"Живая и неживая природа",description:"Различия живой и неживой природы",lessons:[{id:"world1-sec1-t1-l1",title:"Что такое природа?",description:"Определение природы",theory:`<h3>🌿 Природа</h3>
                  <p>Природа — всё, что создано без помощи человека.</p>
                  <h4>Живая природа:</h4>
                  <ul>
                    <li>Растения 🌳</li>
                    <li>Животные 🐾</li>
                    <li>Люди 👨‍👩‍👧</li>
                  </ul>
                  <h4>Неживая природа:</h4>
                  <ul>
                    <li>Солнце ☀️</li>
                    <li>Вода 💧</li>
                    <li>Камни 🪨</li>
                  </ul>`,examples:["Назови предмет живой природы","Чем отличается камень от цветка?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"world1-sec2",title:"Безопасность",description:"Правила безопасного поведения",topics:[{id:"world1-sec2-t1",title:"Правила дорожного движения",description:"Светофор и пешеходный переход",lessons:[{id:"world1-sec2-t1-l1",title:"Светофор",description:"Сигналы светофора",theory:`<h3>🚦 Светофор</h3>
                  <h4>Сигналы светофора:</h4>
                  <ul>
                    <li>🔴 Красный — СТОЙ!</li>
                    <li>🟡 Жёлтый — ЖДИ!</li>
                    <li>🟢 Зелёный — ИДИ!</li>
                  </ul>`,examples:["Какой свет можно переходить?","Что означает жёлтый свет?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"world1-sec2-t1-l2",title:"Пешеходный переход",description:"Правила перехода дороги",theory:`<h3>🚶 Пешеходный переход</h3>
                  <h4>Как переходить дорогу:</h4>
                  <ol>
                    <li>Посмотри налево</li>
                    <li>Дойди до середины</li>
                    <li>Посмотри направо</li>
                    <li>Переходи спокойно</li>
                  </ol>`,examples:["Куда смотреть сначала?","Где нужно переходить дорогу?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Какой цвет светофора разрешает переходить?",options:["Красный","Жёлтый","Зелёный","Синий"],correctAnswer:2,explanation:"Зелёный свет разрешает движение!",difficulty:"easy",points:10},{id:"q2",question:"Что относится к живой природе?",options:["Камень","Дерево","Вода","Солнце"],correctAnswer:1,explanation:"Дерево — живая природа, оно растёт!",difficulty:"easy",points:10}]},{id:"english1",title:"Английский язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-sky-400",gradient:"from-sky-500 to-blue-500",description:"Первые английские слова",sections:[{id:"eng1-sec1",title:"Основы языка",description:"Приветствия, цвета, числа",topics:[{id:"eng1-sec1-t1",title:"Приветствия",description:"Hello, Hi, Goodbye",lessons:[{id:"eng1-sec1-t1-l1",title:"Как поздороваться",description:"Hello! Hi!",theory:`<h3>👋 Greetings</h3>
                  <h4>Приветствия:</h4>
                  <ul>
                    <li><strong>Hello!</strong> [хэ-лоу] — Привет!</li>
                    <li><strong>Hi!</strong> [хай] — Привет! (друзьям)</li>
                    <li><strong>Good morning!</strong> — Доброе утро!</li>
                  </ul>
                  <h4>Прощания:</h4>
                  <ul>
                    <li><strong>Goodbye!</strong> — До свидания!</li>
                    <li><strong>Bye!</strong> — Пока!</li>
                  </ul>`,examples:['Как сказать "Привет"?',"Попрощайся по-английски"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"eng1-sec1-t2",title:"Цвета",description:"Colours",lessons:[{id:"eng1-sec1-t2-l1",title:"Основные цвета",description:"Red, blue, green...",theory:`<h3>🎨 Colours</h3>
                  <ul>
                    <li><strong>red</strong> [ред] — красный 🔴</li>
                    <li><strong>blue</strong> [блу] — синий 🔵</li>
                    <li><strong>green</strong> [грин] — зелёный 🟢</li>
                    <li><strong>yellow</strong> [йел-лоу] — жёлтый 🟡</li>
                    <li><strong>white</strong> [уайт] — белый ⚪</li>
                    <li><strong>black</strong> [блэк] — чёрный ⚫</li>
                  </ul>`,examples:['Как будет "красный"?',"Назови 5 цветов"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"eng1-sec1-t3",title:"Числа 1-10",description:"Numbers",lessons:[{id:"eng1-sec1-t3-l1",title:"Счёт от 1 до 10",description:"One, two, three...",theory:`<h3>🔢 Numbers</h3>
                  <ul>
                    <li>1 — <strong>one</strong> [уан]</li>
                    <li>2 — <strong>two</strong> [ту]</li>
                    <li>3 — <strong>three</strong> [три]</li>
                    <li>4 — <strong>four</strong> [фо]</li>
                    <li>5 — <strong>five</strong> [файв]</li>
                    <li>6 — <strong>six</strong> [сикс]</li>
                    <li>7 — <strong>seven</strong> [севен]</li>
                    <li>8 — <strong>eight</strong> [эйт]</li>
                    <li>9 — <strong>nine</strong> [найн]</li>
                    <li>10 — <strong>ten</strong> [тен]</li>
                  </ul>`,examples:["Посчитай до 5",'Как будет "три"?'],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:'Как сказать "Привет" по-английски?',options:["Goodbye","Hello","Sorry","Thanks"],correctAnswer:1,explanation:"Hello! — Привет!",difficulty:"easy",points:10},{id:"q2",question:'Как по-английски "красный"?',options:["blue","green","red","yellow"],correctAnswer:2,explanation:"Red — красный.",difficulty:"easy",points:10}]},{id:"tech1",title:"Технология",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-amber-500",description:"Работа с бумагой, лепка, аппликации",sections:[{id:"tech1-sec1",title:"Работа с бумагой",description:"Основы бумажного творчества",topics:[{id:"tech1-sec1-t1",title:"Аппликации",description:"Создание картин из бумаги",lessons:[{id:"tech1-sec1-t1-l1",title:"Простая аппликация",description:"Основы техники",theory:`<h3>✂️ Аппликация</h3>
                  <p>Аппликация — создание картин из вырезанных фигур.</p>
                  <h4>Что нужно:</h4>
                  <ul>
                    <li>Цветная бумага</li>
                    <li>Ножницы</li>
                    <li>Клей</li>
                    <li>Карандаш</li>
                  </ul>
                  <h4>Правила безопасности:</h4>
                  <ul>
                    <li>Ножницы передаём кольцами вперёд</li>
                    <li>Не держим ножницы остриём вверх</li>
                  </ul>`,examples:['Сделай аппликацию "Цветок"',"Вырежи геометрические фигуры"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"tech1-sec1-t1-l2",title:"Оригами",description:"Складывание фигур из бумаги",theory:`<h3>📄 Оригами</h3>
                  <p>Оригами — японское искусство складывания фигур из бумаги.</p>
                  <h4>Базовые советы:</h4>
                  <ul>
                    <li>Складывай ровно по линии сгиба</li>
                    <li>Проглаживай сгибы ногтем</li>
                    <li>Начинай с простых фигур</li>
                  </ul>
                  <h4>Простые фигуры:</h4>
                  <ul>
                    <li>飞机 (самолётик)</li>
                    <li>Лодочка</li>
                    <li>Лягушка</li>
                  </ul>`,examples:["Сделай самолётик","Сложи лодочку"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"tech1-sec1-t2",title:"Лепка",description:"Работа с пластилином",lessons:[{id:"tech1-sec1-t2-l1",title:"Знакомство с пластилином",description:"Основы лепки",theory:`<h3>🎨 Лепка из пластилина</h3>
                  <p>Пластилин — мягкий материал для лепки.</p>
                  <h4>Правила работы:</h4>
                  <ul>
                    <li>Разогрей пластилин в руках</li>
                    <li>Используй доску для лепки</li>
                    <li>После работы помой руки с мылом</li>
                  </ul>
                  <h4>Базовые формы:</h4>
                  <ul>
                    <li>Шарик — катай круговыми движениями</li>
                    <li>Колбаска — катай между ладонями</li>
                    <li>Плоская форма — расплющи шарик</li>
                  </ul>`,examples:["Слепи шарик","Сделай колбаску","Слепи грибок"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Как правильно передавать ножницы?",options:["Остриём вперёд","Кольцами вперёд","В закрытом виде","Любым способом"],correctAnswer:1,explanation:"Ножницы нужно передавать кольцами вперёд, чтобы не поранить соседа.",difficulty:"easy",points:10},{id:"q2",question:"Что нужно сделать с пластилином перед лепкой?",options:["Положить в холодильник","Разогреть в руках","Порезать ножом","Намочить водой"],correctAnswer:1,explanation:"Пластилин нужно разогреть в руках, чтобы он стал мягким.",difficulty:"easy",points:10},{id:"q3",question:"Какое искусство называется оригами?",options:["Рисование красками","Складывание из бумаги","Лепка из глины","Вышивание"],correctAnswer:1,explanation:"Оригами — это японское искусство складывания фигур из бумаги.",difficulty:"easy",points:10}]},{id:"music1",title:"Музыка",icon:(0,y.jsx)(eL,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-teal-500",description:"Нотная грамота, пение, слушание музыки",sections:[{id:"music1-sec1",title:"Нотная грамота",description:"Знакомство с нотами",topics:[{id:"music1-sec1-t1",title:"Семь нот",description:"До, ре, ми, фа, соль, ля, си",lessons:[{id:"music1-sec1-t1-l1",title:"Ноты музыкального ряда",description:"Основные семь нот",theory:`<h3>🎵 Семь нот</h3>
                  <p>В музыке 7 основных нот:</p>
                  <ol>
                    <li><strong>До</strong> (C)</li>
                    <li><strong>Ре</strong> (D)</li>
                    <li><strong>Ми</strong> (E)</li>
                    <li><strong>Фа</strong> (F)</li>
                    <li><strong>Соль</strong> (G)</li>
                    <li><strong>Ля</strong> (A)</li>
                    <li><strong>Си</strong> (B)</li>
                  </ol>
                  <p>Запоминалка: "Каждый Охотник Желает Знать, Где Сидит Фазан"</p>`,examples:["Назови все ноты по порядку","Спой гамму"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"music1-sec1-t1-l2",title:"Музыкальные инструменты",description:"Знакомые инструменты",theory:`<h3>🎹 Музыкальные инструменты</h3>
                  <h4>Инструменты, которые ты знаешь:</h4>
                  <ul>
                    <li>🎹 <strong>Пианино</strong> — чёрные и белые клавиши</li>
                    <li>🎸 <strong>Гитара</strong> — струны, которые дёргают</li>
                    <li>🎻 <strong>Скрипка</strong> — маленькая, со смычком</li>
                    <li>🥁 <strong>Барабан</strong> — стучат палочками</li>
                    <li>🎺 <strong>Труба</strong> — дуют в неё</li>
                  </ul>`,examples:["Назови 3 инструмента","На чём играют палочками?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"music1-sec2",title:"Пение",description:"Учимся петь",topics:[{id:"music1-sec2-t1",title:"Песни для детей",description:"Любимые детские песни",lessons:[{id:"music1-sec2-t1-l1",title:"Детские песни",description:"Песни, которые мы поём",theory:`<h3>🎤 Детские песни</h3>
                  <h4>Любимые песни:</h4>
                  <ul>
                    <li>"В лесу родилась ёлочка"</li>
                    <li>"Пусть бегут неуклюже"</li>
                    <li>"Чунга-Чанга"</li>
                    <li>"Облака"</li>
                  </ul>
                  <h4>Как петь красиво:</h4>
                  <ul>
                    <li>Сиди или стой прямо</li>
                    <li>Дыши животом</li>
                    <li>Открывай рот шире</li>
                    <li>Слушай других</li>
                  </ul>`,examples:["Спой любимую песню","Как нужно сидеть при пении?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Сколько основных нот в музыке?",options:["5","6","7","8"],correctAnswer:2,explanation:"В музыке 7 основных нот: До, Ре, Ми, Фа, Соль, Ля, Си.",difficulty:"easy",points:10},{id:"q2",question:"Какая нота идёт первой?",options:["Ре","Ми","До","Си"],correctAnswer:2,explanation:"Первая нота — До. Ноты идут по порядку: До, Ре, Ми, Фа, Соль, Ля, Си.",difficulty:"easy",points:10},{id:"q3",question:"На каком инструменте играют смычком?",options:["Пианино","Гитара","Скрипка","Барабан"],correctAnswer:2,explanation:"На скрипке играют смычком, проводя им по струнам.",difficulty:"easy",points:10}]},{id:"pe1",title:"Физическая культура",icon:(0,y.jsx)(eF,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-green-500",description:"Подвижные игры, гимнастика",sections:[{id:"pe1-sec1",title:"Гимнастика",description:"Основные упражнения",topics:[{id:"pe1-sec1-t1",title:"Разминка",description:"Упражнения для разогрева",lessons:[{id:"pe1-sec1-t1-l1",title:"Утренняя зарядка",description:"Комплекс упражнений",theory:`<h3>🏃 Утренняя зарядка</h3>
                  <h4>Комплекс упражнений:</h4>
                  <ol>
                    <li>Повороты головы</li>
                    <li>Вращение плечами</li>
                    <li>Наклоны вперёд-назад</li>
                    <li>Приседания</li>
                    <li>Прыжки на месте</li>
                  </ol>`,examples:["Сделай 5 приседаний","Покажи наклоны"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"pe1-sec1-t1-l2",title:"Упражнения для осанки",description:"Правильная осанка",theory:`<h3>🧍 Правильная осанка</h3>
                  <p>Правильная осанка — это красиво и полезно для здоровья!</p>
                  <h4>Как проверить осанку:</h4>
                  <ul>
                    <li>Встань спиной к стене</li>
                    <li>Прижми пятки, лопатки, затылок</li>
                    <li>Если получилось — осанка хорошая!</li>
                  </ul>
                  <h4>Упражнения:</h4>
                  <ul>
                    <li>"Кошечка" — выгни спину</li>
                    <li>Ходьба с книгой на голове</li>
                  </ul>`,examples:["Проверь свою осанку",'Сделай "кошечку"'],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"pe1-sec2",title:"Подвижные игры",description:"Игры на уроке физкультуры",topics:[{id:"pe1-sec2-t1",title:"Игры с мячом",description:"Передача и ловля мяча",lessons:[{id:"pe1-sec2-t1-l1",title:"Ловля мяча",description:"Как правильно ловить мяч",theory:`<h3>⚽ Ловля мяча</h3>
                  <h4>Правила ловли:</h4>
                  <ul>
                    <li>Смотри на мяч</li>
                    <li>Вытягивай руки навстречу</li>
                    <li>Лови руками, прижимай к груди</li>
                    <li>Не бойся мяча!</li>
                  </ul>
                  <h4>Важно:</h4>
                  <p>Всегда будь внимательным на уроке!</p>`,examples:["Поймай мяч 5 раз","Передай мяч другу"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Зачем нужна утренняя зарядка?",options:["Чтобы устать","Чтобы проснуться и быть бодрым","Чтобы проголодаться","Чтобы заснуть"],correctAnswer:1,explanation:"Утренняя зарядка помогает проснуться и даёт энергию на весь день!",difficulty:"easy",points:10},{id:"q2",question:"Как нужно ловить мяч?",options:["Отворачиваться","Закрывать глаза","Смотреть на мяч и вытягивать руки","Бежать от мяча"],correctAnswer:2,explanation:"Нужно смотреть на мяч и вытягивать руки навстречу ему.",difficulty:"easy",points:10},{id:"q3",question:"Что полезно для осанки?",options:["Сутулиться","Ходить с книгой на голове","Сидеть криво","Мало двигаться"],correctAnswer:1,explanation:"Ходьба с книгой на голове помогает сохранять правильную осанку.",difficulty:"easy",points:10}]},{id:"art1",title:"Изобразительное искусство",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Рисование, цвет, форма",sections:[{id:"art1-sec1",title:"Основы рисования",description:"Знакомство с материалами",topics:[{id:"art1-sec1-t1",title:"Краски и кисти",description:"Работа с акварелью",lessons:[{id:"art1-sec1-t1-l1",title:"Знакомство с красками",description:"Как пользоваться кистью",theory:`<h3>🎨 Краски и кисти</h3>
                  <p>Акварель — это прозрачные краски, которые разводят водой.</p>
                  <h4>Правила работы:</h4>
                  <ul>
                    <li>Кисть держим как карандаш</li>
                    <li>Набираем краску на кончик кисти</li>
                    <li>Промываем кисть перед новым цветом</li>
                    <li>Не оставляем кисть в воде</li>
                  </ul>
                  <h4>Основные цвета:</h4>
                  <ul>
                    <li>🔴 Красный</li>
                    <li>🟡 Жёлтый</li>
                    <li>🔵 Синий</li>
                  </ul>`,examples:["Нарисуй радугу","Смешай красный и жёлтый"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"art1-sec1-t1-l2",title:"Тёплые и холодные цвета",description:"Цвета солнца и льда",theory:`<h3>🔥 Тёплые цвета</h3>
                  <p>Напоминают солнце и огонь:</p>
                  <ul>
                    <li>Красный</li>
                    <li>Оранжевый</li>
                    <li>Жёлтый</li>
                  </ul>
                  <h3>❄️ Холодные цвета</h3>
                  <p>Напоминают лёд и воду:</p>
                  <ul>
                    <li>Синий</li>
                    <li>Голубой</li>
                    <li>Фиолетовый</li>
                  </ul>`,examples:["Нарисуй тёплый закат","Нарисуй холодный снег"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какие цвета называют тёплыми?",options:["Синий, зелёный","Красный, жёлтый, оранжевый","Фиолетовый, голубой","Белый, чёрный"],correctAnswer:1,explanation:"Тёплые цвета напоминают огонь и солнце: красный, оранжевый, жёлтый.",difficulty:"easy",points:10}]},{id:"obzh1",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-red-500",gradient:"from-red-600 to-orange-600",description:"Основы безопасности жизнедеятельности",sections:[{id:"obzh1-sec1",title:"Безопасность на дороге",description:"Правила дорожного движения",topics:[{id:"obzh1-sec1-t1",title:"Светофор и зебра",description:"Как переходить дорогу",lessons:[{id:"obzh1-sec1-t1-l1",title:"Сигналы светофора",description:"Красный, жёлтый, зелёный",theory:`<h3>🚦 Светофор</h3>
                  <h4>Что означают цвета:</h4>
                  <ul>
                    <li><strong>🔴 Красный</strong> — СТОЙ! Нельзя переходить!</li>
                    <li><strong>🟡 Жёлтый</strong> — ВНИМАНИЕ! Приготовься!</li>
                    <li><strong>🟢 Зелёный</strong> — ИДИ! Можно переходить!</li>
                  </ul>
                  <h4>⚠️ Важно:</h4>
                  <p>Даже на зелёный свет нужно смотреть по сторонам!</p>`,examples:["Какой свет разрешает переходить?","Что делать на красный свет?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"obzh1-sec1-t1-l2",title:"Пешеходный переход",description:"Зебра и правила",theory:`<h3>🦓 Пешеходный переход (зебра)</h3>
                  <h4>Как переходить дорогу:</h4>
                  <ol>
                    <li>Подойди к переходу</li>
                    <li>Посмотри НАЛЕВО</li>
                    <li>Посмотри НАПРАВО</li>
                    <li>Убедись, что машины остановились</li>
                    <li>Переходи спокойно</li>
                  </ol>
                  <h4>⚠️ Запомни:</h4>
                  <p>Переходить дорогу можно только по зебре!</p>`,examples:["Куда смотреть сначала?","Где можно переходить дорогу?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"obzh1-sec2",title:"Безопасность дома",description:"Опасности в доме",topics:[{id:"obzh1-sec2-t1",title:"Огонь и электричество",description:"Правила безопасности",lessons:[{id:"obzh1-sec2-t1-l1",title:"Огонь — опасно!",description:"Правила пожарной безопасности",theory:`<h3>🔥 Огонь опасен!</h3>
                  <h4>Что нельзя делать:</h4>
                  <ul>
                    <li>❌ Играть со спичками и зажигалками</li>
                    <li>❌ Включать газ без взрослых</li>
                    <li>❌ Поджигать бумагу и свечи</li>
                  </ul>
                  <h4>Что делать, если пожар:</h4>
                  <ol>
                    <li>Немедленно уйди из помещения</li>
                    <li>Позови взрослых</li>
                    <li>Позвони 01 или 112</li>
                  </ol>`,examples:["Что делать при пожаре?","Можно ли играть со спичками?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Какой свет светофора разрешает переходить дорогу?",options:["Красный","Жёлтый","Зелёный","Мигающий"],correctAnswer:2,explanation:"Зелёный свет светофора разрешает движение пешеходов.",difficulty:"easy",points:10},{id:"q2",question:"Какой номер телефона для вызова пожарных?",options:["02","01","03","112"],correctAnswer:1,explanation:"01 — номер пожарной службы. Также можно набрать 112.",difficulty:"easy",points:10}]},{id:"informatics1",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Знакомство с компьютером",sections:[{id:"info1-sec1",title:"Знакомство с компьютером",description:"Что такое компьютер",topics:[{id:"info1-sec1-t1",title:"Компьютер и его части",description:"Из чего состоит компьютер",lessons:[{id:"info1-sec1-t1-l1",title:"Что такое компьютер?",description:"Знакомство с компьютером",theory:`<h3>💻 Компьютер</h3>
                  <p>Компьютер — это машина для работы с информацией.</p>
                  <h4>Основные части компьютера:</h4>
                  <ul>
                    <li>🖥️ <strong>Монитор</strong> — похож на телевизор, показывает информацию</li>
                    <li>⌨️ <strong>Клавиатура</strong> — для ввода букв и цифр</li>
                    <li>🖱️ <strong>Мышка</strong> — для управления курсором</li>
                    <li>🔊 <strong>Колонки</strong> — для звука</li>
                    <li>🖨️ <strong>Принтер</strong> — печатает на бумаге</li>
                  </ul>`,examples:["Покажи монитор","Для чего нужна мышка?","Что делает принтер?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"info1-sec1-t1-l2",title:"Правила работы за компьютером",description:"Безопасность и здоровье",theory:`<h3>🛡️ Правила безопасности</h3>
                  <h4>Важно помнить:</h4>
                  <ul>
                    <li>👁️ Делай перерыв каждые 15-20 минут</li>
                    <li>📏 Сиди на расстоянии вытянутой руки от экрана</li>
                    <li>🪑 Держи спину прямо</li>
                    <li>💡 Работай при хорошем освещении</li>
                    <li>🚫 Не ешь и не пей за компьютером</li>
                  </ul>
                  <h4>Упражнения для глаз:</h4>
                  <ul>
                    <li>Поморгай быстро 10 раз</li>
                    <li>Посмотри вдаль в окно</li>
                    <li>Закрой глаза и отдохни</li>
                  </ul>`,examples:["Как правильно сидеть?","Зачем нужны перерывы?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"info1-sec2",title:"Работа с мышкой",description:"Учимся управлять мышкой",topics:[{id:"info1-sec2-t1",title:"Действия мышкой",description:"Клик, двойной клик, перетаскивание",lessons:[{id:"info1-sec2-t1-l1",title:"Курсор и клик",description:"Управление курсором",theory:`<h3>🖱️ Мышка</h3>
                  <p>Мышка управляет курсором — маленькой стрелочкой на экране.</p>
                  <h4>Действия мышкой:</h4>
                  <ul>
                    <li><strong>Одиночный клик</strong> — нажать один раз левую кнопку</li>
                    <li><strong>Двойной клик</strong> — нажать два раза быстро</li>
                    <li><strong>Перетаскивание</strong> — зажать кнопку и двигать</li>
                  </ul>
                  <h4>Тренировка:</h4>
                  <ul>
                    <li>Наведи курсор на иконку</li>
                    <li>Сделай один клик</li>
                    <li>Сделай двойной клик</li>
                  </ul>`,examples:["Наведи курсор на иконку","Сделай двойной клик"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какая часть компьютера похожа на телевизор?",options:["Клавиатура","Монитор","Мышка","Принтер"],correctAnswer:1,explanation:"Монитор похож на телевизор и показывает информацию на экране.",difficulty:"easy",points:10},{id:"q2",question:"Для чего нужна мышка?",options:["Печатать","Включать компьютер","Управлять курсором","Слушать музыку"],correctAnswer:2,explanation:"Мышка нужна для управления курсором — маленькой стрелочкой на экране.",difficulty:"easy",points:10},{id:"q3",question:"Как часто нужно делать перерыв при работе за компьютером?",options:["Каждый час","Каждые 15-20 минут","Каждые 5 минут","Перерывы не нужны"],correctAnswer:1,explanation:"Нужно делать перерыв каждые 15-20 минут, чтобы отдохнули глаза.",difficulty:"easy",points:10}]}]},eU=(0,ef.default)("ruler",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]),eW={id:2,name:"2 класс",shortName:"2 кл.",subjects:[{id:"math2",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Счёт до 100, сложение и вычитание в столбик",sections:[{id:"math2-sec1",title:"Числа от 1 до 100",description:"Нумерация и сравнение чисел",topics:[{id:"math2-sec1-t1",title:"Десятки",description:"Счёт десятками до 100",lessons:[{id:"math2-sec1-t1-l1",title:"Образование десятков",description:"Как образуются десятки",theory:`<h3>🔢 Десятки</h3>
                  <p>10 единиц = 1 десяток</p>
                  <h4>Счёт десятками:</h4>
                  <ul>
                    <li>10, 20, 30, 40, 50, 60, 70, 80, 90, 100</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>2 десятка = 20</p>
                  <p>5 десятков = 50</p>`,examples:["Сколько единиц в 3 десятках?","Назови число: 7 десятков"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"math2-sec1-t1-l2",title:"Образование чисел до 100",description:"Двузначные числа",theory:`<h3>📊 Двузначные числа</h3>
                  <p>Двузначное число = десятки + единицы</p>
                  <h4>Пример:</h4>
                  <p>37 = 3 десятка + 7 единиц</p>
                  <p>37 = 30 + 7</p>
                  <h4>Разряды:</h4>
                  <ul>
                    <li>Единицы — первый разряд (справа)</li>
                    <li>Десятки — второй разряд</li>
                  </ul>`,examples:["Сколько десятков в числе 45?","Разложи 63 на десятки и единицы"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"math2-sec1-t2",title:"Сравнение чисел",description:"Больше, меньше, равно",lessons:[{id:"math2-sec1-t2-l1",title:"Сравнение двузначных чисел",description:"Сравниваем числа до 100",theory:`<h3>⚖️ Сравнение чисел</h3>
                  <h4>Правило:</h4>
                  <p>1. Сравниваем десятки</p>
                  <p>2. Если десятки равны — сравниваем единицы</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>45 > 38 (4 дес. > 3 дес.)</li>
                    <li>47 < 52 (4 дес. < 5 дес.)</li>
                    <li>34 < 37 (десятки равны, 4 < 7)</li>
                  </ul>`,examples:["Сравни: 56 и 43","Какое число больше: 78 или 87?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"math2-sec2",title:"Арифметические действия",description:"Сложение и вычитание в столбик",topics:[{id:"math2-sec2-t1",title:"Сложение в столбик",description:"Письменное сложение",lessons:[{id:"math2-sec2-t1-l1",title:"Сложение без перехода",description:"Сложение в пределах 100",theory:`<h3>➕ Сложение в столбик</h3>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Записываем числа друг под другом</li>
                    <li>Складываем единицы</li>
                    <li>Складываем десятки</li>
                  </ol>
                  <h4>Пример:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
   45
 + 23
 ----
   68
                  </pre>`,examples:["Вычисли: 34 + 25","Найди сумму: 51 + 36"],completed:!1,difficulty:"medium",estimatedTime:20},{id:"math2-sec2-t1-l2",title:"Сложение с переходом",description:"Переход через десяток",theory:`<h3>➕ Сложение с переходом</h3>
                  <h4>Правило:</h4>
                  <p>Если сумма единиц > 10, то 1 десяток переходит к десяткам</p>
                  <h4>Пример:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
   47
 + 25
 ----
   72
   
  7 + 5 = 12 (пишем 2, 1 запоминаем)
  4 + 2 + 1 = 7
                  </pre>`,examples:["Вычисли: 38 + 45","Найди сумму: 67 + 24"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"math2-sec2-t2",title:"Вычитание в столбик",description:"Письменное вычитание",lessons:[{id:"math2-sec2-t2-l1",title:"Вычитание без перехода",description:"Вычитание в пределах 100",theory:`<h3>➖ Вычитание в столбик</h3>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Записываем числа друг под другом</li>
                    <li>Вычитаем единицы</li>
                    <li>Вычитаем десятки</li>
                  </ol>
                  <h4>Пример:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
   78
 - 34
 ----
   44
                  </pre>`,examples:["Вычисли: 86 - 42","Найди разность: 95 - 53"],completed:!1,difficulty:"medium",estimatedTime:20},{id:"math2-sec2-t2-l2",title:"Вычитание с переходом",description:"Занимаем десяток",theory:`<h3>➖ Вычитание с переходом</h3>
                  <h4>Правило:</h4>
                  <p>Если в единицах не хватает, занимаем 1 десяток</p>
                  <h4>Пример:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
   52
 - 27
 ----
   25
   
  12 - 7 = 5 (заняли 1 дес.)
  4 - 2 = 2
                  </pre>`,examples:["Вычисли: 73 - 48","Найди разность: 81 - 35"],completed:!1,difficulty:"hard",estimatedTime:25}]}]},{id:"math2-sec3",title:"Величины",description:"Единицы измерения",topics:[{id:"math2-sec3-t1",title:"Единицы длины",description:"Метр, дециметр, сантиметр",lessons:[{id:"math2-sec3-t1-l1",title:"Сантиметр и дециметр",description:"Соотношение единиц",theory:`<h3>📏 Единицы длины</h3>
                  <h4>Соотношения:</h4>
                  <ul>
                    <li>1 дм = 10 см</li>
                    <li>1 м = 10 дм</li>
                    <li>1 м = 100 см</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>2 дм = 20 см</p>
                  <p>35 см = 3 дм 5 см</p>`,examples:["Вырази в см: 4 дм","Вырази в дм и см: 47 см"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Сколько десятков в числе 56?",options:["5","6","50","56"],correctAnswer:0,explanation:"В числе 56 — 5 десятков и 6 единиц.",difficulty:"easy",points:10},{id:"q2",question:"Чему равно 47 + 25?",options:["62","72","82","92"],correctAnswer:1,explanation:"47 + 25 = 72. 7 + 5 = 12 (пишем 2, 1 в уме), 4 + 2 + 1 = 7.",difficulty:"medium",points:15}]},{id:"russian2",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Орфография, части речи, текст",sections:[{id:"russian2-sec1",title:"Орфография",description:"Правила правописания",topics:[{id:"russian2-sec1-t1",title:"Правописание ЖИ-ШИ",description:"Буквосочетания жи-ши",lessons:[{id:"russian2-sec1-t1-l1",title:"Правило ЖИ-ШИ",description:"Пишем И, не Ы",theory:`<h3>✏️ Правило ЖИ-ШИ</h3>
                  <h4>Правило:</h4>
                  <p>ЖИ-ШИ пиши с буквой И!</p>
                  <h4>Примеры слов:</h4>
                  <ul>
                    <li>жи<strong>р</strong>аф, жи<strong>вёт</strong>, жи<strong>знь</strong></li>
                    <li>ши<strong>на</strong>, ши<strong>рокий</strong>, ши<strong>шка</strong></li>
                  </ul>
                  <h4>Запоминалка:</h4>
                  <p>"ЖИ-ШИ только с И пиши!"</p>`,examples:["Вставь букву: ж...раф","Вставь букву: маш...на"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"russian2-sec1-t1-l2",title:"Правило ЧА-ЩА, ЧУ-ЩУ",description:"Буквосочетания ча-ща, чу-щу",theory:`<h3>✏️ Правила ЧА-ЩА, ЧУ-ЩУ</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>ЧА-ЩА пиши с буквой А</li>
                    <li>ЧУ-ЩУ пиши с буквой У</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>ч<strong>а</strong>й, ч<strong>а</strong>ща, зач<strong>а</strong>стье</li>
                    <li>щ<strong>у</strong>ка, ч<strong>у</strong>до, ч<strong>у</strong>лок</li>
                  </ul>`,examples:["Вставь букву: ч...йник","Вставь букву: щ...ка"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"russian2-sec1-t2",title:"Правописание ЧК, ЧН",description:"Мягкий знак не нужен",lessons:[{id:"russian2-sec1-t2-l1",title:"Буквосочетания ЧК, ЧН, НЧ",description:"Без мягкого знака",theory:`<h3>✏️ ЧК, ЧН, НЧ, ЩН</h3>
                  <h4>Правило:</h4>
                  <p>Мягкий знак НЕ пишется в сочетаниях:</p>
                  <ul>
                    <li>ЧК (дочка, ручка)</li>
                    <li>ЧН (ночъной → ночной)</li>
                    <li>НЧ (пенъчик → пенчик)</li>
                    <li>ЩН (мощъный → мощный)</li>
                  </ul>
                  <h4>Почему?</h4>
                  <p>Ч и Щ всегда мягкие, Ь не нужен!</p>`,examples:["Вставь или нет Ь: ноч...ной","Вставь или нет Ь: дач...ка"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"russian2-sec2",title:"Части речи",description:"Имя существительное, глагол",topics:[{id:"russian2-sec2-t1",title:"Имя существительное",description:"Слова-предметы",lessons:[{id:"russian2-sec2-t1-l1",title:"Что такое существительное?",description:"Слова-предметы",theory:`<h3>📝 Имя существительное</h3>
                  <p>Имя существительное — часть речи, обозначающая предмет.</p>
                  <h4>Отвечает на вопросы:</h4>
                  <ul>
                    <li>КТО? (одушевлённые) — кошка, мальчик</li>
                    <li>ЧТО? (неодушевлённые) — стол, книга</li>
                  </ul>
                  <h4>Признаки:</h4>
                  <ul>
                    <li>Род: м., ж., ср.</li>
                    <li>Число: ед., мн.</li>
                  </ul>`,examples:["Найди существительные: Кошка спит на диване",'Определи род слова "окно"'],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какую букву вставить: маш...на?",options:["е","и","ы","я"],correctAnswer:1,explanation:"ШИ пиши с И! Правильно: машина.",difficulty:"easy",points:10},{id:"q2",question:'Нужен ли Ь в слове "ноч...ной"?',options:["Да","Нет"],correctAnswer:1,explanation:"В сочетании ЧН мягкий знак НЕ пишется. Правильно: ночной.",difficulty:"easy",points:10}]},{id:"literature2",title:"Литературное чтение",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Сказки, стихи, рассказы о природе",sections:[{id:"lit2-sec1",title:"Устное народное творчество",description:"Русские народные сказки",topics:[{id:"lit2-sec1-t1",title:"Сказки о животных",description:"Лиса, волк, заяц в сказках",lessons:[{id:"lit2-sec1-t1-l1",title:"Лиса в народных сказках",description:"Образ лисы",theory:`<h3>🦊 Лиса в сказках</h3>
                  <p>Лиса — один из самых популярных персонажей русских народных сказок.</p>
                  <h4>Характер лисы:</h4>
                  <ul>
                    <li>Хитрая</li>
                    <li>Лукавая</li>
                    <li>Умная</li>
                    <li>Обманщица</li>
                  </ul>
                  <h4>Известные сказки:</h4>
                  <ul>
                    <li>"Лиса и волк"</li>
                    <li>"Лиса и журавль"</li>
                    <li>"Лисичка-сестричка и волк"</li>
                  </ul>`,examples:["Какой характер у лисы?","В каких сказках есть лиса?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"lit2-sec2",title:"Поэзия",description:"Стихи для детей",topics:[{id:"lit2-sec2-t1",title:"С. Маршак",description:"Произведения Самуила Маршака",lessons:[{id:"lit2-sec2-t1-l1",title:"Стихи Маршака",description:'"Детки в клетке", "Багаж"',theory:`<h3>📚 С.Я. Маршак (1887-1964)</h3>
                  <p>Самуил Маршак — известный детский поэт и переводчик.</p>
                  <h4>Известные произведения:</h4>
                  <ul>
                    <li>"Детки в клетке" — о зверятах в зоопарке</li>
                    <li>"Багаж" — о даме с вещами</li>
                    <li>"Усатый-полосатый"</li>
                  </ul>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Лёгкий ритм</li>
                    <li>Юмор</li>
                    <li>Поучительность</li>
                  </ul>`,examples:["Какие произведения Маршака ты знаешь?",'Кто написал "Детки в клетке"?'],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Какой характер у лисы в русских сказках?",options:["Глупая","Хитрая","Добрая","Трусливая"],correctAnswer:1,explanation:"Лиса в русских народных сказках хитрая и лукавая.",difficulty:"easy",points:10}]},{id:"world2",title:"Окружающий мир",icon:(0,y.jsx)(eD,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-teal-500",description:"Природа, животные, человек",sections:[{id:"world2-sec1",title:"Природа",description:"Живая и неживая природа",topics:[{id:"world2-sec1-t1",title:"Живая природа",description:"Растения и животные",lessons:[{id:"world2-sec1-t1-l1",title:"Признаки живого",description:"Чем живое отличается от неживого",theory:`<h3>🌱 Признаки живого</h3>
                  <h4>Живые организмы:</h4>
                  <ul>
                    <li>✅ Дышат</li>
                    <li>✅ Питаются</li>
                    <li>✅ Растут и развиваются</li>
                    <li>✅ Размножаются</li>
                    <li>✅ Умирают</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>Растения 🌳, животные 🐾, люди 👨‍👩‍👧</p>`,examples:["Назови признаки живого","Чем камень отличается от цветка?"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"world2-sec1-t2",title:"Растения",description:"Части растений",lessons:[{id:"world2-sec1-t2-l1",title:"Строение растений",description:"Корень, стебель, листья, цветок",theory:`<h3>🌿 Части растений</h3>
                  <h4>Основные части:</h4>
                  <ul>
                    <li><strong>Корень</strong> — закрепляет в почве, всасывает воду</li>
                    <li><strong>Стебель</strong> — проводит вещества, держит листья</li>
                    <li><strong>Листья</strong> — дышат, питают растение</li>
                    <li><strong>Цветок</strong> — для размножения</li>
                    <li><strong>Плод</strong> — содержит семена</li>
                  </ul>`,examples:["Назови части растения","Какая часть всасывает воду?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какая часть растения всасывает воду из почвы?",options:["Стебель","Листья","Корень","Цветок"],correctAnswer:2,explanation:"Корень всасывает воду и минеральные вещества из почвы.",difficulty:"easy",points:10}]},{id:"english2",title:"Английский язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-sky-400",gradient:"from-sky-500 to-blue-500",description:"Базовые слова и фразы",sections:[{id:"eng2-sec1",title:"Словарный запас",description:"Базовые слова",topics:[{id:"eng2-sec1-t1",title:"Семья",description:"Члены семьи",lessons:[{id:"eng2-sec1-t1-l1",title:"Члены семьи",description:"Mother, father, sister...",theory:`<h3>👨‍👩‍👧‍👦 Family (Семья)</h3>
                  <h4>Слова:</h4>
                  <ul>
                    <li><strong>mother</strong> [мазер] — мама</li>
                    <li><strong>father</strong> [фазер] — папа</li>
                    <li><strong>sister</strong> [систер] — сестра</li>
                    <li><strong>brother</strong> [бразер] — брат</li>
                    <li><strong>grandmother</strong> — бабушка</li>
                    <li><strong>grandfather</strong> — дедушка</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>This is my mother. — Это моя мама.</p>`,examples:['Как будет "сестра"?',"Переведи: This is my father"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:'Как будет "мама" по-английски?',options:["father","sister","mother","brother"],correctAnswer:2,explanation:"Mother [мазер] — мама.",difficulty:"easy",points:10}]},{id:"music2",title:"Музыка",icon:(0,y.jsx)(eL,{className:"w-5 h-5"}),color:"text-violet-400",gradient:"from-violet-500 to-purple-500",description:"Музыкальные инструменты, песни, композиторы",sections:[{id:"music2-sec1",title:"Музыкальные инструменты",description:"Знакомство с инструментами",topics:[{id:"music2-sec1-t1",title:"Русские народные инструменты",description:"Балалайка, гармонь, домра",lessons:[{id:"music2-sec1-t1-l1",title:"Балалайка",description:"Русский народный инструмент",theory:`<h3>🎸 Балалайка</h3>
                  <p>Балалайка — самый известный русский народный инструмент!</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Треугольная форма</li>
                    <li>Три струны</li>
                    <li>Звенящий звук</li>
                  </ul>
                  <h4>История:</h4>
                  <p>Балалайка появилась более 300 лет назад! 🇷🇺</p>`,examples:["Какой формы балалайка?","Сколько струн у балалайки?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"music2-sec1-t1-l2",title:"Гармонь",description:"Духовой народный инструмент",theory:`<h3>🪗 Гармонь</h3>
                  <p>Гармонь — русский народный духовой инструмент!</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Две клавиатуры</li>
                    <li>Мех между ними</li>
                    <li>Громкий, задорный звук</li>
                  </ul>
                  <h4>Где играют:</h4>
                  <p>На праздниках, гуляниях, в народных ансамблях!</p>`,examples:["Какой звук у гармони?","Из чего состоит гармонь?"],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"music2-sec1-t2",title:"Классические инструменты",description:"Фортепиано, скрипка",lessons:[{id:"music2-sec1-t2-l1",title:"Фортепиано",description:"Король музыкальных инструментов",theory:`<h3>🎹 Фортепиано</h3>
                  <p>Фортепиано — король музыкальных инструментов!</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>88 клавиш — чёрные и белые</li>
                    <li>Может играть тихо и громко</li>
                    <li>Рояль и пианино — виды фортепиано</li>
                  </ul>
                  <h4>Интересный факт:</h4>
                  <p>"Фортепиано" означает "тихо-громко" на итальянском языке!</p>`,examples:["Сколько клавиш у фортепиано?","Чем отличается рояль от пианино?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"music2-sec1-t2-l2",title:"Скрипка",description:"Королева оркестра",theory:`<h3>🎻 Скрипка</h3>
                  <p>Скрипка — самый высокий по звуку струнный инструмент!</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>4 струны</li>
                    <li>Играют смычком</li>
                    <li>Очень красивый, певучий звук</li>
                  </ul>
                  <h4>Интересный факт:</h4>
                  <p>Скрипку называют "королевой оркестра"! 👑</p>`,examples:["Как играют на скрипке?","Сколько струн у скрипки?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"music2-sec2",title:"Композиторы для детей",description:"П.И. Чайковский",topics:[{id:"music2-sec2-t1",title:"Пётр Ильич Чайковский",description:"Великий русский композитор",lessons:[{id:"music2-sec2-t1-l1",title:"Детский альбом",description:"Музыка для детей",theory:`<h3>🎼 П.И. Чайковский</h3>
                  <p>Пётр Ильич Чайковский — великий русский композитор!</p>
                  <h4>"Детский альбом":</h4>
                  <p>24 лёгкие пьесы, написанные специально для детей</p>
                  <h4>Известные пьесы:</h4>
                  <ul>
                    <li>\xabУтренняя молитва\xbb</li>
                    <li>\xabМарш деревянных солдатиков\xbb</li>
                    <li>\xabБолезнь куклы\xbb</li>
                    <li>\xabНовая кукла\xbb</li>
                    <li>\xabКамаринская\xbb</li>
                  </ul>`,examples:['Послушай "Марш деревянных солдатиков"','Кто написал "Детский альбом"?'],completed:!1,difficulty:"medium",estimatedTime:20},{id:"music2-sec2-t1-l2",title:'Балет "Щелкунчик"',description:"Волшебная музыка",theory:`<h3>🩰 Балет "Щелкунчик"</h3>
                  <p>\xabЩелкунчик\xbb — волшебный балет Чайковского!</p>
                  <h4>Известные танцы:</h4>
                  <ul>
                    <li>\xabТанец феи Драже\xbb</li>
                    <li>\xabВальс цветов\xbb</li>
                    <li>\xabТанец сахарной сливы\xbb</li>
                  </ul>
                  <h4>О чём балет:</h4>
                  <p>О девочке Маше и волшебном Щелкунчике, которые попадают в сказочную страну! ✨</p>`,examples:['Послушай "Танец феи Драже"','Кто написал музыку к балету "Щелкунчик"?'],completed:!1,difficulty:"medium",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Сколько струн у балалайки?",options:["Две","Три","Четыре","Пять"],correctAnswer:1,explanation:"У балалайки три струны. Это её особенность!",difficulty:"easy",points:10},{id:"q2",question:'Кто написал "Детский альбом"?',options:["Моцарт","Бетховен","Чайковский","Бах"],correctAnswer:2,explanation:'Пётр Ильич Чайковский написал "Детский альбом" — 24 пьесы для детей.',difficulty:"medium",points:15},{id:"q3",question:'Какой инструмент называют "королём инструментов"?',options:["Скрипка","Балалайка","Фортепиано","Гармонь"],correctAnswer:2,explanation:'Фортепиано называют "королём музыкальных инструментов".',difficulty:"medium",points:15}]},{id:"pe2",title:"Физическая культура",icon:(0,y.jsx)(eF,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Спорт, игры, здоровье",sections:[{id:"pe2-sec1",title:"Гимнастика",description:"Основные упражнения",topics:[{id:"pe2-sec1-t1",title:"Утренняя зарядка",description:"Комплекс упражнений",lessons:[{id:"pe2-sec1-t1-l1",title:"Комплекс зарядки",description:"Упражнения для бодрости",theory:`<h3>🏃 Утренняя зарядка</h3>
                  <p>Утренняя зарядка помогает проснуться и даёт энергию! 🌞</p>
                  <h4>Комплекс упражнений:</h4>
                  <ol>
                    <li>Повороты головы — 5 раз</li>
                    <li>Махи руками — 10 раз</li>
                    <li>Наклоны — 5 раз</li>
                    <li>Приседания — 5-10 раз</li>
                    <li>Прыжки — 10 раз</li>
                  </ol>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Делай зарядку каждый день</li>
                    <li>Начинай медленно</li>
                    <li>Дыши ровно</li>
                  </ul>`,examples:["Сделай зарядку утром","Разминка для шеи"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"pe2-sec1-t1-l2",title:"Упражнения для осанки",description:"Правильная осанка",theory:`<h3>🧘 Упражнения для осанки</h3>
                  <p>Правильная осанка — это красиво и полезно!</p>
                  <h4>Упражнения:</h4>
                  <ol>
                    <li>Стань у стены, прижми пятки, лопатки, затылок</li>
                    <li>Постой 1 минуту</li>
                    <li>Отойди и сохрани положение</li>
                    <li>\xabКошечка\xbb — встань на четвереньки, выгни спину</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Сиди прямо, не сутулься! 💪</p>`,examples:["Проверь свою осанку",'Сделай упражнение "Кошечка"'],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"pe2-sec1-t2",title:"Акробатика",description:"Простые акробатические упражнения",lessons:[{id:"pe2-sec1-t2-l1",title:"Кувырок вперёд",description:"Техника выполнения",theory:`<h3>🤸 Кувырок вперёд</h3>
                  <h4>Техника:</h4>
                  <ol>
                    <li>Присядь, поставь руки на мат</li>
                    <li>Прижми подбородок к груди</li>
                    <li>Оттолкнись ногами</li>
                    <li>Перекатись через голову</li>
                    <li>Вернись в присед</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>Не падай на голову!</li>
                    <li>Группируйся плотно</li>
                    <li>Делай только с учителем!</li>
                  </ul>`,examples:["Расскажи технику кувырка","Покажи группировку"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"pe2-sec2",title:"Подвижные игры",description:"Игры и эстафеты",topics:[{id:"pe2-sec2-t1",title:"Подвижные игры",description:"Вышибалы, прятки, догонялки",lessons:[{id:"pe2-sec2-t1-l1",title:"Вышибалы",description:"Правила игры",theory:`<h3>🏐 Игра "Вышибалы"</h3>
                  <h4>Правила:</h4>
                  <ol>
                    <li>Два выбивающих стоят по краям</li>
                    <li>Остальные игроки в центре</li>
                    <li>Выбивающие кидают мяч</li>
                    <li>Попали в игрока — он выбывает</li>
                    <li>Поймал мяч — остаёшься в игре</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Увертывайся от мяча! 💨</p>`,examples:["Сыграй в вышибалы с друзьями","Как не выбыть из игры?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"pe2-sec2-t1-l2",title:"Салки (Догонялки)",description:"Правила игры",theory:`<h3>🏃 Игра "Салки"</h3>
                  <h4>Правила:</h4>
                  <ol>
                    <li>Один игрок — "салка" (водящий)</li>
                    <li>"Салка" догоняет остальных</li>
                    <li>Осалил (коснулся) — этот игрок становится "салкой"</li>
                    <li>Бегать можно только в определённой зоне</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Беги быстро, но смотри под ноги! 🏃</p>`,examples:["Сыграй в салки","Как стать водящим?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Зачем нужна утренняя зарядка?",options:["Чтобы устать","Чтобы проснуться и получить энергию","Чтобы не спать","Не нужна"],correctAnswer:1,explanation:"Утренняя зарядка помогает проснуться и даёт энергию на весь день.",difficulty:"easy",points:10},{id:"q2",question:"Как правильно играть в подвижные игры?",options:["Толкать других","Соблюдать правила и играть честно","Кричать и мешать","Нарушать правила"],correctAnswer:1,explanation:"В подвижных играх нужно соблюдать правила и играть честно.",difficulty:"easy",points:10},{id:"q3",question:"Что нужно делать для правильной осанки?",options:["Сутулиться","Сидеть прямо и делать упражнения","Ничего не делать","Наклоняться низко"],correctAnswer:1,explanation:"Для правильной осанки нужно сидеть прямо и делать специальные упражнения.",difficulty:"easy",points:10}]},{id:"art2",title:"Изобразительное искусство",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Рисование, цвета, творчество",sections:[{id:"art2-sec1",title:"Цвета и краски",description:"Тёплые и холодные цвета",topics:[{id:"art2-sec1-t1",title:"Тёплые и холодные цвета",description:"Учимся различать цвета",lessons:[{id:"art2-sec1-t1-l1",title:"Тёплые цвета",description:"Цвета солнца и огня",theory:`<h3>🌞 Тёплые цвета</h3>
                  <p>Тёплые цвета напоминают нам о тепле!</p>
                  <h4>Тёплые цвета:</h4>
                  <ul>
                    <li>🔴 Красный</li>
                    <li>🟠 Оранжевый</li>
                    <li>🟡 Жёлтый</li>
                  </ul>
                  <h4>Ассоциации:</h4>
                  <p>Солнышко ☀️, огонь 🔥, осенние листья 🍂</p>`,examples:["Назови тёплые цвета","Нарисуй солнышко тёплыми цветами"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"art2-sec1-t1-l2",title:"Холодные цвета",description:"Цвета льда и воды",theory:`<h3>❄️ Холодные цвета</h3>
                  <p>Холодные цвета напоминают нам о прохладе!</p>
                  <h4>Холодные цвета:</h4>
                  <ul>
                    <li>🔵 Синий</li>
                    <li>💙 Голубой</li>
                    <li>💜 Фиолетовый</li>
                  </ul>
                  <h4>Ассоциации:</h4>
                  <p>Лёд 🧊, снег ❄️, море 🌊</p>`,examples:["Назови холодные цвета","Нарисуй снежинку холодными цветами"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"art2-sec1-t1-l3",title:"Смешивание цветов",description:"Получаем новые цвета",theory:`<h3>🎨 Смешивание цветов</h3>
                  <p>Из основных цветов можно получить новые!</p>
                  <h4>Основные цвета:</h4>
                  <p>Красный, синий, жёлтый</p>
                  <h4>Смешивание:</h4>
                  <ul>
                    <li>Красный + Жёлтый = 🟠 Оранжевый</li>
                    <li>Синий + Жёлтый = 💚 Зелёный</li>
                    <li>Красный + Синий = 💜 Фиолетовый</li>
                  </ul>`,examples:["Попробуй смешать краски","Как получить зелёный цвет?"],completed:!1,difficulty:"medium",estimatedTime:20}]},{id:"art2-sec1-t2",title:"Народные промыслы",description:"Дымково, Гжель, Хохлома",lessons:[{id:"art2-sec1-t2-l1",title:"Дымковская игрушка",description:"Яркие глиняные игрушки",theory:`<h3>🎨 Дымковская игрушка</h3>
                  <p>Дымковские игрушки — яркие глиняные фигурки!</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Яркие цвета: красный, жёлтый, синий, зелёный</li>
                    <li>Белый фон</li>
                    <li>Узоры: круги, точки, волны</li>
                  </ul>
                  <h4>История:</h4>
                  <p>Дымково — село в России, где делают эти игрушки уже более 400 лет!</p>`,examples:["Рассмотри дымковскую игрушку","Нарисуй узор для игрушки"],completed:!1,difficulty:"medium",estimatedTime:20},{id:"art2-sec1-t2-l2",title:"Гжель",description:"Белая посуда с синими узорами",theory:`<h3>🏺 Гжель</h3>
                  <p>Гжель — это белая посуда с синими узорами!</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Белый фон</li>
                    <li>Синие узоры</li>
                    <li>Цветы, листья, птицы</li>
                  </ul>
                  <h4>История:</h4>
                  <p>Гжель — район в России, где делают эту посуду!</p>`,examples:["Рассмотри гжельскую посуду","Нарисуй синий цветок"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"art2-sec2",title:"Рисование",description:"Учимся рисовать",topics:[{id:"art2-sec2-t1",title:"Рисуем животных",description:"Простые схемы",lessons:[{id:"art2-sec2-t1-l1",title:"Как нарисовать котика",description:"Рисуем по схеме",theory:`<h3>🐱 Как нарисовать котика</h3>
                  <h4>Этапы:</h4>
                  <ol>
                    <li>Нарисуй большой овал — тело</li>
                    <li>Добавь круг — голову</li>
                    <li>Нарисуй треугольники — уши</li>
                    <li>Добавь глаза, нос, усы</li>
                    <li>Нарисуй лапки и хвост</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Начинай с простых фигур! 📝</p>`,examples:["Нарисуй котика","Нарисуй своё домашнее животное"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"art2-sec2-t1-l2",title:"Рисуем птичку",description:"Простая схема",theory:`<h3>🐦 Как нарисовать птичку</h3>
                  <h4>Этапы:</h4>
                  <ol>
                    <li>Нарисуй овал — тело</li>
                    <li>Добавь круг — голову</li>
                    <li>Нарисуй клюв и глаз</li>
                    <li>Добавь крыло и хвост</li>
                    <li>Нарисуй лапки</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Птичку просто нарисовать! ✏️</p>`,examples:["Нарисуй птичку","Раскрась рисунок"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какие цвета являются тёплыми?",options:["Синий, голубой","Красный, оранжевый, жёлтый","Фиолетовый, синий","Зелёный, синий"],correctAnswer:1,explanation:"Тёплые цвета: красный, оранжевый, жёлтый — они напоминают огонь и солнце.",difficulty:"easy",points:10},{id:"q2",question:"Какой цвет получается при смешивании синего и жёлтого?",options:["Оранжевый","Фиолетовый","Зелёный","Красный"],correctAnswer:2,explanation:"Синий + Жёлтый = Зелёный. Попробуй смешать краски!",difficulty:"medium",points:15},{id:"q3",question:"Что такое Гжель?",options:["Игрушка","Белая посуда с синими узорами","Картина","Скульптура"],correctAnswer:1,explanation:"Гжель — это белая посуда с синими узорами, русский народный промысел.",difficulty:"medium",points:15}]},{id:"tech2",title:"Технология",icon:(0,y.jsx)(eU,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"Оригами, аппликация, поделки",sections:[{id:"tech2-sec1",title:"Работа с бумагой",description:"Оригами и аппликация",topics:[{id:"tech2-sec1-t1",title:"Оригами",description:"Искусство складывания из бумаги",lessons:[{id:"tech2-sec1-t1-l1",title:"Оригами: Самолётик",description:"Простая фигура",theory:`<h3>✈️ Оригами: Самолётик</h3>
                  <h4>Что нужно:</h4>
                  <p>Прямоугольный лист бумаги</p>
                  <h4>Порядок работы:</h4>
                  <ol>
                    <li>Согни лист пополам вдоль</li>
                    <li>Разогни и загни углы к центру</li>
                    <li>Согни ещё раз к центру</li>
                    <li>Сложи пополам</li>
                    <li>Отогни крылья</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Делай ровные сгибы! 📐</p>`,examples:["Сделай самолётик","Запусти самолётик"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"tech2-sec1-t1-l2",title:"Оригами: Кораблик",description:"Плавающая фигура",theory:`<h3>⛵ Оригами: Кораблик</h3>
                  <h4>Что нужно:</h4>
                  <p>Квадратный лист бумаги</p>
                  <h4>Порядок работы:</h4>
                  <ol>
                    <li>Согни квадрат пополам</li>
                    <li>Загни углы к центру</li>
                    <li>Подними нижние края вверх</li>
                    <li>Раскрой и сплющи в квадрат</li>
                    <li>Потяни за края — кораблик готов!</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Кораблик может плавать в воде! 🌊</p>`,examples:["Сделай кораблик","Спусти кораблик на воду"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"tech2-sec1-t2",title:"Аппликация",description:"Вырезание и наклеивание",lessons:[{id:"tech2-sec1-t2-l1",title:"Правила работы с ножницами",description:"Техника безопасности",theory:`<h3>✂️ Безопасность с ножницами</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>📌 Держи ножницы правильно</li>
                    <li>📌 Не размахивай ножницами</li>
                    <li>📌 Передавай кольцами вперёд</li>
                    <li>📌 Храни в закрытом виде</li>
                    <li>📌 Не бери чужие ножницы без спроса</li>
                  </ul>
                  <h4>Совет:</h4>
                  <p>Безопасность — главное! ⚠️</p>`,examples:["Как правильно передать ножницы?","Покажи правильное положение ножниц"],completed:!1,difficulty:"easy",estimatedTime:10},{id:"tech2-sec1-t2-l2",title:'Аппликация "Цветок"',description:"Создаём картину",theory:`<h3>🌸 Аппликация: Цветок</h3>
                  <h4>Что нужно:</h4>
                  <ul>
                    <li>Цветная бумага</li>
                    <li>Картон для основы</li>
                    <li>Ножницы, клей</li>
                  </ul>
                  <h4>Порядок работы:</h4>
                  <ol>
                    <li>Вырежи жёлтый круг — серединку</li>
                    <li>Вырежи лепестки (5-6 штук)</li>
                    <li>Вырежи зелёный стебель и листья</li>
                    <li>Наклей: стебель, листья, лепестки, серединку</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Сначала приклеивай нижние детали! 🌼</p>`,examples:["Сделай аппликацию цветка","Придумай свой узор"],completed:!1,difficulty:"easy",estimatedTime:25}]}]},{id:"tech2-sec2",title:"Поделки к праздникам",description:"Подарки своими руками",topics:[{id:"tech2-sec2-t1",title:"Открытки и подарки",description:"Делаем подарки близким",lessons:[{id:"tech2-sec2-t1-l1",title:"Открытка на день рождения",description:"Подарок своими руками",theory:`<h3>🎂 Открытка на день рождения</h3>
                  <h4>Что нужно:</h4>
                  <ul>
                    <li>Лист картона</li>
                    <li>Цветная бумага</li>
                    <li>Клей, ножницы</li>
                    <li>Фломастеры</li>
                  </ul>
                  <h4>Порядок работы:</h4>
                  <ol>
                    <li>Согни картон пополам</li>
                    <li>Вырежи и наклей украшения</li>
                    <li>Напиши поздравление внутри</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Подпиши открытку красивым почерком! ✍️</p>`,examples:["Сделай открытку для друга","Напиши поздравление"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"Что такое оригами?",options:["Рисование красками","Складывание из бумаги","Лепка из глины","Вырезание фигур"],correctAnswer:1,explanation:"Оригами — это японское искусство складывания фигурок из бумаги без клея и ножниц.",difficulty:"easy",points:10},{id:"q2",question:"Как правильно передавать ножницы?",options:["Лезвиями вперёд","Кольцами вперёд","В кармане","Любым способом"],correctAnswer:1,explanation:"Ножницы нужно передавать кольцами вперёд, чтобы не поранить другого человека.",difficulty:"easy",points:10},{id:"q3",question:"Что нужно для аппликации?",options:["Только бумага","Бумага, ножницы, клей","Только клей","Только ножницы"],correctAnswer:1,explanation:"Для аппликации нужны цветная бумага, ножницы и клей.",difficulty:"easy",points:10}]},{id:"safety2",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-red-500",gradient:"from-red-600 to-orange-600",description:"Безопасность дома, в школе, на улице",sections:[{id:"safety2-sec1",title:"Безопасность в школе",description:"Правила поведения",topics:[{id:"safety2-sec1-t1",title:"Правила поведения в школе",description:"На уроках и переменах",lessons:[{id:"safety2-sec1-t1-l1",title:"Правила на переменах",description:"Безопасность в коридорах",theory:`<h3>🏫 Безопасность на переменах</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>🚫 Не бегай по коридорам</li>
                    <li>🚫 Не толкай других</li>
                    <li>🪜 Осторожно на лестницах</li>
                    <li>🚪 Не открывай двери резко</li>
                    <li>📢 Слушай дежурных</li>
                  </ul>
                  <h4>Почему нельзя бегать?</h4>
                  <p>Можно столкнуться, упасть, получить травму!</p>`,examples:["Перечисли правила поведения","Почему опасно бегать в коридоре?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"safety2-sec1-t1-l2",title:"Безопасность на уроках",description:"Правила в классе",theory:`<h3>📚 Безопасность на уроках</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>✏️ Не играй ручкой и карандашом</li>
                    <li>✂️ Аккуратно работай с ножницами</li>
                    <li>🪑 Сиди правильно за партой</li>
                    <li>💧 Остерегайся горячей воды</li>
                    <li>🔌 Не трогай розетки и провода</li>
                  </ul>
                  <h4>Совет:</h4>
                  <p>Будь внимателен на уроке! ⚠️</p>`,examples:["Как вести себя на уроке технологии?","Какие опасности есть в классе?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"safety2-sec2",title:"Безопасность на улице",description:"Правила для пешеходов",topics:[{id:"safety2-sec2-t1",title:"Правила для пешеходов",description:"Светофор, переход, дорога",lessons:[{id:"safety2-sec2-t1-l1",title:"Светофор",description:"Сигналы светофора",theory:`<h3>🚦 Светофор</h3>
                  <h4>Сигналы светофора:</h4>
                  <ul>
                    <li>🔴 <b>Красный</b> — СТОЙ! Идти нельзя!</li>
                    <li>🟡 <b>Жёлтый</b> — ЖДИ! Приготовься!</li>
                    <li>🟢 <b>Зелёный</b> — ИДИ! Можно переходить!</li>
                  </ul>
                  <h4>Запомни!</h4>
                  <p>Светофор — твой друг на дороге! 👫</p>`,examples:["Что означает красный сигнал?","Когда можно переходить дорогу?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"safety2-sec2-t1-l2",title:"Как перейти дорогу",description:"Правила перехода",theory:`<h3>🚶 Переход дороги</h3>
                  <h4>Порядок действий:</h4>
                  <ol>
                    <li>Найди пешеходный переход (\xabзебру\xbb)</li>
                    <li>Подойди к переходу</li>
                    <li>Посмотри на светофор</li>
                    <li>Зелёный? Посмотри налево, потом направо</li>
                    <li>Убедись, что машины остановились</li>
                    <li>Переходи спокойно, не беги!</li>
                  </ol>
                  <h4>Совет:</h4>
                  <p>Сначала посмотри, потом иди! 👀</p>`,examples:["Как правильно переходить дорогу?","Где нужно переходить дорогу?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]},{id:"safety2-sec3",title:"Опасные ситуации",description:"Пожар, вода, незнакомцы",topics:[{id:"safety2-sec3-t1",title:"Пожарная безопасность",description:"Правила при пожаре",lessons:[{id:"safety2-sec3-t1-l1",title:"Правила пожарной безопасности",description:"Как не допустить пожар",theory:`<h3>🔥 Пожарная безопасность</h3>
                  <h4>Запомни!</h4>
                  <ul>
                    <li>🚫 Не играй со спичками!</li>
                    <li>🚫 Не трогай зажигалки!</li>
                    <li>🚫 Не включай плиту без взрослых!</li>
                    <li>🚫 Не оставляй свечи без присмотра!</li>
                    <li>🚫 Не включай утюг без взрослых!</li>
                  </ul>
                  <h4>Совет:</h4>
                  <p>Огонь — не игрушка! 🔥</p>`,examples:["Почему нельзя играть со спичками?","Какие правила пожарной безопасности ты знаешь?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"safety2-sec3-t1-l2",title:"Если случился пожар",description:"Действия при пожаре",theory:`<h3>🚨 Что делать при пожаре</h3>
                  <h4>Порядок действий:</h4>
                  <ol>
                    <li>Не паникуй!</li>
                    <li>Позови взрослых</li>
                    <li>Позвони 101 или 112</li>
                    <li>Покинь помещение</li>
                    <li>Не прячься!</li>
                  </ol>
                  <h4>Важно!</h4>
                  <p>📞 Телефон пожарных: 101 или 112</p>`,examples:["Куда звонить при пожаре?","Что делать, если увидел огонь?"],completed:!1,difficulty:"medium",estimatedTime:20}]},{id:"safety2-sec3-t2",title:"Безопасность на воде",description:"Правила у воды",lessons:[{id:"safety2-sec3-t2-l1",title:"Правила у воды",description:"Купание безопасно",theory:`<h3>🏊 Безопасность на воде</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>🏖️ Купайся только со взрослыми</li>
                    <li>🚫 Не заплывай за буйки</li>
                    <li>🚫 Не прыгай в незнакомую воду</li>
                    <li>🚫 Не толкай других в воду</li>
                    <li>☀️ Не купайся сразу после еды</li>
                  </ul>
                  <h4>Совет:</h4>
                  <p>Вода требует осторожности! 💧</p>`,examples:["Где можно купаться?","Почему нельзя купаться одному?"],completed:!1,difficulty:"easy",estimatedTime:15}]}]}],quiz:[{id:"q1",question:"Можно ли бегать по коридорам школы?",options:["Да, можно","Нет, опасно","Только быстро","Иногда"],correctAnswer:1,explanation:"Бегать по коридорам школы опасно — можно столкнуться или упасть.",difficulty:"easy",points:10},{id:"q2",question:"Что означает красный сигнал светофора?",options:["Иди","Жди","Стой","Беги"],correctAnswer:2,explanation:"Красный сигнал светофора означает СТОЙ — идти нельзя!",difficulty:"easy",points:10},{id:"q3",question:"Какой номер телефона для вызова пожарных?",options:["102","103","101","104"],correctAnswer:2,explanation:"Для вызова пожарных звони 101 или 112.",difficulty:"easy",points:10}]},{id:"informatics2",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Компьютер и программы",sections:[{id:"info2-sec1",title:"Работа с компьютером",description:"Устройства компьютера",topics:[{id:"info2-sec1-t1",title:"Устройства компьютера",description:"Из чего состоит компьютер",lessons:[{id:"info2-sec1-t1-l1",title:"Ввод и вывод информации",description:"Устройства ввода и вывода",theory:`<h3>📤 Устройства компьютера</h3>
                  <h4>Устройства ввода (для ввода информации):</h4>
                  <ul>
                    <li>⌨️ <strong>Клавиатура</strong> — ввод текста</li>
                    <li>🖱️ <strong>Мышка</strong> — управление курсором</li>
                    <li>🎤 <strong>Микрофон</strong> — ввод звука</li>
                    <li>📷 <strong>Сканер</strong> — ввод картинок</li>
                  </ul>
                  <h4>Устройства вывода (для вывода информации):</h4>
                  <ul>
                    <li>🖥️ <strong>Монитор</strong> — показывает на экране</li>
                    <li>🖨️ <strong>Принтер</strong> — печатает на бумаге</li>
                    <li>🔊 <strong>Колонки</strong> — выводят звук</li>
                  </ul>`,examples:["Назови устройства ввода","Назови устройства вывода","Для чего нужен принтер?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"info2-sec2",title:"Программы",description:"Компьютерные программы",topics:[{id:"info2-sec2-t1",title:"Программы для работы",description:"Текстовый редактор, Paint",lessons:[{id:"info2-sec2-t1-l1",title:"Текстовый редактор",description:"Блокнот и WordPad",theory:`<h3>📝 Текстовый редактор</h3>
                  <p>Текстовый редактор — программа для работы с текстом.</p>
                  <h4>Что можно делать:</h4>
                  <ul>
                    <li>Печатать текст</li>
                    <li>Исправлять ошибки</li>
                    <li>Сохранять документ</li>
                    <li>Открывать сохранённый документ</li>
                  </ul>
                  <h4>Горячие клавиши:</h4>
                  <ul>
                    <li><strong>Ctrl + S</strong> — сохранить</li>
                    <li><strong>Ctrl + C</strong> — копировать</li>
                    <li><strong>Ctrl + V</strong> — вставить</li>
                  </ul>`,examples:["Открой Блокнот","Напиши своё имя","Сохрани документ"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"info2-sec2-t1-l2",title:"Графический редактор Paint",description:"Рисуем на компьютере",theory:`<h3>🎨 Paint</h3>
                  <p>Paint — программа для рисования на компьютере.</p>
                  <h4>Инструменты Paint:</h4>
                  <ul>
                    <li>✏️ <strong>Карандаш</strong> — рисует тонкие линии</li>
                    <li>🖌️ <strong>Кисть</strong> — рисует толстые линии</li>
                    <li>🪣 <strong>Заливка</strong> — закрашивает область</li>
                    <li>✂️ <strong>Ластик</strong> — стирает</li>
                    <li>🔤 <strong>Текст</strong> — пишет слова</li>
                  </ul>
                  <h4>Задание:</h4>
                  <p>Нарисуй домик или цветок!</p>`,examples:["Открой Paint","Нарисуй солнышко","Используй заливку"],completed:!1,difficulty:"easy",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"Какое устройство вводит текст?",options:["Монитор","Клавиатура","Принтер","Колонки"],correctAnswer:1,explanation:"Клавиатура — устройство для ввода текста в компьютер.",difficulty:"easy",points:10},{id:"q2",question:"Что показывает информацию на экране?",options:["Клавиатура","Мышка","Монитор","Принтер"],correctAnswer:2,explanation:"Монитор выводит (показывает) информацию на экране.",difficulty:"easy",points:10},{id:"q3",question:"Для чего нужна программа Paint?",options:["Печатать текст","Рисовать","Играть","Слушать музыку"],correctAnswer:1,explanation:"Paint — это программа для рисования на компьютере.",difficulty:"easy",points:10},{id:"q4",question:"Какая комбинация клавиш сохраняет документ?",options:["Ctrl + C","Ctrl + V","Ctrl + S","Ctrl + X"],correctAnswer:2,explanation:"Ctrl + S — сохранить документ. S = Save (сохранить).",difficulty:"medium",points:15}]}]},eX={id:3,name:"3 класс",shortName:"3 кл.",subjects:[{id:"math3",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Таблица умножения, деление, задачи",sections:[{id:"math3-sec1",title:"Умножение и деление",description:"Таблица умножения",topics:[{id:"math3-sec1-t1",title:"Таблица умножения",description:"Умножение чисел от 1 до 9",lessons:[{id:"math3-sec1-t1-l1",title:"Умножение на 2 и 3",description:"Первые строки таблицы",theory:`<h3>✖️ Умножение на 2</h3>
                  <p>Умножение на 2 — это сложение двух одинаковых чисел!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
2 \xd7 1 = 2     2 \xd7 6 = 12
2 \xd7 2 = 4     2 \xd7 7 = 14
2 \xd7 3 = 6     2 \xd7 8 = 16
2 \xd7 4 = 8     2 \xd7 9 = 18
2 \xd7 5 = 10    2 \xd7 10 = 20
                  </pre>
                  <h3>✖️ Умножение на 3</h3>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
3 \xd7 1 = 3     3 \xd7 6 = 18
3 \xd7 2 = 6     3 \xd7 7 = 21
3 \xd7 3 = 9     3 \xd7 8 = 24
3 \xd7 4 = 12    3 \xd7 9 = 27
3 \xd7 5 = 15    3 \xd7 10 = 30
                  </pre>`,examples:["Чему равно 7 × 2?","Вычисли: 8 × 3"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math3-sec1-t1-l2",title:"Умножение на 4, 5, 6",description:"Продолжаем таблицу",theory:`<h3>✖️ Умножение на 4</h3>
                  <p>Умножение на 4 — это два раза умножить на 2!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
4 \xd7 1 = 4     4 \xd7 6 = 24
4 \xd7 2 = 8     4 \xd7 7 = 28
4 \xd7 3 = 12    4 \xd7 8 = 32
4 \xd7 4 = 16    4 \xd7 9 = 36
4 \xd7 5 = 20    4 \xd7 10 = 40
                  </pre>
                  <h3>✖️ Умножение на 5</h3>
                  <p>Все ответы заканчиваются на 0 или 5!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
5 \xd7 1 = 5     5 \xd7 6 = 30
5 \xd7 2 = 10    5 \xd7 7 = 35
5 \xd7 3 = 15    5 \xd7 8 = 40
5 \xd7 4 = 20    5 \xd7 9 = 45
5 \xd7 5 = 25    5 \xd7 10 = 50
                  </pre>`,examples:["Чему равно 6 × 5?","Вычисли: 7 × 4"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"math3-sec1-t1-l3",title:"Умножение на 7, 8, 9",description:"Заключительные строки",theory:`<h3>✖️ Умножение на 9 — хитрость!</h3>
                  <p>Сумма цифр ответа всегда равна 9!</p>
                  <p>9 \xd7 3 = 27 → 2 + 7 = 9</p>
                  <p>9 \xd7 7 = 63 → 6 + 3 = 9</p>
                  <h4>Трюк с пальцами:</h4>
                  <p>Загни палец, который умножаешь — слева десятки, справа единицы!</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
9 \xd7 1 = 9     9 \xd7 6 = 54
9 \xd7 2 = 18    9 \xd7 7 = 63
9 \xd7 3 = 27    9 \xd7 8 = 72
9 \xd7 4 = 36    9 \xd7 9 = 81
9 \xd7 5 = 45    9 \xd7 10 = 90
                  </pre>`,examples:["Чему равно 8 × 7?","Вычисли: 9 × 6"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"math3-sec1-t2",title:"Деление",description:"Обратное действие умножению",lessons:[{id:"math3-sec1-t2-l1",title:"Что такое деление?",description:"Деление — обратное умножению",theory:`<h3>➗ Деление</h3>
                  <p>Деление — это разделение на равные части.</p>
                  <h4>Связь с умножением:</h4>
                  <p>Если 3 \xd7 4 = 12, то:</p>
                  <ul>
                    <li>12 : 3 = 4</li>
                    <li>12 : 4 = 3</li>
                  </ul>
                  <h4>Компоненты деления:</h4>
                  <ul>
                    <li><strong>Делимое</strong> — число, которое делят (12)</li>
                    <li><strong>Делитель</strong> — на сколько делят (3)</li>
                    <li><strong>Частное</strong> — результат (4)</li>
                  </ul>`,examples:["Вычисли: 24 : 6","Найди частное: 35 : 7"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"math3-sec2",title:"Геометрия",description:"Периметр и площадь",topics:[{id:"math3-sec2-t1",title:"Периметр",description:"Сумма сторон фигуры",lessons:[{id:"math3-sec2-t1-l1",title:"Периметр прямоугольника",description:"Сумма всех сторон",theory:`<h3>📏 Периметр (P)</h3>
                  <p>Периметр — сумма длин всех сторон фигуры.</p>
                  <h4>Формулы:</h4>
                  <ul>
                    <li><strong>P = a + b + a + b</strong></li>
                    <li><strong>P = (a + b) \xd7 2</strong></li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Прямоугольник со сторонами 5 см и 3 см:</p>
                  <p>P = (5 + 3) \xd7 2 = 16 см</p>
                  <h4>Периметр квадрата:</h4>
                  <p>P = a \xd7 4</p>`,examples:["Найди периметр прямоугольника 6×4","Найди периметр квадрата со стороной 5"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"math3-sec2-t2",title:"Площадь",description:"Внутренняя часть фигуры",lessons:[{id:"math3-sec2-t2-l1",title:"Площадь прямоугольника",description:"Длина × ширина",theory:`<h3>📐 Площадь (S)</h3>
                  <p>Площадь — это внутренняя часть фигуры.</p>
                  <h4>Формула:</h4>
                  <p><strong>S = a \xd7 b</strong> (длина \xd7 ширина)</p>
                  <h4>Единицы площади:</h4>
                  <ul>
                    <li>мм\xb2, см\xb2, дм\xb2, м\xb2</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Прямоугольник со сторонами 5 см и 3 см:</p>
                  <p>S = 5 \xd7 3 = 15 см\xb2</p>
                  <h4>Площадь квадрата:</h4>
                  <p>S = a \xd7 a = a\xb2</p>`,examples:["Найди площадь прямоугольника 7×4","Найди площадь квадрата со стороной 6"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Чему равно 7 × 8?",options:["54","56","58","64"],correctAnswer:1,explanation:"7 × 8 = 56. Это нужно запомнить!",difficulty:"easy",points:10},{id:"q2",question:"Чему равен периметр квадрата со стороной 5 см?",options:["15 см","20 см","25 см","10 см"],correctAnswer:1,explanation:"P = a × 4 = 5 × 4 = 20 см",difficulty:"easy",points:10}]},{id:"russian3",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Морфология, синтаксис, орфография",sections:[{id:"russian3-sec1",title:"Состав слова",description:"Морфемы",topics:[{id:"russian3-sec1-t1",title:"Корень слова",description:"Главная часть слова",lessons:[{id:"russian3-sec1-t1-l1",title:"Что такое корень?",description:"Общая часть родственных слов",theory:`<h3>🌱 Корень слова</h3>
                  <p>Корень — главная значимая часть слова, общая для родственных слов.</p>
                  <h4>Пример:</h4>
                  <ul>
                    <li>лес, лесок, лесной, лесник</li>
                    <li>Корень: -лес-</li>
                  </ul>
                  <h4>Правило:</h4>
                  <p>Чтобы найти корень, подбери родственные слова!</p>
                  <h4>⚠️ Важно:</h4>
                  <p>Однокоренные слова имеют одинаковый корень и связаны по смыслу.</p>`,examples:['Найди корень в слове "домик"','Подбери однокоренные слова к "вода"'],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"russian3-sec1-t2",title:"Приставка и суффикс",description:"Образование новых слов",lessons:[{id:"russian3-sec1-t2-l1",title:"Приставка",description:"Часть слова перед корнем",theory:`<h3>➡️ Приставка</h3>
                  <p>Приставка — часть слова перед корнем, служит для образования новых слов.</p>
                  <h4>Примеры приставок:</h4>
                  <ul>
                    <li>при- (пришёл)</li>
                    <li>за- (забежал)</li>
                    <li>по- (побежал)</li>
                    <li>пере- (перешёл)</li>
                    <li>вы- (выбежал)</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>ходить → при-ходить, вы-ходить, пере-ходить</p>`,examples:["Выдели приставку: побежал",'Образуй слово с приставкой за- от "говорить"'],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"russian3-sec2",title:"Части речи",description:"Имя существительное, прилагательное, глагол",topics:[{id:"russian3-sec2-t1",title:"Имя существительное",description:"Склонение, падежи",lessons:[{id:"russian3-sec2-t1-l1",title:"Падежи",description:"6 падежей русского языка",theory:`<h3>📝 Падежи</h3>
                  <p>В русском языке 6 падежей:</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px; font-size: 14px;">
Именительный   (кто? что?)        стол
Родительный    (кого? чего?)      стола
Дательный      (кому? чему?)      столу
Винительный    (кого? что?)       стол
Творительный   (кем? чем?)        столом
Предложный     (о ком? о чём?)    о столе
                  </pre>
                  <h4>Запоминалка:</h4>
                  <p>"Иван Родил Девчонку, Велел Тащить Пелёнку"</p>`,examples:['Определи падеж: "вижу стол"',"Поставь в родительном падеже: книга"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:'Какой падеж отвечает на вопрос "кому? чему?"?',options:["Именительный","Родительный","Дательный","Винительный"],correctAnswer:2,explanation:'Дательный падеж отвечает на вопросы "кому? чему?"',difficulty:"medium",points:15}]},{id:"literature3",title:"Литературное чтение",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Басни, рассказы, стихи",sections:[{id:"lit3-sec1",title:"Басня",description:"Басни И.А. Крылова",topics:[{id:"lit3-sec1-t1",title:"И.А. Крылов",description:"Великий баснописец",lessons:[{id:"lit3-sec1-t1-l1",title:"Что такое басня?",description:"Особенности жанра",theory:`<h3>📖 Басня</h3>
                  <p>Басня — короткий рассказ в стихах или прозе с нравоучением.</p>
                  <h4>Особенности басни:</h4>
                  <ul>
                    <li>Короткий сюжет</li>
                    <li>Герои — животные или люди</li>
                    <li>Мораль (нравоучительный вывод)</li>
                    <li>Аллегория (иносказание)</li>
                  </ul>
                  <h4>И.А. Крылов (1769-1844):</h4>
                  <p>Великий русский баснописец. Написал более 200 басен.</p>`,examples:["Какие басни Крылова ты знаешь?","Что такое мораль басни?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"lit3-sec1-t1-l2",title:'"Ворона и Лисица"',description:"Анализ басни",theory:`<h3>🦊 "Ворона и Лисица"</h3>
                  <h4>Герои:</h4>
                  <ul>
                    <li>Ворона — глупая, доверчивая</li>
                    <li>Лисица — хитрая, льстивая</li>
                  </ul>
                  <h4>Мораль:</h4>
                  <p>"Уж сколько раз твердили миру,<br/>
                  Что лесть гнусна, вредна; но только всё не впрок,<br/>
                  И в сердце льстец всегда отыщет уголок."</p>
                  <h4>Главная мысль:</h4>
                  <p>Не верь льстецам! Лесть опасна.</p>`,examples:["Какой характер у Лисицы?","Чему учит эта басня?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:'Кто написал басню "Ворона и Лисица"?',options:["А.С. Пушкин","И.А. Крылов","Л.Н. Толстой","К.И. Чуковский"],correctAnswer:1,explanation:'Басню "Ворона и Лисица" написал Иван Андреевич Крылов.',difficulty:"easy",points:10}]},{id:"world3",title:"Окружающий мир",icon:(0,y.jsx)(eD,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-teal-500",description:"Природа, организм человека",sections:[{id:"world3-sec1",title:"Организм человека",description:"Строение тела",topics:[{id:"world3-sec1-t1",title:"Органы человека",description:"Основные системы органов",lessons:[{id:"world3-sec1-t1-l1",title:"Системы органов",description:"Как работают органы",theory:`<h3>🫀 Системы органов человека</h3>
                  <h4>Основные системы:</h4>
                  <ul>
                    <li><strong>Пищеварительная</strong> — переваривание пищи</li>
                    <li><strong>Дыхательная</strong> — дыхание (лёгкие)</li>
                    <li><strong>Кровеносная</strong> — кровообращение (сердце)</li>
                    <li><strong>Нервная</strong> — управление организмом (мозг)</li>
                    <li><strong>Опорно-двигательная</strong> — движение (кости, мышцы)</li>
                  </ul>
                  <h4>⚠️ Здоровый образ жизни:</h4>
                  <ul>
                    <li>Правильное питание</li>
                    <li>Физические упражнения</li>
                    <li>Сон 9-10 часов</li>
                  </ul>`,examples:["Назови органы дыхания","Какая система отвечает за движение?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:'Какой орган является "насосом" организма?',options:["Мозг","Лёгкие","Сердце","Желудок"],correctAnswer:2,explanation:"Сердце — это насос, который перекачивает кровь по организму.",difficulty:"easy",points:10}]},{id:"english3",title:"Английский язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Базовые слова, фразы, грамматика",sections:[{id:"english3-sec1",title:"Семья и дом",description:"Слова о семье и доме",topics:[{id:"english3-sec1-t1",title:"Члены семьи",description:"Family members",lessons:[{id:"english3-sec1-t1-l1",title:"Моя семья",description:"My family",theory:`<h3>👨‍👩‍👧‍👦 Семья — Family</h3>
                  <h4>Запомни слова:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
mother / mum    — мама
father / dad    — папа
sister          — сестра
brother         — брат
grandmother     — бабушка
grandfather     — дедушка
family          — семья
                  </pre>
                  <h4>💡 Фразы:</h4>
                  <ul>
                    <li>This is my mother. — Это моя мама.</li>
                    <li>I have a sister. — У меня есть сестра.</li>
                    <li>My family is big. — Моя семья большая.</li>
                  </ul>`,examples:['Как сказать "у меня есть брат"?','Переведи: "This is my father"'],completed:!1,difficulty:"easy",estimatedTime:20},{id:"english3-sec1-t1-l2",title:"Глагол have got",description:"Иметь",theory:`<h3>✋ Have got — иметь</h3>
                  <h4>Утверждение:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
I have got     — у меня есть
You have got   — у тебя есть
He has got     — у него есть
She has got    — у неё есть
We have got    — у нас есть
They have got  — у них есть
                  </pre>
                  <h4>🎮 Краткая форма:</h4>
                  <ul>
                    <li>I've got a cat. — У меня есть кот.</li>
                    <li>She's got a dog. — У неё есть собака.</li>
                  </ul>`,examples:['Напиши: "У меня есть сестра"','Напиши: "У него есть брат"'],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"english3-sec1-t2",title:"Мой дом",description:"My house",lessons:[{id:"english3-sec1-t2-l1",title:"Комнаты",description:"Rooms",theory:`<h3>🏠 Комнаты — Rooms</h3>
                  <h4>Запомни слова:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
house      — дом
room       — комната
bedroom    — спальня
kitchen    — кухня
bathroom   — ванная
living room — гостиная
                  </pre>
                  <h4>💡 Фразы:</h4>
                  <ul>
                    <li>There is a kitchen. — Там есть кухня.</li>
                    <li>My room is big. — Моя комната большая.</li>
                  </ul>`,examples:['Переведи: "bedroom"','Как сказать "гостиная"?'],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"english3-sec2",title:"Животные",description:"Animals",topics:[{id:"english3-sec2-t1",title:"Домашние животные",description:"Pets",lessons:[{id:"english3-sec2-t1-l1",title:"Питомцы",description:"Pets",theory:`<h3>🐾 Домашние животные — Pets</h3>
                  <h4>Запомни слова:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
cat      — кошка
dog      — собака
fish     — рыба
bird     — птица
hamster  — хомяк
rabbit   — кролик
mouse    — мышь
                  </pre>
                  <h4>💡 Фразы:</h4>
                  <ul>
                    <li>I've got a cat. — У меня есть кошка.</li>
                    <li>My dog is funny. — Моя собака смешная.</li>
                  </ul>`,examples:['Как будет "хомяк"?','Скажи: "У меня есть птица"'],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:'Как перевести слово "sister"?',options:["Брат","Сестра","Мама","Бабушка"],correctAnswer:1,explanation:"Sister — это сестра на английском языке.",difficulty:"easy",points:10},{id:"q2",question:'Выбери правильный вариант: "She ___ a cat."',options:["have got","has got","is got","are got"],correctAnswer:1,explanation:"С местоимениями he/she/it используем has got.",difficulty:"medium",points:15}]},{id:"art3",title:"Изобразительное искусство",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Живопись, народные промыслы, рисование",sections:[{id:"art3-sec1",title:"Виды живописи",description:"Жанры изобразительного искусства",topics:[{id:"art3-sec1-t1",title:"Жанры живописи",description:"Пейзаж, портрет, натюрморт",lessons:[{id:"art3-sec1-t1-l1",title:"Пейзаж",description:"Изображение природы",theory:`<h3>🏞️ Пейзаж</h3>
                  <p>Пейзаж — это изображение природы на картине.</p>
                  <h4>Что рисуют в пейзаже:</h4>
                  <ul>
                    <li>🌲 Лес, поля, горы</li>
                    <li>🌊 Реки, озёра, море</li>
                    <li>🌅 Небо, солнце, облака</li>
                    <li>🏠 Дома, деревни</li>
                  </ul>
                  <h4>🎨 Знаменитые пейзажисты:</h4>
                  <ul>
                    <li>И.И. Шишкин — "Утро в сосновом лесу"</li>
                    <li>И.И. Левитан — "Золотая осень"</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>Наблюдай за природой и старайся увидеть красоту!</p>`,examples:["Нарисуй простой пейзаж с деревьями","Какие цвета нужны для осеннего пейзажа?"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"art3-sec1-t1-l2",title:"Портрет и натюрморт",description:"Другие жанры живописи",theory:`<h3>👤 Портрет</h3>
                  <p>Портрет — это изображение человека.</p>
                  <h4>Что важно в портрете:</h4>
                  <ul>
                    <li>👁️ Глаза — зеркало души</li>
                    <li>😊 Выражение лица</li>
                    <li>💇 Причёска и одежда</li>
                  </ul>
                  <h3>🍎 Натюрморт</h3>
                  <p>Натюрморт — изображение предметов: фрукты, цветы, посуда.</p>
                  <h4>Правила натюрморта:</h4>
                  <ul>
                    <li>Предметы не "плавают" в воздухе</li>
                    <li>Есть передний и задний план</li>
                    <li>Красивая композиция</li>
                  </ul>`,examples:["Нарисуй натюрморт с фруктами","Попробуй нарисовать портрет друга"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"art3-sec1-t2",title:"Цветовая гамма",description:"Тёплые и холодные цвета",lessons:[{id:"art3-sec1-t2-l1",title:"Тёплые и холодные цвета",description:"Температура цвета",theory:`<h3>🔥 Тёплые цвета</h3>
                  <p>Напоминают огонь, солнце, лето:</p>
                  <ul>
                    <li>🔴 Красный</li>
                    <li>🟠 Оранжевый</li>
                    <li>🟡 Жёлтый</li>
                  </ul>
                  <h3>❄️ Холодные цвета</h3>
                  <p>Напоминают лёд, воду, небо:</p>
                  <ul>
                    <li>🔵 Синий</li>
                    <li>🔷 Голубой</li>
                    <li>💜 Фиолетовый</li>
                    <li>💚 Зелёный (может быть и тёплым)</li>
                  </ul>
                  <h4>💡 Как использовать:</h4>
                  <p>Тёплые цвета — для солнечных картин, холодные — для зимних!</p>`,examples:["Нарисуй тёплый закат","Нарисуй холодный зимний пейзаж"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"art3-sec2",title:"Народные промыслы",description:"Русские художественные традиции",topics:[{id:"art3-sec2-t1",title:"Хохлома и Гжель",description:"Знаменитые росписи",lessons:[{id:"art3-sec2-t1-l1",title:"Хохломская роспись",description:"Золотая роспись",theory:`<h3>🖌️ Хохлома</h3>
                  <p>Хохлома — это золотая роспись по дереву.</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>💛 Золотой фон</li>
                    <li>🔴 Красные и чёрные узоры</li>
                    <li>🌿 Растительные мотивы: травка, ягоды, листья</li>
                  </ul>
                  <h4>Элементы росписи:</h4>
                  <ul>
                    <li>"Травка" — завитки</li>
                    <li>"Кудрина" — узорные листья</li>
                    <li>"Ягодка" — красные ягоды рябины</li>
                  </ul>
                  <h4>📍 Родина:</h4>
                  <p>Нижегородская область</p>`,examples:["Нарисуй хохломской узор","Какие цвета использует Хохлома?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"art3-sec2-t1-l2",title:"Гжельская керамика",description:"Синяя роспись",theory:`<h3>💎 Гжель</h3>
                  <p>Гжель — это синяя роспись на белом фоне.</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>⚪ Белый фон</li>
                    <li>🔵 Синие узоры разных оттенков</li>
                    <li>🌸 Цветочные и растительные мотивы</li>
                  </ul>
                  <h4>Что делают:</h4>
                  <ul>
                    <li>🍵 Чайники, чашки, тарелки</li>
                    <li>🧸 Фигурки животных</li>
                    <li>💎 Вазы и кувшины</li>
                  </ul>
                  <h4>📍 Родина:</h4>
                  <p>Подмосковье, посёлок Гжель</p>`,examples:["Нарисуй гжельский узор","Чем отличается Гжель от Хохломы?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Какой жанр изображает природу?",options:["Портрет","Натюрморт","Пейзаж","Картина"],correctAnswer:2,explanation:"Пейзаж — это изображение природы на картине.",difficulty:"easy",points:10},{id:"q2",question:"Какие цвета преобладают в Гжели?",options:["Красный и золотой","Синий и белый","Жёлтый и зелёный","Чёрный и серебряный"],correctAnswer:1,explanation:"Гжель — это синяя роспись на белом фоне.",difficulty:"easy",points:10}]},{id:"music3",title:"Музыка",icon:(0,y.jsx)(eL,{className:"w-5 h-5"}),color:"text-violet-400",gradient:"from-violet-500 to-purple-500",description:"Музыкальные жанры, композиторы, инструменты",sections:[{id:"music3-sec1",title:"Музыкальные жанры",description:"Основные жанры музыки",topics:[{id:"music3-sec1-t1",title:"Песня, танец, марш",description:"Три кита музыки",lessons:[{id:"music3-sec1-t1-l1",title:"Три кита музыки",description:"Основные жанры",theory:`<h3>🎵 Три кита музыки</h3>
                  <p>Три основных музыкальных жанра: песня, танец, марш.</p>
                  <h3>🎤 Песня</h3>
                  <p>Музыка со словами, которую можно петь.</p>
                  <ul>
                    <li>Есть мелодия и текст</li>
                    <li>Выражает чувства и мысли</li>
                    <li>Примеры: народные песни, детские песни</li>
                  </ul>
                  <h3>💃 Танец</h3>
                  <p>Музыка, под которую хочется танцевать.</p>
                  <ul>
                    <li>Чёткий ритм</li>
                    <li>Танцевальные движения</li>
                    <li>Примеры: вальс, полька</li>
                  </ul>
                  <h3>🥁 Марш</h3>
                  <p>Музыка для торжественного шествия.</p>
                  <ul>
                    <li>Ровный, чёткий ритм</li>
                    <li>Можно шагать под музыку</li>
                    <li>Примеры: военные марши</li>
                  </ul>`,examples:["Послушай марш и попробуй шагать","Какой жанр можно петь?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"music3-sec2",title:"Русские композиторы",description:"Великие русские музыканты",topics:[{id:"music3-sec2-t1",title:"М.И. Глинка и Н.А. Римский-Корсаков",description:"Русские композиторы",lessons:[{id:"music3-sec2-t1-l1",title:"Михаил Иванович Глинка",description:"Отец русской музыки",theory:`<h3>🎼 М.И. Глинка (1804-1857)</h3>
                  <p>Отец русской классической музыки.</p>
                  <h4>Знаменитые произведения:</h4>
                  <ul>
                    <li>🎭 Опера "Руслан и Людмила"</li>
                    <li>🎭 Опера "Иван Сусанин"</li>
                    <li>🎵 "Патриотическая песня"</li>
                  </ul>
                  <h4>Особенности музыки:</h4>
                  <ul>
                    <li>🇷🇺 Русские народные мотивы</li>
                    <li>🏰 Сказочные сюжеты</li>
                    <li>✨ Красивые мелодии</li>
                  </ul>
                  <h4>💡 Интересный факт:</h4>
                  <p>Глинка говорил: "Музыку создаёт народ, а мы, художники, только её аранжируем".</p>`,examples:['Послушай увертюру к опере "Руслан и Людмила"',"Почему Глинку называют отцом русской музыки?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"music3-sec2-t1-l2",title:"Николай Андреевич Римский-Корсаков",description:"Сказочник музыки",theory:`<h3>🎭 Н.А. Римский-Корсаков (1844-1908)</h3>
                  <p>Композитор-сказочник.</p>
                  <h4>Знаменитые оперы-сказки:</h4>
                  <ul>
                    <li>🧚 "Снегурочка"</li>
                    <li>👸 "Садко"</li>
                    <li>🦅 "Сказка о царе Салтане"</li>
                    <li>🕊️ "Золотой петушок"</li>
                  </ul>
                  <h4>Особенности музыки:</h4>
                  <ul>
                    <li>📚 Сказочные сюжеты</li>
                    <li>🌊 Изображение природы (море, ветер)</li>
                    <li>🦜 Звукоподражание (птицы, колокольчики)</li>
                  </ul>
                  <h4>🎶 Известное произведение:</h4>
                  <p>"Полет шмеля" — быстрая музыка, изображающая полёт насекомого!</p>`,examples:['Послушай "Полет шмеля"',"Какие сказки положил на музыку Римский-Корсаков?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"music3-sec3",title:"Музыкальные инструменты",description:"Инструменты симфонического оркестра",topics:[{id:"music3-sec3-t1",title:"Инструменты оркестра",description:"Группы инструментов",lessons:[{id:"music3-sec3-t1-l1",title:"Группы инструментов",description:"Как звучат инструменты",theory:`<h3>🎻 Группы инструментов</h3>
                  <h4>🎹 Клавишные:</h4>
                  <ul>
                    <li>🎹 Фортепиано</li>
                    <li>🎹 Орган</li>
                  </ul>
                  <h4>🎻 Струнные:</h4>
                  <ul>
                    <li>🎻 Скрипка</li>
                    <li>🎸 Виолончель</li>
                    <li>🎵 Арфа</li>
                  </ul>
                  <h4>🎺 Духовые:</h4>
                  <ul>
                    <li>🎺 Труба</li>
                    <li>🎷 Саксофон</li>
                    <li>🎵 Флейта</li>
                  </ul>
                  <h4>🥁 Ударные:</h4>
                  <ul>
                    <li>🥁 Барабан</li>
                    <li>🔔 Тарелки</li>
                    <li>🎹 Ксилофон</li>
                  </ul>`,examples:["Послушай как звучит скрипка","Какой инструмент самый громкий?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какой жанр музыки можно танцевать?",options:["Песня","Марш","Танец","Опера"],correctAnswer:2,explanation:"Танец — это музыка, под которую хочется танцевать.",difficulty:"easy",points:10},{id:"q2",question:'Кто написал оперу "Снегурочка"?',options:["М.И. Глинка","Н.А. Римский-Корсаков","П.И. Чайковский","С.С. Прокофьев"],correctAnswer:1,explanation:'Опера "Снегурочка" была написана Н.А. Римским-Корсаковым.',difficulty:"medium",points:15}]},{id:"pe3",title:"Физическая культура",icon:(0,y.jsx)(eF,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-amber-500",description:"Гимнастика, спортивные игры, упражнения",sections:[{id:"pe3-sec1",title:"Гимнастические упражнения",description:"Основы гимнастики",topics:[{id:"pe3-sec1-t1",title:"Строевые упражнения",description:"Построения и перестроения",lessons:[{id:"pe3-sec1-t1-l1",title:"Команды и построения",description:"Строевые команды",theory:`<h3>🏃 Строевые упражнения</h3>
                  <h4>Основные команды:</h4>
                  <ul>
                    <li><strong>"Становись!"</strong> — встать в строй</li>
                    <li><strong>"Равняйсь!"</strong> — выровняться</li>
                    <li><strong>"Смирно!"</strong> — стоять прямо</li>
                    <li><strong>"Вольно!"</strong> — можно расслабиться</li>
                    <li><strong>"На первый-второй рассчитайся!"</strong></li>
                    <li><strong>"Направо!", "Налево!", "Кругом!"</strong></li>
                  </ul>
                  <h4>💡 Правила:</h4>
                  <ul>
                    <li>✅ Выполнять команды чётко</li>
                    <li>✅ Держать ровный строй</li>
                    <li>✅ Слушать учителя</li>
                  </ul>`,examples:['Выполни команду "Направо!"','Как нужно стоять по команде "Смирно!"?'],completed:!1,difficulty:"easy",estimatedTime:15}]},{id:"pe3-sec1-t2",title:"Акробатические упражнения",description:"Кувырки и стойки",lessons:[{id:"pe3-sec1-t2-l1",title:"Кувырок вперёд",description:"Основной элемент",theory:`<h3>🤸 Кувырок вперёд</h3>
                  <h4>Техника выполнения:</h4>
                  <ol>
                    <li>🧎 Встань на колени</li>
                    <li>✋ Поставь руки на мат</li>
                    <li>🔵 Прижми подбородок к груди</li>
                    <li>🔙 Опирайся на лопатки</li>
                    <li>🦵 Перекатись и встань</li>
                  </ol>
                  <h4>⚠️ Правила безопасности:</h4>
                  <ul>
                    <li>❌ Не выпрямляй шею!</li>
                    <li>✅ Группируйся плотно</li>
                    <li>✅ Делай на мягком мате</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>Сначала учись на мягком мате с помощью учителя!</p>`,examples:["Покажи группировку сидя","Почему нужно прижимать подбородок к груди?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"pe3-sec2",title:"Спортивные игры",description:"Основы командных игр",topics:[{id:"pe3-sec2-t1",title:"Футбол",description:"Основы игры с мячом",lessons:[{id:"pe3-sec2-t1-l1",title:"Основы футбола",description:"Правила и техника",theory:`<h3>⚽ Футбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>👥 11 игроков в команде</li>
                    <li>🚫 Нельзя трогать мяч руками (кроме вратаря)</li>
                    <li>🎯 Забить гол в ворота противника</li>
                    <li>⏱️ Игра длится 2 тайма по 45 минут</li>
                  </ul>
                  <h4>Основные приёмы:</h4>
                  <ul>
                    <li>🦵 Ведение мяча ногой</li>
                    <li>👟 Передача партнёру</li>
                    <li>⚽ Удар по воротам</li>
                    <li>🧤 Вратарь ловит мяч</li>
                  </ul>
                  <h4>💡 Футбольные позиции:</h4>
                  <ul>
                    <li>🧤 Вратарь</li>
                    <li>🛡️ Защитник</li>
                    <li>🏃 Полузащитник</li>
                    <li>⚔️ Нападающий</li>
                  </ul>`,examples:["Попробуй вести мяч ногой","Какая позиция защищает ворота?"],completed:!1,difficulty:"easy",estimatedTime:25}]},{id:"pe3-sec2-t2",title:"Баскетбол",description:"Игра с корзиной",lessons:[{id:"pe3-sec2-t2-l1",title:"Основы баскетбола",description:"Правила и техника",theory:`<h3>🏀 Баскетбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>👥 5 игроков в команде</li>
                    <li>🏀 Забросить мяч в корзину противника</li>
                    <li>🚫 Нельзя бежать с мячом (нужно вести)</li>
                    <li>⏱️ 4 четверти по 10 минут</li>
                  </ul>
                  <h4>Основные приёмы:</h4>
                  <ul>
                    <li>🤲 Ведение мяча (дриблинг)</li>
                    <li>📤 Передача мяча</li>
                    <li>🎯 Бросок в корзину</li>
                    <li>🛡️ Защита своего кольца</li>
                  </ul>
                  <h4>💡 Баскетбольные позиции:</h4>
                  <ul>
                    <li>📏 Центровой — самый высокий</li>
                    <li>⚔️ Нападающий</li>
                    <li>🎯 Разыгрывающий</li>
                  </ul>`,examples:["Попробуй вести баскетбольный мяч","Сколько игроков в команде?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]},{id:"pe3-sec3",title:"Развитие физических качеств",description:"Сила, выносливость, ловкость",topics:[{id:"pe3-sec3-t1",title:"Развитие выносливости",description:"Бег и упражнения",lessons:[{id:"pe3-sec3-t1-l1",title:"Бег на выносливость",description:"Как бегать долго",theory:`<h3>🏃 Выносливость</h3>
                  <p>Выносливость — способность долго выполнять упражнения.</p>
                  <h4>Как развивать:</h4>
                  <ul>
                    <li>🏃 Медленный бег</li>
                    <li>⏱️ Начинай с 5-10 минут</li>
                    <li>📈 Постепенно увеличивай время</li>
                  </ul>
                  <h4>Правила бега:</h4>
                  <ul>
                    <li>👃 Дыши носом и ртом</li>
                    <li>🦵 Ставь ногу на носок</li>
                    <li>💪 Руки согнуты в локтях</li>
                    <li>👀 Смотри вперёд</li>
                  </ul>
                  <h4>💡 Нормативы для 3 класса:</h4>
                  <ul>
                    <li>🏃 Бег 1000 м — без времени</li>
                    <li>🏃 Бег 30 м — 6-7 секунд</li>
                  </ul>`,examples:["Пробеги в медленном темпе 5 минут","Как правильно дышать при беге?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Сколько игроков в футбольной команде?",options:["5","7","11","6"],correctAnswer:2,explanation:"В футбольной команде на поле 11 игроков.",difficulty:"easy",points:10},{id:"q2",question:"Что нельзя делать в футболе?",options:["Бегать","Трогать мяч руками","Передавать мяч","Бить по воротам"],correctAnswer:1,explanation:"В футболе нельзя трогать мяч руками (кроме вратаря).",difficulty:"easy",points:10}]},{id:"tech3",title:"Технология",icon:(0,y.jsx)(eU,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Конструирование, рукоделие, моделирование",sections:[{id:"tech3-sec1",title:"Работа с бумагой",description:"Конструирование из бумаги",topics:[{id:"tech3-sec1-t1",title:"Оригами",description:"Складывание фигурок",lessons:[{id:"tech3-sec1-t1-l1",title:"Базовые формы оригами",description:"Основные складки",theory:`<h3>📄 Оригами</h3>
                  <p>Оригами — искусство складывания фигурок из бумаги.</p>
                  <h4>Базовые приёмы:</h4>
                  <ul>
                    <li>📐 Сгиб "долиной" — бумага сгибается вниз</li>
                    <li>🏔️ Сгиб "горой" — бумага сгибается вверх</li>
                    <li>➡️ Сгиб по диагонали</li>
                    <li>↔️ Сгиб пополам</li>
                  </ul>
                  <h4>💡 Простые фигурки:</h4>
                  <ul>
                    <li>🦢 Лебедь</li>
                    <li>✈️ Самолёт</li>
                    <li>🐸 Лягушка</li>
                    <li>⛵ Кораблик</li>
                  </ul>
                  <h4>⚠️ Правила:</h4>
                  <ul>
                    <li>✅ Сгибай чётко по линии</li>
                    <li>✅ Используй квадратный лист</li>
                    <li>✅ Проглаживай сгибы</li>
                  </ul>`,examples:["Сделай простого бумажного самолёта","Попробуй сложить лебедя"],completed:!1,difficulty:"easy",estimatedTime:25},{id:"tech3-sec1-t1-l2",title:"Объёмные поделки",description:"Аппликации и конструкции",theory:`<h3>🎨 Объёмные поделки из бумаги</h3>
                  <h4>Материалы:</h4>
                  <ul>
                    <li>📄 Цветная бумага</li>
                    <li>📦 Картон</li>
                    <li>✂️ Ножницы</li>
                    <li>🧴 Клей</li>
                  </ul>
                  <h4>Приёмы:</h4>
                  <ul>
                    <li>🔵 Склеивание полосок (цилиндры)</li>
                    <li>📐 Складывание гармошкой</li>
                    <li>✂️ Вырезание по контуру</li>
                    <li>🎭 Создание объёма</li>
                  </ul>
                  <h4>💡 Идеи поделок:</h4>
                  <ul>
                    <li>🎄 Новогодняя ёлочка</li>
                    <li>🌸 Объёмные цветы</li>
                    <li>🏠 Домик из бумаги</li>
                  </ul>`,examples:["Сделай объёмный цветок из бумаги","Как сделать цилиндр из бумаги?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"tech3-sec2",title:"Работа с тканью",description:"Основы рукоделия",topics:[{id:"tech3-sec2-t1",title:"Простые швы",description:"Шитьё для начинающих",lessons:[{id:"tech3-sec2-t1-l1",title:"Швейные принадлежности",description:"Инструменты для шитья",theory:`<h3>🧵 Инструменты для шитья</h3>
                  <h4>Основные инструменты:</h4>
                  <ul>
                    <li>🪡 Игла — для прокалывания ткани</li>
                    <li>🧶 Нитки — для сшивания</li>
                    <li>✂️ Ножницы — для резки ткани</li>
                    <li>📏 Сантиметровая лента</li>
                    <li>📍 Булавки — для закрепления</li>
                  </ul>
                  <h4>⚠️ Правила безопасности:</h4>
                  <ul>
                    <li>✅ Иглу храни в игольнице</li>
                    <li>✅ Ножницы передавай кольцами вперёд</li>
                    <li>❌ Не бери иглу в рот</li>
                    <li>✅ Работай аккуратно</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>Всегда держи рабочее место в порядке!</p>`,examples:["Покажи игольницу","Как правильно передавать ножницы?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"tech3-sec2-t1-l2",title:'Шов "вперёд иголку"',description:"Простой шов",theory:`<h3>🪡 Шов "вперёд иголку"</h3>
                  <p>Самый простой шов для начинающих.</p>
                  <h4>Техника выполнения:</h4>
                  <ol>
                    <li>🧵 Вдень нитку в иглу</li>
                    <li>📐 Сделай узелок на конце</li>
                    <li>👆 Проколи ткань с лицевой стороны</li>
                    <li>👇 Вытащи иглу с обратной стороны</li>
                    <li>📏 Оставь промежуток (0.5 см)</li>
                    <li>🔄 Повторяй</li>
                  </ol>
                  <h4>💡 Где используется:</h4>
                  <ul>
                    <li>🧸 Сшивание игрушек</li>
                    <li>🧥 Временное смётывание</li>
                    <li>🎨 Декоративные швы</li>
                  </ul>`,examples:['Выполни шов "вперёд иголку" на образце',"Какой длины стежки должны быть?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"tech3-sec3",title:"Конструирование",description:"Создание моделей",topics:[{id:"tech3-sec3-t1",title:"Моделирование",description:"Создание моделей",lessons:[{id:"tech3-sec3-t1-l1",title:"Модель из природных материалов",description:"Шишки, листья, желуди",theory:`<h3>🌲 Природные материалы</h3>
                  <h4>Что можно использовать:</h4>
                  <ul>
                    <li>🌰 Шишки</li>
                    <li>🍂 Листья</li>
                    <li>🥜 Жёлуди</li>
                    <li>🌿 Веточки</li>
                    <li>🪨 Камешки</li>
                    <li>🌾 Солома</li>
                  </ul>
                  <h4>💡 Идеи поделок:</h4>
                  <ul>
                    <li>🦔 Ёжик из шишки</li>
                    <li>🦉 Сова из шишки и желудей</li>
                    <li>🐛 Гусеница из жёлудей</li>
                    <li>🦊 Звери из листьев</li>
                  </ul>
                  <h4>Инструменты:</h4>
                  <ul>
                    <li>🧴 Клей</li>
                    <li>🎨 Пластилин</li>
                    <li>✂️ Ножницы</li>
                  </ul>`,examples:["Сделай ёжика из шишки","Какие природные материалы можно найти в парке?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Какой сгиб делается вниз?",options:['Сгиб "горой"','Сгиб "долиной"',"Диагональный","Поперечный"],correctAnswer:1,explanation:'Сгиб "долиной" — бумага сгибается вниз.',difficulty:"easy",points:10},{id:"q2",question:"Где хранить иглу?",options:["На столе","В кармане","В игольнице","В руке"],correctAnswer:2,explanation:"Иглу нужно хранить в игольнице для безопасности.",difficulty:"easy",points:10}]},{id:"safety3",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-green-500",description:"Правила безопасности, первая помощь",sections:[{id:"safety3-sec1",title:"Правила дорожного движения",description:"Безопасность на дороге",topics:[{id:"safety3-sec1-t1",title:"Переход улицы",description:"Правила пешехода",lessons:[{id:"safety3-sec1-t1-l1",title:"Светофор и пешеходный переход",description:"Как переходить дорогу",theory:`<h3>🚦 Светофор</h3>
                  <h4>Сигналы светофора:</h4>
                  <ul>
                    <li>🔴 Красный — СТОЙ! Идти нельзя!</li>
                    <li>🟡 Жёлтый — ВНИМАНИЕ! Приготовься!</li>
                    <li>🟢 Зелёный — ИДИ! Можно переходить!</li>
                  </ul>
                  <h3>🚶 Пешеходный переход</h3>
                  <h4>Правила перехода:</h4>
                  <ol>
                    <li>👀 Посмотри налево</li>
                    <li>👀 Посмотри направо</li>
                    <li>🚶 Переходи спокойно</li>
                    <li>📱 Не смотри в телефон!</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>Переходи только по "зебре"</li>
                    <li>Не перебегай дорогу!</li>
                    <li>Не играй на проезжей части</li>
                  </ul>`,examples:["Расскажи правила перехода улицы","Что означает красный сигнал светофора?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"safety3-sec1-t1-l2",title:"Дорожные знаки",description:"Знаки для пешеходов",theory:`<h3>🪧 Дорожные знаки</h3>
                  <h4>Знаки для пешеходов:</h4>
                  <ul>
                    <li>🚶 "Пешеходный переход" — синий квадрат с человеком</li>
                    <li>🚫 "Движение пешеходов запрещено" — красный круг</li>
                    <li>🚌 "Место остановки автобуса"</li>
                    <li>🚸 "Дети" — предупреждающий знак</li>
                  </ul>
                  <h4>💡 Запомни:</h4>
                  <ul>
                    <li>🔵 Синие знаки — разрешают или указывают</li>
                    <li>🔴 Красные знаки — запрещают</li>
                    <li>🟡 Жёлтые знаки — предупреждают</li>
                  </ul>
                  <h4>⚠️ Безопасность:</h4>
                  <p>Всегда смотри на знаки и соблюдай правила!</p>`,examples:['Найди знак "Пешеходный переход"',"Какой знак запрещает идти пешеходу?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"safety3-sec2",title:"Безопасность в интернете",description:"Правила цифровой безопасности",topics:[{id:"safety3-sec2-t1",title:"Безопасность онлайн",description:"Защита личной информации",lessons:[{id:"safety3-sec2-t1-l1",title:"Правила интернета",description:"Как быть безопасным онлайн",theory:`<h3>💻 Безопасность в интернете</h3>
                  <h4>⚠️ Опасности интернета:</h4>
                  <ul>
                    <li>🎭 Незнакомцы могут притворяться детьми</li>
                    <li>📧 Вредоносные ссылки</li>
                    <li>🎮 Мошенничество в играх</li>
                  </ul>
                  <h4>✅ Правила безопасности:</h4>
                  <ol>
                    <li>🤐 Не рассказывай незнакомцам где живёшь</li>
                    <li>👤 Не давай пароль никому</li>
                    <li>📸 Не отправляй свои фото незнакомцам</li>
                    <li>🔗 Не открывай подозрительные ссылки</li>
                    <li>👨‍👩‍👧 Расскажи родителям о проблемах</li>
                  </ol>
                  <h4>💡 Совет:</h4>
                  <p>Если кто-то пугает или просит секрет — расскажи родителям!</p>`,examples:["Почему нельзя давать пароль другим?","Что делать если незнакомец пишет в интернете?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"safety3-sec3",title:"Первая помощь",description:"Помощь при травмах",topics:[{id:"safety3-sec3-t1",title:"Мелкие травмы",description:"Порезы, ссадины, ушибы",lessons:[{id:"safety3-sec3-t1-l1",title:"Первая помощь при порезах",description:"Как обработать рану",theory:`<h3>🩹 Первая помощь при порезах</h3>
                  <h4>Что делать при порезе:</h4>
                  <ol>
                    <li>🧼 Промой рану чистой водой</li>
                    <li>🧪 Обработай перекисью водорода</li>
                    <li>🩹 Налей пластырь или бинт</li>
                    <li>👨‍⚕️ Если рана большая — обратись к врачу</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>❌ Не трогай рану грязными руками</li>
                    <li>❌ Не сдирай корочку</li>
                    <li>✅ Держи рану чистой</li>
                  </ul>
                  <h4>💊 Аптечка:</h4>
                  <ul>
                    <li>🧪 Перекись водорода</li>
                    <li>💚 Зелёнка</li>
                    <li>🩹 Пластыри</li>
                    <li>🎀 Бинт</li>
                  </ul>`,examples:["Расскажи порядок действий при порезе","Что должно быть в домашней аптечке?"],completed:!1,difficulty:"medium",estimatedTime:20},{id:"safety3-sec3-t1-l2",title:"Ушибы и синяки",description:"Как помочь при ушибе",theory:`<h3>🤕 Ушибы и синяки</h3>
                  <h4>Что такое ушиб:</h4>
                  <p>Ушиб — повреждение тканей без ранки.</p>
                  <h4>Что делать при ушибе:</h4>
                  <ol>
                    <li>🧊 Приложи холод (лёд в полотенце)</li>
                    <li>⏰ Держи 10-15 минут</li>
                    <li>🛋️ Дай покой повреждённому месту</li>
                    <li>👨‍⚕️ Если болит сильно — к врачу</li>
                  </ol>
                  <h4>⚠️ Важно:</h4>
                  <ul>
                    <li>❌ Не грей ушиб в первый день!</li>
                    <li>❌ Не дави на синяк</li>
                    <li>✅ На следующий день — тёплый компресс</li>
                  </ul>
                  <h4>💡 Совет:</h4>
                  <p>При ударе головы обратись к врачу!</p>`,examples:["Что приложить к ушибу?","Почему нельзя греть ушиб в первый день?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Что означает зелёный сигнал светофора?",options:["Стой","Внимание","Можно переходить","Беги"],correctAnswer:2,explanation:"Зелёный сигнал светофора означает, что можно переходить дорогу.",difficulty:"easy",points:10},{id:"q2",question:"Что нужно сделать в первую очередь при порезе?",options:["Наложить повязку","Промыть водой","Позвать маму","Приложить лёд"],correctAnswer:1,explanation:"Сначала нужно промыть рану чистой водой, затем обработать и наложить повязку.",difficulty:"medium",points:15}]},{id:"informatics3",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Файлы, папки, безопасность",sections:[{id:"info3-sec1",title:"Файлы и папки",description:"Работа с файлами",topics:[{id:"info3-sec1-t1",title:"Что такое файл?",description:"Файлы и их типы",lessons:[{id:"info3-sec1-t1-l1",title:"Файлы",description:"Хранение информации",theory:`<h3>📄 Файл</h3>
                  <p>Файл — это информация, хранящаяся в памяти компьютера под одним именем.</p>
                  <h4>Типы файлов:</h4>
                  <ul>
                    <li>📝 <strong>Текстовые</strong> — .txt, .doc (документы)</li>
                    <li>🖼️ <strong>Графические</strong> — .jpg, .png (картинки)</li>
                    <li>🎵 <strong>Звуковые</strong> — .mp3, .wav (музыка)</li>
                    <li>🎬 <strong>Видео</strong> — .mp4, .avi (видео)</li>
                  </ul>
                  <h4>Имя файла:</h4>
                  <p>Имя + расширение: документ.txt</p>`,examples:["Определи тип файла: image.jpg","Какое расширение у текстовых файлов?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"info3-sec1-t1-l2",title:"Папки",description:"Организация файлов",theory:`<h3>📁 Папки</h3>
                  <p>Папка — контейнер для хранения файлов и других папок.</p>
                  <h4>Действия с папками:</h4>
                  <ul>
                    <li>📂 <strong>Открыть</strong> — двойной клик</li>
                    <li>➕ <strong>Создать</strong> — правый клик → Создать → Папку</li>
                    <li>✏️ <strong>Переименовать</strong> — правый клик → Переименовать</li>
                    <li>🗑️ <strong>Удалить</strong> — клавиша Delete</li>
                  </ul>
                  <h4>Иерархия:</h4>
                  <p>Папки могут находиться внутри других папок!</p>`,examples:['Создай папку "Мои документы"',"Переименуй папку"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"info3-sec2",title:"Безопасность в интернете",description:"Правила работы в сети",topics:[{id:"info3-sec2-t1",title:"Интернет",description:"Мир интернета",lessons:[{id:"info3-sec2-t1-l1",title:"Безопасность в интернете",description:"Правила поведения в сети",theory:`<h3>🌐 Интернет</h3>
                  <p>Интернет — всемирная сеть компьютеров.</p>
                  <h4>⚠️ Правила безопасности:</h4>
                  <ul>
                    <li>❌ Не сообщай пароли никому!</li>
                    <li>❌ Не встречайся с незнакомцами из интернета</li>
                    <li>❌ Не открывай подозрительные ссылки</li>
                    <li>❌ Не загружай файлы без проверки</li>
                    <li>✅ Расскажи взрослым о проблемах</li>
                  </ul>
                  <h4>Важно:</h4>
                  <p>Всё, что ты делаешь в интернете, остаётся навсегда!</p>`,examples:["Почему нельзя давать пароли?","Что делать, если пишут незнакомцы?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Какое расширение у картинок?",options:[".txt",".jpg",".mp3",".doc"],correctAnswer:1,explanation:"Расширения .jpg, .png, .gif — это графические файлы (картинки).",difficulty:"easy",points:10},{id:"q2",question:"Что такое папка?",options:["Текстовый документ","Контейнер для файлов","Программа","Игра"],correctAnswer:1,explanation:"Папка — это контейнер для хранения файлов и других папок.",difficulty:"easy",points:10},{id:"q3",question:"Что нельзя делать в интернете?",options:["Искать информацию","Сообщать пароли","Смотреть видео","Играть"],correctAnswer:1,explanation:"Никогда не сообщай пароли другим людям!",difficulty:"easy",points:10}]}]},eY=(0,ef.default)("heart-handshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]),eK={id:4,name:"4 класс",shortName:"4 кл.",subjects:[{id:"math4",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Дроби, задачи на движение, многозначные числа",sections:[{id:"math4-sec1",title:"Многозначные числа",description:"Числа больше 1000",topics:[{id:"math4-sec1-t1",title:"Нумерация",description:"Разряды и классы",lessons:[{id:"math4-sec1-t1-l1",title:"Классы чисел",description:"Единицы, тысячи, миллионы",theory:`<h3>📊 Классы чисел</h3>
                  <h4>Таблица разрядов:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px; font-size: 12px;">
Миллиарды | Миллионы | Тысячи | Единицы
СД Е      | СД Е     | СД Е   | СД Е
          |          |        | 1 2 3
                  </pre>
                  <h4>Чтение чисел:</h4>
                  <p>1 234 567 — один миллион двести тридцать четыре тысячи пятьсот шестьдесят семь</p>
                  <h4>Правило:</h4>
                  <p>В каждом классе 3 разряда: сотни, десятки, единицы</p>`,examples:["Прочитай: 5 678 901","Запиши: два миллиона триста тысяч"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"math4-sec2",title:"Дроби",description:"Доли и дробные числа",topics:[{id:"math4-sec2-t1",title:"Доли",description:"Части целого",lessons:[{id:"math4-sec2-t1-l1",title:"Что такое дробь?",description:"Числитель и знаменатель",theory:`<h3>🥧 Дроби</h3>
                  <p>Дробь — часть целого числа.</p>
                  <h4>Запись дроби:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
     3   ← числитель (сколько взяли)
    ───
     4   ← знаменатель (на сколько разделили)
                  </pre>
                  <h4>Пример:</h4>
                  <p>🍕 Пиццу разделили на 4 части, взяли 3 — это 3/4 пиццы</p>
                  <h4>Чтение:</h4>
                  <p>3/4 — "три четвёртых"</p>`,examples:["Как записать одну вторую?","Прочитай: 5/8"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"math4-sec3",title:"Задачи на движение",description:"Скорость, время, расстояние",topics:[{id:"math4-sec3-t1",title:"Формула пути",description:"S = v × t",lessons:[{id:"math4-sec3-t1-l1",title:"Скорость, время, расстояние",description:"Взаимосвязь величин",theory:`<h3>🚗 Задачи на движение</h3>
                  <h4>Основные формулы:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
S = v \xd7 t     (расстояние = скорость \xd7 время)
v = S : t     (скорость = расстояние : время)
t = S : v     (время = расстояние : скорость)
                  </pre>
                  <h4>Единицы измерения:</h4>
                  <ul>
                    <li>S (расстояние) — км, м, см</li>
                    <li>v (скорость) — км/ч, м/с</li>
                    <li>t (время) — ч, мин, с</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Автомобиль едет 60 км/ч. Какое расстояние он проедет за 3 часа?</p>
                  <p>S = 60 \xd7 3 = 180 км</p>`,examples:["Найди время, если S=120 км, v=60 км/ч","Найди скорость, если S=200 км, t=4 ч"],completed:!1,difficulty:"hard",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"Автомобиль едет со скоростью 80 км/ч. Какое расстояние он проедет за 2 часа?",options:["40 км","82 км","160 км","78 км"],correctAnswer:2,explanation:"S = v × t = 80 × 2 = 160 км",difficulty:"medium",points:15}]},{id:"russian4",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Склонения, спряжения, синтаксис",sections:[{id:"russian4-sec1",title:"Морфология",description:"Части речи",topics:[{id:"russian4-sec1-t1",title:"Склонение существительных",description:"Три склонения",lessons:[{id:"russian4-sec1-t1-l1",title:"Три склонения",description:"Распределение по типам",theory:`<h3>📝 Склонения существительных</h3>
                  <h4>1-е склонение:</h4>
                  <ul>
                    <li>Мужской род на -а, -я (дядя, папа)</li>
                    <li>Женский род на -а, -я (мама, земля)</li>
                  </ul>
                  <h4>2-е склонение:</h4>
                  <ul>
                    <li>Мужской род с нулевым окончанием (стол, конь)</li>
                    <li>Средний род на -о, -е (окно, поле)</li>
                  </ul>
                  <h4>3-е склонение:</h4>
                  <ul>
                    <li>Женский род с нулевым окончанием (ночь, мышь)</li>
                  </ul>`,examples:['Определи склонение: "книга"','Определи склонение: "стол"'],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"russian4-sec1-t2",title:"Спряжение глаголов",description:"I и II спряжение",lessons:[{id:"russian4-sec1-t2-l1",title:"Два спряжения",description:"Личные окончания",theory:`<h3>✏️ Спряжения глаголов</h3>
                  <h4>I спряжение (окончания -ешь, -ет, -ем, -ете, -ут/-ют):</h4>
                  <p>Глаголы на -еть, -ать, -оть, -ыть, -ть (кроме исключений)</p>
                  <h4>II спряжение (окончания -ишь, -ит, -им, -ите, -ат/-ят):</h4>
                  <p>Глаголы на -ить + исключения</p>
                  <h4>Исключения II спряжения:</h4>
                  <p>Гнать, дышать, держать, обидеть, слышать, видеть, ненавидеть, и зависеть, и вертеть, и смотреть, и терпеть</p>`,examples:['Определи спряжение: "читать"','Определи спряжение: "говорить"'],completed:!1,difficulty:"hard",estimatedTime:30}]}]},{id:"russian4-sec2",title:"Синтаксис",description:"Предложение и его члены",topics:[{id:"russian4-sec2-t1",title:"Члены предложения",description:"Главные и второстепенные",lessons:[{id:"russian4-sec2-t1-l1",title:"Подлежащее и сказуемое",description:"Грамматическая основа",theory:`<h3>📝 Главные члены предложения</h3>
                  <h4>Подлежащее:</h4>
                  <ul>
                    <li>Отвечает на вопросы КТО? ЧТО?</li>
                    <li>Выражается существительным или местоимением</li>
                  </ul>
                  <h4>Сказуемое:</h4>
                  <ul>
                    <li>Отвечает на вопросы ЧТО ДЕЛАЕТ? и др.</li>
                    <li>Выражается глаголом</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p><u>Мальчик</u> (подлежащее) <u>читает</u> (сказуемое) книгу.</p>`,examples:['Найди подлежащее: "Птицы летят на юг"','Найди сказуемое: "Солнце светит ярко"'],completed:!1,difficulty:"medium",estimatedTime:20}]}]}],quiz:[{id:"q1",question:'Какого склонения слово "мышь"?',options:["1-го","2-го","3-го","Не склоняется"],correctAnswer:2,explanation:'Слово "мышь" — 3-го склонения (женский род с нулевым окончанием).',difficulty:"medium",points:15}]},{id:"literature4",title:"Литературное чтение",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Былины, басни, сказки",sections:[{id:"lit4-sec1",title:"Устное народное творчество",description:"Былины, сказки",topics:[{id:"lit4-sec1-t1",title:"Былины",description:"Русские богатыри",lessons:[{id:"lit4-sec1-t1-l1",title:'Былина "Илья Муромец"',description:"Русский богатырь",theory:`<h3>⚔️ Былины</h3>
                  <p>Былина — русский народный эпос о богатырях.</p>
                  <h4>Особенности былин:</h4>
                  <ul>
                    <li>Ритмичный стих</li>
                    <li>Герои — богатыри</li>
                    <li>Подвиги во славу Руси</li>
                    <li>Вымысел + историческая основа</li>
                  </ul>
                  <h4>Илья Муромец:</h4>
                  <ul>
                    <li>Русский богатырь</li>
                    <li>Защитник Русской земли</li>
                    <li>Сидел 33 года, потом получил силу</li>
                  </ul>`,examples:["Какие подвиги совершил Илья Муромец?","Чем былина отличается от сказки?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"lit4-sec2",title:"Детская литература",description:"Произведения для детей",topics:[{id:"lit4-sec2-t1",title:"А.С. Пушкин",description:"Сказки Пушкина",lessons:[{id:"lit4-sec2-t1-l1",title:'"Сказка о золотом петушке"',description:"Анализ сказки",theory:`<h3>📖 "Сказка о золотом петушке"</h3>
                  <h4>Автор:</h4>
                  <p>Александр Сергеевич Пушкин (1799-1837)</p>
                  <h4>Герои:</h4>
                  <ul>
                    <li>Царь Дадон</li>
                    <li>Золотой петушок</li>
                    <li>Звездочёт</li>
                    <li>Шамаханская царица</li>
                  </ul>
                  <h4>Главная мысль:</h4>
                  <p>Нужно держать слово и не забывать о благодарности.</p>`,examples:["Чему учит сказка?","Почему царь Дадон погиб?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:'Кто написал "Сказку о золотом петушке"?',options:["И.А. Крылов","А.С. Пушкин","П.П. Бажов","К.И. Чуковский"],correctAnswer:1,explanation:'"Сказку о золотом петушке" написал Александр Сергеевич Пушкин.',difficulty:"easy",points:10}]},{id:"world4",title:"Окружающий мир",icon:(0,y.jsx)(eD,{className:"w-5 h-5"}),color:"text-green-400",gradient:"from-green-500 to-teal-500",description:"Природные зоны, Солнечная система",sections:[{id:"world4-sec1",title:"Природные зоны",description:"Зоны России",topics:[{id:"world4-sec1-t1",title:"Зоны России",description:"Арктика, тундра, лес, степь",lessons:[{id:"world4-sec1-t1-l1",title:"Арктика и тундра",description:"Холодные зоны",theory:`<h3>❄️ Арктика</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Северный Ледовитый океан</li>
                    <li>Полярный день и ночь</li>
                    <li>Ледяные пустыни</li>
                  </ul>
                  <h4>Животные:</h4>
                  <p>белый медведь, морж, тюлень, полярная сова</p>
                  
                  <h3>🌲 Тундра</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Вечная мерзлота</li>
                    <li>Карликовые деревья</li>
                    <li>Мхи и лишайники</li>
                  </ul>
                  <h4>Животные:</h4>
                  <p>северный олень, песец, куропатка</p>`,examples:["Какие животные живут в Арктике?","Что такое вечная мерзлота?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"world4-sec2",title:"Солнечная система",description:"Планеты и космос",topics:[{id:"world4-sec2-t1",title:"Планеты",description:"8 планет Солнечной системы",lessons:[{id:"world4-sec2-t1-l1",title:"Планеты Солнечной системы",description:"От Меркурия до Нептуна",theory:`<h3>🌌 Солнечная система</h3>
                  <h4>8 планет (по порядку от Солнца):</h4>
                  <ol>
                    <li>☿️ Меркурий — ближайшая к Солнцу</li>
                    <li>♀️ Венера — самая горячая</li>
                    <li>🌍 Земля — наш дом</li>
                    <li>♂️ Марс — красная планета</li>
                    <li>♃ Юпитер — самая большая</li>
                    <li>♄ Сатурн — с кольцами</li>
                    <li>♅ Уран</li>
                    <li>♆ Нептун — самая далёкая</li>
                  </ol>
                  <h4>Запоминалка:</h4>
                  <p>"Мы Все Знаем: Мама Юлит Сидит У Несмысляшки"</p>`,examples:["Какая планета самая большая?","Какая планета ближе к Солнцу?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Какая планета самая большая?",options:["Земля","Марс","Юпитер","Сатурн"],correctAnswer:2,explanation:"Юпитер — самая большая планета Солнечной системы.",difficulty:"easy",points:10}]},{id:"english4",title:"Английский язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Past Simple, Future Simple, модальные глаголы",sections:[{id:"english4-sec1",title:"Грамматика",description:"Времена глагола",topics:[{id:"english4-sec1-t1",title:"Past Simple",description:"Простое прошедшее время",lessons:[{id:"english4-sec1-t1-l1",title:"Правильные глаголы",description:"Окончание -ed",theory:`<h3>📖 Past Simple — правильные глаголы</h3>
                  <h4>Образование:</h4>
                  <p>Глагол + -ed</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
work → worked    (работал)
play → played    (играл)
watch → watched  (смотрел)
                  </pre>
                  <h4>Правила написания:</h4>
                  <ul>
                    <li>live → lived (e + d)</li>
                    <li>study → studied (y → i + ed)</li>
                    <li>stop → stopped (удвоение)</li>
                  </ul>`,examples:['Образуй форму: "clean"','Образуй форму: "cry"'],completed:!1,difficulty:"medium",estimatedTime:25},{id:"english4-sec1-t1-l2",title:"Неправильные глаголы",description:"Вторая форма",theory:`<h3>📝 Неправильные глаголы в Past Simple</h3>
                  <h4>Популярные неправильные глаголы:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
go → went       (ходить → ходил)
see → saw       (видеть → видел)
eat → ate       (есть → ел)
have → had      (иметь → имел)
make → made     (делать → делал)
come → came     (приходить → пришёл)
take → took     (брать → взял)
give → gave     (давать → дал)
                  </pre>
                  <h4>Запомни:</h4>
                  <p>Неправильные глаголы нужно учить наизусть!</p>`,examples:['Назови 2-ю форму: "go"','Назови 2-ю форму: "take"'],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"english4-sec1-t2",title:"Future Simple",description:"Простое будущее время",lessons:[{id:"english4-sec1-t2-l1",title:"Will + глагол",description:"Действия в будущем",theory:`<h3>🔮 Future Simple</h3>
                  <h4>Образование:</h4>
                  <p>will + глагол (без to)</p>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
I will play    — Я буду играть
You will read  — Ты будешь читать
He will run    — Он будет бегать
                  </pre>
                  <h4>Когда используем:</h4>
                  <ul>
                    <li>Предсказания: It will rain tomorrow.</li>
                    <li>Мгновенные решения: I will help you!</li>
                    <li>Обещания: I will call you.</li>
                  </ul>
                  <h4>Сокращения:</h4>
                  <p>I'll, You'll, He'll, She'll, We'll, They'll</p>`,examples:['Переведи: "Я буду читать"','Переведи: "Она поможет нам"'],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"english4-sec2",title:"Модальные глаголы",description:"Can, Must, Should",topics:[{id:"english4-sec2-t1",title:"Can, Must, Should",description:"Выражение возможности и долженствования",lessons:[{id:"english4-sec2-t1-l1",title:"Глагол Can",description:"Возможность и умение",theory:`<h3>💪 Modal verb CAN</h3>
                  <h4>Значения:</h4>
                  <ul>
                    <li>Умение: I can swim. (Я умею плавать)</li>
                    <li>Возможность: You can go. (Ты можешь идти)</li>
                    <li>Просьба: Can you help me? (Можешь помочь?)</li>
                  </ul>
                  <h4>Формы:</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
+ I can swim.
? Can you swim?
- I cannot (can't) swim.
                  </pre>
                  <h4>Важно:</h4>
                  <p>После can идёт глагол без to!</p>`,examples:['Переведи: "Я умею читать"','Составь вопрос: "ты можешь помочь?"'],completed:!1,difficulty:"easy",estimatedTime:20},{id:"english4-sec2-t1-l2",title:"Глаголы Must и Should",description:"Долженствование и совет",theory:`<h3>⚠️ Must vs Should</h3>
                  <h4>MUST — должен (обязательно):</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
You must do homework. (Ты должен делать д/з)
You mustn't run here. (Здесь нельзя бегать)
                  </pre>
                  <h4>SHOULD — следует (совет):</h4>
                  <pre style="background: linear-gradient(135deg, #1e3a5f, #2d4a6f); padding: 15px; border-radius: 12px;">
You should sleep more. (Тебе следует больше спать)
You shouldn't eat much. (Не стоит много есть)
                  </pre>
                  <h4>Разница:</h4>
                  <p>Must = обязанность, Should = рекомендация</p>`,examples:['Выбери: "You ___ go to school" (обязательно)','Переведи: "Тебе следует отдохнуть"'],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:'Какая форма Past Simple у глагола "go"?',options:["goed","gone","went","going"],correctAnswer:2,explanation:'Глагол "go" — неправильный, его вторая форма "went".',difficulty:"medium",points:15},{id:"q2",question:'Выбери правильный перевод: "I will help you"',options:["Я помог тебе","Я помогаю тебе","Я помогу тебе","Я помогал тебе"],correctAnswer:2,explanation:'Will + глагол = будущее время. "I will help" = "Я помогу".',difficulty:"easy",points:10},{id:"q3",question:"После модальных глаголов (can, must, should) идёт:",options:["глагол с to","глагол без to","глагол с -ing","только существительное"],correctAnswer:1,explanation:"После модальных глаголов всегда идёт глагол в начальной форме без to.",difficulty:"easy",points:10}]},{id:"art4",title:"Изобразительное искусство",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"История искусства, архитектура, жанры живописи",sections:[{id:"art4-sec1",title:"Жанры живописи",description:"Виды картин",topics:[{id:"art4-sec1-t1",title:"Основные жанры",description:"Портрет, пейзаж, натюрморт",lessons:[{id:"art4-sec1-t1-l1",title:"Портрет",description:"Изображение человека",theory:`<h3>👤 Портрет</h3>
                  <p>Портрет — изображение человека или группы людей.</p>
                  <h4>Виды портретов:</h4>
                  <ul>
                    <li>Парадный — важный человек в богатой одежде</li>
                    <li>Камерный — домашний, уютный</li>
                    <li>Автопортрет — художник рисует себя</li>
                    <li>Групповой — несколько людей вместе</li>
                  </ul>
                  <h4>Известные портретисты:</h4>
                  <ul>
                    <li>И.Е. Репин — "Бурлаки на Волге"</li>
                    <li>В.А. Серов — "Девочка с персиками"</li>
                    <li>Леонардо да Винчи — "Мона Лиза"</li>
                  </ul>`,examples:['Какой вид портрета "Мона Лиза"?','Кто написал "Девочку с персиками"?'],completed:!1,difficulty:"medium",estimatedTime:25},{id:"art4-sec1-t1-l2",title:"Пейзаж и натюрморт",description:"Природа и предметы",theory:`<h3>🏞️ Пейзаж</h3>
                  <p>Пейзаж — изображение природы.</p>
                  <h4>Виды пейзажей:</h4>
                  <ul>
                    <li>Сельский — деревня, поля</li>
                    <li>Городской — улицы, здания</li>
                    <li>Морской — море, корабли</li>
                  </ul>
                  <h4>Известные пейзажисты:</h4>
                  <p>И.И. Левитан, И.И. Шишкин, А.К. Саврасов</p>
                  
                  <h3>🍎 Натюрморт</h3>
                  <p>Натюрморт — изображение предметов (цветы, фрукты, посуда).</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Предметы неподвижны</li>
                    <li>Важна композиция</li>
                    <li>Игра света и тени</li>
                  </ul>`,examples:["Чем отличается пейзаж от натюрморта?","Назови русского художника-пейзажиста"],completed:!1,difficulty:"easy",estimatedTime:25}]}]},{id:"art4-sec2",title:"Архитектура",description:"Искусство строить",topics:[{id:"art4-sec2-t1",title:"Русское зодчество",description:"Храмы и соборы",lessons:[{id:"art4-sec2-t1-l1",title:"Древнерусские храмы",description:"Шедевры архитектуры",theory:`<h3>🏛️ Русское зодчество</h3>
                  <h4>Особенности русских храмов:</h4>
                  <ul>
                    <li>Луковичные купола</li>
                    <li>Крест на куполе</li>
                    <li>Яркие цвета</li>
                    <li>Украшения на стенах</li>
                  </ul>
                  <h4>Известные храмы:</h4>
                  <ul>
                    <li>🏛️ Собор Василия Блаженного (Москва) — 9 куполов</li>
                    <li>⛪ Храм Христа Спасителя (Москва)</li>
                    <li>🏰 Церковь Покрова на Нерли — белый камень</li>
                  </ul>
                  <h4>Купола:</h4>
                  <p>Золотые — символ небесного света, синие со звёздами — Богородица</p>`,examples:["Сколько куполов у собора Василия Блаженного?","Где находится церковь Покрова на Нерли?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"Как называется жанр живописи, изображающий природу?",options:["Портрет","Натюрморт","Пейзаж","Батальный"],correctAnswer:2,explanation:"Пейзаж — это жанр живописи, изображающий природные виды.",difficulty:"easy",points:10},{id:"q2",question:'Кто написал картину "Девочка с персиками"?',options:["И.И. Левитан","В.А. Серов","И.Е. Репин","И.И. Шишкин"],correctAnswer:1,explanation:'Картина "Девочка с персиками" написана Валентином Александровичем Серовым в 1887 году.',difficulty:"medium",points:15}]},{id:"music4",title:"Музыка",icon:(0,y.jsx)(eL,{className:"w-5 h-5"}),color:"text-violet-400",gradient:"from-violet-500 to-purple-500",description:"Симфонический оркестр, музыкальные жанры",sections:[{id:"music4-sec1",title:"Симфонический оркестр",description:"Инструменты и группы",topics:[{id:"music4-sec1-t1",title:"Группы инструментов",description:"Семейства оркестра",lessons:[{id:"music4-sec1-t1-l1",title:"Струнные и духовые",description:"Основные группы",theory:`<h3>🎻 Струнные инструменты</h3>
                  <h4>Инструменты:</h4>
                  <ul>
                    <li>🎻 Скрипка — королева оркестра</li>
                    <li>🎻 Альт — ниже скрипки</li>
                    <li>🎸 Виолончель — большой, играют сидя</li>
                    <li>🎺 Контрабас — самый большой</li>
                  </ul>
                  <h4>Особенности:</h4>
                  <p>Звук извлекается смычком или пальцами (пиццикато).</p>
                  
                  <h3>🎺 Духовые инструменты</h3>
                  <h4>Деревянные:</h4>
                  <p>Флейта, гобой, кларнет, фагот</p>
                  <h4>Медные:</h4>
                  <p>Труба, валторна, тромбон, туба</p>`,examples:["Какой инструмент самый большой в струнной группе?","Назови деревянный духовой инструмент"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"music4-sec1-t1-l2",title:"Ударные инструменты",description:"Ритм оркестра",theory:`<h3>🥁 Ударные инструменты</h3>
                  <h4>С определённой высотой звука:</h4>
                  <ul>
                    <li>🎹 Ксилофон — деревянные пластины</li>
                    <li>🔔 Колокольчики</li>
                    <li>🥁 Литавры — можно настраивать</li>
                  </ul>
                  <h4>Без определённой высоты:</h4>
                  <ul>
                    <li>🥁 Малый барабан</li>
                    <li>🥁 Большой барабан</li>
                    <li>🔔 Тарелки</li>
                    <li>🎭 Бубен, треугольник</li>
                  </ul>
                  <h4>Роль в оркестре:</h4>
                  <p>Создают ритм, эффекты, акценты</p>`,examples:["Какой ударный инструмент имеет определённую высоту звука?","Для чего нужны ударные в оркестре?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"music4-sec2",title:"Музыкальные жанры",description:"Опера, балет, симфония",topics:[{id:"music4-sec2-t1",title:"Опера и балет",description:"Музыкальный театр",lessons:[{id:"music4-sec2-t1-l1",title:"Опера",description:"Музыка и пение",theory:`<h3>🎭 Опера</h3>
                  <p>Опера — музыкально-драматическое произведение для театра.</p>
                  <h4>Что входит в оперу:</h4>
                  <ul>
                    <li>🎵 Ария — сольная песня героя</li>
                    <li>🗣️ Речитатив — пение-разговор</li>
                    <li>👥 Хор — коллективное пение</li>
                    <li>🎹 Оркестр — музыкальное сопровождение</li>
                  </ul>
                  <h4>Известные русские оперы:</h4>
                  <ul>
                    <li>🎼 П.И. Чайковский — "Евгений Онегин"</li>
                    <li>🎼 М.П. Мусоргский — "Борис Годунов"</li>
                    <li>🎼 Н.А. Римский-Корсаков — "Снегурочка"</li>
                  </ul>`,examples:["Что такое ария?",'Кто написал оперу "Евгений Онегин"?'],completed:!1,difficulty:"medium",estimatedTime:25},{id:"music4-sec2-t1-l2",title:"Балет",description:"Танец и музыка",theory:`<h3>🩰 Балет</h3>
                  <p>Балет — музыкальный спектакль с танцем и пантомимой.</p>
                  <h4>Особенности балета:</h4>
                  <ul>
                    <li>Классический танец</li>
                    <li>Костюмы и декорации</li>
                    <li>Сюжет (либретто)</li>
                    <li>Музыка без слов</li>
                  </ul>
                  <h4>Известные балеты П.И. Чайковского:</h4>
                  <ul>
                    <li>🦢 "Лебединое озеро"</li>
                    <li>🧚 "Спящая красавица"</li>
                    <li>🍬 "Щелкунчик"</li>
                  </ul>
                  <h4>Танцы в балете:</h4>
                  <p>Па-де-де, вариации, кордебалет</p>`,examples:["Назови балет Чайковского","Чем балет отличается от оперы?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:'Какой инструмент называют "королевой оркестра"?',options:["Флейта","Скрипка","Рояль","Труба"],correctAnswer:1,explanation:"Скрипку называют королевой оркестра за её певучий звук и ведущую роль.",difficulty:"easy",points:10},{id:"q2",question:'Кто написал балет "Щелкунчик"?',options:["М.П. Мусоргский","Н.А. Римский-Корсаков","П.И. Чайковский","С.С. Прокофьев"],correctAnswer:2,explanation:'Балет "Щелкунчик" написал Пётр Ильич Чайковский.',difficulty:"medium",points:15}]},{id:"pe4",title:"Физическая культура",icon:(0,y.jsx)(eF,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-amber-500",description:"Спортивные игры, соревнования, Олимпийские игры",sections:[{id:"pe4-sec1",title:"Спортивные игры",description:"Командные виды спорта",topics:[{id:"pe4-sec1-t1",title:"Волейбол",description:"Командная игра с мячом",lessons:[{id:"pe4-sec1-t1-l1",title:"Правила волейбола",description:"Основы игры",theory:`<h3>🏐 Волейбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>2 команды по 6 человек</li>
                    <li>Сетка высотой 2,43 м (мальчики), 2,24 м (девочки)</li>
                    <li>Мяч перебрасывается через сетку</li>
                    <li>3 касания на команду</li>
                    <li>Игра до 25 очков</li>
                  </ul>
                  <h4>Техника:</h4>
                  <ul>
                    <li>Передача двумя руками сверху</li>
                    <li>Передача снизу</li>
                    <li>Подача</li>
                    <li>Блок</li>
                  </ul>`,examples:["Сколько человек в команде?","Сколько касаний разрешено?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"pe4-sec1-t1-l2",title:"Баскетбол",description:"Игра с корзиной",theory:`<h3>🏀 Баскетбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>2 команды по 5 человек</li>
                    <li>Корзина на высоте 3,05 м</li>
                    <li>Мяч ведут руками (дриблинг)</li>
                    <li>Нельзя бежать с мячом без ударов</li>
                  </ul>
                  <h4>Очки:</h4>
                  <ul>
                    <li>Штрафной бросок — 1 очко</li>
                    <li>Бросок со средней дистанции — 2 очка</li>
                    <li>Бросок из-за дуги — 3 очка</li>
                  </ul>
                  <h4>Техника:</h4>
                  <p>Ведение, передача, бросок, защита</p>`,examples:["Сколько игроков на площадке?","Какова высота корзины?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"pe4-sec1-t2",title:"Футбол",description:"Самый популярный вид спорта",lessons:[{id:"pe4-sec1-t2-l1",title:"Правила футбола",description:"Основы игры",theory:`<h3>⚽ Футбол</h3>
                  <h4>Основные правила:</h4>
                  <ul>
                    <li>2 команды по 11 человек</li>
                    <li>Поле 90-120 м \xd7 45-90 м</li>
                    <li>Ворота 7,32 м \xd7 2,44 м</li>
                    <li>Игра ногами, вратарь руками</li>
                    <li>2 тайма по 45 минут</li>
                  </ul>
                  <h4>Позиции:</h4>
                  <ul>
                    <li>🧤 Вратарь — защищает ворота</li>
                    <li>🛡️ Защитники — защита</li>
                    <li>⚙️ Полузащитники — связь</li>
                    <li>⚔️ Нападающие — атака</li>
                  </ul>`,examples:["Сколько игроков в футбольной команде?","Кто может играть руками?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"pe4-sec2",title:"Олимпийские игры",description:"История и традиции",topics:[{id:"pe4-sec2-t1",title:"История Олимпиад",description:"От Древней Греции до наших дней",lessons:[{id:"pe4-sec2-t1-l1",title:"Древние Олимпийские игры",description:"Рождение традиций",theory:`<h3>🏛️ Древние Олимпийские игры</h3>
                  <h4>История:</h4>
                  <ul>
                    <li>Начались в 776 г. до н.э. в Греции</li>
                    <li>Проводились в городе Олимпия</li>
                    <li>Проходили каждые 4 года</li>
                    <li>Длились 5 дней</li>
                  </ul>
                  <h4>Виды состязаний:</h4>
                  <ul>
                    <li>🏃 Бег</li>
                    <li>🤼 Борьба</li>
                    <li>🏇 Гонки на колесницах</li>
                    <li>🛡️ Пятиборье</li>
                  </ul>
                  <h4>Традиции:</h4>
                  <p>Олимпийский огонь, оливковый венок, священное перемирие</p>`,examples:["Где проходили древние Олимпиады?","Что получал победитель?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"pe4-sec2-t1-l2",title:"Современные Олимпиады",description:"Олимпийское движение",theory:`<h3>🏅 Современные Олимпийские игры</h3>
                  <h4>Возрождение:</h4>
                  <ul>
                    <li>1896 г. — первые современные Олимпиады</li>
                    <li>Пьер де Кубертен — основатель</li>
                    <li>Афины — место первой Олимпиады</li>
                  </ul>
                  <h4>Символы:</h4>
                  <ul>
                    <li>🔥 Олимпийский огонь</li>
                    <li>⭕ 5 колец — 5 континентов</li>
                    <li>🕊️ Белый голубь — мир</li>
                    <li>🥇🥈🥉 Медали</li>
                  </ul>
                  <h4>Олимпийский девиз:</h4>
                  <p>"Быстрее, выше, сильнее — вместе!"</p>`,examples:["Кто возродил Олимпийские игры?","Что означают 5 колец?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Сколько игроков в команде в баскетболе?",options:["6","5","11","7"],correctAnswer:1,explanation:"В баскетбольной команде на площадке 5 игроков.",difficulty:"easy",points:10},{id:"q2",question:"В каком году возродились современные Олимпийские игры?",options:["1776","1896","1900","1912"],correctAnswer:1,explanation:"Современные Олимпийские игры возродились в 1896 году в Афинах.",difficulty:"medium",points:15}]},{id:"tech4",title:"Технология",icon:(0,y.jsx)(eU,{className:"w-5 h-5"}),color:"text-amber-600",gradient:"from-amber-600 to-yellow-500",description:"Обработка материалов, конструирование",sections:[{id:"tech4-sec1",title:"Обработка материалов",description:"Работа с бумагой, деревом",topics:[{id:"tech4-sec1-t1",title:"Работа с бумагой",description:"Техники и приёмы",lessons:[{id:"tech4-sec1-t1-l1",title:"Оригами",description:"Искусство складывания",theory:`<h3>📄 Оригами</h3>
                  <p>Оригами — японское искусство складывания фигурок из бумаги.</p>
                  <h4>Базовые формы:</h4>
                  <ul>
                    <li>📐 Квадрат</li>
                    <li>📐 Треугольник</li>
                    <li>📐 Бумажный самолёт</li>
                    <li>🐸 Прыгающая лягушка</li>
                  </ul>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Используй квадратный лист</li>
                    <li>Складывай чётко по линиям</li>
                    <li>Не используй клей и ножницы</li>
                  </ul>
                  <h4>Уровни сложности:</h4>
                  <p>Простой → Средний → Сложный → Мастер</p>`,examples:["Какая базовая форма самая простая?","Можно ли использовать клей в оригами?"],completed:!1,difficulty:"easy",estimatedTime:30},{id:"tech4-sec1-t1-l2",title:"Аппликация",description:"Вырезание и наклеивание",theory:`<h3>✂️ Аппликация</h3>
                  <p>Аппликация — создание изображений из наклеенных кусочков.</p>
                  <h4>Виды аппликации:</h4>
                  <ul>
                    <li>🎨 Плоская — из плоских деталей</li>
                    <li>🎭 Объёмная — с элементами выступающими</li>
                    <li>🧩 Мозаичная — из мелких кусочков</li>
                    <li>✂️ Симметричная — из сложенной бумаги</li>
                  </ul>
                  <h4>Материалы:</h4>
                  <p>Цветная бумага, картон, клей, ножницы</p>
                  <h4>Техника безопасности:</h4>
                  <p>Ножницы передавать закрытыми, не держать остриём вверх!</p>`,examples:["Какие виды аппликации ты знаешь?","Как правильно передавать ножницы?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]},{id:"tech4-sec2",title:"Конструирование",description:"Создание моделей",topics:[{id:"tech4-sec2-t1",title:"Работа с конструктором",description:"Сборка моделей",lessons:[{id:"tech4-sec2-t1-l1",title:"Виды конструкторов",description:"От LEGO до металлического",theory:`<h3>🔧 Конструкторы</h3>
                  <h4>Виды конструкторов:</h4>
                  <ul>
                    <li>🧱 Пластиковый (LEGO) — универсальный</li>
                    <li>⚙️ Металлический — механизмы</li>
                    <li>🪵 Деревянный — природный материал</li>
                    <li>📎 Бумажный — модели техники</li>
                  </ul>
                  <h4>Основные детали:</h4>
                  <ul>
                    <li>🧱 Блоки, пластины</li>
                    <li>⚙️ Колёса, оси</li>
                    <li>🔩 Винты, гайки (металлический)</li>
                    <li>🔌 Соединительные элементы</li>
                  </ul>
                  <h4>Этапы работы:</h4>
                  <p>Изучи инструкцию → Отсортируй детали → Собери по шагам</p>`,examples:["Какие виды конструкторов ты знаешь?","С чего начинается сборка модели?"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"tech4-sec2-t2",title:"Простые механизмы",description:"Рычаг, блок, ворот",lessons:[{id:"tech4-sec2-t2-l1",title:"Рычаг и его применение",description:"Простые механизмы вокруг нас",theory:`<h3>⚖️ Рычаг</h3>
                  <p>Рычаг — твёрдое тело, вращающееся вокруг точки опоры.</p>
                  <h4>Составные части:</h4>
                  <ul>
                    <li>📍 Точка опоры</li>
                    <li>💪 Точка приложения силы</li>
                    <li>📦 Точка нагрузки</li>
                  </ul>
                  <h4>Примеры рычагов:</h4>
                  <ul>
                    <li>⚖️ Качели</li>
                    <li>🔨 Ножницы</li>
                    <li>🥄 Ложка</li>
                    <li>🚪 Дверь</li>
                    <li>🎣 Весло</li>
                  </ul>
                  <h4>Правило рычага:</h4>
                  <p>Рычаг в равновесии, когда сила \xd7 плечо равны с обеих сторон</p>`,examples:["Приведи пример рычага","Из чего состоит рычаг?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Что такое оригами?",options:["Вид вышивки","Искусство складывания из бумаги","Вид рисования","Техника вырезания"],correctAnswer:1,explanation:"Оригами — японское искусство складывания фигурок из бумаги без клея и ножниц.",difficulty:"easy",points:10},{id:"q2",question:"Какое из перечисленных является примером рычага?",options:["Колесо","Ножницы","Шар","Кубик"],correctAnswer:1,explanation:"Ножницы — это рычаг, состоящий из двух плечей и точки опоры (винт).",difficulty:"medium",points:15}]},{id:"ethics4",title:"ОРКСЭ",icon:(0,y.jsx)(eY,{className:"w-5 h-5"}),color:"text-rose-500",gradient:"from-rose-500 to-red-500",description:"Основы религиозных культур и светской этики",sections:[{id:"ethics4-sec1",title:"Основы мировых религий",description:"Культурные традиции народов",topics:[{id:"ethics4-sec1-t1",title:"Мировые религии",description:"Христианство, ислам, буддизм, иудаизм",lessons:[{id:"ethics4-sec1-t1-l1",title:"Христианство",description:"Православная культура России",theory:`<h3>✝️ Христианство</h3>
                  <p>Христианство — одна из мировых религий, основанная на учении Иисуса Христа.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li>⛪ Храм — место молитвы</li>
                    <li>🙏 Икона — священное изображение</li>
                    <li>🕯️ Свеча — символ молитвы</li>
                    <li>✝️ Крест — главный символ</li>
                  </ul>
                  <h4>Православные праздники:</h4>
                  <ul>
                    <li>🎄 Рождество — рождение Иисуса (7 января)</li>
                    <li>🐣 Пасха — воскресение Христа</li>
                    <li>⛪ Крещение</li>
                  </ul>
                  <h4>Главные ценности:</h4>
                  <p>Любовь, милосердие, прощение, помощь ближнему</p>`,examples:["Назови главный символ христианства","Какой христианский праздник 7 января?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"ethics4-sec1-t1-l2",title:"Ислам и буддизм",description:"Культурные традиции",theory:`<h3>☪️ Ислам</h3>
                  <p>Ислам — религия, основанная на учении пророка Мухаммеда.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li>🕌 Мечеть — место молитвы</li>
                    <li>📖 Коран — священная книга</li>
                    <li>🕋 Мекка — священный город</li>
                  </ul>
                  
                  <h3>☸️ Буддизм</h3>
                  <p>Буддизм — одна из древнейших мировых религий.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li>🏛️ Ступа — священное сооружение</li>
                    <li>🧘 Медитация — духовная практика</li>
                    <li>☸️ Дхармачакра — колесо закона</li>
                  </ul>
                  <h4>Ценности буддизма:</h4>
                  <p>Ненасилие, сострадание, гармония с природой</p>`,examples:["Как называется священная книга ислама?","Что такое медитация?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"ethics4-sec2",title:"Нравственные ценности",description:"Мораль и этика",topics:[{id:"ethics4-sec2-t1",title:"Добродетели",description:"Что такое хорошо и плохо",lessons:[{id:"ethics4-sec2-t1-l1",title:"Добро и зло",description:"Нравственный выбор",theory:`<h3>💫 Добро и зло</h3>
                  <h4>Добро — это:</h4>
                  <ul>
                    <li>❤️ Помощь другим</li>
                    <li>🤝 Честность</li>
                    <li>😊 Добрые поступки</li>
                    <li>💪 Справедливость</li>
                  </ul>
                  <h4>Зло — это:</h4>
                  <ul>
                    <li>💔 Причинение вреда</li>
                    <li>🤥 Обман</li>
                    <li>😠 Жестокость</li>
                    <li>👎 Предательство</li>
                  </ul>
                  <h4>Нравственный выбор:</h4>
                  <p>Каждый человек выбирает между добром и злом. Важно поступать по совести!</p>`,examples:["Приведи пример доброго поступка",'Что значит "поступить по совести"?'],completed:!1,difficulty:"easy",estimatedTime:20},{id:"ethics4-sec2-t1-l2",title:"Золотое правило нравственности",description:"Относись к другим так, как хочешь, чтобы относились к тебе",theory:`<h3>⭐ Золотое правило нравственности</h3>
                  <h4>Правило:</h4>
                  <p><em>"Относись к другим так, как ты хотел бы, чтобы относились к тебе"</em></p>
                  <h4>Что это значит:</h4>
                  <ul>
                    <li>Не делай другим того, что не хочешь себе</li>
                    <li>Помогай, если хочешь, чтобы помогали тебе</li>
                    <li>Будь честен, если хочешь честности</li>
                    <li>Уважай других, если хочешь уважения</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>Не обзывай — и тебя не обидят</li>
                    <li>Помоги другу — и он поможет тебе</li>
                    <li>Будь вежлив — и к тебе будут вежливы</li>
                  </ul>`,examples:["Сформулируй золотое правило","Приведи пример применения правила"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"ethics4-sec2-t2",title:"Семейные ценности",description:"Традиции и отношения",lessons:[{id:"ethics4-sec2-t2-l1",title:"Семья и её ценности",description:"Любовь, уважение, забота",theory:`<h3>👨‍👩‍👧‍👦 Семейные ценности</h3>
                  <h4>Что такое семья:</h4>
                  <p>Семья — это люди, связанные любовью, заботой и родством.</p>
                  <h4>Ценности семьи:</h4>
                  <ul>
                    <li>❤️ Любовь</li>
                    <li>🤝 Уважение</li>
                    <li>💪 Поддержка</li>
                    <li>🏠 Забота о доме</li>
                    <li>📚 Традиции</li>
                  </ul>
                  <h4>Роль каждого в семье:</h4>
                  <ul>
                    <li>👨‍👩‍👧 Родители — забота, воспитание</li>
                    <li>👦👧 Дети — уважение, помощь</li>
                    <li>👴👵 Бабушка и дедушка — мудрость, опыт</li>
                  </ul>
                  <h4>Семейные традиции:</h4>
                  <p>Совместные праздники, обеды, прогулки, чтение</p>`,examples:["Назови семейные ценности","Как ты можешь помочь семье?"],completed:!1,difficulty:"easy",estimatedTime:25}]}]}],quiz:[{id:"q1",question:"Как называется священная книга ислама?",options:["Библия","Коран","Тора","Веды"],correctAnswer:1,explanation:"Коран — священная книга ислама, содержащая откровения пророка Мухаммеда.",difficulty:"medium",points:15},{id:"q2",question:"В чём суть золотого правила нравственности?",options:["Делай что хочешь","Относись к другим так, как хочешь, чтобы относились к тебе","Думай только о себе","Никому не верь"],correctAnswer:1,explanation:"Золотое правило учит относиться к другим с таким же уважением, какого мы хотим для себя.",difficulty:"easy",points:10},{id:"q3",question:"Какой христианский праздник отмечается 7 января?",options:["Пасха","Крещение","Рождество","Троица"],correctAnswer:2,explanation:"Рождество Христово — праздник рождения Иисуса Христа, отмечается 7 января.",difficulty:"medium",points:15}]},{id:"safety4",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-red-500",gradient:"from-red-600 to-orange-600",description:"Основы безопасности жизнедеятельности",sections:[{id:"safety4-sec1",title:"Безопасность на улице",description:"Правила поведения",topics:[{id:"safety4-sec1-t1",title:"Безопасность на воде",description:"Правила поведения у воды",lessons:[{id:"safety4-sec1-t1-l1",title:"Правила поведения на воде",description:"Как купаться безопасно",theory:`<h3>🏊 Правила безопасности на воде</h3>
                  <h4>Где можно купаться:</h4>
                  <ul>
                    <li>✅ Только в специально отведённых местах</li>
                    <li>✅ Под присмотром взрослых</li>
                    <li>✅ В хорошую погоду</li>
                  </ul>
                  <h4>Запрещается:</h4>
                  <ul>
                    <li>❌ Купаться в незнакомых местах</li>
                    <li>❌ Заплывать за буйки</li>
                    <li>❌ Прыгать в воду в незнакомых местах</li>
                    <li>❌ Купаться в шторм</li>
                  </ul>
                  <h4>Если тонет человек:</h4>
                  <p>Зови взрослых, брось спасательный круг, позвони 112!</p>`,examples:["Где можно купаться?","Что делать, если кто-то тонет?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"safety4-sec2",title:"Первая помощь",description:"Помощь при травмах",topics:[{id:"safety4-sec2-t1",title:"Оказание первой помощи",description:"Базовые навыки",lessons:[{id:"safety4-sec2-t1-l1",title:"Ожоги и порезы",description:"Первая помощь",theory:`<h3>🩹 Первая помощь при ожогах</h3>
                  <h4>Действия:</h4>
                  <ol>
                    <li>Охладить место ожога под проточной водой 15-20 минут</li>
                    <li>Наложить чистую повязку</li>
                    <li>Обратиться к врачу</li>
                  </ol>
                  <h4>⚠️ Нельзя:</h4>
                  <ul>
                    <li>Мазать маслом или жиром</li>
                    <li>Прокалывать пузыри</li>
                    <li>Отрывать прилипшую одежду</li>
                  </ul>
                  <h3>🔪 При порезах:</h3>
                  <ol>
                    <li>Промыть чистой водой</li>
                    <li>Обработать перекисью водорода</li>
                    <li>Наложить повязку</li>
                  </ol>`,examples:["Что делать при ожоге?","Чем обработать порез?"],completed:!1,difficulty:"medium",estimatedTime:20}]}]}],quiz:[{id:"q1",question:"Что нужно сделать при ожоге в первую очередь?",options:["Смазать маслом","Охладить водой","Наложить повязку","Проколоть пузырь"],correctAnswer:1,explanation:"Сначала нужно охладить место ожога под проточной водой 15-20 минут.",difficulty:"medium",points:15},{id:"q2",question:"Где можно купаться?",options:["В любом водоёме","В специально отведённых местах","Везде, где глубоко","В любом месте с мостками"],correctAnswer:1,explanation:"Купаться можно только в специально отведённых местах под присмотром взрослых.",difficulty:"easy",points:10}]},{id:"informatics4",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программы, алгоритмы, презентации",sections:[{id:"info4-sec1",title:"Работа с информацией",description:"Обработка данных",topics:[{id:"info4-sec1-t1",title:"Представление информации",description:"Виды информации",lessons:[{id:"info4-sec1-t1-l1",title:"Кодирование информации",description:"Как кодируется информация",theory:`<h3>🔢 Кодирование информации</h3>
                  <p>Информация в компьютере кодируется с помощью нулей и единиц.</p>
                  <h4>Двоичный код:</h4>
                  <ul>
                    <li>0 — нет сигнала</li>
                    <li>1 — есть сигнал</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>Буква "А" = 01000001</p>
                  <h4>Единицы измерения:</h4>
                  <ul>
                    <li><strong>Бит</strong> — наименьшая единица (0 или 1)</li>
                    <li><strong>Байт</strong> = 8 бит</li>
                    <li><strong>Килобайт (КБ)</strong> = 1024 байта</li>
                    <li><strong>Мегабайт (МБ)</strong> = 1024 КБ</li>
                    <li><strong>Гигабайт (ГБ)</strong> = 1024 МБ</li>
                  </ul>`,examples:["Сколько бит в байте?","Что больше: КБ или МБ?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"info4-sec2",title:"Презентации",description:"Создание презентаций",topics:[{id:"info4-sec2-t1",title:"PowerPoint",description:"Создание презентаций",lessons:[{id:"info4-sec2-t1-l1",title:"Что такое презентация?",description:"Основы создания",theory:`<h3>📊 Презентация</h3>
                  <p>Презентация — это показ информации с помощью слайдов.</p>
                  <h4>Структура презентации:</h4>
                  <ul>
                    <li>📍 <strong>Титульный слайд</strong> — тема и автор</li>
                    <li>📋 <strong>Содержание</strong> — о чём будет презентация</li>
                    <li>📄 <strong>Основные слайды</strong> — информация</li>
                    <li>🎯 <strong>Заключение</strong> — выводы</li>
                  </ul>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Меньше текста, больше картинок</li>
                    <li>Читаемый шрифт</li>
                    <li>Понятные заголовки</li>
                  </ul>`,examples:["Создай презентацию о себе","Добавь слайд с картинкой"],completed:!1,difficulty:"easy",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"Сколько бит в одном байте?",options:["4","8","16","32"],correctAnswer:1,explanation:"В одном байте 8 бит.",difficulty:"easy",points:10},{id:"q2",question:"Что больше: МБ или КБ?",options:["КБ","МБ","Одинаковы","Зависит от файла"],correctAnswer:1,explanation:"МБ (мегабайт) больше, чем КБ (килобайт). 1 МБ = 1024 КБ.",difficulty:"easy",points:10},{id:"q3",question:"Что такое презентация?",options:["Текстовый документ","Показ информации с помощью слайдов","Рисунок","Таблица"],correctAnswer:1,explanation:"Презентация — это показ информации с помощью слайдов.",difficulty:"easy",points:10}]}]},eQ=(0,ef.default)("map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]),eG={id:5,name:"5 класс",shortName:"5 кл.",subjects:[{id:"math5",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Дроби, проценты, уравнения",sections:[{id:"math5-sec1",title:"Обыкновенные дроби",description:"Числитель, знаменатель, действия с дробями",topics:[{id:"math5-sec1-top1",title:"Понятие дроби",description:"Числитель и знаменатель",lessons:[{id:"math5-sec1-top1-les1",title:"Что такое дробь",description:"Дробь как часть целого",theory:`<h3>Обыкновенные дроби</h3>
                  <p>Дробь — это часть целого. Записывается как a/b, где a — числитель, b — знаменатель.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li><strong>Числитель</strong> — сколько частей взяли</li>
                  <li><strong>Знаменатель</strong> — на сколько частей разделили</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>1/2 — половина (одна из двух частей)</li>
                    <li>1/4 — четверть</li>
                    <li>3/4 — три четверти</li>
                  </ul>`,examples:["Запиши дробь: три пятых","Что показывает числитель?","Что показывает знаменатель?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math5-sec1-top1-les2",title:"Правильные и неправильные дроби",description:"Классификация дробей",theory:`<h3>Правильные и неправильные дроби</h3>
                  <h4>Правильная дробь:</h4>
                  <p>Числитель меньше знаменателя: 2/5, 3/7, 1/2</p>
                  <p>Значение меньше 1</p>
                  <h4>Неправильная дробь:</h4>
                  <p>Числитель больше или равен знаменателю: 7/4, 5/5, 8/3</p>
                  <p>Значение больше или равно 1</p>
                  <h4>Смешанное число:</h4>
                  <p>Неправильную дробь можно записать как смешанное число:</p>
                  <p>7/4 = 1 3/4 (одна целая три четвёртых)</p>`,examples:["Определи: 5/7 — правильная или нет?","Выдели целую часть: 9/4","Запиши в виде дроби: 2 1/3"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"math5-sec1-top2",title:"Действия с дробями",description:"Сложение и вычитание дробей",lessons:[{id:"math5-sec1-top2-les1",title:"Сложение дробей с одинаковыми знаменателями",description:"Правило сложения",theory:`<h3>Сложение дробей с одинаковыми знаменателями</h3>
                  <p>При сложении дробей с одинаковыми знаменателями складываем числители, а знаменатель остаётся тем же.</p>
                  <h4>Формула:</h4>
                  <p>a/c + b/c = (a + b)/c</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>2/7 + 3/7 = 5/7</li>
                    <li>1/4 + 2/4 = 3/4</li>
                    <li>5/9 + 2/9 = 7/9</li>
                  </ul>`,examples:["Вычисли: 3/8 + 2/8","Найди сумму: 1/5 + 2/5","Реши: 4/11 + 5/11"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math5-sec1-top2-les2",title:"Вычитание дробей с одинаковыми знаменателями",description:"Правило вычитания",theory:`<h3>Вычитание дробей с одинаковыми знаменателями</h3>
                  <p>При вычитании дробей с одинаковыми знаменателями вычитаем числители, а знаменатель остаётся тем же.</p>
                  <h4>Формула:</h4>
                  <p>a/c - b/c = (a - b)/c</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>5/7 - 2/7 = 3/7</li>
                    <li>7/9 - 3/9 = 4/9</li>
                    <li>8/11 - 5/11 = 3/11</li>
                  </ul>`,examples:["Вычисли: 7/10 - 3/10","Найди разность: 5/6 - 1/6","Реши: 9/12 - 5/12"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math5-sec1-top2-les3",title:"Приведение к общему знаменателю",description:"Сложение дробей с разными знаменателями",theory:`<h3>Общий знаменатель</h3>
                  <p>Чтобы сложить дроби с разными знаменателями:</p>
                  <ol>
                    <li>Найти общий знаменатель (НОК знаменателей)</li>
                    <li>Привести дроби к общему знаменателю</li>
                    <li>Выполнить сложение</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>1/4 + 1/6</p>
                  <p>НОК(4, 6) = 12</p>
                  <p>1/4 = 3/12, 1/6 = 2/12</p>
                  <p>3/12 + 2/12 = 5/12</p>`,examples:["Реши: 1/3 + 1/6","Вычисли: 2/5 + 1/3","Найди сумму: 1/2 + 1/5"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"math5-sec2",title:"Десятичные дроби",description:"Запись и действия с десятичными дробями",topics:[{id:"math5-sec2-top1",title:"Понятие десятичной дроби",description:"Запись и чтение",lessons:[{id:"math5-sec2-top1-les1",title:"Что такое десятичная дробь",description:"Определение и примеры",theory:`<h3>Десятичная дробь</h3>
                  <p>Десятичная дробь — это дробь, знаменатель которой равен 10, 100, 1000 и т.д.</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>0,5 = 5/10 = 1/2</li>
                    <li>0,25 = 25/100 = 1/4</li>
                    <li>3,14 — приближённое значение π</li>
                  </ul>
                  <h4>Чтение:</h4>
                  <p>0,5 — ноль целых пять десятых</p>
                  <p>2,35 — две целых тридцать пять сотых</p>`,examples:["Прочитай: 0,75","Запиши в виде дроби: 0,4","Переведи: 3/10 в десятичную"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math5-sec2-top1-les2",title:"Перевод обыкновенной дроби в десятичную",description:"Правила перевода",theory:`<h3>Перевод дробей</h3>
                  <h4>Из обыкновенной в десятичную:</h4>
                  <p>Разделить числитель на знаменатель.</p>
                  <p>Пример: 3/4 = 3 : 4 = 0,75</p>
                  <h4>Из десятичной в обыкновенную:</h4>
                  <p>Записать как дробь со знаменателем 10, 100, 1000...</p>
                  <p>Пример: 0,7 = 7/10</p>
                  <p>0,23 = 23/100</p>`,examples:["Переведи: 1/2 в десятичную","Переведи: 0,6 в обыкновенную","Сравни: 0,25 и 1/4"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"math5-sec2-top2",title:"Действия с десятичными дробями",description:"Сложение, вычитание, умножение",lessons:[{id:"math5-sec2-top2-les1",title:"Сложение и вычитание",description:"Правила сложения столбиком",theory:`<h3>Сложение и вычитание десятичных дробей</h3>
                  <h4>Правило:</h4>
                  <p>Записываем дроби столбиком так, чтобы запятая была под запятой.</p>
                  <pre>
   3,25
 + 2,40
 ------
   5,65
                  </pre>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Уравнять количество знаков после запятой</li>
                    <li>Записать столбиком, запятая под запятой</li>
                    <li>Выполнить действие, не обращая внимания на запятую</li>
                    <li>Поставить запятую под запятыми</li>
                  </ol>`,examples:["Вычисли: 2,5 + 1,3","Найди разность: 5,7 - 2,3","Реши: 10,25 + 4,5"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"math5-sec2-top2-les2",title:"Умножение десятичных дробей",description:"Правила умножения",theory:`<h3>Умножение десятичных дробей</h3>
                  <h4>Правило:</h4>
                  <ol>
                    <li>Умножить как натуральные числа, не обращая внимания на запятые</li>
                    <li>Отделить запятой столько цифр справа, сколько их после запятых в обоих множителях вместе</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>0,2 \xd7 0,3 = 0,06</p>
                  <p>0,2 — одна цифра после запятой</p>
                  <p>0,3 — одна цифра после запятой</p>
                  <p>Всего: 2 цифры после запятой в ответе</p>`,examples:["Умножь: 0,2 × 0,3","Вычисли: 1,5 × 0,2","Найди: 0,25 × 4"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"math5-sec3",title:"Проценты",description:"Нахождение процента от числа",topics:[{id:"math5-sec3-top1",title:"Понятие процента",description:"Что такое процент",lessons:[{id:"math5-sec3-top1-les1",title:"Что такое процент",description:"Определение процента",theory:`<h3>Процент</h3>
                  <p>Процент — это сотая часть числа. Обозначается знаком %.</p>
                  <h4>Основные соотношения:</h4>
                  <ul>
                    <li>1% = 1/100 = 0,01</li>
                    <li>100% = 1 (целое)</li>
                    <li>50% = 1/2 = 0,5</li>
                    <li>25% = 1/4 = 0,25</li>
                    <li>10% = 1/10 = 0,1</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>50% от 200 = 100</p>
                  <p>10% от 500 = 50</p>`,examples:["Найди 1% от 300","Сколько % составляет 1/2?","Переведи 25% в дробь"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math5-sec3-top1-les2",title:"Нахождение процента от числа",description:"Формула и примеры",theory:`<h3>Как найти процент от числа</h3>
                  <h4>Способ 1:</h4>
                  <p>b \xd7 a / 100, где a% от числа b</p>
                  <p>Пример: 20% от 150 = 150 \xd7 20 / 100 = 30</p>
                  <h4>Способ 2:</h4>
                  <p>Представить процент как дробь и умножить</p>
                  <p>20% = 0,2, значит 150 \xd7 0,2 = 30</p>
                  <h4>Полезные соотношения:</h4>
                  <ul>
                    <li>50% = половина (делим на 2)</li>
                    <li>25% = четверть (делим на 4)</li>
                    <li>10% = десятая часть (делим на 10)</li>
                  </ul>`,examples:["Найди 25% от 80","Вычисли 15% от 200","Найди 5% от 1000"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"math5-sec3-top2",title:"Решение задач на проценты",description:"Практические задачи",lessons:[{id:"math5-sec3-top2-les1",title:"Нахождение числа по его проценту",description:"Обратная задача",theory:`<h3>Нахождение числа по его проценту</h3>
                  <p>Если a% равны b, то всё число = b \xd7 100 / a</p>
                  <h4>Пример:</h4>
                  <p>10% равны 30, найти всё число.</p>
                  <p>30 \xd7 100 / 10 = 300</p>
                  <h4>Или проще:</h4>
                  <p>Если 10% = 30, то 100% = 30 \xd7 10 = 300</p>`,examples:["Найди число, если 10% = 30","Найди число, если 25% = 50","5% равны 15, найти число"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"math5-sec3-top2-les2",title:"Сколько процентов составляет одно число от другого",description:"Отношение чисел",theory:`<h3>Процентное отношение</h3>
                  <p>Чтобы найти, сколько процентов составляет число a от числа b:</p>
                  <p>(a / b) \xd7 100%</p>
                  <h4>Пример:</h4>
                  <p>Сколько % составляет 15 от 60?</p>
                  <p>(15 / 60) \xd7 100% = 0,25 \xd7 100% = 25%</p>`,examples:["Сколько % составляет 15 от 60?","Какой % составляет 8 от 40?","Найди %: 25 от 100"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"math5-sec4",title:"Геометрия",description:"Фигуры и их свойства",topics:[{id:"math5-sec4-top1",title:"Прямоугольник и квадрат",description:"Площадь и периметр",lessons:[{id:"math5-sec4-top1-les1",title:"Периметр прямоугольника",description:"Формула периметра",theory:`<h3>Периметр прямоугольника</h3>
                  <p>Периметр — сумма длин всех сторон.</p>
                  <h4>Формула:</h4>
                  <p>P = 2(a + b), где a и b — длины сторон</p>
                  <h4>Пример:</h4>
                  <p>Прямоугольник со сторонами 3 и 5:</p>
                  <p>P = 2(3 + 5) = 2 \xd7 8 = 16</p>
                  <h4>Квадрат:</h4>
                  <p>P = 4a, где a — сторона квадрата</p>`,examples:["Найди P прямоугольника 4×6","Найди P квадрата со стороной 5","Сторона квадрата P=20"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math5-sec4-top1-les2",title:"Площадь прямоугольника",description:"Формула площади",theory:`<h3>Площадь прямоугольника</h3>
                  <h4>Формула:</h4>
                  <p>S = a \xd7 b, где a и b — длины сторон</p>
                  <h4>Пример:</h4>
                  <p>Прямоугольник со сторонами 3 и 5:</p>
                  <p>S = 3 \xd7 5 = 15 кв. ед.</p>
                  <h4>Квадрат:</h4>
                  <p>S = a\xb2</p>
                  <h4>Единицы измерения:</h4>
                  <p>мм\xb2, см\xb2, дм\xb2, м\xb2, км\xb2</p>`,examples:["Найди S прямоугольника 4×6","Найди S квадрата со стороной 5","Сторона квадрата S=25"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"math5-sec4-top2",title:"Треугольник",description:"Виды треугольников",lessons:[{id:"math5-sec4-top2-les1",title:"Виды треугольников",description:"Классификация по углам и сторонам",theory:`<h3>Виды треугольников</h3>
                  <h4>По углам:</h4>
                  <ul>
                    <li><strong>Остроугольный</strong> — все углы острые</li>
                    <li><strong>Прямоугольный</strong> — один угол прямой (90\xb0)</li>
                    <li><strong>Тупоугольный</strong> — один угол тупой</li>
                  </ul>
                  <h4>По сторонам:</h4>
                  <ul>
                    <li><strong>Разносторонний</strong> — все стороны разные</li>
                    <li><strong>Равнобедренный</strong> — две стороны равны</li>
                    <li><strong>Равносторонний</strong> — все стороны равны</li>
                  </ul>`,examples:["Определи вид треугольника","Может ли быть треугольник с двумя прямыми углами?","Нарисуй равнобедренный треугольник"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"math5-sec4-top2-les2",title:"Периметр треугольника",description:"Сумма сторон",theory:`<h3>Периметр треугольника</h3>
                  <h4>Формула:</h4>
                  <p>P = a + b + c</p>
                  <h4>Пример:</h4>
                  <p>Треугольник со сторонами 3, 4, 5:</p>
                  <p>P = 3 + 4 + 5 = 12</p>
                  <h4>Для равностороннего:</h4>
                  <p>P = 3a</p>`,examples:["Найди P треугольника 5, 6, 7","P равностороннего со стороной 4","Сторона равностороннего P=18"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"math5-q1",question:"Чему равна сумма 1/4 + 1/4?",options:["1/8","1/4","1/2","2/8"],correctAnswer:2,explanation:"1/4 + 1/4 = 2/4 = 1/2. При сложении дробей с одинаковыми знаменателями складываем числители.",difficulty:"easy",points:10},{id:"math5-q2",question:"Как записать 25% в виде десятичной дроби?",options:["0,025","0,25","2,5","0,0025"],correctAnswer:1,explanation:"25% = 25/100 = 0,25. Процент — это сотая часть, значит делим на 100.",difficulty:"easy",points:10},{id:"math5-q3",question:"Найдите 20% от 200:",options:["20","40","100","10"],correctAnswer:1,explanation:"20% от 200 = 200 × 20 / 100 = 40. Или проще: 20% = 1/5, значит 200 / 5 = 40.",difficulty:"medium",points:15},{id:"math5-q4",question:"Вычислите: 0,3 × 0,2",options:["0,6","0,06","0,006","6"],correctAnswer:1,explanation:"0,3 × 0,2 = 0,06. В обоих множителях по одной цифре после запятой, значит в ответе 2 цифры после запятой.",difficulty:"medium",points:15}]},{id:"russian5",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Морфология, орфография, синтаксис",sections:[{id:"russian5-sec1",title:"Морфология",description:"Части речи и их грамматические признаки",topics:[{id:"russian5-sec1-top1",title:"Самостоятельные части речи",description:"Существительное, прилагательное, глагол",lessons:[{id:"russian5-sec1-top1-les1",title:"Имя существительное",description:"Обозначает предмет",theory:`<h3>Имя существительное</h3>
                  <p>Самостоятельная часть речи, обозначает предмет.</p>
                  <h4>Постоянные признаки:</h4>
                  <ul>
                    <li><strong>Одушевлённость</strong> — живое/неживое</li>
                    <li><strong>Род</strong> — м.р., ж.р., ср.р.</li>
                    <li><strong>Склонение</strong> — 1, 2, 3</li>
                  </ul>
                  <h4>Непостоянные признаки:</h4>
                  <ul>
                    <li><strong>Падеж</strong> — 6 падежей</li>
                    <li><strong>Число</strong> — ед.ч., мн.ч.</li>
                  </ul>`,examples:['Определи род слова "стол"','Поставь "книга" во мн.ч.','Определи склонение "окно"'],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian5-sec1-top1-les2",title:"Имя прилагательное",description:"Обозначает признак предмета",theory:`<h3>Имя прилагательное</h3>
                  <p>Обозначает признак предмета.</p>
                  <h4>Признаки:</h4>
                  <ul>
                    <li><strong>Род</strong> — м.р., ж.р., ср.р. (в ед.ч.)</li>
                    <li><strong>Число</strong> — ед.ч., мн.ч.</li>
                    <li><strong>Падеж</strong> — зависит от существительного</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>большой стол, большая книга, большое окно</p>`,examples:['Определи род: "красивый"','Поставь во мн.ч.: "умный"','Согласуй: "син... море"'],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian5-sec1-top1-les3",title:"Глагол",description:"Обозначает действие",theory:`<h3>Глагол</h3>
                  <p>Обозначает действие или состояние.</p>
                  <h4>Признаки:</h4>
                  <ul>
                    <li><strong>Вид</strong> — совершенный/несовершенный</li>
                    <li><strong>Спряжение</strong> — I, II</li>
                    <li><strong>Время</strong> — настоящее, прошедшее, будущее</li>
                    <li><strong>Число</strong> — ед.ч., мн.ч.</li>
                    <li><strong>Лицо</strong> — 1, 2, 3 (в н.в. и б.в.)</li>
                  </ul>`,examples:['Определи время: "читал"','Спряги: "писать"','Определи вид: "прочитать"'],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"russian5-sec1-top2",title:"Служебные части речи",description:"Предлог, союз, частица",lessons:[{id:"russian5-sec1-top2-les1",title:"Предлог",description:"Служебная часть речи",theory:`<h3>Предлог</h3>
                  <p>Служебная часть речи, связывает слова в словосочетании.</p>
                  <h4>Разряды:</h4>
                  <ul>
                    <li><strong>Пространственные</strong> — в, на, под, над, за...</li>
                    <li><strong>Временные</strong> — перед, после, в течение...</li>
                    <li><strong>Причинные</strong> — из-за, от, по...</li>
                    <li><strong>Целевые</strong> — для, ради...</li>
                  </ul>`,examples:['Найди предлог: "книга на столе"',"Определи значение предлога","Составь предложение с предлогом"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"russian5-sec1-top2-les2",title:"Союз",description:"Связывает однородные члены и части предложения",theory:`<h3>Союз</h3>
                  <p>Служебная часть речи, связывает однородные члены или части сложного предложения.</p>
                  <h4>Виды:</h4>
                  <ul>
                    <li><strong>Соединительные</strong> — и, да (=и), также...</li>
                    <li><strong>Противительные</strong> — а, но, да (=но), однако...</li>
                    <li><strong>Разделительные</strong> — или, либо, то...то...</li>
                  </ul>`,examples:['Найди союз: "читаю и пишу"',"Определи вид союза",'Составь предложение с союзом "но"'],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"russian5-sec2",title:"Орфография",description:"Правописание",topics:[{id:"russian5-sec2-top1",title:"Правописание корней",description:"Чередующиеся гласные",lessons:[{id:"russian5-sec2-top1-les1",title:"Проверяемые и непроверяемые гласные",description:"Правила проверки",theory:`<h3>Гласные в корне</h3>
                  <h4>Проверяемые:</h4>
                  <p>Подобрать однокоренное слово с ударением.</p>
                  <p>вода — воды (проверочное слово)</p>
                  <h4>Непроверяемые:</h4>
                  <p>Запомнить написание (словарные слова).</p>
                  <p>магазин, вокзал, молоко...</p>`,examples:["Проверь: в_да","Запомни: м_газин","Подбери проверочное слово"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"russian5-sec2-top2",title:"Правописание приставок",description:"Приставки пре- и при-",lessons:[{id:"russian5-sec2-top2-les1",title:"Приставки пре- и при-",description:"Значения приставок",theory:`<h3>Приставки ПРЕ- и ПРИ-</h3>
                  <h4>ПРИ- обозначает:</h4>
                  <ul>
                    <li>Приближение (приехал, прилетел)</li>
                    <li>Присоединение (приклеил, привязал)</li>
                    <li>Близость (приморский, пришкольный)</li>
                    <li>Неполное действие (присесть, приоткрыть)</li>
                  </ul>
                  <h4>ПРЕ- обозначает:</h4>
                  <ul>
                    <li>= "очень" (прекрасный, премудрый)</li>
                    <li>= пере- (преградить = перегородить)</li>
                  </ul>`,examples:["Вставь: пр_ехать","Объясни: пр_красный","Значение приставки"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"russian5-sec3",title:"Синтаксис",description:"Строение предложений",topics:[{id:"russian5-sec3-top1",title:"Предложение",description:"Виды предложений",lessons:[{id:"russian5-sec3-top1-les1",title:"Виды предложений по цели высказывания",description:"Повествовательные, вопросительные, побудительные",theory:`<h3>Виды предложений</h3>
                  <h4>По цели высказывания:</h4>
                  <ul>
                    <li><strong>Повествовательные</strong> — сообщают (Наступила осень.)</li>
                    <li><strong>Вопросительные</strong> — спрашивают (Кто пришёл?)</li>
                    <li><strong>Побудительные</strong> — побуждают к действию (Идите домой!)</li>
                  </ul>
                  <h4>По интонации:</h4>
                  <ul>
                    <li><strong>Невосклицательные</strong> — спокойная интонация</li>
                    <li><strong>Восклицательные</strong> — эмоциональная окраска (Какой прекрасный день!)</li>
                  </ul>`,examples:["Определи вид предложения","Составь вопросительное","Переделай в побудительное"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"russian5-sec3-top1-les2",title:"Главные члены предложения",description:"Подлежащее и сказуемое",theory:`<h3>Главные члены предложения</h3>
                  <h4>Подлежащее:</h4>
                  <p>О ком или о чём говорится в предложении. Обычно выражено существительным или местоимением в И.п.</p>
                  <h4>Сказуемое:</h4>
                  <p>Что говорится о подлежащем. Обычно выражено глаголом.</p>
                  <h4>Пример:</h4>
                  <p><u>Дети</u> (подлежащее) <u>играют</u> (сказуемое) в парке.</p>`,examples:["Найди подлежащее","Найди сказуемое","Выдели грамматическую основу"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"russian5-q1",question:"Какая часть речи обозначает действие?",options:["Существительное","Прилагательное","Глагол","Наречие"],correctAnswer:2,explanation:"Глагол — это часть речи, обозначающая действие или состояние предмета (бежать, спать, учиться).",difficulty:"easy",points:10},{id:"russian5-q2",question:'В каком падеже стоит слово "книгу" в предложении "Я читаю книгу"?',options:["Именительный","Родительный","Винительный","Дательный"],correctAnswer:2,explanation:'Слово "книгу" стоит в винительном падеже (вижу кого? что? — книгу). Это прямой объект при глаголе.',difficulty:"medium",points:15},{id:"russian5-q3",question:'Какая приставка в слове "приехать"?',options:["пре-","при-","пра-","про-"],correctAnswer:1,explanation:"Приехать — приставка ПРИ- означает приближение.",difficulty:"easy",points:10}]},{id:"literature5",title:"Литература",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Сказки, басни, рассказы",sections:[{id:"literature5-sec1",title:"Устное народное творчество",description:"Фольклор",topics:[{id:"literature5-sec1-top1",title:"Русские народные сказки",description:"Волшебные и бытовые сказки",lessons:[{id:"literature5-sec1-top1-les1",title:"Виды сказок",description:"Классификация сказок",theory:`<h3>Русские народные сказки</h3>
                  <h4>Виды сказок:</h4>
                  <ul>
                    <li><strong>Волшебные</strong> — с волшебными предметами и существами ("Царевна-лягушка", "Марья-искусница")</li>
                    <li><strong>Бытовые</strong> — о повседневной жизни ("Каша из топора", "Мужик и медведь")</li>
                    <li><strong>О животных</strong> — главные герои — звери ("Лиса и волк", "Заяц-хваста")</li>
                  </ul>`,examples:['Какой вид сказки "Царевна-лягушка"?',"Приведи пример бытовой сказки","Чем отличаются сказки о животных?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"literature5-sec1-top1-les2",title:"Композиция сказки",description:"Зачин, развитие, концовка",theory:`<h3>Композиция сказки</h3>
                  <h4>Особенности сказок:</h4>
                  <ul>
                    <li><strong>Зачин</strong>: "В некотором царстве..."</li>
                    <li><strong>Троекратные повторы</strong></li>
                    <li><strong>Добро побеждает зло</strong></li>
                    <li><strong>Концовка</strong>: "И стали они жить-поживать..."</li>
                  </ul>`,examples:["Какой зачин в сказке?","Что такое концовка?","Найди троекратный повтор"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"literature5-sec2",title:"Басни",description:"Жанр басни",topics:[{id:"literature5-sec2-top1",title:"Басни И.А. Крылова",description:"Мораль и аллегория",lessons:[{id:"literature5-sec2-top1-les1",title:"Что такое басня",description:"Жанровые особенности",theory:`<h3>Басня</h3>
                  <p>Басня — это краткий стихотворный рассказ с моралью.</p>
                  <h4>И.А. Крылов (1769-1844):</h4>
                  <p>Великий русский баснописец. Написал более 200 басен.</p>
                  <h4>Особенности басни:</h4>
                  <ul>
                    <li><strong>Аллегория</strong> — иносказание (звери = люди)</li>
                    <li><strong>Мораль</strong> — нравоучение в начале или конце</li>
                  </ul>`,examples:["Что такое мораль?","Объясни аллегорию","Кого высмеивает Крылов?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"literature5-sec2-top1-les2",title:"Известные басни Крылова",description:"Анализ басен",theory:`<h3>Известные басни</h3>
                  <h4>"Ворона и Лисица"</h4>
                  <p>О лести и глупости. Мораль: не верь льстецам.</p>
                  <h4>"Стрекоза и Муравей"</h4>
                  <p>О трудолюбии и лени. Мораль: трудись летом.</p>
                  <h4>"Квартет"</h4>
                  <p>О некомпетентности. Мораль: умение важнее места.</p>
                  <h4>"Лебедь, Щука и Рак"</h4>
                  <p>О несогласии. Мораль: нужно действовать сообща.</p>`,examples:['Какая мораль в басне "Ворона и Лисица"?','Про что "Стрекоза и Муравей"?','Чему учит "Квартет"?'],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"literature5-sec3",title:"Рассказы",description:"Прозаические произведения",topics:[{id:"literature5-sec3-top1",title:"Рассказы о детях",description:"Произведения для детей",lessons:[{id:"literature5-sec3-top1-les1",title:'В.Г. Короленко "Дети подземелья"',description:"О дружбе и сострадании",theory:`<h3>В.Г. Короленко "Дети подземелья"</h3>
                  <p>Повесть о дружбе богатого мальчика Васи с детьми из бедной семьи.</p>
                  <h4>Главные герои:</h4>
                  <ul>
                    <li>Вася — сын судьи, добрый и сострадательный</li>
                    <li>Валек — сын нищего, честный и гордый</li>
                    <li>Маруся — сестра Валека, больная девочка</li>
                  </ul>
                  <h4>Темы:</h4>
                  <p>Дружба, сострадание, социальное неравенство</p>`,examples:["Кто такие дети подземелья?","Почему Вася подружился с ними?","Какая главная мысль?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"literature5-q1",question:'Кто автор басни "Стрекоза и Муравей"?',options:["Пушкин","Крылов","Лермонтов","Тургенев"],correctAnswer:1,explanation:'Иван Андреевич Крылов — автор басни "Стрекоза и Муравей", которая учит нас трудолюбию.',difficulty:"easy",points:10},{id:"literature5-q2",question:"Что такое мораль в басне?",options:["Начало басни","Нравоучение","Описание героев","Развязка"],correctAnswer:1,explanation:"Мораль — это нравоучение, главная мысль басни, часто выраженная в последних строках.",difficulty:"easy",points:10},{id:"literature5-q3",question:'Какой вид сказки "Царевна-лягушка"?',options:["Бытовая","О животных","Волшебная","Социальная"],correctAnswer:2,explanation:'"Царевна-лягушка" — волшебная сказка, в которой есть волшебные превращения и предметы.',difficulty:"easy",points:10}]},{id:"history5",title:"История Древнего мира",icon:(0,y.jsx)(eD,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Древний Египет, Греция, Рим",sections:[{id:"history5-sec1",title:"Древний Восток",description:"Первые цивилизации",topics:[{id:"history5-sec1-top1",title:"Древний Египет",description:"Цивилизация на берегах Нила",lessons:[{id:"history5-sec1-top1-les1",title:"География и природные условия",description:"Река Нил",theory:`<h3>Древний Египет</h3>
                  <p>Возник около 5000 лет назад вдоль реки Нил в Северной Африке.</p>
                  <h4>Природные условия:</h4>
                  <ul>
                    <li>Река Нил разливалась каждый год</li>
                    <li>Плодородный ил на полях</li>
                    <li>Защита от врагов пустынями</li>
                  </ul>`,examples:["Где находится Египет?","Почему Нил важен?","Как пустыня защищала?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"history5-sec1-top1-les2",title:"Достижения египтян",description:"Пирамиды, письменность",theory:`<h3>Достижения египтян</h3>
                  <ul>
                    <li><strong>Пирамиды</strong> — гробницы фараонов</li>
                    <li><strong>Иероглифы</strong> — письменность из рисунков</li>
                    <li><strong>Папирус</strong> — материал для письма</li>
                    <li><strong>Календарь</strong> — 365 дней</li>
                    <li><strong>Мумификация</strong> — сохранение тел</li>
                  </ul>`,examples:["Для чего строили пирамиды?","Что такое иероглифы?","Кто такой фараон?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"history5-sec1-top1-les3",title:"Общество Древнего Египта",description:"Социальная структура",theory:`<h3>Общество Египта</h3>
                  <h4>Сословия:</h4>
                  <ul>
                    <li><strong>Фараон</strong> — правитель</li>
                    <li><strong>Жрецы</strong> — служители богов</li>
                    <li><strong>Вельможи</strong> — знать</li>
                    <li><strong>Крестьяне и рабы</strong></li>
                  </ul>`,examples:["Кто такой фараон?","Чем занимались жрецы?","Кто такие вельможи?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"history5-sec2",title:"Древняя Греция",description:"Родина демократии",topics:[{id:"history5-sec2-top1",title:"Города-государства",description:"Афины и Спарта",lessons:[{id:"history5-sec2-top1-les1",title:"Афины",description:"Демократия и культура",theory:`<h3>Афины</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li><strong>Демократия</strong> — власть народа</li>
                    <li><strong>Наука и искусство</strong> — философы, театр</li>
                    <li><strong>Образование</strong> — школы для детей</li>
                  </ul>
                  <h4>Достижения:</h4>
                  <p>Парфенон, Акрополь, философия (Сократ, Платон)</p>`,examples:["Что такое демократия?","Чем знамениты Афины?","Кто такие философы?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"history5-sec2-top1-les2",title:"Спарта",description:"Военное государство",theory:`<h3>Спарта</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li><strong>Военное государство</strong></li>
                    <li><strong>Воспитание воинов</strong></li>
                    <li><strong>Жёсткая дисциплина</strong></li>
                  </ul>
                  <h4>Отличия от Афин:</h4>
                  <p>Нет демократии, нет искусства, только военное дело</p>`,examples:["Чем Афины отличались от Спарты?","Как воспитывали спартанцев?","Какая форма правления?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"history5-sec2-top2",title:"Культура Древней Греции",description:"Олимпийские игры, театр",lessons:[{id:"history5-sec2-top2-les1",title:"Олимпийские игры",description:"История Олимпиад",theory:`<h3>Олимпийские игры</h3>
                  <p>Проводились с 776 г. до н.э. в честь Зевса.</p>
                  <h4>Виды соревнований:</h4>
                  <ul>
                    <li>Бег</li>
                    <li>Прыжки</li>
                    <li>Метание копья и диска</li>
                    <li>Борьба</li>
                    <li>Гонки на колесницах</li>
                  </ul>`,examples:["Когда появились Олимпийские игры?","В чью честь проводились?","Какие виды спорта были?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"history5-sec3",title:"Древний Рим",description:"Римская империя",topics:[{id:"history5-sec3-top1",title:"История Рима",description:"От основания до империи",lessons:[{id:"history5-sec3-top1-les1",title:"Основание Рима",description:"Легенда о Ромуле и Реме",theory:`<h3>Основание Рима</h3>
                  <p>Основан в 753 г. до н.э.</p>
                  <h4>Легенда:</h4>
                  <p>Братья Ромул и Рем были вскормлены волчицей. Ромул убил Рема и основал город.</p>
                  <h4>Этапы истории:</h4>
                  <ul>
                    <li>Царский период</li>
                    <li>Республика</li>
                    <li>Империя</li>
                  </ul>`,examples:["Кто основал Рим?","В каком году?","Назови этапы истории"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"history5-sec3-top1-les2",title:"Достижения Рима",description:"Наследие античности",theory:`<h3>Достижения Рима</h3>
                  <h4>Вклад в цивилизацию:</h4>
                  <ul>
                    <li><strong>Римское право</strong> — основа законодательства</li>
                    <li><strong>Архитектура</strong>: Колизей, акведуки, дороги</li>
                    <li><strong>Латынь</strong> — язык науки</li>
                    <li><strong>Календарь</strong> (июль — в честь Юлия Цезаря)</li>
                  </ul>`,examples:["Что такое Колизей?","Какое наследие Рима важно?","Кто такой Юлий Цезарь?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"history5-q1",question:"Какая река была основой жизни в Древнем Египте?",options:["Тигр","Евфрат","Нил","Ганг"],correctAnswer:2,explanation:"Нил — река в Африке, которая разливалась каждый год, оставляя плодородный ил на полях.",difficulty:"easy",points:10},{id:"history5-q2",question:"Где зародилась демократия?",options:["Рим","Спарта","Афины","Египет"],correctAnswer:2,explanation:"Демократия (власть народа) зародилась в Афинах в V веке до н.э.",difficulty:"easy",points:10},{id:"history5-q3",question:"В каком году был основан Рим?",options:["753 г. до н.э.","776 г. до н.э.","500 г. до н.э.","1000 г. до н.э."],correctAnswer:0,explanation:"Согласно легенде, Рим был основан братьями Ромулом и Ремом в 753 году до н.э.",difficulty:"medium",points:15}]},{id:"bio5",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Строение клетки, организмы",sections:[{id:"bio5-sec1",title:"Строение организмов",description:"Клетка — единица живого",topics:[{id:"bio5-sec1-top1",title:"Клетка",description:"Строение клетки",lessons:[{id:"bio5-sec1-top1-les1",title:"Основные части клетки",description:"Ядро, цитоплазма, мембрана",theory:`<h3>Клетка — единица живого</h3>
                  <p>Все живые организмы состоят из клеток.</p>
                  <h4>Основные части клетки:</h4>
                  <ul>
                    <li><strong>Ядро</strong> — содержит ДНК с наследственной информацией</li>
                    <li><strong>Цитоплазма</strong> — полужидкое содержимое клетки</li>
                    <li><strong>Клеточная мембрана</strong> — защищает, регулирует обмен веществ</li>
                    <li><strong>Митохондрии</strong> — вырабатывают энергию</li>
                    <li><strong>Рибосомы</strong> — синтезируют белки</li>
                  </ul>`,examples:["Какая часть клетки хранит ДНК?","Что такое митохондрии?","Функция мембраны?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"bio5-sec1-top1-les2",title:"Растительная и животная клетка",description:"Отличия",theory:`<h3>Отличия растительной клетки</h3>
                  <h4>Есть только у растений:</h4>
                  <ul>
                    <li><strong>Клеточная стенка</strong> из целлюлозы</li>
                    <li><strong>Хлоропласты</strong> для фотосинтеза</li>
                    <li><strong>Вакуоль</strong> с клеточным соком</li>
                  </ul>
                  <h4>Есть только у животных:</h4>
                  <ul>
                    <li><strong>Центриоли</strong></li>
                    <li><strong>Лизосомы</strong></li>
                  </ul>`,examples:["Чем отличается растительная клетка?","Что такое хлоропласты?","Зачем нужна вакуоль?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"bio5-sec2",title:"Царства природы",description:"Классификация организмов",topics:[{id:"bio5-sec2-top1",title:"Царства живой природы",description:"Бактерии, грибы, растения, животные",lessons:[{id:"bio5-sec2-top1-les1",title:"Бактерии",description:"Самые простые организмы",theory:`<h3>Бактерии</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Одноклеточные</li>
                    <li>Без ядра</li>
                    <li>Разные формы: шарики, палочки, спирали</li>
                  </ul>
                  <h4>Значение:</h4>
                  <ul>
                    <li>Разлагают органические вещества</li>
                    <li>Используются в пищевой промышленности</li>
                    <li>Вызывают болезни</li>
                  </ul>`,examples:["Чем бактерии отличаются от других?","Какую роль играют?","Какие формы бывают?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"bio5-sec2-top1-les2",title:"Грибы",description:"Особое царство",theory:`<h3>Грибы</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Не растения и не животные</li>
                    <li>Гетеротрофы (не фотосинтезируют)</li>
                    <li>Шляпочные, плесневые, дрожжи</li>
                  </ul>
                  <h4>Значение:</h4>
                  <ul>
                    <li>Пища для человека</li>
                    <li>Разложение органики</li>
                    <li>Производство лекарств</li>
                  </ul>`,examples:["Чем грибы отличаются от растений?","Какие бывают грибы?","Зачем нужны грибы?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"bio5-sec2-top1-les3",title:"Растения и животные",description:"Сравнение царств",theory:`<h3>Растения</h3>
                  <ul>
                    <li><strong>Автотрофы</strong> (фотосинтез)</li>
                    <li>Водоросли, мхи, папоротники, хвойные, цветковые</li>
                  </ul>
                  <h3>Животные</h3>
                  <ul>
                    <li><strong>Гетеротрофы</strong> (питаются готовой пищей)</li>
                    <li>Одноклеточные и многоклеточные</li>
                    <li>Беспозвоночные и позвоночные</li>
                  </ul>`,examples:["Чем растения отличаются от животных?","Что такое автотрофы?","Назови царства природы"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"bio5-q1",question:'Какой органоид называют "энергетической станцией" клетки?',options:["Ядро","Митохондрия","Рибосома","Вакуоль"],correctAnswer:1,explanation:"Митохондрии вырабатывают энергию (АТФ) для клетки из питательных веществ.",difficulty:"medium",points:15},{id:"bio5-q2",question:"Какое царство организмов способно к фотосинтезу?",options:["Бактерии","Грибы","Растения","Животные"],correctAnswer:2,explanation:"Растения содержат хлорофилл и способны создавать органические вещества из CO₂ и воды.",difficulty:"easy",points:10},{id:"bio5-q3",question:"Какая часть клетки содержит наследственную информацию?",options:["Мембрана","Цитоплазма","Ядро","Рибосома"],correctAnswer:2,explanation:"Ядро содержит ДНК с наследственной информацией.",difficulty:"easy",points:10}]},{id:"geo5",title:"География",icon:(0,y.jsx)(eQ,{className:"w-5 h-5"}),color:"text-teal-400",gradient:"from-teal-500 to-cyan-500",description:"План и карта, географические объекты",sections:[{id:"geo5-sec1",title:"План и карта",description:"Изображение земной поверхности",topics:[{id:"geo5-sec1-top1",title:"План местности",description:"Масштаб, условные знаки",lessons:[{id:"geo5-sec1-top1-les1",title:"Что такое план и карта",description:"Отличия плана от карты",theory:`<h3>План и карта</h3>
                  <h4>Отличия:</h4>
                  <ul>
                    <li><strong>План</strong> — изображение небольшого участка, более подробный</li>
                    <li><strong>Карта</strong> — изображение больших территорий, обобщённый</li>
                  </ul>
                  <h4>Масштаб:</h4>
                  <p>Показывает, во сколько раз уменьшено изображение.</p>
                  <ul>
                    <li>Численный: 1:1000</li>
                    <li>Именованный: в 1 см — 10 м</li>
                    <li>Линейный: графическая шкала</li>
                  </ul>`,examples:["Переведи масштаб 1:10000","Чем план отличается от карты?","Какой масштаб крупнее?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"geo5-sec1-top1-les2",title:"Условные знаки",description:"Обозначения на карте",theory:`<h3>Условные знаки</h3>
                  <h4>Виды:</h4>
                  <ul>
                    <li><strong>Площадные</strong> (лес, озеро)</li>
                    <li><strong>Линейные</strong> (дорога, река)</li>
                    <li><strong>Точечные</strong> (дерево, родник)</li>
                  </ul>`,examples:["Какой знак обозначает лес?","Найди условный знак реки","Нарисуй знак родника"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"geo5-sec1-top2",title:"Географические координаты",description:"Широта и долгота",lessons:[{id:"geo5-sec1-top2-les1",title:"Градусная сетка",description:"Параллели и меридианы",theory:`<h3>Градусная сетка</h3>
                  <h4>Параллели:</h4>
                  <p>Линии, параллельные экватору. Определяют широту.</p>
                  <h4>Меридианы:</h4>
                  <p>Линии от полюса к полюсу. Определяют долготу.</p>
                  <h4>Экватор:</h4>
                  <p>Самая длинная параллель (0\xb0 широты)</p>`,examples:["Что такое экватор?","Чем параллель отличается от меридиана?","Где находится Гринвич?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"geo5-sec1-top2-les2",title:"Определение координат",description:"Широта и долгота",theory:`<h3>Географические координаты</h3>
                  <h4>Широта:</h4>
                  <p>Расстояние от экватора (в градусах). От 0\xb0 до 90\xb0 с.ш. или ю.ш.</p>
                  <h4>Долгота:</h4>
                  <p>Расстояние от нулевого меридиана (Гринвич). От 0\xb0 до 180\xb0 в.д. или з.д.</p>
                  <h4>Пример:</h4>
                  <p>Москва: 56\xb0 с.ш., 38\xb0 в.д.</p>`,examples:["Определи координаты города","Что означают с.ш.?","Найди город по координатам"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"geo5-sec2",title:"Гидросфера",description:"Вода на Земле",topics:[{id:"geo5-sec2-top1",title:"Воды суши",description:"Реки и озёра",lessons:[{id:"geo5-sec2-top1-les1",title:"Реки",description:"Части реки",theory:`<h3>Реки</h3>
                  <h4>Части реки:</h4>
                  <ul>
                    <li><strong>Исток</strong> — начало реки</li>
                    <li><strong>Устье</strong> — конец реки</li>
                    <li><strong>Русло</strong> — ложе реки</li>
                    <li><strong>Притоки</strong> — впадающие реки</li>
                  </ul>
                  <h4>Крупнейшие реки:</h4>
                  <p>Амазонка, Нил, Миссисипи, Волга</p>`,examples:["Что такое исток?","Назови крупные реки","Чем приток отличается от реки?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"geo5-q1",question:"Что показывает масштаб?",options:["Расстояние между городами","Во сколько раз уменьшено изображение","Размер карты","Количество деталей"],correctAnswer:1,explanation:"Масштаб показывает, во сколько раз расстояние на карте меньше реального расстояния на местности.",difficulty:"easy",points:10},{id:"geo5-q2",question:"Какая линия считается нулевой для отсчёта широты?",options:["Гринвичский меридиан","Экватор","Тропик","Полярный круг"],correctAnswer:1,explanation:"Экватор — воображаемая линия, равноудалённая от полюсов. Широта на экваторе = 0°.",difficulty:"easy",points:10},{id:"geo5-q3",question:"Как называется начало реки?",options:["Устье","Исток","Русло","Приток"],correctAnswer:1,explanation:"Исток — место, где река начинается.",difficulty:"easy",points:10}]},{id:"foreign5",title:"Иностранный язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Английский язык: грамматика, лексика",sections:[{id:"foreign5-sec1",title:"Грамматика",description:"Основы грамматики английского языка",topics:[{id:"foreign5-sec1-top1",title:"Глагол to be",description:"Глагол-связка",lessons:[{id:"foreign5-sec1-top1-les1",title:"Формы глагола to be",description:"Настоящее время",theory:`<h3>Глагол to be</h3>
                  <p>Глагол to be — это глагол-связка "быть, являться".</p>
                  <h4>Формы глагола to be:</h4>
                  <table>
                    <tr><th>Местоимение</th><th>Форма</th><th>Пример</th></tr>
                    <tr><td>I</td><td>am</td><td>I am a student</td></tr>
                    <tr><td>He/She/It</td><td>is</td><td>She is happy</td></tr>
                    <tr><td>We/You/They</td><td>are</td><td>They are friends</td></tr>
                  </table>`,examples:["Вставь to be: She ___ a teacher","Образуй вопрос: You are happy","Поставь отрицание"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"foreign5-sec1-top1-les2",title:"Отрицание и вопрос",description:"Формы с not и вопросы",theory:`<h3>Отрицательная форма:</h3>
                  <p>I am not, He is not (isn't), They are not (aren't)</p>
                  <h3>Вопросительная форма:</h3>
                  <p>Am I...? Is he...? Are they...?</p>
                  <h4>Примеры:</h4>
                  <p>She isn't happy. — Она не счастлива.</p>
                  <p>Are you ready? — Ты готов?</p>`,examples:["Поставь отрицание: He is here","Образуй вопрос: She is a doctor","Переведи: Они не дома"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"foreign5-sec1-top2",title:"Present Simple",description:"Настоящее простое время",lessons:[{id:"foreign5-sec1-top2-les1",title:"Образование Present Simple",description:"Формулы времени",theory:`<h3>Present Simple</h3>
                  <p>Используется для регулярных действий, фактов, привычек.</p>
                  <h4>Образование:</h4>
                  <ul>
                    <li>I/You/We/They + глагол (work, play)</li>
                    <li>He/She/It + глагол + -s/-es (works, plays)</li>
                  </ul>
                  <h4>Маркеры времени:</h4>
                  <p>always, usually, often, sometimes, every day</p>`,examples:["Раскрой скобки: She (go) to school","Образуй вопрос: He likes pizza","Поставь отрицание"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"foreign5-sec2",title:"Лексика",description:"Словарный запас",topics:[{id:"foreign5-sec2-top1",title:"Семья",description:"Члены семьи",lessons:[{id:"foreign5-sec2-top1-les1",title:"Члены семьи",description:"Названия родственников",theory:`<h3>Family</h3>
                  <h4>Члены семьи:</h4>
                  <ul>
                    <li>mother / mum — мама</li>
                    <li>father / dad — папа</li>
                    <li>sister — сестра</li>
                    <li>brother — брат</li>
                    <li>grandmother — бабушка</li>
                    <li>grandfather — дедушка</li>
                    <li>uncle — дядя</li>
                    <li>aunt — тётя</li>
                    <li>cousin — двоюродный брат/сестра</li>
                  </ul>`,examples:["Переведи: У меня есть брат","Опиши свою семью","Составь диалог о семье"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"foreign5-q1",question:"Выбери правильную форму: She ___ a student.",options:["am","is","are","be"],correctAnswer:1,explanation:"После she используем форму is. She is a student = Она студентка.",difficulty:"easy",points:10},{id:"foreign5-q2",question:"Какое слово не подходит к Present Simple?",options:["always","now","usually","every day"],correctAnswer:1,explanation:"Now (сейчас) используется с Present Continuous. Present Simple описывает регулярные действия.",difficulty:"medium",points:15},{id:"foreign5-q3",question:"Переведи: бабушка",options:["aunt","grandmother","sister","mother"],correctAnswer:1,explanation:"Grandmother — бабушка. Aunt — тётя, sister — сестра, mother — мама.",difficulty:"easy",points:10}]},{id:"art5",title:"Изобразительное искусство",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Живопись, графика, композиция",sections:[{id:"art5-sec1",title:"Жанры живописи",description:"Виды изобразительного искусства",topics:[{id:"art5-sec1-top1",title:"Виды искусства",description:"Живопись, графика, скульптура",lessons:[{id:"art5-sec1-top1-les1",title:"Живопись",description:"Изображение красками",theory:`<h3>Живопись</h3>
                  <p>Изображение цветными красками на плоскости.</p>
                  <h4>Техники:</h4>
                  <ul>
                    <li><strong>Масло</strong> — картины на холсте</li>
                    <li><strong>Акварель</strong> — прозрачные краски</li>
                    <li><strong>Гуашь</strong> — плотные краски</li>
                  </ul>`,examples:["Чем живопись отличается от графики?","Какие материалы нужны для акварели?","Что такое гуашь?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"art5-sec1-top1-les2",title:"Графика",description:"Изображение линиями",theory:`<h3>Графика</h3>
                  <p>Изображение линиями, штрихами, пятнами.</p>
                  <h4>Виды графики:</h4>
                  <ul>
                    <li><strong>Рисунок</strong> — карандаш, уголь</li>
                    <li><strong>Гравюра</strong> — печатное изображение</li>
                    <li><strong>Книжная иллюстрация</strong></li>
                  </ul>`,examples:["Что такое гравюра?","Чем рисунок отличается от картины?","Какие материалы для графики?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"art5-sec2",title:"Композиция",description:"Правила построения изображения",topics:[{id:"art5-sec2-top1",title:"Основы композиции",description:"Правила размещения",lessons:[{id:"art5-sec2-top1-les1",title:"Правила композиции",description:"Равновесие и центр",theory:`<h3>Основы композиции</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li><strong>Правило третей</strong> — делим лист на 9 частей</li>
                    <li><strong>Равновесие</strong> — крупные элементы уравновешиваются мелкими</li>
                    <li><strong>Выделение главного</strong> — центр композиции, размер, цвет</li>
                  </ul>`,examples:["Раздели лист по правилу третей","Найди центр композиции","Создай эскиз натюрморта"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"art5-q1",question:"Какой вид искусства использует краски?",options:["Графика","Живопись","Скульптура","Архитектура"],correctAnswer:1,explanation:"Живопись — это изображение цветными красками на плоскости.",difficulty:"easy",points:10},{id:"art5-q2",question:"Что такое правило третей?",options:["Деление листа на 2 части","Деление листа на 9 частей","Деление листа на 4 части","Деление листа на 3 части"],correctAnswer:1,explanation:"Правило третей — деление листа на 9 равных частей (3×3), главные объекты на пересечениях.",difficulty:"medium",points:15}]},{id:"music5",title:"Музыка",icon:(0,y.jsx)(eL,{className:"w-5 h-5"}),color:"text-violet-400",gradient:"from-violet-500 to-purple-500",description:"Основы музыкальной грамоты",sections:[{id:"music5-sec1",title:"Музыкальная грамота",description:"Ноты и ритм",topics:[{id:"music5-sec1-top1",title:"Нотная грамота",description:"Ноты и нотный стан",lessons:[{id:"music5-sec1-top1-les1",title:"Ноты",description:"Названия нот",theory:`<h3>Ноты</h3>
                  <h4>Названия нот:</h4>
                  <p>До, Ре, Ми, Фа, Соль, Ля, Си</p>
                  <h4>Нотный стан:</h4>
                  <p>5 линеек, на которых записываются ноты</p>
                  <h4>Скрипичный ключ:</h4>
                  <p>Знак, определяющий положение ноты Соль</p>`,examples:["Назови все ноты","Сколько линеек в нотном стане?","Что такое скрипичный ключ?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"music5-sec1-top1-les2",title:"Длительности нот",description:"Ритм",theory:`<h3>Длительности нот</h3>
                  <ul>
                    <li><strong>Целая</strong> — самая длинная</li>
                    <li><strong>Половинная</strong> — в 2 раза короче</li>
                    <li><strong>Четвертная</strong> — в 4 раза короче</li>
                    <li><strong>Восьмая</strong> — в 8 раз короче</li>
                  </ul>`,examples:["Какая нота самая длинная?","Сколько восьмых в четверти?","Определи длительность"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"music5-q1",question:"Сколько линеек в нотном стане?",options:["3","4","5","7"],correctAnswer:2,explanation:"Нотный стан состоит из 5 линеек.",difficulty:"easy",points:10},{id:"music5-q2",question:"Как называется первая нота?",options:["Ре","Ми","До","Фа"],correctAnswer:2,explanation:"Первая нота — До.",difficulty:"easy",points:10}]},{id:"pe5",title:"Физкультура",icon:(0,y.jsx)(eF,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-amber-500",description:"Физическая культура и спорт",sections:[{id:"pe5-sec1",title:"Физические упражнения",description:"Виды упражнений",topics:[{id:"pe5-sec1-top1",title:"Гимнастика",description:"Основные упражнения",lessons:[{id:"pe5-sec1-top1-les1",title:"Разминка",description:"Подготовка к занятиям",theory:`<h3>Разминка</h3>
                  <h4>Зачем нужна:</h4>
                  <ul>
                    <li>Разогрев мышц</li>
                    <li>Подготовка суставов</li>
                    <li>Профилактика травм</li>
                  </ul>
                  <h4>Упражнения:</h4>
                  <ul>
                    <li>Ходьба, бег</li>
                    <li>Наклоны, повороты</li>
                    <li>Вращения руками, ногами</li>
                  </ul>`,examples:["Зачем нужна разминка?","Какие упражнения для шеи?","Разогрей мышцы ног"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"pe5-q1",question:"Зачем нужна разминка?",options:["Для развлечения","Для разогрева мышц","Для отдыха","Для красоты"],correctAnswer:1,explanation:"Разминка нужна для разогрева мышц и профилактики травм.",difficulty:"easy",points:10}]},{id:"safety5",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-red-500",gradient:"from-red-600 to-red-500",description:"Основы безопасности жизнедеятельности",sections:[{id:"safety5-sec1",title:"Безопасность дома",description:"Правила поведения",topics:[{id:"safety5-sec1-top1",title:"Пожарная безопасность",description:"Правила при пожаре",lessons:[{id:"safety5-sec1-top1-les1",title:"Причины пожаров",description:"Профилактика",theory:`<h3>Причины пожаров</h3>
                  <h4>Основные причины:</h4>
                  <ul>
                    <li>Неосторожное обращение с огнём</li>
                    <li>Неисправная электропроводка</li>
                    <li>Оставленные без присмотра электроприборы</li>
                    <li>Детские игры с огнём</li>
                  </ul>
                  <h4>Профилактика:</h4>
                  <ul>
                    <li>Не играй со спичками</li>
                    <li>Не оставляй включённые приборы</li>
                    <li>Сообщай взрослым о неполадках</li>
                  </ul>`,examples:["Назови причины пожаров","Как предотвратить пожар?","Что делать при пожаре?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"safety5-sec1-top1-les2",title:"Действия при пожаре",description:"Правила эвакуации",theory:`<h3>При пожаре:</h3>
                  <ol>
                    <li>Не паникуй</li>
                    <li>Позови взрослых</li>
                    <li>Позвони 101 или 112</li>
                    <li>Покинь помещение</li>
                    <li>Не пользуйся лифтом</li>
                    <li>Пригнись, двигайся к выходу</li>
                  </ol>
                  <h4>Если дым:</h4>
                  <p>Дыши через влажную ткань, пригнись к полу</p>`,examples:["Какой номер пожарной службы?","Можно ли пользоваться лифтом?","Как защититься от дыма?"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"safety5-sec1-top2",title:"Безопасность на дороге",description:"Правила дорожного движения",lessons:[{id:"safety5-sec1-top2-les1",title:"Пешеход",description:"Правила для пешеходов",theory:`<h3>Правила пешехода</h3>
                  <h4>Переход дороги:</h4>
                  <ul>
                    <li>Переходи по зебре или подземному переходу</li>
                    <li>Смотри налево, затем направо</li>
                    <li>Убедись, что машины остановились</li>
                    <li>Не перебегай дорогу</li>
                  </ul>
                  <h4>Светофор:</h4>
                  <ul>
                    <li>Красный — стой</li>
                    <li>Жёлтый — жди</li>
                    <li>Зелёный — иди</li>
                  </ul>`,examples:["Как переходить дорогу?","Что означает красный сигнал?","Где можно переходить?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"safety5-q1",question:"Какой номер пожарной службы?",options:["01","101","112","Все верны"],correctAnswer:3,explanation:"Можно звонить 01, 101 или 112 — все номера верны.",difficulty:"easy",points:10},{id:"safety5-q2",question:"Что означает красный сигнал светофора?",options:["Иди","Жди","Стой","Беги"],correctAnswer:2,explanation:'Красный сигнал светофора означает "Стой" — переходить нельзя.',difficulty:"easy",points:10},{id:"safety5-q3",question:"Можно ли пользоваться лифтом при пожаре?",options:["Да","Нет","Только с взрослыми","Если нет дыма"],correctAnswer:1,explanation:"При пожаре нельзя пользоваться лифтом — можно застрять.",difficulty:"easy",points:10}]},{id:"informatics5",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Основы информатики",sections:[{id:"informatics5-sec1",title:"Компьютер",description:"Устройство компьютера",topics:[{id:"informatics5-sec1-top1",title:"Устройства компьютера",description:"Основные части",lessons:[{id:"informatics5-sec1-top1-les1",title:"Основные устройства",description:"Монитор, системный блок, клавиатура",theory:`<h3>Компьютер</h3>
                  <h4>Основные части:</h4>
                  <ul>
                    <li><strong>Системный блок</strong> — "мозг" компьютера</li>
                    <li><strong>Монитор</strong> — экран для вывода информации</li>
                    <li><strong>Клавиатура</strong> — для ввода текста</li>
                    <li><strong>Мышь</strong> — для управления</li>
                  </ul>
                  <h4>Дополнительные устройства:</h4>
                  <ul>
                    <li>Принтер — печать документов</li>
                    <li>Колонки — вывод звука</li>
                    <li>Наушники — звук для одного</li>
                  </ul>`,examples:["Назови основные части компьютера","Для чего нужна мышь?","Что делает принтер?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"informatics5-sec1-top1-les2",title:"Правила работы за компьютером",description:"Техника безопасности",theory:`<h3>Правила безопасности</h3>
                  <h4>До работы:</h4>
                  <ul>
                    <li>Проверь исправность оборудования</li>
                    <li>Сядь удобно</li>
                    <li>Расстояние до монитора 50-70 см</li>
                  </ul>
                  <h4>Во время работы:</h4>
                  <ul>
                    <li>Делай перерывы каждые 15-20 минут</li>
                    <li>Не трогай экран руками</li>
                    <li>Не ешь и не пей за компьютером</li>
                  </ul>`,examples:["Какое расстояние до монитора?","Как часто делать перерывы?","Почему нельзя есть за ПК?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"informatics5-sec2",title:"Информация",description:"Виды информации",topics:[{id:"informatics5-sec2-top1",title:"Виды информации",description:"Текст, звук, изображение",lessons:[{id:"informatics5-sec2-top1-les1",title:"Что такое информация",description:"Определение и виды",theory:`<h3>Информация</h3>
                  <p>Информация — это сведения об окружающем мире.</p>
                  <h4>Виды информации:</h4>
                  <ul>
                    <li><strong>Текстовая</strong> — буквы, слова, тексты</li>
                    <li><strong>Числовая</strong> — числа, цифры</li>
                    <li><strong>Графическая</strong> — картинки, фото</li>
                    <li><strong>Звуковая</strong> — музыка, речь</li>
                    <li><strong>Видеоинформация</strong> — видео</li>
                  </ul>`,examples:["Какие виды информации?","К какому виду относится фото?","Что такое текстовая информация?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"informatics5-q1",question:"Какое устройство выводит информацию на экран?",options:["Клавиатура","Мышь","Монитор","Принтер"],correctAnswer:2,explanation:"Монитор — устройство для вывода информации на экран.",difficulty:"easy",points:10},{id:"informatics5-q2",question:"Какое расстояние должно быть до монитора?",options:["10-20 см","30-40 см","50-70 см","1 метр"],correctAnswer:2,explanation:"Рекомендуемое расстояние до монитора — 50-70 см.",difficulty:"easy",points:10},{id:"informatics5-q3",question:"К какому виду относится фотография?",options:["Текстовая","Числовая","Графическая","Звуковая"],correctAnswer:2,explanation:"Фотография — это графическая информация.",difficulty:"easy",points:10}]}]},eJ={id:6,name:"6 класс",shortName:"6 кл.",subjects:[{id:"math6",title:"Математика",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-indigo-500",description:"Отрицательные числа, пропорции",sections:[{id:"math6-sec1",title:"Положительные и отрицательные числа",description:"Координаты на прямой, модуль",topics:[{id:"math6-sec1-top1",title:"Координатная прямая",description:"Положительные и отрицательные числа",lessons:[{id:"math6-sec1-top1-les1",title:"Что такое координатная прямая",description:"Определение и построение",theory:`<h3>Координатная прямая</h3>
                  <h4>Элементы:</h4>
                  <ul>
                    <li><strong>Точка O (ноль)</strong> — начало отсчёта</li>
                    <li><strong>Справа от нуля</strong> — положительные числа</li>
                    <li><strong>Слева от нуля</strong> — отрицательные числа</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>←... -3  -2  -1  0  1  2  3 ...→</p>`,examples:["Отметь на прямой -3","Какое число правее: -2 или 1?","Построй координатную прямую"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"math6-sec1-top1-les2",title:"Модуль числа",description:"Определение модуля",theory:`<h3>Модуль числа</h3>
                  <p>Модуль — это расстояние от начала отсчёта до точки на координатной прямой.</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>|5| = 5</li>
                    <li>|-5| = 5</li>
                    <li>|0| = 0</li>
                  </ul>
                  <p>Модуль всегда положителен или равен нулю!</p>`,examples:["Найди модуль: |-12|","Найди |0|","Сравни: |-3| и |3|"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"math6-sec1-top2",title:"Сравнение чисел",description:"Правила сравнения",lessons:[{id:"math6-sec1-top2-les1",title:"Сравнение отрицательных чисел",description:"Правила сравнения",theory:`<h3>Сравнение чисел</h3>
                  <h4>Правила:</h4>
                  <ul>
                    <li>Любое положительное больше любого отрицательного</li>
                    <li>Нуль больше любого отрицательного</li>
                    <li>Из двух отрицательных больше то, у которого модуль меньше</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>-3 > -7, так как |-3| < |-7|</p>
                  <p>5 > -10</p>
                  <p>0 > -5</p>`,examples:["Сравни: -5 и -2","Сравни: -3 и 3","Какое число больше: -1 или -100?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"math6-sec2",title:"Пропорции",description:"Отношения и пропорции",topics:[{id:"math6-sec2-top1",title:"Отношения",description:"Что такое отношение",lessons:[{id:"math6-sec2-top1-les1",title:"Понятие отношения",description:"Частное двух чисел",theory:`<h3>Отношение</h3>
                  <p>Отношение — это частное двух чисел.</p>
                  <h4>Пример:</h4>
                  <p>Отношение 6 к 2: 6 : 2 = 3 или 6/2 = 3</p>
                  <h4>Свойство:</h4>
                  <p>Отношение не изменится, если оба числа умножить или разделить на одно и то же число.</p>`,examples:["Найди отношение 10 к 2","Найди 12 : 4","Что показывает отношение?"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"math6-sec2-top2",title:"Пропорция",description:"Основное свойство пропорции",lessons:[{id:"math6-sec2-top2-les1",title:"Что такое пропорция",description:"Равенство отношений",theory:`<h3>Пропорция</h3>
                  <p>Пропорция — равенство двух отношений.</p>
                  <p>a/b = c/d или a : b = c : d</p>
                  <h4>Основное свойство:</h4>
                  <p>Произведение крайних членов равно произведению средних.</p>
                  <p>a \xd7 d = b \xd7 c</p>
                  <h4>Пример:</h4>
                  <p>3/4 = 6/8 — проверка: 3 \xd7 8 = 4 \xd7 6 = 24 ✓</p>`,examples:["Проверь пропорцию: 2/3 = 8/12","Найди x: x/7 = 4/2","Составь пропорцию"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"math6-sec2-top2-les2",title:"Решение задач на пропорции",description:"Прямая пропорциональность",theory:`<h3>Прямая пропорциональность</h3>
                  <p>При увеличении одной величины другая увеличивается во столько же раз.</p>
                  <h4>Пример задачи:</h4>
                  <p>3 кг яблок стоят 150 руб. Сколько стоят 5 кг?</p>
                  <p>3 кг — 150 руб</p>
                  <p>5 кг — x руб</p>
                  <p>3/5 = 150/x</p>
                  <p>x = 5 \xd7 150 / 3 = 250 руб</p>`,examples:["Реши задачу на пропорцию","Найди неизвестный член","Составь пропорцию к задаче"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"math6-sec3",title:"Координаты",description:"Координатная плоскость",topics:[{id:"math6-sec3-top1",title:"Координатная плоскость",description:"Построение точек",lessons:[{id:"math6-sec3-top1-les1",title:"Декартовы координаты",description:"Оси координат",theory:`<h3>Координатная плоскость</h3>
                  <h4>Элементы:</h4>
                  <ul>
                    <li><strong>Ось X</strong> — горизонтальная ось (абсцисс)</li>
                    <li><strong>Ось Y</strong> — вертикальная ось (ординат)</li>
                    <li><strong>Начало координат</strong> — точка O(0, 0)</li>
                  </ul>
                  <h4>Координаты точки:</h4>
                  <p>A(x, y) — сначала x, потом y</p>
                  <p>Пример: A(3, 2) — 3 шага вправо, 2 вверх</p>`,examples:["Построй точку A(2, 3)","Определи координаты точки","Где находится точка (-2, 3)?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"math6-q1",question:"Чему равен модуль числа -7?",options:["-7","7","0","14"],correctAnswer:1,explanation:"Модуль числа — это его расстояние от нуля, всегда положительное. |-7| = 7.",difficulty:"easy",points:10},{id:"math6-q2",question:"Вычисли: -5 + 8",options:["-13","13","3","-3"],correctAnswer:2,explanation:"-5 + 8 = 3. Из большего модуля вычитаем меньший, ставим знак числа с большим модулем (+8).",difficulty:"medium",points:15},{id:"math6-q3",question:"Найди неизвестный член пропорции: x/3 = 8/6",options:["4","3","2","5"],correctAnswer:0,explanation:"x = (3 × 8)/6 = 24/6 = 4. Используем основное свойство пропорции.",difficulty:"medium",points:15},{id:"math6-q4",question:"Какое число больше: -3 или -7?",options:["-3","-7","Они равны","Нельзя сравнить"],correctAnswer:0,explanation:"-3 > -7, так как |-3| < |-7|. Из двух отрицательных чисел больше то, у которого модуль меньше.",difficulty:"easy",points:10}]},{id:"russian6",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Морфемика, орфография",sections:[{id:"russian6-sec1",title:"Морфемика",description:"Состав слова",topics:[{id:"russian6-sec1-top1",title:"Состав слова",description:"Корень, приставка, суффикс, окончание",lessons:[{id:"russian6-sec1-top1-les1",title:"Морфемы слова",description:"Части слова",theory:`<h3>Морфемы — части слова</h3>
                  <h4>Основа слова:</h4>
                  <p>Часть слова без окончания, выражает лексическое значение.</p>
                  <h4>Морфемы:</h4>
                  <ul>
                    <li><strong>Корень</strong> — главная часть, общая для родственных слов (вод-а, вод-ный)</li>
                    <li><strong>Приставка</strong> — перед корнем (при-ехал, вы-шел)</li>
                    <li><strong>Суффикс</strong> — после корня (дом-ик, стол-н-ый)</li>
                    <li><strong>Окончание</strong> — изменяемая часть (стол-а, стол-у)</li>
                  </ul>
                  <h4>Нулевое окончание:</h4>
                  <p>Когда окончание не выражено звуком: стол□, лес□</p>`,examples:['Выдели корень в слове "водолаз"',"Найди приставку","Разбери слово по составу"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian6-sec1-top1-les2",title:"Разбор слова по составу",description:"Порядок разбора",theory:`<h3>Порядок разбора:</h3>
                  <ol>
                    <li>Выдели окончание (измени форму слова)</li>
                    <li>Выдели основу (всё без окончания)</li>
                    <li>Выдели корень (подбери родственные слова)</li>
                    <li>Выдели приставку (перед корнем)</li>
                    <li>Выдели суффикс (после корня)</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>под-вод-н-ый (приставка-корень-суффикс-окончание)</p>`,examples:["Разбери: перевозчик","Разбери: школьник","Найди все морфемы"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"russian6-sec2",title:"Орфография",description:"Правописание",topics:[{id:"russian6-sec2-top1",title:"Чередующиеся гласные в корне",description:"Правила написания",lessons:[{id:"russian6-sec2-top1-les1",title:"Корни с чередованием",description:"-раст-/-ращ-/-рос-",theory:`<h3>Чередование гласных в корне</h3>
                  <h4>-раст-/-ращ-/-рос-:</h4>
                  <ul>
                    <li>Перед <strong>ст, щ</strong> — <strong>а</strong>: расти, выращивать</li>
                    <li>Перед <strong>с</strong> — <strong>о</strong>: росли, заросли</li>
                  </ul>
                  <h4>Исключения:</h4>
                  <p>Росток, ростовщик, Ростов, Ростислав — пишется о</p>`,examples:["Вставь букву: выр_щивать","Напиши правильно: р_сток","Объясни написание"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian6-sec2-top1-les2",title:"Корни -лаг-/-лож-, -кас-/-кос-",description:"Правила выбора гласной",theory:`<h3>-лаг-/-лож-</h3>
                  <ul>
                    <li>Перед <strong>ж</strong> — <strong>о</strong>: положить</li>
                    <li>Перед <strong>г</strong> — <strong>а</strong>: слагаемое</li>
                  </ul>
                  <h3>-кас-/-кос-</h3>
                  <ul>
                    <li>Перед <strong>а</strong> — <strong>с</strong>: касаться</li>
                    <li>Без <strong>а</strong> — <strong>о</strong>: коснуться</li>
                  </ul>
                  <h4>Исключение:</h4>
                  <p>Полог — пишется о</p>`,examples:["Вставь: пол_жить","Напиши: к_саться","Объясни выбор"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian6-sec2-top1-les3",title:"Корни -бер-/-бир-, -мер-/-мир-",description:"Выбор И или Е",theory:`<h3>Корни с И/Е</h3>
                  <h4>Правило:</h4>
                  <ul>
                    <li>Перед <strong>а</strong> — <strong>и</strong>: собирать, отмирать</li>
                    <li>Без <strong>а</strong> — <strong>е</strong>: соберёт, отмереть</li>
                  </ul>
                  <h4>Другие корни:</h4>
                  <ul>
                    <li>-пер-/-пир-: запирать — запереть</li>
                    <li>-дер-/-дир-: раздирать — раздерёт</li>
                    <li>-тер-/-тир-: стирать — стереть</li>
                  </ul>`,examples:["Вставь: соб_рать","Напиши: зап_реть","Выбери гласную"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"russian6-sec2-top2",title:"Приставки пре- и при-",description:"Значения приставок",lessons:[{id:"russian6-sec2-top2-les1",title:"Значения приставки ПРИ-",description:"Приближение, присоединение, близость",theory:`<h3>Приставка ПРИ- обозначает:</h3>
                  <ul>
                    <li><strong>Приближение</strong> (приехал, прилетел)</li>
                    <li><strong>Присоединение</strong> (приклеил, привязал)</li>
                    <li><strong>Близость</strong> (приморский, пришкольный)</li>
                    <li><strong>Неполное действие</strong> (присесть, приоткрыть)</li>
                  </ul>`,examples:["Объясни: пр_ехать","Значение в слове пр_школьный","Вставь букву"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian6-sec2-top2-les2",title:"Значения приставки ПРЕ-",description:"= очень или пере-",theory:`<h3>Приставка ПРЕ- обозначает:</h3>
                  <ul>
                    <li>= <strong>"очень"</strong> (прекрасный, премудрый)</li>
                    <li>= <strong>пере-</strong> (преградить = перегородить)</li>
                  </ul>
                  <h4>Сложные случаи (надо запомнить):</h4>
                  <p>Президент, претензия, привилегия, приоритет</p>`,examples:["Объясни: пр_красный","Замени: пр_градить","Вставь: пр_зидент"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"russian6-sec3",title:"Морфология",description:"Части речи",topics:[{id:"russian6-sec3-top1",title:"Имя числительное",description:"Количественные и порядковые",lessons:[{id:"russian6-sec3-top1-les1",title:"Виды числительных",description:"Количественные и порядковые",theory:`<h3>Имя числительное</h3>
                  <h4>Количественные (сколько?):</h4>
                  <ul>
                    <li>Целые: пять, двадцать</li>
                    <li>Дробные: одна вторая, три пятых</li>
                    <li>Собирательные: двое, трое</li>
                  </ul>
                  <h4>Порядковые (который?):</h4>
                  <p>пятый, двадцатый</p>`,examples:["Определи разряд: пятеро","Просклоняй: два","Образуй порядковое: пять"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"russian6-q1",question:"Какая морфема стоит перед корнем?",options:["Суффикс","Окончание","Приставка","Основа"],correctAnswer:2,explanation:"Приставка — это морфема, которая стоит перед корнем и служит для образования новых слов.",difficulty:"easy",points:10},{id:"russian6-q2",question:"В каком слове пишется И в корне?",options:["соб_ру","выр_щивать","к_саться","соб_рать"],correctAnswer:3,explanation:"Собирать — в корне -бер-/-бир- перед А пишется И: собирать, но соберёт.",difficulty:"medium",points:15},{id:"russian6-q3",question:"В каком слове пишется ПРИ-?",options:["пр_красный","пр_ехать","пр_градить","пр_восходить"],correctAnswer:1,explanation:"Приехать — приставка ПРИ- означает приближение.",difficulty:"medium",points:15}]},{id:"history6",title:"История Средних веков",icon:(0,y.jsx)(eD,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Феодализм, рыцари, крестовые походы",sections:[{id:"history6-sec1",title:"Раннее Средневековье",description:"Становление феодализма",topics:[{id:"history6-sec1-top1",title:"Средневековое общество",description:"Феодализм, сословия",lessons:[{id:"history6-sec1-top1-les1",title:"Феодализм",description:"Что такое феодализм",theory:`<h3>Феодализм</h3>
                  <p>Общественный строй, основанный на владении землёй (феодом).</p>
                  <h4>Сословия:</h4>
                  <ul>
                    <li><strong>Духовенство</strong> — церковные служители (молиться)</li>
                    <li><strong>Дворянство</strong> — рыцари, феодалы (воевать)</li>
                    <li><strong>Крестьяне</strong> — земледельцы (работать)</li>
                  </ul>`,examples:["Что такое феод?","Какие были сословия?","Объясни вассалитет"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"history6-sec1-top1-les2",title:"Феодальная лестница",description:"Иерархия власти",theory:`<h3>Феодальная лестница</h3>
                  <h4>Иерархия:</h4>
                  <p>Король → Герцоги → Графы → Бароны → Рыцари</p>
                  <h4>Вассалитет:</h4>
                  <p>Вассал служит сеньору, получает землю и защиту.</p>
                  <p>\xabВассал моего вассала — не мой вассал\xbb</p>`,examples:["Кто на вершине лестницы?","Что такое вассал?","Какие обязанности у вассала?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"history6-sec2",title:"Расцвет Средневековья",description:"Крестовые походы",topics:[{id:"history6-sec2-top1",title:"Крестовые походы",description:"Походы на Иерусалим",lessons:[{id:"history6-sec2-top1-les1",title:"Причины и цели походов",description:"Почему начались походы",theory:`<h3>Крестовые походы (1096-1270)</h3>
                  <h4>Причины:</h4>
                  <ul>
                    <li>Освободить Святую землю (Иерусалим) от мусульман</li>
                    <li>Расширить владения церкви</li>
                    <li>Найти богатства</li>
                  </ul>
                  <h4>Первый поход (1096-1099):</h4>
                  <p>Захват Иерусалима, создание крестоносных государств.</p>`,examples:["Почему начались крестовые походы?","Что такое Святая земля?","Когда был первый поход?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"history6-sec2-top1-les2",title:"Последствия крестовых походов",description:"Итоги для Европы",theory:`<h3>Последствия:</h3>
                  <ul>
                    <li>Развитие торговли (пряности, шёлк)</li>
                    <li>Ослабление феодалов</li>
                    <li>Усиление королевской власти</li>
                    <li>Культурный обмен Востока и Запада</li>
                  </ul>`,examples:["Какие были последствия?","Что стало с торговлей?","Как изменилась власть королей?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"history6-q1",question:"Кто находился на вершине феодальной лестницы?",options:["Рыцарь","Барон","Король","Герцог"],correctAnswer:2,explanation:"Король был на вершине феодальной лестницы, все остальные были его вассалами прямо или косвенно.",difficulty:"easy",points:10},{id:"history6-q2",question:"Какую цель преследовали крестоносцы?",options:["Завоевать Рим","Освободить Иерусалим","Открыть Америку","Покорить Китай"],correctAnswer:1,explanation:"Главной целью крестовых походов было освобождение Иерусалима и Святой земли от мусульман.",difficulty:"easy",points:10},{id:"history6-q3",question:"Какой город был главной целью крестоносцев?",options:["Рим","Константинополь","Иерусалим","Париж"],correctAnswer:2,explanation:"Иерусалим — Святой город, который крестоносцы хотели освободить от мусульман.",difficulty:"easy",points:10}]},{id:"bio6",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Растения, животные, грибы",sections:[{id:"bio6-sec1",title:"Растения",description:"Строение и жизнедеятельность",topics:[{id:"bio6-sec1-top1",title:"Фотосинтез",description:"Как растения создают пищу",lessons:[{id:"bio6-sec1-top1-les1",title:"Что такое фотосинтез",description:"Процесс создания органических веществ",theory:`<h3>Фотосинтез</h3>
                  <p>Процесс создания органических веществ из неорганических с помощью энергии света.</p>
                  <h4>Уравнение:</h4>
                  <p>6CO₂ + 6H₂O + свет → C₆H₁₂O₆ + 6O₂</p>
                  <h4>Где происходит:</h4>
                  <ul>
                    <li>В хлоропластах</li>
                    <li>В зелёных частях растений</li>
                  </ul>`,examples:["Где происходит фотосинтез?","Что нужно для фотосинтеза?","Почему растения зелёные?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"bio6-sec1-top1-les2",title:"Значение фотосинтеза",description:"Роль в природе",theory:`<h3>Значение фотосинтеза</h3>
                  <h4>Для растений:</h4>
                  <p>Создание питательных веществ</p>
                  <h4>Для природы:</h4>
                  <ul>
                    <li>Выделение кислорода</li>
                    <li>Поглощение углекислого газа</li>
                    <li>Круговорот веществ</li>
                  </ul>`,examples:["Какой газ выделяется?","Что поглощают растения?","Почему важен фотосинтез?"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"bio6-sec1-top2",title:"Строение растений",description:"Органы растения",lessons:[{id:"bio6-sec1-top2-les1",title:"Вегетативные органы",description:"Корень, стебель, лист",theory:`<h3>Вегетативные органы</h3>
                  <ul>
                    <li><strong>Корень</strong> — закрепление, всасывание воды и минералов</li>
                    <li><strong>Стебель</strong> — опора, проведение веществ</li>
                    <li><strong>Лист</strong> — фотосинтез, газообмен, испарение</li>
                  </ul>`,examples:["Какие органы вегетативные?","Функция корня?","Что делает лист?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"bio6-sec1-top2-les2",title:"Генеративные органы",description:"Цветок, плод, семя",theory:`<h3>Генеративные органы</h3>
                  <ul>
                    <li><strong>Цветок</strong> — орган размножения</li>
                    <li><strong>Плод</strong> — защита и распространение семян</li>
                    <li><strong>Семя</strong> — зачаток нового растения</li>
                  </ul>
                  <h4>Строение цветка:</h4>
                  <p>Тычинки + Пестик + Лепестки + Чашелистики</p>`,examples:["Какие органы генеративные?","Из чего состоит цветок?","Функция плода?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"bio6-sec2",title:"Животные",description:"Многообразие животных",topics:[{id:"bio6-sec2-top1",title:"Одноклеточные и многоклеточные",description:"Классификация животных",lessons:[{id:"bio6-sec2-top1-les1",title:"Одноклеточные животные",description:"Амёба, инфузория",theory:`<h3>Одноклеточные</h3>
                  <h4>Амёба:</h4>
                  <ul>
                    <li>Не имеет постоянной формы</li>
                    <li>Перемещается ложноножками</li>
                    <li>Питание: заглатывание пищи</li>
                  </ul>
                  <h4>Инфузория-туфелька:</h4>
                  <ul>
                    <li>Постоянная форма</li>
                    <li>Перемещение ресничками</li>
                  </ul>`,examples:["Чем амёба отличается от инфузории?","Как питается амёба?","Что такое реснички?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"bio6-sec3",title:"Грибы",description:"Особое царство",topics:[{id:"bio6-sec3-top1",title:"Строение грибов",description:"Грибница и плодовое тело",lessons:[{id:"bio6-sec3-top1-les1",title:"Шляпочные грибы",description:"Строение и питание",theory:`<h3>Шляпочные грибы</h3>
                  <h4>Строение:</h4>
                  <ul>
                    <li><strong>Грибница (мицелий)</strong> — под землёй</li>
                    <li><strong>Плодовое тело</strong> — шляпка и ножка</li>
                  </ul>
                  <h4>Питание:</h4>
                  <p>Гетеротрофы — готовы органические вещества</p>
                  <h4>Симбиоз:</h4>
                  <p>Грибокорень — гриб + корень дерева</p>`,examples:["Из чего состоит гриб?","Что такое грибница?","Как питаются грибы?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"bio6-q1",question:"Какой газ выделяется при фотосинтезе?",options:["Углекислый газ","Азот","Кислород","Водород"],correctAnswer:2,explanation:"При фотосинтезе растения поглощают CO₂ и выделяют O₂ — кислород, необходимый для дыхания.",difficulty:"easy",points:10},{id:"bio6-q2",question:"Какой орган растения выполняет фотосинтез?",options:["Корень","Стебель","Лист","Корень"],correctAnswer:2,explanation:"Лист — главный орган фотосинтеза, содержит хлорофилл в клетках мякоти листа.",difficulty:"easy",points:10},{id:"bio6-q3",question:"Что такое грибница?",options:["Шляпка гриба","Ножка гриба","Подземная часть гриба","Споры гриба"],correctAnswer:2,explanation:"Грибница (мицелий) — подземная часть гриба, состоящая из тонких нитей.",difficulty:"easy",points:10}]},{id:"geo6",title:"География",icon:(0,y.jsx)(eQ,{className:"w-5 h-5"}),color:"text-teal-400",gradient:"from-teal-500 to-cyan-500",description:"Материки и океаны",sections:[{id:"geo6-sec1",title:"Гидросфера",description:"Реки, озёра, океаны",topics:[{id:"geo6-sec1-top1",title:"Мировой океан",description:"Океаны и моря",lessons:[{id:"geo6-sec1-top1-les1",title:"Состав гидросферы",description:"Вода на Земле",theory:`<h3>Гидросфера</h3>
                  <p>Водная оболочка Земли, составляет 71% поверхности планеты.</p>
                  <h4>Состав гидросферы:</h4>
                  <ul>
                    <li><strong>Мировой океан</strong> — 96% воды (солёная)</li>
                    <li><strong>Подземные воды</strong> — 2%</li>
                    <li><strong>Ледники</strong> — 1,7%</li>
                    <li><strong>Реки и озёра</strong> — 0,02%</li>
                  </ul>`,examples:["Сколько % воды в океанах?","Какая вода в океанах?","Назови состав гидросферы"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"geo6-sec1-top1-les2",title:"Океаны Земли",description:"Названия океанов",theory:`<h3>Океаны</h3>
                  <h4>Пять океанов:</h4>
                  <ul>
                    <li><strong>Тихий</strong> — самый большой</li>
                    <li><strong>Атлантический</strong> — второй по размеру</li>
                    <li><strong>Индийский</strong></li>
                    <li><strong>Северный Ледовитый</strong></li>
                    <li><strong>Южный</strong> (Антарктический)</li>
                  </ul>`,examples:["Какой океан самый большой?","Назови все океаны","Где находится Индийский океан?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"geo6-sec2",title:"Атмосфера",description:"Климат и погода",topics:[{id:"geo6-sec2-top1",title:"Строение атмосферы",description:"Слои атмосферы",lessons:[{id:"geo6-sec2-top1-les1",title:"Состав атмосферы",description:"Газы в воздухе",theory:`<h3>Атмосфера Земли</h3>
                  <p>Воздушная оболочка Земли.</p>
                  <h4>Состав:</h4>
                  <ul>
                    <li><strong>Азот</strong> — 78%</li>
                    <li><strong>Кислород</strong> — 21%</li>
                    <li><strong>Другие газы</strong> — 1%</li>
                  </ul>`,examples:["Какой газ преобладает?","Сколько кислорода?","Что такое атмосфера?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"geo6-sec2-top1-les2",title:"Слои атмосферы",description:"Тропосфера, стратосфера",theory:`<h3>Слои атмосферы</h3>
                  <ul>
                    <li><strong>Тропосфера</strong> (до 10-18 км) — погода, облака</li>
                    <li><strong>Стратосфера</strong> (до 50 км) — озоновый слой</li>
                    <li><strong>Мезосфера</strong> (до 80 км)</li>
                    <li><strong>Термосфера</strong> (до 800 км) — северное сияние</li>
                  </ul>`,examples:["Где находится озоновый слой?","Где формируется погода?","Что такое тропосфера?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"geo6-sec2-top2",title:"Погода и климат",description:"Различия и элементы",lessons:[{id:"geo6-sec2-top2-les1",title:"Погода и климат",description:"Определения",theory:`<h3>Погода и климат</h3>
                  <h4>Погода:</h4>
                  <p>Состояние атмосферы в данный момент и в данном месте.</p>
                  <h4>Климат:</h4>
                  <p>Многолетний режим погоды в определённой местности.</p>
                  <h4>Элементы погоды:</h4>
                  <p>Температура, давление, влажность, ветер, осадки</p>`,examples:["В чём разница погоды и климата?","Назови элементы погоды","Что такое климат?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"geo6-sec3",title:"Биосфера",description:"Живая оболочка Земли",topics:[{id:"geo6-sec3-top1",title:"Биосфера",description:"Живая оболочка Земли",lessons:[{id:"geo6-sec3-top1-les1",title:"Границы биосферы",description:"Учение Вернадского",theory:`<h3>Биосфера</h3>
                  <p>Оболочка Земли, населённая живыми организмами.</p>
                  <h4>Границы:</h4>
                  <ul>
                    <li><strong>Верхняя</strong> — до 20-25 км (озоновый слой)</li>
                    <li><strong>Нижняя</strong> — до 3 км вглубь земли</li>
                    <li><strong>В океане</strong> — до 11 км глубины</li>
                  </ul>
                  <h4>В.И. Вернадский:</h4>
                  <p>Создал учение о биосфере</p>`,examples:["Кто создал учение о биосфере?","Каковы границы биосферы?","Что такое биосфера?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"geo6-q1",question:"Сколько процентов воды содержится в Мировом океане?",options:["71%","96%","50%","80%"],correctAnswer:1,explanation:"Мировой океан содержит около 96% всей воды на Земле.",difficulty:"easy",points:10},{id:"geo6-q2",question:"Какой газ составляет основную часть атмосферы?",options:["Кислород","Азот","Углекислый газ","Аргон"],correctAnswer:1,explanation:"Азот составляет около 78% атмосферы, кислород — около 21%.",difficulty:"easy",points:10},{id:"geo6-q3",question:"Кто создал учение о биосфере?",options:["Менделеев","Вернадский","Дарвин","Ломоносов"],correctAnswer:1,explanation:"В.И. Вернадский создал учение о биосфере как оболочке Земли, преобразуемой живыми организмами.",difficulty:"medium",points:15}]},{id:"literature6",title:"Литература",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Русская классика, поэзия",sections:[{id:"literature6-sec1",title:"Русская классика",description:"Произведения русских писателей",topics:[{id:"literature6-sec1-top1",title:"А.С. Пушкин",description:"Жизнь и творчество",lessons:[{id:"literature6-sec1-top1-les1",title:"Биография Пушкина",description:"Жизнь поэта",theory:`<h3>Александр Сергеевич Пушкин (1799-1837)</h3>
                  <p>Величайший русский поэт, основатель современного русского литературного языка.</p>
                  <h4>Биография:</h4>
                  <ul>
                    <li>Родился в Москве, учился в Царскосельском лицее</li>
                    <li>Ссылка на юг, затем в Михайловское</li>
                    <li>Погиб на дуэли с Дантесом</li>
                  </ul>`,examples:["Назови годы жизни Пушкина","Где учился Пушкин?","Как погиб поэт?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"literature6-sec1-top1-les2",title:"Произведения Пушкина",description:"Дубровский, Капитанская дочка",theory:`<h3>Произведения 6 класса</h3>
                  <h4>"Дубровский":</h4>
                  <p>Роман о благородном разбойнике Владимире Дубровском.</p>
                  <h4>"Капитанская дочка":</h4>
                  <p>Исторический роман о Пугачёвском восстании.</p>
                  <h4>Сказки:</h4>
                  <p>"Сказка о мёртвой царевне", "Сказка о золотом петушке"</p>`,examples:['О чём роман "Дубровский"?','Главная тема "Капитанской дочки"?',"Назови сказки Пушкина"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"literature6-sec1-top2",title:"М.Ю. Лермонтов",description:"Поэзия и проза",lessons:[{id:"literature6-sec1-top2-les1",title:"Биография Лермонтова",description:"Жизнь поэта",theory:`<h3>Михаил Юрьевич Лермонтов (1814-1841)</h3>
                  <p>Русский поэт, прозаик и драматург.</p>
                  <h4>Биография:</h4>
                  <ul>
                    <li>Рос без матери, воспитывался бабушкой</li>
                    <li>Учился в Московском университете</li>
                    <li>Погиб на дуэли в 26 лет</li>
                  </ul>`,examples:["Когда родился Лермонтов?","Как он воспитывался?","Как погиб поэт?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"literature6-sec1-top2-les2",title:"Произведения Лермонтова",description:"Бородино, Мцыри",theory:`<h3>Известные произведения</h3>
                  <h4>"Бородино":</h4>
                  <p>Стихотворение о войне 1812 года.</p>
                  <h4>"Парус":</h4>
                  <p>Лирическое стихотворение об одиночестве.</p>
                  <h4>"Мцыри":</h4>
                  <p>Поэма о свободолюбивом юноше.</p>`,examples:['О чём "Бородино"?','Тема "Паруса"?',"Кто такой Мцыри?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"literature6-sec2",title:"Поэзия",description:"Стихотворения",topics:[{id:"literature6-sec2-top1",title:"Н.В. Гоголь",description:"Сатира и юмор",lessons:[{id:"literature6-sec2-top1-les1",title:"Биография Гоголя",description:"Жизнь писателя",theory:`<h3>Николай Васильевич Гоголь (1809-1852)</h3>
                  <p>Русский писатель, мастер сатиры и мистики.</p>
                  <h4>Биография:</h4>
                  <ul>
                    <li>Родился на Украине</li>
                    <li>Жил в Петербурге, затем за границей</li>
                  </ul>`,examples:["Где родился Гоголь?","Какие жанры писал?","Назови произведения"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"literature6-sec2-top1-les2",title:"Произведения Гоголя",description:"Ночь перед Рождеством, Тарас Бульба",theory:`<h3>Произведения 6 класса</h3>
                  <h4>"Ночь перед Рождеством":</h4>
                  <p>Повесть из цикла "Вечера на хуторе близ Диканьки".</p>
                  <h4>"Тарас Бульба":</h4>
                  <p>Повесть о запорожских казаках.</p>
                  <h4>Особенности:</h4>
                  <p>Юмор, украинский колорит, мастерство портрета.</p>`,examples:['О чём "Тарас Бульба"?',"Особенность юмора Гоголя?",'В каком цикле "Ночь перед Рождеством"?'],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"literature6-q1",question:"В каком году родился А.С. Пушкин?",options:["1799","1809","1814","1790"],correctAnswer:0,explanation:"Александр Сергеевич Пушкин родился 6 июня 1799 года в Москве.",difficulty:"easy",points:10},{id:"literature6-q2",question:'Кто написал стихотворение "Бородино"?',options:["Пушкин","Гоголь","Лермонтов","Тургенев"],correctAnswer:2,explanation:'Стихотворение "Бородино" о войне 1812 года написал М.Ю. Лермонтов в 1837 году.',difficulty:"easy",points:10},{id:"literature6-q3",question:"В каком произведении Гоголя действуют запорожские казаки?",options:["Ночь перед Рождеством","Тарас Бульба","Мёртвые души","Ревизор"],correctAnswer:1,explanation:'"Тарас Бульба" — историческая повесть Гоголя о запорожских казаках.',difficulty:"medium",points:15}]},{id:"foreign6",title:"Иностранный язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-sky-400",gradient:"from-sky-500 to-blue-500",description:"Английский язык",sections:[{id:"foreign6-sec1",title:"Грамматика",description:"Времена и конструкции",topics:[{id:"foreign6-sec1-top1",title:"Present Continuous",description:"Настоящее продолженное",lessons:[{id:"foreign6-sec1-top1-les1",title:"Образование Present Continuous",description:"Формула времени",theory:`<h3>Present Continuous</h3>
                  <p>Действие, происходящее в данный момент.</p>
                  <h4>Формула:</h4>
                  <p>am/is/are + V-ing</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>I am reading now. — Я читаю сейчас.</li>
                    <li>She is sleeping. — Она спит.</li>
                    <li>They are playing. — Они играют.</li>
                  </ul>`,examples:["Образуй: He (read) now","Переведи: Я пишу","Вставь: We ___ watching TV"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"foreign6-sec1-top2",title:"Past Simple",description:"Прошедшее простое",lessons:[{id:"foreign6-sec1-top2-les1",title:"Правильные глаголы",description:"Окончание -ed",theory:`<h3>Past Simple</h3>
                  <p>Действие, которое произошло в прошлом.</p>
                  <h4>Правильные глаголы:</h4>
                  <p>Добавляем -ed: work → worked, play → played</p>
                  <h4>Неправильные глаголы:</h4>
                  <p>Запомнить формы: go → went, see → saw</p>`,examples:["Образуй: play в Past Simple","Переведи: Я играл вчера","Найди неправильный глагол"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"foreign6-sec2",title:"Лексика",description:"Тематическая лексика",topics:[{id:"foreign6-sec2-top1",title:"Времена года и погода",description:"Seasons and Weather",lessons:[{id:"foreign6-sec2-top1-les1",title:"Seasons",description:"Времена года",theory:`<h3>Seasons</h3>
                  <ul>
                    <li><strong>Winter</strong> — зима</li>
                    <li><strong>Spring</strong> — весна</li>
                    <li><strong>Summer</strong> — лето</li>
                    <li><strong>Autumn</strong> — осень</li>
                  </ul>
                  <h4>Months:</h4>
                  <p>December, January, February — зима</p>`,examples:["Переведи: зима","Назови летние месяцы","Какой сейчас сезон?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"foreign6-sec2-top1-les2",title:"Weather",description:"Погода",theory:`<h3>Weather</h3>
                  <ul>
                    <li><strong>It's sunny</strong> — солнечно</li>
                    <li><strong>It's rainy</strong> — дождливо</li>
                    <li><strong>It's snowy</strong> — снежно</li>
                    <li><strong>It's windy</strong> — ветрено</li>
                    <li><strong>It's cloudy</strong> — облачно</li>
                  </ul>
                  <h4>Вопрос:</h4>
                  <p>What is the weather like today?</p>`,examples:["Переведи: солнечно","Как спросить о погоде?","Опиши погоду"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"foreign6-sec2-top2",title:"Мой дом",description:"My House",lessons:[{id:"foreign6-sec2-top2-les1",title:"Rooms",description:"Комнаты",theory:`<h3>Rooms</h3>
                  <ul>
                    <li><strong>Living room</strong> — гостиная</li>
                    <li><strong>Bedroom</strong> — спальня</li>
                    <li><strong>Kitchen</strong> — кухня</li>
                    <li><strong>Bathroom</strong> — ванная</li>
                  </ul>`,examples:["Переведи: кухня","Где ты спишь?","Опиши свою комнату"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"foreign6-q1",question:'Как переводится "It\'s rainy"?',options:["Солнечно","Дождливо","Ветрено","Снежно"],correctAnswer:1,explanation:"Rainy — дождливый. It's rainy = Дождливо.",difficulty:"easy",points:10},{id:"foreign6-q2",question:'Что означает "bedroom"?',options:["Кухня","Ванная","Спальня","Гостиная"],correctAnswer:2,explanation:"Bedroom — спальня (bed — кровать + room — комната).",difficulty:"easy",points:10},{id:"foreign6-q3",question:"Выбери правильную форму Present Continuous:",options:["I read","I am reading","I reads","I reading"],correctAnswer:1,explanation:"Present Continuous: am/is/are + V-ing. I am reading — Я читаю сейчас.",difficulty:"medium",points:15}]},{id:"art6",title:"ИЗО",icon:(0,y.jsx)(ez,{className:"w-5 h-5"}),color:"text-rose-400",gradient:"from-rose-500 to-pink-500",description:"Изобразительное искусство",sections:[{id:"art6-sec1",title:"Виды искусства",description:"Живопись, графика, скульптура",topics:[{id:"art6-sec1-top1",title:"Живопись и графика",description:"Виды изобразительного искусства",lessons:[{id:"art6-sec1-top1-les1",title:"Живопись",description:"Виды живописи",theory:`<h3>Живопись</h3>
                  <p>Создание изображений красками.</p>
                  <h4>Техники:</h4>
                  <ul>
                    <li><strong>Масло</strong> — картины на холсте</li>
                    <li><strong>Акварель</strong> — водяные краски</li>
                    <li><strong>Гуашь</strong> — густые краски</li>
                  </ul>`,examples:["Чем отличается живопись от графики?","Какие техники живописи?","Что такое акварель?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"art6-sec1-top1-les2",title:"Графика",description:"Рисунок и гравюра",theory:`<h3>Графика</h3>
                  <p>Изображение линиями, штрихами.</p>
                  <h4>Виды:</h4>
                  <ul>
                    <li><strong>Рисунок</strong> — карандаш, уголь</li>
                    <li><strong>Гравюра</strong> — печатное изображение</li>
                    <li><strong>Эскиз</strong> — предварительный набросок</li>
                  </ul>`,examples:["Что такое гравюра?","Чем рисунок от живописи?","Что такое эскиз?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"art6-sec2",title:"Древнерусское искусство",description:"Иконы и храмы",topics:[{id:"art6-sec2-top1",title:"Иконопись",description:"Русские иконы",lessons:[{id:"art6-sec2-top1-les1",title:"Андрей Рублёв",description:"Великий иконописец",theory:`<h3>Андрей Рублёв (XV век)</h3>
                  <p>Великий русский иконописец.</p>
                  <h4>"Троица":</h4>
                  <p>Самая известная икона — три ангела за столом.</p>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Гармония и покой</li>
                    <li>Светлые краски</li>
                    <li>Духовная глубина</li>
                  </ul>`,examples:["Кто такой Андрей Рублёв?",'Что такое "Троица"?',"Особенности икон Рублёва?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"art6-q1",question:'Кто написал икону "Троица"?',options:["Пушкин","Рублёв","Гоголь","Достоевский"],correctAnswer:1,explanation:'Андрей Рублёв — великий русский иконописец XV века, автор иконы "Троица".',difficulty:"medium",points:15},{id:"art6-q2",question:"Какая техника живописи использует водяные краски?",options:["Масло","Гуашь","Акварель","Гравюра"],correctAnswer:2,explanation:"Акварель — техника живописи водяными прозрачными красками.",difficulty:"easy",points:10}]},{id:"safety6",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-red-500",gradient:"from-red-600 to-red-500",description:"Основы безопасности жизнедеятельности",sections:[{id:"safety6-sec1",title:"Безопасность в городе",description:"Правила поведения",topics:[{id:"safety6-sec1-top1",title:"Транспортная безопасность",description:"Правила в транспорте",lessons:[{id:"safety6-sec1-top1-les1",title:"В общественном транспорте",description:"Автобус, трамвай, метро",theory:`<h3>Правила в транспорте</h3>
                  <h4>При посадке:</h4>
                  <ul>
                    <li>Жди полной остановки</li>
                    <li>Входи через заднюю дверь</li>
                    <li>Не толкайся</li>
                  </ul>
                  <h4>В транспорте:</h4>
                  <ul>
                    <li>Держись за поручень</li>
                    <li>Не отвлекай водителя</li>
                    <li>Уступай место пожилым</li>
                  </ul>`,examples:["Как входить в автобус?","Зачем держаться за поручень?","Кому уступать место?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"safety6-sec2",title:"Чрезвычайные ситуации",description:"Действия в ЧС",topics:[{id:"safety6-sec2-top1",title:"Землетрясение",description:"Правила при землетрясении",lessons:[{id:"safety6-sec2-top1-les1",title:"Действия при землетрясении",description:"Как защититься",theory:`<h3>При землетрясении:</h3>
                  <h4>Если ты в помещении:</h4>
                  <ul>
                    <li>Встань в дверной проём или углу</li>
                    <li>Держись подальше от окон</li>
                    <li>Не пользуйся лифтом</li>
                  </ul>
                  <h4>Если ты на улице:</h4>
                  <ul>
                    <li>Отойди от зданий</li>
                    <li>Не беги вдоль стен</li>
                    <li>Остерегайся падающих предметов</li>
                  </ul>`,examples:["Где укрыться в помещении?","Что делать на улице?","Можно ли использовать лифт?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"safety6-q1",question:"Как правильно входить в общественный транспорт?",options:["Через переднюю дверь","Через заднюю дверь","Через любую дверь","Через окна"],correctAnswer:1,explanation:"Входить в общественный транспорт нужно через заднюю дверь, выходить — через переднюю.",difficulty:"easy",points:10},{id:"safety6-q2",question:"Где лучше укрыться при землетрясении в помещении?",options:["У окна","В дверном проёме","На балконе","В лифте"],correctAnswer:1,explanation:"При землетрясении лучше укрыться в дверном проёме или углу, подальше от окон.",difficulty:"medium",points:15}]},{id:"informatics6",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Основы информатики",sections:[{id:"informatics6-sec1",title:"Алгоритмы",description:"Понятие алгоритма",topics:[{id:"informatics6-sec1-top1",title:"Что такое алгоритм",description:"Определение и свойства",lessons:[{id:"informatics6-sec1-top1-les1",title:"Понятие алгоритма",description:"Определение",theory:`<h3>Алгоритм</h3>
                  <p>Алгоритм — это последовательность действий для решения задачи.</p>
                  <h4>Свойства алгоритма:</h4>
                  <ul>
                    <li><strong>Понятность</strong> — каждый шаг понятен</li>
                    <li><strong>Определённость</strong> — один результат для одних данных</li>
                    <li><strong>Результативность</strong> — приводит к результату</li>
                    <li><strong>Массовость</strong> — подходит для многих задач</li>
                  </ul>`,examples:["Что такое алгоритм?","Назови свойства","Приведи пример алгоритма"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"informatics6-sec1-top1-les2",title:"Способы записи алгоритма",description:"Формы записи",theory:`<h3>Способы записи:</h3>
                  <ul>
                    <li><strong>Словесный</strong> — описание словами</li>
                    <li><strong>Блок-схема</strong> — графическое изображение</li>
                    <li><strong>Программа</strong> — на языке программирования</li>
                  </ul>
                  <h4>Блок-схема:</h4>
                  <ul>
                    <li>Овал — начало/конец</li>
                    <li>Прямоугольник — действие</li>
                    <li>Ромб — условие</li>
                  </ul>`,examples:["Какие способы записи?","Что означает овал?","Нарисуй простую блок-схему"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"informatics6-sec2",title:"Файлы и папки",description:"Работа с файлами",topics:[{id:"informatics6-sec2-top1",title:"Файловая система",description:"Организация файлов",lessons:[{id:"informatics6-sec2-top1-les1",title:"Файлы и папки",description:"Понятие файла",theory:`<h3>Файл</h3>
                  <p>Файл — это именованная область данных на диске.</p>
                  <h4>Имя файла:</h4>
                  <p>имя.расширение (например, document.txt)</p>
                  <h4>Папка:</h4>
                  <p>Контейнер для файлов и других папок.</p>
                  <h4>Расширения:</h4>
                  <ul>
                    <li>.txt — текстовый файл</li>
                    <li>.doc — документ Word</li>
                    <li>.jpg — изображение</li>
                  </ul>`,examples:["Что такое файл?","Для чего расширение?","Что такое папка?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"informatics6-q1",question:"Что такое алгоритм?",options:["Программа","Последовательность действий","Файл","Папка"],correctAnswer:1,explanation:"Алгоритм — это последовательность действий для решения задачи.",difficulty:"easy",points:10},{id:"informatics6-q2",question:"Какой фигурой обозначается действие в блок-схеме?",options:["Овал","Ромб","Прямоугольник","Круг"],correctAnswer:2,explanation:"В блок-схеме действие обозначается прямоугольником, условие — ромбом, начало/конец — овалом.",difficulty:"medium",points:15},{id:"informatics6-q3",question:"Что означает расширение .txt?",options:["Изображение","Текстовый файл","Программа","Видео"],correctAnswer:1,explanation:".txt — расширение текстового файла.",difficulty:"easy",points:10}]}]},eZ=(0,ef.default)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]),e0=(0,ef.default)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),e1=(0,ef.default)("flask-conical",[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]]),e4={id:7,name:"7 класс",shortName:"7 кл.",subjects:[{id:"algebra7",title:"Алгебра",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Уравнения, функции, формулы",sections:[{id:"algebra7-sec1",title:"Линейные уравнения",description:"Решение уравнений вида ax + b = 0",topics:[{id:"algebra7-sec1-top1",title:"Уравнения и их корни",description:"Что такое уравнение",lessons:[{id:"algebra7-sec1-top1-les1",title:"Понятие уравнения",description:"Определение и свойства",theory:`<h3>Уравнение</h3>
                  <p><strong>Уравнение</strong> — равенство, содержащее неизвестное число, обозначенное буквой.</p>
                  <h4>Корень уравнения:</h4>
                  <p>Значение неизвестного, при котором уравнение обращается в верное равенство.</p>
                  <h4>Пример:</h4>
                  <p>x + 5 = 12</p>
                  <p>Корень: x = 7, так как 7 + 5 = 12</p>
                  <h4>Что значит решить уравнение:</h4>
                  <p>Найти все его корни или доказать, что их нет.</p>`,examples:["Что такое корень уравнения?","Проверь: x = 3 корень уравнения 2x = 6?","Сколько корней может иметь уравнение?"],completed:!1,difficulty:"easy",estimatedTime:15},{id:"algebra7-sec1-top1-les2",title:"Линейные уравнения",description:"Уравнения вида ax + b = 0",theory:`<h3>Линейное уравнение</h3>
                  <p>Уравнение вида ax + b = 0, где a и b — числа, x — неизвестное.</p>
                  <h4>Алгоритм решения:</h4>
                  <ol>
                    <li>Раскрыть скобки (если есть)</li>
                    <li>Перенести слагаемые с x влево, без x — вправо</li>
                    <li>Привести подобные слагаемые</li>
                    <li>Разделить обе части на коэффициент при x</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>2x + 5 = 15 - 3x</p>
                  <p>2x + 3x = 15 - 5</p>
                  <p>5x = 10</p>
                  <p>x = 2</p>`,examples:["Реши: 3x - 7 = 8","Найди x: 5x + 10 = 0","Решите: 2(x - 3) = 10"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"algebra7-sec1-top2",title:"Решение задач уравнением",description:"Составление уравнений",lessons:[{id:"algebra7-sec1-top2-les1",title:"Задачи на составление уравнений",description:"Алгоритм решения задач",theory:`<h3>Решение задач уравнением</h3>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Обозначить неизвестное через x</li>
                    <li>Выразить другие величины через x</li>
                    <li>Составить уравнение по условию</li>
                    <li>Решить уравнение</li>
                    <li>Проверить ответ по условию задачи</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>В двух корзинах 30 яблок. В первой на 6 больше. Сколько в каждой?</p>
                  <p>Пусть x — во второй, тогда x + 6 — в первой.</p>
                  <p>x + (x + 6) = 30</p>
                  <p>2x = 24, x = 12</p>
                  <p>Ответ: 18 и 12 яблок.</p>`,examples:["Реши задачу про два числа","Составь уравнение: сумма равна 50","Задача на движение"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"algebra7-sec2",title:"Функции",description:"Линейная функция и её график",topics:[{id:"algebra7-sec2-top1",title:"Линейная функция",description:"Функция y = kx + b",lessons:[{id:"algebra7-sec2-top1-les1",title:"Что такое функция",description:"Определение функции",theory:`<h3>Функция</h3>
                  <p><strong>Функция</strong> — зависимость, при которой каждому значению x соответствует единственное значение y.</p>
                  <h4>Обозначение:</h4>
                  <p>y = f(x), где x — аргумент (независимая переменная), y — функция (зависимая переменная).</p>
                  <h4>Способы задания функции:</h4>
                  <ul>
                    <li>Формулой: y = 2x + 3</li>
                    <li>Таблицей</li>
                    <li>Графиком</li>
                    <li>Описанием</li>
                  </ul>`,examples:["Что такое аргумент функции?","Какие способы задания функции?","Найди значение f(2) для f(x) = 3x - 1"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"algebra7-sec2-top1-les2",title:"Линейная функция y = kx + b",description:"График — прямая",theory:`<h3>Линейная функция</h3>
                  <p>Функция вида y = kx + b называется линейной.</p>
                  <h4>График:</h4>
                  <p>График линейной функции — прямая линия.</p>
                  <h4>Коэффициенты:</h4>
                  <ul>
                    <li><strong>k</strong> — угловой коэффициент (наклон прямой)</li>
                    <li>k > 0: прямая возрастает</li>
                    <li>k < 0: прямая убывает</li>
                    <li><strong>b</strong> — точка пересечения с осью Y</li>
                  </ul>
                  <h4>Построение графика:</h4>
                  <p>Достаточно найти две точки и провести через них прямую.</p>`,examples:["Построй график y = 2x + 1","Найди k и b для y = -3x + 5","Определи знак k"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"algebra7-sec2-top2",title:"Системы линейных уравнений",description:"Решение систем",lessons:[{id:"algebra7-sec2-top2-les1",title:"Методы решения систем",description:"Подстановка и сложение",theory:`<h3>Системы линейных уравнений</h3>
                  <p>Система двух линейных уравнений с двумя неизвестными:</p>
                  <p>a₁x + b₁y = c₁</p>
                  <p>a₂x + b₂y = c₂</p>
                  <h4>Методы решения:</h4>
                  <ul>
                    <li><strong>Подстановка</strong>: выразить одну переменную через другую</li>
                    <li><strong>Сложение</strong>: сложить уравнения, исключив одну переменную</li>
                    <li><strong>Графический</strong>: найти точку пересечения прямых</li>
                  </ul>
                  <h4>Пример (метод сложения):</h4>
                  <p>x + y = 5</p>
                  <p>x - y = 1</p>
                  <p>Складываем: 2x = 6, x = 3</p>
                  <p>Подставляем: 3 + y = 5, y = 2</p>`,examples:["Реши систему методом сложения","Реши методом подстановки","Сколько решений имеет система?"],completed:!1,difficulty:"medium",estimatedTime:35}]}]},{id:"algebra7-sec3",title:"Формулы сокращённого умножения",description:"Квадрат суммы, разности, разность квадратов",topics:[{id:"algebra7-sec3-top1",title:"Квадрат суммы и разности",description:"Формулы (a±b)²",lessons:[{id:"algebra7-sec3-top1-les1",title:"Квадрат суммы",description:"(a + b)² = a² + 2ab + b²",theory:`<h3>Квадрат суммы</h3>
                  <p>(a + b)\xb2 = a\xb2 + 2ab + b\xb2</p>
                  <h4>Вывод:</h4>
                  <p>(a + b)\xb2 = (a + b)(a + b) = a\xb2 + ab + ab + b\xb2 = a\xb2 + 2ab + b\xb2</p>
                  <h4>Примеры:</h4>
                  <p>(x + 3)\xb2 = x\xb2 + 6x + 9</p>
                  <p>(2a + 5)\xb2 = 4a\xb2 + 20a + 25</p>
                  <h4>Для запоминания:</h4>
                  <p>\xabКвадрат суммы равен сумме квадратов плюс удвоенное произведение\xbb</p>`,examples:["Раскрой: (x + 3)²","Раскрой: (2a + 1)²","Вычисли: 41² = (40 + 1)²"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"algebra7-sec3-top1-les2",title:"Квадрат разности",description:"(a - b)² = a² - 2ab + b²",theory:`<h3>Квадрат разности</h3>
                  <p>(a - b)\xb2 = a\xb2 - 2ab + b\xb2</p>
                  <h4>Примеры:</h4>
                  <p>(x - 4)\xb2 = x\xb2 - 8x + 16</p>
                  <p>(3a - 2)\xb2 = 9a\xb2 - 12a + 4</p>
                  <h4>Сравнение формул:</h4>
                  <ul>
                    <li>(a + b)\xb2 = a\xb2 + 2ab + b\xb2</li>
                    <li>(a - b)\xb2 = a\xb2 - 2ab + b\xb2</li>
                  </ul>
                  <p>Различие только в знаке перед 2ab!</p>`,examples:["Раскрой: (a - 5)²","Раскрой: (3x - 2)²","Вычисли: 99² = (100 - 1)²"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"algebra7-sec3-top2",title:"Разность квадратов",description:"a² - b² = (a-b)(a+b)",lessons:[{id:"algebra7-sec3-top2-les1",title:"Формула разности квадратов",description:"Разложение на множители",theory:`<h3>Разность квадратов</h3>
                  <p>a\xb2 - b\xb2 = (a - b)(a + b)</p>
                  <h4>Применение:</h4>
                  <ul>
                    <li>Разложение на множители</li>
                    <li>Упрощение вычислений</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>x\xb2 - 9 = (x - 3)(x + 3)</p>
                  <p>16a\xb2 - 25 = (4a - 5)(4a + 5)</p>
                  <p>Вычислить: 57\xb2 - 43\xb2 = (57 - 43)(57 + 43) = 14 \xd7 100 = 1400</p>`,examples:["Разложи: x² - 16","Разложи: 25 - a²","Вычисли: 78² - 22²"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"algebra7-q1",question:"Решите уравнение: 2x + 5 = 15",options:["x = 5","x = 10","x = 7","x = 3"],correctAnswer:0,explanation:"2x + 5 = 15 → 2x = 10 → x = 5. Переносим 5 вправо и делим на 2.",difficulty:"easy",points:10},{id:"algebra7-q2",question:"Раскройте скобки: (x + 3)²",options:["x² + 6x + 9","x² + 9","x² + 3x + 9","x² + 6x + 3"],correctAnswer:0,explanation:"(x + 3)² = x² + 2·x·3 + 3² = x² + 6x + 9. Используем формулу (a + b)² = a² + 2ab + b².",difficulty:"easy",points:10},{id:"algebra7-q3",question:"Что показывает коэффициент k в функции y = kx + b?",options:["Точку пересечения с осью X","Угловой коэффициент (наклон)","Точку пересечения с осью Y","Длину прямой"],correctAnswer:1,explanation:"k — угловой коэффициент, показывает наклон прямой. При k > 0 функция возрастает, при k < 0 убывает.",difficulty:"medium",points:15},{id:"algebra7-q4",question:"Разложите на множители: x² - 25",options:["(x - 5)²","(x + 5)²","(x - 5)(x + 5)","(x - 25)(x + 1)"],correctAnswer:2,explanation:"x² - 25 = x² - 5² = (x - 5)(x + 5). Используем формулу разности квадратов.",difficulty:"medium",points:15}]},{id:"geometry7",title:"Геометрия",icon:(0,y.jsx)(ex,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Треугольники, теоремы, окружность",sections:[{id:"geometry7-sec1",title:"Треугольники",description:"Виды и свойства треугольников",topics:[{id:"geometry7-sec1-top1",title:"Виды треугольников",description:"Классификация по углам и сторонам",lessons:[{id:"geometry7-sec1-top1-les1",title:"Треугольник и его элементы",description:"Основные понятия",theory:`<h3>Треугольник</h3>
                  <p><strong>Треугольник</strong> — фигура, состоящая из трёх точек, не лежащих на одной прямой, и трёх отрезков, их соединяющих.</p>
                  <h4>Элементы треугольника:</h4>
                  <ul>
                    <li><strong>Вершины</strong> — точки A, B, C</li>
                    <li><strong>Стороны</strong> — отрезки AB, BC, AC</li>
                    <li><strong>Углы</strong> — ∠A, ∠B, ∠C</li>
                  </ul>
                  <h4>Периметр:</h4>
                  <p>P = AB + BC + AC</p>
                  <h4>Сумма углов:</h4>
                  <p>∠A + ∠B + ∠C = 180\xb0</p>`,examples:["Найди периметр треугольника со сторонами 3, 4, 5","Чему равна сумма углов треугольника?","Назови элементы треугольника ABC"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"geometry7-sec1-top1-les2",title:"Классификация треугольников",description:"По углам и сторонам",theory:`<h3>Виды по углам:</h3>
                  <ul>
                    <li><strong>Остроугольный</strong> — все углы острые (< 90\xb0)</li>
                    <li><strong>Прямоугольный</strong> — один угол 90\xb0</li>
                    <li><strong>Тупоугольный</strong> — один угол > 90\xb0</li>
                  </ul>
                  <h3>Виды по сторонам:</h3>
                  <ul>
                    <li><strong>Равносторонний</strong> — все стороны равны</li>
                    <li><strong>Равнобедренный</strong> — две стороны равны</li>
                    <li><strong>Разносторонний</strong> — все стороны разные</li>
                  </ul>
                  <h4>Неравенство треугольника:</h4>
                  <p>Каждая сторона меньше суммы двух других.</p>`,examples:["Определи вид треугольника с углами 30°, 60°, 90°","Может ли быть треугольник со сторонами 1, 2, 3?","Какой треугольник называется равнобедренным?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"geometry7-sec1-top2",title:"Медианы, биссектрисы, высоты",description:"Замечательные линии треугольника",lessons:[{id:"geometry7-sec1-top2-les1",title:"Медиана треугольника",description:"Линия, соединяющая вершину с серединой",theory:`<h3>Медиана</h3>
                  <p><strong>Медиана</strong> — отрезок, соединяющий вершину треугольника с серединой противоположной стороны.</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>Все три медианы пересекаются в одной точке</li>
                    <li>Точка пересечения делит медиану в отношении 2:1</li>
                    <li>Медиана делит треугольник на два равновеликих</li>
                  </ul>`,examples:["Построй медиану треугольника","В каком отношении делятся медианы?","Сколько медиан у треугольника?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"geometry7-sec2",title:"Признаки равенства",description:"Признаки равенства треугольников",topics:[{id:"geometry7-sec2-top1",title:"Три признака равенства",description:"Доказательство равенства треугольников",lessons:[{id:"geometry7-sec2-top1-les1",title:"Первый признак равенства",description:"По двум сторонам и углу",theory:`<h3>Первый признак</h3>
                  <p>Если две стороны и угол между ними одного треугольника соответственно равны двум сторонам и углу между ними другого треугольника, то такие треугольники равны.</p>
                  <h4>Кратко:</h4>
                  <p>По двум сторонам и углу между ними.</p>
                  <h4>Применение:</h4>
                  <p>Если в треугольниках ABC и A₁B₁C₁:</p>
                  <ul>
                    <li>AB = A₁B₁</li>
                    <li>AC = A₁C₁</li>
                    <li>∠A = ∠A₁</li>
                  </ul>
                  <p>То ΔABC = ΔA₁B₁C₁</p>`,examples:["Докажи равенство по 1 признаку","Какие элементы нужны?","Сформулируй 1 признак"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"geometry7-sec2-top1-les2",title:"Второй и третий признаки",description:"По стороне и двум углам, по трём сторонам",theory:`<h3>Второй признак</h3>
                  <p>Если сторона и два прилежащих к ней угла одного треугольника соответственно равны стороне и двум прилежащим углам другого, то треугольники равны.</p>
                  <h3>Третий признак</h3>
                  <p>Если три стороны одного треугольника соответственно равны трём сторонам другого, то треугольники равны.</p>
                  <h4>Что следует из равенства:</h4>
                  <p>Все соответствующие элементы равны: стороны, углы, медианы, биссектрисы, высоты.</p>`,examples:["Какой признак применить?","Найди равные элементы","Докажи равенство треугольников"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"geometry7-sec3",title:"Окружность",description:"Элементы окружности, касательная",topics:[{id:"geometry7-sec3-top1",title:"Окружность и круг",description:"Основные понятия",lessons:[{id:"geometry7-sec3-top1-les1",title:"Элементы окружности",description:"Радиус, диаметр, хорда",theory:`<h3>Окружность и круг</h3>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li><strong>Окружность</strong> — замкнутая линия, все точки которой равноудалены от центра</li>
                    <li><strong>Круг</strong> — часть плоскости, ограниченная окружностью</li>
                    <li><strong>Радиус (R)</strong> — отрезок от центра до любой точки окружности</li>
                    <li><strong>Диаметр (D = 2R)</strong> — хорда, проходящая через центр</li>
                    <li><strong>Хорда</strong> — отрезок, соединяющий две точки окружности</li>
                  </ul>
                  <h4>Длина окружности:</h4>
                  <p>C = 2πR = πD</p>
                  <h4>Площадь круга:</h4>
                  <p>S = πR\xb2</p>`,examples:["Найди длину окружности R=5","Площадь круга D=10","Чему равен диаметр, если R=7?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"geometry7-sec3-top1-les2",title:"Касательная к окружности",description:"Свойства касательной",theory:`<h3>Касательная</h3>
                  <p><strong>Касательная</strong> — прямая, имеющая одну общую точку с окружностью.</p>
                  <h4>Свойство касательной:</h4>
                  <p>Касательная перпендикулярна радиусу, проведённому в точку касания.</p>
                  <h4>Признак касательной:</h4>
                  <p>Если прямая проходит через точку окружности перпендикулярно радиусу, то она является касательной.</p>
                  <h4>Отрезки касательных:</h4>
                  <p>Отрезки касательных, проведённых из одной точки, равны.</p>`,examples:["Свойство касательной?","Докажи, что прямая — касательная","Найди длину отрезка касательной"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"geometry7-q1",question:"Чему равна сумма углов треугольника?",options:["90°","180°","270°","360°"],correctAnswer:1,explanation:"Сумма углов любого треугольника равна 180°. Это фундаментальное свойство евклидовой геометрии.",difficulty:"easy",points:10},{id:"geometry7-q2",question:"Какая прямая называется касательной к окружности?",options:["Проходящая через центр","Имеющая две общие точки","Имеющая одну общую точку","Пересекающая окружность"],correctAnswer:2,explanation:"Касательная — это прямая, имеющая ровно одну общую точку с окружностью. Она перпендикулярна радиусу в этой точке.",difficulty:"medium",points:15},{id:"geometry7-q3",question:"Какой признак равенства треугольников требует равенства трёх сторон?",options:["Первый","Второй","Третий","Четвёртый"],correctAnswer:2,explanation:"Третий признак: если три стороны одного треугольника равны трём сторонам другого, то треугольники равны.",difficulty:"medium",points:15}]},{id:"russian7",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Причастия, деепричастия, наречия",sections:[{id:"russian7-sec1",title:"Причастие",description:"Часть речи с признаками глагола и прилагательного",topics:[{id:"russian7-sec1-top1",title:"Понятие о причастии",description:"Признаки прилагательного и глагола",lessons:[{id:"russian7-sec1-top1-les1",title:"Что такое причастие",description:"Определение причастия",theory:`<h3>Причастие</h3>
                  <p><strong>Причастие</strong> — самостоятельная часть речи, обозначающая признак предмета по действию.</p>
                  <h4>Признаки прилагательного:</h4>
                  <ul>
                    <li>Обозначает признак</li>
                    <li>Изменяется по родам, числам, падежам</li>
                    <li>В предложении — определение или сказуемое</li>
                  </ul>
                  <h4>Признаки глагола:</h4>
                  <ul>
                    <li>Возвратность (-ся)</li>
                    <li>Вид (совершенный/несовершенный)</li>
                    <li>Время (настоящее/прошедшее)</li>
                  </ul>`,examples:["Найди причастие в предложении","Какие признаки глагола у причастия?","Какие признаки прилагательного?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"russian7-sec1-top1-les2",title:"Виды причастий",description:"Действительные и страдательные",theory:`<h3>Действительные причастия</h3>
                  <p>Обозначают признак того, кто сам совершает действие.</p>
                  <ul>
                    <li><strong>Настоящее время</strong>: читающий, пишущий (от глаголов несовершенного вида)</li>
                    <li><strong>Прошедшее время</strong>: читавший, написавший</li>
                  </ul>
                  <h3>Страдательные причастия</h3>
                  <p>Обозначают признак того, над кем совершают действие.</p>
                  <ul>
                    <li><strong>Настоящее время</strong>: читаемый, видимый</li>
                    <li><strong>Прошедшее время</strong>: прочитанный, увиденный</li>
                  </ul>`,examples:['Образуй причастие от глагола "читать"',"Определи вид причастия","Чем отличаются действительные от страдательных?"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"russian7-sec1-top2",title:"Причастный оборот",description:"Пунктуация при причастном обороте",lessons:[{id:"russian7-sec1-top2-les1",title:"Причастный оборот и запятые",description:"Правила пунктуации",theory:`<h3>Причастный оборот</h3>
                  <p><strong>Причастный оборот</strong> — причастие с зависимыми словами.</p>
                  <h4>Правило:</h4>
                  <p>Причастный оборот выделяется запятыми, если стоит <strong>после</strong> определяемого слова.</p>
                  <h4>Примеры:</h4>
                  <p>Книга, <em>прочитанная мной</em>, была интересной. (после — запятые)</p>
                  <p><em>Прочитанная мной</em> книга была интересной. (до — нет запятых)</p>
                  <h4>Определяемое слово:</h4>
                  <p>Существительное, к которому относится причастный оборот.</p>`,examples:["Выдели причастный оборот","Поставь запятые","Найди определяемое слово"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"russian7-sec2",title:"Деепричастие",description:"Часть речи с признаками глагола и наречия",topics:[{id:"russian7-sec2-top1",title:"Понятие о деепричастии",description:"Признаки наречия и глагола",lessons:[{id:"russian7-sec2-top1-les1",title:"Что такое деепричастие",description:"Определение деепричастия",theory:`<h3>Деепричастие</h3>
                  <p><strong>Деепричастие</strong> — самостоятельная часть речи, обозначающая добавочное действие.</p>
                  <h4>Признаки наречия:</h4>
                  <ul>
                    <li>Неизменяемая форма</li>
                    <li>В предложении — обстоятельство</li>
                  </ul>
                  <h4>Признаки глагола:</h4>
                  <ul>
                    <li>Вид (совершенный/несовершенный)</li>
                    <li>Возвратность</li>
                    <li>Управление (падеж существительного)</li>
                  </ul>
                  <h4>Вопросы:</h4>
                  <p>Что делая? Что сделав?</p>`,examples:["Найди деепричастие","Задай вопрос к деепричастию","Какие признаки глагола у деепричастия?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"russian7-sec2-top1-les2",title:"Деепричастный оборот",description:"Пунктуация при деепричастном обороте",theory:`<h3>Деепричастный оборот</h3>
                  <p><strong>Деепричастный оборот</strong> — деепричастие с зависимыми словами.</p>
                  <h4>Правило:</h4>
                  <p>Деепричастный оборот <strong>всегда</strong> выделяется запятыми, независимо от места в предложении.</p>
                  <h4>Примеры:</h4>
                  <p><em>Читая книгу</em>, я делал заметки.</p>
                  <p>Я, <em>читая книгу</em>, делал заметки.</p>
                  <p>Я делал заметки, <em>читая книгу</em>.</p>`,examples:["Выдели деепричастный оборот","Поставь запятые","Найди ошибку в пунктуации"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"russian7-sec3",title:"Наречие",description:"Неизменяемая часть речи",topics:[{id:"russian7-sec3-top1",title:"Разряды наречий",description:"Классификация по значению",lessons:[{id:"russian7-sec3-top1-les1",title:"Виды наречий",description:"Разряды по значению",theory:`<h3>Наречие</h3>
                  <p><strong>Наречие</strong> — самостоятельная часть речи, обозначающая признак действия или другого признака.</p>
                  <h4>Разряды по значению:</h4>
                  <ul>
                    <li><strong>Образа действия</strong>: быстро, красиво, по-русски (как?)</li>
                    <li><strong>Меры и степени</strong>: очень, слишком, вдвое (насколько?)</li>
                    <li><strong>Места</strong>: здесь, там, слева (где?)</li>
                    <li><strong>Времени</strong>: сегодня, утром, всегда (когда?)</li>
                    <li><strong>Причины</strong>: сослепу, со зла (почему?)</li>
                    <li><strong>Цели</strong>: нарочно, специально (зачем?)</li>
                  </ul>`,examples:["Определи разряд наречия","Какой вопрос задаётся к наречию?","Составь предложение с наречием"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"russian7-sec3-top2",title:"Правописание наречий",description:"Орфография",lessons:[{id:"russian7-sec3-top2-les1",title:"НЕ с наречиями",description:"Слитное и раздельное написание",theory:`<h3>НЕ с наречиями</h3>
                  <h4>Слитно:</h4>
                  <ul>
                    <li>Можно заменить синонимом без НЕ: неинтересно → скучно</li>
                    <li>Если есть приставка НЕ-: нелегко, неплохо</li>
                  </ul>
                  <h4>Раздельно:</h4>
                  <ul>
                    <li>Есть противопоставление с А: не красиво, а безобразно</li>
                    <li>Есть слова далеко не, вовсе не, отнюдь не</li>
                    <li>Краткие прилагательные с НЕ: он не глуп</li>
                  </ul>`,examples:["Слитно или раздельно: (не)красиво","Объясни написание НЕ","Замени синонимом"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"russian7-q1",question:"Какой признак глагола есть у причастия?",options:["Род","Время","Падеж","Число"],correctAnswer:1,explanation:"Причастия имеют время (настоящее и прошедшее), как глаголы. Род, падеж и число — признаки прилагательного.",difficulty:"medium",points:15},{id:"russian7-q2",question:"Деепричастный оборот всегда выделяется:",options:["Точкой с запятой","Тире","Запятыми","Скобками"],correctAnswer:2,explanation:"Деепричастный оборот всегда выделяется запятыми, независимо от его места в предложении.",difficulty:"easy",points:10},{id:"russian7-q3",question:'К какому разряду относится наречие "быстро"?',options:["Места","Времени","Образа действия","Цели"],correctAnswer:2,explanation:'Быстро — наречие образа действия, отвечает на вопрос "как?"',difficulty:"medium",points:15}]},{id:"history7",title:"История России",icon:(0,y.jsx)(e0,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Древняя Русь, раздробленность",sections:[{id:"history7-sec1",title:"Древняя Русь",description:"Образование и расцвет Древнерусского государства",topics:[{id:"history7-sec1-top1",title:"Образование государства",description:"Первые князья",lessons:[{id:"history7-sec1-top1-les1",title:"Призвание варягов",description:"Начало государственности",theory:`<h3>Образование Древнерусского государства</h3>
                  <h4>Предпосылки образования:</h4>
                  <ul>
                    <li>Развитие земледелия и торговли</li>
                    <li>Путь "из варяг в греки"</li>
                    <li>Угроза внешних врагов</li>
                  </ul>
                  <h4>862 год — призвание варягов:</h4>
                  <p>Рюрик — первый князь в Новгороде.</p>
                  <h4>882 год — объединение Киева и Новгорода:</h4>
                  <p>Князь Олег объединил два центра.</p>`,examples:["Когда произошло призвание варягов?","Кто был первым князем?","Что произошло в 882 году?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"history7-sec1-top1-les2",title:"Первые князья",description:"От Олега до Ярослава Мудрого",theory:`<h3>Первые князья:</h3>
                  <ul>
                    <li><strong>Олег</strong> (879-912) — объединитель Киева и Новгорода</li>
                    <li><strong>Игорь</strong> (912-945) — погиб от древлян при сборе дани</li>
                    <li><strong>Ольга</strong> (945-962) — реформы, месть древлянам, первая христианка</li>
                    <li><strong>Святослав</strong> (962-972) — воин, походы на хазар и болгар</li>
                    <li><strong>Владимир</strong> (980-1015) — крещение Руси (988)</li>
                    <li><strong>Ярослав Мудрый</strong> (1019-1054) — расцвет, "Русская Правда"</li>
                  </ul>`,examples:["Кто крестил Русь?",'Кто создал "Русскую Правду"?',"Что сделала княгиня Ольга?"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"history7-sec1-top2",title:"Крещение Руси",description:"Принятие христианства",lessons:[{id:"history7-sec1-top2-les1",title:"Значение крещения Руси",description:"988 год",theory:`<h3>Крещение Руси (988)</h3>
                  <h4>Причины:</h4>
                  <ul>
                    <li>Необходимость объединения племён</li>
                    <li>Укрепление княжеской власти</li>
                    <li>Связи с Византией</li>
                  </ul>
                  <h4>Значение:</h4>
                  <ul>
                    <li>Духовное единство народа</li>
                    <li>Развитие культуры, письменности</li>
                    <li>Вхождение в семью христианских народов</li>
                    <li>Укрепление государственной власти</li>
                  </ul>`,examples:["Когда произошло крещение Руси?","Почему Владимир выбрал христианство?","Каково значение крещения?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"history7-sec2",title:"Раздробленность",description:"Феодальная раздробленность Руси",topics:[{id:"history7-sec2-top1",title:"Причины и последствия",description:"Удельная Русь",lessons:[{id:"history7-sec2-top1-les1",title:"Причины раздробленности",description:"Почему Русь распалась",theory:`<h3>Раздробленность Руси (XII-XV вв.)</h3>
                  <h4>Причины:</h4>
                  <ul>
                    <li>Рост экономической независимости княжеств</li>
                    <li>Местные династии</li>
                    <li>Слабость центральной власти</li>
                    <li>Набеги кочевников</li>
                  </ul>
                  <h4>Крупные княжества:</h4>
                  <ul>
                    <li><strong>Владимиро-Суздальское</strong> — Андрей Боголюбский</li>
                    <li><strong>Галицко-Волынское</strong> — Даниил Галицкий</li>
                    <li><strong>Новгородская земля</strong> — республика, вече</li>
                  </ul>`,examples:["Назови причины раздробленности","Какие княжества были самыми крупными?","Как управлялся Новгород?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"history7-sec2-top1-les2",title:"Последствия раздробленности",description:"Монгольское нашествие",theory:`<h3>Последствия раздробленности:</h3>
                  <ul>
                    <li>Ослабление обороноспособности</li>
                    <li>Монгольское нашествие (1237-1240)</li>
                    <li>Установление ордынского ига</li>
                    <li>Культурное развитие отдельных земель</li>
                  </ul>
                  <h4>Монгольское нашествие:</h4>
                  <ul>
                    <li>1237-1238 — поход Батыя на Северо-Восточную Русь</li>
                    <li>1239-1240 — поход на Южную Русь</li>
                    <li>Разрушение городов, упадок культуры</li>
                  </ul>`,examples:["Когда произошло монгольское нашествие?","Каковы последствия раздробленности?","Что такое ордынское иго?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"history7-q1",question:"В каком году произошло крещение Руси?",options:["862","882","988","1036"],correctAnswer:2,explanation:"Крещение Руси произошло в 988 году при князе Владимире Святославиче.",difficulty:"easy",points:10},{id:"history7-q2",question:'Кто создал первый письменный свод законов "Русская Правда"?',options:["Олег","Владимир","Ярослав Мудрый","Святослав"],correctAnswer:2,explanation:'Ярослав Мудрый создал "Русскую Правду" — первый свод законов на Руси.',difficulty:"medium",points:15},{id:"history7-q3",question:"Какое княжество было республикой с вечевым управлением?",options:["Владимиро-Суздальское","Галицко-Волынское","Новгородская земля","Московское"],correctAnswer:2,explanation:"Новгородская земля была республикой, где высшим органом власти было вече — народное собрание.",difficulty:"medium",points:15}]},{id:"physics7",title:"Физика",icon:(0,y.jsx)(eZ,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Новый предмет! Механика, силы, давление",sections:[{id:"physics7-sec1",title:"Введение в физику",description:"Что изучает физика, физические величины",topics:[{id:"physics7-sec1-top1",title:"Физика — наука о природе",description:"Методы исследования",lessons:[{id:"physics7-sec1-top1-les1",title:"Что изучает физика",description:"Предмет физики",theory:`<h3>Что такое физика?</h3>
                  <p><strong>Физика</strong> — наука о природе, изучающая простейшие и наиболее общие закономерности явлений природы.</p>
                  <h4>Методы физики:</h4>
                  <ul>
                    <li><strong>Наблюдение</strong> — изучение явлений в естественных условиях</li>
                    <li><strong>Опыт (эксперимент)</strong> — изучение в специально созданных условиях</li>
                    <li><strong>Гипотеза</strong> — научное предположение</li>
                    <li><strong>Теория</strong> — система знаний, объясняющая явления</li>
                  </ul>`,examples:["Что изучает физика?","Назови методы физики","Чем наблюдение отличается от опыта?"],completed:!1,difficulty:"easy",estimatedTime:20},{id:"physics7-sec1-top1-les2",title:"Физические величины",description:"Измерение величин",theory:`<h3>Физические величины</h3>
                  <h4>Основные величины и единицы:</h4>
                  <ul>
                    <li>Длина — метр (м)</li>
                    <li>Масса — килограмм (кг)</li>
                    <li>Время — секунда (с)</li>
                    <li>Температура — кельвин (К)</li>
                  </ul>
                  <h4>Производные величины:</h4>
                  <ul>
                    <li>Скорость — м/с</li>
                    <li>Площадь — м\xb2</li>
                    <li>Объём — м\xb3</li>
                  </ul>
                  <h4>Измерение:</h4>
                  <p>Измерить — значит сравнить с эталоном.</p>`,examples:["Назови единицу массы","Какая единица времени?","Что значит измерить величину?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]},{id:"physics7-sec2",title:"Механика",description:"Механическое движение, скорость",topics:[{id:"physics7-sec2-top1",title:"Механическое движение",description:"Траектория, путь, перемещение",lessons:[{id:"physics7-sec2-top1-les1",title:"Траектория и путь",description:"Основные понятия",theory:`<h3>Механическое движение</h3>
                  <p><strong>Движение</strong> — изменение положения тела относительно других тел с течением времени.</p>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li><strong>Траектория</strong> — линия, по которой движется тело</li>
                    <li><strong>Путь (s)</strong> — длина траектории [м]</li>
                    <li><strong>Перемещение</strong> — направленный отрезок от начальной до конечной точки</li>
                  </ul>
                  <h4>Формула равномерного движения:</h4>
                  <p>s = v \xb7 t</p>
                  <p>v = s / t</p>`,examples:["Чем путь отличается от перемещения?","Найди путь: v=5м/с, t=10с","Что такое траектория?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"physics7-sec2-top1-les2",title:"Скорость",description:"Расчёт скорости",theory:`<h3>Скорость</h3>
                  <p><strong>Скорость (v)</strong> — быстрота движения [м/с]</p>
                  <h4>Формула:</h4>
                  <p>v = s / t</p>
                  <h4>Перевод единиц:</h4>
                  <ul>
                    <li>1 км/ч = 1000 м / 3600 с ≈ 0,28 м/с</li>
                    <li>1 м/с = 3,6 км/ч</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>72 км/ч = 72 / 3,6 = 20 м/с</p>`,examples:["Переведи 36 км/ч в м/с","Найди скорость: s=100м, t=20с","Что такое скорость?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"physics7-sec3",title:"Силы",description:"Сила тяжести, упругости, трения",topics:[{id:"physics7-sec3-top1",title:"Виды сил",description:"Силы в природе",lessons:[{id:"physics7-sec3-top1-les1",title:"Сила тяжести",description:"Закон всемирного тяготения",theory:`<h3>Сила тяжести</h3>
                  <p><strong>Сила</strong> — мера взаимодействия тел [Н] (ньютон).</p>
                  <h4>Сила тяжести:</h4>
                  <p>F = m \xb7 g</p>
                  <p>g ≈ 9,8 м/с\xb2 — ускорение свободного падения</p>
                  <p>Направлена к центру Земли.</p>
                  <h4>Пример:</h4>
                  <p>Масса 5 кг → F = 5 \xd7 9,8 = 49 Н</p>`,examples:["Найди силу тяжести m=10кг","Что такое g?","Куда направлена сила тяжести?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"physics7-sec3-top1-les2",title:"Сила упругости и трения",description:"Закон Гука",theory:`<h3>Сила упругости</h3>
                  <p>F = k \xb7 x (закон Гука)</p>
                  <p>k — жёсткость [Н/м], x — удлинение [м]</p>
                  <h3>Сила трения</h3>
                  <p>F_тр = μ \xb7 N</p>
                  <p>μ — коэффициент трения, N — сила реакции опоры</p>
                  <h4>Виды трения:</h4>
                  <ul>
                    <li>Покоя — тело не движется</li>
                    <li>Скольжения — тело скользит</li>
                    <li>Качения — тело катится (наименьшее)</li>
                  </ul>`,examples:["Закон Гука: F при x=0,1м, k=200 Н/м","От чего зависит трение?","Какие виды трения ты знаешь?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"physics7-sec4",title:"Давление",description:"Давление твёрдых тел, жидкостей и газов",topics:[{id:"physics7-sec4-top1",title:"Давление и его применение",description:"Закон Паскаля",lessons:[{id:"physics7-sec4-top1-les1",title:"Давление твёрдых тел",description:"Формула давления",theory:`<h3>Давление</h3>
                  <h4>Определение:</h4>
                  <p>p = F / S</p>
                  <p>p — давление [Па = Н/м\xb2], F — сила, S — площадь</p>
                  <h4>Способы изменения давления:</h4>
                  <ul>
                    <li>Увеличить S → уменьшить давление (лыжи)</li>
                    <li>Уменьшить S → увеличить давление (нож)</li>
                  </ul>`,examples:["Найди давление: F=100Н, S=2м²","Как уменьшить давление?","Почему лыжи не проваливаются?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"physics7-sec4-top1-les2",title:"Давление жидкостей и газов",description:"Закон Паскаля",theory:`<h3>Давление в жидкостях</h3>
                  <p>p = ρ \xb7 g \xb7 h</p>
                  <p>ρ — плотность [кг/м\xb3], h — глубина</p>
                  <h4>Закон Паскаля:</h4>
                  <p>Давление, производимое на жидкость или газ, передаётся во все точки одинаково.</p>
                  <h4>Сообщающиеся сосуды:</h4>
                  <p>В сообщающихся сосудах уровень жидкости одинаков (для однородной жидкости).</p>
                  <h4>Атмосферное давление:</h4>
                  <p>~101325 Па ≈ 760 мм рт. ст.</p>`,examples:["Давление воды на глубине 10м","Как работает гидравлический пресс?","Что такое атмосферное давление?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"physics7-q1",question:"По какой формуле вычисляется скорость равномерного движения?",options:["v = s · t","v = s / t","v = t / s","v = s + t"],correctAnswer:1,explanation:"Скорость равна пути, делённому на время: v = s / t.",difficulty:"easy",points:10},{id:"physics7-q2",question:"Какая формула выражает закон Паскаля?",options:["p = F / S","p = ρgh","Давление передаётся одинаково во все стороны","F = ma"],correctAnswer:2,explanation:"Закон Паскаля: давление, производимое на жидкость или газ, передаётся во все точки одинаково.",difficulty:"medium",points:15},{id:"physics7-q3",question:"Чему равно ускорение свободного падения на Земле?",options:["8,9 м/с²","9,8 м/с²","10,8 м/с²","9,8 км/с²"],correctAnswer:1,explanation:"Ускорение свободного падения g ≈ 9,8 м/с². Это постоянная величина для поверхности Земли.",difficulty:"easy",points:10}]},{id:"biology7",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Царство Животные",sections:[{id:"biology7-sec1",title:"Царство Животные",description:"Общая характеристика и классификация",topics:[{id:"biology7-sec1-top1",title:"Признаки животных",description:"Чем животные отличаются от растений",lessons:[{id:"biology7-sec1-top1-les1",title:"Общая характеристика животных",description:"Типы животных",theory:`<h3>Царство Животные</h3>
                  <p>Животные — гетеротрофные организмы (питаются готовыми органическими веществами).</p>
                  <h4>Признаки животных:</h4>
                  <ul>
                    <li>Гетеротрофное питание</li>
                    <li>Активный обмен веществ</li>
                    <li>Способность к движению</li>
                    <li>Нервная система и органы чувств</li>
                    <li>Раздражимость</li>
                  </ul>
                  <h4>Типы животных:</h4>
                  <ul>
                    <li><strong>Кишечнополостные</strong> — гидра, медузы</li>
                    <li><strong>Черви</strong> — плоские, круглые, кольчатые</li>
                    <li><strong>Моллюски</strong> — улитки, кальмары</li>
                    <li><strong>Членистоногие</strong> — насекомые, раки</li>
                    <li><strong>Хордовые</strong> — рыбы, птицы, млекопитающие</li>
                  </ul>`,examples:["Назови признаки животных","К какому типу относится кальмар?","Чем отличаются от растений?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"biology7-sec2",title:"Беспозвоночные",description:"Кишечнополостные, черви, моллюски",topics:[{id:"biology7-sec2-top1",title:"Кишечнополостные и черви",description:"Простейшие многоклеточные",lessons:[{id:"biology7-sec2-top1-les1",title:"Кишечнополостные",description:"Гидра, медузы, кораллы",theory:`<h3>Кишечнополостные</h3>
                  <h4>Представители:</h4> гидра, медуза, кораллы.
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Два слоя клеток (эктодерма и энтодерма)</li>
                    <li>Радиальная симметрия</li>
                    <li>Кишечная полость с одним отверстием</li>
                    <li>Стрекательные клетки для защиты и охоты</li>
                  </ul>`,examples:["Где обитает гидра?","Стрекательные клетки — для чего?","Что такое радиальная симметрия?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"biology7-sec2-top1-les2",title:"Черви",description:"Плоские, круглые, кольчатые",theory:`<h3>Черви</h3>
                  <h4>Плоские черви:</h4> планария, печёночный сосальщик (паразиты).
                  <h4>Круглые черви:</h4> аскарида, острица (паразиты).
                  <h4>Кольчатые черви:</h4> дождевой червь, пиявка.
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Двусторонняя симметрия</li>
                    <li>Три слоя клеток</li>
                    <li>Появление систем органов</li>
                  </ul>`,examples:["Чем отличаются плоские и круглые черви?","Значение дождевых червей","Какие черви — паразиты?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"biology7-sec2-top2",title:"Моллюски и членистоногие",description:"Разнообразие беспозвоночных",lessons:[{id:"biology7-sec2-top2-les1",title:"Моллюски",description:"Улитки, кальмары, мидии",theory:`<h3>Моллюски</h3>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Мягкое тело (мантия)</li>
                    <li>Раковина (у большинства)</li>
                    <li>Нога для передвижения</li>
                  </ul>
                  <h4>Классы:</h4>
                  <ul>
                    <li><strong>Брюхоногие</strong> — улитки, слизни</li>
                    <li><strong>Двустворчатые</strong> — мидии, устрицы</li>
                    <li><strong>Головоногие</strong> — кальмары, осьминоги</li>
                  </ul>`,examples:["Сколько ног у моллюсков?","Почему осьминог — моллюск?","Какие классы моллюсков?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"biology7-sec2-top2-les2",title:"Членистоногие",description:"Ракообразные, паукообразные, насекомые",theory:`<h3>Членистоногие</h3>
                  <h4>Классы:</h4>
                  <ul>
                    <li><strong>Ракообразные</strong> — жабры, 5 пар ходильных ног (рак, краб)</li>
                    <li><strong>Паукообразные</strong> — 4 пары ног, лёгочные мешки (паук, скорпион)</li>
                    <li><strong>Насекомые</strong> — 3 пары ног, крылья, трахеи (жуки, бабочки)</li>
                  </ul>`,examples:["Сколько ног у паука?","Чем дышат насекомые?","Чем раки отличаются от пауков?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"biology7-sec3",title:"Позвоночные",description:"Рыбы, земноводные, пресмыкающиеся, птицы, млекопитающие",topics:[{id:"biology7-sec3-top1",title:"Классы позвоночных",description:"Хордовые животные",lessons:[{id:"biology7-sec3-top1-les1",title:"Рыбы и земноводные",description:"Водные позвоночные",theory:`<h3>Рыбы</h3>
                  <ul>
                    <li>Жабры, чешуя, плавники</li>
                    <li>Два круга кровообращения</li>
                    <li>Холоднокровные</li>
                  </ul>
                  <h3>Земноводные (амфибии)</h3>
                  <ul>
                    <li>Влажная кожа, лёгкие</li>
                    <li>Личинка в воде (головастик)</li>
                    <li>Лягушки, тритоны</li>
                  </ul>`,examples:["Признаки рыб?","Как дышат земноводные?","Что такое головастик?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"biology7-sec3-top1-les2",title:"Пресмыкающиеся, птицы, млекопитающие",description:"Высшие позвоночные",theory:`<h3>Пресмыкающиеся (рептилии)</h3>
                  <ul>
                    <li>Сухая кожа с чешуёй</li>
                    <li>Ящерицы, змеи, крокодилы</li>
                  </ul>
                  <h3>Птицы</h3>
                  <ul>
                    <li>Перья, полёт, теплокровные</li>
                  </ul>
                  <h3>Млекопитающие</h3>
                  <ul>
                    <li>Шерсть, молоко, живорождение</li>
                    <li>Теплокровные</li>
                  </ul>`,examples:["Признаки млекопитающих?","Чем птицы отличаются от рептилий?","Что такое теплокровность?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"biology7-q1",question:"Сколько пар ног у насекомых?",options:["2 пары","3 пары","4 пары","5 пар"],correctAnswer:1,explanation:"Насекомые имеют 3 пары ног (6 ног). Это их отличительный признак.",difficulty:"easy",points:10},{id:"biology7-q2",question:"Какой тип питания у животных?",options:["Автотрофный","Гетеротрофный","Миксотрофный","Сапротрофный"],correctAnswer:1,explanation:"Животные — гетеротрофы, они питаются готовыми органическими веществами.",difficulty:"medium",points:15},{id:"biology7-q3",question:"Какой класс позвоночных выкармливает детёнышей молоком?",options:["Рыбы","Птицы","Пресмыкающиеся","Млекопитающие"],correctAnswer:3,explanation:"Млекопитающие названы так потому, что выкармливают детёнышей молоком.",difficulty:"easy",points:10}]},{id:"literature7",title:"Литература",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Русская литература XIX века",sections:[{id:"literature7-sec1",title:"Фольклор",description:"Устное народное творчество",topics:[{id:"literature7-sec1-top1",title:"Былины",description:"Героический эпос",lessons:[{id:"literature7-sec1-top1-les1",title:"Былины и их герои",description:"Илья Муромец, Добрыня Никитич",theory:`<h3>Былины</h3>
                  <p><strong>Былины</strong> — русские народные эпические песни о подвигах богатырей.</p>
                  <h4>Особенности былин:</h4>
                  <ul>
                    <li>Гиперболизация (преувеличение)</li>
                    <li>Повторы</li>
                    <li>Постоянные эпитеты</li>
                  </ul>
                  <h4>Главные богатыри:</h4>
                  <ul>
                    <li><strong>Илья Муромец</strong> — главный богатырь, защитник Руси</li>
                    <li><strong>Добрыня Никитич</strong> — умный, дипломатичный</li>
                    <li><strong>Алёша Попович</strong> — молодой, хитрый</li>
                  </ul>`,examples:["Назови главных богатырей","Какие художественные приёмы в былинах?","Кто такой Илья Муромец?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"literature7-sec2",title:"Литература XIX века",description:"Классики русской литературы",topics:[{id:"literature7-sec2-top1",title:"А.С. Пушкин",description:"Сказки и повести",lessons:[{id:"literature7-sec2-top1-les1",title:"Сказки Пушкина",description:"«Сказка о царе Салтане»",theory:`<h3>А.С. Пушкин (1799-1837)</h3>
                  <h4>Сказки:</h4>
                  <ul>
                    <li>\xabСказка о царе Салтане\xbb</li>
                    <li>\xabСказка о мёртвой царевне\xbb</li>
                    <li>\xabСказка о рыбаке и рыбке\xbb</li>
                    <li>\xabСказка о золотом петушке\xbb</li>
                  </ul>
                  <h4>Особенности:</h4>
                  <ul>
                    <li>Сочетание фольклорных традиций и авторского стиля</li>
                    <li>Образность языка</li>
                    <li>Нравственные идеалы</li>
                  </ul>`,examples:["Какие сказки Пушкина ты знаешь?","Кто главный герой «Сказки о царе Салтане»?","Особенности пушкинских сказок"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"literature7-sec2-top2",title:"М.Ю. Лермонтов",description:"Поэзия и проза",lessons:[{id:"literature7-sec2-top2-les1",title:"Стихотворения Лермонтова",description:"«Парус», «Тучи»",theory:`<h3>М.Ю. Лермонтов (1814-1841)</h3>
                  <h4>Темы творчества:</h4>
                  <ul>
                    <li>Одиночество</li>
                    <li>Свобода</li>
                    <li>Красота природы</li>
                    <li>Судьба поэта</li>
                  </ul>
                  <h4>\xabПарус\xbb:</h4>
                  <p>Образ одинокого паруса — символ мятежного духа, поиска идеала.</p>
                  <p>\xabБелеет парус одинокий / В тумане моря голубом...\xbb</p>`,examples:["Какие темы у Лермонтова?","Анализ «Паруса»","Что символизирует парус?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"literature7-q1",question:"Кто является главным героем былин?",options:["Князь","Богатырь","Купец","Крестьянин"],correctAnswer:1,explanation:"Главные герои былин — богатыри: Илья Муромец, Добрыня Никитич, Алёша Попович.",difficulty:"easy",points:10},{id:"literature7-q2",question:"Кто написал «Сказку о царе Салтане»?",options:["Лермонтов","Пушкин","Тургенев","Толстой"],correctAnswer:1,explanation:"«Сказка о царе Салтане» написана А.С. Пушкиным.",difficulty:"easy",points:10},{id:"literature7-q3",question:"Что символизирует парус в стихотворении Лермонтова?",options:["Надежду","Одиночество и мятежный дух","Путешествие","Море"],correctAnswer:1,explanation:"Одинокий парус в стихотворении Лермонтова символизирует одиночество, мятежный дух и поиск идеала.",difficulty:"medium",points:15}]},{id:"foreign7",title:"Иностранный язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-teal-400",gradient:"from-teal-500 to-cyan-500",description:"Английский язык: грамматика и лексика",sections:[{id:"foreign7-sec1",title:"Грамматика",description:"Времена и конструкции",topics:[{id:"foreign7-sec1-top1",title:"Present Tenses",description:"Настоящие времена",lessons:[{id:"foreign7-sec1-top1-les1",title:"Present Simple",description:"Настоящее простое время",theory:`<h3>Present Simple</h3>
                  <h4>Образование:</h4>
                  <p>I/You/We/They + V (work)</p>
                  <p>He/She/It + V-s (works)</p>
                  <h4>Вопрос:</h4>
                  <p>Do/Does + subject + V?</p>
                  <h4>Отрицание:</h4>
                  <p>don't/doesn't + V</p>
                  <h4>Употребление:</h4>
                  <ul>
                    <li>Регулярные действия (I work every day)</li>
                    <li>Факты (Water boils at 100\xb0C)</li>
                    <li>Расписание (The train leaves at 9)</li>
                  </ul>`,examples:["Переведи: Я работаю каждый день","Поставь в вопрос: She likes music","Отрицание: He plays tennis"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"foreign7-sec1-top1-les2",title:"Present Continuous",description:"Настоящее продолженное",theory:`<h3>Present Continuous</h3>
                  <h4>Образование:</h4>
                  <p>am/is/are + V-ing</p>
                  <h4>Примеры:</h4>
                  <p>I am reading now.</p>
                  <p>She is watching TV.</p>
                  <h4>Употребление:</h4>
                  <ul>
                    <li>Действие в момент речи</li>
                    <li>Временная ситуация</li>
                    <li>Планы на ближайшее будущее</li>
                  </ul>`,examples:["Переведи: Я сейчас читаю","Поставь в вопрос","В чём разница Simple и Continuous?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"foreign7-sec2",title:"Лексика",description:"Темы и слова",topics:[{id:"foreign7-sec2-top1",title:"Daily Life",description:"Повседневная жизнь",lessons:[{id:"foreign7-sec2-top1-les1",title:"Daily Routine",description:"Режим дня",theory:`<h3>Daily Routine Vocabulary</h3>
                  <h4>Глаголы:</h4>
                  <ul>
                    <li>wake up — просыпаться</li>
                    <li>get up — вставать</li>
                    <li>have breakfast — завтракать</li>
                    <li>go to school — идти в школу</li>
                    <li>do homework — делать домашку</li>
                    <li>go to bed — ложиться спать</li>
                  </ul>
                  <h4>Наречия частотности:</h4>
                  <p>always, usually, often, sometimes, rarely, never</p>`,examples:["Расскажи о своём режиме дня","Переведи слова","Составь предложения"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"foreign7-q1",question:"Какое окончание у глагола в Present Simple для he/she/it?",options:["-ing","-s/-es","-ed","без окончания"],correctAnswer:1,explanation:"В Present Simple для 3-го лица единственного числа (he/she/it) глагол принимает окончание -s или -es.",difficulty:"easy",points:10},{id:"foreign7-q2",question:"Выберите правильную форму: She ___ watching TV now.",options:["is","are","am","be"],correctAnswer:0,explanation:"She is watching — для she используется форма is глагола to be.",difficulty:"easy",points:10},{id:"foreign7-q3",question:'Как перевести "always"?',options:["Иногда","Часто","Всегда","Никогда"],correctAnswer:2,explanation:"Always — всегда, наречие частотности.",difficulty:"easy",points:10}]},{id:"geography7",title:"География",icon:(0,y.jsx)(eQ,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Материки и океаны",sections:[{id:"geography7-sec1",title:"Главные объекты географии",description:"Земля как планета",topics:[{id:"geography7-sec1-top1",title:"Земля — планета Солнечной системы",description:"Форма и размеры Земли",lessons:[{id:"geography7-sec1-top1-les1",title:"Форма и размеры Земли",description:"Геоид",theory:`<h3>Земля</h3>
                  <h4>Форма:</h4>
                  <p>Земля имеет форму геоида — сплюснутого у полюсов шара.</p>
                  <h4>Размеры:</h4>
                  <ul>
                    <li>Экваториальный радиус: 6378 км</li>
                    <li>Полярный радиус: 6357 км</li>
                    <li>Длина экватора: 40075 км</li>
                  </ul>
                  <h4>Движения Земли:</h4>
                  <ul>
                    <li>Вращение вокруг оси (сутки — 24 часа)</li>
                    <li>Вращение вокруг Солнца (год — 365 дней)</li>
                  </ul>`,examples:["Какова форма Земли?","Длина экватора?","Какие движения совершает Земля?"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"geography7-sec1-top2",title:"Географическая карта",description:"Виды карт",lessons:[{id:"geography7-sec1-top2-les1",title:"Градусная сетка",description:"Параллели и меридианы",theory:`<h3>Градусная сетка</h3>
                  <h4>Параллели:</h4>
                  <p>Линии, проведённые параллельно экватору. Определяют географическую широту (от 0\xb0 до 90\xb0).</p>
                  <h4>Меридианы:</h4>
                  <p>Линии, соединяющие полюса. Определяют географическую долготу (от 0\xb0 до 180\xb0).</p>
                  <h4>Координаты:</h4>
                  <p>Географические координаты — широта и долгота точки.</p>
                  <h4>Пример:</h4>
                  <p>Москва: 55\xb0 с.ш., 37\xb0 в.д.</p>`,examples:["Определи координаты города","Что такое параллель?","Найди на карте меридианы"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"geography7-q1",question:"Какова длина экватора Земли?",options:["20000 км","30000 км","40075 км","50000 км"],correctAnswer:2,explanation:"Длина экватора составляет примерно 40075 километров.",difficulty:"medium",points:15},{id:"geography7-q2",question:"Что такое параллели?",options:["Линии, соединяющие полюса","Линии, параллельные экватору","Линии долготы","Линии времени"],correctAnswer:1,explanation:"Параллели — линии, проведённые параллельно экватору, показывают географическую широту.",difficulty:"medium",points:15},{id:"geography7-q3",question:"За сколько часов Земля делает полный оборот вокруг своей оси?",options:["12 часов","24 часа","365 дней","30 дней"],correctAnswer:1,explanation:"Земля делает полный оборот вокруг своей оси за 24 часа — это сутки.",difficulty:"easy",points:10}]},{id:"chemistry7",title:"Химия",icon:(0,y.jsx)(e1,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Введение в химию",sections:[{id:"chemistry7-sec1",title:"Введение",description:"Основы химии",topics:[{id:"chemistry7-sec1-top1",title:"Что такое химия",description:"Предмет химии",lessons:[{id:"chemistry7-sec1-top1-les1",title:"Вещества и их свойства",description:"Физические и химические явления",theory:`<h3>Химия</h3>
                  <p><strong>Химия</strong> — наука о веществах, их свойствах и превращениях.</p>
                  <h4>Вещество:</h4>
                  <p>То, из чего состоят физические тела.</p>
                  <h4>Физические явления:</h4>
                  <p>Изменение формы, размера, агрегатного состояния без образования новых веществ.</p>
                  <h4>Химические явления (реакции):</h4>
                  <p>Образование новых веществ.</p>
                  <h4>Признаки химических реакций:</h4>
                  <ul>
                    <li>Изменение цвета</li>
                    <li>Выделение газа</li>
                    <li>Выпадение осадка</li>
                    <li>Выделение/поглощение тепла</li>
                  </ul>`,examples:["Приведи пример физического явления","Признаки химической реакции?","Что изучает химия?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"chemistry7-q1",question:"Что изучает химия?",options:["Растения","Вещества и их превращения","Звёзды","Животных"],correctAnswer:1,explanation:"Химия — наука о веществах, их свойствах и превращениях.",difficulty:"easy",points:10},{id:"chemistry7-q2",question:"Какой признак указывает на химическую реакцию?",options:["Изменение формы","Выделение газа","Измельчение","Нагревание"],correctAnswer:1,explanation:"Выделение газа — один из признаков химической реакции (образования нового вещества).",difficulty:"medium",points:15}]},{id:"obzh7",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Основы безопасности жизнедеятельности",sections:[{id:"obzh7-sec1",title:"Безопасность в повседневной жизни",description:"Правила поведения",topics:[{id:"obzh7-sec1-top1",title:"Пожарная безопасность",description:"Правила при пожаре",lessons:[{id:"obzh7-sec1-top1-les1",title:"Причины пожаров",description:"Профилактика пожаров",theory:`<h3>Пожарная безопасность</h3>
                  <h4>Причины пожаров:</h4>
                  <ul>
                    <li>Неосторожное обращение с огнём</li>
                    <li>Нарушение правил электробезопасности</li>
                    <li>Неисправность электроприборов</li>
                    <li>Детские шалости с огнём</li>
                  </ul>
                  <h4>Правила профилактики:</h4>
                  <ul>
                    <li>Не оставлять включённые приборы без присмотра</li>
                    <li>Не пользоваться неисправными розетками</li>
                    <li>Хранить спички в недоступном месте</li>
                  </ul>
                  <h4>При пожаре:</h4>
                  <ol>
                    <li>Позвонить 101 или 112</li>
                    <li>Вывести людей</li>
                    <li>Покинуть помещение</li>
                  </ol>`,examples:["Назови причины пожаров","Как действовать при пожаре?","Правила профилактики"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"obzh7-sec1-top2",title:"Безопасность на дорогах",description:"Правила дорожного движения",lessons:[{id:"obzh7-sec1-top2-les1",title:"Правила для пешеходов",description:"Переход дороги",theory:`<h3>Безопасность пешехода</h3>
                  <h4>Правила перехода дороги:</h4>
                  <ol>
                    <li>Посмотреть налево</li>
                    <li>Посмотреть направо</li>
                    <li>Переходить только на зелёный сигнал светофора</li>
                    <li>Переходить по пешеходному переходу</li>
                  </ol>
                  <h4>Запрещается:</h4>
                  <ul>
                    <li>Переходить дорогу в неположенном месте</li>
                    <li>Перебегать дорогу перед транспортом</li>
                    <li>Играть на проезжей части</li>
                  </ul>`,examples:["Как правильно переходить дорогу?","Что означают сигналы светофора?","Где можно переходить улицу?"],completed:!1,difficulty:"easy",estimatedTime:20}]}]}],quiz:[{id:"obzh7-q1",question:"По какому номеру звонить при пожаре?",options:["02","03","101","04"],correctAnswer:2,explanation:"При пожаре нужно звонить по номеру 101 или 112 (единый номер экстренных служб).",difficulty:"easy",points:10},{id:"obzh7-q2",question:"Что нужно сделать сначала при переходе дороги?",options:["Посмотреть направо","Посмотреть налево","Начать переходить","Побежать"],correctAnswer:1,explanation:"Сначала нужно посмотреть налево (так как в России правостороннее движение), затем направо.",difficulty:"easy",points:10},{id:"obzh7-q3",question:"Какой сигнал светофора разрешает переход?",options:["Красный","Жёлтый","Зелёный","Мигающий жёлтый"],correctAnswer:2,explanation:"Зелёный сигнал светофора разрешает движение пешеходов.",difficulty:"easy",points:10}]},{id:"informatics7",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-sky-400",gradient:"from-sky-500 to-blue-500",description:"Информация и компьютер",sections:[{id:"informatics7-sec1",title:"Информация",description:"Понятие информации",topics:[{id:"informatics7-sec1-top1",title:"Информация и её виды",description:"Формы представления",lessons:[{id:"informatics7-sec1-top1-les1",title:"Что такое информация",description:"Виды информации",theory:`<h3>Информация</h3>
                  <p><strong>Информация</strong> — сведения об объектах и явлениях окружающей среды.</p>
                  <h4>Виды информации по форме представления:</h4>
                  <ul>
                    <li>Текстовая</li>
                    <li>Числовая</li>
                    <li>Графическая</li>
                    <li>Звуковая</li>
                    <li>Видеоинформация</li>
                  </ul>
                  <h4>Действия с информацией:</h4>
                  <ul>
                    <li>Получение</li>
                    <li>Передача</li>
                    <li>Хранение</li>
                    <li>Обработка</li>
                  </ul>`,examples:["Назови виды информации","Какие действия с информацией?","Приведи пример текстовой информации"],completed:!1,difficulty:"easy",estimatedTime:20}]},{id:"informatics7-sec1-top2",title:"Единицы измерения информации",description:"Бит и байт",lessons:[{id:"informatics7-sec1-top2-les1",title:"Измерение информации",description:"Бит, байт, килобайт",theory:`<h3>Единицы измерения</h3>
                  <h4>Основные единицы:</h4>
                  <ul>
                    <li><strong>Бит</strong> — минимальная единица (0 или 1)</li>
                    <li><strong>Байт</strong> = 8 бит</li>
                    <li><strong>Килобайт (КБ)</strong> = 1024 байт</li>
                    <li><strong>Мегабайт (МБ)</strong> = 1024 КБ</li>
                    <li><strong>Гигабайт (ГБ)</strong> = 1024 МБ</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>Символ текста ≈ 1 байт</li>
                    <li>Страница текста ≈ 2 КБ</li>
                    <li>Фотография ≈ 2-5 МБ</li>
                  </ul>`,examples:["Сколько бит в байте?","Переведи 2 КБ в байты","Что больше: МБ или ГБ?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"informatics7-q1",question:"Сколько бит в одном байте?",options:["4","8","16","32"],correctAnswer:1,explanation:"В одном байте содержится 8 бит.",difficulty:"easy",points:10},{id:"informatics7-q2",question:"Какая единица измерения больше?",options:["Килобайт","Мегабайт","Байт","Бит"],correctAnswer:1,explanation:"Мегабайт больше килобайта, байта и бита. 1 МБ = 1024 КБ = 1048576 байт.",difficulty:"easy",points:10},{id:"informatics7-q3",question:"Какой вид информации представляет фотография?",options:["Текстовая","Числовая","Графическая","Звуковая"],correctAnswer:2,explanation:"Фотография — это графическая информация, представленная в виде изображения.",difficulty:"easy",points:10}]}]},e2=(0,ef.default)("landmark",[["path",{d:"M10 18v-7",key:"wt116b"}],["path",{d:"M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",key:"1m329m"}],["path",{d:"M14 18v-7",key:"vav6t3"}],["path",{d:"M18 18v-7",key:"aexdmj"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M6 18v-7",key:"1ivflk"}]]),e3={id:8,name:"8 класс",shortName:"8 кл.",subjects:[{id:"algebra8",title:"Алгебра",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Квадратные уравнения, неравенства",sections:[{id:"algebra8-sec1",title:"Квадратные уравнения",description:"Решение ax² + bx + c = 0",topics:[{id:"algebra8-sec1-top1",title:"Неполные квадратные уравнения",description:"Уравнения без некоторых членов",lessons:[{id:"algebra8-sec1-top1-les1",title:"Виды неполных уравнений",description:"ax² = 0, ax² + c = 0, ax² + bx = 0",theory:`<h3>Неполные квадратные уравнения</h3>
                  <p>Квадратное уравнение имеет вид ax\xb2 + bx + c = 0.</p>
                  <h4>Виды неполных:</h4>
                  <ul>
                    <li><strong>ax\xb2 = 0</strong> → x = 0</li>
                    <li><strong>ax\xb2 + c = 0</strong> → x\xb2 = -c/a, решение есть при -c/a ≥ 0</li>
                    <li><strong>ax\xb2 + bx = 0</strong> → x(ax + b) = 0, x₁ = 0, x₂ = -b/a</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>2x\xb2 - 8 = 0 → x\xb2 = 4 → x = \xb12</p>
                  <p>x\xb2 + 5x = 0 → x(x + 5) = 0 → x₁ = 0, x₂ = -5</p>`,examples:["Реши: 3x² = 0","Реши: x² - 16 = 0","Реши: x² + 7x = 0"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"algebra8-sec1-top1-les2",title:"Полные квадратные уравнения",description:"Формула дискриминанта",theory:`<h3>Полное квадратное уравнение</h3>
                  <p>ax\xb2 + bx + c = 0, где a ≠ 0.</p>
                  <h4>Дискриминант:</h4>
                  <p>D = b\xb2 - 4ac</p>
                  <h4>Корни уравнения:</h4>
                  <ul>
                    <li>D > 0: x₁,₂ = (-b \xb1 √D) / 2a — два корня</li>
                    <li>D = 0: x = -b / 2a — один корень</li>
                    <li>D < 0: нет действительных корней</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>x\xb2 - 5x + 6 = 0</p>
                  <p>D = 25 - 24 = 1</p>
                  <p>x₁ = (5 - 1)/2 = 2, x₂ = (5 + 1)/2 = 3</p>`,examples:["Найди D: x² - 6x + 5 = 0","Реши: x² - 4x + 3 = 0","Сколько корней?"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"algebra8-sec1-top2",title:"Теорема Виета",description:"Связь корней и коэффициентов",lessons:[{id:"algebra8-sec1-top2-les1",title:"Теорема Виета",description:"x₁ + x₂ = -b/a, x₁ · x₂ = c/a",theory:`<h3>Теорема Виета</h3>
                  <p>Для приведённого квадратного уравнения x\xb2 + px + q = 0:</p>
                  <ul>
                    <li>x₁ + x₂ = -p</li>
                    <li>x₁ \xb7 x₂ = q</li>
                  </ul>
                  <h4>Для ax\xb2 + bx + c = 0:</h4>
                  <ul>
                    <li>x₁ + x₂ = -b/a</li>
                    <li>x₁ \xb7 x₂ = c/a</li>
                  </ul>
                  <h4>Применение:</h4>
                  <ul>
                    <li>Проверка найденных корней</li>
                    <li>Подбор корней</li>
                    <li>Составление уравнения по корням</li>
                  </ul>`,examples:["Проверь корни 2 и 3 для x² - 5x + 6 = 0","Составь уравнение с корнями 1 и 4","Найди второй корень, если x₁ = 2, x₁·x₂ = 6"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"algebra8-sec2",title:"Неравенства",description:"Квадратные неравенства",topics:[{id:"algebra8-sec2-top1",title:"Квадратные неравенства",description:"Метод интервалов",lessons:[{id:"algebra8-sec2-top1-les1",title:"Решение квадратных неравенств",description:"Метод интервалов",theory:`<h3>Квадратные неравенства</h3>
                  <p>Неравенства вида ax\xb2 + bx + c > 0 или < 0</p>
                  <h4>Метод интервалов:</h4>
                  <ol>
                    <li>Найти корни квадратного уравнения</li>
                    <li>Отметить корни на числовой прямой</li>
                    <li>Определить знаки на каждом интервале</li>
                    <li>Выбрать нужные интервалы</li>
                  </ol>
                  <h4>Правило:</h4>
                  <ul>
                    <li>Если a > 0, то парабола направлена вверх</li>
                    <li>Если a < 0, то парабола направлена вниз</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>x\xb2 - 5x + 6 < 0</p>
                  <p>Корни: x = 2 и x = 3</p>
                  <p>Ответ: (2; 3)</p>`,examples:["Реши: x² - 9 > 0","Найди интервал: x² - 4x + 3 < 0","Метод интервалов"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"algebra8-sec3",title:"Функции",description:"Квадратичная функция",topics:[{id:"algebra8-sec3-top1",title:"Квадратичная функция",description:"Парабола",lessons:[{id:"algebra8-sec3-top1-les1",title:"График квадратичной функции",description:"Парабола y = ax² + bx + c",theory:`<h3>Квадратичная функция</h3>
                  <p>y = ax\xb2 + bx + c, график — парабола.</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>Ветви вверх при a > 0, вниз при a < 0</li>
                    <li>Вершина: x₀ = -b/2a, y₀ = f(x₀)</li>
                    <li>Ось симметрии: x = -b/2a</li>
                  </ul>
                  <h4>Построение графика:</h4>
                  <ol>
                    <li>Найти вершину</li>
                    <li>Найти точки пересечения с осями</li>
                    <li>Построить по точкам</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>y = x\xb2 - 4x + 3</p>
                  <p>Вершина: x = 2, y = -1</p>`,examples:["Найди вершину: y = x² - 6x + 5","Построй график","Где пересекает ось OX?"],completed:!1,difficulty:"medium",estimatedTime:35}]}]}],quiz:[{id:"algebra8-q1",question:"Чему равен дискриминант уравнения x² - 6x + 5 = 0?",options:["4","16","36","1"],correctAnswer:1,explanation:"D = b² - 4ac = (-6)² - 4·1·5 = 36 - 20 = 16.",difficulty:"easy",points:10},{id:"algebra8-q2",question:"Сколько корней имеет уравнение с D < 0?",options:["Два","Один","Ни одного","Бесконечно много"],correctAnswer:2,explanation:"При D < 0 квадратное уравнение не имеет действительных корней.",difficulty:"easy",points:10},{id:"algebra8-q3",question:"По теореме Виета для x² + px + q = 0 сумма корней равна:",options:["p","-p","q","-q"],correctAnswer:1,explanation:"По теореме Виета: x₁ + x₂ = -p, x₁ · x₂ = q.",difficulty:"medium",points:15},{id:"algebra8-q4",question:"Как направлены ветви параболы y = -2x² + 4x - 1?",options:["Вверх","Вниз","Вправо","Влево"],correctAnswer:1,explanation:"Так как a = -2 < 0, ветви параболы направлены вниз.",difficulty:"easy",points:10}]},{id:"geometry8",title:"Геометрия",icon:(0,y.jsx)(ex,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Подобие, окружность, площади",sections:[{id:"geometry8-sec1",title:"Подобие",description:"Подобные треугольники",topics:[{id:"geometry8-sec1-top1",title:"Подобные треугольники",description:"Признаки подобия",lessons:[{id:"geometry8-sec1-top1-les1",title:"Признаки подобия треугольников",description:"Три признака",theory:`<h3>Подобные треугольники</h3>
                  <p>Треугольники подобны, если их углы равны, а стороны пропорциональны.</p>
                  <h4>Признаки подобия:</h4>
                  <ol>
                    <li><strong>По двум углам</strong> — если два угла одного треугольника равны двум углам другого</li>
                    <li><strong>По двум сторонам и углу</strong> — если две стороны пропорциональны и угол между ними равен</li>
                    <li><strong>По трём сторонам</strong> — если три стороны одного пропорциональны трём сторонам другого</li>
                  </ol>
                  <h4>Коэффициент подобия:</h4>
                  <p>k = AB/A'B' = BC/B'C' = AC/A'C'</p>
                  <h4>Отношение площадей:</h4>
                  <p>S₁/S₂ = k\xb2</p>`,examples:["Докажи подобие треугольников","Найди коэффициент подобия","Вычисли площадь"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"geometry8-sec1-top1-les2",title:"Средняя линия треугольника",description:"Свойство средней линии",theory:`<h3>Средняя линия треугольника</h3>
                  <p><strong>Средняя линия</strong> — отрезок, соединяющий середины двух сторон треугольника.</p>
                  <h4>Свойство:</h4>
                  <p>Средняя линия параллельна третьей стороне и равна её половине.</p>
                  <p>MN || AC, MN = AC/2</p>
                  <h4>Применение:</h4>
                  <ul>
                    <li>Доказательство подобия</li>
                    <li>Нахождение неизвестных сторон</li>
                    <li>Задачи на построение</li>
                  </ul>`,examples:["Найди среднюю линию, если AC = 10","Докажи, что треугольники подобны","Как относятся площади?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"geometry8-sec2",title:"Окружность",description:"Касательная, хорды, углы",topics:[{id:"geometry8-sec2-top1",title:"Вписанные и центральные углы",description:"Углы в окружности",lessons:[{id:"geometry8-sec2-top1-les1",title:"Центральные и вписанные углы",description:"Связь между углами",theory:`<h3>Центральный угол</h3>
                  <p>Угол с вершиной в центре окружности.</p>
                  <p>Измеряется дугой, на которую опирается.</p>
                  <h3>Вписанный угол</h3>
                  <p>Угол, вершина которого лежит на окружности.</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>Вписанный угол = половине центрального, опирающегося на ту же дугу</li>
                    <li>Вписанный угол, опирающийся на диаметр = 90\xb0</li>
                    <li>Вписанные углы, опирающиеся на одну дугу, равны</li>
                  </ul>`,examples:["Найди вписанный угол, если центральный = 80°","Чему равен угол, опирающийся на диаметр?","Найди центральный угол"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"geometry8-sec2-top1-les2",title:"Вписанная и описанная окружности",description:"Треугольник и окружность",theory:`<h3>Вписанная окружность</h3>
                  <p>Окружность, касающаяся всех сторон треугольника.</p>
                  <p>Центр — точка пересечения биссектрис.</p>
                  <h3>Описанная окружность</h3>
                  <p>Окружность, проходящая через все вершины треугольника.</p>
                  <p>Центр — точка пересечения серединных перпендикуляров.</p>
                  <h4>Формулы:</h4>
                  <p>R = abc/(4S) — радиус описанной окружности</p>
                  <p>r = S/p — радиус вписанной окружности</p>`,examples:["Где центр вписанной окружности?","Где центр описанной окружности?","Найди радиус"],completed:!1,difficulty:"medium",estimatedTime:35}]}]},{id:"geometry8-sec3",title:"Площади",description:"Формулы площадей фигур",topics:[{id:"geometry8-sec3-top1",title:"Формулы площадей",description:"Вычисление площадей",lessons:[{id:"geometry8-sec3-top1-les1",title:"Площадь треугольника",description:"Различные формулы",theory:`<h3>Формулы площади треугольника</h3>
                  <h4>Основные формулы:</h4>
                  <ul>
                    <li>S = \xbd \xb7 a \xb7 h (основание \xd7 высота)</li>
                    <li>S = \xbd \xb7 a \xb7 b \xb7 sin(γ)</li>
                    <li>S = √(p(p-a)(p-b)(p-c)) — формула Герона</li>
                    <li>S = abc/(4R) — через радиус описанной окружности</li>
                    <li>S = pr — через радиус вписанной окружности</li>
                  </ul>
                  <h4>Формула Герона:</h4>
                  <p>p = (a + b + c)/2 — полупериметр</p>`,examples:["Найди площадь по формуле Герона","S = ? при a=5, h=4","Вычисли S через sin"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"geometry8-sec3-top1-les2",title:"Площади четырёхугольников",description:"Параллелограмм, трапеция",theory:`<h3>Параллелограмм</h3>
                  <p>S = a \xb7 h = a \xb7 b \xb7 sin(α)</p>
                  <h3>Трапеция</h3>
                  <p>S = \xbd \xb7 (a + b) \xb7 h</p>
                  <p>где a, b — основания, h — высота</p>
                  <h3>Ромб</h3>
                  <p>S = \xbd \xb7 d₁ \xb7 d₂</p>
                  <p>где d₁, d₂ — диагонали</p>
                  <h3>Прямоугольник</h3>
                  <p>S = a \xb7 b</p>
                  <h3>Квадрат</h3>
                  <p>S = a\xb2</p>`,examples:["Найди площадь трапеции","S параллелограмма","S ромба через диагонали"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"geometry8-q1",question:"Чему равен вписанный угол, опирающийся на диаметр?",options:["45°","60°","90°","180°"],correctAnswer:2,explanation:"Вписанный угол, опирающийся на диаметр, всегда равен 90° — прямой угол.",difficulty:"easy",points:10},{id:"geometry8-q2",question:"Как относится площадь большего треугольника к меньшему при коэффициенте подобия 2?",options:["В 2 раза больше","В 4 раза больше","В 8 раз больше","Одинаково"],correctAnswer:1,explanation:"Отношение площадей подобных фигур равно квадрату коэффициента подобия: k² = 2² = 4.",difficulty:"medium",points:15},{id:"geometry8-q3",question:"По какой формуле вычисляется площадь трапеции?",options:["S = a · h","S = ½ · d₁ · d₂","S = ½ · (a + b) · h","S = a²"],correctAnswer:2,explanation:"Площадь трапеции равна полусумме оснований, умноженной на высоту: S = ½ · (a + b) · h.",difficulty:"medium",points:15}]},{id:"physics8",title:"Физика",icon:(0,y.jsx)(eZ,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Тепловые явления, электричество",sections:[{id:"physics8-sec1",title:"Тепловые явления",description:"Нагревание, плавление, кипение",topics:[{id:"physics8-sec1-top1",title:"Количество теплоты",description:"Теплопередача",lessons:[{id:"physics8-sec1-top1-les1",title:"Нагревание и охлаждение",description:"Q = cmΔt",theory:`<h3>Количество теплоты</h3>
                  <h4>При нагревании/охлаждении:</h4>
                  <p>Q = cmΔt</p>
                  <p>c — удельная теплоёмкость (Дж/кг\xb7\xb0C)</p>
                  <p>m — масса (кг)</p>
                  <p>Δt — изменение температуры (\xb0C)</p>
                  <h4>Удельная теплоёмкость воды:</h4>
                  <p>c = 4200 Дж/(кг\xb7\xb0C)</p>
                  <h4>Пример:</h4>
                  <p>Сколько тепла нужно для нагревания 2 кг воды на 10\xb0C?</p>
                  <p>Q = 4200 \xd7 2 \xd7 10 = 84000 Дж = 84 кДж</p>`,examples:["Рассчитай Q для нагревания 1 кг воды на 20°C","Что такое удельная теплоёмкость?","Почему вода имеет большую теплоёмкость?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"physics8-sec1-top1-les2",title:"Плавление и кристаллизация",description:"Q = λm",theory:`<h3>Плавление</h3>
                  <p>Переход из твёрдого состояния в жидкое.</p>
                  <p>Q = λm — количество теплоты при плавлении</p>
                  <p>λ — удельная теплота плавления (Дж/кг)</p>
                  <h3>Кристаллизация</h3>
                  <p>Переход из жидкого состояния в твёрдое.</p>
                  <p>При кристаллизации энергия выделяется.</p>
                  <h4>Температура плавления:</h4>
                  <p>Лёд: 0\xb0C, железо: 1539\xb0C, свинец: 327\xb0C</p>`,examples:["Сколько тепла нужно для плавления 1 кг льда? (λ=330000 Дж/кг)","Что происходит при плавлении?","Чем плавление отличается от кристаллизации?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"physics8-sec1-top1-les3",title:"Парообразование и конденсация",description:"Q = Lm",theory:`<h3>Парообразование</h3>
                  <p>Переход из жидкого состояния в газообразное.</p>
                  <p>Q = Lm — количество теплоты при парообразовании</p>
                  <p>L — удельная теплота парообразования (Дж/кг)</p>
                  <h3>Виды парообразования:</h3>
                  <ul>
                    <li><strong>Испарение</strong> — с поверхности жидкости при любой температуре</li>
                    <li><strong>Кипение</strong> — во всём объёме при температуре кипения</li>
                  </ul>
                  <h4>Температура кипения воды:</h4>
                  <p>100\xb0C при нормальном давлении</p>`,examples:["L воды = 2,3·10⁶ Дж/кг. Сколько тепла для испарения 0,5 кг?","Чем испарение отличается от кипения?","От чего зависит скорость испарения?"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"physics8-sec1-top2",title:"Тепловые двигатели",description:"КПД теплового двигателя",lessons:[{id:"physics8-sec1-top2-les1",title:"Принцип работы теплового двигателя",description:"КПД",theory:`<h3>Тепловой двигатель</h3>
                  <p>Устройство, преобразующее внутреннюю энергию топлива в механическую работу.</p>
                  <h4>Основные части:</h4>
                  <ul>
                    <li>Нагреватель — источник энергии</li>
                    <li>Рабочее тело — пар или газ</li>
                    <li>Холодильник — отводит тепло</li>
                  </ul>
                  <h4>КПД:</h4>
                  <p>η = A/Q₁ = (Q₁ - Q₂)/Q₁</p>
                  <p>η — всегда меньше 100%</p>
                  <h4>Примеры:</h4>
                  <p>Двигатель внутреннего сгорания: 25-40%</p>`,examples:["Что такое КПД?","Почему КПД < 100%?","Как устроен ДВС?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"physics8-sec2",title:"Электричество",description:"Электрический ток",topics:[{id:"physics8-sec2-top1",title:"Электрический ток",description:"Закон Ома",lessons:[{id:"physics8-sec2-top1-les1",title:"Закон Ома",description:"I = U/R",theory:`<h3>Электрический ток</h3>
                  <p>Направленное движение заряженных частиц.</p>
                  <h4>Закон Ома для участка цепи:</h4>
                  <p>I = U/R</p>
                  <p>I — сила тока (А)</p>
                  <p>U — напряжение (В)</p>
                  <p>R — сопротивление (Ом)</p>
                  <h4>Сопротивление проводника:</h4>
                  <p>R = ρl/S</p>
                  <p>ρ — удельное сопротивление</p>
                  <p>l — длина, S — площадь сечения</p>
                  <h4>Пример:</h4>
                  <p>I = 2А, R = 5 Ом → U = I\xb7R = 10 В</p>`,examples:["Найди I, если U=12В, R=4Ом","Рассчитай сопротивление медного провода","Что показывает амперметр?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"physics8-sec2-top1-les2",title:"Соединения проводников",description:"Последовательное и параллельное",theory:`<h3>Последовательное соединение</h3>
                  <ul>
                    <li>I₁ = I₂ = I (сила тока одинакова)</li>
                    <li>U = U₁ + U₂ (напряжения складываются)</li>
                    <li>R = R₁ + R₂ (сопротивления складываются)</li>
                  </ul>
                  <h3>Параллельное соединение</h3>
                  <ul>
                    <li>U₁ = U₂ = U (напряжение одинаково)</li>
                    <li>I = I₁ + I₂ (токи складываются)</li>
                    <li>1/R = 1/R₁ + 1/R₂</li>
                  </ul>`,examples:["Найди R при последовательном соединении 2 Ом и 3 Ом","Найди R при параллельном соединении","Как соединены лампочки в гирлянде?"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"physics8-sec2-top2",title:"Работа и мощность тока",description:"Энергия электричества",lessons:[{id:"physics8-sec2-top2-les1",title:"Работа и мощность",description:"Формулы",theory:`<h3>Работа тока</h3>
                  <p>A = UIt = Pt (Дж)</p>
                  <p>U — напряжение, I — сила тока, t — время</p>
                  <h3>Мощность тока</h3>
                  <p>P = UI = I\xb2R = U\xb2/R (Вт)</p>
                  <h4>Закон Джоуля-Ленца:</h4>
                  <p>Q = I\xb2Rt — количество теплоты</p>
                  <h4>Практические единицы:</h4>
                  <p>1 кВт\xb7ч = 3,6 МДж</p>
                  <p>Стоимость электроэнергии = мощность \xd7 время \xd7 тариф</p>`,examples:["Найди мощность: I=2А, U=220В","Сколько стоит 100 кВт·ч?","Рассчитай работу за 2 часа"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"physics8-q1",question:"По какой формуле вычисляется количество теплоты при нагревании?",options:["Q = mL","Q = cmΔt","Q = I²Rt","Q = UI"],correctAnswer:1,explanation:"Q = cmΔt, где c — удельная теплоёмкость, m — масса, Δt — изменение температуры.",difficulty:"easy",points:10},{id:"physics8-q2",question:"Какой закон выражается формулой I = U/R?",options:["Закон Джоуля-Ленца","Закон Ома","Закон Кулона","Закон Ньютона"],correctAnswer:1,explanation:"I = U/R — закон Ома для участка цепи: сила тока прямо пропорциональна напряжению и обратно пропорциональна сопротивлению.",difficulty:"easy",points:10},{id:"physics8-q3",question:"При последовательном соединении проводников одинакова:",options:["Напряжение","Сила тока","Сопротивление","Мощность"],correctAnswer:1,explanation:"При последовательном соединении сила тока одинакова во всех элементах цепи.",difficulty:"medium",points:15}]},{id:"history8",title:"История",icon:(0,y.jsx)(e2,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"История России XIX век",sections:[{id:"history8-sec1",title:"Россия в первой половине XIX века",description:"Александр I и его эпоха",topics:[{id:"history8-sec1-top1",title:"Правление Александра I",description:"Либеральные реформы",lessons:[{id:"history8-sec1-top1-les1",title:"Реформы Александра I",description:"Негласный комитет",theory:`<h3>Александр I (1801-1825)</h3>
                  <h4>Либеральные реформы:</h4>
                  <ul>
                    <li>Создание министерств (1802)</li>
                    <li>Указ о вольных хлебопашцах (1803)</li>
                    <li>Реформа образования</li>
                    <li>Государственный совет (1810)</li>
                  </ul>
                  <h4>М.М. Сперанский:</h4>
                  <p>Автор плана конституционных реформ.</p>
                  <h4>Причины неудач реформ:</h4>
                  <ul>
                    <li>Сопротивление дворянства</li>
                    <li>Война с Наполеоном</li>
                    <li>Нерешительность императора</li>
                  </ul>`,examples:["Какие реформы провёл Александр I?","Кто такой Сперанский?","Почему реформы не удались?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"history8-sec1-top1-les2",title:"Отечественная война 1812 года",description:"Бородинское сражение",theory:`<h3>Отечественная война 1812</h3>
                  <h4>Причины:</h4>
                  <ul>
                    <li>Нарушение Тильзитского мира</li>
                    <li>Континентальная блокада Англии</li>
                  </ul>
                  <h4>Бородинское сражение (26 августа 1812):</h4>
                  <p>Командующие: М.И. Кутузов и Наполеон</p>
                  <p>Потери огромные с обеих сторон</p>
                  <h4>Тарутинский манёвр:</h4>
                  <p>Отход русской армии для сохранения сил.</p>
                  <h4>Итог:</h4>
                  <p>Изгнание Наполеона из России.</p>`,examples:["Когда было Бородинское сражение?","Кто командовал русской армией?","Почему Наполеон проиграл?"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"history8-sec1-top2",title:"Движение декабристов",description:"Восстание 14 декабря 1825",lessons:[{id:"history8-sec1-top2-les1",title:"Декабристы",description:"Тайные общества",theory:`<h3>Движение декабристов</h3>
                  <h4>Тайные общества:</h4>
                  <ul>
                    <li>\xabСоюз спасения\xbb (1816)</li>
                    <li>\xabСоюз благоденствия\xbb (1818)</li>
                    <li>Северное общество (Петербург)</li>
                    <li>Южное общество (Украина)</li>
                  </ul>
                  <h4>Программы:</h4>
                  <ul>
                    <li><strong>\xabКонституция\xbb</strong> Н.М. Муравьёва — конституционная монархия</li>
                    <li><strong>\xabРусская правда\xbb</strong> П.И. Пестеля — республика</li>
                  </ul>`,examples:["Какие тайные общества существовали?","Что хотели декабристы?","В чём разница программ?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"history8-sec1-top2-les2",title:"Восстание декабристов",description:"14 декабря 1825",theory:`<h3>Восстание 14 декабря 1825</h3>
                  <h4>Причины:</h4>
                  <p>Междуцарствие после смерти Александра I.</p>
                  <h4>Ход восстания:</h4>
                  <ul>
                    <li>Выступление на Сенатской площади</li>
                    <li>Требование: конституция, отмена крепостного права</li>
                    <li>Подавление войсками</li>
                  </ul>
                  <h4>Итог:</h4>
                  <ul>
                    <li>Арест и суд над декабристами</li>
                    <li>5 казнены, 120 сосланы в Сибирь</li>
                    <li>Ужесточение режима Николая I</li>
                  </ul>`,examples:["Когда произошло восстание?","Требования декабристов","Каковы последствия?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"history8-sec2",title:"Россия во второй половине XIX века",description:"Великие реформы",topics:[{id:"history8-sec2-top1",title:"Великие реформы",description:"Александр II",lessons:[{id:"history8-sec2-top1-les1",title:"Отмена крепостного права",description:"Реформа 1861 года",theory:`<h3>Крестьянская реформа 1861</h3>
                  <h4>Основные положения:</h4>
                  <ul>
                    <li>Крестьяне получили личную свободу</li>
                    <li>Земля оставалась у помещиков</li>
                    <li>Крестьяне получали надел за выкуп</li>
                    <li>Выкупные платежи в течение 49 лет</li>
                    <li>Временнообязанное состояние до выкупа</li>
                  </ul>
                  <h4>Значение:</h4>
                  <p>Конец феодализма в России.</p>
                  <h4>Недостатки:</h4>
                  <ul>
                    <li>Малоземелье крестьян</li>
                    <li>Бремя выкупных платежей</li>
                    <li>Сохранение общины</li>
                  </ul>`,examples:["Когда отменено крепостное право?","Что получили крестьяне?","Недостатки реформы"],completed:!1,difficulty:"medium",estimatedTime:35}]}]}],quiz:[{id:"history8-q1",question:"В каком году произошло Бородинское сражение?",options:["1805","1812","1814","1825"],correctAnswer:1,explanation:"Бородинское сражение произошло 26 августа 1812 года во время Отечественной войны.",difficulty:"easy",points:10},{id:"history8-q2",question:"Кто был императором России во время восстания декабристов?",options:["Александр I","Николай I","Александр II","Павел I"],correctAnswer:1,explanation:"Восстание декабристов произошло 14 декабря 1825 года в день присяги Николаю I.",difficulty:"medium",points:15},{id:"history8-q3",question:"В каком году было отменено крепостное право?",options:["1803","1825","1861","1881"],correctAnswer:2,explanation:"Крепостное право было отменено в 1861 году при Александре II.",difficulty:"easy",points:10}]},{id:"russian8",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-rose-500",description:"Синтаксис, текст, стили речи",sections:[{id:"russian8-sec1",title:"Синтаксис",description:"Сложное предложение",topics:[{id:"russian8-sec1-top1",title:"Сложное предложение",description:"Виды сложных предложений",lessons:[{id:"russian8-sec1-top1-les1",title:"Сложносочинённое предложение",description:"ССП",theory:`<h3>Сложносочинённое предложение (ССП)</h3>
                  <p>Состоит из простых предложений, соединённых сочинительными союзами.</p>
                  <h4>Союзы:</h4>
                  <ul>
                    <li><strong>Соединительные</strong>: и, да, ни—ни, тоже, также</li>
                    <li><strong>Противительные</strong>: а, но, да (=но), однако</li>
                    <li><strong>Разделительные</strong>: или, либо, то—то</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>Солнце село, и стало прохладно. (соединительный)</p>
                  <p>Он хотел помочь, но не смог. (противительный)</p>`,examples:["Определи вид ССП","Поставь запятые","Составь ССП"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"russian8-sec1-top1-les2",title:"Сложноподчинённое предложение",description:"СПП",theory:`<h3>Сложноподчинённое предложение (СПП)</h3>
                  <p>Состоит из главного и придаточного предложений.</p>
                  <h4>Виды придаточных:</h4>
                  <ul>
                    <li><strong>Определительные</strong>: который, какой (книга, которую я читаю)</li>
                    <li><strong>Изъяснительные</strong>: что, чтобы (я знаю, что он придёт)</li>
                    <li><strong>Обстоятельственные</strong>: времени, места, причины, цели</li>
                  </ul>
                  <h4>Знаки препинания:</h4>
                  <p>Запятая ставится перед союзом или союзным словом.</p>`,examples:["Найди главное и придаточное","Определи вид придаточного","Расставь знаки препинания"],completed:!1,difficulty:"medium",estimatedTime:35}]}]},{id:"russian8-sec2",title:"Текст",description:"Структура и анализ текста",topics:[{id:"russian8-sec2-top1",title:"Текст и его свойства",description:"Признаки текста",lessons:[{id:"russian8-sec2-top1-les1",title:"Признаки текста",description:"Цельность и связность",theory:`<h3>Текст как единица речи</h3>
                  <h4>Признаки текста:</h4>
                  <ul>
                    <li><strong>Смысловая цельность</strong> — единая тема, основная мысль</li>
                    <li><strong>Связность</strong> — предложения связаны между собой</li>
                    <li><strong>Членимость</strong> — деление на абзацы</li>
                    <li><strong>Завершённость</strong> — наличие начала и конца</li>
                  </ul>
                  <h4>Средства связи предложений:</h4>
                  <ul>
                    <li>Местоимения (он, этот, такой)</li>
                    <li>Союзы (и, а, но)</li>
                    <li>Наречия (поэтому, затем)</li>
                    <li>Лексические повторы, синонимы</li>
                  </ul>`,examples:["Найди средства связи в тексте","Определи тему текста","Выдели абзацы"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"russian8-sec3",title:"Стили речи",description:"Функциональные стили",topics:[{id:"russian8-sec3-top1",title:"Функциональные стили",description:"Научный, официально-деловой, публицистический",lessons:[{id:"russian8-sec3-top1-les1",title:"Стили речи",description:"Характеристика стилей",theory:`<h3>Функциональные стили речи</h3>
                  <h4>Научный стиль:</h4>
                  <ul>
                    <li>Цель: передача научных знаний</li>
                    <li>Особенности: точность, логичность, терминология</li>
                    <li>Жанры: статья, учебник, доклад</li>
                  </ul>
                  <h4>Официально-деловой стиль:</h4>
                  <ul>
                    <li>Цель: официальное общение, документы</li>
                    <li>Особенности: стандартность, безличность</li>
                    <li>Жанры: заявление, приказ, закон</li>
                  </ul>
                  <h4>Публицистический стиль:</h4>
                  <ul>
                    <li>Цель: воздействие на общественное мнение</li>
                    <li>Особенности: эмоциональность, призывность</li>
                    <li>Жанры: статья, репортаж, интервью</li>
                  </ul>`,examples:["Определи стиль текста","Найди признаки научного стиля","Составь заявление"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"russian8-q1",question:"Какой союз используется в сложноподчинённом предложении?",options:["И","НО","ЧТО","А"],correctAnswer:2,explanation:"«Что» — подчинительный союз, используется в СПП. «И», «НО», «А» — сочинительные союзы.",difficulty:"easy",points:10},{id:"russian8-q2",question:"Какой стиль используется для написания учебника?",options:["Художественный","Научный","Разговорный","Официально-деловой"],correctAnswer:1,explanation:"Учебник относится к научному стилю, так как его цель — передача точных знаний.",difficulty:"easy",points:10},{id:"russian8-q3",question:"Какое средство связи используется в тексте «Пришёл Петя. Он принёс книгу»?",options:["Синоним","Местоимение","Союз","Наречие"],correctAnswer:1,explanation:"«Он» — личное местоимение, заменяющее имя Петя, связывает предложения.",difficulty:"medium",points:15}]},{id:"literature8",title:"Литература",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Русская классика XIX века",sections:[{id:"literature8-sec1",title:"Русская классика XIX века",description:"Тургенев, Некрасов, Толстой",topics:[{id:"literature8-sec1-top1",title:"И.С. Тургенев",description:"Повести «Ася», «Первая любовь»",lessons:[{id:"literature8-sec1-top1-les1",title:"Повесть «Ася»",description:"Тема первой любви",theory:`<h3>И.С. Тургенев (1818-1883)</h3>
                  <h4>Повесть \xabАся\xbb (1858):</h4>
                  <ul>
                    <li>Тема: первая любовь, упущенное счастье</li>
                    <li>Образ Аси — естественность, искренность</li>
                    <li>Тургеневская девушка — загадочная, поэтичная</li>
                  </ul>
                  <h4>Особенности прозы:</h4>
                  <ul>
                    <li>Лиризм</li>
                    <li>Психологизм</li>
                    <li>Описание природы как отражение чувств</li>
                  </ul>
                  <h4>Главная мысль:</h4>
                  <p>\xabСчастье было так возможно...\xbb</p>`,examples:["Опиши образ Аси","Тема любви в «Асе»","Особенности тургеневской девушки"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"literature8-sec1-top1-les2",title:"Повесть «Первая любовь»",description:"Автобиографические мотивы",theory:`<h3>\xabПервая любовь\xbb (1860)</h3>
                  <h4>Сюжет:</h4>
                  <p>История первой любви 16-летнего Владимира к Зинаиде.</p>
                  <h4>Темы:</h4>
                  <ul>
                    <li>Первая любовь</li>
                    <li>Разочарование</li>
                    <li>Отношения отца и сына</li>
                  </ul>
                  <h4>Автобиографические мотивы:</h4>
                  <p>Тургенев отразил собственный опыт первой любви.</p>`,examples:["Сравни «Асю» и «Первую любовь»","Какой вкладывает смысл в «первая любовь»?","Тема отца и сына"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"literature8-sec1-top2",title:"Н.А. Некрасов",description:"Поэзия о народе",lessons:[{id:"literature8-sec1-top2-les1",title:"«Размышления у парадного подъезда»",description:"Тема народа",theory:`<h3>Н.А. Некрасов (1821-1878)</h3>
                  <h4>Темы творчества:</h4>
                  <ul>
                    <li>Судьба русского народа</li>
                    <li>Женская доля</li>
                    <li>Гражданственность поэзии</li>
                  </ul>
                  <h4>\xabРазмышления у парадного подъезда\xbb (1858):</h4>
                  <ul>
                    <li>Тема: бесправие народа, социальное неравенство</li>
                    <li>Образ народа — тружеников и страдальцев</li>
                    <li>Контраст: народ и вельможа</li>
                  </ul>
                  <h4>Главная мысль:</h4>
                  <p>\xabРоковой их удел...\xbb — трагедия народа.</p>`,examples:["Тема народа у Некрасова","Как показан контраст?","Гражданственность поэзии"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"literature8-sec1-top3",title:"Л.Н. Толстой",description:"«После бала»",lessons:[{id:"literature8-sec1-top3-les1",title:"Рассказ «После бала»",description:"Приём контраста",theory:`<h3>Л.Н. Толстой (1828-1910)</h3>
                  <h4>Рассказ \xabПосле бала\xbb (1903):</h4>
                  <ul>
                    <li><strong>Контраст</strong> как основной приём</li>
                    <li>Сцена бала и сцена наказания солдата</li>
                    <li>Тема: лицемерие, нравственный выбор</li>
                  </ul>
                  <h4>Композиция:</h4>
                  <ol>
                    <li>Рассказ в рассказе</li>
                    <li>Две контрастные части</li>
                    <li>От первого лица</li>
                  </ol>
                  <h4>Главная мысль:</h4>
                  <p>Нравственное разочарование героя.</p>`,examples:["Как используется контраст?","Тема нравственного выбора","Сравни две сцены"],completed:!1,difficulty:"medium",estimatedTime:35}]}]}],quiz:[{id:"literature8-q1",question:"Как называется приём, использованный Толстым в рассказе «После бала»?",options:["Метафора","Контраст","Гипербола","Ирония"],correctAnswer:1,explanation:"Толстой использует приём контраста: сцена бала противопоставлена сцене жестокого наказания.",difficulty:"medium",points:15},{id:"literature8-q2",question:"Кто является редактором журнала «Современник»?",options:["И.С. Тургенев","Л.Н. Толстой","Н.А. Некрасов","Ф.М. Достоевский"],correctAnswer:2,explanation:"Н.А. Некрасов был редактором журнала «Современник» с 1847 года.",difficulty:"medium",points:15},{id:"literature8-q3",question:"Какая тема главная в повести Тургенева «Ася»?",options:["Война","Первая любовь","Природа","Дружба"],correctAnswer:1,explanation:"Главная тема повести «Ася» — первая любовь и упущенное счастье.",difficulty:"easy",points:10}]},{id:"foreign8",title:"Иностранный язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-teal-400",gradient:"from-teal-500 to-cyan-500",description:"Английский язык: грамматика, чтение",sections:[{id:"foreign8-sec1",title:"Грамматика",description:"Сложные грамматические конструкции",topics:[{id:"foreign8-sec1-top1",title:"Conditional Sentences",description:"Условные предложения",lessons:[{id:"foreign8-sec1-top1-les1",title:"Types of Conditionals",description:"Типы условных предложений",theory:`<h3>Условные предложения</h3>
                  <h4>Type 0 (General truths):</h4>
                  <p>If + Present Simple, Present Simple</p>
                  <p><em>If you heat water to 100\xb0C, it boils.</em></p>
                  <h4>Type 1 (Real present/future):</h4>
                  <p>If + Present Simple, will + V</p>
                  <p><em>If it rains, I will stay at home.</em></p>
                  <h4>Type 2 (Unreal present/future):</h4>
                  <p>If + Past Simple, would + V</p>
                  <p><em>If I had money, I would buy a car.</em></p>
                  <h4>Type 3 (Unreal past):</h4>
                  <p>If + Past Perfect, would have + V3</p>
                  <p><em>If I had studied, I would have passed the exam.</em></p>`,examples:["Translate the sentence","Open the brackets","Make a conditional"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"foreign8-sec1-top2",title:"Passive Voice",description:"Страдательный залог",lessons:[{id:"foreign8-sec1-top2-les1",title:"Formation of Passive",description:"to be + V3",theory:`<h3>Passive Voice (Страдательный залог)</h3>
                  <h4>Образование:</h4>
                  <p>to be + V3 (Past Participle)</p>
                  <h4>Формы:</h4>
                  <ul>
                    <li>Present Simple: am/is/are + V3</li>
                    <li>Past Simple: was/were + V3</li>
                    <li>Future Simple: will be + V3</li>
                    <li>Present Perfect: have/has been + V3</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p><em>The book is written by Tolstoy.</em></p>
                  <p><em>The house was built in 1900.</em></p>
                  <h4>Когда используем:</h4>
                  <ul>
                    <li>Когда действие важнее, чем исполнитель</li>
                    <li>Когда исполнитель неизвестен</li>
                  </ul>`,examples:["Change to Passive","Translate into Russian","Fill in the gaps"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"foreign8-sec1-top3",title:"Reported Speech",description:"Косвенная речь",lessons:[{id:"foreign8-sec1-top3-les1",title:"Reported Speech",description:"Прямая и косвенная речь",theory:`<h3>Reported Speech (Косвенная речь)</h3>
                  <h4>Изменение времён:</h4>
                  <ul>
                    <li>Present Simple → Past Simple</li>
                    <li>Present Continuous → Past Continuous</li>
                    <li>Past Simple → Past Perfect</li>
                    <li>will → would</li>
                    <li>can → could</li>
                  </ul>
                  <h4>Примеры:</h4>
                  <p>Direct: <em>"I like music," said Tom.</em></p>
                  <p>Reported: <em>Tom said that he liked music.</em></p>
                  <h4>Местоимения:</h4>
                  <p>I → he/she, my → his/her, this → that, here → there</p>`,examples:["Change to Reported Speech","Transform the sentence","Ask questions"],completed:!1,difficulty:"medium",estimatedTime:35}]}]}],quiz:[{id:"foreign8-q1",question:"Which sentence is in Passive Voice?",options:["She writes letters.","Letters are written by her.","She is writing letters.","She wrote letters."],correctAnswer:1,explanation:'"Letters are written by her" — Passive Voice: to be (are) + V3 (written).',difficulty:"easy",points:10},{id:"foreign8-q2",question:'Change "I will come" to Reported Speech:',options:["He said he will come.","He said he would come.","He said he comes.","He said he came."],correctAnswer:1,explanation:'В косвенной речи will меняется на would: "He said he would come."',difficulty:"medium",points:15},{id:"foreign8-q3",question:"Which type of conditional expresses unreal situation in the present?",options:["Type 0","Type 1","Type 2","Type 3"],correctAnswer:2,explanation:"Type 2 (If + Past Simple, would + V) выражает нереальную ситуацию в настоящем.",difficulty:"medium",points:15}]},{id:"chemistry8",title:"Химия",icon:(0,y.jsx)(e1,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Введение в химию, реакции",sections:[{id:"chemistry8-sec1",title:"Введение",description:"Основные понятия химии",topics:[{id:"chemistry8-sec1-top1",title:"Введение в химию",description:"Вещества, атомы, молекулы",lessons:[{id:"chemistry8-sec1-top1-les1",title:"Вещества и смеси",description:"Агрегатные состояния",theory:`<h3>Введение в химию</h3>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li><strong>Вещество</strong> — то, из чего состоят физические тела</li>
                    <li><strong>Атом</strong> — наименьшая частица химического элемента</li>
                    <li><strong>Молекула</strong> — наименьшая частица вещества, сохраняющая его свойства</li>
                  </ul>
                  <h4>Агрегатные состояния:</h4>
                  <ul>
                    <li>Твёрдое</li>
                    <li>Жидкое</li>
                    <li>Газообразное</li>
                  </ul>
                  <h4>Чистые вещества и смеси:</h4>
                  <p>Чистое вещество имеет постоянный состав (H₂O).</p>
                  <p>Смесь — несколько веществ (воздух).</p>`,examples:["Чем атом отличается от молекулы?","Как разделить смесь?","Назови агрегатные состояния"],completed:!1,difficulty:"easy",estimatedTime:30}]}]},{id:"chemistry8-sec2",title:"Периодическая таблица",description:"Строение таблицы Менделеева",topics:[{id:"chemistry8-sec2-top1",title:"Периодическая таблица",description:"Группы и периоды",lessons:[{id:"chemistry8-sec2-top1-les1",title:"Структура таблицы",description:"Периоды и группы",theory:`<h3>Периодическая таблица</h3>
                  <h4>История:</h4>
                  <p>Открыта Д.И. Менделеевым в 1869 году.</p>
                  <h4>Структура таблицы:</h4>
                  <ul>
                    <li><strong>Периоды</strong> — горизонтальные ряды (7 периодов)</li>
                    <li><strong>Группы</strong> — вертикальные столбцы (18 групп)</li>
                  </ul>
                  <h4>Закономерности:</h4>
                  <ul>
                    <li>В периоде слева направо металлические свойства ослабевают</li>
                    <li>В группе сверху вниз металлические свойства усиливаются</li>
                    <li>Номер группы = число электронов на внешнем уровне</li>
                  </ul>`,examples:["Сколько периодов в таблице?","Где расположены металлы?","Определи элемент по номеру"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"chemistry8-sec2-top1-les2",title:"Химические формулы",description:"Валентность",theory:`<h3>Химические формулы</h3>
                  <h4>Валентность:</h4>
                  <p>Способность атома соединяться с определённым числом других атомов.</p>
                  <h4>Постоянная валентность:</h4>
                  <ul>
                    <li>H, Na, K — I</li>
                    <li>O, Mg, Ca — II</li>
                    <li>Al — III</li>
                  </ul>
                  <h4>Переменная валентность:</h4>
                  <p>Fe (II, III), Cu (I, II), S (II, IV, VI)</p>
                  <h4>Правило составления формул:</h4>
                  <p>Fe₂O₃: Fe(III) и O(II), НОК = 6, индексы: 6/3 = 2, 6/2 = 3</p>`,examples:["Составь формулу оксида алюминия","Определи валентность","Найди НОК"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"chemistry8-q1",question:"Кто открыл Периодическую таблицу?",options:["Ломоносов","Менделеев","Бойль","Лавуазье"],correctAnswer:1,explanation:"Д.И. Менделеев открыл Периодический закон и создал таблицу в 1869 году.",difficulty:"easy",points:10},{id:"chemistry8-q2",question:"Какая валентность у кислорода?",options:["I","II","III","IV"],correctAnswer:1,explanation:"Кислород имеет постоянную валентность II.",difficulty:"easy",points:10},{id:"chemistry8-q3",question:"Сколько периодов в Периодической таблице?",options:["5","6","7","8"],correctAnswer:2,explanation:"В Периодической таблице 7 периодов.",difficulty:"easy",points:10}]},{id:"biology8",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Растения, бактерии, грибы",sections:[{id:"biology8-sec1",title:"Царство Растения",description:"Общая характеристика",topics:[{id:"biology8-sec1-top1",title:"Строение растений",description:"Органы растения",lessons:[{id:"biology8-sec1-top1-les1",title:"Вегетативные органы",description:"Корень, стебель, лист",theory:`<h3>Вегетативные органы растений</h3>
                  <h4>Корень:</h4>
                  <ul>
                    <li>Закрепление растения в почве</li>
                    <li>Всасывание воды и минеральных веществ</li>
                    <li>Запасание питательных веществ</li>
                  </ul>
                  <h4>Стебель:</h4>
                  <ul>
                    <li>Опора для листьев и цветов</li>
                    <li>Проведение веществ</li>
                    <li>Запасание веществ</li>
                  </ul>
                  <h4>Лист:</h4>
                  <ul>
                    <li>Фотосинтез</li>
                    <li>Газообмен</li>
                    <li>Испарение воды</li>
                  </ul>`,examples:["Функции корня?","Что такое фотосинтез?","Какое строение листа?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"biology8-sec1-top1-les2",title:"Генеративные органы",description:"Цветок, плод, семя",theory:`<h3>Генеративные органы</h3>
                  <h4>Цветок:</h4>
                  <p>Орган полового размножения.</p>
                  <h4>Строение цветка:</h4>
                  <ul>
                    <li>Тычинки (тычиночные нити с пыльниками)</li>
                    <li>Пестик (рыльце, столбик, завязь)</li>
                    <li>Лепестки (венчик)</li>
                    <li>Чашелистики (чашечка)</li>
                  </ul>
                  <h4>Плод:</h4>
                  <p>Орган защиты и распространения семян.</p>
                  <h4>Семя:</h4>
                  <p>Зародыш нового растения с запасом питательных веществ.</p>`,examples:["Из чего состоит цветок?","Функция плода?","Что такое семя?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"biology8-sec2",title:"Бактерии и грибы",description:"Особые царства",topics:[{id:"biology8-sec2-top1",title:"Бактерии",description:"Микроорганизмы",lessons:[{id:"biology8-sec2-top1-les1",title:"Строение бактерий",description:"Прокариоты",theory:`<h3>Бактерии</h3>
                  <p>Одноклеточные организмы без ядра (прокариоты).</p>
                  <h4>Строение:</h4>
                  <ul>
                    <li>Клеточная мембрана</li>
                    <li>Цитоплазма</li>
                    <li>Нуклеоид (кольцевая ДНК)</li>
                    <li>Рибосомы</li>
                  </ul>
                  <h4>Формы бактерий:</h4>
                  <ul>
                    <li>Кокки (шаровидные)</li>
                    <li>Бациллы (палочковидные)</li>
                    <li>Вибрионы (изогнутые)</li>
                    <li>Спириллы (спиралевидные)</li>
                  </ul>
                  <h4>Значение:</h4>
                  <ul>
                    <li>Разложение органических веществ</li>
                    <li>Производство молочных продуктов</li>
                    <li>Болезнетворные бактерии</li>
                  </ul>`,examples:["Почему бактерии — прокариоты?","Какие формы бактерий?","Роль бактерий в природе"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"biology8-sec2-top2",title:"Грибы",description:"Царство грибов",lessons:[{id:"biology8-sec2-top2-les1",title:"Строение грибов",description:"Шляпочные грибы",theory:`<h3>Грибы</h3>
                  <p>Особое царство: не растения и не животные.</p>
                  <h4>Признаки:</h4>
                  <ul>
                    <li>Гетеротрофное питание</li>
                    <li>Наличие хитина в клеточной стенке</li>
                    <li>Запасное вещество — гликоген</li>
                  </ul>
                  <h4>Строение шляпочного гриба:</h4>
                  <ul>
                    <li><strong>Грибница (мицелий)</strong> — подземная часть</li>
                    <li><strong>Плодовое тело</strong> — шляпка и ножка</li>
                  </ul>
                  <h4>Симбиоз:</h4>
                  <p>Грибокорень — союз гриба и корней растения.</p>`,examples:["Чем грибы отличаются от растений?","Из чего состоит гриб?","Что такое грибокорень?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"biology8-q1",question:"Какой орган растения выполняет фотосинтез?",options:["Корень","Стебель","Лист","Цветок"],correctAnswer:2,explanation:"Лист — главный орган фотосинтеза, содержит хлорофилл.",difficulty:"easy",points:10},{id:"biology8-q2",question:"Почему бактерии называют прокариотами?",options:["Они одноклеточные","У них нет ядра","Они маленькие","Они вредные"],correctAnswer:1,explanation:"Прокариоты — организмы без оформленного ядра. У бактерий нет ядра.",difficulty:"medium",points:15},{id:"biology8-q3",question:"Какое вещество запасают грибы?",options:["Крахмал","Гликоген","Глюкозу","Жиры"],correctAnswer:1,explanation:"Грибы запасают гликоген, в отличие от растений (крахмал) и животных (гликоген).",difficulty:"medium",points:15}]},{id:"geography8",title:"География",icon:(0,y.jsx)(eQ,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"География России",sections:[{id:"geography8-sec1",title:"Географическое положение России",description:"Особенности положения",topics:[{id:"geography8-sec1-top1",title:"Россия на карте мира",description:"Границы и положение",lessons:[{id:"geography8-sec1-top1-les1",title:"Географическое положение",description:"Крайние точки",theory:`<h3>Географическое положение России</h3>
                  <h4>Площадь:</h4>
                  <p>17,1 млн км\xb2 — крупнейшая страна мира.</p>
                  <h4>Крайние точки:</h4>
                  <ul>
                    <li><strong>Северная</strong> — м. Челюскин (77\xb0 с.ш.)</li>
                    <li><strong>Южная</strong> — гора Базардюзю (41\xb0 с.ш.)</li>
                    <li><strong>Западная</strong> — Балтийская коса (19\xb0 в.д.)</li>
                    <li><strong>Восточная</strong> — м. Дежнёва (169\xb0 з.д.)</li>
                  </ul>
                  <h4>Границы:</h4>
                  <p>Сухопутные: 14 стран</p>
                  <p>Морские: 12 морей трёх океанов</p>`,examples:["Какова площадь России?","Назови крайние точки","С какими странами граничит?"],completed:!1,difficulty:"medium",estimatedTime:25}]},{id:"geography8-sec1-top2",title:"Часовые пояса",description:"Время в России",lessons:[{id:"geography8-sec1-top2-les1",title:"Часовые зоны России",description:"Местное и поясное время",theory:`<h3>Часовые пояса</h3>
                  <h4>Часовые зоны России:</h4>
                  <p>11 часовых зон (с UTC+2 до UTC+12)</p>
                  <h4>Местное время:</h4>
                  <p>Время на данном меридиане.</p>
                  <h4>Поясное время:</h4>
                  <p>Время в пределах часового пояса.</p>
                  <h4>Декретное время:</h4>
                  <p>Поясное время + 1 час (переход на летнее время отменён).</p>
                  <h4>Линия перемены дат:</h4>
                  <p>Проходит по 180\xb0 меридиану.</p>`,examples:["Сколько часовых зон в России?","Что такое поясное время?","Где проходит линия перемены дат?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"geography8-q1",question:"Какова площадь России?",options:["10 млн км²","12 млн км²","17,1 млн км²","22 млн км²"],correctAnswer:2,explanation:"Площадь России — 17,1 млн км², это крупнейшая страна мира.",difficulty:"easy",points:10},{id:"geography8-q2",question:"Сколько часовых зон в России?",options:["7","9","11","13"],correctAnswer:2,explanation:"В России 11 часовых зон — с UTC+2 до UTC+12.",difficulty:"medium",points:15},{id:"geography8-q3",question:"Какая крайняя северная точка России?",options:["м. Дежнёва","м. Челюскин","Балтийская коса","г. Базардюзю"],correctAnswer:1,explanation:"Крайняя северная точка — мыс Челюскин (77° с.ш.).",difficulty:"medium",points:15}]},{id:"obzh8",title:"ОБЖ",icon:(0,y.jsx)(eH,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Основы безопасности жизнедеятельности",sections:[{id:"obzh8-sec1",title:"Чрезвычайные ситуации",description:"Природные и техногенные ЧС",topics:[{id:"obzh8-sec1-top1",title:"Природные ЧС",description:"Наводнения, землетрясения",lessons:[{id:"obzh8-sec1-top1-les1",title:"Наводнения",description:"Причины и действия",theory:`<h3>Наводнения</h3>
                  <h4>Причины:</h4>
                  <ul>
                    <li>Обильные дожди</li>
                    <li>Таяние снега</li>
                    <li>Прорыв плотины</li>
                    <li>Цунами</li>
                  </ul>
                  <h4>Действия при угрозе:</h4>
                  <ol>
                    <li>Включить радио/телевизор</li>
                    <li>Собрать документы и ценности</li>
                    <li>Отключить газ и электричество</li>
                    <li>Подняться на возвышенность</li>
                  </ol>
                  <h4>После наводнения:</h4>
                  <ul>
                    <li>Не пить сырую воду</li>
                    <li>Не заходить в повреждённые здания</li>
                    <li>Провести дезинфекцию</li>
                  </ul>`,examples:["Как подготовиться к наводнению?","Что делать после наводнения?","Причины наводнений"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"obzh8-sec1-top1-les2",title:"Землетрясения",description:"Действия при землетрясении",theory:`<h3>Землетрясения</h3>
                  <h4>Признаки:</h4>
                  <ul>
                    <li>Подземный гул</li>
                    <li>Колебания почвы</li>
                    <li>Покачивание зданий</li>
                  </ul>
                  <h4>Если вы в помещении:</h4>
                  <ol>
                    <li>Встать в дверной проём или угол</li>
                    <li>Держаться подальше от окон</li>
                    <li>Не пользоваться лифтом</li>
                  </ol>
                  <h4>Если вы на улице:</h4>
                  <ul>
                    <li>Отойти от зданий</li>
                    <li>Не подходить к линиям электропередач</li>
                  </ul>`,examples:["Что делать при землетрясении в помещении?","Где укрыться?","Чего нельзя делать?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]}],quiz:[{id:"obzh8-q1",question:"Что нужно сделать в первую очередь при угрозе наводнения?",options:["Бежать на крышу","Включить радио/телевизор","Позвонить друзьям","Спрятать документы"],correctAnswer:1,explanation:"Сначала нужно узнать информацию о масштабах бедствия и дальнейших действиях.",difficulty:"easy",points:10},{id:"obzh8-q2",question:"Где лучше укрыться при землетрясении в помещении?",options:["У окна","В лифте","В дверном проёме","Под кроватью"],correctAnswer:2,explanation:"Дверной проём — одно из самых безопасных мест: прочная конструкция.",difficulty:"medium",points:15},{id:"obzh8-q3",question:"Какой сигнал подаётся при угрозе наводнения?",options:["Сирена","Колокол","Гудок завода","Радиосообщение"],correctAnswer:3,explanation:"При угрозе наводнения информация передаётся по радио и телевидению.",difficulty:"medium",points:15}]},{id:"informatics8",title:"Информатика",icon:(0,y.jsx)(eB,{className:"w-5 h-5"}),color:"text-sky-400",gradient:"from-sky-500 to-blue-500",description:"Информация и алгоритмы",sections:[{id:"informatics8-sec1",title:"Информационные процессы",description:"Обработка информации",topics:[{id:"informatics8-sec1-top1",title:"Обработка информации",description:"Алгоритмы",lessons:[{id:"informatics8-sec1-top1-les1",title:"Понятие алгоритма",description:"Свойства алгоритмов",theory:`<h3>Алгоритм</h3>
                  <p><strong>Алгоритм</strong> — последовательность действий для решения задачи.</p>
                  <h4>Свойства алгоритма:</h4>
                  <ul>
                    <li><strong>Понятность</strong> — команды понятны исполнителю</li>
                    <li><strong>Определённость</strong> — каждый шаг чётко определён</li>
                    <li><strong>Результативность</strong> — приводит к результату</li>
                    <li><strong>Массовость</strong> — применим к множеству данных</li>
                    <li><strong>Дискретность</strong> — состоит из отдельных шагов</li>
                  </ul>
                  <h4>Способы записи:</h4>
                  <ul>
                    <li>Словесный</li>
                    <li>Блок-схема</li>
                    <li>Программа</li>
                  </ul>`,examples:["Перечисли свойства алгоритма","Составь алгоритм заварки чая","Что такое блок-схема?"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"informatics8-sec1-top1-les2",title:"Исполнители алгоритмов",description:"Формальное исполнение",theory:`<h3>Исполнитель алгоритма</h3>
                  <p><strong>Исполнитель</strong> — объект, выполняющий алгоритм.</p>
                  <h4>Типы исполнителей:</h4>
                  <ul>
                    <li><strong>Формальные</strong> — не понимают смысла, выполняют команды (компьютер)</li>
                    <li><strong>Неформальные</strong> — понимают смысл, могут изменить алгоритм (человек)</li>
                  </ul>
                  <h4>Система команд исполнителя (СКИ):</h4>
                  <p>Набор команд, которые понимает исполнитель.</p>
                  <h4>Пример:</h4>
                  <p>Робот — исполнитель: вверх, вниз, влево, вправо, закрасить.</p>`,examples:["Кто такой исполнитель?","Чем формальный исполнитель отличается от неформального?","Что такое СКИ?"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"informatics8-sec2",title:"Системы счисления",description:"Двоичная система",topics:[{id:"informatics8-sec2-top1",title:"Двоичная система",description:"Основание 2",lessons:[{id:"informatics8-sec2-top1-les1",title:"Перевод чисел",description:"Из десятичной в двоичную",theory:`<h3>Двоичная система счисления</h3>
                  <p>Используются цифры 0 и 1. Основание — 2.</p>
                  <h4>Перевод из десятичной в двоичную:</h4>
                  <p>Делить на 2 и записывать остатки.</p>
                  <h4>Пример: 13₁₀ = ?₂</h4>
                  <p>13 \xf7 2 = 6, остаток 1</p>
                  <p>6 \xf7 2 = 3, остаток 0</p>
                  <p>3 \xf7 2 = 1, остаток 1</p>
                  <p>1 \xf7 2 = 0, остаток 1</p>
                  <p>Ответ: 13₁₀ = 1101₂</p>
                  <h4>Перевод из двоичной в десятичную:</h4>
                  <p>1101₂ = 1\xd72\xb3 + 1\xd72\xb2 + 0\xd72\xb9 + 1\xd72⁰ = 8 + 4 + 0 + 1 = 13₁₀</p>`,examples:["Переведи 10 в двоичную","Переведи 1010₂ в десятичную","Почему компьютеры используют двоичную систему?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"informatics8-q1",question:"Какое свойство алгоритма означает, что он состоит из отдельных шагов?",options:["Понятность","Дискретность","Массовость","Результативность"],correctAnswer:1,explanation:"Дискретность — свойство алгоритма состоять из отдельных, прерывистых шагов.",difficulty:"medium",points:15},{id:"informatics8-q2",question:"Чему равно число 10 в двоичной системе?",options:["1010","1100","1001","1011"],correctAnswer:0,explanation:"10₁₀ = 1010₂: 10 ÷ 2 = 5(0), 5 ÷ 2 = 2(1), 2 ÷ 2 = 1(0), 1 ÷ 2 = 0(1).",difficulty:"medium",points:15},{id:"informatics8-q3",question:"Кто является формальным исполнителем?",options:["Ученик","Компьютер","Учитель","Родитель"],correctAnswer:1,explanation:"Компьютер — формальный исполнитель, он выполняет команды без понимания их смысла.",difficulty:"easy",points:10}]}]},e5={id:9,name:"9 класс",shortName:"9 кл.",subjects:[{id:"algebra9",title:"Алгебра",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Квадратичные функции, прогрессии, системы уравнений",sections:[{id:"s1",title:"Квадратичная функция",description:"График и свойства параболы",topics:[{id:"t1",title:"Функция y = ax² + bx + c",description:"Свойства и график",lessons:[{id:"l1",title:"График квадратичной функции",description:"Построение параболы",theory:`<h3>Квадратичная функция</h3>
                  <p>y = ax\xb2 + bx + c — квадратичная функция, график — парабола.</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>Ветви вверх при a > 0, вниз при a < 0</li>
                    <li>Вершина: x₀ = -b/2a</li>
                    <li>Ось симметрии: x = -b/2a</li>
                    <li>Точки пересечения с OX: корни уравнения ax\xb2 + bx + c = 0</li>
                  </ul>
                  <h4>Построение графика:</h4>
                  <ol>
                    <li>Найти вершину (x₀, y₀)</li>
                    <li>Найти точки пересечения с осями</li>
                    <li>Построить симметричные точки</li>
                  </ol>`,examples:["Найди вершину параболы","Построй график y = x² - 4x + 3","Определи нули функции"],completed:!1,difficulty:"medium",estimatedTime:35}]}]},{id:"s2",title:"Неравенства",description:"Квадратные и рациональные неравенства",topics:[{id:"t1",title:"Метод интервалов",description:"Решение неравенств",lessons:[{id:"l1",title:"Решение неравенств методом интервалов",description:"Алгоритм решения",theory:`<h3>Метод интервалов</h3>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Найти нули функции (корни числителя и знаменателя)</li>
                    <li>Отметить нули на числовой прямой</li>
                    <li>Определить знаки на каждом интервале</li>
                    <li>Выбрать нужные интервалы</li>
                  </ol>
                  <h4>Правило чередования знаков:</h4>
                  <ul>
                    <li>Если множитель в чётной степени — знак не меняется</li>
                    <li>Если в нечётной — знак меняется</li>
                  </ul>
                  <h4>Пример:</h4>
                  <p>(x - 2)(x + 3) > 0</p>
                  <p>Нули: x = 2, x = -3</p>
                  <p>Ответ: (-∞; -3) ∪ (2; +∞)</p>`,examples:["Реши методом интервалов","Реши: x² - 9 < 0","Найди область определения"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s3",title:"Системы уравнений",description:"Решение систем уравнений",topics:[{id:"t1",title:"Системы нелинейных уравнений",description:"Методы решения",lessons:[{id:"l1",title:"Метод подстановки",description:"Решение систем способом подстановки",theory:`<h3>Метод подстановки</h3>
                  <p>Суть метода: выразить одну переменную через другую и подставить.</p>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Выразить одну переменную через другую из одного уравнения</li>
                    <li>Подставить это выражение в другое уравнение</li>
                    <li>Решить полученное уравнение</li>
                    <li>Найти вторую переменную</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>{x\xb2 + y\xb2 = 25</p>
                  <p>{x + y = 7</p>
                  <p>Выразим: y = 7 - x</p>
                  <p>Подставим: x\xb2 + (7-x)\xb2 = 25</p>`,examples:["Реши систему методом подстановки","Найди решения системы","Проверь решение"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"l2",title:"Метод сложения",description:"Решение систем способом сложения",theory:`<h3>Метод сложения</h3>
                  <p>Суть метода: сложить уравнения так, чтобы одна переменная исчезла.</p>
                  <h4>Алгоритм:</h4>
                  <ol>
                    <li>Умножить уравнения на числа так, чтобы коэффициенты при одной переменной стали противоположными</li>
                    <li>Сложить уравнения</li>
                    <li>Решить полученное уравнение</li>
                    <li>Найти вторую переменную</li>
                  </ol>
                  <h4>Пример:</h4>
                  <p>{x\xb2 + y = 10</p>
                  <p>{x\xb2 - y = 2</p>
                  <p>Сложим: 2x\xb2 = 12, x\xb2 = 6</p>`,examples:["Реши систему методом сложения","Умножь уравнения","Найди все решения"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s4",title:"Степень с целым показателем",description:"Свойства степеней",topics:[{id:"t1",title:"Степень с целым показателем",description:"Свойства и преобразования",lessons:[{id:"l1",title:"Определение степени",description:"Степень с целым показателем",theory:`<h3>Степень с целым показателем</h3>
                  <h4>Определение:</h4>
                  <p>aⁿ = a \xb7 a \xb7 ... \xb7 a (n раз) при n > 0</p>
                  <p>a⁰ = 1 (a ≠ 0)</p>
                  <p>a⁻ⁿ = 1/aⁿ при n > 0</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>aᵐ \xb7 aⁿ = aᵐ⁺ⁿ</li>
                    <li>aᵐ / aⁿ = aᵐ⁻ⁿ</li>
                    <li>(aᵐ)ⁿ = aᵐⁿ</li>
                    <li>(ab)ⁿ = aⁿbⁿ</li>
                    <li>(a/b)ⁿ = aⁿ/bⁿ</li>
                  </ul>`,examples:["Вычисли: 2⁻³","Упрости: x⁵ · x⁻²","Представь в виде степени"],completed:!1,difficulty:"medium",estimatedTime:25},{id:"l2",title:"Стандартный вид числа",description:"Запись чисел в стандартном виде",theory:`<h3>Стандартный вид числа</h3>
                  <p>Число в стандартном виде: a \xb7 10ⁿ, где 1 ≤ |a| < 10</p>
                  <h4>Примеры:</h4>
                  <ul>
                    <li>300 = 3 \xb7 10\xb2</li>
                    <li>0,05 = 5 \xb7 10⁻\xb2</li>
                    <li>6,38 \xb7 10⁴ = 63800</li>
                  </ul>
                  <h4>Применение:</h4>
                  <p>Используется для записи очень больших или очень малых чисел в науке.</p>`,examples:["Запиши в стандартном виде","Представь 0,0003","Вычисли и запиши"],completed:!1,difficulty:"medium",estimatedTime:20}]}]},{id:"s5",title:"Прогрессии",description:"Арифметическая и геометрическая прогрессии",topics:[{id:"t1",title:"Арифметическая прогрессия",description:"Последовательность с постоянной разностью",lessons:[{id:"l1",title:"Формулы арифметической прогрессии",description:"n-й член и сумма",theory:`<h3>Арифметическая прогрессия</h3>
                  <p>Последовательность, в которой каждый член равен предыдущему + d.</p>
                  <h4>Формулы:</h4>
                  <ul>
                    <li>a_n = a₁ + (n-1)d — n-й член</li>
                    <li>S_n = (a₁ + a_n)\xb7n/2 — сумма n членов</li>
                    <li>S_n = (2a₁ + (n-1)d)\xb7n/2 — другая форма</li>
                  </ul>
                  <h4>Свойство:</h4>
                  <p>a_n = (a_{n-1} + a_{n+1})/2 — среднее арифметическое соседних</p>
                  <h4>Пример:</h4>
                  <p>a₁ = 3, d = 2</p>
                  <p>a₅ = 3 + 4\xb72 = 11</p>
                  <p>S₅ = (3 + 11)\xb75/2 = 35</p>`,examples:["Найди a₁₀ прогрессии","Сумма первых 20 членов","Найди разность d"],completed:!1,difficulty:"medium",estimatedTime:30}]},{id:"t2",title:"Геометрическая прогрессия",description:"Последовательность с постоянным знаменателем",lessons:[{id:"l1",title:"Формулы геометрической прогрессии",description:"n-й член и сумма",theory:`<h3>Геометрическая прогрессия</h3>
                  <p>Последовательность, в которой каждый член равен предыдущему \xd7 q.</p>
                  <h4>Формулы:</h4>
                  <ul>
                    <li>b_n = b₁ \xb7 q^{n-1} — n-й член</li>
                    <li>S_n = b₁(q^n - 1)/(q - 1) при q ≠ 1 — сумма n членов</li>
                    <li>S_∞ = b₁/(1-q) при |q| < 1 — бесконечно убывающая</li>
                  </ul>
                  <h4>Свойство:</h4>
                  <p>b_n\xb2 = b_{n-1} \xb7 b_{n+1} — среднее геометрическое соседних</p>
                  <h4>Пример:</h4>
                  <p>b₁ = 2, q = 3</p>
                  <p>b₄ = 2 \xb7 3\xb3 = 54</p>
                  <p>S₄ = 2(3⁴ - 1)/(3 - 1) = 80</p>`,examples:["Найди b₅ прогрессии","Сумма бесконечной прогрессии","Найди знаменатель q"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"По какой формуле находится n-й член арифметической прогрессии?",options:["a_n = a₁ + nd","a_n = a₁ + (n-1)d","a_n = a₁ · d^n","a_n = a₁ - nd"],correctAnswer:1,explanation:"a_n = a₁ + (n-1)d, где a₁ — первый член, d — разность, n — номер члена.",difficulty:"easy",points:10},{id:"q2",question:"Геометрическая прогрессия: b₁=2, q=2. Найди b₄:",options:["8","10","16","32"],correctAnswer:2,explanation:"b₄ = b₁ · q³ = 2 · 8 = 16.",difficulty:"easy",points:10},{id:"q3",question:"Чему равно 2⁻³?",options:["-8","1/8","8","-1/8"],correctAnswer:1,explanation:"2⁻³ = 1/2³ = 1/8.",difficulty:"medium",points:15},{id:"q4",question:"Какой метод решения систем: выразить одну переменную через другую?",options:["Метод сложения","Метод подстановки","Графический метод","Метод интервалов"],correctAnswer:1,explanation:"Метод подстановки заключается в выражении одной переменной через другую.",difficulty:"easy",points:10},{id:"q5",question:"Запиши 300 в стандартном виде:",options:["30 · 10","3 · 10²","0,3 · 10³","300 · 10⁰"],correctAnswer:1,explanation:"300 = 3 · 10² — в стандартном виде коэффициент должен быть от 1 до 10.",difficulty:"medium",points:15},{id:"q6",question:"Формула вершины параболы y = ax² + bx + c:",options:["x₀ = b/2a","x₀ = -b/2a","x₀ = -b/a","x₀ = b/a"],correctAnswer:1,explanation:"Абсцисса вершины параболы: x₀ = -b/2a.",difficulty:"medium",points:15}]},{id:"geometry9",title:"Геометрия",icon:(0,y.jsx)(ex,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Векторы, координаты, тригонометрия",sections:[{id:"s1",title:"Векторы",description:"Координаты и действия с векторами",topics:[{id:"t1",title:"Координаты вектора",description:"Векторы на плоскости",lessons:[{id:"l1",title:"Понятие вектора",description:"Определение и свойства",theory:`<h3>Векторы на плоскости</h3>
                  <h4>Определение:</h4>
                  <p>Вектор — направленный отрезок. Имеет длину и направление.</p>
                  <h4>Координаты вектора:</h4>
                  <p>AB(x₂ - x₁; y₂ - y₁)</p>
                  <h4>Длина вектора:</h4>
                  <p>|a| = √(x\xb2 + y\xb2)</p>
                  <h4>Действия:</h4>
                  <ul>
                    <li>Сложение: a + b = (x₁+x₂; y₁+y₂)</li>
                    <li>Вычитание: a - b = (x₁-x₂; y₁-y₂)</li>
                    <li>Умножение на число: ka = (kx; ky)</li>
                  </ul>`,examples:["Найди координаты вектора","Длина вектора","Сложи векторы"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"t2",title:"Скалярное произведение",description:"Угол между векторами",lessons:[{id:"l1",title:"Скалярное произведение векторов",description:"Формулы и применение",theory:`<h3>Скалярное произведение</h3>
                  <h4>Формулы:</h4>
                  <p>a \xb7 b = x₁x₂ + y₁y₂ = |a|\xb7|b|\xb7cos(α)</p>
                  <h4>Свойства:</h4>
                  <ul>
                    <li>a \xb7 b = b \xb7 a</li>
                    <li>(a + b) \xb7 c = a \xb7 c + b \xb7 c</li>
                    <li>a \xb7 a = |a|\xb2</li>
                  </ul>
                  <h4>Угол между векторами:</h4>
                  <p>cos(α) = (a \xb7 b) / (|a|\xb7|b|)</p>
                  <h4>Условия:</h4>
                  <ul>
                    <li>a ⊥ b ⟺ a \xb7 b = 0</li>
                    <li>a ↑↑ b ⟺ a \xb7 b = |a|\xb7|b|</li>
                  </ul>`,examples:["Найди скалярное произведение","Определи угол","Проверь перпендикулярность"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s2",title:"Метод координат",description:"Уравнения прямой и окружности",topics:[{id:"t1",title:"Уравнения линий",description:"Прямая и окружность",lessons:[{id:"l1",title:"Уравнение окружности",description:"Окружность в координатах",theory:`<h3>Метод координат</h3>
                  <h4>Уравнение окружности:</h4>
                  <p>(x - a)\xb2 + (y - b)\xb2 = R\xb2</p>
                  <p>где (a, b) — центр, R — радиус</p>
                  <h4>Уравнение прямой:</h4>
                  <p>ax + by + c = 0</p>
                  <p>или y = kx + b</p>
                  <h4>Расстояние от точки до прямой:</h4>
                  <p>d = |Ax₀ + By₀ + C| / √(A\xb2 + B\xb2)</p>
                  <h4>Середина отрезка:</h4>
                  <p>x = (x₁ + x₂)/2, y = (y₁ + y₂)/2</p>`,examples:["Напиши уравнение окружности","Точка пересечения прямых","Расстояние от точки до прямой"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s3",title:"Соотношения между сторонами и углами треугольника",description:"Теоремы синусов и косинусов",topics:[{id:"t1",title:"Теоремы треугольника",description:"Синусы и косинусы",lessons:[{id:"l1",title:"Теоремы синусов и косинусов",description:"Решение треугольников",theory:`<h3>Теоремы треугольника</h3>
                  <h4>Теорема синусов:</h4>
                  <p>a/sin(A) = b/sin(B) = c/sin(C) = 2R</p>
                  <p>где R — радиус описанной окружности</p>
                  <h4>Теорема косинусов:</h4>
                  <p>c\xb2 = a\xb2 + b\xb2 - 2ab\xb7cos(C)</p>
                  <h4>Площадь треугольника:</h4>
                  <p>S = \xbd \xb7 a \xb7 b \xb7 sin(C)</p>
                  <p>S = abc / 4R</p>
                  <p>S = pr (r — радиус вписанной окружности)</p>`,examples:["Реши треугольник по теореме синусов","Примените теорему косинусов","Найди площадь по двум сторонам и углу"],completed:!1,difficulty:"hard",estimatedTime:40}]}]}],quiz:[{id:"q1",question:"Чему равна длина вектора a(3; 4)?",options:["5","7","12","25"],correctAnswer:0,explanation:"|a| = √(3² + 4²) = √(9 + 16) = √25 = 5.",difficulty:"easy",points:10},{id:"q2",question:"Какая теорема связывает стороны и косинус угла треугольника?",options:["Теорема синусов","Теорема Пифагора","Теорема косинусов","Теорема Фалеса"],correctAnswer:2,explanation:"Теорема косинусов: c² = a² + b² - 2ab·cos(C). Обобщение теоремы Пифагора.",difficulty:"easy",points:10},{id:"q3",question:"Уравнение окружности с центром (0;0) и радиусом 5:",options:["x² + y² = 5","x² + y² = 25","(x-5)² + (y-5)² = 5","x + y = 5"],correctAnswer:1,explanation:"x² + y² = R². При R = 5: x² + y² = 25.",difficulty:"easy",points:10},{id:"q4",question:"Векторы перпендикулярны, если их скалярное произведение равно:",options:["1","0","-1","∞"],correctAnswer:1,explanation:"a ⊥ b ⟺ a · b = 0.",difficulty:"medium",points:15},{id:"q5",question:"По теореме синусов: a/sin(A) равно:",options:["R","2R","R/2","R²"],correctAnswer:1,explanation:"a/sin(A) = b/sin(B) = c/sin(C) = 2R, где R — радиус описанной окружности.",difficulty:"medium",points:15},{id:"q6",question:"Координаты середины отрезка с концами A(2;4) и B(6;8):",options:["(4;6)","(4;12)","(8;12)","(3;4)"],correctAnswer:0,explanation:"x = (2+6)/2 = 4, y = (4+8)/2 = 6. Середина: (4;6).",difficulty:"easy",points:10}]},{id:"russian9",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Сложные предложения, пунктуация, стили речи",sections:[{id:"s1",title:"Сложносочинённые предложения",description:"ССП с сочинительными союзами",topics:[{id:"t1",title:"Структура ССП",description:"Части ССП и их связь",lessons:[{id:"l1",title:"Сочинительные союзы",description:"Союзы в ССП",theory:`<h3>Сложносочинённое предложение (ССП)</h3>
                  <p>ССП состоит из равноправных частей, соединённых сочинительными союзами.</p>
                  <h4>Группы союзов:</h4>
                  <ul>
                    <li><strong>Соединительные:</strong> и, да (=и), ни...ни, тоже, также</li>
                    <li><strong>Противительные:</strong> а, но, да (=но), однако, зато</li>
                    <li><strong>Разделительные:</strong> или, либо, то...то, не то...не то</li>
                  </ul>
                  <h4>Знаки препинания:</h4>
                  <p>Запятая ставится перед союзом.</p>
                  <p>Пример: Наступил вечер, и стало прохладно.</p>`,examples:["Определи тип союза","Поставь запятую","Составь ССП"],completed:!1,difficulty:"medium",estimatedTime:25}]}]},{id:"s2",title:"Сложноподчинённые предложения",description:"СПП с придаточными частями",topics:[{id:"t1",title:"Типы придаточных",description:"Виды придаточных предложений",lessons:[{id:"l1",title:"Придаточные определительные",description:'Придаточные с союзным словом "который"',theory:`<h3>Сложноподчинённое предложение (СПП)</h3>
                  <p>СПП состоит из главной и придаточной части. Придаточная зависит от главной.</p>
                  <h4>Типы придаточных:</h4>
                  <ul>
                    <li><strong>Определительные:</strong> какой? который? (который, какой, что)</li>
                    <li><strong>Изъяснительные:</strong> падежный вопрос (что, чтобы, как)</li>
                    <li><strong>Обстоятельственные:</strong> места, времени, причины, цели, условия</li>
                  </ul>
                  <h4>Союзы и союзные слова:</h4>
                  <p>что, чтобы, если, когда, потому что, который, какой, где, куда...</p>`,examples:["Определи тип придаточного","Найди главную часть","Поставь запятые"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"l2",title:"Придаточные обстоятельственные",description:"Придаточные места, времени, причины",theory:`<h3>Придаточные обстоятельственные</h3>
                  <h4>Виды:</h4>
                  <ul>
                    <li><strong>Места:</strong> где? куда? откуда? (где, куда, откуда)</li>
                    <li><strong>Времени:</strong> когда? (когда, пока, прежде чем)</li>
                    <li><strong>Причины:</strong> почему? (потому что, так как, ибо)</li>
                    <li><strong>Цели:</strong> зачем? (чтобы, для того чтобы)</li>
                    <li><strong>Условия:</strong> при каком условии? (если, коли)</li>
                    <li><strong>Уступки:</strong> несмотря на что? (хотя, несмотря на то что)</li>
                  </ul>`,examples:["Определи вид придаточного","Задай вопрос","Найди союз"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s3",title:"Пунктуация в сложном предложении",description:"Знаки препинания",topics:[{id:"t1",title:"Запятые в сложном предложении",description:"Правила постановки",lessons:[{id:"l1",title:"Правила пунктуации",description:"Запятые в ССП и СПП",theory:`<h3>Пунктуация в сложном предложении</h3>
                  <h4>В ССП:</h4>
                  <ul>
                    <li>Запятая перед союзами: и, а, но, или...</li>
                    <li>Исключение: общий второстепенный член</li>
                  </ul>
                  <h4>В СПП:</h4>
                  <ul>
                    <li>Придаточное отделяется запятой</li>
                    <li>Придаточное внутри главного — выделяется с двух сторон</li>
                    <li>Несколько придаточных — между ними запятые</li>
                  </ul>
                  <h4>В БСП:</h4>
                  <ul>
                    <li>Запятая — перечисление</li>
                    <li>Точка с запятой — части распространены</li>
                    <li>Двоеточие — причина, пояснение, дополнение</li>
                    <li>Тире — противопоставление, следствие, быстрая смена</li>
                  </ul>`,examples:["Расставь знаки препинания","Объясни выбор знака","Определи тип предложения"],completed:!1,difficulty:"medium",estimatedTime:30}]}]}],quiz:[{id:"q1",question:"Какой союз используется в СПП?",options:["И","НО","ЧТО","А"],correctAnswer:2,explanation:"В сложноподчинённом предложении используются подчинительные союзы: что, чтобы, если, когда и др.",difficulty:"easy",points:10},{id:"q2",question:"Какой союз является противительным?",options:["И","ТОЖЕ","НО","ИЛИ"],correctAnswer:2,explanation:"НО — противительный союз. Противительные союзы: а, но, да, однако, зато.",difficulty:"easy",points:10},{id:"q3",question:"Придаточное определительное отвечает на вопрос:",options:["Где?","Какой?","Почему?","Когда?"],correctAnswer:1,explanation:"Придаточное определительное отвечает на вопрос какой? и присоединяется союзными словами который, какой.",difficulty:"medium",points:15},{id:"q4",question:"Какой знак ставится в БСП при противопоставлении?",options:["Запятая","Двоеточие","Тире","Точка с запятой"],correctAnswer:2,explanation:"Тире в БСП ставится при противопоставлении, следствии, быстрой смене событий.",difficulty:"medium",points:15},{id:"q5",question:'Союз "чтобы" присоединяет придаточное:',options:["Места","Времени","Цели","Причины"],correctAnswer:2,explanation:"ЧТОБЫ — союз цели. Отвечает на вопрос зачем? для чего?",difficulty:"medium",points:15},{id:"q6",question:"Когда в ССП запятая НЕ ставится?",options:["Перед союзом И","При общем второстепенном члене","Между частями","Всегда ставится"],correctAnswer:1,explanation:"Если в ССП есть общий второстепенный член, запятая не ставится.",difficulty:"medium",points:15}]},{id:"physics9",title:"Физика",icon:(0,y.jsx)(eZ,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Механика, законы Ньютона, колебания",sections:[{id:"s1",title:"Законы Ньютона",description:"Основы классической механики",topics:[{id:"t1",title:"Три закона Ньютона",description:"Законы движения",lessons:[{id:"l1",title:"Законы Ньютона",description:"Первый, второй и третий законы",theory:`<h3>Законы Ньютона</h3>
                  <h4>Первый закон (инерции):</h4>
                  <p>Тело сохраняет состояние покоя или равномерного движения, пока на него не действуют силы.</p>
                  <h4>Второй закон:</h4>
                  <p>F = m \xb7 a</p>
                  <p>Ускорение прямо пропорционально силе и обратно пропорционально массе.</p>
                  <h4>Третий закон:</h4>
                  <p>Действие равно противодействию: F₁ = -F₂</p>
                  <h4>Пример:</h4>
                  <p>m = 2 кг, F = 10 Н</p>
                  <p>a = F/m = 10/2 = 5 м/с\xb2</p>`,examples:["Найди ускорение по второму закону","Пример третьего закона","Что такое инерция?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s2",title:"Механические колебания",description:"Колебательное движение",topics:[{id:"t1",title:"Гармонические колебания",description:"Характеристики колебаний",lessons:[{id:"l1",title:"Параметры колебаний",description:"Период, частота, амплитуда",theory:`<h3>Механические колебания</h3>
                  <h4>Характеристики:</h4>
                  <ul>
                    <li><strong>Амплитуда (A)</strong> — максимальное отклонение</li>
                    <li><strong>Период (T)</strong> — время одного колебания [с]</li>
                    <li><strong>Частота (ν)</strong> — число колебаний в секунду [Гц]</li>
                  </ul>
                  <h4>Формулы:</h4>
                  <ul>
                    <li>T = 1/ν</li>
                    <li>ν = 1/T</li>
                    <li>T = 2π√(l/g) — математический маятник</li>
                    <li>T = 2π√(m/k) — пружинный маятник</li>
                  </ul>
                  <h4>Уравнение колебаний:</h4>
                  <p>x = A\xb7cos(ωt + φ₀)</p>`,examples:["Найди период по частоте","Период маятника","Определи амплитуду"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s3",title:"Электромагнитные явления",description:"Магнитное поле и электромагнитная индукция",topics:[{id:"t1",title:"Магнитное поле",description:"Магнитное поле тока",lessons:[{id:"l1",title:"Магнитное поле проводника",description:"Правило буравчика",theory:`<h3>Магнитное поле</h3>
                  <h4>Свойства магнитного поля:</h4>
                  <ul>
                    <li>Порождается движущимися зарядами</li>
                    <li>Действует на движущиеся заряды</li>
                    <li>Материально</li>
                  </ul>
                  <h4>Правило буравчика:</h4>
                  <p>Если вращать буравчик по направлению тока, то направление движения рукоятки покажет направление линий магнитного поля.</p>
                  <h4>Сила Ампера:</h4>
                  <p>F = B\xb7I\xb7l\xb7sin(α)</p>
                  <h4>Сила Лоренца:</h4>
                  <p>F = q\xb7v\xb7B\xb7sin(α)</p>`,examples:["Определи направление поля","Вычисли силу Ампера","Правило левой руки"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"t2",title:"Электромагнитная индукция",description:"Закон Фарадея",lessons:[{id:"l1",title:"Закон электромагнитной индукции",description:"ЭДС индукции",theory:`<h3>Электромагнитная индукция</h3>
                  <h4>Закон Фарадея:</h4>
                  <p>ЭДС индукции равна скорости изменения магнитного потока:</p>
                  <p>ε = -ΔФ/Δt</p>
                  <h4>Магнитный поток:</h4>
                  <p>Ф = B\xb7S\xb7cos(α) [Вб]</p>
                  <h4>Правило Ленца:</h4>
                  <p>Индукционный ток направлен так, чтобы препятствовать изменению магнитного потока.</p>
                  <h4>Применение:</h4>
                  <ul>
                    <li>Генераторы тока</li>
                    <li>Трансформаторы</li>
                    <li>Индукционные плиты</li>
                  </ul>`,examples:["Вычисли ЭДС индукции","Определи направление тока","Найди магнитный поток"],completed:!1,difficulty:"hard",estimatedTime:40}]}]}],quiz:[{id:"q1",question:"По какой формуле выражается второй закон Ньютона?",options:["F = m/a","F = m · a","F = a/m","F = m + a"],correctAnswer:1,explanation:"F = m · a. Сила равна произведению массы на ускорение.",difficulty:"easy",points:10},{id:"q2",question:"Чему равен импульс тела массой 2 кг, движущегося со скоростью 3 м/с?",options:["1,5 кг·м/с","5 кг·м/с","6 кг·м/с","9 кг·м/с"],correctAnswer:2,explanation:"p = m · v = 2 · 3 = 6 кг·м/с.",difficulty:"easy",points:10},{id:"q3",question:"Формула периода математического маятника:",options:["T = 2π√(g/l)","T = 2π√(l/g)","T = √(l/g)","T = 2πl/g"],correctAnswer:1,explanation:"T = 2π√(l/g), где l — длина нити, g — ускорение свободного падения.",difficulty:"medium",points:15},{id:"q4",question:"Чему равна ЭДС индукции по закону Фарадея?",options:["ε = ΔФ/Δt","ε = -ΔФ/Δt","ε = Ф·t","ε = Ф/t"],correctAnswer:1,explanation:"ε = -ΔФ/Δt. Знак минус отражает правило Ленца.",difficulty:"medium",points:15},{id:"q5",question:"Какое правило определяет направление магнитного поля?",options:["Правило левой руки","Правило буравчика","Правило Ленца","Правило Ленца"],correctAnswer:1,explanation:"Правило буравчика определяет направление линий магнитного поля вокруг проводника с током.",difficulty:"easy",points:10},{id:"q6",question:"Связь периода и частоты колебаний:",options:["T = ν","T = 1/ν","T = 2πν","T = ν/2π"],correctAnswer:1,explanation:"T = 1/ν. Период — величина, обратная частоте.",difficulty:"easy",points:10}]},{id:"chemistry9",title:"Химия",icon:(0,y.jsx)(e1,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Химические реакции, растворы, электролиты",sections:[{id:"s1",title:"Химические реакции",description:"Типы химических реакций",topics:[{id:"t1",title:"Классификация реакций",description:"Типы реакций по различным признакам",lessons:[{id:"l1",title:"Типы химических реакций",description:"Реакции соединения, разложения, замещения, обмена",theory:`<h3>Химические реакции</h3>
                  <h4>По числу веществ:</h4>
                  <ul>
                    <li><strong>Соединения:</strong> A + B = AB</li>
                    <li><strong>Разложения:</strong> AB = A + B</li>
                    <li><strong>Замещения:</strong> A + BC = AC + B</li>
                    <li><strong>Обмена:</strong> AB + CD = AD + CB</li>
                  </ul>
                  <h4>По тепловому эффекту:</h4>
                  <ul>
                    <li><strong>Экзотермические:</strong> +Q (выделение тепла)</li>
                    <li><strong>Эндотермические:</strong> -Q (поглощение тепла)</li>
                  </ul>
                  <h4>По обратимости:</h4>
                  <ul>
                    <li>Обратимые (⇌)</li>
                    <li>Необратимые (→)</li>
                  </ul>`,examples:["Определи тип реакции","Составь уравнение","Экзо- или эндотермическая?"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s2",title:"Электролитическая диссоциация",description:"Растворы электролитов",topics:[{id:"t1",title:"Электролиты и неэлектролиты",description:"Проводники и непроводники",lessons:[{id:"l1",title:"Теория электролитической диссоциации",description:"Аррениус, диссоциация",theory:`<h3>Электролитическая диссоциация</h3>
                  <p>Распад веществ на ионы под действием растворителя.</p>
                  <h4>Электролиты:</h4>
                  <ul>
                    <li>Сильные: кислоты (HCl, H₂SO₄), щёлочи (NaOH), соли</li>
                    <li>Слабые: H₂CO₃, H₂S, NH₃\xb7H₂O</li>
                  </ul>
                  <h4>Неэлектролиты:</h4>
                  <p>Сахар, спирт, многие органические вещества.</p>
                  <h4>Примеры диссоциации:</h4>
                  <p>HCl → H⁺ + Cl⁻</p>
                  <p>NaOH → Na⁺ + OH⁻</p>
                  <p>Na₂SO₄ → 2Na⁺ + SO₄\xb2⁻</p>`,examples:["Напиши уравнение диссоциации","Определи тип электролита","Ионное уравнение"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s3",title:"Окислительно-восстановительные реакции",description:"ОВР",topics:[{id:"t1",title:"ОВР",description:"Окислители и восстановители",lessons:[{id:"l1",title:"Окислительно-восстановительные реакции",description:"Электронный баланс",theory:`<h3>ОВР</h3>
                  <p>Реакции с изменением степеней окисления.</p>
                  <h4>Процессы:</h4>
                  <ul>
                    <li><strong>Окисление:</strong> отдача электронов (S.O. ↑)</li>
                    <li><strong>Восстановление:</strong> присоединение электронов (S.O. ↓)</li>
                  </ul>
                  <h4>Агенты:</h4>
                  <ul>
                    <li><strong>Окислитель:</strong> принимает e⁻, восстанавливается</li>
                    <li><strong>Восстановитель:</strong> отдаёт e⁻, окисляется</li>
                  </ul>
                  <h4>Типичные окислители:</h4>
                  <p>KMnO₄, K₂Cr₂O₇, HNO₃, H₂O₂, O₂, Cl₂</p>
                  <h4>Типичные восстановители:</h4>
                  <p>металлы, H₂, C, CO, H₂S</p>`,examples:["Определи окислитель","Составь электронный баланс","Расставь коэффициенты"],completed:!1,difficulty:"hard",estimatedTime:40}]}]}],quiz:[{id:"q1",question:"Какой тип реакции: 2H₂ + O₂ = 2H₂O?",options:["Разложения","Соединения","Замещения","Обмена"],correctAnswer:1,explanation:"Это реакция соединения: из двух веществ образуется одно.",difficulty:"easy",points:10},{id:"q2",question:"Уравнение диссоциации H₂SO₄:",options:["H₂SO₄ → H₂⁺ + SO₄²⁻","H₂SO₄ → 2H⁺ + SO₄²⁻","H₂SO₄ → H⁺ + HSO₄⁻","H₂SO₄ не диссоциирует"],correctAnswer:1,explanation:"H₂SO₄ — сильная кислота, диссоциирует на 2H⁺ и SO₄²⁻.",difficulty:"medium",points:15},{id:"q3",question:"Процесс окисления — это:",options:["Присоединение электронов","Отдача электронов","Без изменения СО","Только для металлов"],correctAnswer:1,explanation:"Окисление — отдача электронов, степень окисления увеличивается.",difficulty:"medium",points:15},{id:"q4",question:"Какое вещество — сильный электролит?",options:["Сахар","Спирт","NaCl","Вода"],correctAnswer:2,explanation:"NaCl — соль, сильный электролит. Полностью диссоциирует в растворе.",difficulty:"easy",points:10},{id:"q5",question:"Экзотермическая реакция — это реакция с:",options:["Поглощением тепла","Выделением тепла","Без теплового эффекта","Только светом"],correctAnswer:1,explanation:"Экзотермические реакции идут с выделением тепла (+Q).",difficulty:"easy",points:10},{id:"q6",question:"KMnO₄ в ОВР — это:",options:["Восстановитель","Окислитель","Катализатор","Ингибитор"],correctAnswer:1,explanation:"KMnO₄ — сильный окислитель, Mn⁺⁷ принимает электроны.",difficulty:"medium",points:15}]},{id:"bio9",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Организм человека, генетика, эволюция",sections:[{id:"s1",title:"Организм человека",description:"Строение и функции организма",topics:[{id:"t1",title:"Системы органов",description:"Основные системы организма",lessons:[{id:"l1",title:"Системы органов человека",description:"Обзор систем органов",theory:`<h3>Организм человека</h3>
                  <h4>Основные системы органов:</h4>
                  <ul>
                    <li><strong>Опорно-двигательная:</strong> кости, мышцы</li>
                    <li><strong>Кровеносная:</strong> сердце, сосуды, кровь</li>
                    <li><strong>Дыхательная:</strong> лёгкие, дыхательные пути</li>
                    <li><strong>Пищеварительная:</strong> желудок, кишечник</li>
                    <li><strong>Нервная:</strong> мозг, нервы</li>
                    <li><strong>Эндокринная:</strong> железы внутренней секреции</li>
                  </ul>
                  <h4>Гомеостаз:</h4>
                  <p>Постоянство внутренней среды организма.</p>`,examples:["Назови системы органов","Функции системы","Органы системы"],completed:!1,difficulty:"easy",estimatedTime:25}]}]},{id:"s2",title:"Нервная система",description:"Строение и функции нервной системы",topics:[{id:"t1",title:"Строение нервной системы",description:"ЦНС и периферическая система",lessons:[{id:"l1",title:"Центральная нервная система",description:"Головной и спинной мозг",theory:`<h3>Нервная система</h3>
                  <h4>Строение:</h4>
                  <ul>
                    <li><strong>ЦНС:</strong> головной мозг, спинной мозг</li>
                    <li><strong>Периферическая:</strong> нервы, нервные узлы</li>
                  </ul>
                  <h4>Головной мозг:</h4>
                  <ul>
                    <li>Большие полушария (мышление, память)</li>
                    <li>Мозжечок (координация)</li>
                    <li>Ствол (жизненно важные центры)</li>
                  </ul>
                  <h4>Нейрон:</h4>
                  <ul>
                    <li>Тело клетки</li>
                    <li>Дендриты (вход сигналов)</li>
                    <li>Аксон (выход сигнала)</li>
                  </ul>
                  <h4>Рефлекс:</h4>
                  <p>Ответная реакция на раздражитель.</p>`,examples:["Строение нейрона","Функции мозга","Рефлекторная дуга"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s3",title:"Эволюция",description:"Развитие органического мира",topics:[{id:"t1",title:"Доказательства эволюции",description:"Эволюционная теория",lessons:[{id:"l1",title:"Эволюционное учение",description:"Дарвинизм и современные представления",theory:`<h3>Эволюция</h3>
                  <h4>Доказательства эволюции:</h4>
                  <ul>
                    <li><strong>Палеонтологические:</strong> ископаемые останки</li>
                    <li><strong>Сравнительно-анатомические:</strong> гомологичные органы</li>
                    <li><strong>Эмбриологические:</strong> сходство зародышей</li>
                    <li><strong>Молекулярно-генетические:</strong> ДНК, белки</li>
                  </ul>
                  <h4>Движущие силы эволюции:</h4>
                  <ul>
                    <li>Наследственность</li>
                    <li>Изменчивость</li>
                    <li>Естественный отбор</li>
                    <li>Борьба за существование</li>
                  </ul>
                  <h4>Результаты эволюции:</h4>
                  <p>Приспособленность, многообразие видов.</p>`,examples:["Доказательства эволюции","Движущие силы","Приспособления организмов"],completed:!1,difficulty:"medium",estimatedTime:35}]},{id:"t2",title:"Основы генетики",description:"Законы Менделя, наследственность",lessons:[{id:"l1",title:"Законы Менделя",description:"Наследование признаков",theory:`<h3>Генетика</h3>
                  <h4>Основные понятия:</h4>
                  <ul>
                    <li><strong>Ген</strong> — участок ДНК, кодирующий признак</li>
                    <li><strong>Аллели</strong> — варианты гена (A, a)</li>
                    <li><strong>Гомозигота</strong> — AA или aa</li>
                    <li><strong>Гетерозигота</strong> — Aa</li>
                  </ul>
                  <h4>Законы Менделя:</h4>
                  <p><strong>1-й закон:</strong> При скрещивании гомозигот всё потомство единообразно.</p>
                  <p><strong>2-й закон:</strong> При скрещивании гетерозигот происходит расщепление 3:1 по фенотипу.</p>
                  <p><strong>3-й закон:</strong> Гены наследуются независимо.</p>`,examples:["Реши задачу на моногибридное скрещивание","Что такое гетерозигота?","Законы Менделя"],completed:!1,difficulty:"medium",estimatedTime:35}]}]}],quiz:[{id:"q1",question:"Кто сформулировал основные законы наследственности?",options:["Дарвин","Мендель","Вавилов","Мorgan"],correctAnswer:1,explanation:"Грегор Мендель в 1865 году сформулировал законы наследственности.",difficulty:"easy",points:10},{id:"q2",question:"Как называется особь с генотипом Aa?",options:["Гомозигота","Гетерозигота","Гемизигота","Нуллисомик"],correctAnswer:1,explanation:"Гетерозигота — особь с разными аллелями гена (Aa).",difficulty:"easy",points:10},{id:"q3",question:"Центральная нервная система включает:",options:["Только нервы","Головной и спинной мозг","Только железы","Только мышцы"],correctAnswer:1,explanation:"ЦНС состоит из головного и спинного мозга.",difficulty:"easy",points:10},{id:"q4",question:"Движущая сила эволюции по Дарвину:",options:["Мутации","Естественный отбор","Дрейф генов","Изоляция"],correctAnswer:1,explanation:"Естественный отбор — главная движущая сила эволюции по Ч. Дарвину.",difficulty:"medium",points:15},{id:"q5",question:"Какой отдел мозга отвечает за координацию движений?",options:["Большие полушария","Мозжечок","Ствол","Промежуточный мозг"],correctAnswer:1,explanation:"Мозжечок отвечает за координацию движений и равновесие.",difficulty:"medium",points:15},{id:"q6",question:"Палеонтологические доказательства эволюции — это:",options:["Сходство зародышей","Ископаемые останки","Гомологичные органы","Строение ДНК"],correctAnswer:1,explanation:"Палеонтологические доказательства — ископаемые останки древних организмов.",difficulty:"medium",points:15}]},{id:"social9",title:"Обществознание",icon:(0,y.jsx)(e0,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Человек, общество, право",sections:[{id:"s1",title:"Человек и его деятельность",description:"Личность, потребности, способности",topics:[{id:"t1",title:"Личность",description:"Индивид, личность, индивидуальность",lessons:[{id:"l1",title:"Человек как личность",description:"Структура личности",theory:`<h3>Человек как личность</h3>
                  <h4>Понятия:</h4>
                  <ul>
                    <li><strong>Индивид</strong> — представитель человеческого рода</li>
                    <li><strong>Личность</strong> — человек с социальными качествами</li>
                    <li><strong>Индивидуальность</strong> — уникальные особенности</li>
                  </ul>
                  <h4>Потребности:</h4>
                  <ul>
                    <li>Биологические (еда, безопасность)</li>
                    <li>Социальные (общение, признание)</li>
                    <li>Духовные (познание, творчество)</li>
                  </ul>
                  <h4>Деятельность:</h4>
                  <ul>
                    <li>Игра — освоение мира</li>
                    <li>Учение — получение знаний</li>
                    <li>Труд — создание благ</li>
                    <li>Общение — обмен информацией</li>
                  </ul>`,examples:["В чём отличие индивида от личности?","Виды деятельности","Иерархия потребностей"],completed:!1,difficulty:"medium",estimatedTime:30}]}]},{id:"s2",title:"Право и государство",description:"Основы правоведения",topics:[{id:"t1",title:"Государство",description:"Признаки и формы государства",lessons:[{id:"l1",title:"Государство и право",description:"Основы правоведения",theory:`<h3>Государство и право</h3>
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
                    <li>Монархия — власть передаётся по наследству</li>
                    <li>Республика — выборы главы государства</li>
                  </ul>
                  <h4>Формы устройства:</h4>
                  <ul>
                    <li>Унитарное — единое государство</li>
                    <li>Федерация — субъекты с правами</li>
                  </ul>
                  <h4>Правонарушение:</h4>
                  <ul>
                    <li>Преступление — уголовная ответственность</li>
                    <li>Проступок — гражданская, административная</li>
                  </ul>`,examples:["Признаки государства","Формы правления","Что такое правонарушение?"],completed:!1,difficulty:"medium",estimatedTime:35}]}]}],quiz:[{id:"q1",question:"Что такое личность?",options:["Представитель человеческого рода","Человек с социальными качествами","Уникальные особенности","Биологический организм"],correctAnswer:1,explanation:"Личность — человек как субъект социальных отношений.",difficulty:"medium",points:15},{id:"q2",question:"Какая форма правления характеризуется наследственной властью?",options:["Республика","Демократия","Монархия","Федерация"],correctAnswer:2,explanation:"Монархия — форма правления, при которой власть передаётся по наследству.",difficulty:"easy",points:10}]}]},e6=(0,ef.default)("cpu",[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]]),e7=(0,ef.default)("scroll",[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]),e8=[e_,e$,eW,eX,eK,eG,eJ,e4,e3,e5,{id:10,name:"10 класс",shortName:"10 кл.",subjects:[{id:"algebra10",title:"Алгебра и начала анализа",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Тригонометрия, логарифмы, производные",topics:[{id:"t1",title:"Тригонометрические функции",description:"sin, cos, tg, ctg",theory:`<h3>Тригонометрические функции</h3>
          <h4>Определение:</h4>
          <p>sin α — ордината точки на единичной окружности</p>
          <p>cos α — абсцисса точки на единичной окружности</p>
          <h4>Основное тождество:</h4>
          <p>sin\xb2α + cos\xb2α = 1</p>
          <h4>Тангенс и котангенс:</h4>
          <p>tg α = sin α / cos α</p>
          <p>ctg α = cos α / sin α</p>
          <h4>Формулы приведения:</h4>
          <p>sin(π/2 - α) = cos α</p>
          <p>cos(π - α) = -cos α</p>
          <h4>Формулы сложения:</h4>
          <p>sin(α + β) = sin α cos β + cos α sin β</p>
          <p>cos(α + β) = cos α cos β - sin α sin β</p>
          <h4>Значения:</h4>
          <p>sin 30\xb0 = 1/2, sin 45\xb0 = √2/2, sin 60\xb0 = √3/2</p>`,examples:["Найди sin 150°","Формула сложения","Вычисли tg 45°"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"Производная",description:"Определение и правила дифференцирования",theory:`<h3>Производная функции</h3>
          <h4>Определение:</h4>
          <p>f'(x) = lim[f(x+h) - f(x)]/h при h→0</p>
          <h4>Геометрический смысл:</h4>
          <p>f'(x₀) = tg(α) — угловой коэффициент касательной</p>
          <h4>Таблица производных:</h4>
          <ul>
            <li>(xⁿ)' = n\xb7xⁿ⁻\xb9</li>
            <li>(sin x)' = cos x</li>
            <li>(cos x)' = -sin x</li>
            <li>(tg x)' = 1/cos\xb2x</li>
            <li>(eˣ)' = eˣ</li>
            <li>(ln x)' = 1/x</li>
          </ul>
          <h4>Правила:</h4>
          <ul>
            <li>(u + v)' = u' + v'</li>
            <li>(u \xb7 v)' = u'v + uv'</li>
            <li>(u/v)' = (u'v - uv')/v\xb2</li>
          </ul>`,examples:["Найди производную x³","Производная sin(2x)","Уравнение касательной"],completed:!1,difficulty:"hard",estimatedTime:45},{id:"t3",title:"Логарифмы",description:"Свойства логарифмов",theory:`<h3>Логарифм</h3>
          <p>log_a b = c означает aᶜ = b</p>
          <h4>Основные свойства:</h4>
          <ul>
            <li>log_a(xy) = log_a x + log_a y</li>
            <li>log_a(x/y) = log_a x - log_a y</li>
            <li>log_a xⁿ = n\xb7log_a x</li>
            <li>log_a a = 1, log_a 1 = 0</li>
          </ul>
          <h4>Формула перехода:</h4>
          <p>log_a x = log_b x / log_b a</p>
          <h4>Натуральный логарифм:</h4>
          <p>ln x = log_e x, e ≈ 2,718</p>
          <h4>Десятичный логарифм:</h4>
          <p>lg x = log₁₀ x</p>
          <h4>Пример:</h4>
          <p>log₂ 8 = 3, так как 2\xb3 = 8</p>
          <p>log₃ 27 = 3, так как 3\xb3 = 27</p>`,examples:["Вычисли log₂ 16","Свойства логарифмов","Реши уравнение: log₂ x = 5"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t4",title:"Степенная функция",description:"Свойства и графики степенных функций",theory:`<h3>Степенная функция</h3>
          <p>y = xⁿ, где n — действительное число</p>
          <h4>Свойства при натуральном n:</h4>
          <ul>
            <li>Область определения: x ∈ R (при чётном n: x ≥ 0)</li>
            <li>При n > 0: y(0) = 0, y(1) = 1</li>
            <li>При чётном n: функция чётная, график симметричен</li>
            <li>При нечётном n: функция нечётная</li>
          </ul>
          <h4>Производная:</h4>
          <p>(xⁿ)' = n\xb7xⁿ⁻\xb9</p>
          <h4>Примеры:</h4>
          <ul>
            <li>y = x\xb2 — парабола</li>
            <li>y = x\xb3 — кубическая парабола</li>
            <li>y = √x = x^(1/2) — график ветвь параболы</li>
          </ul>
          <h4>Интеграл:</h4>
          <p>∫xⁿdx = xⁿ⁺\xb9/(n+1) + C, n ≠ -1</p>`,examples:["Построй график y = x³","Найди производную x^5","Вычисли интеграл от x²"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t5",title:"Показательная функция",description:"Свойства и графики показательных функций",theory:`<h3>Показательная функция</h3>
          <p>y = aˣ, где a > 0, a ≠ 1</p>
          <h4>Свойства:</h4>
          <ul>
            <li>Область определения: x ∈ R</li>
            <li>Область значений: y > 0</li>
            <li>При a > 1: функция возрастает</li>
            <li>При 0 < a < 1: функция убывает</li>
            <li>График всегда проходит через (0, 1)</li>
          </ul>
          <h4>Свойства степени:</h4>
          <ul>
            <li>aˣ \xb7 aʸ = aˣ⁺ʸ</li>
            <li>aˣ / aʸ = aˣ⁻ʸ</li>
            <li>(aˣ)ʸ = aˣʸ</li>
            <li>(ab)ˣ = aˣ \xb7 bˣ</li>
          </ul>
          <h4>Производная:</h4>
          <p>(aˣ)' = aˣ \xb7 ln a</p>
          <p>(eˣ)' = eˣ</p>
          <h4>Примеры:</h4>
          <ul>
            <li>y = 2ˣ — экспоненциальный рост</li>
            <li>y = (1/2)ˣ — экспоненциальное убывание</li>
          </ul>`,examples:["Построй график y = 2ˣ","Найди производную 3ˣ","Реши уравнение 2ˣ = 8"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"Чему равен sin 90°?",options:["0","1","-1","√2/2"],correctAnswer:1,explanation:"sin 90° = 1. Это максимальное значение синуса, соответствует верхней точке единичной окружности.",difficulty:"easy",points:10},{id:"q2",question:"Чему равна производная x³?",options:["x²","3x²","3x","x³"],correctAnswer:1,explanation:"(xⁿ)' = n·xⁿ⁻¹, поэтому (x³)' = 3·x².",difficulty:"easy",points:10},{id:"q3",question:"log₂ 8 = ?",options:["2","3","4","8"],correctAnswer:1,explanation:"log₂ 8 = 3, так как 2³ = 8.",difficulty:"easy",points:10},{id:"q4",question:"Чему равна производная функции y = x⁵?",options:["x⁴","5x⁴","5x","x⁵"],correctAnswer:1,explanation:"(xⁿ)' = n·xⁿ⁻¹, поэтому (x⁵)' = 5·x⁴.",difficulty:"easy",points:10},{id:"q5",question:"Через какую точку проходит график любой показательной функции y = aˣ?",options:["(1, 0)","(0, 1)","(1, 1)","(0, 0)"],correctAnswer:1,explanation:"Любая показательная функция y = aˣ проходит через точку (0, 1), так как a⁰ = 1.",difficulty:"easy",points:10},{id:"q6",question:"Чему равна производная eˣ?",options:["x·eˣ⁻¹","eˣ","eˣ·ln e","ln x"],correctAnswer:1,explanation:"Производная экспоненты равна самой экспоненте: (eˣ)' = eˣ.",difficulty:"medium",points:15}]},{id:"geometry10",title:"Геометрия",icon:(0,y.jsx)(ex,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Стереометрия, многогранники",topics:[{id:"t1",title:"Аксиомы стереометрии",description:"Основные положения о пространстве",theory:`<h3>Аксиомы стереометрии</h3>
          <h4>Аксиома 1:</h4>
          <p>Через любые три точки, не лежащие на одной прямой, проходит плоскость, и притом только одна.</p>
          <h4>Аксиома 2:</h4>
          <p>Если две точки прямой лежат в плоскости, то все точки прямой лежат в этой плоскости.</p>
          <h4>Аксиома 3:</h4>
          <p>Если две плоскости имеют общую точку, то они имеют общую прямую, на которой лежат все общие точки этих плоскостей.</p>
          <h4>Следствия:</h4>
          <ul>
            <li>Через прямую и не лежащую на ней точку проходит плоскость</li>
            <li>Через две пересекающиеся прямые проходит плоскость</li>
          </ul>
          <h4>Взаимное расположение:</h4>
          <ul>
            <li>Прямая и плоскость: пересекаются, параллельны, прямая лежит в плоскости</li>
            <li>Две плоскости: пересекаются, параллельны</li>
          </ul>`,examples:["Сколько плоскостей через 3 точки?","Перпендикулярность прямой и плоскости","Параллельность плоскостей"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Многогранники",description:"Призма, пирамида, их объёмы",theory:`<h3>Многогранники</h3>
          <h4>Призма:</h4>
          <p>Многогранник, у которого две грани — равные многоугольники (основания), а остальные — параллелограммы.</p>
          <ul>
            <li>S_бок = P_осн \xb7 h (прямая призма)</li>
            <li>S_полн = S_бок + 2S_осн</li>
            <li>V = S_осн \xb7 h</li>
          </ul>
          <h4>Пирамида:</h4>
          <p>Многогранник, у которого одна грань — многоугольник (основание), а остальные — треугольники с общей вершиной.</p>
          <ul>
            <li>S_бок = \xbd \xb7 P_осн \xb7 l (правильная, l — апофема)</li>
            <li>V = ⅓ \xb7 S_осн \xb7 h</li>
          </ul>
          <h4>Правильные многогранники:</h4>
          <ul>
            <li>Тетраэдр — 4 грани</li>
            <li>Куб — 6 граней</li>
            <li>Октаэдр — 8 граней</li>
            <li>Додекаэдр — 12 граней</li>
            <li>Икосаэдр — 20 граней</li>
          </ul>`,examples:["Объём призмы","Объём пирамиды","Какой многогранник имеет 6 граней?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Тела вращения",description:"Цилиндр, конус, шар",theory:`<h3>Тела вращения</h3>
          <h4>Цилиндр:</h4>
          <p>Образован вращением прямоугольника вокруг одной из сторон.</p>
          <ul>
            <li>S_бок = 2πRh</li>
            <li>S_полн = 2πR(R + h)</li>
            <li>V = πR\xb2h</li>
          </ul>
          <h4>Конус:</h4>
          <p>Образован вращением прямоугольного треугольника вокруг катета.</p>
          <ul>
            <li>S_бок = πRl (l — образующая)</li>
            <li>S_полн = πR(R + l)</li>
            <li>V = ⅓πR\xb2h</li>
          </ul>
          <h4>Шар:</h4>
          <p>Множество точек, расстояние от которых до центра не превышает радиус.</p>
          <ul>
            <li>S = 4πR\xb2</li>
            <li>V = ⁴/₃πR\xb3</li>
          </ul>
          <h4>Сечения:</h4>
          <ul>
            <li>Сечение цилиндра плоскостью — прямоугольник или эллипс</li>
            <li>Сечение конуса плоскостью — треугольник, эллипс, парабола, гипербола</li>
            <li>Сечение шара — круг</li>
          </ul>`,examples:["Объём цилиндра с R=2, h=5","Площадь поверхности шара R=3","Объём конуса"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"По какой формуле вычисляется объём пирамиды?",options:["V = S · h","V = ⅓ · S · h","V = S² · h","V = ½ · S · h"],correctAnswer:1,explanation:"V = ⅓ · S_осн · h — объём пирамиды равен одной трети произведения площади основания на высоту.",difficulty:"easy",points:10},{id:"q2",question:"Сколько граней у куба?",options:["4","6","8","12"],correctAnswer:1,explanation:"Куб имеет 6 граней, все они — равные квадраты.",difficulty:"easy",points:10},{id:"q3",question:"Чему равен объём шара радиуса R?",options:["πR³","2πR³","4/3·πR³","4πR²"],correctAnswer:2,explanation:"V = ⁴/₃πR³ — объём шара равен четырём третям произведения π на куб радиуса.",difficulty:"medium",points:15},{id:"q4",question:"По какой формуле вычисляется площадь боковой поверхности цилиндра?",options:["πR²h","2πRh","πRh","2πR²h"],correctAnswer:1,explanation:"S_бок = 2πRh — площадь боковой поверхности цилиндра равна произведению длины окружности основания на высоту.",difficulty:"easy",points:10},{id:"q5",question:"Какое сечение шара плоскостью?",options:["Прямоугольник","Эллипс","Круг","Треугольник"],correctAnswer:2,explanation:"Любое сечение шара плоскостью является кругом.",difficulty:"easy",points:10},{id:"q6",question:"Объём конуса равен:",options:["πR²h","⅓πR²h","½πR²h","⅔πR²h"],correctAnswer:1,explanation:"V = ⅓πR²h — объём конуса равен одной трети произведения площади основания на высоту.",difficulty:"medium",points:15}]},{id:"physics10",title:"Физика",icon:(0,y.jsx)(eZ,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Молекулярная физика, термодинамика, электростатика",topics:[{id:"t1",title:"Молекулярно-кинетическая теория",description:"Строение вещества",theory:`<h3>МКТ</h3>
          <h4>Основные положения:</h4>
          <ul>
            <li>Вещество состоит из частиц (атомов, молекул)</li>
            <li>Частицы находятся в непрерывном хаотическом движении</li>
            <li>Частицы взаимодействуют друг с другом</li>
          </ul>
          <h4>Основное уравнение МКТ:</h4>
          <p>p = ⅓ \xb7 m₀n\xb7v\xb2_ср = nkT</p>
          <p>n = N/V — концентрация молекул</p>
          <h4>Температура:</h4>
          <p>T = 2E/(3k) — связь со средней кинетической энергией</p>
          <p>k = 1,38\xb710⁻\xb2\xb3 Дж/К — постоянная Больцмана</p>
          <h4>Скорость молекул:</h4>
          <p>v_ср = √(3RT/M), где M — молярная масса</p>`,examples:["Основное уравнение МКТ","Что такое температура?","Средняя скорость молекул"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Уравнение состояния идеального газа",description:"Уравнение Менделеева-Клапейрона",theory:`<h3>Идеальный газ</h3>
          <h4>Уравнение состояния:</h4>
          <p>pV = νRT = (m/M)RT</p>
          <p>где ν — количество вещества [моль], R = 8,31 Дж/(моль\xb7К)</p>
          <h4>Изопроцессы:</h4>
          <ul>
            <li><strong>Изотермический</strong> (T = const): pV = const</li>
            <li><strong>Изобарный</strong> (p = const): V/T = const</li>
            <li><strong>Изохорный</strong> (V = const): p/T = const</li>
          </ul>
          <h4>Законы:</h4>
          <ul>
            <li><strong>Закон Бойля-Мариотта</strong>: p₁V₁ = p₂V₂ (T = const)</li>
            <li><strong>Закон Гей-Люссака</strong>: V₁/T₁ = V₂/T₂ (p = const)</li>
            <li><strong>Закон Шарля</strong>: p₁/T₁ = p₂/T₂ (V = const)</li>
          </ul>`,examples:["Реши задачу с уравнением состояния","Изотермический процесс","Что такое изопроцесс?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Первый закон термодинамики",description:"Применение к изопроцессам",theory:`<h3>Первый закон термодинамики</h3>
          <p>Количество теплоты, переданное системе, идёт на изменение её внутренней энергии и на совершение работы:</p>
          <p>Q = ΔU + A</p>
          <h4>Внутренняя энергия:</h4>
          <p>U = \xb3/₂ \xb7 νRT (идеальный одноатомный газ)</p>
          <h4>Работа газа:</h4>
          <p>A = p \xb7 ΔV</p>
          <h4>Применение к изопроцессам:</h4>
          <ul>
            <li><strong>Изотермический</strong>: ΔU = 0, Q = A</li>
            <li><strong>Изохорный</strong>: A = 0, Q = ΔU</li>
            <li><strong>Изобарный</strong>: Q = ΔU + A</li>
            <li><strong>Адиабатный</strong>: Q = 0, A = -ΔU</li>
          </ul>
          <h4>КПД теплового двигателя:</h4>
          <p>η = (Q_нагр - Q_хол)/Q_нагр = A/Q_нагр</p>`,examples:["Первый закон для изохорного процесса","КПД двигателя","Что такое адиабатный процесс?"],completed:!1,difficulty:"hard",estimatedTime:40},{id:"t4",title:"Электростатика",description:"Закон Кулона, электрическое поле",theory:`<h3>Электростатика</h3>
          <h4>Закон Кулона:</h4>
          <p>F = k\xb7|q₁|\xb7|q₂|/r\xb2</p>
          <p>k = 9\xb710⁹ Н\xb7м\xb2/Кл\xb2 — коэффициент</p>
          <h4>Напряжённость поля:</h4>
          <p>E = F/q — сила, действующая на единичный заряд</p>
          <p>E = k\xb7Q/r\xb2 — поле точечного заряда</p>
          <h4>Потенциал:</h4>
          <p>φ = k\xb7Q/r</p>
          <p>φ = W/q — потенциальная энергия единичного заряда</p>
          <h4>Работа поля:</h4>
          <p>A = q(φ₁ - φ₂) = q\xb7Δφ</p>
          <h4>Конденсаторы:</h4>
          <ul>
            <li>C = ε₀εS/d — электроёмкость</li>
            <li>W = CU\xb2/2 — энергия конденсатора</li>
            <li>При последовательном: 1/C = 1/C₁ + 1/C₂</li>
            <li>При параллельном: C = C₁ + C₂</li>
          </ul>`,examples:["Сила взаимодействия зарядов","Напряжённость поля","Энергия конденсатора"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"Какая величина постоянна при изобарном процессе?",options:["Объём","Температура","Давление","Количество теплоты"],correctAnswer:2,explanation:"Изобарный процесс — процесс при постоянном давлении (p = const).",difficulty:"easy",points:10},{id:"q2",question:"Первый закон термодинамики:",options:["Q = U - A","Q = ΔU + A","Q = ΔU - A","Q = A - ΔU"],correctAnswer:1,explanation:"Q = ΔU + A — количество теплоты идёт на изменение внутренней энергии и совершение работы.",difficulty:"easy",points:10},{id:"q3",question:"Формула закона Кулона:",options:["F = kq₁q₂/r","F = kq₁q₂/r²","F = q₁q₂/r²","F = kq₁/q₂"],correctAnswer:1,explanation:"F = k·|q₁|·|q₂|/r² — сила взаимодействия двух точечных зарядов.",difficulty:"medium",points:15},{id:"q4",question:"Чему равна электроёмкость плоского конденсатора?",options:["C = ε₀S/d","C = ε₀εS/d","C = ε₀εS/r","C = Q/U"],correctAnswer:1,explanation:"C = ε₀εS/d — электроёмкость плоского конденсатора зависит от площади пластин и расстояния между ними.",difficulty:"medium",points:15},{id:"q5",question:"Что такое напряжённость электрического поля?",options:["Заряд на единицу площади","Сила на единичный заряд","Энергия поля","Потенциал"],correctAnswer:1,explanation:"E = F/q — напряжённость равна силе, действующей на единичный положительный заряд.",difficulty:"easy",points:10},{id:"q6",question:"При каком процессе Q = 0?",options:["Изотермический","Изобарный","Изохорный","Адиабатный"],correctAnswer:3,explanation:"Адиабатный процесс происходит без теплообмена с окружающей средой, Q = 0.",difficulty:"medium",points:15}]},{id:"chemistry10",title:"Химия",icon:(0,y.jsx)(e1,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Строение атома, химическая связь, реакции",topics:[{id:"t1",title:"Строение атома",description:"Модели атома, электронные оболочки",theory:`<h3>Строение атома</h3>
          <h4>Планетарная модель Резерфорда:</h4>
          <ul>
            <li>Атом состоит из положительно заряженного ядра и электронов</li>
            <li>Ядро занимает малую часть объёма атома</li>
            <li>Электроны движутся вокруг ядра</li>
          </ul>
          <h4>Состав ядра:</h4>
          <ul>
            <li>Протоны (p) — положительный заряд +1</li>
            <li>Нейтроны (n) — нейтральны</li>
            <li>Z — число протонов = порядковый номер</li>
            <li>A — массовое число = p + n</li>
          </ul>
          <h4>Изотопы:</h4>
          <p>Атомы одного элемента с разным числом нейтронов</p>
          <p>Пример: \xb9\xb2C и \xb9⁴C</p>
          <h4>Электронные оболочки:</h4>
          <ul>
            <li>На 1-м уровне — до 2 электронов</li>
            <li>На 2-м уровне — до 8 электронов</li>
            <li>На 3-м уровне — до 18 электронов</li>
          </ul>`,examples:["Строение атома углерода","Что такое изотопы?","Сколько электронов на внешнем уровне?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Химическая связь",description:"Типы химических связей",theory:`<h3>Химическая связь</h3>
          <h4>Ковалентная связь:</h4>
          <p>Образуется за счёт общих электронных пар.</p>
          <ul>
            <li><strong>Неполярная</strong>: H₂, O₂, N₂, Cl₂</li>
            <li><strong>Полярная</strong>: HCl, H₂O, NH₃</li>
          </ul>
          <h4>Ионная связь:</h4>
          <p>Образуется между металлом и неметаллом за счёт перехода электронов.</p>
          <p>Примеры: NaCl, CaO, MgCl₂</p>
          <h4>Металлическая связь:</h4>
          <p>Связь между атомами металлов через обобществлённые электроны.</p>
          <h4>Водородная связь:</h4>
          <p>Межмолекулярная связь между водородом и электроотрицательными элементами (O, N, F).</p>
          <h4>Электроотрицательность:</h4>
          <p>F > O > N > Cl > Br > I > S > C > H</p>`,examples:["Определи тип связи в H₂O","Ионная или ковалентная?","Электроотрицательность элементов"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Химические реакции",description:"Типы реакций, закон сохранения массы",theory:`<h3>Химические реакции</h3>
          <h4>Типы реакций:</h4>
          <ul>
            <li><strong>Соединения</strong>: A + B → AB</li>
            <li><strong>Разложения</strong>: AB → A + B</li>
            <li><strong>Замещения</strong>: A + BC → AC + B</li>
            <li><strong>Обмена</strong>: AB + CD → AD + CB</li>
          </ul>
          <h4>Закон сохранения массы:</h4>
          <p>Масса веществ до реакции равна массе веществ после реакции.</p>
          <h4>Расстановка коэффициентов:</h4>
          <p>Пример: CH₄ + 2O₂ → CO₂ + 2H₂O</p>
          <h4>Тепловой эффект:</h4>
          <ul>
            <li><strong>Экзотермические</strong> — выделяется тепло (+Q)</li>
            <li><strong>Эндотермические</strong> — поглощается тепло (-Q)</li>
          </ul>
          <h4>Скорость реакций:</h4>
          <p>Зависит от температуры, концентрации, поверхности контакта, катализаторов.</p>`,examples:["Уравняй реакцию","Тип реакции","Экзо- или эндотермическая?"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Чему равно число протонов в атоме?",options:["Массовому числу","Порядковому номеру","Числу нейтронов","Числу электронов на внешнем уровне"],correctAnswer:1,explanation:"Число протонов (Z) равно порядковому номеру элемента в периодической таблице.",difficulty:"easy",points:10},{id:"q2",question:"Какой тип связи в молекуле NaCl?",options:["Ковалентная неполярная","Ковалентная полярная","Ионная","Металлическая"],correctAnswer:2,explanation:"NaCl — ионное соединение, связь между металлом (Na) и неметаллом (Cl).",difficulty:"easy",points:10},{id:"q3",question:"Какой тип реакции: 2H₂ + O₂ → 2H₂O?",options:["Разложения","Замещения","Соединения","Обмена"],correctAnswer:2,explanation:"Реакция соединения: из двух веществ образуется одно.",difficulty:"easy",points:10},{id:"q4",question:"Что такое изотопы?",options:["Атомы разных элементов","Атомы с одинаковым числом нейтронов","Атомы одного элемента с разным числом нейтронов","Ионы"],correctAnswer:2,explanation:"Изотопы — атомы одного химического элемента с одинаковым числом протонов, но разным числом нейтронов.",difficulty:"medium",points:15},{id:"q5",question:"Какой элемент наиболее электроотрицательный?",options:["O","N","F","Cl"],correctAnswer:2,explanation:"Фтор (F) — самый электроотрицательный элемент в периодической таблице.",difficulty:"medium",points:15},{id:"q6",question:"При экзотермической реакции:",options:["Поглощается тепло","Выделяется тепло","Тепловой эффект равен нулю","Температура понижается"],correctAnswer:1,explanation:"Экзотермические реакции протекают с выделением теплоты (+Q).",difficulty:"easy",points:10}]},{id:"social10",title:"Обществознание",icon:(0,y.jsx)(e0,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Экономика, политика, социология",topics:[{id:"t1",title:"Экономика",description:"Основные экономические понятия",theory:`<h3>Экономика</h3>
          <h4>Факторы производства:</h4>
          <ul>
            <li><strong>Труд</strong> — физические и умственные способности людей</li>
            <li><strong>Земля</strong> — природные ресурсы</li>
            <li><strong>Капитал</strong> — средства производства</li>
            <li><strong>Предпринимательство</strong> — организация производства</li>
          </ul>
          <h4>Типы экономических систем:</h4>
          <ul>
            <li><strong>Традиционная</strong> — обычаи и традиции</li>
            <li><strong>Командная</strong> — государство планирует</li>
            <li><strong>Рыночная</strong> — спрос и предложение</li>
            <li><strong>Смешанная</strong> — рынок + госрегулирование</li>
          </ul>
          <h4>Рынок:</h4>
          <ul>
            <li>Спрос — количество товара, которое готовы купить</li>
            <li>Предложение — количество товара, которое готовы продать</li>
            <li>Равновесная цена — спрос = предложению</li>
          </ul>`,examples:["Факторы производства","Типы экономических систем","Что такое спрос?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Политическая система",description:"Государство и политические режимы",theory:`<h3>Политическая система</h3>
          <h4>Политические режимы:</h4>
          <ul>
            <li><strong>Демократия</strong> — власть народа, выборы, права человека</li>
            <li><strong>Авторитаризм</strong> — неограниченная власть лидера</li>
            <li><strong>Тоталитаризм</strong> — полный контроль над обществом</li>
          </ul>
          <h4>Признаки демократии:</h4>
          <ul>
            <li>Выборность органов власти</li>
            <li>Разделение властей</li>
            <li>Многопартийность</li>
            <li>Права и свободы человека</li>
            <li>Верховенство права</li>
          </ul>
          <h4>Разделение властей:</h4>
          <ul>
            <li><strong>Законодательная</strong> — парламент (принятие законов)</li>
            <li><strong>Исполнительная</strong> — правительство (исполнение законов)</li>
            <li><strong>Судебная</strong> — суды (правосудие)</li>
          </ul>`,examples:["Признаки демократии","Виды политических режимов","Разделение властей"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:"Какой фактор производства включает природные ресурсы?",options:["Труд","Капитал","Земля","Предпринимательство"],correctAnswer:2,explanation:"Земля как фактор производства — это природные ресурсы: пахотные земли, леса, полезные ископаемые, вода.",difficulty:"easy",points:10},{id:"q2",question:"Какой признак характеризует демократию?",options:["Единственная партия","Выборность власти","Цензура","Отсутствие оппозиции"],correctAnswer:1,explanation:"Выборность власти — ключевой признак демократии. Народ избирает представителей во властные органы.",difficulty:"easy",points:10}]},{id:"bio10",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Клетка, организм, генетика",topics:[{id:"t1",title:"Клетка",description:"Строение и функции клетки",theory:`<h3>Клетка</h3>
          <h4>Основные части:</h4>
          <ul>
            <li><strong>Ядро</strong> — хранение и передача генетической информации (ДНК)</li>
            <li><strong>Цитоплазма</strong> — полужидкая среда, в которой находятся органеллы</li>
            <li><strong>Клеточная мембрана</strong> — транспорт веществ, защита</li>
          </ul>
          <h4>Органеллы:</h4>
          <ul>
            <li><strong>Митохондрии</strong> — синтез АТФ, энергетические станции</li>
            <li><strong>Рибосомы</strong> — синтез белка</li>
            <li><strong>ЭПР</strong> — транспорт веществ</li>
            <li><strong>Комплекс Гольджи</strong> — упаковка веществ</li>
            <li><strong>Лизосомы</strong> — переваривание веществ</li>
          </ul>
          <h4>Особенности растительной клетки:</h4>
          <ul>
            <li>Клеточная стенка (целлюлоза)</li>
            <li>Хлоропласты (фотосинтез)</li>
            <li>Вакуоль (клеточный сок)</li>
          </ul>`,examples:["Функция митохондрий","Чем отличается растительная клетка?","Что такое рибосомы?"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t2",title:"Организм",description:"Обмен веществ, размножение",theory:`<h3>Обмен веществ (метаболизм)</h3>
          <h4>Два этапа:</h4>
          <ul>
            <li><strong>Пластический обмен (ассимиляция)</strong> — синтез веществ</li>
            <li><strong>Энергетический обмен (диссимиляция)</strong> — расщепление веществ</li>
          </ul>
          <h4>Этапы энергетического обмена:</h4>
          <ol>
            <li>Подготовительный — расщепление до мономеров</li>
            <li>Бескислородный — гликолиз (2 АТФ)</li>
            <li>Кислородный — клеточное дыхание (36 АТФ)</li>
          </ol>
          <h4>Размножение:</h4>
          <ul>
            <li><strong>Бесполое</strong> — митоз (дочерние клетки идентичны)</li>
            <li><strong>Половое</strong> — мейоз (гаметы с гаплоидным набором)</li>
          </ul>
          <h4>Фотосинтез:</h4>
          <p>6CO₂ + 6H₂O + свет → C₆H₁₂O₆ + 6O₂</p>`,examples:["Что такое метаболизм?","Сколько АТФ образуется?","Митоз и мейоз"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Генетика",description:"Законы наследственности",theory:`<h3>Генетика</h3>
          <h4>Основные термины:</h4>
          <ul>
            <li><strong>Ген</strong> — участок ДНК, кодирующий признак</li>
            <li><strong>Аллель</strong> — вариант гена</li>
            <li><strong>Гомозигота</strong> — AA или aa (одинаковые аллели)</li>
            <li><strong>Гетерозигота</strong> — Aa (разные аллели)</li>
          </ul>
          <h4>Законы Менделя:</h4>
          <p><strong>I закон</strong> (единообразие): AA \xd7 aa → Aa (все одинаковые)</p>
          <p><strong>II закон</strong> (расщепление): Aa \xd7 Aa → 1AA : 2Aa : 1aa</p>
          <h4>Доминирование:</h4>
          <p>Доминантный признак (A) подавляет рецессивный (a)</p>
          <h4>Решение задач:</h4>
          <p>Используй решётку Пеннета для определения генотипов потомства.</p>`,examples:["Реши генетическую задачу","Законы Менделя","Доминантный или рецессивный?"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"Какая органелла отвечает за синтез белка?",options:["Митохондрия","Рибосома","Лизосома","Ядро"],correctAnswer:1,explanation:"Рибосомы — органеллы, осуществляющие синтез белка из аминокислот по матрице мРНК.",difficulty:"easy",points:10},{id:"q2",question:"Сколько молекул АТФ образуется при полном окислении глюкозы?",options:["2","18","36-38","100"],correctAnswer:2,explanation:"При полном окислении одной молекулы глюкозы образуется 36-38 молекул АТФ.",difficulty:"medium",points:15},{id:"q3",question:"При каком делении образуются гаметы?",options:["Митоз","Мейоз","Амитоз","Бинарное деление"],correctAnswer:1,explanation:"Мейоз — деление, в результате которого образуются половые клетки (гаметы) с гаплоидным набором хромосом.",difficulty:"medium",points:15},{id:"q4",question:"Что такое гетерозигота?",options:["AA","aa","Aa","XX"],correctAnswer:2,explanation:"Гетерозигота — организм с разными аллелями гена (Aa).",difficulty:"easy",points:10},{id:"q5",question:"Какой органоид есть только в растительной клетке?",options:["Митохондрия","Хлоропласт","Рибосома","Ядро"],correctAnswer:1,explanation:"Хлоропласты — органоиды, осуществляющие фотосинтез, есть только в растительных клетках.",difficulty:"easy",points:10},{id:"q6",question:"Второй закон Менделя — это закон:",options:["Единообразия","Расщепления","Независимого наследования","Сцепления"],correctAnswer:1,explanation:"Второй закон Менделя — закон расщепления: при скрещивании гетерозигот потомство расщепляется 3:1 по фенотипу.",difficulty:"medium",points:15}]},{id:"informatics10",title:"Информатика",icon:(0,y.jsx)(e6,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программирование, алгоритмы",topics:[{id:"t1",title:"Алгоритмы",description:"Базовые алгоритмические конструкции",theory:`<h3>Алгоритмы</h3>
          <h4>Свойства алгоритма:</h4>
          <ul>
            <li><strong>Дискретность</strong> — состоит из шагов</li>
            <li><strong>Понятность</strong> — понятен исполнителю</li>
            <li><strong>Определённость</strong> — каждый шаг чётко определён</li>
            <li><strong>Результативность</strong> — приводит к результату</li>
            <li><strong>Массовость</strong> — применим к множеству данных</li>
          </ul>
          <h4>Базовые конструкции:</h4>
          <ul>
            <li><strong>Следование</strong> — команды выполняются последовательно</li>
            <li><strong>Ветвление</strong> — выбор по условию (if-else)</li>
            <li><strong>Цикл</strong> — повторение (for, while)</li>
          </ul>
          <h4>Сложность алгоритмов:</h4>
          <p>O(n) — линейная, O(log n) — логарифмическая, O(n\xb2) — квадратичная</p>`,examples:["Линейный алгоритм","Цикл for","Что такое ветвление?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Программирование",description:"Основы программирования",theory:`<h3>Программирование</h3>
          <h4>Типы данных:</h4>
          <ul>
            <li><strong>integer</strong> — целые числа</li>
            <li><strong>real/float</strong> — вещественные числа</li>
            <li><strong>string</strong> — строки</li>
            <li><strong>boolean</strong> — логический (true/false)</li>
          </ul>
          <h4>Операторы:</h4>
          <ul>
            <li>Присваивание: x = 5</li>
            <li>Ввод: input()</li>
            <li>Вывод: print()</li>
          </ul>
          <h4>Условный оператор:</h4>
          <p>if условие: действие</p>
          <p>else: иначе</p>
          <h4>Циклы:</h4>
          <p>for i in range(n): действие</p>
          <p>while условие: действие</p>
          <h4>Массивы (списки):</h4>
          <p>arr = [1, 2, 3, 4, 5]</p>`,examples:["Напиши цикл for","Условный оператор","Типы данных"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Какая алгоритмическая конструкция используется для повторения действий?",options:["Следование","Ветвление","Цикл","Присваивание"],correctAnswer:2,explanation:"Цикл — это алгоритмическая конструкция, обеспечивающая многократное выполнение последовательности действий.",difficulty:"easy",points:10},{id:"q2",question:"Какой тип данных используется для хранения текста?",options:["integer","real","string","boolean"],correctAnswer:2,explanation:"string (строка) — тип данных для хранения последовательности символов (текста).",difficulty:"easy",points:10}]},{id:"russian10",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Фонетика, лексика, грамматика",topics:[{id:"t1",title:"Фонетика и орфоэпия",description:"Звуки речи, ударение",theory:`<h3>Фонетика и орфоэпия</h3>
          <h4>Гласные звуки:</h4>
          <ul>
            <li>Ударные: [а], [о], [э], [у], [ы], [и]</li>
            <li>Безударные: [а], [и], [ы] — редуцируются</li>
          </ul>
          <h4>Согласные звуки:</h4>
          <ul>
            <li>Звонкие/глухие: [б]-[п], [в]-[ф], [г]-[к], [д]-[т], [ж]-[ш], [з]-[с]</li>
            <li>Твёрдые/мягкие: парные и непарные</li>
            <li>Всегда мягкие: [ч'], [щ'], [й']</li>
            <li>Всегда твёрдые: [ж], [ш], [ц]</li>
          </ul>
          <h4>Орфоэпия:</h4>
          <ul>
            <li>Ударение в словах: звонИт, тОрты, каталОг</li>
            <li>Произношение: [ш]ы, [ч']н, [ч'н]</li>
          </ul>`,examples:["Определи количество звуков","Поставь ударение","Звонкий или глухой?"],completed:!1,difficulty:"medium",estimatedTime:30},{id:"t2",title:"Лексика и фразеология",description:"Лексическое значение слов",theory:`<h3>Лексика и фразеология</h3>
          <h4>Типы лексики:</h4>
          <ul>
            <li><strong>Однозначные</strong> — одно значение (бинокль)</li>
            <li><strong>Многозначные</strong> — несколько значений (рука)</li>
            <li><strong>Синонимы</strong> — близкие по значению (бежать — мчаться)</li>
            <li><strong>Антонимы</strong> — противоположные (большой — маленький)</li>
            <li><strong>Омонимы</strong> — одинаковые по звучанию, разные по значению (ключ)</li>
          </ul>
          <h4>Фразеологизмы:</h4>
          <p>Устойчивые сочетания слов: бить баклуши, водить за нос, спустя рукава</p>
          <h4>Исконно русские и заимствованные:</h4>
          <ul>
            <li>Исконные: хлеб, вода, семья</li>
            <li>Заимствованные: компьютер, футбол, ванна</li>
          </ul>`,examples:["Подбери синоним","Определи антонимы","Значение фразеологизма"],completed:!1,difficulty:"medium",estimatedTime:35},{id:"t3",title:"Грамматика",description:"Морфология и синтаксис",theory:`<h3>Грамматика</h3>
          <h4>Части речи:</h4>
          <ul>
            <li><strong>Самостоятельные</strong>: существительное, прилагательное, глагол, наречие, числительное, местоимение, причастие, деепричастие</li>
            <li><strong>Служебные</strong>: предлог, союз, частица</li>
            <li><strong>Особые</strong>: междометие</li>
          </ul>
          <h4>Склонения существительных:</h4>
          <ul>
            <li>1-е: мама, папа, дядя (ж.р. и м.р. на -а, -я)</li>
            <li>2-е: стол, окно, поле (м.р. и ср.р.)</li>
            <li>3-е: мать, ночь (ж.р. на -ь)</li>
          </ul>
          <h4>Спряжения глаголов:</h4>
          <ul>
            <li>I спряжение: -ешь, -ет, -ем, -ете, -ут/-ют</li>
            <li>II спряжение: -ишь, -ит, -им, -ите, -ат/-ят</li>
          </ul>`,examples:["Определи часть речи","Склонение существительного","Спряжение глагола"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"Какой звук всегда мягкий?",options:["[ж]","[ш]","[ч]","[ц]"],correctAnswer:2,explanation:"[ч] — всегда мягкий согласный звук. Также всегда мягкие [щ] и [й].",difficulty:"easy",points:10},{id:"q2",question:"Что такое синонимы?",options:["Слова с противоположным значением","Слова с близким значением","Одинаковые по звучанию слова","Устаревшие слова"],correctAnswer:1,explanation:"Синонимы — слова, близкие или одинаковые по значению, но разные по написанию и звучанию.",difficulty:"easy",points:10},{id:"q3",question:'К какой части речи относится слово "быстро"?',options:["Существительное","Прилагательное","Наречие","Глагол"],correctAnswer:2,explanation:'"Быстро" — наречие, отвечает на вопрос "как?" и обозначает признак действия.',difficulty:"easy",points:10},{id:"q4",question:'Какое склонение у слова "мама"?',options:["1-е","2-е","3-е","Несклоняемое"],correctAnswer:0,explanation:"Существительные женского рода на -а, -я относятся к 1-му склонению.",difficulty:"easy",points:10},{id:"q5",question:'Какой фразеологизм означает "бездельничать"?',options:["Бить баклуши","Витать в облаках","Держать язык за зубами","Семь пятниц на неделе"],correctAnswer:0,explanation:'"Бить баклуши" — бездельничать, праздно проводить время.',difficulty:"medium",points:15},{id:"q6",question:'Ударение в слове "звонит":',options:["звОнит","звонИт","Звонит","звони"],correctAnswer:1,explanation:"Правильное ударение: звонИт. Ударение падает на последний слог.",difficulty:"easy",points:10}]},{id:"literature10",title:"Литература",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Русская литература XIX-XX веков",topics:[{id:"t1",title:"Ф.М. Достоевский",description:'"Преступление и наказание"',theory:`<h3>📖 "Преступление и наказание"</h3>
          <h4>Роман (1866)</h4>
          <h4>Герои:</h4>
          <ul>
            <li><strong>Родион Раскольников</strong> — теория "сильной личности"</li>
            <li><strong>Соня Мармеладова</strong> — "праведница", носительница нравственности</li>
            <li><strong>Порфирий Петрович</strong> — следователь</li>
          </ul>
          <h4>Теория Раскольникова:</h4>
          <p>Люди делятся на "тварей дрожащих" и "право имеющих"</p>
          <h4>Главная мысль:</h4>
          <p>Нельзя строить счастье на чужом горе. Путь к спасению — через раскаяние и любовь.</p>`,examples:["Теория Раскольникова","Образ Сони","Почему Раскольников признался?"],completed:!1,difficulty:"hard",estimatedTime:45}],quiz:[{id:"q1",question:'Кто написал "Преступление и наказание"?',options:["Толстой","Достоевский","Тургенев","Гоголь"],correctAnswer:1,explanation:'"Преступление и наказание" — роман Ф.М. Достоевского, опубликованный в 1866 году.',difficulty:"easy",points:10}]},{id:"history10",title:"История",icon:(0,y.jsx)(e7,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"История России: Древняя Русь — XVII век",topics:[{id:"t1",title:"Древняя Русь",description:"Образование и расцвет Древнерусского государства",theory:`<h3>Древняя Русь (IX — начало XII в.)</h3>
          <h4>Образование государства:</h4>
          <ul>
            <li>862 г. — призвание варягов (Рюрик)</li>
            <li>882 г. — объединение Киева и Новгорода (Олег)</li>
          </ul>
          <h4>Первые князья:</h4>
          <ul>
            <li><strong>Рюрик</strong> (862-879) — основатель династии</li>
            <li><strong>Олег</strong> (879-912) — объединитель земель</li>
            <li><strong>Игорь</strong> (912-945) — погиб от древлян</li>
            <li><strong>Ольга</strong> (945-962) — реформа сбора дани (уроки, погосты)</li>
            <li><strong>Святослав</strong> (962-972) — военные походы</li>
            <li><strong>Владимир</strong> (980-1015) — крещение Руси (988)</li>
            <li><strong>Ярослав Мудрый</strong> (1019-1054) — расцвет, "Русская Правда"</li>
          </ul>
          <h4>Крещение Руси:</h4>
          <p>988 г. — князь Владимир крестил Русь</p>`,examples:["Первые князья","Крещение Руси","Ярослав Мудрый"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t2",title:"Раздробленность",description:"Период раздробленности Руси",theory:`<h3>Раздробленность (XII — XV вв.)</h3>
          <h4>Причины раздробленности:</h4>
          <ul>
            <li>Рост экономической самостоятельности земель</li>
            <li>Усложнение системы управления</li>
            <li>Междоусобицы князей</li>
          </ul>
          <h4>Крупные княжества:</h4>
          <ul>
            <li><strong>Владимиро-Суздальское</strong> — Андрей Боголюбский, Всеволод Большое Гнездо</li>
            <li><strong>Галицко-Волынское</strong> — Даниил Галицкий</li>
            <li><strong>Новгородская земля</strong> — республиканское правление</li>
          </ul>
          <h4>Монгольское нашествие:</h4>
          <ul>
            <li>1223 г. — битва на реке Калке</li>
            <li>1237-1240 гг. — нашествие Батыя</li>
            <li>Зависимость от Орды (ярлык на княжение, дань)</li>
          </ul>`,examples:["Причины раздробленности","Битва на Калке","Монгольское иго"],completed:!1,difficulty:"medium",estimatedTime:40},{id:"t3",title:"Объединение земель",description:"Образование единого Русского государства",theory:`<h3>Объединение земель (XIV — начало XVI в.)</h3>
          <h4>Возвышение Москвы:</h4>
          <ul>
            <li><strong>Даниил Александрович</strong> — основатель московской династии</li>
            <li><strong>Иван Калита</strong> (1325-1340) — накопление богатства, расширение земель</li>
          </ul>
          <h4>Освобождение от Орды:</h4>
          <ul>
            <li>1380 г. — Куликовская битва (Дмитрий Донской)</li>
            <li>1480 г. — Стояние на реке Угре (Иван III) — конец ига</li>
          </ul>
          <h4>Образование государства:</h4>
          <ul>
            <li><strong>Иван III</strong> (1462-1505) — объединение земель, принял титул "государь всея Руси"</li>
            <li><strong>Василий III</strong> (1505-1533) — завершение объединения</li>
          </ul>
          <h4>Судебник 1497 г.:</h4>
          <p>Первый общерусский свод законов</p>`,examples:["Возвышение Москвы","Куликовская битва","Иван III"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:"В каком году произошло крещение Руси?",options:["862","882","988","1036"],correctAnswer:2,explanation:"Крещение Руси произошло в 988 году при князе Владимире.",difficulty:"easy",points:10},{id:"q2",question:"Кто крестил Русь?",options:["Олег","Игорь","Владимир","Ярослав"],correctAnswer:2,explanation:"Князь Владимир (Владимир Святославич) крестил Русь в 988 году.",difficulty:"easy",points:10},{id:"q3",question:"Когда была Куликовская битва?",options:["1223","1380","1480","1612"],correctAnswer:1,explanation:"Куликовская битва состоялась 8 сентября 1380 года. Русское войско под предводительством Дмитрия Донского победило ордынцев.",difficulty:"easy",points:10},{id:"q4",question:'Кто получил прозвище "Калита"?',options:["Дмитрий Донской","Иван I","Иван III","Василий III"],correctAnswer:1,explanation:'Иван I (Иван Калита) получил прозвище за щедрость ("калита" — кошель для денег).',difficulty:"medium",points:15},{id:"q5",question:"Какое событие произошло в 1480 году?",options:["Крещение Руси","Куликовская битва","Стояние на Угре","Судебник"],correctAnswer:2,explanation:"Стояние на реке Угре (1480) — конец монголо-татарского ига при Иване III.",difficulty:"medium",points:15},{id:"q6",question:'Кто составил "Русскую Правду"?',options:["Владимир","Ярослав Мудрый","Иван Калита","Дмитрий Донской"],correctAnswer:1,explanation:'"Русская Правда" — первый письменный свод законов Древней Руси, составленный при Ярославе Мудром.',difficulty:"medium",points:15}]},{id:"foreign10",title:"Иностранный язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Английский язык: Upper-Intermediate",topics:[{id:"t1",title:"Modal Verbs",description:"Модальные глаголы",theory:`<h3>Modal Verbs</h3>
          <h4>Основные модальные глаголы:</h4>
          <ul>
            <li><strong>can/could</strong> — способность, возможность</li>
            <li><strong>may/might</strong> — вероятность, разрешение</li>
            <li><strong>must</strong> — обязанность, необходимость</li>
            <li><strong>should</strong> — совет</li>
            <li><strong>would</strong> — вежливая просьба</li>
          </ul>
          <h4>Perfect Modal Verbs:</h4>
          <ul>
            <li><strong>must have done</strong> — должно быть, сделал (вывод о прошлом)</li>
            <li><strong>should have done</strong> — следовало сделать (но не сделал)</li>
            <li><strong>could have done</strong> — мог бы сделать</li>
          </ul>
          <h4>Примеры:</h4>
          <p><em>He must have forgotten about the meeting.</em></p>
          <p><em>You should have studied harder.</em></p>`,examples:["Переведи с модальным глаголом","Perfect Modal","Выбери правильный модальный глагол"],completed:!1,difficulty:"medium",estimatedTime:30}],quiz:[{id:"q1",question:'Что означает "must have done"?',options:["Запрещено делать","Должно быть, сделал","Должен сделать","Не сделал"],correctAnswer:1,explanation:'Must have done — вывод о прошлом: "должно быть, сделал" (вероятность).',difficulty:"medium",points:15}]}]},{id:11,name:"11 класс",shortName:"11 кл.",subjects:[{id:"algebra11",title:"Алгебра и начала анализа",icon:(0,y.jsx)(eM,{className:"w-5 h-5"}),color:"text-blue-400",gradient:"from-blue-500 to-violet-500",description:"Интегралы, уравнения, ЕГЭ",topics:[{id:"t1",title:"Первообразная и интеграл",description:"Нахождение первообразных функций",theory:`<h3>Первообразная</h3>
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
          </ul>`,examples:["Реши: √(x+3) = 5","Реши: √x + √(x-3) = 3","Реши: √(x²-3) = x-3"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Чему равна первообразная функции f(x) = x²?",options:["x³","x³/3","2x","x³/2"],correctAnswer:1,explanation:"Первообразная x² равна x³/3 + C. Проверка: (x³/3)' = 3x²/3 = x².",difficulty:"medium",points:15},{id:"q2",question:"Решите уравнение: 2ˣ = 8",options:["x = 2","x = 3","x = 4","x = 8"],correctAnswer:1,explanation:"2ˣ = 8 = 2³, следовательно x = 3.",difficulty:"easy",points:10},{id:"q3",question:"Чему равен log₂8?",options:["2","3","4","8"],correctAnswer:1,explanation:"log₂8 = 3, так как 2³ = 8.",difficulty:"easy",points:10}]},{id:"geometry11",title:"Геометрия",icon:(0,y.jsx)(ex,{className:"w-5 h-5"}),color:"text-purple-400",gradient:"from-purple-500 to-pink-500",description:"Стереометрия, тела, координаты",topics:[{id:"t1",title:"Объёмы тел",description:"Вычисление объёмов многогранников и тел вращения",theory:`<h3>Формулы объёмов</h3>
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
          <p>Нормальный вектор: n⃗ = (A, B, C)</p>`,examples:["Найди длину вектора","Скалярное произведение","Уравнение плоскости"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Объём шара радиуса 3 равен:",options:["12π","27π","36π","36π"],correctAnswer:2,explanation:"V = 4/3 · πR³ = 4/3 · π · 27 = 36π.",difficulty:"medium",points:15},{id:"q2",question:"Площадь поверхности шара радиуса 2:",options:["4π","8π","16π","32π"],correctAnswer:2,explanation:"S = 4πR² = 4π · 4 = 16π.",difficulty:"easy",points:10}]},{id:"russian11",title:"Русский язык",icon:(0,y.jsx)(eO,{className:"w-5 h-5"}),color:"text-red-400",gradient:"from-red-500 to-orange-500",description:"Сочинение ЕГЭ, нормы языка",topics:[{id:"t1",title:"Сочинение ЕГЭ",description:"Структура и написание сочинения",theory:`<h3>Сочинение по русскому языку (задание 27)</h3>
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
          <p>В бессоюзном предложении (противопоставление, следствие)</p>`,examples:["Расставь знаки препинания","Объясни постановку","Бессоюзные предложения"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Какое слово пишется с НН?",options:["серебря...ый","глиня...ый","торжестве...ый","птичий"],correctAnswer:2,explanation:"Торжественный — пишется НН (образовано от основы на -н- + суффикс -енн-).",difficulty:"medium",points:15},{id:"q2",question:"В каком случае нужна запятая?",options:["читал_и писал","быстро_но уверенно","идти_не зная куда","очень_красивый"],correctAnswer:2,explanation:'Запятая нужна перед деепричастным оборотом "не зная куда".',difficulty:"medium",points:15}]},{id:"literature11",title:"Литература",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-yellow-500",description:"Литература XX века, сочинение",topics:[{id:"t1",title:"М.А. Булгаков",description:"Мастер и Маргарита",theory:`<h3>М.А. Булгаков (1891-1940)</h3>
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
          <p>"Прошёл день, ничем не омрачённый, почти счастливый."</p>`,examples:["Образ Шухова","Лагерная жизнь","Нравственный выбор"],completed:!1,difficulty:"medium",estimatedTime:40}],quiz:[{id:"q1",question:'Кто автор романа "Мастер и Маргарита"?',options:["Шолохов","Булгаков","Солженицын","Пастернак"],correctAnswer:1,explanation:'"Мастер и Маргарита" — роман Михаила Афанасьевича Булгакова, написанный в 1928-1940 годах.',difficulty:"easy",points:10},{id:"q2",question:'Как зовут главного героя "Тихого Дона"?',options:["Андрей Болконский","Григорий Мелехов","Пётр Гринёв","Евгений Онегин"],correctAnswer:1,explanation:'Григорий Пантелеевич Мелехов — главный герой романа-эпопеи М.А. Шолохова "Тихий Дон".',difficulty:"easy",points:10},{id:"q3",question:'О чём рассказывает "Один день Ивана Денисовича"?',options:["О войне","О колхозе","О жизни в лагере","О городе"],correctAnswer:2,explanation:"Рассказ Солженицына описывает один день заключённого в сталинском лагере.",difficulty:"easy",points:10}]},{id:"physics11",title:"Физика",icon:(0,y.jsx)(eZ,{className:"w-5 h-5"}),color:"text-pink-400",gradient:"from-pink-500 to-rose-500",description:"Электродинамика, квантовая физика",topics:[{id:"t1",title:"Электромагнитная индукция",description:"Закон Фарадея, правило Ленца",theory:`<h3>Электромагнитная индукция</h3>
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
          </ul>`,examples:["Работа выхода","Кинетическая энергия фотоэлектронов","Красная граница"],completed:!1,difficulty:"hard",estimatedTime:40}],quiz:[{id:"q1",question:"Формула закона электромагнитной индукции:",options:["ε = B·S","ε = -ΔΦ/Δt","ε = L·I","ε = q/C"],correctAnswer:1,explanation:"ЭДС индукции равна скорости изменения магнитного потока со знаком минус: ε = -ΔΦ/Δt.",difficulty:"medium",points:15},{id:"q2",question:"Период колебаний в контуре с L=1 Гн и C=1 мкФ:",options:["2π·10⁻³ с","2π·10⁻⁶ с","2π с","π с"],correctAnswer:0,explanation:"T = 2π√(LC) = 2π√(1·10⁻⁶) = 2π·10⁻³ с ≈ 6.28 мс.",difficulty:"medium",points:15},{id:"q3",question:"Что такое фотоэффект?",options:["Испускание электронов веществом под действием света","Отражение света","Преломление света","Поляризация света"],correctAnswer:0,explanation:"Фотоэффект — испускание электронов веществом под действием электромагнитного излучения (света).",difficulty:"easy",points:10}]},{id:"chemistry11",title:"Химия",icon:(0,y.jsx)(e1,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Общая химия, биохимия",topics:[{id:"t1",title:"Окислительно-восстановительные реакции",description:"ОВР и электронный баланс",theory:`<h3>ОВР</h3>
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
          <p>ДНК, РНК — носители генетической информации</p>`,examples:["Строение белков","Реакции глюкозы","Гидролиз жиров"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Степень окисления азота в HNO₃:",options:["+3","+4","+5","+2"],correctAnswer:2,explanation:"HNO₃: H(+1), O(-2)·3 = -6, значит N = +5. Проверка: +1 + 5 + (-6) = 0.",difficulty:"medium",points:15},{id:"q2",question:"Какая соль подвергается гидролизу по аниону?",options:["NaCl","K₂SO₄","CH₃COONa","NH₄Cl"],correctAnswer:2,explanation:"CH₃COONa — ацетат натрия. Ацетат-ион связывает H⁺, среда щелочная.",difficulty:"medium",points:15}]},{id:"biology11",title:"Биология",icon:(0,y.jsx)(eI,{className:"w-5 h-5"}),color:"text-lime-400",gradient:"from-lime-500 to-green-500",description:"Общая биология, экология",topics:[{id:"t1",title:"Наследственность и изменчивость",description:"Генетика и мутации",theory:`<h3>Изменчивость</h3>
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
          <p>Переход энергии на следующий уровень ~10%</p>`,examples:["Экологические пирамиды","Цепи питания","Охрана природы"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Какой вид изменчивости наследуется?",options:["Модификационная","Мутационная","Фенотипическая","Онтогенетическая"],correctAnswer:1,explanation:"Мутационная изменчивость связана с изменением генетического материала и передаётся потомству.",difficulty:"medium",points:15},{id:"q2",question:"Кто открыл центры происхождения культурных растений?",options:["Менделеев","Дарвин","Вавилов","Мичурин"],correctAnswer:2,explanation:"Н.И. Вавилов выделил 7 центров происхождения культурных растений.",difficulty:"easy",points:10}]},{id:"social11",title:"Обществознание",icon:(0,y.jsx)(e0,{className:"w-5 h-5"}),color:"text-emerald-400",gradient:"from-emerald-500 to-teal-500",description:"Право, экономика, социология",topics:[{id:"t1",title:"Конституционное право",description:"Основы конституционного строя РФ",theory:`<h3>Конституция РФ (1993)</h3>
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
          <p>Обесценивание денег, рост цен</p>`,examples:["Закон спроса","Виды безработицы","Налоги"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Когда была принята действующая Конституция РФ?",options:["1991","1993","2000","2008"],correctAnswer:1,explanation:"Конституция РФ принята всенародным голосованием 12 декабря 1993 года.",difficulty:"easy",points:10},{id:"q2",question:"С какого возраста наступает полная дееспособность?",options:["С 14 лет","С 16 лет","С 18 лет","С 21 года"],correctAnswer:2,explanation:"Полная гражданская дееспособность наступает с 18 лет (совершеннолетие).",difficulty:"easy",points:10},{id:"q3",question:"Что такое инфляция?",options:["Рост зарплат","Обесценивание денег","Снижение цен","Безработица"],correctAnswer:1,explanation:"Инфляция — устойчивое повышение общего уровня цен, обесценивание денег.",difficulty:"easy",points:10}]},{id:"history11",title:"История",icon:(0,y.jsx)(eg,{className:"w-5 h-5"}),color:"text-amber-400",gradient:"from-amber-500 to-orange-500",description:"История XX-XXI веков",topics:[{id:"t1",title:"Великая Отечественная война",description:"1941-1945 годы",theory:`<h3>Великая Отечественная война (1941-1945)</h3>
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
          </ul>`,examples:["Экономические реформы","Внешняя политика","Достижения России"],completed:!1,difficulty:"medium",estimatedTime:35}],quiz:[{id:"q1",question:"Когда началась Великая Отечественная война?",options:["22 июня 1940","22 июня 1941","1 сентября 1939","9 мая 1945"],correctAnswer:1,explanation:"22 июня 1941 года Германия напала на СССР — начало Великой Отечественной войны.",difficulty:"easy",points:10},{id:"q2",question:"Кто был первым космонавтом?",options:["Armstrong","Гагарин","Титов","Леонов"],correctAnswer:1,explanation:"Юрий Алексеевич Гагарин — первый человек в космосе, 12 апреля 1961 года.",difficulty:"easy",points:10},{id:"q3",question:"Когда был принят референдумом текст Конституции РФ?",options:["1991","1993","1996","2000"],correctAnswer:1,explanation:"Конституция РФ принята всенародным голосованием 12 декабря 1993 года.",difficulty:"easy",points:10}]},{id:"informatics11",title:"Информатика",icon:(0,y.jsx)(e6,{className:"w-5 h-5"}),color:"text-indigo-400",gradient:"from-indigo-500 to-purple-500",description:"Программирование, ЕГЭ",topics:[{id:"t1",title:"Алгоритмы и структуры данных",description:"Сортировка, поиск, рекурсия",theory:`<h3>Алгоритмы</h3>
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
          </ul>`,examples:["BFS поиск пути","DFS обход","Кратчайший путь Дейкстры"],completed:!1,difficulty:"hard",estimatedTime:45}],quiz:[{id:"q1",question:"Какова сложность бинарного поиска?",options:["O(n)","O(n²)","O(log n)","O(1)"],correctAnswer:2,explanation:"Бинарный поиск делит массив пополам на каждом шаге, сложность O(log n).",difficulty:"medium",points:15},{id:"q2",question:"Какой принцип работы стека?",options:["FIFO","LIFO","LILO","FILO"],correctAnswer:1,explanation:"LIFO — Last In, First Out. Последний вошёл — первый вышел.",difficulty:"easy",points:10},{id:"q3",question:"Что такое граф?",options:["Упорядоченный набор","Множество вершин и рёбер","Таблица данных","Функция"],correctAnswer:1,explanation:"Граф — это множество вершин (V) и рёбер (E), соединяющих эти вершины.",difficulty:"easy",points:10}]},{id:"english11",title:"Иностранный язык",icon:(0,y.jsx)(eV,{className:"w-5 h-5"}),color:"text-cyan-400",gradient:"from-cyan-500 to-blue-500",description:"Английский язык, ЕГЭ",topics:[{id:"t1",title:"Грамматика: времена",description:"Система времён английского языка",theory:`<h3>Времена в английском языке</h3>
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
          </ul>`,examples:["Напиши email",'Эссе "За и против"',"Опиши фото"],completed:!1,difficulty:"medium",estimatedTime:45}],quiz:[{id:"q1",question:'Выбери правильный вариант: "I ___ to Paris last year."',options:["have been","was","had been","am"],correctAnswer:1,explanation:"Past Simple используется для действий в прошлом с указанием времени (last year).",difficulty:"medium",points:15},{id:"q2",question:'Какой тип условного: "If I were rich, I would travel."',options:["Type 0","Type 1","Type 2","Type 3"],correctAnswer:2,explanation:"Type 2 — нереальное условие в настоящем. If + Past, would + V.",difficulty:"medium",points:15}]},{id:"ege11",title:"Подготовка к ЕГЭ",icon:(0,y.jsx)(eb,{className:"w-5 h-5"}),color:"text-orange-400",gradient:"from-orange-500 to-red-500",description:"Финальная подготовка к экзаменам",topics:[{id:"t1",title:"Стратегии сдачи ЕГЭ",description:"Как максимизировать баллы",theory:`<h3>Подготовка к ЕГЭ</h3>
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
          <p>IT, медицина, экология, робототехника</p>`,examples:["Тест на профориентацию","Профессии будущего","Востребованные специальности"],completed:!1,difficulty:"easy",estimatedTime:25}],quiz:[{id:"q1",question:"До какого числа подаются документы в вуз?",options:["До 1 июля","До 1 августа","До 15 августа","До 1 сентября"],correctAnswer:1,explanation:"Документы в вузы принимаются до 1 августа (очная форма обучения).",difficulty:"easy",points:10},{id:"q2",question:"Что нужно взять на ЕГЭ обязательно?",options:["Телефон","Паспорт","Книги","Ноутбук"],correctAnswer:1,explanation:"Паспорт — обязательный документ для допуска к ЕГЭ. Также нужен пропуск.",difficulty:"easy",points:10}]}]}],e9=(0,x.createContext)(null),te=[{text:"Образование — это то, что остаётся, когда вы забыли всё, чему вас учили.",author:"Альберт Эйнштейн"},{text:"Учиться никогда не поздно.",author:"Народная мудрость"},{text:"Знание — сила.",author:"Фрэнсис Бэкон"},{text:"Век живи — век учись.",author:"Народная мудрость"},{text:"Кто хочет — тот добьётся, кто ищет — тот всегда найдёт.",author:"Народная мудрость"},{text:"Учение — свет, а неучение — тьма.",author:"Народная мудрость"},{text:"Повторение — мать учения.",author:"Народная мудрость"},{text:"Корень учения горек, да плод его сладок.",author:"Народная мудрость"},{text:"Нет такого пути, который не вёл бы к цели.",author:"Оноре де Бальзак"},{text:"Талант — это способность сказать что-то новое, а гений — способность сказать это просто.",author:"Оноре де Бальзак"},{text:"Гений — это один процент вдохновения и девяносто девять процентов пота.",author:"Томас Эдисон"},{text:"Единственный способ делать великую работу — любить то, что вы делаете.",author:"Стив Джобс"},{text:"Чем больше я узнаю, тем больше понимаю, что ничего не знаю.",author:"Сократ"},{text:"Не бойтесь, что не знаете — бойтесь, что не учитесь.",author:"Китайская мудрость"},{text:"Книги — это корабли мысли, странствующие по волнам времени.",author:"Фрэнсис Бэкон"}];function tt({children:e}){let[t,i]=(0,x.useState)(1),[l,s]=(0,x.useState)(new Set([1])),[o,n]=(0,x.useState)(""),[r,a]=(0,x.useState)("subjects"),[d,c]=(0,x.useState)(null),[p,h]=(0,x.useState)({}),[u,m]=(0,x.useState)({level:1,experience:0,totalPoints:0,topicsCompleted:0,quizzesCompleted:0,perfectQuizzes:0,streak:0,maxStreak:0,lastActiveDate:"",totalStudyTime:0,rank:"Новичок"}),[f,g]=(0,x.useState)(eC),[b,v]=(0,x.useState)(eP),[w,j]=(0,x.useState)(!1),[T,q]=(0,x.useState)([]),[k,N]=(0,x.useState)(""),[S,A]=(0,x.useState)(0),[C,P]=(0,x.useState)(null),[E,M]=(0,x.useState)(!1),[I,R]=(0,x.useState)(0),[z,_]=(0,x.useState)(!1),[O,D]=(0,x.useState)(null),[V,L]=(0,x.useState)(null),[F,H]=(0,x.useState)(!1),[B,$]=(0,x.useState)(!0),[U,W]=(0,x.useState)(!1),[X,Y]=(0,x.useState)(!1),[K,Q]=(0,x.useState)([]),[G,J]=(0,x.useState)({topicsToday:0,quizzesToday:0,pointsToday:0,timeToday:0}),[Z,ee]=(0,x.useState)([]),[et,ei]=(0,x.useState)({}),[el,es]=(0,x.useState)(0),[eo,en]=(0,x.useState)(!1),[er,ea]=(0,x.useState)(3),[ed,ec]=(0,x.useState)(1),[ep,eh]=(0,x.useState)(null),[eu,ef]=(0,x.useState)(0),[ey,ex]=(0,x.useState)(0),[eg,eb]=(0,x.useState)(!1),[ev,ew]=(0,x.useState)(0),[ej,eT]=(0,x.useState)(0),[eq,ek]=(0,x.useState)([]);(0,x.useEffect)(()=>{let e=localStorage.getItem("schoolProgress_v2"),t=localStorage.getItem("schoolStats_v2"),i=localStorage.getItem("schoolAchievements_v2"),l=localStorage.getItem("visitedClasses_v2"),o=localStorage.getItem("dailyTasks_v2"),n=localStorage.getItem("lastActiveDate_v2"),r=localStorage.getItem("activityLog_v2"),a=localStorage.getItem("dailyStats_v2"),d=localStorage.getItem("streakFreeze_v2"),c=localStorage.getItem("bookmarks_v2"),p=localStorage.getItem("notes_v2"),u=localStorage.getItem("studyTime_v2"),f=localStorage.getItem("dailyChallengeDone_v2"),y=localStorage.getItem("perfectQuizzesCount_v2"),x=localStorage.getItem("totalChallengesCompleted_v2"),b=localStorage.getItem("currentCombo_v2"),w=localStorage.getItem("maxCombo_v2"),j=localStorage.getItem("recentTopics_v2");if(e&&h(JSON.parse(e)),t&&m(JSON.parse(t)),i)try{let e=JSON.parse(i),t=eC.map(t=>{let i=e.find(e=>e.id===t.id);return i?{...t,unlocked:i.unlocked,unlockedAt:i.unlockedAt}:t});g(t)}catch{}l&&s(new Set(JSON.parse(l))),o&&v(JSON.parse(o)),r&&Q(JSON.parse(r)),a&&J(JSON.parse(a)),d&&ea(JSON.parse(d)),c&&ee(JSON.parse(c)),p&&ei(JSON.parse(p)),u&&es(JSON.parse(u)),f&&eb(JSON.parse(f)),y&&ew(JSON.parse(y)),x&&eT(JSON.parse(x)),b&&ef(JSON.parse(b)),w&&ex(JSON.parse(w)),j&&ek(JSON.parse(j));let T=new Date().toDateString(),q=n||"";if(q!==T){let e=new Date;e.setDate(e.getDate()-1),q===e.toDateString()?m(e=>({...e,streak:e.streak+1,maxStreak:Math.max(e.maxStreak,e.streak+1),lastActiveDate:T})):""!==q?(m(e=>({...e,streak:1,lastActiveDate:T})),v(eP),J({topicsToday:0,quizzesToday:0,pointsToday:0,timeToday:0})):m(e=>({...e,lastActiveDate:T})),localStorage.setItem("lastActiveDate_v2",T)}},[]),(0,x.useEffect)(()=>{localStorage.setItem("schoolProgress_v2",JSON.stringify(p)),localStorage.setItem("schoolStats_v2",JSON.stringify(u));let e=f.map(e=>({id:e.id,unlocked:e.unlocked,unlockedAt:e.unlockedAt}));localStorage.setItem("schoolAchievements_v2",JSON.stringify(e)),localStorage.setItem("visitedClasses_v2",JSON.stringify([...l])),localStorage.setItem("dailyTasks_v2",JSON.stringify(b)),localStorage.setItem("activityLog_v2",JSON.stringify(K)),localStorage.setItem("dailyStats_v2",JSON.stringify(G)),localStorage.setItem("streakFreeze_v2",JSON.stringify(er)),localStorage.setItem("bookmarks_v2",JSON.stringify(Z)),localStorage.setItem("notes_v2",JSON.stringify(et)),localStorage.setItem("studyTime_v2",JSON.stringify(el)),localStorage.setItem("dailyChallengeDone_v2",JSON.stringify(eg)),localStorage.setItem("perfectQuizzesCount_v2",JSON.stringify(ev)),localStorage.setItem("totalChallengesCompleted_v2",JSON.stringify(ej)),localStorage.setItem("currentCombo_v2",JSON.stringify(eu)),localStorage.setItem("maxCombo_v2",JSON.stringify(ey)),localStorage.setItem("recentTopics_v2",JSON.stringify(eq))},[p,u,f,l,b,K,G,er,Z,et,el,eg,ev,ej,eu,ey,eq]),(0,x.useEffect)(()=>{let e=null;return eo&&(e=setInterval(()=>{es(e=>e+1)},1e3)),()=>{e&&clearInterval(e)}},[eo]);let eN=(0,x.useCallback)(e=>{let t=em[0];for(let i of em)e>=i.minLevel&&(t=i);return t},[]),eS=(0,x.useCallback)(e=>{if(B)try{let t=new(window.AudioContext||window.webkitAudioContext),i=t.createOscillator(),l=t.createGain();i.connect(l),l.connect(t.destination);let s={success:{frequency:523.25,duration:.15,type:"sine",frequencyEnd:659.25},error:{frequency:200,duration:.2,type:"sawtooth"},achievement:{frequency:523.25,duration:.3,type:"sine",frequencyEnd:783.99},click:{frequency:800,duration:.05,type:"sine"},levelup:{frequency:392,duration:.5,type:"sine",frequencyEnd:784}},o=s[e]||s.click;i.type=o.type,i.frequency.setValueAtTime(o.frequency,t.currentTime),o.frequencyEnd&&i.frequency.exponentialRampToValueAtTime(o.frequencyEnd,t.currentTime+o.duration),l.gain.setValueAtTime(.3,t.currentTime),l.gain.exponentialRampToValueAtTime(.01,t.currentTime+o.duration),i.start(t.currentTime),i.stop(t.currentTime+o.duration)}catch{}},[B]),eA=(0,x.useCallback)(e=>{let t=Math.round(e*ed);m(e=>{let i=e.experience+t,l=e.level,s=e.totalPoints+t,o=!1;for(;i>=100;)i-=100,l++,o=!0;o&&(setTimeout(()=>eS("levelup"),100),H(!0),setTimeout(()=>H(!1),4e3));let n=eN(l);return{...e,experience:i,level:l,totalPoints:s,rank:n.name}})},[eN,eS,ed]),eE=(0,x.useCallback)((e,t)=>{let i=t.lessons[0]?.id||t.id,l=p[e]?.[i];if(h(t=>{let s={...t};return s[e]||(s[e]={}),s[e][i]=!l,s}),!l){eS("success");let e=t.lessons[0]?.difficulty==="easy"?15:t.lessons[0]?.difficulty==="medium"?25:40;eA(e),v(t=>t.map(t=>{if("topics"===t.type&&!t.completed){let e=t.progress+1;return{...t,progress:e,completed:e>=t.target}}if("points"===t.type&&!t.completed){let i=t.progress+e;return{...t,progress:i,completed:i>=t.target}}return t})),J(t=>({...t,topicsToday:t.topicsToday+1,pointsToday:t.pointsToday+e}));let i={id:Date.now().toString(),type:"topic",title:t.title,timestamp:new Date().toISOString(),points:e};Q(e=>[i,...e.slice(0,49)])}m(e=>({...e,topicsCompleted:l?e.topicsCompleted-1:e.topicsCompleted+1}))},[p,eA,eS]),eM=(0,x.useCallback)(e=>{let t=[];return(e.sections&&(t=e.sections.flatMap(e=>e.topics.flatMap(e=>e.lessons))),e.topics&&(t=[...t,...e.topics]),0===t.length)?0:Math.round(t.filter(t=>p[e.id]?.[t.id]).length/t.length*100)},[p]),eI=(0,x.useMemo)(()=>{let e=0,t=0;return e8.forEach(i=>{i.subjects.forEach(i=>{if(i.sections){let l=i.sections.flatMap(e=>e.topics.flatMap(e=>e.lessons));e+=l.length,l.forEach(e=>{p[i.id]?.[e.id]&&t++})}i.topics&&(e+=i.topics.length,i.topics.forEach(e=>{p[i.id]?.[e.id]&&t++}))})}),e>0?Math.round(t/e*100):0},[p]),eR=(0,x.useMemo)(()=>{let e=0;return e8.forEach(t=>{t.subjects.forEach(t=>{t.sections&&t.sections.flatMap(e=>e.topics.flatMap(e=>e.lessons)).forEach(i=>{p[t.id]?.[i.id]&&e++}),t.topics&&t.topics.forEach(i=>{p[t.id]?.[i.id]&&e++})})}),e},[p]),ez=(0,x.useMemo)(()=>{let e=e8.find(e=>e.id===t);return e?o?e.subjects.filter(e=>e.title.toLowerCase().includes(o.toLowerCase())||e.description.toLowerCase().includes(o.toLowerCase())):e.subjects:[]},[t,o]),e_=(0,x.useMemo)(()=>te[new Date().getDate()%te.length],[]);return(0,x.useEffect)(()=>{let e=[...f],t=!1,i=(i,l)=>{let s=e.findIndex(e=>e.id===i);-1!==s&&!e[s].unlocked&&l&&(e[s].unlocked=!0,e[s].unlockedAt=new Date().toISOString(),t=!0,eA(e[s].points),eS("achievement"),H(!0),setTimeout(()=>H(!1),3e3))};i("first_step",eR>=1),i("explorer",eR>=10),i("quiz_master",u.quizzesCompleted>=5),i("streak_3",u.streak>=3),i("bookmark_first",Z.length>=1),i("note_taker",Object.keys(et).filter(e=>et[e]?.trim()).length>=1),i("challenge_first",ej>=1),i("scholar",eR>=50),i("expert",eR>=100),i("streak_7",u.streak>=7),i("streak_14",u.streak>=14),i("quiz_pro",u.quizzesCompleted>=20),i("bookmark_collector",Z.length>=10),i("all_classes",l.size>=12),i("streak_30",u.streak>=30),i("knowledge_seeker",eR>=200),i("perfect_ten",ev>=10),i("challenge_master",ej>=30),i("streak_100",u.streak>=100),i("perfectionist",ev>=50),i("grandmaster",u.level>=100),t&&g(e)},[eR,u.quizzesCompleted,u.streak,u.level,l.size,f,eA,eS,Z.length,et,ev,ej]),(0,x.useEffect)(()=>{let e=e=>{if(!(e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement)){if("?"===e.key)return void Y(!0);if("Escape"===e.key){Y(!1),_(!1),w&&j(!1);return}if(e.key>="1"&&e.key<="9"){let t=parseInt(e.key);t<=11&&(i(t),s(e=>new Set([...e,t])));return}if("0"===e.key){i(0),s(e=>new Set([...e,0]));return}if("t"===e.key||"е"===e.key)return void a("subjects");if("p"===e.key||"з"===e.key)return void a("practice");if("a"===e.key||"ф"===e.key)return void a("tasks");if("c"===e.key||"с"===e.key)return void a("achievements");if("s"===e.key||"ы"===e.key)return void a("stats")}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[w]),(0,y.jsx)(e9.Provider,{value:{schoolData:e8,selectedGrade:t,setSelectedGrade:i,visitedClasses:l,setVisitedClasses:s,searchQuery:o,setSearchQuery:n,activeTab:r,setActiveTab:a,expandedSubject:d,setExpandedSubject:c,progress:p,setProgress:h,toggleTopic:eE,getSubjectProgress:eM,overallProgress:eI,totalTopicsCompleted:eR,userStats:u,setUserStats:m,addExperience:eA,getCurrentRank:eN,achievements:f,setAchievements:g,dailyTasks:b,setDailyTasks:v,quizDialogOpen:w,setQuizDialogOpen:j,currentQuiz:T,setCurrentQuiz:q,currentQuizSubject:k,setCurrentQuizSubject:N,currentQuestionIndex:S,setCurrentQuestionIndex:A,selectedAnswer:C,setSelectedAnswer:P,showResult:E,setShowResult:M,quizScore:I,setQuizScore:R,topicDialogOpen:z,setTopicDialogOpen:_,selectedTopic:O,setSelectedTopic:D,selectedSubjectForTopic:V,setSelectedSubjectForTopic:L,showConfetti:F,setShowConfetti:H,playSound:eS,soundEnabled:B,setSoundEnabled:$,showSettings:U,setShowSettings:W,showShortcuts:X,setShowShortcuts:Y,activityLog:K,setActivityLog:Q,dailyStats:G,setDailyStats:J,bookmarks:Z,setBookmarks:ee,notes:et,setNotes:ei,studyTime:el,setStudyTime:es,isTimerRunning:eo,setIsTimerRunning:en,filteredSubjects:ez,dailyQuote:e_,streakFreeze:er,setStreakFreeze:ea,xpBooster:ed,setXpBooster:ec,boosterEndTime:ep,setBoosterEndTime:eh,currentCombo:eu,setCurrentCombo:ef,maxCombo:ey,setMaxCombo:ex,dailyChallengeDone:eg,setDailyChallengeDone:eb,perfectQuizzesCount:ev,setPerfectQuizzesCount:ew,totalChallengesCompleted:ej,setTotalChallengesCompleted:eT,recentTopics:eq,setRecentTopics:ek},children:e})}function ti(){let e=(0,x.useContext)(e9);if(!e)throw Error("useSchool must be used within a SchoolProvider");return e}e.i(74080);var tl=Symbol.for("react.lazy"),ts=x[" use ".trim().toString()];function to(e){var t;return null!=e&&"object"==typeof e&&"$$typeof"in e&&e.$$typeof===tl&&"_payload"in e&&"object"==typeof(t=e._payload)&&null!==t&&"then"in t}function tn(e){var t;let i,l=(t=e,(i=x.forwardRef((e,t)=>{let{children:i,...l}=e;if(to(i)&&"function"==typeof ts&&(i=ts(i._payload)),x.isValidElement(i)){var s;let e,o,n=(s=i,(o=(e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.ref:(o=(e=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.props.ref:s.props.ref||s.ref),r=function(e,t){let i={...t};for(let l in t){let s=e[l],o=t[l];/^on[A-Z]/.test(l)?s&&o?i[l]=(...e)=>{let t=o(...e);return s(...e),t}:s&&(i[l]=s):"style"===l?i[l]={...s,...o}:"className"===l&&(i[l]=[s,o].filter(Boolean).join(" "))}return{...e,...i}}(l,i.props);return i.type!==x.Fragment&&(r.ref=t?(0,w.composeRefs)(t,n):n),x.cloneElement(i,r)}return x.Children.count(i)>1?x.Children.only(null):null})).displayName=`${t}.SlotClone`,i),s=x.forwardRef((e,t)=>{let{children:i,...s}=e;to(i)&&"function"==typeof ts&&(i=ts(i._payload));let o=x.Children.toArray(i),n=o.find(td);if(n){let e=n.props.children,i=o.map(t=>t!==n?t:x.Children.count(e)>1?x.Children.only(null):x.isValidElement(e)?e.props.children:null);return(0,y.jsx)(l,{...s,ref:t,children:x.isValidElement(e)?x.cloneElement(e,void 0,i):null})}return(0,y.jsx)(l,{...s,ref:t,children:i})});return s.displayName=`${e}.Slot`,s}var tr=tn("Slot"),ta=Symbol("radix.slottable");function td(e){return x.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===ta}var tc=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=tn(`Primitive.${t}`),l=x.forwardRef((e,l)=>{let{asChild:s,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,y.jsx)(s?i:t,{...o,ref:l})});return l.displayName=`Primitive.${t}`,{...e,[t]:l}},{}),tp="Progress",[th,tu]=function(e,t=[]){let i=[],l=()=>{let t=i.map(e=>x.createContext(e));return function(i){let l=i?.[e]||t;return x.useMemo(()=>({[`__scope${e}`]:{...i,[e]:l}}),[i,l])}};return l.scopeName=e,[function(t,l){let s=x.createContext(l);s.displayName=t+"Context";let o=i.length;i=[...i,l];let n=t=>{let{scope:i,children:l,...n}=t,r=i?.[e]?.[o]||s,a=x.useMemo(()=>n,Object.values(n));return(0,y.jsx)(r.Provider,{value:a,children:l})};return n.displayName=t+"Provider",[n,function(i,n){let r=n?.[e]?.[o]||s,a=x.useContext(r);if(a)return a;if(void 0!==l)return l;throw Error(`\`${i}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let i=()=>{let i=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let l=i.reduce((t,{useScope:i,scopeName:l})=>{let s=i(e)[`__scope${l}`];return{...t,...s}},{});return x.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return i.scopeName=t.scopeName,i}(l,...t)]}(tp),[tm,tf]=th(tp),ty=x.forwardRef((e,t)=>{var i,l;let{__scopeProgress:s,value:o=null,max:n,getValueLabel:r=tb,...a}=e;(n||0===n)&&!tj(n)&&console.error((i=`${n}`,`Invalid prop \`max\` of value \`${i}\` supplied to \`Progress\`. Only numbers greater than 0 are valid max values. Defaulting to \`100\`.`));let d=tj(n)?n:100;null===o||tT(o,d)||console.error((l=`${o}`,`Invalid prop \`value\` of value \`${l}\` supplied to \`Progress\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or 100 if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`));let c=tT(o,d)?o:null,p=tw(c)?r(c,d):void 0;return(0,y.jsx)(tm,{scope:s,value:c,max:d,children:(0,y.jsx)(tc.div,{"aria-valuemax":d,"aria-valuemin":0,"aria-valuenow":tw(c)?c:void 0,"aria-valuetext":p,role:"progressbar","data-state":tv(c,d),"data-value":c??void 0,"data-max":d,...a,ref:t})})});ty.displayName=tp;var tx="ProgressIndicator",tg=x.forwardRef((e,t)=>{let{__scopeProgress:i,...l}=e,s=tf(tx,i);return(0,y.jsx)(tc.div,{"data-state":tv(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...l,ref:t})});function tb(e,t){return`${Math.round(e/t*100)}%`}function tv(e,t){return null==e?"indeterminate":e===t?"complete":"loading"}function tw(e){return"number"==typeof e}function tj(e){return tw(e)&&!isNaN(e)&&e>0}function tT(e,t){return tw(e)&&!isNaN(e)&&e<=t&&e>=0}function tq({className:e,value:t,...i}){return(0,y.jsx)(ty,{"data-slot":"progress",className:(0,ed.cn)("bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",e),...i,children:(0,y.jsx)(tg,{"data-slot":"progress-indicator",className:"bg-primary h-full w-full flex-1 transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})})}tg.displayName=tx;var tk=e.i(25913);let tN=(0,tk.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function tS({className:e,variant:t,size:i,asChild:l=!1,...s}){return(0,y.jsx)(l?tr:"button",{"data-slot":"button",className:(0,ed.cn)(tN({variant:t,size:i,className:e})),...s})}let tA=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],tC=new Set(tA),tP=(e,t,i)=>i>t?t:i<e?e:i,tE={test:e=>"number"==typeof e,parse:parseFloat,transform:e=>e},tM={...tE,transform:e=>tP(0,1,e)},tI={...tE,default:1},tR=e=>Math.round(1e5*e)/1e5,tz=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,t_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,tO=(e,t)=>i=>!!("string"==typeof i&&t_.test(i)&&i.startsWith(e)||t&&null!=i&&Object.prototype.hasOwnProperty.call(i,t)),tD=(e,t,i)=>l=>{if("string"!=typeof l)return l;let[s,o,n,r]=l.match(tz);return{[e]:parseFloat(s),[t]:parseFloat(o),[i]:parseFloat(n),alpha:void 0!==r?parseFloat(r):1}},tV={...tE,transform:e=>Math.round(tP(0,255,e))},tL={test:tO("rgb","red"),parse:tD("red","green","blue"),transform:({red:e,green:t,blue:i,alpha:l=1})=>"rgba("+tV.transform(e)+", "+tV.transform(t)+", "+tV.transform(i)+", "+tR(tM.transform(l))+")"},tF={test:tO("#"),parse:function(e){let t="",i="",l="",s="";return e.length>5?(t=e.substring(1,3),i=e.substring(3,5),l=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),i=e.substring(2,3),l=e.substring(3,4),s=e.substring(4,5),t+=t,i+=i,l+=l,s+=s),{red:parseInt(t,16),green:parseInt(i,16),blue:parseInt(l,16),alpha:s?parseInt(s,16)/255:1}},transform:tL.transform},tH=e=>({test:t=>"string"==typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),tB=tH("deg"),t$=tH("%"),tU=tH("px"),tW=tH("vh"),tX=tH("vw"),tY={...t$,parse:e=>t$.parse(e)/100,transform:e=>t$.transform(100*e)},tK={test:tO("hsl","hue"),parse:tD("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:i,alpha:l=1})=>"hsla("+Math.round(e)+", "+t$.transform(tR(t))+", "+t$.transform(tR(i))+", "+tR(tM.transform(l))+")"},tQ={test:e=>tL.test(e)||tF.test(e)||tK.test(e),parse:e=>tL.test(e)?tL.parse(e):tK.test(e)?tK.parse(e):tF.parse(e),transform:e=>"string"==typeof e?e:e.hasOwnProperty("red")?tL.transform(e):tK.transform(e),getAnimatableNone:e=>{let t=tQ.parse(e);return t.alpha=0,tQ.transform(t)}},tG=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,tJ="number",tZ="color",t0=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function t1(e){let t=e.toString(),i=[],l={color:[],number:[],var:[]},s=[],o=0,n=t.replace(t0,e=>(tQ.test(e)?(l.color.push(o),s.push(tZ),i.push(tQ.parse(e))):e.startsWith("var(")?(l.var.push(o),s.push("var"),i.push(e)):(l.number.push(o),s.push(tJ),i.push(parseFloat(e))),++o,"${}")).split("${}");return{values:i,split:n,indexes:l,types:s}}function t4(e){return t1(e).values}function t2(e){let{split:t,types:i}=t1(e),l=t.length;return e=>{let s="";for(let o=0;o<l;o++)if(s+=t[o],void 0!==e[o]){let t=i[o];t===tJ?s+=tR(e[o]):t===tZ?s+=tQ.transform(e[o]):s+=e[o]}return s}}let t3=e=>"number"==typeof e?0:tQ.test(e)?tQ.getAnimatableNone(e):e,t5={test:function(e){return isNaN(e)&&"string"==typeof e&&(e.match(tz)?.length||0)+(e.match(tG)?.length||0)>0},parse:t4,createTransformer:t2,getAnimatableNone:function(e){let t=t4(e);return t2(e)(t.map(t3))}},t6=new Set(["brightness","contrast","saturate","opacity"]);function t7(e){let[t,i]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;let[l]=i.match(tz)||[];if(!l)return e;let s=i.replace(l,""),o=+!!t6.has(t);return l!==i&&(o*=100),t+"("+o+s+")"}let t8=/\b([a-z-]*)\(.*?\)/gu,t9={...t5,getAnimatableNone:e=>{let t=e.match(t8);return t?t.map(t7).join(" "):e}},ie={...tE,transform:Math.round},it={borderWidth:tU,borderTopWidth:tU,borderRightWidth:tU,borderBottomWidth:tU,borderLeftWidth:tU,borderRadius:tU,radius:tU,borderTopLeftRadius:tU,borderTopRightRadius:tU,borderBottomRightRadius:tU,borderBottomLeftRadius:tU,width:tU,maxWidth:tU,height:tU,maxHeight:tU,top:tU,right:tU,bottom:tU,left:tU,inset:tU,insetBlock:tU,insetBlockStart:tU,insetBlockEnd:tU,insetInline:tU,insetInlineStart:tU,insetInlineEnd:tU,padding:tU,paddingTop:tU,paddingRight:tU,paddingBottom:tU,paddingLeft:tU,paddingBlock:tU,paddingBlockStart:tU,paddingBlockEnd:tU,paddingInline:tU,paddingInlineStart:tU,paddingInlineEnd:tU,margin:tU,marginTop:tU,marginRight:tU,marginBottom:tU,marginLeft:tU,marginBlock:tU,marginBlockStart:tU,marginBlockEnd:tU,marginInline:tU,marginInlineStart:tU,marginInlineEnd:tU,backgroundPositionX:tU,backgroundPositionY:tU,rotate:tB,rotateX:tB,rotateY:tB,rotateZ:tB,scale:tI,scaleX:tI,scaleY:tI,scaleZ:tI,skew:tB,skewX:tB,skewY:tB,distance:tU,translateX:tU,translateY:tU,translateZ:tU,x:tU,y:tU,z:tU,perspective:tU,transformPerspective:tU,opacity:tM,originX:tY,originY:tY,originZ:tU,zIndex:ie,fillOpacity:tM,strokeOpacity:tM,numOctaves:ie},ii={...it,color:tQ,backgroundColor:tQ,outlineColor:tQ,fill:tQ,stroke:tQ,borderColor:tQ,borderTopColor:tQ,borderRightColor:tQ,borderBottomColor:tQ,borderLeftColor:tQ,filter:t9,WebkitFilter:t9},il=e=>ii[e],is=()=>({translate:0,scale:1,origin:0,originPoint:0}),io=()=>({x:is(),y:is()}),ir=()=>({min:0,max:0}),ia=()=>({x:ir(),y:ir()}),id=e=>!!(e&&e.getVelocity),ic=new Set(["width","height","top","left","right","bottom",...tA]),ip=e=>t=>t.test(e),ih=[tE,tU,t$,tB,tX,tW,{test:e=>"auto"===e,parse:e=>e}],iu=e=>ih.find(ip(e));var im=e.i(47167);let iy=()=>{},ix=()=>{};im.default;let ig=e=>t=>"string"==typeof t&&t.startsWith(e),ib=ig("--"),iv=ig("var(--"),iw=e=>!!iv(e)&&ij.test(e.split("/*")[0].trim()),ij=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function iT(e){return"string"==typeof e&&e.split("/*")[0].includes("var(--")}let iq=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,ik=e=>180*e/Math.PI,iN=e=>iA(ik(Math.atan2(e[1],e[0]))),iS={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:iN,rotateZ:iN,skewX:e=>ik(Math.atan(e[1])),skewY:e=>ik(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},iA=e=>((e%=360)<0&&(e+=360),e),iC=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),iP=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),iE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:iC,scaleY:iP,scale:e=>(iC(e)+iP(e))/2,rotateX:e=>iA(ik(Math.atan2(e[6],e[5]))),rotateY:e=>iA(ik(Math.atan2(-e[2],e[0]))),rotateZ:iN,rotate:iN,skewX:e=>ik(Math.atan(e[4])),skewY:e=>ik(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function iM(e){return+!!e.includes("scale")}function iI(e,t){let i,l;if(!e||"none"===e)return iM(t);let s=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);if(s)i=iE,l=s;else{let t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=iS,l=t}if(!l)return iM(t);let o=i[t],n=l[1].split(",").map(iR);return"function"==typeof o?o(n):n[o]}function iR(e){return parseFloat(e.trim())}let iz=e=>e===tE||e===tU,i_=new Set(["x","y","z"]),iO=tA.filter(e=>!i_.has(e)),iD={width:({x:e},{paddingLeft:t="0",paddingRight:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),height:({y:e},{paddingTop:t="0",paddingBottom:i="0"})=>e.max-e.min-parseFloat(t)-parseFloat(i),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>iI(t,"x"),y:(e,{transform:t})=>iI(t,"y")};iD.translateX=iD.x,iD.translateY=iD.y;let iV=e=>e,iL={},iF=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function iH(e,t){let i=!1,l=!0,s={delta:0,timestamp:0,isProcessing:!1},o=()=>i=!0,n=iF.reduce((e,i)=>(e[i]=function(e,t){let i=new Set,l=new Set,s=!1,o=!1,n=new WeakSet,r={delta:0,timestamp:0,isProcessing:!1},a=0;function d(t){n.has(t)&&(c.schedule(t),e()),a++,t(r)}let c={schedule:(e,t=!1,o=!1)=>{let r=o&&s?i:l;return t&&n.add(e),r.has(e)||r.add(e),e},cancel:e=>{l.delete(e),n.delete(e)},process:e=>{if(r=e,s){o=!0;return}s=!0,[i,l]=[l,i],i.forEach(d),t,a=0,i.clear(),s=!1,o&&(o=!1,c.process(e))}};return c}(o,t?i:void 0),e),{}),{setup:r,read:a,resolveKeyframes:d,preUpdate:c,update:p,preRender:h,render:u,postRender:m}=n,f=()=>{let o=iL.useManualTiming?s.timestamp:performance.now();i=!1,iL.useManualTiming||(s.delta=l?1e3/60:Math.max(Math.min(o-s.timestamp,40),1)),s.timestamp=o,s.isProcessing=!0,r.process(s),a.process(s),d.process(s),c.process(s),p.process(s),h.process(s),u.process(s),m.process(s),s.isProcessing=!1,i&&t&&(l=!1,e(f))};return{schedule:iF.reduce((t,o)=>{let r=n[o];return t[o]=(t,o=!1,n=!1)=>(!i&&(i=!0,l=!0,s.isProcessing||e(f)),r.schedule(t,o,n)),t},{}),cancel:e=>{for(let t=0;t<iF.length;t++)n[iF[t]].cancel(e)},state:s,steps:n}}let{schedule:iB,cancel:i$,state:iU,steps:iW}=iH("u">typeof requestAnimationFrame?requestAnimationFrame:iV,!0),iX=new Set,iY=!1,iK=!1,iQ=!1;function iG(){if(iK){let e=Array.from(iX).filter(e=>e.needsMeasurement),t=new Set(e.map(e=>e.element)),i=new Map;t.forEach(e=>{let t,l=(t=[],iO.forEach(i=>{let l=e.getValue(i);void 0!==l&&(t.push([i,l.get()]),l.set(+!!i.startsWith("scale")))}),t);l.length&&(i.set(e,l),e.render())}),e.forEach(e=>e.measureInitialState()),t.forEach(e=>{e.render();let t=i.get(e);t&&t.forEach(([t,i])=>{e.getValue(t)?.set(i)})}),e.forEach(e=>e.measureEndState()),e.forEach(e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)})}iK=!1,iY=!1,iX.forEach(e=>e.complete(iQ)),iX.clear()}function iJ(){iX.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(iK=!0)})}class iZ{constructor(e,t,i,l,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=i,this.motionValue=l,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(iX.add(this),iY||(iY=!0,iB.read(iJ),iB.resolveKeyframes(iG))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:e,name:t,element:i,motionValue:l}=this;if(null===e[0]){let s=l?.get(),o=e[e.length-1];if(void 0!==s)e[0]=s;else if(i&&t){let l=i.readValue(t,o);null!=l&&(e[0]=l)}void 0===e[0]&&(e[0]=o),l&&void 0===s&&l.set(e[0])}for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),iX.delete(this)}cancel(){"scheduled"===this.state&&(iX.delete(this),this.state="pending")}resume(){"pending"===this.state&&this.scheduleResolve()}}function i0(e,t){let i=il(e);return i!==t9&&(i=t5),i.getAnimatableNone?i.getAnimatableNone(t):void 0}let i1=new Set(["auto","none","0"]);class i4 extends iZ{constructor(e,t,i,l,s){super(e,t,i,l,s,!0)}readKeyframes(){let{unresolvedKeyframes:e,element:t,name:i}=this;if(!t||!t.current)return;super.readKeyframes();for(let i=0;i<e.length;i++){let l=e[i];if("string"==typeof l&&iw(l=l.trim())){let s=function e(t,i,l=1){ix(l<=4,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`,"max-css-var-depth");let[s,o]=function(e){let t=iq.exec(e);if(!t)return[,];let[,i,l,s]=t;return[`--${i??l}`,s]}(t);if(!s)return;let n=window.getComputedStyle(i).getPropertyValue(s);if(n){let e=n.trim();return/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)?parseFloat(e):e}return iw(o)?e(o,i,l+1):o}(l,t.current);void 0!==s&&(e[i]=s),i===e.length-1&&(this.finalKeyframe=l)}}if(this.resolveNoneKeyframes(),!ic.has(i)||2!==e.length)return;let[l,s]=e,o=iu(l),n=iu(s);if(iT(l)!==iT(s)&&iD[i]){this.needsMeasurement=!0;return}if(o!==n)if(iz(o)&&iz(n))for(let t=0;t<e.length;t++){let i=e[t];"string"==typeof i&&(e[t]=parseFloat(i))}else iD[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){let{unresolvedKeyframes:e,name:t}=this,i=[];for(let t=0;t<e.length;t++)(null===e[t]||function(e){if("number"==typeof e)return 0===e;if(null===e)return!0;return"none"===e||"0"===e||/^0[^.\s]+$/u.test(e)}(e[t]))&&i.push(t);i.length&&function(e,t,i){let l,s=0;for(;s<e.length&&!l;){let t=e[s];"string"==typeof t&&!i1.has(t)&&t1(t).values.length&&(l=e[s]),s++}if(l&&i)for(let s of t)e[s]=i0(i,l)}(e,i,t)}measureInitialState(){let{element:e,unresolvedKeyframes:t,name:i}=this;if(!e||!e.current)return;"height"===i&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=iD[i](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;let l=t[t.length-1];void 0!==l&&e.getValue(i,l).jump(l,!1)}measureEndState(){let{element:e,name:t,unresolvedKeyframes:i}=this;if(!e||!e.current)return;let l=e.getValue(t);l&&l.jump(this.measuredOrigin,!1);let s=i.length-1,o=i[s];i[s]=iD[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),this.removedTransforms?.length&&this.removedTransforms.forEach(([t,i])=>{e.getValue(t).set(i)}),this.resolveNoneKeyframes()}}function i2(e,t){-1===e.indexOf(t)&&e.push(t)}function i3(e,t){let i=e.indexOf(t);i>-1&&e.splice(i,1)}class i5{constructor(){this.subscriptions=[]}add(e){return i2(this.subscriptions,e),()=>i3(this.subscriptions,e)}notify(e,t,i){let l=this.subscriptions.length;if(l)if(1===l)this.subscriptions[0](e,t,i);else for(let s=0;s<l;s++){let l=this.subscriptions[s];l&&l(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let{schedule:i6}=iH(queueMicrotask,!1);function i7(){t=void 0}let i8={now:()=>(void 0===t&&i8.set(iU.isProcessing||iL.useManualTiming?iU.timestamp:performance.now()),t),set:e=>{t=e,queueMicrotask(i7)}};class i9{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=e=>{let t=i8.now();if(this.updatedAt!==t&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(e),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(let e of this.dependents)e.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=i8.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=!isNaN(parseFloat(this.current)))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new i5);let i=this.events[e].add(t);return"change"===e?()=>{i(),iB.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(let e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return o&&o.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var e;let t=i8.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||t-this.updatedAt>30)return 0;let i=Math.min(this.updatedAt-this.prevUpdatedAt,30);return e=parseFloat(this.current)-parseFloat(this.prevFrameValue),i?1e3/i*e:0}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function le(e,t){return new i9(e,t)}let lt=[...ih,tQ,t5],li={current:null},ll={current:!1},ls="u">typeof window,lo=new WeakMap;function ln(e){return null!==e&&"object"==typeof e&&"function"==typeof e.start}function lr(e){return"string"==typeof e||Array.isArray(e)}let la=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ld=["initial",...la];function lc(e){return ln(e.animate)||ld.some(t=>lr(e[t]))}function lp(e){return!!(lc(e)||e.variants)}function lh(e){let t=[{},{}];return e?.values.forEach((e,i)=>{t[0][i]=e.get(),t[1][i]=e.getVelocity()}),t}function lu(e,t,i,l){if("function"==typeof t){let[s,o]=lh(l);t=t(void 0!==i?i:e.custom,s,o)}if("string"==typeof t&&(t=e.variants&&e.variants[t]),"function"==typeof t){let[s,o]=lh(l);t=t(void 0!==i?i:e.custom,s,o)}return t}let lm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],lf={};class ly{scrapeMotionValuesFromProps(e,t,i){return{}}constructor({parent:e,props:t,presenceContext:i,reducedMotionConfig:l,blockInitialAnimation:s,visualState:o},n={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=iZ,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{let e=i8.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,iB.render(this.render,!1,!0))};const{latestValues:r,renderState:a}=o;this.latestValues=r,this.baseTarget={...r},this.initialValues=t.initial?{...r}:{},this.renderState=a,this.parent=e,this.props=t,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=l,this.options=n,this.blockInitialAnimation=!!s,this.isControllingVariants=lc(t),this.isVariantNode=lp(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...c}=this.scrapeMotionValuesFromProps(t,{},this);for(const e in c){const t=c[e];void 0!==r[e]&&id(t)&&t.set(r[e])}}mount(e){this.current=e,lo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((e,t)=>this.bindToMotionValue(t,e)),"never"===this.reducedMotionConfig?this.shouldReduceMotion=!1:"always"===this.reducedMotionConfig?this.shouldReduceMotion=!0:(ll.current||function(){if(ll.current=!0,ls)if(window.matchMedia){let e=window.matchMedia("(prefers-reduced-motion)"),t=()=>li.current=e.matches;e.addEventListener("change",t),t()}else li.current=!1}(),this.shouldReduceMotion=li.current),this.parent?.addChild(this),this.update(this.props,this.presenceContext)}unmount(){for(let e in this.projection&&this.projection.unmount(),i$(this.notifyUpdate),i$(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this),this.events)this.events[e].clear();for(let e in this.features){let t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){let i;this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();let l=tC.has(e);l&&this.onBindTransform&&this.onBindTransform();let s=t.on("change",t=>{this.latestValues[e]=t,this.props.onUpdate&&iB.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});"u">typeof window&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{s(),i&&i(),t.owner&&t.stop()})}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in lf){let t=lf[e];if(!t)continue;let{isEnabled:i,Feature:l}=t;if(!this.features[e]&&l&&i(this.props)&&(this.features[e]=new l(this)),this.features[e]){let t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ia()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let t=0;t<lm.length;t++){let i=lm[t];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);let l=e["on"+i];l&&(this.propEventSubscriptions[i]=this.on(i,l))}this.prevMotionValues=function(e,t,i){for(let l in t){let s=t[l],o=i[l];if(id(s))e.addValue(l,s);else if(id(o))e.addValue(l,le(s,{owner:e}));else if(o!==s)if(e.hasValue(l)){let t=e.getValue(l);!0===t.liveStyle?t.jump(s):t.hasAnimated||t.set(s)}else{let t=e.getStaticValue(l);e.addValue(l,le(void 0!==t?t:s,{owner:e}))}}for(let l in i)void 0===t[l]&&e.removeValue(l);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){let t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){let i=this.values.get(e);t!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);let t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return void 0===i&&void 0!==t&&(i=le(null===t?void 0:t,{owner:this}),this.addValue(e,i)),i}readValue(e,t){let i=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];if(null!=i){let l,s;if("string"==typeof i&&(l=i,/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(l)||(s=i,/^0[^.\s]+$/u.test(s))))i=parseFloat(i);else{let l;l=i,!lt.find(ip(l))&&t5.test(t)&&(i=i0(e,t))}this.setBaseTarget(e,id(i)?i.get():i)}return id(i)?i.get():i}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){let t,{initial:i}=this.props;if("string"==typeof i||"object"==typeof i){let l=lu(this.props,i,this.presenceContext?.custom);l&&(t=l[e])}if(i&&void 0!==t)return t;let l=this.getBaseTargetFromProps(this.props,e);return void 0===l||id(l)?void 0!==this.initialValues[e]&&void 0===t?void 0:this.baseTarget[e]:l}on(e,t){return this.events[e]||(this.events[e]=new i5),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){i6.render(this.render)}}class lx extends ly{constructor(){super(...arguments),this.KeyframeResolver=i4}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){let i=e.style;return i?i[t]:void 0}removeValueFromRenderState(e,{vars:t,style:i}){delete t[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:e}=this.props;id(e)&&(this.childSubscription=e.on("change",e=>{this.current&&(this.current.textContent=`${e}`)}))}}function lg(e){return e.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}let lb=(e,t)=>t&&"number"==typeof e?t.transform(e):e,lv={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},lw=tA.length;function lj(e,t,i){let{style:l,vars:s,transformOrigin:o}=e,n=!1,r=!1;for(let e in t){let i=t[e];if(tC.has(e)){n=!0;continue}if(ib(e)){s[e]=i;continue}{let t=lb(i,it[e]);e.startsWith("origin")?(r=!0,o[e]=t):l[e]=t}}if(!t.transform&&(n||i?l.transform=function(e,t,i){let l="",s=!0;for(let o=0;o<lw;o++){let n=tA[o],r=e[n];if(void 0===r)continue;let a=!0;if(!(a="number"==typeof r?r===+!!n.startsWith("scale"):0===parseFloat(r))||i){let e=lb(r,it[n]);if(!a){s=!1;let t=lv[n]||n;l+=`${t}(${e}) `}i&&(t[n]=e)}}return l=l.trim(),i?l=i(t,s?"":l):s&&(l="none"),l}(t,e.transform,i):l.transform&&(l.transform="none")),r){let{originX:e="50%",originY:t="50%",originZ:i=0}=o;l.transformOrigin=`${e} ${t} ${i}`}}let lT={offset:"stroke-dashoffset",array:"stroke-dasharray"},lq={offset:"strokeDashoffset",array:"strokeDasharray"},lk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function lN(e,{attrX:t,attrY:i,attrScale:l,pathLength:s,pathSpacing:o=1,pathOffset:n=0,...r},a,d,c){if(lj(e,r,d),a){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};let{attrs:p,style:h}=e;for(let e of(p.transform&&(h.transform=p.transform,delete p.transform),(h.transform||p.transformOrigin)&&(h.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),h.transform&&(h.transformBox=c?.transformBox??"fill-box",delete p.transformBox),lk))void 0!==p[e]&&(h[e]=p[e],delete p[e]);void 0!==t&&(p.x=t),void 0!==i&&(p.y=i),void 0!==l&&(p.scale=l),void 0!==s&&function(e,t,i=1,l=0,s=!0){e.pathLength=1;let o=s?lT:lq;e[o.offset]=tU.transform(-l);let n=tU.transform(t),r=tU.transform(i);e[o.array]=`${n} ${r}`}(p,s,o,n,!1)}let lS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),lA=e=>"string"==typeof e&&"svg"===e.toLowerCase();function lC(e,{style:t,vars:i},l,s){let o,n=e.style;for(o in t)n[o]=t[o];for(o in s?.applyProjectionStyles(n,l),i)n.setProperty(o,i[o])}function lP(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}let lE={correct:(e,t)=>{if(!t.target)return e;if("string"==typeof e)if(!tU.test(e))return e;else e=parseFloat(e);let i=lP(e,t.target.x),l=lP(e,t.target.y);return`${i}% ${l}%`}},lM=(e,t,i)=>e+(t-e)*i,lI={borderRadius:{...lE,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:lE,borderTopRightRadius:lE,borderBottomLeftRadius:lE,borderBottomRightRadius:lE,boxShadow:{correct:(e,{treeScale:t,projectionDelta:i})=>{let l=t5.parse(e);if(l.length>5)return e;let s=t5.createTransformer(e),o=+("number"!=typeof l[0]),n=i.x.scale*t.x,r=i.y.scale*t.y;l[0+o]/=n,l[1+o]/=r;let a=lM(n,r,.5);return"number"==typeof l[2+o]&&(l[2+o]/=a),"number"==typeof l[3+o]&&(l[3+o]/=a),s(l)}}};function lR(e,{layout:t,layoutId:i}){return tC.has(e)||e.startsWith("origin")||(t||void 0!==i)&&(!!lI[e]||"opacity"===e)}function lz(e,t,i){let l=e.style,s=t?.style,o={};if(!l)return o;for(let t in l)(id(l[t])||s&&id(s[t])||lR(t,e)||i?.getValue(t)?.liveStyle!==void 0)&&(o[t]=l[t]);return o}function l_(e,t,i){let l=lz(e,t,i);for(let i in e)(id(e[i])||id(t[i]))&&(l[-1!==tA.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]);return l}class lO extends lx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ia}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(tC.has(t)){let e=il(t);return e&&e.default||0}return t=lS.has(t)?t:lg(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,i){return l_(e,t,i)}build(e,t,i){lN(e,t,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,t,i,l){for(let i in lC(e,t,void 0,l),t.attrs)e.setAttribute(lS.has(i)?i:lg(i),t.attrs[i])}mount(e){this.isSVGTag=lA(e.tagName),super.mount(e)}}function lD({top:e,left:t,right:i,bottom:l}){return{x:{min:t,max:i},y:{min:e,max:l}}}function lV(e){return void 0===e||1===e}function lL({scale:e,scaleX:t,scaleY:i}){return!lV(e)||!lV(t)||!lV(i)}function lF(e){return lL(e)||lH(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function lH(e){var t,i;return(t=e.x)&&"0%"!==t||(i=e.y)&&"0%"!==i}function lB(e,t,i,l,s){return void 0!==s&&(e=l+s*(e-l)),l+i*(e-l)+t}function l$(e,t=0,i=1,l,s){e.min=lB(e.min,t,i,l,s),e.max=lB(e.max,t,i,l,s)}function lU(e,{x:t,y:i}){l$(e.x,t.translate,t.scale,t.originPoint),l$(e.y,i.translate,i.scale,i.originPoint)}function lW(e,t){e.min=e.min+t,e.max=e.max+t}function lX(e,t,i,l,s=.5){let o=lM(e.min,e.max,s);l$(e,t,i,o,l)}function lY(e,t){lX(e.x,t.x,t.scaleX,t.scale,t.originX),lX(e.y,t.y,t.scaleY,t.scale,t.originY)}function lK(e,t){return lD(function(e,t){if(!t)return e;let i=t({x:e.left,y:e.top}),l=t({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:l.y,right:l.x}}(e.getBoundingClientRect(),t))}class lQ extends lx{constructor(){super(...arguments),this.type="html",this.renderInstance=lC}readValueFromInstance(e,t){if(tC.has(t))return this.projection?.isProjecting?iM(t):((e,t)=>{let{transform:i="none"}=getComputedStyle(e);return iI(i,t)})(e,t);{let i=window.getComputedStyle(e),l=(ib(t)?i.getPropertyValue(t):i[t])||0;return"string"==typeof l?l.trim():l}}measureInstanceViewportBox(e,{transformPagePoint:t}){return lK(e,t)}build(e,t,i){lj(e,t,i.transformTemplate)}scrapeMotionValuesFromProps(e,t,i){return lz(e,t,i)}}let lG=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function lJ(e){if("string"!=typeof e||e.includes("-"));else if(lG.indexOf(e)>-1||/[A-Z]/u.test(e))return!0;return!1}let lZ=(0,x.createContext)({}),l0=(0,x.createContext)({strict:!1}),l1=(0,x.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),l4=(0,x.createContext)({});function l2(e){return Array.isArray(e)?e.join(" "):e}let l3=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function l5(e,t,i){for(let l in t)id(t[l])||lR(l,i)||(e[l]=t[l])}let l6=()=>({...l3(),attrs:{}}),l7=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function l8(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||l7.has(e)}let l9=e=>!l8(e);try{a=(()=>{let e=Error("Cannot find module '@emotion/is-prop-valid'");throw e.code="MODULE_NOT_FOUND",e})().default,"function"==typeof a&&(l9=e=>e.startsWith("on")?!l8(e):a(e))}catch{}function se(e){return id(e)?e.get():e}let st=(0,x.createContext)(null);function si(e){let t=(0,x.useRef)(null);return null===t.current&&(t.current=e()),t.current}let sl=e=>(t,i)=>{let l=(0,x.useContext)(l4),s=(0,x.useContext)(st),o=()=>(function({scrapeMotionValuesFromProps:e,createRenderState:t},i,l,s){return{latestValues:function(e,t,i,l){let s={},o=l(e,{});for(let e in o)s[e]=se(o[e]);let{initial:n,animate:r}=e,a=lc(e),d=lp(e);t&&d&&!a&&!1!==e.inherit&&(void 0===n&&(n=t.initial),void 0===r&&(r=t.animate));let c=!!i&&!1===i.initial,p=(c=c||!1===n)?r:n;if(p&&"boolean"!=typeof p&&!ln(p)){let t=Array.isArray(p)?p:[p];for(let i=0;i<t.length;i++){let l=lu(e,t[i]);if(l){let{transitionEnd:e,transition:t,...i}=l;for(let e in i){let t=i[e];if(Array.isArray(t)){let e=c?t.length-1:0;t=t[e]}null!==t&&(s[e]=t)}for(let t in e)s[t]=e[t]}}}return s}(i,l,s,e),renderState:t()}})(e,t,l,s);return i?o():si(o)},ss=sl({scrapeMotionValuesFromProps:lz,createRenderState:l3}),so=sl({scrapeMotionValuesFromProps:l_,createRenderState:l6}),sn="u">typeof window,sr={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},sa=!1;function sd(){return!function(){if(sa)return;let e={};for(let t in sr)e[t]={isEnabled:e=>sr[t].some(t=>!!e[t])};lf=e,sa=!0}(),lf}let sc=Symbol.for("motionComponentSymbol"),sp="data-"+lg("framerAppearId"),sh=(0,x.createContext)({});function su(e){return e&&"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}let sm=sn?x.useLayoutEffect:x.useEffect;function sf(e,{forwardMotionProps:t=!1,type:i}={},l,s){l&&function(e){let t=sd();for(let i in e)t[i]={...t[i],...e[i]};lf=t}(l);let o=i?"svg"===i:lJ(e),n=o?so:ss;function r(i,l){var r;let a,d,c,p={...(0,x.useContext)(l1),...i,layoutId:function({layoutId:e}){let t=(0,x.useContext)(lZ).id;return t&&void 0!==e?t+"-"+e:e}(i)},{isStatic:h}=p,u=function(e){let{initial:t,animate:i}=function(e,t){if(lc(e)){let{initial:t,animate:i}=e;return{initial:!1===t||lr(t)?t:void 0,animate:lr(i)?i:void 0}}return!1!==e.inherit?t:{}}(e,(0,x.useContext)(l4));return(0,x.useMemo)(()=>({initial:t,animate:i}),[l2(t),l2(i)])}(i),m=n(i,h);if(!h&&sn){(0,x.useContext)(l0).strict;let t=function(e){let{drag:t,layout:i}=sd();if(!t&&!i)return{};let l={...t,...i};return{MeasureLayout:t?.isEnabled(e)||i?.isEnabled(e)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}(p);a=t.MeasureLayout,u.visualElement=function(e,t,i,l,s,o){let{visualElement:n}=(0,x.useContext)(l4),r=(0,x.useContext)(l0),a=(0,x.useContext)(st),d=(0,x.useContext)(l1).reducedMotion,c=(0,x.useRef)(null);l=l||r.renderer,!c.current&&l&&(c.current=l(e,{visualState:t,parent:n,props:i,presenceContext:a,blockInitialAnimation:!!a&&!1===a.initial,reducedMotionConfig:d,isSVG:o}));let p=c.current,h=(0,x.useContext)(sh);p&&!p.projection&&s&&("html"===p.type||"svg"===p.type)&&function(e,t,i,l){let{layoutId:s,layout:o,drag:n,dragConstraints:r,layoutScroll:a,layoutRoot:d,layoutCrossfade:c}=t;e.projection=new i(e.latestValues,t["data-framer-portal-id"]?void 0:function e(t){if(t)return!1!==t.options.allowProjection?t.projection:e(t.parent)}(e.parent)),e.projection.setOptions({layoutId:s,layout:o,alwaysMeasureLayout:!!n||r&&su(r),visualElement:e,animationType:"string"==typeof o?o:"both",initialPromotionConfig:l,crossfade:c,layoutScroll:a,layoutRoot:d})}(c.current,i,s,h);let u=(0,x.useRef)(!1);(0,x.useInsertionEffect)(()=>{p&&u.current&&p.update(i,a)});let m=i[sp],f=(0,x.useRef)(!!m&&!window.MotionHandoffIsComplete?.(m)&&window.MotionHasOptimisedAnimation?.(m));return sm(()=>{p&&(u.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),p.scheduleRenderMicrotask(),f.current&&p.animationState&&p.animationState.animateChanges())}),(0,x.useEffect)(()=>{p&&(!f.current&&p.animationState&&p.animationState.animateChanges(),f.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(m)}),f.current=!1),p.enteringChildren=void 0)}),p}(e,m,p,s,t.ProjectionNode,o)}return(0,y.jsxs)(l4.Provider,{value:u,children:[a&&u.visualElement?(0,y.jsx)(a,{visualElement:u.visualElement,...p}):null,function(e,t,i,{latestValues:l},s,o=!1,n){let r=(n??lJ(e)?function(e,t,i,l){let s=(0,x.useMemo)(()=>{let i=l6();return lN(i,t,lA(l),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){let t={};l5(t,e.style,e),s.style={...t,...s.style}}return s}:function(e,t){let i,l,s={},o=(i=e.style||{},l5(l={},i,e),Object.assign(l,function({transformTemplate:e},t){return(0,x.useMemo)(()=>{let i=l3();return lj(i,t,e),Object.assign({},i.vars,i.style)},[t])}(e,t)),l);return e.drag&&!1!==e.dragListener&&(s.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===e.drag?"none":`pan-${"x"===e.drag?"y":"x"}`),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(s.tabIndex=0),s.style=o,s})(t,l,s,e),a=function(e,t,i){let l={};for(let s in e)("values"!==s||"object"!=typeof e.values)&&(l9(s)||!0===i&&l8(s)||!t&&!l8(s)||e.draggable&&s.startsWith("onDrag"))&&(l[s]=e[s]);return l}(t,"string"==typeof e,o),d=e!==x.Fragment?{...a,...r,ref:i}:{},{children:c}=t,p=(0,x.useMemo)(()=>id(c)?c.get():c,[c]);return(0,x.createElement)(e,{...d,children:p})}(e,i,(r=u.visualElement,d=(0,x.useRef)(l),(0,x.useInsertionEffect)(()=>{d.current=l}),c=(0,x.useRef)(null),(0,x.useCallback)(e=>{e&&m.onMount?.(e),r&&(e?r.mount(e):r.unmount());let t=d.current;if("function"==typeof t)if(e){let i=t(e);"function"==typeof i&&(c.current=i)}else c.current?(c.current(),c.current=null):t(e);else t&&(t.current=e)},[r])),m,h,t,o)]})}r.displayName=`motion.${"string"==typeof e?e:`create(${e.displayName??e.name??""})`}`;let a=(0,x.forwardRef)(r);return a[sc]=e,a}class sy{constructor(e){this.isMounted=!1,this.node=e}update(){}}function sx(e,t,i){let l=e.getProps();return lu(l,t,void 0!==i?i:l.custom,e)}function sg(e,t){return e?.[t]??e?.default??e}let sb=e=>Array.isArray(e);function sv(e,t){let i=e.getValue("willChange");if(id(i)&&i.add)return i.add(t);if(!i&&iL.WillChange){let i=new iL.WillChange("auto");e.addValue("willChange",i),i.add(t)}}let sw=e=>1e3*e,sj=(e,t)=>i=>t(e(i)),sT=(...e)=>e.reduce(sj),sq={layout:0,mainThread:0,waapi:0};function sk(e,t,i){return(i<0&&(i+=1),i>1&&(i-=1),i<1/6)?e+(t-e)*6*i:i<.5?t:i<2/3?e+(t-e)*(2/3-i)*6:e}function sN(e,t){return i=>i>0?t:e}let sS=(e,t,i)=>{let l=e*e,s=i*(t*t-l)+l;return s<0?0:Math.sqrt(s)},sA=[tF,tL,tK];function sC(e){let t=sA.find(t=>t.test(e));if(iy(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let i=t.parse(e);return t===tK&&(i=function({hue:e,saturation:t,lightness:i,alpha:l}){e/=360,i/=100;let s=0,o=0,n=0;if(t/=100){let l=i<.5?i*(1+t):i+t-i*t,r=2*i-l;s=sk(r,l,e+1/3),o=sk(r,l,e),n=sk(r,l,e-1/3)}else s=o=n=i;return{red:Math.round(255*s),green:Math.round(255*o),blue:Math.round(255*n),alpha:l}}(i)),i}let sP=(e,t)=>{let i=sC(e),l=sC(t);if(!i||!l)return sN(e,t);let s={...i};return e=>(s.red=sS(i.red,l.red,e),s.green=sS(i.green,l.green,e),s.blue=sS(i.blue,l.blue,e),s.alpha=lM(i.alpha,l.alpha,e),tL.transform(s))},sE=new Set(["none","hidden"]);function sM(e,t){return i=>lM(e,t,i)}function sI(e){return"number"==typeof e?sM:"string"==typeof e?iw(e)?sN:tQ.test(e)?sP:s_:Array.isArray(e)?sR:"object"==typeof e?tQ.test(e)?sP:sz:sN}function sR(e,t){let i=[...e],l=i.length,s=e.map((e,i)=>sI(e)(e,t[i]));return e=>{for(let t=0;t<l;t++)i[t]=s[t](e);return i}}function sz(e,t){let i={...e,...t},l={};for(let s in i)void 0!==e[s]&&void 0!==t[s]&&(l[s]=sI(e[s])(e[s],t[s]));return e=>{for(let t in l)i[t]=l[t](e);return i}}let s_=(e,t)=>{let i=t5.createTransformer(t),l=t1(e),s=t1(t);if(!(l.indexes.var.length===s.indexes.var.length&&l.indexes.color.length===s.indexes.color.length&&l.indexes.number.length>=s.indexes.number.length))return iy(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),sN(e,t);if(sE.has(e)&&!s.values.length||sE.has(t)&&!l.values.length)return sE.has(e)?i=>i<=0?e:t:i=>i>=1?t:e;return sT(sR(function(e,t){let i=[],l={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){let o=t.types[s],n=e.indexes[o][l[o]],r=e.values[n]??0;i[s]=r,l[o]++}return i}(l,s),s.values),i)};function sO(e,t,i){return"number"==typeof e&&"number"==typeof t&&"number"==typeof i?lM(e,t,i):sI(e)(e,t)}let sD=e=>{let t=({timestamp:t})=>e(t);return{start:(e=!0)=>iB.update(t,e),stop:()=>i$(t),now:()=>iU.isProcessing?iU.timestamp:i8.now()}},sV=(e,t,i=10)=>{let l="",s=Math.max(Math.round(t/i),2);for(let t=0;t<s;t++)l+=Math.round(1e4*e(t/(s-1)))/1e4+", ";return`linear(${l.substring(0,l.length-2)})`};function sL(e){let t=0,i=e.next(t);for(;!i.done&&t<2e4;)t+=50,i=e.next(t);return t>=2e4?1/0:t}function sF(e,t,i){var l,s;let o=Math.max(t-5,0);return l=i-e(o),(s=t-o)?1e3/s*l:0}let sH=.01,sB=2,s$=.005,sU=.5;function sW(e,t){return e*Math.sqrt(1-t*t)}let sX=["duration","bounce"],sY=["stiffness","damping","mass"];function sK(e,t){return t.some(t=>void 0!==e[t])}function sQ(e=.3,t=.3){let i,l="object"!=typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e,{restSpeed:s,restDelta:o}=l,n=l.keyframes[0],r=l.keyframes[l.keyframes.length-1],a={done:!1,value:n},{stiffness:d,damping:c,mass:p,duration:h,velocity:u,isResolvedFromDuration:m}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!sK(e,sY)&&sK(e,sX))if(e.visualDuration){let i=2*Math.PI/(1.2*e.visualDuration),l=i*i,s=2*tP(.05,1,1-(e.bounce||0))*Math.sqrt(l);t={...t,mass:1,stiffness:l,damping:s}}else{let i=function({duration:e=800,bounce:t=.3,velocity:i=0,mass:l=1}){let s,o;iy(e<=sw(10),"Spring duration must be 10 seconds or less","spring-duration-limit");let n=1-t;n=tP(.05,1,n),e=tP(.01,10,e/1e3),n<1?(s=t=>{let l=t*n,s=l*e;return .001-(l-i)/sW(t,n)*Math.exp(-s)},o=t=>{let l=t*n*e,o=Math.pow(n,2)*Math.pow(t,2)*e,r=Math.exp(-l),a=sW(Math.pow(t,2),n);return(l*i+i-o)*r*(-s(t)+.001>0?-1:1)/a}):(s=t=>-.001+Math.exp(-t*e)*((t-i)*e+1),o=t=>e*e*(i-t)*Math.exp(-t*e));let r=function(e,t,i){let l=i;for(let i=1;i<12;i++)l-=e(l)/t(l);return l}(s,o,5/e);if(e=sw(e),isNaN(r))return{stiffness:100,damping:10,duration:e};{let t=Math.pow(r,2)*l;return{stiffness:t,damping:2*n*Math.sqrt(l*t),duration:e}}}(e);(t={...t,...i,mass:1}).isResolvedFromDuration=!0}return t}({...l,velocity:-((l.velocity||0)/1e3)}),f=u||0,y=c/(2*Math.sqrt(d*p)),x=r-n,g=Math.sqrt(d/p)/1e3,b=5>Math.abs(x);if(s||(s=b?sH:sB),o||(o=b?s$:sU),y<1){let e=sW(g,y);i=t=>r-Math.exp(-y*g*t)*((f+y*g*x)/e*Math.sin(e*t)+x*Math.cos(e*t))}else if(1===y)i=e=>r-Math.exp(-g*e)*(x+(f+g*x)*e);else{let e=g*Math.sqrt(y*y-1);i=t=>{let i=Math.exp(-y*g*t),l=Math.min(e*t,300);return r-i*((f+y*g*x)*Math.sinh(l)+e*x*Math.cosh(l))/e}}let v={calculatedDuration:m&&h||null,next:e=>{let t=i(e);if(m)a.done=e>=h;else{let l=0===e?f:0;y<1&&(l=0===e?sw(f):sF(i,e,t));let n=Math.abs(r-t)<=o;a.done=Math.abs(l)<=s&&n}return a.value=a.done?r:t,a},toString:()=>{let e=Math.min(sL(v),2e4),t=sV(t=>v.next(e*t).value,e,30);return e+"ms "+t},toTransition:()=>{}};return v}function sG({keyframes:e,velocity:t=0,power:i=.8,timeConstant:l=325,bounceDamping:s=10,bounceStiffness:o=500,modifyTarget:n,min:r,max:a,restDelta:d=.5,restSpeed:c}){let p,h,u=e[0],m={done:!1,value:u},f=i*t,y=u+f,x=void 0===n?y:n(y);x!==y&&(f=x-u);let g=e=>-f*Math.exp(-e/l),b=e=>x+g(e),v=e=>{let t=g(e),i=b(e);m.done=Math.abs(t)<=d,m.value=m.done?x:i},w=e=>{let t;if(t=m.value,void 0!==r&&t<r||void 0!==a&&t>a){var i;p=e,h=sQ({keyframes:[m.value,(i=m.value,void 0===r?a:void 0===a||Math.abs(r-i)<Math.abs(a-i)?r:a)],velocity:sF(b,e,m.value),damping:s,stiffness:o,restDelta:d,restSpeed:c})}};return w(0),{calculatedDuration:null,next:e=>{let t=!1;return(h||void 0!==p||(t=!0,v(e),w(e)),void 0!==p&&e>=p)?h.next(e-p):(t||v(e),m)}}}sQ.applyToOptions=e=>{let t=function(e,t=100,i){let l=i({...e,keyframes:[0,t]}),s=Math.min(sL(l),2e4);return{type:"keyframes",ease:e=>l.next(s*e).value/t,duration:s/1e3}}(e,100,sQ);return e.ease=t.ease,e.duration=sw(t.duration),e.type="keyframes",e};let sJ=(e,t,i)=>(((1-3*i+3*t)*e+(3*i-6*t))*e+3*t)*e;function sZ(e,t,i,l){return e===t&&i===l?iV:s=>0===s||1===s?s:sJ(function(e,t,i,l,s){let o,n,r=0;do(o=sJ(n=t+(i-t)/2,l,s)-e)>0?i=n:t=n;while(Math.abs(o)>1e-7&&++r<12)return n}(s,0,1,e,i),t,l)}let s0=sZ(.42,0,1,1),s1=sZ(0,0,.58,1),s4=sZ(.42,0,.58,1),s2=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,s3=e=>t=>1-e(1-t),s5=sZ(.33,1.53,.69,.99),s6=s3(s5),s7=s2(s6),s8=e=>(e*=2)<1?.5*s6(e):.5*(2-Math.pow(2,-10*(e-1))),s9=e=>1-Math.sin(Math.acos(e)),oe=s3(s9),ot=s2(s9),oi=e=>Array.isArray(e)&&"number"==typeof e[0],ol={linear:iV,easeIn:s0,easeInOut:s4,easeOut:s1,circIn:s9,circInOut:ot,circOut:oe,backIn:s6,backInOut:s7,backOut:s5,anticipate:s8},os=e=>{if(oi(e)){ix(4===e.length,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");let[t,i,l,s]=e;return sZ(t,i,l,s)}return"string"==typeof e?(ix(void 0!==ol[e],`Invalid easing type '${e}'`,"invalid-easing-type"),ol[e]):e},oo=(e,t,i)=>{let l=t-e;return 0===l?1:(i-e)/l};function on({duration:e=300,keyframes:t,times:i,ease:l="easeInOut"}){var s;let o,n=Array.isArray(l)&&"number"!=typeof l[0]?l.map(os):os(l),r={done:!1,value:t[0]},a=function(e,t,{clamp:i=!0,ease:l,mixer:s}={}){let o=e.length;if(ix(o===t.length,"Both input and output ranges must be the same length","range-length"),1===o)return()=>t[0];if(2===o&&t[0]===t[1])return()=>t[1];let n=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());let r=function(e,t,i){let l=[],s=i||iL.mix||sO,o=e.length-1;for(let i=0;i<o;i++){let o=s(e[i],e[i+1]);t&&(o=sT(Array.isArray(t)?t[i]||iV:t,o)),l.push(o)}return l}(t,l,s),a=r.length,d=i=>{if(n&&i<e[0])return t[0];let l=0;if(a>1)for(;l<e.length-2&&!(i<e[l+1]);l++);let s=oo(e[l],e[l+1],i);return r[l](s)};return i?t=>d(tP(e[0],e[o-1],t)):d}((s=i&&i.length===t.length?i:(!function(e,t){let i=e[e.length-1];for(let l=1;l<=t;l++){let s=oo(0,t,l);e.push(lM(i,1,s))}}(o=[0],t.length-1),o),s.map(t=>t*e)),t,{ease:Array.isArray(n)?n:t.map(()=>n||s4).splice(0,t.length-1)});return{calculatedDuration:e,next:t=>(r.value=a(t),r.done=t>=e,r)}}let or=e=>null!==e;function oa(e,{repeat:t,repeatType:i="loop"},l,s=1){let o=e.filter(or),n=s<0||t&&"loop"!==i&&t%2==1?0:o.length-1;return n&&void 0!==l?l:o[n]}let od={decay:sG,inertia:sG,tween:on,keyframes:on,spring:sQ};function oc(e){"string"==typeof e.type&&(e.type=od[e.type])}class op{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}let oh=e=>e/100;class ou extends op{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{let{motionValue:e}=this.options;e&&e.updatedAt!==i8.now()&&this.tick(i8.now()),this.isStopped=!0,"idle"!==this.state&&(this.teardown(),this.options.onStop?.())},sq.mainThread++,this.options=e,this.initAnimation(),this.play(),!1===e.autoplay&&this.pause()}initAnimation(){let{options:e}=this;oc(e);let{type:t=on,repeat:i=0,repeatDelay:l=0,repeatType:s,velocity:o=0}=e,{keyframes:n}=e,r=t||on;r!==on&&"number"!=typeof n[0]&&(this.mixKeyframes=sT(oh,sO(n[0],n[1])),n=[0,100]);let a=r({...e,keyframes:n});"mirror"===s&&(this.mirroredGenerator=r({...e,keyframes:[...n].reverse(),velocity:-o})),null===a.calculatedDuration&&(a.calculatedDuration=sL(a));let{calculatedDuration:d}=a;this.calculatedDuration=d,this.resolvedDuration=d+l,this.totalDuration=this.resolvedDuration*(i+1)-l,this.generator=a}updateTime(e){let t=Math.round(e-this.startTime)*this.playbackSpeed;null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){let{generator:i,totalDuration:l,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:n,calculatedDuration:r}=this;if(null===this.startTime)return i.next(0);let{delay:a=0,keyframes:d,repeat:c,repeatType:p,repeatDelay:h,type:u,onUpdate:m,finalKeyframe:f}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-l/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);let y=this.currentTime-a*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?y<0:y>l;this.currentTime=Math.max(y,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=l);let g=this.currentTime,b=i;if(c){let e=Math.min(this.currentTime,l)/n,t=Math.floor(e),i=e%1;!i&&e>=1&&(i=1),1===i&&t--,(t=Math.min(t,c+1))%2&&("reverse"===p?(i=1-i,h&&(i-=h/n)):"mirror"===p&&(b=o)),g=tP(0,1,i)*n}let v=x?{done:!1,value:d[0]}:b.next(g);s&&(v.value=s(v.value));let{done:w}=v;x||null===r||(w=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);let j=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return j&&u!==sG&&(v.value=oa(d,this.options,f,this.speed)),m&&m(v.value),j&&this.finish(),v}then(e,t){return this.finished.then(e,t)}get duration(){return this.calculatedDuration/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return this.currentTime/1e3}set time(e){e=sw(e),this.currentTime=e,null===this.startTime||null!==this.holdTime||0===this.playbackSpeed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(i8.now());let t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=this.currentTime/1e3)}play(){if(this.isStopped)return;let{driver:e=sD,startTime:t}=this.options;this.driver||(this.driver=e(e=>this.tick(e))),this.options.onPlay?.();let i=this.driver.now();"finished"===this.state?(this.updateFinished(),this.startTime=i):null!==this.holdTime?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),"finished"===this.state&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(i8.now()),this.holdTime=this.currentTime}complete(){"running"!==this.state&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null,sq.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function om(e){let t;return()=>(void 0===t&&(t=e()),t)}let of=om(()=>void 0!==window.ScrollTimeline),oy={},ox=(i=om(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(e){return!1}return!0}),()=>oy.linearEasing??i()),og=([e,t,i,l])=>`cubic-bezier(${e}, ${t}, ${i}, ${l})`,ob={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:og([0,.65,.55,1]),circOut:og([.55,0,1,.45]),backIn:og([.31,.01,.66,-.59]),backOut:og([.33,1.53,.69,.99])};function ov(e){return"function"==typeof e&&"applyToOptions"in e}class ow extends op{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:i,keyframes:l,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:n,onComplete:r}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,ix("string"!=typeof e.type,'Mini animate() doesn\'t support "type" as a string.',"mini-spring");const a=function({type:e,...t}){return ov(e)&&ox()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}(e);this.animation=function(e,t,i,{delay:l=0,duration:s=300,repeat:o=0,repeatType:n="loop",ease:r="easeOut",times:a}={},d){let c={[t]:i};a&&(c.offset=a);let p=function e(t,i){if(t)return"function"==typeof t?ox()?sV(t,i):"ease-out":oi(t)?og(t):Array.isArray(t)?t.map(t=>e(t,i)||ob.easeOut):ob[t]}(r,s);Array.isArray(p)&&(c.easing=p);let h={delay:l,duration:s,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:o+1,direction:"reverse"===n?"alternate":"normal"};d&&(h.pseudoElement=d);let u=e.animate(c,h);return u}(t,i,l,a,s),!1===a.autoplay&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){let e=oa(l,this.options,n,this.speed);this.updateMotionValue?this.updateMotionValue(e):i.startsWith("--")?t.style.setProperty(i,e):t.style[i]=e,this.animation.cancel()}r?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),"finished"===this.state&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch(e){}}stop(){if(this.isStopped)return;this.isStopped=!0;let{state:e}=this;"idle"!==e&&"finished"!==e&&(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){this.isPseudoElement||this.animation.commitStyles?.()}get duration(){return Number(this.animation.effect?.getComputedTiming?.().duration||0)/1e3}get iterationDuration(){let{delay:e=0}=this.options||{};return this.duration+e/1e3}get time(){return(Number(this.animation.currentTime)||0)/1e3}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=sw(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return null!==this.finishedTime?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:t}){return(this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&of())?(this.animation.timeline=e,iV):t(this)}}let oj={anticipate:s8,backInOut:s7,circInOut:ot};class oT extends ow{constructor(e){!function(e){"string"==typeof e.ease&&e.ease in oj&&(e.ease=oj[e.ease])}(e),oc(e),super(e),void 0!==e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){let{motionValue:t,onUpdate:i,onComplete:l,element:s,...o}=this.options;if(!t)return;if(void 0!==e)return void t.set(e);let n=new ou({...o,autoplay:!1}),r=Math.max(10,i8.now()-this.startTime),a=tP(0,10,r-10);t.setWithVelocity(n.sample(Math.max(0,r-a)).value,n.sample(r).value,a),n.stop()}}let oq=(e,t)=>"zIndex"!==t&&!!("number"==typeof e||Array.isArray(e)||"string"==typeof e&&(t5.test(e)||"0"===e)&&!e.startsWith("url("));function ok(e){e.duration=0,e.type="keyframes"}let oN=new Set(["opacity","clipPath","filter","transform"]),oS=om(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class oA extends op{constructor({autoplay:e=!0,delay:t=0,type:i="keyframes",repeat:l=0,repeatDelay:s=0,repeatType:o="loop",keyframes:n,name:r,motionValue:a,element:d,...c}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=i8.now();const p={autoplay:e,delay:t,type:i,repeat:l,repeatDelay:s,repeatType:o,name:r,motionValue:a,element:d,...c},h=d?.KeyframeResolver||iZ;this.keyframeResolver=new h(n,(e,t,i)=>this.onKeyframesResolved(e,t,p,!i),r,a,d),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,i,l){this.keyframeResolver=void 0;let{name:s,type:o,velocity:n,delay:r,isHandoff:a,onUpdate:d}=i;this.resolvedAt=i8.now(),!function(e,t,i,l){let s=e[0];if(null===s)return!1;if("display"===t||"visibility"===t)return!0;let o=e[e.length-1],n=oq(s,t),r=oq(o,t);return iy(n===r,`You are trying to animate ${t} from "${s}" to "${o}". "${n?o:s}" is not an animatable value.`,"value-not-animatable"),!!n&&!!r&&(function(e){let t=e[0];if(1===e.length)return!0;for(let i=0;i<e.length;i++)if(e[i]!==t)return!0}(e)||("spring"===i||ov(i))&&l)}(e,s,o,n)&&((iL.instantAnimations||!r)&&d?.(oa(e,i,t)),e[0]=e[e.length-1],ok(i),i.repeat=0);let c={startTime:l?this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt:void 0,finalKeyframe:t,...i,keyframes:e},p=!a&&function(e){let{motionValue:t,name:i,repeatDelay:l,repeatType:s,damping:o,type:n}=e;if(!(t?.owner?.current instanceof HTMLElement))return!1;let{onUpdate:r,transformTemplate:a}=t.owner.getProps();return oS()&&i&&oN.has(i)&&("transform"!==i||!a)&&!r&&!l&&"mirror"!==s&&0!==o&&"inertia"!==n}(c)?new oT({...c,element:c.motionValue.owner.current}):new ou(c);p.finished.then(()=>this.notifyFinished()).catch(iV),this.pendingTimeline&&(this.stopTimeline=p.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=p}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),iQ=!0,iJ(),iG(),iQ=!1),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}let oC={type:"spring",stiffness:500,damping:25,restSpeed:10},oP={type:"keyframes",duration:.8},oE={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},oM=e=>null!==e,oI=(e,t,i,l={},s,o)=>n=>{let r=sg(l,e)||{},a=r.delay||l.delay||0,{elapsed:d=0}=l;d-=sw(a);let c={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:t.getVelocity(),...r,delay:-d,onUpdate:e=>{t.set(e),r.onUpdate&&r.onUpdate(e)},onComplete:()=>{n(),r.onComplete&&r.onComplete()},name:e,motionValue:t,element:o?void 0:s};!function({when:e,delay:t,delayChildren:i,staggerChildren:l,staggerDirection:s,repeat:o,repeatType:n,repeatDelay:r,from:a,elapsed:d,...c}){return!!Object.keys(c).length}(r)&&Object.assign(c,((e,{keyframes:t})=>t.length>2?oP:tC.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===t[1]?2*Math.sqrt(550):30,restSpeed:10}:oC:oE)(e,c)),c.duration&&(c.duration=sw(c.duration)),c.repeatDelay&&(c.repeatDelay=sw(c.repeatDelay)),void 0!==c.from&&(c.keyframes[0]=c.from);let p=!1;if(!1!==c.type&&(0!==c.duration||c.repeatDelay)||(ok(c),0===c.delay&&(p=!0)),(iL.instantAnimations||iL.skipAnimations)&&(p=!0,ok(c),c.delay=0),c.allowFlatten=!r.type&&!r.ease,p&&!o&&void 0!==t.get()){let e=function(e,{repeat:t,repeatType:i="loop"},l){let s=e.filter(oM),o=t&&"loop"!==i&&t%2==1?0:s.length-1;return s[o]}(c.keyframes,r);if(void 0!==e)return void iB.update(()=>{c.onUpdate(e),c.onComplete()})}return r.isSync?new ou(c):new oA(c)};function oR(e,t,{delay:i=0,transitionOverride:l,type:s}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:n,...r}=t;l&&(o=l);let a=[],d=s&&e.animationState&&e.animationState.getState()[s];for(let t in r){let l=e.getValue(t,e.latestValues[t]??null),s=r[t];if(void 0===s||d&&function({protectedKeys:e,needsAnimating:t},i){let l=e.hasOwnProperty(i)&&!0!==t[i];return t[i]=!1,l}(d,t))continue;let n={delay:i,...sg(o||{},t)},c=l.get();if(void 0!==c&&!l.isAnimating&&!Array.isArray(s)&&s===c&&!n.velocity)continue;let p=!1;if(window.MotionHandoffAnimation){let i=e.props[sp];if(i){let e=window.MotionHandoffAnimation(i,t,iB);null!==e&&(n.startTime=e,p=!0)}}sv(e,t),l.start(oI(t,l,s,e.shouldReduceMotion&&ic.has(t)?{type:!1}:n,e,p));let h=l.animation;h&&a.push(h)}return n&&Promise.all(a).then(()=>{iB.update(()=>{n&&function(e,t){let{transitionEnd:i={},transition:l={},...s}=sx(e,t)||{};for(let t in s={...s,...i}){var o;let i=sb(o=s[t])?o[o.length-1]||0:o;e.hasValue(t)?e.getValue(t).set(i):e.addValue(t,le(i))}}(e,n)})}),a}function oz(e,t,i,l=0,s=1){let o=Array.from(e).sort((e,t)=>e.sortNodePosition(t)).indexOf(t),n=e.size,r=(n-1)*l;return"function"==typeof i?i(o,n):1===s?o*l:r-o*l}function o_(e,t,i={}){let l=sx(e,t,"exit"===i.type?e.presenceContext?.custom:void 0),{transition:s=e.getDefaultTransition()||{}}=l||{};i.transitionOverride&&(s=i.transitionOverride);let o=l?()=>Promise.all(oR(e,l,i)):()=>Promise.resolve(),n=e.variantChildren&&e.variantChildren.size?(l=0)=>{let{delayChildren:o=0,staggerChildren:n,staggerDirection:r}=s;return function(e,t,i=0,l=0,s=0,o=1,n){let r=[];for(let a of e.variantChildren)a.notify("AnimationStart",t),r.push(o_(a,t,{...n,delay:i+("function"==typeof l?0:l)+oz(e.variantChildren,a,l,s,o)}).then(()=>a.notify("AnimationComplete",t)));return Promise.all(r)}(e,t,l,o,n,r,i)}:()=>Promise.resolve(),{when:r}=s;if(!r)return Promise.all([o(),n(i.delay)]);{let[e,t]="beforeChildren"===r?[o,n]:[n,o];return e().then(()=>t())}}let oO=ld.length;function oD(e,t){if(!Array.isArray(t))return!1;let i=t.length;if(i!==e.length)return!1;for(let l=0;l<i;l++)if(t[l]!==e[l])return!1;return!0}let oV=[...la].reverse(),oL=la.length;function oF(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function oH(){return{animate:oF(!0),whileInView:oF(),whileHover:oF(),whileTap:oF(),whileDrag:oF(),whileFocus:oF(),exit:oF()}}let oB=0;function o$(e){return[e("x"),e("y")]}let oU=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function oW(e){return oU.has(e.tagName)||!0===e.isContentEditable}function oX(e,t,i,l={passive:!0}){return e.addEventListener(t,i,l),()=>e.removeEventListener(t,i)}let oY={x:!1,y:!1};function oK(e){return e.max-e.min}function oQ(e,t,i,l=.5){e.origin=l,e.originPoint=lM(t.min,t.max,e.origin),e.scale=oK(i)/oK(t),e.translate=lM(i.min,i.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function oG(e,t,i,l){oQ(e.x,t.x,i.x,l?l.originX:void 0),oQ(e.y,t.y,i.y,l?l.originY:void 0)}function oJ(e,t,i){e.min=i.min+t.min,e.max=e.min+oK(t)}function oZ(e,t,i){e.min=t.min-i.min,e.max=e.min+oK(t)}function o0(e,t,i){oZ(e.x,t.x,i.x),oZ(e.y,t.y,i.y)}let o1=e=>"mouse"===e.pointerType?"number"!=typeof e.button||e.button<=0:!1!==e.isPrimary;function o4(e){return{point:{x:e.pageX,y:e.pageY}}}function o2(e,t,i,l){return oX(e,t,e=>o1(e)&&i(e,o4(e)),l)}let o3=({current:e})=>e?e.ownerDocument.defaultView:null,o5=(e,t)=>Math.abs(e-t),o6=new Set(["auto","scroll"]);class o7{constructor(e,t,{transformPagePoint:i,contextWindow:l=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:n}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=e=>{this.handleScroll(e.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{var e,t;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let i=ne(this.lastMoveEventInfo,this.history),l=null!==this.startEvent,s=(e=i.offset,t={x:0,y:0},Math.sqrt(o5(e.x,t.x)**2+o5(e.y,t.y)**2)>=this.distanceThreshold);if(!l&&!s)return;let{point:o}=i,{timestamp:n}=iU;this.history.push({...o,timestamp:n});let{onStart:r,onMove:a}=this.handlers;l||(r&&r(this.lastMoveEvent,i),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,i)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=o8(t,this.transformPagePoint),iB.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();let{onEnd:i,onSessionEnd:l,resumeAnimation:s}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&s&&s(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let o=ne("pointercancel"===e.type?this.lastMoveEventInfo:o8(t,this.transformPagePoint),this.history);this.startEvent&&i&&i(e,o),l&&l(e,o)},!o1(e))return;this.dragSnapToOrigin=s,this.handlers=t,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=l||window;const r=o8(o4(e),this.transformPagePoint),{point:a}=r,{timestamp:d}=iU;this.history=[{...a,timestamp:d}];const{onSessionStart:c}=t;c&&c(e,ne(r,this.history)),this.removeListeners=sT(o2(this.contextWindow,"pointermove",this.handlePointerMove),o2(this.contextWindow,"pointerup",this.handlePointerUp),o2(this.contextWindow,"pointercancel",this.handlePointerUp)),n&&this.startScrollTracking(n)}startScrollTracking(e){let t=e.parentElement;for(;t;){let e=getComputedStyle(t);(o6.has(e.overflowX)||o6.has(e.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){let t=this.scrollPositions.get(e);if(!t)return;let i=e===window,l=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:l.x-t.x,y:l.y-t.y};(0!==s.x||0!==s.y)&&(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,l),iB.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),i$(this.updatePoint)}}function o8(e,t){return t?{point:t(e.point)}:e}function o9(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ne({point:e},t){return{point:e,delta:o9(e,nt(t)),offset:o9(e,t[0]),velocity:function(e,t){if(e.length<2)return{x:0,y:0};let i=e.length-1,l=null,s=nt(e);for(;i>=0&&(l=e[i],!(s.timestamp-l.timestamp>sw(.1)));)i--;if(!l)return{x:0,y:0};let o=(s.timestamp-l.timestamp)/1e3;if(0===o)return{x:0,y:0};let n={x:(s.x-l.x)/o,y:(s.y-l.y)/o};return n.x===1/0&&(n.x=0),n.y===1/0&&(n.y=0),n}(t,.1)}}function nt(e){return e[e.length-1]}function ni(e,t,i){return{min:void 0!==t?e.min+t:void 0,max:void 0!==i?e.max+i-(e.max-e.min):void 0}}function nl(e,t){let i=t.min-e.min,l=t.max-e.max;return t.max-t.min<e.max-e.min&&([i,l]=[l,i]),{min:i,max:l}}function ns(e,t,i){return{min:no(e,t),max:no(e,i)}}function no(e,t){return"number"==typeof e?e:e[t]||0}let nn=new WeakMap;class nr{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ia(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:i}={}){let{presenceContext:l}=this.visualElement;if(l&&!1===l.isPresent)return;let s=e=>{t?(this.stopAnimation(),this.snapToCursor(o4(e).point)):this.pauseAnimation()},o=(e,t)=>{this.stopAnimation();let{drag:i,dragPropagation:l,onDragStart:s}=this.getProps();if(i&&!l&&(this.openDragLock&&this.openDragLock(),this.openDragLock=function(e){if("x"===e||"y"===e)if(oY[e])return null;else return oY[e]=!0,()=>{oY[e]=!1};return oY.x||oY.y?null:(oY.x=oY.y=!0,()=>{oY.x=oY.y=!1})}(i),!this.openDragLock))return;this.latestPointerEvent=e,this.latestPanInfo=t,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),o$(e=>{let t=this.getAxisMotionValue(e).get()||0;if(t$.test(t)){let{projection:i}=this.visualElement;if(i&&i.layout){let l=i.layout.layoutBox[e];l&&(t=oK(l)*(parseFloat(t)/100))}}this.originPoint[e]=t}),s&&iB.postRender(()=>s(e,t)),sv(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},n=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t;let{dragPropagation:i,dragDirectionLock:l,onDirectionLock:s,onDrag:o}=this.getProps();if(!i&&!this.openDragLock)return;let{offset:n}=t;if(l&&null===this.currentDirection){this.currentDirection=function(e,t=10){let i=null;return Math.abs(e.y)>t?i="y":Math.abs(e.x)>t&&(i="x"),i}(n),null!==this.currentDirection&&s&&s(this.currentDirection);return}this.updateAxis("x",t.point,n),this.updateAxis("y",t.point,n),this.visualElement.render(),o&&o(e,t)},r=(e,t)=>{this.latestPointerEvent=e,this.latestPanInfo=t,this.stop(e,t),this.latestPointerEvent=null,this.latestPanInfo=null},a=()=>o$(e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()),{dragSnapToOrigin:d}=this.getProps();this.panSession=new o7(e,{onSessionStart:s,onStart:o,onMove:n,onSessionEnd:r,resumeAnimation:a},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:i,contextWindow:o3(this.visualElement),element:this.visualElement.current})}stop(e,t){let i=e||this.latestPointerEvent,l=t||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!l||!i)return;let{velocity:o}=l;this.startAnimation(o);let{onDragEnd:n}=this.getProps();n&&iB.postRender(()=>n(i,l))}cancel(){this.isDragging=!1;let{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,i){let{drag:l}=this.getProps();if(!i||!na(e,l,this.currentDirection))return;let s=this.getAxisMotionValue(e),o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=function(e,{min:t,max:i},l){return void 0!==t&&e<t?e=l?lM(t,e,l.min):Math.max(e,t):void 0!==i&&e>i&&(e=l?lM(i,e,l.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){let{dragConstraints:e,dragElastic:t}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,l=this.constraints;e&&su(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=function(e,{top:t,left:i,bottom:l,right:s}){return{x:ni(e.x,i,s),y:ni(e.y,t,l)}}(i.layoutBox,e):this.constraints=!1,this.elastic=function(e=.35){return!1===e?e=0:!0===e&&(e=.35),{x:ns(e,"left","right"),y:ns(e,"top","bottom")}}(t),l!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&o$(e=>{var t,l;let s;!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=(t=i.layoutBox[e],l=this.constraints[e],s={},void 0!==l.min&&(s.min=l.min-t.min),void 0!==l.max&&(s.max=l.max-t.min),s))})}resolveRefConstraints(){var e;let{dragConstraints:t,onMeasureDragConstraints:i}=this.getProps();if(!t||!su(t))return!1;let l=t.current;ix(null!==l,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");let{projection:s}=this.visualElement;if(!s||!s.layout)return!1;let o=function(e,t,i){let l=lK(e,i),{scroll:s}=t;return s&&(lW(l.x,s.offset.x),lW(l.y,s.offset.y)),l}(l,s.root,this.visualElement.getTransformPagePoint()),n=(e=s.layout.layoutBox,{x:nl(e.x,o.x),y:nl(e.y,o.y)});if(i){let e=i(function({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}(n));this.hasMutatedConstraints=!!e,e&&(n=lD(e))}return n}startAnimation(e){let{drag:t,dragMomentum:i,dragElastic:l,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:n}=this.getProps(),r=this.constraints||{};return Promise.all(o$(n=>{if(!na(n,t,this.currentDirection))return;let a=r&&r[n]||{};o&&(a={min:0,max:0});let d={type:"inertia",velocity:i?e[n]:0,bounceStiffness:l?200:1e6,bounceDamping:l?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...s,...a};return this.startAxisValueAnimation(n,d)})).then(n)}startAxisValueAnimation(e,t){let i=this.getAxisMotionValue(e);return sv(this.visualElement,e),i.start(oI(e,i,0,t,this.visualElement,!1))}stopAnimation(){o$(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){o$(e=>this.getAxisMotionValue(e).animation?.pause())}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){let t=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps();return i[t]||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){o$(t=>{let{drag:i}=this.getProps();if(!na(t,i,this.currentDirection))return;let{projection:l}=this.visualElement,s=this.getAxisMotionValue(t);if(l&&l.layout){let{min:i,max:o}=l.layout.layoutBox[t],n=s.get()||0;s.set(e[t]-lM(i,o,.5)+n)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:e,dragConstraints:t}=this.getProps(),{projection:i}=this.visualElement;if(!su(t)||!i||!this.constraints)return;this.stopAnimation();let l={x:0,y:0};o$(e=>{let t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){var i,s;let o,n,r,a=t.get();l[e]=(i={min:a,max:a},s=this.constraints[e],o=.5,n=oK(i),(r=oK(s))>n?o=oo(s.min,s.max-n,i.min):n>r&&(o=oo(i.min,i.max-r,s.min)),tP(0,1,o))}});let{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),o$(t=>{if(!na(t,e,null))return;let i=this.getAxisMotionValue(t),{min:s,max:o}=this.constraints[t];i.set(lM(s,o,l[t]))})}addListeners(){if(!this.visualElement.current)return;nn.set(this.visualElement,this);let e=o2(this.visualElement.current,"pointerdown",e=>{let{drag:t,dragListener:i=!0}=this.getProps();t&&i&&!oW(e.target)&&this.start(e)}),t=()=>{let{dragConstraints:e}=this.getProps();su(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,l=i.addEventListener("measure",t);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),iB.read(t);let s=oX(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t})=>{this.isDragging&&t&&(o$(t=>{let i=this.getAxisMotionValue(t);i&&(this.originPoint[t]+=e[t].translate,i.set(i.get()+e[t].translate))}),this.visualElement.render())});return()=>{s(),e(),l(),o&&o()}}getProps(){let e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:i=!1,dragPropagation:l=!1,dragConstraints:s=!1,dragElastic:o=.35,dragMomentum:n=!0}=e;return{...e,drag:t,dragDirectionLock:i,dragPropagation:l,dragConstraints:s,dragElastic:o,dragMomentum:n}}}function na(e,t,i){return(!0===t||t===e)&&(null===i||i===e)}let nd=e=>(t,i)=>{e&&iB.postRender(()=>e(t,i))},nc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};var np=x;function nh(e=!0){let t=(0,x.useContext)(st);if(null===t)return[!0,null];let{isPresent:i,onExitComplete:l,register:s}=t,o=(0,x.useId)();(0,x.useEffect)(()=>{if(e)return s(o)},[e]);let n=(0,x.useCallback)(()=>e&&l&&l(o),[o,l,e]);return!i&&l?[!1,n]:[!0]}let nu=!1;class nm extends np.Component{componentDidMount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i,layoutId:l}=this.props,{projection:s}=e;s&&(t.group&&t.group.add(s),i&&i.register&&l&&i.register(s),nu&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),nc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){let{layoutDependency:t,visualElement:i,drag:l,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,nu=!0,l||e.layoutDependency!==t||void 0===t||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||iB.postRender(()=>{let e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),i6.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:e,layoutGroup:t,switchLayoutGroup:i}=this.props,{projection:l}=e;nu=!0,l&&(l.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(l),i&&i.deregister&&i.deregister(l))}safeToRemove(){let{safeToRemove:e}=this.props;e&&e()}render(){return null}}function nf(e){let[t,i]=nh(),l=(0,np.useContext)(lZ);return(0,y.jsx)(nm,{...e,layoutGroup:l,switchLayoutGroup:(0,np.useContext)(sh),isPresent:t,safeToRemove:i})}function ny(e,t,i,l,s){return e-=t,e=l+1/i*(e-l),void 0!==s&&(e=l+1/s*(e-l)),e}function nx(e,t,[i,l,s],o,n){!function(e,t=0,i=1,l=.5,s,o=e,n=e){if(t$.test(t)&&(t=parseFloat(t),t=lM(n.min,n.max,t/100)-n.min),"number"!=typeof t)return;let r=lM(o.min,o.max,l);e===o&&(r-=t),e.min=ny(e.min,t,i,r,s),e.max=ny(e.max,t,i,r,s)}(e,t[i],t[l],t[s],t.scale,o,n)}let ng=["x","scaleX","originX"],nb=["y","scaleY","originY"];function nv(e,t,i,l){nx(e.x,t,ng,i?i.x:void 0,l?l.x:void 0),nx(e.y,t,nb,i?i.y:void 0,l?l.y:void 0)}function nw(e,t){e.min=t.min,e.max=t.max}function nj(e,t){nw(e.x,t.x),nw(e.y,t.y)}function nT(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function nq(e){return 0===e.translate&&1===e.scale}function nk(e){return nq(e.x)&&nq(e.y)}function nN(e,t){return e.min===t.min&&e.max===t.max}function nS(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function nA(e,t){return nS(e.x,t.x)&&nS(e.y,t.y)}function nC(e){return oK(e.x)/oK(e.y)}function nP(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}let nE=["TopLeft","TopRight","BottomLeft","BottomRight"],nM=nE.length,nI=e=>"string"==typeof e?parseFloat(e):e,nR=e=>"number"==typeof e||tU.test(e);function nz(e,t){return void 0!==e[t]?e[t]:e.borderRadius}let n_=nD(0,.5,oe),nO=nD(.5,.95,iV);function nD(e,t,i){return l=>l<e?0:l>t?1:i(oo(e,t,l))}function nV(e){return"object"==typeof e&&null!==e}function nL(e){return nV(e)&&"ownerSVGElement"in e}let nF=(e,t)=>e.depth-t.depth;class nH{constructor(){this.children=[],this.isDirty=!1}add(e){i2(this.children,e),this.isDirty=!0}remove(e){i3(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(nF),this.isDirty=!1,this.children.forEach(e)}}class nB{constructor(){this.members=[]}add(e){i2(this.members,e),e.scheduleRender()}remove(e){if(i3(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){let e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){let t,i=this.members.findIndex(t=>e===t);if(0===i)return!1;for(let e=i;e>=0;e--){let i=this.members[e];if(!1!==i.isPresent){t=i;break}}return!!t&&(this.promote(t),!0)}promote(e,t){let i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,t&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);let{crossfade:l}=e.options;!1===l&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{let{options:t,resumingFrom:i}=e;t.onExitComplete&&t.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}let n$=["","X","Y","Z"],nU=0;function nW(e,t,i,l){let{latestValues:s}=t;s[e]&&(i[e]=s[e],t.setStaticValue(e,0),l&&(l[e]=0))}function nX({attachResizeListener:e,defaultParent:t,measureScroll:i,checkIsScrollRoot:l,resetTransform:s}){return class{constructor(e={},i=t?.()){this.id=nU++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(nQ),this.nodes.forEach(n2),this.nodes.forEach(n3),this.nodes.forEach(nG)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=i?i.root||i:this,this.path=i?[...i.path,i]:[],this.parent=i,this.depth=i?i.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new nH)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new i5),this.eventHandlers.get(e).add(t)}notifyListeners(e,...t){let i=this.eventHandlers.get(e);i&&i.notify(...t)}hasListeners(e){return this.eventHandlers.has(e)}mount(t){if(this.instance)return;this.isSVG=nL(t)&&!(nL(t)&&"svg"===t.tagName),this.instance=t;let{layoutId:i,layout:l,visualElement:s}=this.options;if(s&&!s.current&&s.mount(t),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||i)&&(this.isLayoutDirty=!0),e){let i,l=0,s=()=>this.root.updateBlockedByResize=!1;iB.read(()=>{l=window.innerWidth}),e(t,()=>{let e=window.innerWidth;if(e!==l){let t,o;l=e,this.root.updateBlockedByResize=!0,i&&i(),t=i8.now(),o=({timestamp:e})=>{let i=e-t;i>=250&&(i$(o),s(i-250))},iB.setup(o,!0),i=()=>i$(o),nc.hasAnimatedSinceResize&&(nc.hasAnimatedSinceResize=!1,this.nodes.forEach(n4))}})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&s&&(i||l)&&this.addEventListener("didUpdate",({delta:e,hasLayoutChanged:t,hasRelativeLayoutChanged:i,layout:l})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let o=this.options.transition||s.getDefaultTransition()||re,{onLayoutAnimationStart:n,onLayoutAnimationComplete:r}=s.getProps(),a=!this.targetLayout||!nA(this.targetLayout,l),d=!t&&i;if(this.options.layoutRoot||this.resumeFrom||d||t&&(a||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);let t={...sg(o,"layout"),onPlay:n,onComplete:r};(s.shouldReduceMotion||this.options.layoutRoot)&&(t.delay=0,t.type=!1),this.startAnimation(t),this.setAnimationOrigin(e,d)}else t||n4(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=l})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),i$(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(n5),this.animationId++)}getTransformTemplate(){let{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(e=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&function e(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;let{visualElement:i}=t.options;if(!i)return;let l=i.props[sp];if(window.MotionHasOptimisedAnimation(l,"transform")){let{layout:e,layoutId:i}=t.options;window.MotionCancelOptimisedAnimation(l,"transform",iB,!(e||i))}let{parent:s}=t;s&&!s.hasCheckedOptimisedAppear&&e(s)}(this),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let e=0;e<this.path.length;e++){let t=this.path[e];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}let{layoutId:t,layout:i}=this.options;if(void 0===t&&!i)return;let l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(nZ);return}if(this.animationId<=this.animationCommitId)return void this.nodes.forEach(n0);this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(n1),this.nodes.forEach(nY),this.nodes.forEach(nK)):this.nodes.forEach(n0),this.clearAllSnapshots();let e=i8.now();iU.delta=tP(0,1e3/60,e-iU.timestamp),iU.timestamp=e,iU.isProcessing=!0,iW.update.process(iU),iW.preRender.process(iU),iW.render.process(iU),iU.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,i6.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nJ),this.sharedNodes.forEach(n6)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,iB.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){iB.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||oK(this.snapshot.measuredBox.x)||oK(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let e=0;e<this.path.length;e++)this.path[e].updateScroll();let e=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=ia(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(e="measure"){let t=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&this.instance){let t=l(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!s)return;let e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!nk(this.projectionDelta),i=this.getTransformTemplate(),l=i?i(this.latestValues,""):void 0,o=l!==this.prevTransformTemplateValue;e&&this.instance&&(t||lF(this.latestValues)||o)&&(s(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(e=!0){var t;let i=this.measurePageBox(),l=this.removeElementScroll(i);return e&&(l=this.removeTransform(l)),rl((t=l).x),rl(t.y),{animationId:this.root.animationId,measuredBox:i,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:e}=this.options;if(!e)return ia();let t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(ro))){let{scroll:e}=this.root;e&&(lW(t.x,e.offset.x),lW(t.y,e.offset.y))}return t}removeElementScroll(e){let t=ia();if(nj(t,e),this.scroll?.wasRoot)return t;for(let i=0;i<this.path.length;i++){let l=this.path[i],{scroll:s,options:o}=l;l!==this.root&&s&&o.layoutScroll&&(s.wasRoot&&nj(t,e),lW(t.x,s.offset.x),lW(t.y,s.offset.y))}return t}applyTransform(e,t=!1){let i=ia();nj(i,e);for(let e=0;e<this.path.length;e++){let l=this.path[e];!t&&l.options.layoutScroll&&l.scroll&&l!==l.root&&lY(i,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),lF(l.latestValues)&&lY(i,l.latestValues)}return lF(this.latestValues)&&lY(i,this.latestValues),i}removeTransform(e){let t=ia();nj(t,e);for(let e=0;e<this.path.length;e++){let i=this.path[e];if(!i.instance||!lF(i.latestValues))continue;lL(i.latestValues)&&i.updateSnapshot();let l=ia();nj(l,i.measurePageBox()),nv(t,i.latestValues,i.snapshot?i.snapshot.layoutBox:void 0,l)}return lF(this.latestValues)&&nv(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==iU.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(e=!1){let t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);let i=!!this.resumingFrom||this!==t;if(!(e||i&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;let{layout:l,layoutId:s}=this.options;if(!this.layout||!(l||s))return;this.resolvedRelativeTargetAt=iU.timestamp;let o=this.getClosestProjectingParent();if(o&&this.linkedParentVersion!==o.layoutVersion&&!o.options.layoutRoot&&this.removeRelativeTarget(),this.targetDelta||this.relativeTarget||(o&&o.layout?this.createRelativeTarget(o,this.layout.layoutBox,o.layout.layoutBox):this.removeRelativeTarget()),this.relativeTarget||this.targetDelta){if(this.target||(this.target=ia(),this.targetWithTransforms=ia()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target){var n,r,a;this.forceRelativeParentToResolveTarget(),n=this.target,r=this.relativeTarget,a=this.relativeParent.target,oJ(n.x,r.x,a.x),oJ(n.y,r.y,a.y)}else this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nj(this.target,this.layout.layoutBox),lU(this.target,this.targetDelta)):nj(this.target,this.layout.layoutBox);this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,o&&!!o.resumingFrom==!!this.resumingFrom&&!o.options.layoutScroll&&o.target&&1!==this.animationProgress?this.createRelativeTarget(o,this.target,o.target):this.relativeParent=this.relativeTarget=void 0)}}getClosestProjectingParent(){if(!(!this.parent||lL(this.parent.latestValues)||lH(this.parent.latestValues)))if(this.parent.isProjecting())return this.parent;else return this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(e,t,i){this.relativeParent=e,this.linkedParentVersion=e.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ia(),this.relativeTargetOrigin=ia(),o0(this.relativeTargetOrigin,t,i),nj(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){let e=this.getLead(),t=!!this.resumingFrom||this!==e,i=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(i=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===iU.timestamp&&(i=!1),i)return;let{layout:l,layoutId:s}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(l||s))return;nj(this.layoutCorrected,this.layout.layoutBox);let o=this.treeScale.x,n=this.treeScale.y;!function(e,t,i,l=!1){let s,o,n=i.length;if(n){t.x=t.y=1;for(let r=0;r<n;r++){o=(s=i[r]).projectionDelta;let{visualElement:n}=s.options;(!n||!n.props.style||"contents"!==n.props.style.display)&&(l&&s.options.layoutScroll&&s.scroll&&s!==s.root&&lY(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,lU(e,o)),l&&lF(s.latestValues)&&lY(e,s.latestValues))}t.x<1.0000000000001&&t.x>.999999999999&&(t.x=1),t.y<1.0000000000001&&t.y>.999999999999&&(t.y=1)}}(this.layoutCorrected,this.treeScale,this.path,t),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=ia());let{target:r}=e;if(!r){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}this.projectionDelta&&this.prevProjectionDelta?(nT(this.prevProjectionDelta.x,this.projectionDelta.x),nT(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),oG(this.projectionDelta,this.layoutCorrected,r,this.latestValues),this.treeScale.x===o&&this.treeScale.y===n&&nP(this.projectionDelta.x,this.prevProjectionDelta.x)&&nP(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",r))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(e=!0){if(this.options.visualElement?.scheduleRender(),e){let e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=io(),this.projectionDelta=io(),this.projectionDeltaWithTransform=io()}setAnimationOrigin(e,t=!1){let i,l=this.snapshot,s=l?l.latestValues:{},o={...this.latestValues},n=io();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;let r=ia(),a=(l?l.source:void 0)!==(this.layout?this.layout.source:void 0),d=this.getStack(),c=!d||d.members.length<=1,p=!!(a&&!c&&!0===this.options.crossfade&&!this.path.some(n9));this.animationProgress=0,this.mixTargetDelta=t=>{let l=t/1e3;if(n7(n.x,e.x,l),n7(n.y,e.y,l),this.setTargetDelta(n),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var d,h,u,m,f,y;o0(r,this.layout.layoutBox,this.relativeParent.layout.layoutBox),u=this.relativeTarget,m=this.relativeTargetOrigin,f=r,y=l,n8(u.x,m.x,f.x,y),n8(u.y,m.y,f.y,y),i&&(d=this.relativeTarget,h=i,nN(d.x,h.x)&&nN(d.y,h.y))&&(this.isProjectionDirty=!1),i||(i=ia()),nj(i,this.relativeTarget)}a&&(this.animationValues=o,function(e,t,i,l,s,o){s?(e.opacity=lM(0,i.opacity??1,n_(l)),e.opacityExit=lM(t.opacity??1,0,nO(l))):o&&(e.opacity=lM(t.opacity??1,i.opacity??1,l));for(let s=0;s<nM;s++){let o=`border${nE[s]}Radius`,n=nz(t,o),r=nz(i,o);(void 0!==n||void 0!==r)&&(n||(n=0),r||(r=0),0===n||0===r||nR(n)===nR(r)?(e[o]=Math.max(lM(nI(n),nI(r),l),0),(t$.test(r)||t$.test(n))&&(e[o]+="%")):e[o]=r)}(t.rotate||i.rotate)&&(e.rotate=lM(t.rotate||0,i.rotate||0,l))}(o,s,this.latestValues,l,p,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=l},this.mixTargetDelta(1e3*!!this.options.layoutRoot)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(i$(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=iB.update(()=>{var t,i,l;let s;nc.hasAnimatedSinceResize=!0,sq.layout++,this.motionValue||(this.motionValue=le(0)),this.currentAnimation=(t=this.motionValue,i=[0,1e3],l={...e,velocity:0,isSync:!0,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{sq.layout--},onComplete:()=>{sq.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}},(s=id(t)?t:le(t)).start(oI("",s,i,l)),s.animation),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let e=this.getLead(),{targetWithTransforms:t,target:i,layout:l,latestValues:s}=e;if(t&&i&&l){if(this!==e&&this.layout&&l&&rs(this.options.animationType,this.layout.layoutBox,l.layoutBox)){i=this.target||ia();let t=oK(this.layout.layoutBox.x);i.x.min=e.target.x.min,i.x.max=i.x.min+t;let l=oK(this.layout.layoutBox.y);i.y.min=e.target.y.min,i.y.max=i.y.min+l}nj(t,i),lY(t,s),oG(this.projectionDeltaWithTransform,this.layoutCorrected,t,s)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new nB),this.sharedNodes.get(e).add(t);let i=t.options.initialPromotionConfig;t.promote({transition:i?i.transition:void 0,preserveFollowOpacity:i&&i.shouldPreserveFollowOpacity?i.shouldPreserveFollowOpacity(t):void 0})}isLead(){let e=this.getStack();return!e||e.lead===this}getLead(){let{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){let{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){let{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote({needsReset:e,transition:t,preserveFollowOpacity:i}={}){let l=this.getStack();l&&l.promote(this,i),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){let e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){let{visualElement:e}=this.options;if(!e)return;let t=!1,{latestValues:i}=e;if((i.z||i.rotate||i.rotateX||i.rotateY||i.rotateZ||i.skewX||i.skewY)&&(t=!0),!t)return;let l={};i.z&&nW("z",e,l,this.animationValues);for(let t=0;t<n$.length;t++)nW(`rotate${n$[t]}`,e,l,this.animationValues),nW(`skew${n$[t]}`,e,l,this.animationValues);for(let t in e.render(),l)e.setStaticValue(t,l[t]),this.animationValues&&(this.animationValues[t]=l[t]);e.scheduleRender()}applyProjectionStyles(e,t){if(!this.instance||this.isSVG)return;if(!this.isVisible){e.visibility="hidden";return}let i=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,e.visibility="",e.opacity="",e.pointerEvents=se(t?.pointerEvents)||"",e.transform=i?i(this.latestValues,""):"none";return}let l=this.getLead();if(!this.projectionDelta||!this.layout||!l.target){this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=se(t?.pointerEvents)||""),this.hasProjected&&!lF(this.latestValues)&&(e.transform=i?i({},""):"none",this.hasProjected=!1);return}e.visibility="";let s=l.animationValues||l.latestValues;this.applyTransformsToTarget();let o=function(e,t,i){let l="",s=e.x.translate/t.x,o=e.y.translate/t.y,n=i?.z||0;if((s||o||n)&&(l=`translate3d(${s}px, ${o}px, ${n}px) `),(1!==t.x||1!==t.y)&&(l+=`scale(${1/t.x}, ${1/t.y}) `),i){let{transformPerspective:e,rotate:t,rotateX:s,rotateY:o,skewX:n,skewY:r}=i;e&&(l=`perspective(${e}px) ${l}`),t&&(l+=`rotate(${t}deg) `),s&&(l+=`rotateX(${s}deg) `),o&&(l+=`rotateY(${o}deg) `),n&&(l+=`skewX(${n}deg) `),r&&(l+=`skewY(${r}deg) `)}let r=e.x.scale*t.x,a=e.y.scale*t.y;return(1!==r||1!==a)&&(l+=`scale(${r}, ${a})`),l||"none"}(this.projectionDeltaWithTransform,this.treeScale,s);i&&(o=i(s,o)),e.transform=o;let{x:n,y:r}=this.projectionDelta;for(let t in e.transformOrigin=`${100*n.origin}% ${100*r.origin}% 0`,l.animationValues?e.opacity=l===this?s.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:s.opacityExit:e.opacity=l===this?void 0!==s.opacity?s.opacity:"":void 0!==s.opacityExit?s.opacityExit:0,lI){if(void 0===s[t])continue;let{correct:i,applyTo:n,isCSSVariable:r}=lI[t],a="none"===o?s[t]:i(s[t],l);if(n){let t=n.length;for(let i=0;i<t;i++)e[n[i]]=a}else r?this.options.visualElement.renderState.vars[t]=a:e[t]=a}this.options.layoutId&&(e.pointerEvents=l===this?se(t?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(e=>e.currentAnimation?.stop()),this.root.nodes.forEach(nZ),this.root.sharedNodes.clear()}}}function nY(e){e.updateLayout()}function nK(e){let t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){let{layoutBox:i,measuredBox:l}=e.layout,{animationType:s}=e.options,o=t.source!==e.layout.source;"size"===s?o$(e=>{let l=o?t.measuredBox[e]:t.layoutBox[e],s=oK(l);l.min=i[e].min,l.max=l.min+s}):rs(s,t.layoutBox,i)&&o$(l=>{let s=o?t.measuredBox[l]:t.layoutBox[l],n=oK(i[l]);s.max=s.min+n,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[l].max=e.relativeTarget[l].min+n)});let n=io();oG(n,i,t.layoutBox);let r=io();o?oG(r,e.applyTransform(l,!0),t.measuredBox):oG(r,i,t.layoutBox);let a=!nk(n),d=!1;if(!e.resumeFrom){let l=e.getClosestProjectingParent();if(l&&!l.resumeFrom){let{snapshot:s,layout:o}=l;if(s&&o){let n=ia();o0(n,t.layoutBox,s.layoutBox);let r=ia();o0(r,i,o.layoutBox),nA(n,r)||(d=!0),l.options.layoutRoot&&(e.relativeTarget=r,e.relativeTargetOrigin=n,e.relativeParent=l)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:r,layoutDelta:n,hasLayoutChanged:a,hasRelativeLayoutChanged:d})}else if(e.isLead()){let{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function nQ(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function nG(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function nJ(e){e.clearSnapshot()}function nZ(e){e.clearMeasurements()}function n0(e){e.isLayoutDirty=!1}function n1(e){let{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function n4(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function n2(e){e.resolveTargetDelta()}function n3(e){e.calcProjection()}function n5(e){e.resetSkewAndRotation()}function n6(e){e.removeLeadSnapshot()}function n7(e,t,i){e.translate=lM(t.translate,0,i),e.scale=lM(t.scale,1,i),e.origin=t.origin,e.originPoint=t.originPoint}function n8(e,t,i,l){e.min=lM(t.min,i.min,l),e.max=lM(t.max,i.max,l)}function n9(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}let re={duration:.45,ease:[.4,0,.1,1]},rt=e=>"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ri=rt("applewebkit/")&&!rt("chrome/")?Math.round:iV;function rl(e){e.min=ri(e.min),e.max=ri(e.max)}function rs(e,t,i){return"position"===e||"preserve-aspect"===e&&!(.2>=Math.abs(nC(t)-nC(i)))}function ro(e){return e!==e.root&&e.scroll?.wasRoot}let rn=nX({attachResizeListener:(e,t)=>oX(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),rr={current:void 0},ra=nX({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!rr.current){let e=new rn({});e.mount(window),e.setOptions({layoutScroll:!0}),rr.current=e}return rr.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>"fixed"===window.getComputedStyle(e).position});function rd(e,t){let i=function(e,t,i){if(e instanceof EventTarget)return[e];if("string"==typeof e){let t=document,i=(void 0)??t.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),l=new AbortController;return[i,{passive:!0,...t,signal:l.signal},()=>l.abort()]}function rc(e){return!("touch"===e.pointerType||oY.x||oY.y)}function rp(e,t,i){let{props:l}=e;e.animationState&&l.whileHover&&e.animationState.setActive("whileHover","Start"===i);let s=l["onHover"+i];s&&iB.postRender(()=>s(t,o4(t)))}function rh(e){return nV(e)&&"offsetHeight"in e}let ru=(e,t)=>!!t&&(e===t||ru(e,t.parentElement)),rm=new WeakSet;function rf(e){return t=>{"Enter"===t.key&&e(t)}}function ry(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function rx(e){return o1(e)&&!(oY.x||oY.y)}function rg(e,t,i){let{props:l}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&l.whileTap&&e.animationState.setActive("whileTap","Start"===i);let s=l["onTap"+("End"===i?"":i)];s&&iB.postRender(()=>s(t,o4(t)))}let rb=new WeakMap,rv=new WeakMap,rw=e=>{let t=rb.get(e.target);t&&t(e)},rj=e=>{e.forEach(rw)},rT={some:0,all:1},rq=function(e,t){if("u"<typeof Proxy)return sf;let i=new Map,l=(i,l)=>sf(i,l,e,t);return new Proxy((e,t)=>l(e,t),{get:(s,o)=>"create"===o?l:(i.has(o)||i.set(o,sf(o,void 0,e,t)),i.get(o))})}({animation:{Feature:class extends sy{constructor(e){super(e),e.animationState||(e.animationState=function(e){let t=t=>Promise.all(t.map(({animation:t,options:i})=>(function(e,t,i={}){let l;if(e.notify("AnimationStart",t),Array.isArray(t))l=Promise.all(t.map(t=>o_(e,t,i)));else if("string"==typeof t)l=o_(e,t,i);else{let s="function"==typeof t?sx(e,t,i.custom):t;l=Promise.all(oR(e,s,i))}return l.then(()=>{e.notify("AnimationComplete",t)})})(e,t,i))),i=oH(),l=!0,s=t=>(i,l)=>{let s=sx(e,l,"exit"===t?e.presenceContext?.custom:void 0);if(s){let{transition:e,transitionEnd:t,...l}=s;i={...i,...l,...t}}return i};function o(o){let{props:n}=e,r=function e(t){if(!t)return;if(!t.isControllingVariants){let i=t.parent&&e(t.parent)||{};return void 0!==t.props.initial&&(i.initial=t.props.initial),i}let i={};for(let e=0;e<oO;e++){let l=ld[e],s=t.props[l];(lr(s)||!1===s)&&(i[l]=s)}return i}(e.parent)||{},a=[],d=new Set,c={},p=1/0;for(let t=0;t<oL;t++){var h,u;let m=oV[t],f=i[m],y=void 0!==n[m]?n[m]:r[m],x=lr(y),g=m===o?f.isActive:null;!1===g&&(p=t);let b=y===r[m]&&y!==n[m]&&x;if(b&&l&&e.manuallyAnimateOnMount&&(b=!1),f.protectedKeys={...c},!f.isActive&&null===g||!y&&!f.prevProp||ln(y)||"boolean"==typeof y)continue;let v=(h=f.prevProp,"string"==typeof(u=y)?u!==h:!!Array.isArray(u)&&!oD(u,h)),w=v||m===o&&f.isActive&&!b&&x||t>p&&x,j=!1,T=Array.isArray(y)?y:[y],q=T.reduce(s(m),{});!1===g&&(q={});let{prevResolvedValues:k={}}=f,N={...k,...q},S=t=>{w=!0,d.has(t)&&(j=!0,d.delete(t)),f.needsAnimating[t]=!0;let i=e.getValue(t);i&&(i.liveStyle=!1)};for(let e in N){let t=q[e],i=k[e];if(!c.hasOwnProperty(e))(sb(t)&&sb(i)?oD(t,i):t===i)?void 0!==t&&d.has(e)?S(e):f.protectedKeys[e]=!0:null!=t?S(e):d.add(e)}f.prevProp=y,f.prevResolvedValues=q,f.isActive&&(c={...c,...q}),l&&e.blockInitialAnimation&&(w=!1);let A=b&&v,C=!A||j;w&&C&&a.push(...T.map(t=>{let i={type:m};if("string"==typeof t&&l&&!A&&e.manuallyAnimateOnMount&&e.parent){let{parent:l}=e,s=sx(l,t);if(l.enteringChildren&&s){let{delayChildren:t}=s.transition||{};i.delay=oz(l.enteringChildren,e,t)}}return{animation:t,options:i}}))}if(d.size){let t={};if("boolean"!=typeof n.initial){let i=sx(e,Array.isArray(n.initial)?n.initial[0]:n.initial);i&&i.transition&&(t.transition=i.transition)}d.forEach(i=>{let l=e.getBaseTarget(i),s=e.getValue(i);s&&(s.liveStyle=!0),t[i]=l??null}),a.push({animation:t})}let m=!!a.length;return l&&(!1===n.initial||n.initial===n.animate)&&!e.manuallyAnimateOnMount&&(m=!1),l=!1,m?t(a):Promise.resolve()}return{animateChanges:o,setActive:function(t,l){if(i[t].isActive===l)return Promise.resolve();e.variantChildren?.forEach(e=>e.animationState?.setActive(t,l)),i[t].isActive=l;let s=o(t);for(let e in i)i[e].protectedKeys={};return s},setAnimateFunction:function(i){t=i(e)},getState:()=>i,reset:()=>{i=oH()}}}(e))}updateAnimationControlsSubscription(){let{animate:e}=this.node.getProps();ln(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends sy{constructor(){super(...arguments),this.id=oB++}update(){if(!this.node.presenceContext)return;let{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;let l=this.node.animationState.setActive("exit",!e);t&&!e&&l.then(()=>{t(this.id)})}mount(){let{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}},inView:{Feature:class extends sy{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var e;let t;this.unmount();let{viewport:i={}}=this.node.getProps(),{root:l,margin:s,amount:o="some",once:n}=i,r={root:l?l.current:void 0,rootMargin:s,threshold:"number"==typeof o?o:rT[o]},a=e=>{let{isIntersecting:t}=e;if(this.isInView===t||(this.isInView=t,n&&!t&&this.hasEnteredView))return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);let{onViewportEnter:i,onViewportLeave:l}=this.node.getProps(),s=t?i:l;s&&s(e)};return e=this.node.current,t=function({root:e,...t}){let i=e||document;rv.has(i)||rv.set(i,{});let l=rv.get(i),s=JSON.stringify(t);return l[s]||(l[s]=new IntersectionObserver(rj,{root:e,...t})),l[s]}(r),rb.set(e,a),t.observe(e),()=>{rb.delete(e),t.unobserve(e)}}mount(){this.startObserver()}update(){if("u"<typeof IntersectionObserver)return;let{props:e,prevProps:t}=this.node;["amount","margin","root"].some(function({viewport:e={}},{viewport:t={}}={}){return i=>e[i]!==t[i]}(e,t))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends sy{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[l,s,o]=rd(e,i),n=e=>{let l=e.currentTarget;if(!rx(e))return;rm.add(l);let o=t(l,e),n=(e,t)=>{window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",a),rm.has(l)&&rm.delete(l),rx(e)&&"function"==typeof o&&o(e,{success:t})},r=e=>{n(e,l===window||l===document||i.useGlobalTarget||ru(l,e.target))},a=e=>{n(e,!1)};window.addEventListener("pointerup",r,s),window.addEventListener("pointercancel",a,s)};return l.forEach(e=>{(i.useGlobalTarget?window:e).addEventListener("pointerdown",n,s),rh(e)&&(e.addEventListener("focus",e=>((e,t)=>{let i=e.currentTarget;if(!i)return;let l=rf(()=>{if(rm.has(i))return;ry(i,"down");let e=rf(()=>{ry(i,"up")});i.addEventListener("keyup",e,t),i.addEventListener("blur",()=>ry(i,"cancel"),t)});i.addEventListener("keydown",l,t),i.addEventListener("blur",()=>i.removeEventListener("keydown",l),t)})(e,s)),oW(e)||e.hasAttribute("tabindex")||(e.tabIndex=0))}),o}(e,(e,t)=>(rg(this.node,t,"Start"),(e,{success:t})=>rg(this.node,e,t?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends sy{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(t){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sT(oX(this.node.current,"focus",()=>this.onFocus()),oX(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}},hover:{Feature:class extends sy{mount(){let{current:e}=this.node;e&&(this.unmount=function(e,t,i={}){let[l,s,o]=rd(e,i),n=e=>{if(!rc(e))return;let{target:i}=e,l=t(i,e);if("function"!=typeof l||!i)return;let o=e=>{rc(e)&&(l(e),i.removeEventListener("pointerleave",o))};i.addEventListener("pointerleave",o,s)};return l.forEach(e=>{e.addEventListener("pointerenter",n,s)}),o}(e,(e,t)=>(rp(this.node,t,"Start"),e=>rp(this.node,e,"End"))))}unmount(){}}},pan:{Feature:class extends sy{constructor(){super(...arguments),this.removePointerDownListener=iV}onPointerDown(e){this.session=new o7(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:o3(this.node)})}createPanHandlers(){let{onPanSessionStart:e,onPanStart:t,onPan:i,onPanEnd:l}=this.node.getProps();return{onSessionStart:nd(e),onStart:nd(t),onMove:i,onEnd:(e,t)=>{delete this.session,l&&iB.postRender(()=>l(e,t))}}}mount(){this.removePointerDownListener=o2(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends sy{constructor(e){super(e),this.removeGroupControls=iV,this.removeListeners=iV,this.controls=new nr(e)}mount(){let{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||iV}update(){let{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:ra,MeasureLayout:nf},layout:{ProjectionNode:ra,MeasureLayout:nf}},(e,t)=>t.isSVG??lJ(e)?new lO(t):new lQ(t,{allowProjection:e!==x.Fragment}));var rk=x;function rN(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class rS extends rk.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=t.offsetParent,i=rh(e)&&e.offsetWidth||0,l=this.props.sizeRef.current;l.height=t.offsetHeight||0,l.width=t.offsetWidth||0,l.top=t.offsetTop,l.left=t.offsetLeft,l.right=i-l.width-l.left}return null}componentDidUpdate(){}render(){return this.props.children}}function rA({children:e,isPresent:t,anchorX:i,root:l}){let s=(0,rk.useId)(),o=(0,rk.useRef)(null),n=(0,rk.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:r}=(0,rk.useContext)(l1),a=function(...e){return x.useCallback(function(...e){return t=>{let i=!1,l=e.map(e=>{let l=rN(e,t);return i||"function"!=typeof l||(i=!0),l});if(i)return()=>{for(let t=0;t<l.length;t++){let i=l[t];"function"==typeof i?i():rN(e[t],null)}}}}(...e),e)}(o,e.props?.ref??e?.ref);return(0,rk.useInsertionEffect)(()=>{let{width:e,height:a,top:d,left:c,right:p}=n.current;if(t||!o.current||!e||!a)return;let h="left"===i?`left: ${c}`:`right: ${p}`;o.current.dataset.motionPopId=s;let u=document.createElement("style");r&&(u.nonce=r);let m=l??document.head;return m.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${a}px !important;
            ${h}px !important;
            top: ${d}px !important;
          }
        `),()=>{m.contains(u)&&m.removeChild(u)}},[t]),(0,y.jsx)(rS,{isPresent:t,childRef:o,sizeRef:n,children:rk.cloneElement(e,{ref:a})})}let rC=({children:e,initial:t,isPresent:i,onExitComplete:l,custom:s,presenceAffectsLayout:o,mode:n,anchorX:r,root:a})=>{let d=si(rP),c=(0,x.useId)(),p=!0,h=(0,x.useMemo)(()=>(p=!1,{id:c,initial:t,isPresent:i,custom:s,onExitComplete:e=>{for(let t of(d.set(e,!0),d.values()))if(!t)return;l&&l()},register:e=>(d.set(e,!1),()=>d.delete(e))}),[i,d,l]);return o&&p&&(h={...h}),(0,x.useMemo)(()=>{d.forEach((e,t)=>d.set(t,!1))},[i]),x.useEffect(()=>{i||d.size||!l||l()},[i]),"popLayout"===n&&(e=(0,y.jsx)(rA,{isPresent:i,anchorX:r,root:a,children:e})),(0,y.jsx)(st.Provider,{value:h,children:e})};function rP(){return new Map}let rE=e=>e.key||"";function rM(e){let t=[];return x.Children.forEach(e,e=>{(0,x.isValidElement)(e)&&t.push(e)}),t}let rI=({children:e,custom:t,initial:i=!0,onExitComplete:l,presenceAffectsLayout:s=!0,mode:o="sync",propagate:n=!1,anchorX:r="left",root:a})=>{let[d,c]=nh(n),p=(0,x.useMemo)(()=>rM(e),[e]),h=n&&!d?[]:p.map(rE),u=(0,x.useRef)(!0),m=(0,x.useRef)(p),f=si(()=>new Map),g=(0,x.useRef)(new Set),[b,v]=(0,x.useState)(p),[w,j]=(0,x.useState)(p);sm(()=>{u.current=!1,m.current=p;for(let e=0;e<w.length;e++){let t=rE(w[e]);h.includes(t)?(f.delete(t),g.current.delete(t)):!0!==f.get(t)&&f.set(t,!1)}},[w,h.length,h.join("-")]);let T=[];if(p!==b){let e=[...p];for(let t=0;t<w.length;t++){let i=w[t],l=rE(i);h.includes(l)||(e.splice(t,0,i),T.push(i))}return"wait"===o&&T.length&&(e=T),j(rM(e)),v(p),null}let{forceRender:q}=(0,x.useContext)(lZ);return(0,y.jsx)(y.Fragment,{children:w.map(e=>{let x=rE(e),b=(!n||!!d)&&(p===w||h.includes(x));return(0,y.jsx)(rC,{isPresent:b,initial:(!u.current||!!i)&&void 0,custom:t,presenceAffectsLayout:s,mode:o,root:a,onExitComplete:b?void 0:()=>{if(g.current.has(x)||(g.current.add(x),!f.has(x)))return;f.set(x,!0);let e=!0;f.forEach(t=>{t||(e=!1)}),e&&(q?.(),j(m.current),n&&c?.(),l&&l())},anchorX:r,children:e},x)})})};function rR({className:e,...t}){return(0,y.jsx)("div",{"data-slot":"card",className:(0,ed.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...t})}function rz({className:e,...t}){return(0,y.jsx)("div",{"data-slot":"card-header",className:(0,ed.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...t})}function r_({className:e,...t}){return(0,y.jsx)("div",{"data-slot":"card-title",className:(0,ed.cn)("leading-none font-semibold",e),...t})}function rO({className:e,...t}){return(0,y.jsx)("div",{"data-slot":"card-content",className:(0,ed.cn)("px-6",e),...t})}let rD={0:{title:"Подготовительный",subtitle:"Для самых маленьких",emoji:"🎈",color:"from-pink-500 to-rose-500",bgImage:"🧸🎪🎠🎨🎮🦋"},1:{title:"1 класс",subtitle:"Первые шаги",emoji:"🌟",color:"from-yellow-500 to-orange-500",bgImage:"📚✏️🎯🌈🎪🎨"},2:{title:"2 класс",subtitle:"Продолжаем учиться",emoji:"🌈",color:"from-blue-500 to-cyan-500",bgImage:"📖🔢🔬🌍🎵🏃"},3:{title:"3 класс",subtitle:"Углубляем знания",emoji:"🚀",color:"from-green-500 to-emerald-500",bgImage:"📐🔬🎨🥇🎯🎮"},4:{title:"4 класс",subtitle:"Переход в среднюю",emoji:"🎯",color:"from-purple-500 to-violet-500",bgImage:"🏛️📖🌍🔬🎵🏆"},5:{title:"5 класс",subtitle:"Новые предметы",emoji:"📚",color:"from-red-500 to-pink-500",bgImage:"🔬🧪📐🌍📖🎨"},6:{title:"6 класс",subtitle:"Расширяем горизонты",emoji:"🔬",color:"from-teal-500 to-cyan-500",bgImage:"⚗️🔭📊🌍💡🧩"},7:{title:"7 класс",subtitle:"Углублённое изучение",emoji:"🎨",color:"from-orange-500 to-red-500",bgImage:"📐🔬🎨🌍📖🏆"},8:{title:"8 класс",subtitle:"Подготовка к ОГЭ",emoji:"⚙️",color:"from-slate-500 to-zinc-500",bgImage:"📊🔬🎯📚💻🏆"},9:{title:"9 класс",subtitle:"ОГЭ и выбор пути",emoji:"🏆",color:"from-amber-500 to-yellow-500",bgImage:"🎓📋✅🎯📊🏆"},10:{title:"10 класс",subtitle:"Подготовка к ЕГЭ",emoji:"🎓",color:"from-indigo-500 to-violet-500",bgImage:"📖🎯📊🎓🧪💻"},11:{title:"11 класс",subtitle:"ЕГЭ и выпускной",emoji:"👑",color:"from-rose-500 to-pink-500",bgImage:"🎓👑📋🎯🏆🌟"}};function rV({grades:e,selectedGrade:t,onSelectGrade:i}){let[l,s]=(0,x.useState)(!1);return e.filter(e=>e.id<=4),e.filter(e=>e.id>4),(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsxs)(rq.div,{className:"text-center",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:[(0,y.jsxs)("h2",{className:"text-2xl font-bold text-white mb-1 flex items-center justify-center gap-2",children:[(0,y.jsx)(ek,{className:"w-6 h-6 text-yellow-400"}),"Выбери свой класс",(0,y.jsx)(ek,{className:"w-6 h-6 text-yellow-400"})]}),(0,y.jsx)("p",{className:"text-white/60",children:"Начни учиться прямо сейчас!"})]}),(0,y.jsx)("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3",children:e.map((e,l)=>{let s=rD[e.id]||rD[0],o=t===e.id;return(0,y.jsxs)(rq.button,{onClick:()=>i(e.id),className:`relative aspect-square rounded-2xl overflow-hidden transition-all ${o?"ring-4 ring-white/50 scale-105 z-10":"hover:scale-102"}`,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.03*l},whileHover:{scale:o?1.05:1.02},whileTap:{scale:.98},children:[(0,y.jsx)("div",{className:`absolute inset-0 bg-gradient-to-br ${s.color}`}),(0,y.jsx)("div",{className:"absolute inset-0 opacity-20 flex flex-wrap justify-center items-center gap-0.5 p-1",children:s.bgImage.split("").map((e,t)=>(0,y.jsx)(rq.span,{className:"text-xs",animate:{rotate:[0,10,-10,0],scale:[1,1.1,1]},transition:{duration:3,delay:.2*t,repeat:1/0},children:e},t))}),(0,y.jsxs)("div",{className:"relative h-full flex flex-col items-center justify-center p-2",children:[(0,y.jsx)(rq.span,{className:"text-3xl sm:text-4xl mb-1",animate:o?{scale:[1,1.2,1],rotate:[0,10,-10,0]}:{},transition:{duration:.5,repeat:o?1/0:0,repeatDelay:2},children:s.emoji}),(0,y.jsx)("span",{className:"text-xs sm:text-sm font-bold text-white text-center leading-tight",children:e.shortName}),(0,y.jsx)("span",{className:"hidden lg:block text-[10px] text-white/70 text-center mt-0.5 truncate w-full",children:s.subtitle})]}),o&&(0,y.jsx)(rq.div,{className:"absolute bottom-1 right-1 bg-white rounded-full p-0.5",initial:{scale:0},animate:{scale:1},transition:{type:"spring"},children:(0,y.jsx)(ey,{className:"w-3 h-3 text-yellow-500 fill-yellow-500"})}),o&&(0,y.jsx)(rq.div,{className:"absolute inset-0 bg-white/20",animate:{opacity:[.2,.4,.2]},transition:{duration:2,repeat:1/0}})]},e.id)})}),(0,y.jsx)(rI,{mode:"wait",children:void 0!==t&&(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},className:"text-center",children:(0,y.jsxs)(rR,{className:"inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-lg border-white/20",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)("span",{className:"text-3xl",children:rD[t]?.emoji}),(0,y.jsxs)("div",{className:"text-left",children:[(0,y.jsx)("p",{className:"font-bold text-white",children:rD[t]?.title}),(0,y.jsx)("p",{className:"text-sm text-white/60",children:rD[t]?.subtitle})]})]}),(0,y.jsx)("div",{className:"h-8 w-px bg-white/20"}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("p",{className:"text-lg font-bold text-white",children:e.find(e=>e.id===t)?.subjects.length||0}),(0,y.jsx)("p",{className:"text-xs text-white/60",children:"предметов"})]})]})},t)})]})}let rL=(0,ef.default)("gamepad-2",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]),rF=(0,ef.default)("chart-column",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),rH=[{id:"learn",icon:eg,label:"Уроки",emoji:"📚",color:"from-pink-500 to-rose-500"},{id:"games",icon:rL,label:"Игры",emoji:"🎮",color:"from-purple-500 to-violet-500"},{id:"progress",icon:rF,label:"Прогресс",emoji:"📊",color:"from-green-500 to-emerald-500"},{id:"achievements",icon:ev,label:"Награды",emoji:"🏆",color:"from-yellow-500 to-amber-500"},{id:"tools",icon:(0,ef.default)("settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),label:"Инструменты",emoji:"🛠️",color:"from-blue-500 to-cyan-500"}];function rB({activeTab:e,setActiveTab:t,selectedGrade:i=0}){let[l,s]=(0,x.useState)(!1),{userStats:o,getCurrentRank:n}=ti(),r=n(o.level),a=i<=2;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(rq.div,{className:"fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3",initial:{x:-100,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5,delay:.2},children:[(0,y.jsx)(rq.button,{onClick:()=>s(!l),className:`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${a?"bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500":"bg-gradient-to-br from-purple-600 to-blue-600"} ${l?"ring-4 ring-white/30":""}`,whileHover:{scale:1.1},whileTap:{scale:.95},children:(0,y.jsx)(rq.span,{className:"text-2xl",animate:{rotate:360*!!l},transition:{duration:.3},children:r.icon})}),(0,y.jsx)(rq.div,{className:"w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg",whileHover:{scale:1.1},children:(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("div",{className:"text-xs font-bold text-white",children:"LVL"}),(0,y.jsx)("div",{className:"text-sm font-bold text-white",children:o.level})]})}),(0,y.jsx)("div",{className:"w-10 h-0.5 bg-white/20 mx-auto"}),rH.map((i,l)=>{let s=e===i.id;return(0,y.jsxs)(rq.button,{onClick:()=>t(i.id),className:`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all ${s?`bg-gradient-to-br ${i.color} ring-4 ring-white/30`:"bg-white/10 backdrop-blur-lg hover:bg-white/20"}`,initial:{x:-50,opacity:0},animate:{x:0,opacity:1},transition:{delay:.1*(l+1)},whileHover:{scale:1.1,x:5},whileTap:{scale:.95},children:[a?(0,y.jsx)("span",{className:"text-xl",children:i.emoji}):(0,y.jsx)(i.icon,{className:`w-6 h-6 ${s?"text-white":"text-white/70"}`}),(0,y.jsx)(rq.div,{className:"absolute left-full ml-3 px-3 py-1.5 bg-white/10 backdrop-blur-lg rounded-lg whitespace-nowrap",initial:{opacity:0,x:-10},whileHover:{opacity:1,x:0},children:(0,y.jsx)("span",{className:"text-sm font-medium text-white",children:i.label})}),s&&(0,y.jsx)(rq.div,{className:"absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-6 bg-white rounded-full",layoutId:"activeIndicator"})]},i.id)})]}),(0,y.jsx)(rI,{children:l&&(0,y.jsx)(rq.div,{className:"fixed left-20 top-1/2 -translate-y-1/2 z-50",initial:{opacity:0,x:-20,scale:.9},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:-20,scale:.9},children:(0,y.jsxs)("div",{className:"bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl min-w-[200px]",children:[(0,y.jsxs)("div",{className:"text-center mb-4",children:[(0,y.jsx)(rq.div,{className:"text-4xl mb-2",animate:{scale:[1,1.1,1]},transition:{duration:2,repeat:1/0},children:r.icon}),(0,y.jsx)("h3",{className:"font-bold text-lg",children:o.rank}),(0,y.jsxs)("p",{className:"text-sm text-white/60",children:["Уровень ",o.level]})]}),(0,y.jsxs)("div",{className:"space-y-3",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between text-sm",children:[(0,y.jsx)("span",{className:"text-white/60",children:"Опыт"}),(0,y.jsxs)("span",{className:"font-bold text-yellow-400",children:[o.experience,"/100"]})]}),(0,y.jsx)("div",{className:"h-2 bg-white/10 rounded-full overflow-hidden",children:(0,y.jsx)(rq.div,{className:"h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full",initial:{width:0},animate:{width:`${o.experience}%`}})}),(0,y.jsxs)("div",{className:"grid grid-cols-3 gap-2 pt-2",children:[(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("div",{className:"text-xl font-bold text-yellow-400",children:o.totalPoints}),(0,y.jsx)("div",{className:"text-xs text-white/40",children:"Очков"})]}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("div",{className:"text-xl font-bold text-orange-400",children:o.streak}),(0,y.jsx)("div",{className:"text-xs text-white/40",children:"Серия"})]}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("div",{className:"text-xl font-bold text-green-400",children:o.topicsCompleted}),(0,y.jsx)("div",{className:"text-xs text-white/40",children:"Тем"})]})]})]}),(0,y.jsx)("button",{onClick:()=>s(!1),className:"mt-4 w-full py-2 text-sm text-white/60 hover:text-white transition-colors",children:"Закрыть"})]})})}),(0,y.jsx)(rq.div,{className:"fixed top-4 left-1/2 -translate-x-1/2 z-40",initial:{y:-50,opacity:0},animate:{y:0,opacity:1},transition:{duration:.5},children:(0,y.jsxs)("div",{className:"flex items-center gap-4 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20",children:[(0,y.jsx)(rq.span,{className:"text-2xl",animate:{rotate:[0,10,-10,0]},transition:{duration:2,repeat:1/0},children:"🎓"}),(0,y.jsx)("h1",{className:"font-bold text-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent",children:"ИНЕТШКОЛА"}),(0,y.jsxs)("div",{className:"flex items-center gap-3 ml-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(ey,{className:"w-4 h-4 text-yellow-400"}),(0,y.jsx)("span",{className:"font-bold",children:o.totalPoints})]}),(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(ek,{className:"w-4 h-4 text-purple-400"}),(0,y.jsxs)("span",{className:"font-bold",children:[o.streak," дней"]})]})]})]})})]})}var r$="Collapsible",[rU,rW]=(0,b.createContextScope)(r$),[rX,rY]=rU(r$),rK=x.forwardRef((e,t)=>{let{__scopeCollapsible:i,open:l,defaultOpen:s,disabled:o,onOpenChange:n,...r}=e,[a,d]=(0,A.useControllableState)({prop:l,defaultProp:s??!1,onChange:n,caller:r$});return(0,y.jsx)(rX,{scope:i,disabled:o,contentId:k(),open:a,onOpenToggle:x.useCallback(()=>d(e=>!e),[d]),children:(0,y.jsx)(N.Primitive.div,{"data-state":r1(a),"data-disabled":o?"":void 0,...r,ref:t})})});rK.displayName=r$;var rQ="CollapsibleTrigger",rG=x.forwardRef((e,t)=>{let{__scopeCollapsible:i,...l}=e,s=rY(rQ,i);return(0,y.jsx)(N.Primitive.button,{type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":r1(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled,...l,ref:t,onClick:(0,g.composeEventHandlers)(e.onClick,s.onOpenToggle)})});rG.displayName=rQ;var rJ="CollapsibleContent",rZ=x.forwardRef((e,t)=>{let{forceMount:i,...l}=e,s=rY(rJ,e.__scopeCollapsible);return(0,y.jsx)(X.Presence,{present:i||s.open,children:({present:e})=>(0,y.jsx)(r0,{...l,ref:t,present:e})})});rZ.displayName=rJ;var r0=x.forwardRef((e,t)=>{let{__scopeCollapsible:i,present:l,children:s,...o}=e,n=rY(rJ,i),[r,a]=x.useState(l),d=x.useRef(null),c=(0,w.useComposedRefs)(t,d),p=x.useRef(0),h=p.current,u=x.useRef(0),m=u.current,f=n.open||r,g=x.useRef(f),b=x.useRef(void 0);return x.useEffect(()=>{let e=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,j.useLayoutEffect)(()=>{let e=d.current;if(e){b.current=b.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();p.current=t.height,u.current=t.width,g.current||(e.style.transitionDuration=b.current.transitionDuration,e.style.animationName=b.current.animationName),a(l)}},[n.open,l]),(0,y.jsx)(N.Primitive.div,{"data-state":r1(n.open),"data-disabled":n.disabled?"":void 0,id:n.contentId,hidden:!f,...o,ref:c,style:{"--radix-collapsible-content-height":h?`${h}px`:void 0,"--radix-collapsible-content-width":m?`${m}px`:void 0,...e.style},children:f&&s})});function r1(e){return e?"open":"closed"}var r4="Accordion",r2=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[r3,r5,r6]=(0,v.createCollection)(r4),[r7,r8]=(0,b.createContextScope)(r4,[r6,rW]),r9=rW(),ae=x.default.forwardRef((e,t)=>{let{type:i,...l}=e;return(0,y.jsx)(r3.Provider,{scope:e.__scopeAccordion,children:"multiple"===i?(0,y.jsx)(an,{...l,ref:t}):(0,y.jsx)(ao,{...l,ref:t})})});ae.displayName=r4;var[at,ai]=r7(r4),[al,as]=r7(r4,{collapsible:!1}),ao=x.default.forwardRef((e,t)=>{let{value:i,defaultValue:l,onValueChange:s=()=>{},collapsible:o=!1,...n}=e,[r,a]=(0,A.useControllableState)({prop:i,defaultProp:l??"",onChange:s,caller:r4});return(0,y.jsx)(at,{scope:e.__scopeAccordion,value:x.default.useMemo(()=>r?[r]:[],[r]),onItemOpen:a,onItemClose:x.default.useCallback(()=>o&&a(""),[o,a]),children:(0,y.jsx)(al,{scope:e.__scopeAccordion,collapsible:o,children:(0,y.jsx)(ad,{...n,ref:t})})})}),an=x.default.forwardRef((e,t)=>{let{value:i,defaultValue:l,onValueChange:s=()=>{},...o}=e,[n,r]=(0,A.useControllableState)({prop:i,defaultProp:l??[],onChange:s,caller:r4}),a=x.default.useCallback(e=>r((t=[])=>[...t,e]),[r]),d=x.default.useCallback(e=>r((t=[])=>t.filter(t=>t!==e)),[r]);return(0,y.jsx)(at,{scope:e.__scopeAccordion,value:n,onItemOpen:a,onItemClose:d,children:(0,y.jsx)(al,{scope:e.__scopeAccordion,collapsible:!0,children:(0,y.jsx)(ad,{...o,ref:t})})})}),[ar,aa]=r7(r4),ad=x.default.forwardRef((e,t)=>{let{__scopeAccordion:i,disabled:l,dir:s,orientation:o="vertical",...n}=e,r=x.default.useRef(null),a=(0,w.useComposedRefs)(r,t),d=r5(i),c="ltr"===P(s),p=(0,g.composeEventHandlers)(e.onKeyDown,e=>{if(!r2.includes(e.key))return;let t=e.target,i=d().filter(e=>!e.ref.current?.disabled),l=i.findIndex(e=>e.ref.current===t),s=i.length;if(-1===l)return;e.preventDefault();let n=l,r=s-1,a=()=>{(n=l+1)>r&&(n=0)},p=()=>{(n=l-1)<0&&(n=r)};switch(e.key){case"Home":n=0;break;case"End":n=r;break;case"ArrowRight":"horizontal"===o&&(c?a():p());break;case"ArrowDown":"vertical"===o&&a();break;case"ArrowLeft":"horizontal"===o&&(c?p():a());break;case"ArrowUp":"vertical"===o&&p()}let h=n%s;i[h].ref.current?.focus()});return(0,y.jsx)(ar,{scope:i,disabled:l,direction:s,orientation:o,children:(0,y.jsx)(r3.Slot,{scope:i,children:(0,y.jsx)(N.Primitive.div,{...n,"data-orientation":o,ref:a,onKeyDown:l?void 0:p})})})}),ac="AccordionItem",[ap,ah]=r7(ac),au=x.default.forwardRef((e,t)=>{let{__scopeAccordion:i,value:l,...s}=e,o=aa(ac,i),n=ai(ac,i),r=r9(i),a=k(),d=l&&n.value.includes(l)||!1,c=o.disabled||e.disabled;return(0,y.jsx)(ap,{scope:i,open:d,disabled:c,triggerId:a,children:(0,y.jsx)(rK,{"data-orientation":o.orientation,"data-state":av(d),...r,...s,ref:t,disabled:c,open:d,onOpenChange:e=>{e?n.onItemOpen(l):n.onItemClose(l)}})})});au.displayName=ac;var am="AccordionHeader",af=x.default.forwardRef((e,t)=>{let{__scopeAccordion:i,...l}=e,s=aa(r4,i),o=ah(am,i);return(0,y.jsx)(N.Primitive.h3,{"data-orientation":s.orientation,"data-state":av(o.open),"data-disabled":o.disabled?"":void 0,...l,ref:t})});af.displayName=am;var ay="AccordionTrigger",ax=x.default.forwardRef((e,t)=>{let{__scopeAccordion:i,...l}=e,s=aa(r4,i),o=ah(ay,i),n=as(ay,i),r=r9(i);return(0,y.jsx)(r3.ItemSlot,{scope:i,children:(0,y.jsx)(rG,{"aria-disabled":o.open&&!n.collapsible||void 0,"data-orientation":s.orientation,id:o.triggerId,...r,...l,ref:t})})});ax.displayName=ay;var ag="AccordionContent",ab=x.default.forwardRef((e,t)=>{let{__scopeAccordion:i,...l}=e,s=aa(r4,i),o=ah(ag,i),n=r9(i);return(0,y.jsx)(rZ,{role:"region","aria-labelledby":o.triggerId,"data-orientation":s.orientation,...n,...l,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});function av(e){return e?"open":"closed"}ab.displayName=ag;let aw=(0,ef.default)("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);function aj({...e}){return(0,y.jsx)(ae,{"data-slot":"accordion",...e})}function aT({className:e,...t}){return(0,y.jsx)(au,{"data-slot":"accordion-item",className:(0,ed.cn)("border-b last:border-b-0",e),...t})}function aq({className:e,children:t,...i}){return(0,y.jsx)(af,{className:"flex",children:(0,y.jsxs)(ax,{"data-slot":"accordion-trigger",className:(0,ed.cn)("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",e),...i,children:[t,(0,y.jsx)(aw,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function ak({className:e,children:t,...i}){return(0,y.jsx)(ab,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...i,children:(0,y.jsx)("div",{className:(0,ed.cn)("pt-0 pb-4",e),children:t})})}let aN=(0,ef.default)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),aS=(0,ef.default)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),aA=(0,ef.default)("clock",[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),aC=(0,ef.default)("layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);function aP(e){let t=[];return e.sections&&e.sections.forEach(e=>{t.push(...e.topics)}),t}let aE={math:"🧮",russian:"📖",reading:"📚",world:"🌿",science:"🔬",english:"🇬🇧",art:"🎨",music:"🎵",pe:"⚽",default:"📚"},aM=e=>{for(let[t,i]of Object.entries(aE))if(e.toLowerCase().includes(t))return i;return aE.default};function aI({topic:e,isCompleted:t,onOpenTopic:i}){return(0,y.jsx)(rq.button,{onClick:i,className:`p-3 rounded-xl text-left transition-all ${t?"bg-green-500/20 border border-green-500/30":"bg-white/5 border border-white/10 hover:bg-white/10"}`,whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[t?(0,y.jsx)(rq.span,{initial:{scale:0},animate:{scale:1},className:"text-lg",children:"✅"}):(0,y.jsx)("span",{className:"text-lg",children:"📌"}),(0,y.jsx)("span",{className:"font-medium text-sm",children:e.title})]})})}function aR({section:e,completedTopics:t,onOpenTopic:i}){let[l,s]=(0,x.useState)(!1),o=e.topics.filter(e=>t.includes(e.id)).length,n=e.topics.length>0?o/e.topics.length*100:0;return(0,y.jsxs)(rR,{className:"bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl overflow-hidden",children:[(0,y.jsx)("div",{className:"p-4 cursor-pointer hover:bg-white/5 transition-colors",onClick:()=>s(!l),children:(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)(rq.div,{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center",animate:{rotate:360*!!l},transition:{duration:.3},children:(0,y.jsx)(aC,{className:"w-5 h-5 text-white"})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"text-lg font-bold text-white",children:e.title}),(0,y.jsxs)("p",{className:"text-sm text-white/60",children:[o,"/",e.topics.length," тем"]})]})]}),(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)("div",{className:"w-24 h-2 bg-white/20 rounded-full overflow-hidden",children:(0,y.jsx)(rq.div,{className:"h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full",initial:{width:0},animate:{width:`${n}%`}})}),(0,y.jsx)(rq.div,{animate:{rotate:180*!!l},transition:{duration:.2},children:(0,y.jsx)(aw,{className:"w-5 h-5 text-white/60"})})]})]})}),(0,y.jsx)(rI,{children:l&&(0,y.jsx)(rq.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"overflow-hidden",children:(0,y.jsx)("div",{className:"p-4 pt-0 space-y-3",children:e.topics.map(e=>(0,y.jsx)(aI,{topic:e,isCompleted:t.includes(e.id),onOpenTopic:()=>i(e)},e.id))})})})]})}function az({subject:e,completedTopics:t,onOpenTopic:i,onStartQuiz:l}){let s=!!e.sections&&e.sections.length>0,o=aP(e),n=e.sections||[],r=o.filter(e=>t.includes(e.id)).length,a=o.length>0?r/o.length*100:0,d=aM(e.id);return(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5},transition:{duration:.3},children:(0,y.jsxs)(rR,{className:"bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden rounded-3xl",children:[(0,y.jsxs)("div",{className:`bg-gradient-to-r ${e.gradient} p-4 sm:p-6`,children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)(rq.span,{className:"text-4xl sm:text-5xl",animate:{rotate:[0,10,-10,0]},transition:{duration:2,repeat:1/0,repeatDelay:3},children:d}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:e.title}),(0,y.jsxs)("p",{className:"text-sm text-white/80",children:[r," из ",o.length," тем"]})]})]}),e.quiz&&e.quiz.length>0&&(0,y.jsxs)(tS,{onClick:l,className:"bg-white/20 hover:bg-white/30 text-white rounded-2xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-bold",children:[(0,y.jsx)(eT,{className:"w-4 h-4 sm:w-5 sm:h-5 mr-2"}),"Тест!"]})]}),(0,y.jsxs)("div",{className:"mt-4",children:[(0,y.jsx)("div",{className:"bg-white/30 rounded-full h-3 overflow-hidden",children:(0,y.jsx)(rq.div,{className:"bg-white h-full rounded-full",initial:{width:0},animate:{width:`${a}%`},transition:{duration:.5}})}),(0,y.jsx)("div",{className:"flex justify-between mt-2",children:[void 0,void 0,void 0,void 0,void 0].map((e,t)=>(0,y.jsx)(ey,{className:`w-5 h-5 sm:w-6 sm:h-6 transition-all ${t<Math.floor(a/20)?"text-yellow-300 fill-yellow-300":"text-white/30"}`},t))})]})]}),(0,y.jsx)(rO,{className:"p-4 sm:p-6",children:s&&n.length>0?(0,y.jsx)("div",{className:"space-y-4",children:n.map(e=>(0,y.jsx)(aR,{section:e,completedTopics:t,onOpenTopic:i},e.id))}):(0,y.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4",children:o.map(e=>(0,y.jsx)(aI,{topic:e,isCompleted:t.includes(e.id),onOpenTopic:()=>i(e)},e.id))})})]})})}function a_({subject:e,completedTopics:t,onOpenTopic:i,onStartQuiz:l}){let s=aP(e),o=s.filter(e=>t.includes(e.id)).length,n=s.length>0?o/s.length*100:0,r=aM(e.id);return(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},whileHover:{y:-5},children:(0,y.jsxs)(rR,{className:"bg-white/5 border-white/10 backdrop-blur overflow-hidden rounded-2xl",children:[(0,y.jsxs)("div",{className:"p-4 border-b border-white/10",children:[(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)(rq.span,{className:"text-3xl",whileHover:{scale:1.2,rotate:10},children:r}),(0,y.jsxs)("div",{className:"flex-1",children:[(0,y.jsx)("h3",{className:"font-bold text-lg",children:e.title}),(0,y.jsx)("p",{className:"text-sm text-gray-400",children:e.description})]}),(0,y.jsxs)("div",{className:"text-right",children:[(0,y.jsxs)("div",{className:"text-2xl font-bold",children:[o,"/",s.length]}),(0,y.jsx)("p",{className:"text-xs text-gray-400",children:"тем"})]})]}),(0,y.jsx)(tq,{value:n,className:"h-2 mt-3"})]}),e.quiz&&e.quiz.length>0&&(0,y.jsx)("div",{className:"p-4 border-b border-white/10",children:(0,y.jsxs)(tS,{variant:"outline",size:"sm",className:"w-full border-purple-500/30 hover:bg-purple-500/20",onClick:l,children:[(0,y.jsx)(eT,{className:"w-4 h-4 mr-2 text-yellow-400"}),"Пройти тест (",e.quiz.length," вопросов)"]})}),(0,y.jsx)(rO,{className:"p-4",children:(0,y.jsx)(aj,{type:"single",collapsible:!0,className:"w-full",children:(0,y.jsxs)(aT,{value:"topics",className:"border-white/10",children:[(0,y.jsx)(aq,{className:"text-sm hover:no-underline py-2",children:(0,y.jsxs)("span",{className:"flex items-center gap-2",children:[(0,y.jsx)(aS,{className:"w-4 h-4"}),"Темы (",s.length,")"]})}),(0,y.jsx)(ak,{children:(0,y.jsx)("div",{className:"space-y-2 pt-2",children:s.map(e=>{let l=t.includes(e.id);return(0,y.jsxs)("button",{onClick:()=>i(e),className:`w-full p-3 rounded-lg border text-left transition-all ${l?"bg-green-500/10 border-green-500/30":"bg-white/5 border-white/10 hover:bg-white/10"}`,children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[l?(0,y.jsx)(aN,{className:"w-4 h-4 text-green-400"}):(0,y.jsx)("div",{className:"w-4 h-4 rounded-full border-2 border-gray-500"}),(0,y.jsx)("span",{className:"font-medium text-sm",children:e.title})]}),e.estimatedTime&&(0,y.jsxs)("span",{className:"text-xs text-gray-500 flex items-center gap-1",children:[(0,y.jsx)(aA,{className:"w-3 h-3"}),e.estimatedTime," мин"]})]}),(0,y.jsx)("p",{className:"text-xs text-gray-400 mt-1 ml-6",children:e.description})]},e.id)})})})]})})})]})})}function aO({subjects:e,completedTopics:t,onOpenTopic:i,onStartQuiz:l,gradeId:s=0}){return s<=2?(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsxs)(rq.div,{className:"flex items-center gap-2",initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:[(0,y.jsx)(ek,{className:"w-6 h-6 text-yellow-400"}),(0,y.jsx)("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Выбери урок!"})]}),(0,y.jsx)("div",{className:"space-y-6",children:e.map(e=>(0,y.jsx)(az,{subject:e,completedTopics:t,onOpenTopic:i,onStartQuiz:()=>l(e)},e.id))})]}):(0,y.jsx)("div",{className:"grid gap-4 md:grid-cols-2",children:e.map(e=>(0,y.jsx)(a_,{subject:e,completedTopics:t,onOpenTopic:i,onStartQuiz:()=>l(e)},e.id))})}e.i(57688);let aD=(0,tk.cva)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function aV({className:e,variant:t,asChild:i=!1,...l}){return(0,y.jsx)(i?tr:"span",{"data-slot":"badge",className:(0,ed.cn)(aD({variant:t}),e),...l})}function aL(e){let t=x.useRef({value:e,previous:e});return x.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function aF(e){let[t,i]=x.useState(void 0);return(0,j.useLayoutEffect)(()=>{if(e){i({width:e.offsetWidth,height:e.offsetHeight});let t=new ResizeObserver(t=>{let l,s;if(!Array.isArray(t)||!t.length)return;let o=t[0];if("borderBoxSize"in o){let e=o.borderBoxSize,t=Array.isArray(e)?e[0]:e;l=t.inlineSize,s=t.blockSize}else l=e.offsetWidth,s=e.offsetHeight;i({width:l,height:s})});return t.observe(e,{box:"border-box"}),()=>t.unobserve(e)}i(void 0)},[e]),t}var aH="Checkbox",[aB,a$]=(0,b.createContextScope)(aH),[aU,aW]=aB(aH);function aX(e){let{__scopeCheckbox:t,checked:i,children:l,defaultChecked:s,disabled:o,form:n,name:r,onCheckedChange:a,required:d,value:c="on",internal_do_not_use_render:p}=e,[h,u]=(0,A.useControllableState)({prop:i,defaultProp:s??!1,onChange:a,caller:aH}),[m,f]=x.useState(null),[g,b]=x.useState(null),v=x.useRef(!1),w=!m||!!n||!!m.closest("form"),j={checked:h,disabled:o,setChecked:u,control:m,setControl:f,name:r,form:n,value:c,hasConsumerStoppedPropagationRef:v,required:d,defaultChecked:!a1(s)&&s,isFormControl:w,bubbleInput:g,setBubbleInput:b};return(0,y.jsx)(aU,{scope:t,...j,children:"function"==typeof p?p(j):l})}var aY="CheckboxTrigger",aK=x.forwardRef(({__scopeCheckbox:e,onKeyDown:t,onClick:i,...l},s)=>{let{control:o,value:n,disabled:r,checked:a,required:d,setControl:c,setChecked:p,hasConsumerStoppedPropagationRef:h,isFormControl:u,bubbleInput:m}=aW(aY,e),f=(0,w.useComposedRefs)(s,c),b=x.useRef(a);return x.useEffect(()=>{let e=o?.form;if(e){let t=()=>p(b.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[o,p]),(0,y.jsx)(N.Primitive.button,{type:"button",role:"checkbox","aria-checked":a1(a)?"mixed":a,"aria-required":d,"data-state":a4(a),"data-disabled":r?"":void 0,disabled:r,value:n,...l,ref:f,onKeyDown:(0,g.composeEventHandlers)(t,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,g.composeEventHandlers)(i,e=>{p(e=>!!a1(e)||!e),m&&u&&(h.current=e.isPropagationStopped(),h.current||e.stopPropagation())})})});aK.displayName=aY;var aQ=x.forwardRef((e,t)=>{let{__scopeCheckbox:i,name:l,checked:s,defaultChecked:o,required:n,disabled:r,value:a,onCheckedChange:d,form:c,...p}=e;return(0,y.jsx)(aX,{__scopeCheckbox:i,checked:s,defaultChecked:o,disabled:r,required:n,onCheckedChange:d,name:l,form:c,value:a,internal_do_not_use_render:({isFormControl:e})=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(aK,{...p,ref:t,__scopeCheckbox:i}),e&&(0,y.jsx)(a0,{__scopeCheckbox:i})]})})});aQ.displayName=aH;var aG="CheckboxIndicator",aJ=x.forwardRef((e,t)=>{let{__scopeCheckbox:i,forceMount:l,...s}=e,o=aW(aG,i);return(0,y.jsx)(X.Presence,{present:l||a1(o.checked)||!0===o.checked,children:(0,y.jsx)(N.Primitive.span,{"data-state":a4(o.checked),"data-disabled":o.disabled?"":void 0,...s,ref:t,style:{pointerEvents:"none",...e.style}})})});aJ.displayName=aG;var aZ="CheckboxBubbleInput",a0=x.forwardRef(({__scopeCheckbox:e,...t},i)=>{let{control:l,hasConsumerStoppedPropagationRef:s,checked:o,defaultChecked:n,required:r,disabled:a,name:d,value:c,form:p,bubbleInput:h,setBubbleInput:u}=aW(aZ,e),m=(0,w.useComposedRefs)(i,u),f=aL(o),g=aF(l);x.useEffect(()=>{if(!h)return;let e=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set,t=!s.current;if(f!==o&&e){let i=new Event("click",{bubbles:t});h.indeterminate=a1(o),e.call(h,!a1(o)&&o),h.dispatchEvent(i)}},[h,f,o,s]);let b=x.useRef(!a1(o)&&o);return(0,y.jsx)(N.Primitive.input,{type:"checkbox","aria-hidden":!0,defaultChecked:n??b.current,required:r,disabled:a,name:d,value:c,form:p,...t,tabIndex:-1,ref:m,style:{...t.style,...g,position:"absolute",pointerEvents:"none",opacity:0,margin:0,transform:"translateX(-100%)"}})});function a1(e){return"indeterminate"===e}function a4(e){return a1(e)?"indeterminate":e?"checked":"unchecked"}a0.displayName=aZ;let a2=(0,ef.default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);function a3({className:e,...t}){return(0,y.jsx)(aQ,{"data-slot":"checkbox",className:(0,ed.cn)("peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...t,children:(0,y.jsx)(aJ,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:(0,y.jsx)(a2,{className:"size-3.5"})})})}let a5=(0,ef.default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),a6=(0,ef.default)("grid-3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]),a7=(0,ef.default)("list",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]),a8=(0,ef.default)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]),a9=[{id:"first-login",title:"Первые шаги",description:"Добро пожаловать в ИНЕТШКОЛА!",icon:"👋",category:"start",xp:10,rarity:"common",requirement:"Войти в приложение"},{id:"first-lesson",title:"Ученик",description:"Завершить первый урок",icon:"📖",category:"start",xp:25,rarity:"common",requirement:"Завершить 1 урок"},{id:"first-quiz",title:"Испытатель",description:"Пройти первый тест",icon:"✅",category:"start",xp:30,rarity:"common",requirement:"Пройти 1 тест"},{id:"lessons-10",title:"Любознательный",description:"Завершить 10 уроков",icon:"📚",category:"learning",xp:50,rarity:"common",requirement:"Завершить 10 уроков"},{id:"lessons-50",title:"Эрудит",description:"Завершить 50 уроков",icon:"🎓",category:"learning",xp:150,rarity:"rare",requirement:"Завершить 50 уроков"},{id:"lessons-100",title:"Знаток",description:"Завершить 100 уроков",icon:"🏆",category:"learning",xp:300,rarity:"epic",requirement:"Завершить 100 уроков"},{id:"perfect-quiz",title:"Идеальный ответ",description:"Пройти тест без ошибок",icon:"⭐",category:"learning",xp:50,rarity:"rare",requirement:"Пройти тест на 100%"},{id:"perfect-streak",title:"Безупречность",description:"Пройти 5 тестов подряд без ошибок",icon:"💎",category:"learning",xp:200,rarity:"epic",requirement:"5 тестов на 100% подряд"},{id:"streak-3",title:"Начинающий",description:"Учиться 3 дня подряд",icon:"🔥",category:"streak",xp:30,rarity:"common",requirement:"Серия 3 дня"},{id:"streak-7",title:"Упорный",description:"Учиться 7 дней подряд",icon:"🌟",category:"streak",xp:75,rarity:"rare",requirement:"Серия 7 дней"},{id:"streak-30",title:"Настойчивый",description:"Учиться 30 дней подряд",icon:"👑",category:"streak",xp:500,rarity:"legendary",requirement:"Серия 30 дней"},{id:"level-5",title:"Развивающийся",description:"Достичь 5 уровня",icon:"📈",category:"progress",xp:50,rarity:"common",requirement:"Достичь 5 уровня"},{id:"level-10",title:"Продвинутый",description:"Достичь 10 уровня",icon:"🚀",category:"progress",xp:200,rarity:"rare",requirement:"Достичь 10 уровня"},{id:"level-25",title:"Эксперт",description:"Достичь 25 уровня",icon:"💫",category:"progress",xp:500,rarity:"epic",requirement:"Достичь 25 уровня"},{id:"xp-1000",title:"Коллекционер XP",description:"Набрать 1000 XP",icon:"💰",category:"progress",xp:100,rarity:"common",requirement:"Набрать 1000 XP"},{id:"first-game",title:"Игрок",description:"Сыграть в первую мини-игру",icon:"🎮",category:"games",xp:25,rarity:"common",requirement:"Сыграть в 1 игру"},{id:"memory-master",title:"Мастер памяти",description:"Выиграть в Memory Game за 10 ходов",icon:"🧠",category:"games",xp:100,rarity:"rare",requirement:"Memory за ≤10 ходов"},{id:"sprint-champion",title:"Спринтер",description:"Набрать 100+ очков в спринте",icon:"⚡",category:"games",xp:75,rarity:"rare",requirement:"100+ очков в спринте"},{id:"word-master",title:"Словесный гений",description:"Разгадать 20 слов подряд",icon:"📝",category:"games",xp:150,rarity:"epic",requirement:"20 слов подряд"},{id:"night-owl",title:"Ночная сова",description:"Учиться после полуночи",icon:"🦉",category:"special",xp:50,rarity:"rare",requirement:"Учиться после 00:00"},{id:"early-bird",title:"Ранняя пташка",description:"Учиться до 7 утра",icon:"🐦",category:"special",xp:50,rarity:"rare",requirement:"Учиться до 7:00"},{id:"weekend-warrior",title:"Воин выходного дня",description:"Учиться в выходные 5 дней подряд",icon:"📅",category:"special",xp:100,rarity:"rare",requirement:"5 выходных подряд"},{id:"math-enthusiast",title:"Математик",description:"Завершить 20 уроков математики",icon:"🔢",category:"subjects",xp:100,rarity:"rare",requirement:"20 уроков математики"},{id:"russian-master",title:"Грамотей",description:"Завершить 20 уроков русского языка",icon:"📝",category:"subjects",xp:100,rarity:"rare",requirement:"20 уроков русского"},{id:"english-speaker",title:"English Speaker",description:"Завершить 20 уроков английского",icon:"🇬🇧",category:"subjects",xp:100,rarity:"rare",requirement:"20 уроков английского"},{id:"all-subjects",title:"Универсал",description:"Завершить уроки по всем предметам",icon:"🌟",category:"subjects",xp:300,rarity:"legendary",requirement:"Уроки по всем предметам"}],de=[{id:"all",label:"Все",icon:ek},{id:"start",label:"Начало пути",icon:ey},{id:"learning",label:"Успехи в учёбе",icon:eg},{id:"streak",label:"Серии",icon:ej},{id:"progress",label:"Прогресс",icon:ex},{id:"games",label:"Игры",icon:rL},{id:"subjects",label:"Предметы",icon:ev},{id:"special",label:"Особые",icon:eq}],dt={common:{bg:"bg-slate-500/20",border:"border-slate-500/30",text:"text-slate-300",badge:"bg-slate-500/30"},rare:{bg:"bg-blue-500/20",border:"border-blue-500/30",text:"text-blue-300",badge:"bg-blue-500/30"},epic:{bg:"bg-purple-500/20",border:"border-purple-500/30",text:"text-purple-300",badge:"bg-purple-500/30"},legendary:{bg:"bg-yellow-500/20",border:"border-yellow-500/30",text:"text-yellow-300",badge:"bg-yellow-500/30"}},di={common:"Обычное",rare:"Редкое",epic:"Эпическое",legendary:"Легендарное"};function dl({achievement:e,isUnlocked:t,progress:i,onClick:l}){let s=dt[e.rarity],[o,n]=(0,x.useState)(!1);return(0,y.jsxs)("div",{className:`
        relative p-4 rounded-xl border-2 transition-all cursor-pointer
        ${t?`${s.bg} ${s.border}`:"bg-slate-800/30 border-slate-700/50"}
        hover:scale-105 hover:shadow-lg
      `,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:l,children:[(0,y.jsx)("div",{className:"text-center mb-2",children:(0,y.jsx)("div",{className:`
          w-16 h-16 mx-auto rounded-full flex items-center justify-center text-3xl
          ${t?"bg-gradient-to-br from-white/10 to-transparent":"bg-slate-700/50 grayscale opacity-50"}
        `,children:t?e.icon:(0,y.jsx)(a5,{className:"w-6 h-6 text-slate-500"})})}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("p",{className:`font-semibold text-sm mb-1 ${t?s.text:"text-slate-500"}`,children:e.title}),(0,y.jsx)("p",{className:"text-xs text-slate-400 line-clamp-2",children:e.description})]}),t&&(0,y.jsx)("div",{className:"mt-2 text-center",children:(0,y.jsxs)(aV,{className:`${s.badge} text-xs`,children:["+",e.xp," XP"]})}),!t&&void 0!==i&&i>0&&(0,y.jsxs)("div",{className:"mt-2",children:[(0,y.jsx)(tq,{value:i,className:"h-1"}),(0,y.jsxs)("p",{className:"text-xs text-slate-500 text-center mt-1",children:[Math.round(i),"%"]})]}),o&&(0,y.jsxs)("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-10",children:[(0,y.jsx)("p",{className:"text-xs text-slate-300 text-center mb-1",children:e.requirement}),(0,y.jsx)(aV,{className:`${s.badge} text-xs w-full justify-center`,children:di[e.rarity]})]}),t&&"legendary"===e.rarity&&(0,y.jsx)("div",{className:"absolute inset-0 rounded-xl overflow-hidden pointer-events-none",children:(0,y.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"})})]})}function ds(){let{achievements:e,userStats:t}=ti(),[i,l]=(0,x.useState)("all"),[s,o]=(0,x.useState)("grid"),[n,r]=(0,x.useState)("recent"),[a,d]=(0,x.useState)(null),c=(0,x.useMemo)(()=>{let t=a9;"all"!==i&&(t=t.filter(e=>e.category===i));let l=e.map(e=>e.id);switch(n){case"recent":t=[...t].sort((e,t)=>{let i=l.includes(e.id),s=l.includes(t.id);return i&&!s?-1:!i&&s?1:0});break;case"rarity":let s={legendary:0,epic:1,rare:2,common:3};t=[...t].sort((e,t)=>s[e.rarity]-s[t.rarity]);break;case"name":t=[...t].sort((e,t)=>e.title.localeCompare(t.title,"ru"))}return t},[i,n,e]),p=(0,x.useMemo)(()=>{let t=e.length,i=a9.length,l=e.reduce((e,t)=>{let i=a9.find(e=>e.id===t.id);return e+(i?.xp||0)},0),s={common:{unlocked:0,total:0},rare:{unlocked:0,total:0},epic:{unlocked:0,total:0},legendary:{unlocked:0,total:0}};return a9.forEach(t=>{s[t.rarity].total++,e.some(e=>e.id===t.id)&&s[t.rarity].unlocked++}),{unlocked:t,total:i,totalXP:l,byRarity:s}},[e]);return(0,y.jsx)(rR,{className:"bg-slate-800/50 border-slate-700",children:(0,y.jsxs)(rO,{className:"py-4",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center",children:(0,y.jsx)(ev,{className:"w-5 h-5 text-white"})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"font-semibold",children:"Галерея достижений"}),(0,y.jsxs)("p",{className:"text-xs text-slate-400",children:[p.unlocked,"/",p.total," открыто"]})]})]}),(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(tS,{variant:"grid"===s?"default":"ghost",size:"sm",onClick:()=>o("grid"),className:"grid"===s?"bg-blue-600":"",children:(0,y.jsx)(a6,{className:"w-4 h-4"})}),(0,y.jsx)(tS,{variant:"list"===s?"default":"ghost",size:"sm",onClick:()=>o("list"),className:"list"===s?"bg-blue-600":"",children:(0,y.jsx)(a7,{className:"w-4 h-4"})})]})]}),(0,y.jsx)("div",{className:"grid grid-cols-4 gap-2 mb-4",children:["common","rare","epic","legendary"].map(e=>{let t=dt[e],i=p.byRarity[e];return(0,y.jsxs)("div",{className:`p-2 rounded-lg ${t.bg} ${t.border} border text-center`,children:[(0,y.jsxs)("p",{className:`text-lg font-bold ${t.text}`,children:[i.unlocked,"/",i.total]}),(0,y.jsx)("p",{className:"text-xs text-slate-400",children:di[e]})]},e)})}),(0,y.jsx)("div",{className:"flex flex-wrap gap-1 mb-4",children:de.map(e=>{let t=e.icon;return(0,y.jsxs)(tS,{variant:i===e.id?"default":"ghost",size:"sm",onClick:()=>l(e.id),className:i===e.id?"bg-blue-600":"",children:[(0,y.jsx)(t,{className:"w-3 h-3 mr-1"}),e.label]},e.id)})}),(0,y.jsxs)("div",{className:"flex items-center gap-2 mb-4 text-sm",children:[(0,y.jsx)("span",{className:"text-slate-400",children:"Сортировка:"}),(0,y.jsx)(tS,{variant:"recent"===n?"outline":"ghost",size:"sm",onClick:()=>r("recent"),children:"Недавние"}),(0,y.jsx)(tS,{variant:"rarity"===n?"outline":"ghost",size:"sm",onClick:()=>r("rarity"),children:"По редкости"}),(0,y.jsx)(tS,{variant:"name"===n?"outline":"ghost",size:"sm",onClick:()=>r("name"),children:"По имени"})]}),(0,y.jsx)("div",{className:"grid"===s?"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3":"space-y-2",children:c.map(t=>{let i=e.some(e=>e.id===t.id);return"list"===s?(0,y.jsxs)("div",{className:`
                    flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer
                    ${i?`${dt[t.rarity].bg} ${dt[t.rarity].border}`:"bg-slate-800/30 border-slate-700/50"}
                  `,onClick:()=>d(a===t.id?null:t.id),children:[(0,y.jsx)("div",{className:`
                    w-10 h-10 rounded-full flex items-center justify-center text-xl
                    ${i?"":"grayscale opacity-50"}
                  `,children:i?t.icon:"🔒"}),(0,y.jsxs)("div",{className:"flex-1",children:[(0,y.jsx)("p",{className:`font-medium text-sm ${i?dt[t.rarity].text:"text-slate-500"}`,children:t.title}),(0,y.jsx)("p",{className:"text-xs text-slate-400",children:t.requirement})]}),(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsxs)(aV,{className:`${dt[t.rarity].badge} text-xs`,children:["+",t.xp," XP"]}),a===t.id?(0,y.jsx)(a8,{className:"w-4 h-4 text-slate-400"}):(0,y.jsx)(aw,{className:"w-4 h-4 text-slate-400"})]})]},t.id):(0,y.jsx)(dl,{achievement:t,isUnlocked:i,progress:void 0},t.id)})}),(0,y.jsxs)("div",{className:"mt-4 pt-4 border-t border-slate-700",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between text-sm mb-2",children:[(0,y.jsx)("span",{className:"text-slate-400",children:"Общий прогресс"}),(0,y.jsxs)("span",{className:"text-yellow-400",children:["+",p.totalXP," XP получено"]})]}),(0,y.jsx)(tq,{value:p.unlocked/p.total*100,className:"h-2"})]})]})})}let dn={common:"from-gray-500/20 to-gray-600/20 border-gray-500/30",rare:"from-blue-500/20 to-blue-600/20 border-blue-500/30",epic:"from-purple-500/20 to-purple-600/20 border-purple-500/30",legendary:"from-yellow-500/20 to-orange-600/20 border-yellow-500/30"},dr={common:"bg-gray-500/20 text-gray-300",rare:"bg-blue-500/20 text-blue-300",epic:"bg-purple-500/20 text-purple-300",legendary:"bg-yellow-500/20 text-yellow-300"};function da(){let{achievements:e}=ti(),t=e.filter(e=>e.unlocked).length;return(0,y.jsxs)("div",{className:"space-y-4",children:[(0,y.jsx)(ds,{}),(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)("h2",{className:"text-lg font-semibold",children:"Мои достижения"}),(0,y.jsxs)(aV,{variant:"outline",children:[t,"/",e.length]})]}),(0,y.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:e.map(e=>(0,y.jsx)(rR,{className:`bg-gradient-to-br ${dn[e.rarity]} transition-all ${e.unlocked?"opacity-100":"opacity-60"}`,children:(0,y.jsx)(rO,{className:"py-4",children:(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)("div",{className:`w-12 h-12 rounded-lg flex items-center justify-center ${e.unlocked?"bg-green-500/20":"bg-slate-700/50"}`,children:e.unlocked?e.icon:(0,y.jsx)(a5,{className:"w-5 h-5 text-slate-400"})}),(0,y.jsxs)("div",{className:"flex-1",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)("h3",{className:"font-medium",children:e.title}),(0,y.jsx)(aV,{className:`text-xs ${dr[e.rarity]}`,children:e.rarity})]}),(0,y.jsx)("p",{className:"text-sm text-slate-400",children:e.description}),(0,y.jsx)("p",{className:"text-xs text-slate-500 mt-1",children:e.condition})]}),(0,y.jsx)("div",{className:"text-right",children:e.unlocked?(0,y.jsx)(aN,{className:"w-5 h-5 text-green-400"}):(0,y.jsxs)("span",{className:"text-xs text-yellow-400",children:["+",e.points," XP"]})})]})})},e.id))})]})}let dd=(0,ef.default)("timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]),dc=(0,ef.default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),dp=(0,ef.default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),dh=(0,ef.default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);var du=e.i(37727);let dm=(0,ef.default)("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),df=(0,ef.default)("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),dy=(0,ef.default)("shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);function dx({cards:e,title:t}){let{playSound:i,addExperience:l}=ti(),[s,o]=(0,x.useState)(0),[n,r]=(0,x.useState)(!1),[a,d]=(0,x.useState)(new Set),[c,p]=(0,x.useState)(new Set),[h,u]=(0,x.useState)(!1),[m,f]=(0,x.useState)(e),g=m[s],b=(s+1)/m.length*100,v=()=>{r(!1),s<m.length-1?setTimeout(()=>o(e=>e+1),150):(u(!0),l(5*a.size))};if(h){let i=m.length,l=a.size,s=Math.round(l/i*100);return(0,y.jsx)(rR,{className:"bg-slate-800/50 border-slate-700",children:(0,y.jsx)(rO,{className:"py-8",children:(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("div",{className:`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center ${s>=80?"bg-green-500/20":s>=50?"bg-yellow-500/20":"bg-red-500/20"}`,children:(0,y.jsx)("span",{className:"text-4xl font-bold",children:s>=80?"🎉":s>=50?"👍":"💪"})}),(0,y.jsx)("h2",{className:"text-2xl font-bold mb-2",children:"Результаты"}),(0,y.jsx)("p",{className:"text-slate-400 mb-4",children:t}),(0,y.jsxs)("div",{className:"grid grid-cols-3 gap-4 max-w-xs mx-auto mb-6",children:[(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("p",{className:"text-2xl font-bold text-green-400",children:l}),(0,y.jsx)("p",{className:"text-xs text-slate-400",children:"Знаю"})]}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("p",{className:"text-2xl font-bold text-red-400",children:c.size}),(0,y.jsx)("p",{className:"text-xs text-slate-400",children:"Повторить"})]}),(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsxs)("p",{className:"text-2xl font-bold text-blue-400",children:[s,"%"]}),(0,y.jsx)("p",{className:"text-xs text-slate-400",children:"Результат"})]})]}),c.size>0&&(0,y.jsxs)("div",{className:"mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg",children:[(0,y.jsx)("p",{className:"text-sm font-medium text-red-300 mb-2",children:"Нужно повторить:"}),(0,y.jsx)("div",{className:"flex flex-wrap gap-2 justify-center",children:m.filter(e=>c.has(e.id)).map(e=>(0,y.jsx)(aV,{variant:"outline",className:"border-red-500/30",children:e.front},e.id))})]}),(0,y.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,y.jsxs)(tS,{variant:"outline",onClick:()=>{f([...e].sort(()=>Math.random()-.5)),o(0),r(!1),d(new Set),p(new Set),u(!1)},children:[(0,y.jsx)(dy,{className:"w-4 h-4 mr-2"}),"Перемешать"]}),(0,y.jsxs)(tS,{onClick:()=>{o(0),r(!1),d(new Set),p(new Set),u(!1)},children:[(0,y.jsx)(dc,{className:"w-4 h-4 mr-2"}),"Ещё раз"]})]})]})})})}return(0,y.jsx)(rR,{className:"bg-slate-800/50 border-slate-700",children:(0,y.jsxs)(rO,{className:"py-4",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)(ey,{className:"w-5 h-5 text-yellow-400"}),(0,y.jsx)("span",{className:"font-medium",children:t})]}),(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsxs)(aV,{variant:"outline",className:"text-green-400",children:["✓ ",a.size]}),(0,y.jsxs)(aV,{variant:"outline",className:"text-red-400",children:["✗ ",c.size]}),(0,y.jsxs)(aV,{variant:"outline",children:[s+1,"/",m.length]})]})]}),(0,y.jsx)(tq,{value:b,className:"h-2 mb-4"}),(0,y.jsx)("div",{className:"relative h-48 mb-4 perspective-1000",children:(0,y.jsxs)("div",{className:`absolute inset-0 transition-transform duration-500 transform-style-preserve-3d cursor-pointer ${n?"rotate-y-180":""}`,onClick:()=>{r(!n)},children:[(0,y.jsx)("div",{className:`absolute inset-0 flex items-center justify-center p-6 rounded-xl bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-500/30 backface-hidden ${n?"invisible":""}`,children:(0,y.jsxs)("div",{className:"text-center",children:[g.category&&(0,y.jsx)(aV,{variant:"outline",className:"mb-2",children:g.category}),(0,y.jsx)("p",{className:"text-2xl font-medium",children:g.front}),(0,y.jsxs)("p",{className:"text-xs text-slate-400 mt-4 flex items-center justify-center gap-1",children:[(0,y.jsx)(dm,{className:"w-3 h-3"}),"Нажми, чтобы перевернуть"]})]})}),(0,y.jsx)("div",{className:`absolute inset-0 flex items-center justify-center p-6 rounded-xl bg-gradient-to-br from-green-600/30 to-teal-600/30 border border-green-500/30 backface-hidden rotate-y-180 ${!n?"invisible":""}`,children:(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("p",{className:"text-2xl font-medium",children:g.back}),(0,y.jsxs)("p",{className:"text-xs text-slate-400 mt-4 flex items-center justify-center gap-1",children:[(0,y.jsx)(df,{className:"w-3 h-3"}),"Нажми, чтобы вернуться"]})]})})]})}),!n&&(0,y.jsx)("p",{className:"text-center text-sm text-slate-400 mb-4",children:"Переверни карточку, чтобы увидеть ответ"}),(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsx)(tS,{variant:"ghost",size:"icon",onClick:()=>{r(!1),s>0&&setTimeout(()=>o(e=>e-1),150)},disabled:0===s,children:(0,y.jsx)(dh,{className:"w-5 h-5"})}),(0,y.jsxs)("div",{className:"flex gap-2",children:[(0,y.jsxs)(tS,{variant:"outline",className:"border-red-500/50 text-red-400 hover:bg-red-500/20",onClick:()=>{i("error"),p(e=>new Set([...e,g.id])),v()},disabled:!n,children:[(0,y.jsx)(du.X,{className:"w-4 h-4 mr-1"}),"Повторить"]}),(0,y.jsxs)(tS,{className:"bg-green-600 hover:bg-green-700",onClick:()=>{i("success"),d(e=>new Set([...e,g.id])),v()},disabled:!n,children:[(0,y.jsx)(a2,{className:"w-4 h-4 mr-1"}),"Знаю"]})]}),(0,y.jsx)(tS,{variant:"ghost",size:"icon",onClick:v,disabled:s===m.length-1,children:(0,y.jsx)(dp,{className:"w-5 h-5"})})]})]})})}let dg=(0,ef.default)("pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);function db(){try{let e=new Date().toDateString(),t=localStorage.getItem(`studyTimer_${e}`);if(t)return JSON.parse(t)}catch{}return{sessions:0,minutes:0}}function dv({initialMinutes:e=25,onSessionComplete:t}){let i,{addExperience:l,playSound:s,setUserStats:o}=ti(),[n,r]=(0,x.useState)(60*e),[a,d]=(0,x.useState)(!1),[c,p]=(0,x.useState)(!1),[h,u]=(0,x.useState)(()=>db().sessions),[m,f]=(0,x.useState)(()=>db().minutes),g=(0,x.useRef)(null);(0,x.useEffect)(()=>{let e=new Date().toDateString();localStorage.setItem(`studyTimer_${e}`,JSON.stringify({sessions:h,minutes:m}))},[h,m]),(0,x.useEffect)(()=>(a&&n>0&&(g.current=setInterval(()=>{r(e=>e<=1?(d(!1),p(!0),s("achievement"),0):e-1)},1e3)),()=>{g.current&&clearInterval(g.current)}),[a,s]);let b=()=>{d(!1),r(60*e),p(!1)};return(0,y.jsx)(rR,{className:"bg-slate-800/50 border-slate-700",children:(0,y.jsxs)(rO,{className:"py-4",children:[(0,y.jsx)("div",{className:"flex items-center justify-between mb-4",children:(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center",children:(0,y.jsx)(dd,{className:"w-5 h-5 text-white"})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h3",{className:"font-semibold",children:"Таймер обучения"}),(0,y.jsxs)("p",{className:"text-xs text-slate-400",children:["Сегодня: ",m," мин • ",h," сессий"]})]})]})}),(0,y.jsxs)("div",{className:"relative flex items-center justify-center py-8",children:[(0,y.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,y.jsxs)("svg",{className:"w-40 h-40 transform -rotate-90",children:[(0,y.jsx)("circle",{cx:"80",cy:"80",r:"70",fill:"none",stroke:"rgba(100, 116, 139, 0.3)",strokeWidth:"8"}),(0,y.jsx)("circle",{cx:"80",cy:"80",r:"70",fill:"none",stroke:"url(#timerGradient)",strokeWidth:"8",strokeLinecap:"round",strokeDasharray:440,strokeDashoffset:440-(60*e-n)/(60*e)*100*440/100,className:"transition-all duration-1000"}),(0,y.jsx)("defs",{children:(0,y.jsxs)("linearGradient",{id:"timerGradient",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[(0,y.jsx)("stop",{offset:"0%",stopColor:"#3b82f6"}),(0,y.jsx)("stop",{offset:"100%",stopColor:"#8b5cf6"})]})})]})}),(0,y.jsxs)("div",{className:"text-center z-10",children:[(0,y.jsx)("p",{className:`text-4xl font-mono font-bold ${c?"text-green-400":"text-white"}`,children:(i=Math.floor(n/60),`${i.toString().padStart(2,"0")}:${(n%60).toString().padStart(2,"0")}`)}),c&&(0,y.jsxs)("p",{className:"text-sm text-green-400 mt-1 flex items-center justify-center gap-1",children:[(0,y.jsx)(ev,{className:"w-4 h-4"}),"Сессия завершена!"]})]})]}),(0,y.jsx)("div",{className:"flex justify-center gap-2 mb-4",children:[{label:"15 мин",value:15},{label:"25 мин",value:25},{label:"45 мин",value:45},{label:"60 мин",value:60}].map(t=>(0,y.jsx)(tS,{variant:e===t.value?"default":"outline",size:"sm",onClick:()=>{b(),r(60*t.value)},className:e===t.value?"bg-blue-600":"",children:t.label},t.value))}),(0,y.jsxs)("div",{className:"flex justify-center gap-2",children:[a?(0,y.jsxs)(tS,{onClick:()=>{d(!1)},variant:"outline",children:[(0,y.jsx)(dg,{className:"w-4 h-4 mr-2"}),"Пауза"]}):(0,y.jsxs)(tS,{onClick:()=>{d(!0),p(!1)},className:"bg-green-600 hover:bg-green-700",children:[(0,y.jsx)(aS,{className:"w-4 h-4 mr-2"}),"Начать"]}),(0,y.jsxs)(tS,{variant:"outline",onClick:b,children:[(0,y.jsx)(dc,{className:"w-4 h-4 mr-2"}),"Сброс"]}),c&&(0,y.jsxs)(tS,{onClick:()=>{let i=e-Math.ceil(n/60);l(2*i),u(e=>e+1),f(e=>e+i),o(e=>({...e,totalStudyTime:e.totalStudyTime+i})),t?.(i),b()},className:"bg-purple-600 hover:bg-purple-700",children:[(0,y.jsx)(aN,{className:"w-4 h-4 mr-2"}),"Завершить"]})]})]})})}let dw=(0,ef.default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),dj=(0,ef.default)("trash-2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function dT(){let[e,t]=(0,x.useState)([{id:"1",title:"Заметка 1",content:"Первая заметка",createdAt:new Date}]),[i,l]=(0,x.useState)(null),s=(i,l)=>{t(e.map(e=>e.id===i?{...e,...l}:e))},o=e.find(e=>e.id===i);return(0,y.jsxs)("div",{className:"flex gap-4 h-80",children:[(0,y.jsxs)("div",{className:"w-1/3 space-y-2",children:[(0,y.jsxs)(rq.button,{onClick:()=>{let i={id:Date.now().toString(),title:"Новая заметка",content:"",createdAt:new Date};t([...e,i]),l(i.id)},className:"w-full p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white flex items-center justify-center gap-2",whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,y.jsx)(dw,{className:"w-4 h-4"}),"Новая"]}),e.map(s=>(0,y.jsx)(rq.div,{onClick:()=>l(s.id),className:`p-3 rounded-lg cursor-pointer transition-all ${i===s.id?"bg-white/20":"bg-white/5 hover:bg-white/10"}`,whileHover:{x:4},children:(0,y.jsxs)("div",{className:"flex justify-between items-center",children:[(0,y.jsx)("span",{className:"text-sm font-medium text-white truncate",children:s.title}),(0,y.jsx)("button",{onClick:o=>{var n;o.stopPropagation(),n=s.id,t(e.filter(e=>e.id!==n)),i===n&&l(null)},className:"text-red-400 hover:text-red-300",children:(0,y.jsx)(dj,{className:"w-4 h-4"})})]})},s.id))]}),(0,y.jsx)("div",{className:"flex-1",children:o?(0,y.jsxs)("div",{className:"space-y-3 h-full flex flex-col",children:[(0,y.jsx)("input",{type:"text",value:o.title,onChange:e=>s(o.id,{title:e.target.value}),className:"w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-green-400 outline-none",placeholder:"Заголовок"}),(0,y.jsx)("textarea",{value:o.content,onChange:e=>s(o.id,{content:e.target.value}),className:"flex-1 w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 focus:border-green-400 outline-none resize-none",placeholder:"Текст заметки..."})]}):(0,y.jsx)("div",{className:"h-full flex items-center justify-center text-white/40",children:"Выберите заметку или создайте новую"})})]})}let dq=(0,ef.default)("triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]),dk=(0,ef.default)("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),dN={math:[{name:"Квадратное уравнение",formula:"ax² + bx + c = 0",result:"x = (-b ± √D) / 2a"},{name:"Дискриминант",formula:"D = b² - 4ac",result:""},{name:"Теорема Виета",formula:"x₁ + x₂ = -p, x₁ · x₂ = q",result:""},{name:"Квадрат суммы",formula:"(a + b)² = a² + 2ab + b²",result:""},{name:"Квадрат разности",formula:"(a - b)² = a² - 2ab + b²",result:""},{name:"Разность квадратов",formula:"a² - b² = (a-b)(a+b)",result:""}],geometry:[{name:"Площадь прямоугольника",formula:"S = a · b",result:""},{name:"Площадь треугольника",formula:"S = ½ · a · h",result:""},{name:"Площадь круга",formula:"S = π · r²",result:""},{name:"Длина окружности",formula:"C = 2 · π · r",result:""},{name:"Теорема Пифагора",formula:"a² + b² = c²",result:""},{name:"Площадь трапеции",formula:"S = ½ · (a + b) · h",result:""}],physics:[{name:"Скорость",formula:"v = s / t",result:""},{name:"Ускорение",formula:"a = Δv / Δt",result:""},{name:"Второй закон Ньютона",formula:"F = m · a",result:""},{name:"Кинетическая энергия",formula:"E = ½ · m · v²",result:""},{name:"Потенциальная энергия",formula:"E = m · g · h",result:""},{name:"Закон Ома",formula:"I = U / R",result:""}]},dS=[{id:"math",name:"Алгебра",icon:eM,color:"from-blue-500 to-cyan-500"},{id:"geometry",name:"Геометрия",icon:dq,color:"from-purple-500 to-pink-500"},{id:"physics",name:"Физика",icon:dk,color:"from-orange-500 to-red-500"}];function dA(){let[e,t]=(0,x.useState)("math"),i=dN[e]||[];return(0,y.jsxs)("div",{children:[(0,y.jsx)("div",{className:"flex gap-2 mb-4",children:dS.map(i=>(0,y.jsxs)(rq.button,{onClick:()=>t(i.id),className:`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${e===i.id?`bg-gradient-to-r ${i.color} text-white`:"bg-white/10 text-white/70 hover:bg-white/20"}`,whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,y.jsx)(i.icon,{className:"w-4 h-4"}),i.name]},i.id))}),(0,y.jsx)("div",{className:"grid gap-3",children:i.map((e,t)=>(0,y.jsxs)(rq.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.05*t},className:"p-4 rounded-lg bg-white/10 border border-white/10",children:[(0,y.jsx)("div",{className:"text-sm text-white/60 mb-1",children:e.name}),(0,y.jsx)("div",{className:"text-xl font-mono text-white",children:e.formula}),e.result&&(0,y.jsxs)("div",{className:"text-sm text-green-400 mt-1",children:["→ ",e.result]})]},t))})]})}let dC=[{id:"timer",title:"Таймер учёбы",icon:dd,emoji:"⏱️",color:"from-blue-500 to-cyan-500"},{id:"flashcards",title:"Карточки",icon:eg,emoji:"📚",color:"from-purple-500 to-pink-500"},{id:"notes",title:"Заметки",icon:eE,emoji:"📝",color:"from-green-500 to-emerald-500"},{id:"formulas",title:"Формулы",icon:eM,emoji:"📐",color:"from-orange-500 to-red-500"}];function dP({onExperience:e,gradeId:t=0}){let[i,l]=(0,x.useState)("timer"),s=t<=2;return(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsxs)(rq.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},className:"text-center",children:[(0,y.jsx)("h2",{className:`font-bold mb-2 ${s?"text-2xl":"text-xl"}`,children:s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:"text-3xl mr-2",children:"🛠️"}),"Инструменты",(0,y.jsx)("span",{className:"text-3xl ml-2",children:"🛠️"})]}):"Инструменты для учёбы"}),(0,y.jsx)("p",{className:"text-white/60",children:s?"Выбери инструмент и начинай!":"Полезные инструменты для эффективной учёбы"})]}),(0,y.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:dC.map((e,t)=>(0,y.jsxs)(rq.button,{onClick:()=>l(e.id),className:`p-4 rounded-2xl text-center transition-all ${i===e.id?`bg-gradient-to-br ${e.color} shadow-lg scale-105`:"bg-white/10 hover:bg-white/20"}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},whileHover:{scale:i===e.id?1.05:1.02},whileTap:{scale:.98},children:[(0,y.jsx)(rq.span,{className:"text-3xl block mb-2",animate:i===e.id?{scale:[1,1.2,1],rotate:[0,10,-10,0]}:{},transition:{duration:.5},children:e.emoji}),(0,y.jsx)("span",{className:`font-medium text-sm ${i===e.id?"text-white":"text-white/80"}`,children:e.title})]},e.id))}),(0,y.jsx)(rq.div,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.3},children:(0,y.jsx)(rR,{className:"bg-white/5 border-white/10 backdrop-blur",children:(0,y.jsxs)(rO,{className:"p-6",children:["timer"===i&&(0,y.jsx)(dv,{}),"flashcards"===i&&(0,y.jsx)(dx,{}),"notes"===i&&(0,y.jsx)(dT,{}),"formulas"===i&&(0,y.jsx)(dA,{})]})})},i)]})}function dE({gradeId:e=0}){let{userStats:t,achievements:i,getRank:l}=ti(),s=l(),o=e<=2,n=i.filter(e=>e.unlocked),r=t.experience/100*100,a=[{label:"Тем изучено",value:t.topicsCompleted,emoji:"📚"},{label:"Уроков пройдено",value:t.lessonsCompleted,emoji:"✅"},{label:"Тестов пройдено",value:t.quizzesCompleted,emoji:"⚡"},{label:"Идеальных тестов",value:t.perfectQuizzes,emoji:"🏆"}];return(0,y.jsxs)("div",{className:"space-y-6",children:[(0,y.jsx)(rq.div,{className:"text-center",initial:{opacity:0,y:-10},animate:{opacity:1,y:0},children:(0,y.jsx)("h2",{className:`font-bold mb-2 ${o?"text-3xl":"text-2xl"}`,children:o?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("span",{className:"text-3xl mr-2",children:"📊"}),"Мой прогресс",(0,y.jsx)("span",{className:"text-3xl ml-2",children:"📊"})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(rF,{className:"w-8 h-8 inline mr-2"}),"Статистика обучения"]})})}),(0,y.jsx)(rq.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},children:(0,y.jsx)(rR,{className:"bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-purple-400/30 overflow-hidden",children:(0,y.jsx)(rO,{className:"p-6",children:(0,y.jsxs)("div",{className:"flex items-center gap-6",children:[(0,y.jsx)(rq.div,{className:"text-6xl",animate:{scale:[1,1.1,1],rotate:[0,5,-5,0]},transition:{duration:2,repeat:1/0},children:s.icon}),(0,y.jsxs)("div",{className:"flex-1",children:[(0,y.jsx)("h3",{className:"text-2xl font-bold mb-1",children:t.rank}),(0,y.jsxs)("p",{className:"text-white/60 mb-3",children:["Уровень ",t.level]}),(0,y.jsxs)("div",{className:"space-y-2",children:[(0,y.jsxs)("div",{className:"flex justify-between text-sm",children:[(0,y.jsx)("span",{children:"Опыт"}),(0,y.jsxs)("span",{className:"font-bold",children:[t.experience,"/100 XP"]})]}),(0,y.jsxs)("div",{className:"relative h-4 bg-white/20 rounded-full overflow-hidden",children:[(0,y.jsx)(rq.div,{className:"absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full",initial:{width:0},animate:{width:`${r}%`},transition:{duration:1}}),(0,y.jsx)(rq.div,{className:"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",animate:{x:["-100%","100%"]},transition:{duration:2,repeat:1/0,repeatDelay:1}})]})]})]})]})})})}),(0,y.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:a.map((e,t)=>(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.1*t},children:(0,y.jsx)(rR,{className:"bg-white/5 border-white/10 hover:bg-white/10 transition-colors",children:(0,y.jsxs)(rO,{className:"p-4 text-center",children:[(0,y.jsx)(rq.span,{className:"text-3xl block mb-2",whileHover:{scale:1.2,rotate:10},children:e.emoji}),(0,y.jsx)("p",{className:"text-2xl font-bold",children:e.value}),(0,y.jsx)("p",{className:"text-xs text-white/60",children:e.label})]})})},e.label))}),(0,y.jsx)(rq.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.3},children:(0,y.jsx)(rR,{className:"bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30",children:(0,y.jsxs)(rO,{className:"p-4",children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)(rq.span,{className:"text-4xl",animate:{scale:[1,1.2,1],rotate:[0,10,-10,0]},transition:{duration:1,repeat:1/0},children:"🔥"}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h4",{className:"font-bold text-lg",children:"Серия дней"}),(0,y.jsx)("p",{className:"text-white/60 text-sm",children:t.streak>0?`Учишься ${t.streak} дней подряд!`:"Начни серию сегодня!"})]})]}),(0,y.jsxs)("div",{className:"text-right",children:[(0,y.jsx)("p",{className:"text-3xl font-bold text-orange-400",children:t.streak}),(0,y.jsx)("p",{className:"text-xs text-white/60",children:"дней"})]})]}),(0,y.jsx)("div",{className:"flex gap-1 mt-4 justify-center",children:[...Array(7)].map((e,i)=>(0,y.jsx)(rq.div,{className:`w-10 h-10 rounded-lg flex items-center justify-center ${i<t.streak%7?"bg-gradient-to-br from-orange-400 to-red-500":"bg-white/10"}`,whileHover:{scale:1.1},children:i<t.streak%7?"🔥":"·"},i))})]})})}),n.length>0&&(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4},children:(0,y.jsxs)(rR,{className:"bg-white/5 border-white/10",children:[(0,y.jsx)(rz,{children:(0,y.jsxs)(r_,{className:"flex items-center gap-2",children:[(0,y.jsx)("span",{className:"text-2xl",children:"🏆"}),"Достижения"]})}),(0,y.jsx)(rO,{children:(0,y.jsx)("div",{className:"flex flex-wrap gap-2",children:n.map((e,t)=>(0,y.jsx)(rq.div,{initial:{scale:0},animate:{scale:1},transition:{delay:.05*t,type:"spring"},children:(0,y.jsxs)(aV,{className:`px-3 py-1.5 ${"legendary"===e.rarity?"bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse":"epic"===e.rarity?"bg-gradient-to-r from-purple-500 to-pink-500":"rare"===e.rarity?"bg-gradient-to-r from-blue-500 to-cyan-500":"bg-gradient-to-r from-gray-500 to-gray-600"}`,children:[(0,y.jsx)("span",{className:"mr-1",children:e.icon}),e.title]})},e.id))})})]})}),(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5},children:(0,y.jsxs)(rR,{className:"bg-white/5 border-white/10",children:[(0,y.jsx)(rz,{children:(0,y.jsxs)(r_,{className:"flex items-center gap-2",children:[(0,y.jsx)("span",{className:"text-2xl",children:"⭐"}),"Общие очки"]})}),(0,y.jsx)(rO,{children:(0,y.jsx)("div",{className:"flex items-center justify-center gap-4",children:(0,y.jsxs)(rq.div,{className:"text-center",animate:{scale:[1,1.05,1]},transition:{duration:2,repeat:1/0},children:[(0,y.jsx)("p",{className:"text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent",children:t.totalPoints.toLocaleString()}),(0,y.jsx)("p",{className:"text-white/60 mt-1",children:"очков"})]})})})]})})]})}var dM=e.i(26330),dI="focusScope.autoFocusOnMount",dR="focusScope.autoFocusOnUnmount",dz={bubbles:!1,cancelable:!0},d_=x.forwardRef((e,t)=>{let{loop:i=!1,trapped:l=!1,onMountAutoFocus:s,onUnmountAutoFocus:o,...n}=e,[r,a]=x.useState(null),d=(0,S.useCallbackRef)(s),c=(0,S.useCallbackRef)(o),p=x.useRef(null),h=(0,w.useComposedRefs)(t,e=>a(e)),u=x.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;x.useEffect(()=>{if(l){let e=function(e){if(u.paused||!r)return;let t=e.target;r.contains(t)?p.current=t:dV(p.current,{select:!0})},t=function(e){if(u.paused||!r)return;let t=e.relatedTarget;null!==t&&(r.contains(t)||dV(p.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let i=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&dV(r)});return r&&i.observe(r,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),i.disconnect()}}},[l,r,u.paused]),x.useEffect(()=>{if(r){dL.add(u);let e=document.activeElement;if(!r.contains(e)){let t=new CustomEvent(dI,dz);r.addEventListener(dI,d),r.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let i=document.activeElement;for(let l of e)if(dV(l,{select:t}),document.activeElement!==i)return}(dO(r).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&dV(r))}return()=>{r.removeEventListener(dI,d),setTimeout(()=>{let t=new CustomEvent(dR,dz);r.addEventListener(dR,c),r.dispatchEvent(t),t.defaultPrevented||dV(e??document.body,{select:!0}),r.removeEventListener(dR,c),dL.remove(u)},0)}}},[r,d,c,u]);let m=x.useCallback(e=>{if(!i&&!l||u.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,s=document.activeElement;if(t&&s){var o;let t,l=e.currentTarget,[n,r]=[dD(t=dO(o=l),o),dD(t.reverse(),o)];n&&r?e.shiftKey||s!==r?e.shiftKey&&s===n&&(e.preventDefault(),i&&dV(r,{select:!0})):(e.preventDefault(),i&&dV(n,{select:!0})):s===l&&e.preventDefault()}},[i,l,u.paused]);return(0,y.jsx)(N.Primitive.div,{tabIndex:-1,...n,ref:h,onKeyDown:m})});function dO(e){let t=[],i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;i.nextNode();)t.push(i.currentNode);return t}function dD(e,t){for(let i of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(i,{upTo:t}))return i}function dV(e,{select:t=!1}={}){if(e&&e.focus){var i;let l=document.activeElement;e.focus({preventScroll:!0}),e!==l&&(i=e)instanceof HTMLInputElement&&"select"in i&&t&&e.select()}}d_.displayName="FocusScope";var dL=(n=[],{add(e){let t=n[0];e!==t&&t?.pause(),(n=dF(n,e)).unshift(e)},remove(e){n=dF(n,e),n[0]?.resume()}});function dF(e,t){let i=[...e],l=i.indexOf(t);return -1!==l&&i.splice(l,1),i}var dH=e.i(74606),dB=0;function d$(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var dU=function(){return(dU=Object.assign||function(e){for(var t,i=1,l=arguments.length;i<l;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)};function dW(e,t){var i={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&0>t.indexOf(l)&&(i[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,l=Object.getOwnPropertySymbols(e);s<l.length;s++)0>t.indexOf(l[s])&&Object.prototype.propertyIsEnumerable.call(e,l[s])&&(i[l[s]]=e[l[s]]);return i}var dX=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),dY="width-before-scroll-bar";function dK(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var dQ="u">typeof window?x.useLayoutEffect:x.useEffect,dG=new WeakMap,dJ=(void 0===d&&(d={}),(void 0===c&&(c=function(e){return e}),p=[],h=!1,u={read:function(){if(h)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return p.length?p[p.length-1]:null},useMedium:function(e){var t=c(e,h);return p.push(t),function(){p=p.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(h=!0;p.length;){var t=p;p=[],t.forEach(e)}p={push:function(t){return e(t)},filter:function(){return p}}},assignMedium:function(e){h=!0;var t=[];if(p.length){var i=p;p=[],i.forEach(e),t=p}var l=function(){var i=t;t=[],i.forEach(e)},s=function(){return Promise.resolve().then(l)};s(),p={push:function(e){t.push(e),s()},filter:function(e){return t=t.filter(e),p}}}}).options=dU({async:!0,ssr:!1},d),u),dZ=function(){},d0=x.forwardRef(function(e,t){var i,l,s,o,n=x.useRef(null),r=x.useState({onScrollCapture:dZ,onWheelCapture:dZ,onTouchMoveCapture:dZ}),a=r[0],d=r[1],c=e.forwardProps,p=e.children,h=e.className,u=e.removeScrollBar,m=e.enabled,f=e.shards,y=e.sideCar,g=e.noRelative,b=e.noIsolation,v=e.inert,w=e.allowPinchZoom,j=e.as,T=e.gapMode,q=dW(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=(i=[n,t],l=function(e){return i.forEach(function(t){return dK(t,e)})},(s=(0,x.useState)(function(){return{value:null,callback:l,facade:{get current(){return s.value},set current(value){var e=s.value;e!==value&&(s.value=value,s.callback(value,e))}}}})[0]).callback=l,o=s.facade,dQ(function(){var e=dG.get(o);if(e){var t=new Set(e),l=new Set(i),s=o.current;t.forEach(function(e){l.has(e)||dK(e,null)}),l.forEach(function(e){t.has(e)||dK(e,s)})}dG.set(o,i)},[i]),o),N=dU(dU({},q),a);return x.createElement(x.Fragment,null,m&&x.createElement(y,{sideCar:dJ,removeScrollBar:u,shards:f,noRelative:g,noIsolation:b,inert:v,setCallbacks:d,allowPinchZoom:!!w,lockRef:n,gapMode:T}),c?x.cloneElement(x.Children.only(p),dU(dU({},N),{ref:k})):x.createElement(void 0===j?"div":j,dU({},N,{className:h,ref:k}),p))});d0.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},d0.classNames={fullWidth:dY,zeroRight:dX};var d1=function(e){var t=e.sideCar,i=dW(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var l=t.read();if(!l)throw Error("Sidecar medium not found");return x.createElement(l,dU({},i))};d1.isSideCarExport=!0;var d4=function(){var e=0,t=null;return{add:function(i){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=f||("u">typeof __webpack_nonce__?__webpack_nonce__:void 0);return t&&e.setAttribute("nonce",t),e}())){var l,s;(l=t).styleSheet?l.styleSheet.cssText=i:l.appendChild(document.createTextNode(i)),s=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(s)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},d2=function(){var e=d4();return function(t,i){x.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&i])}},d3=function(){var e=d2();return function(t){return e(t.styles,t.dynamic),null}},d5={left:0,top:0,right:0,gap:0},d6=function(e){return parseInt(e||"",10)||0},d7=function(e){var t=window.getComputedStyle(document.body),i=t["padding"===e?"paddingLeft":"marginLeft"],l=t["padding"===e?"paddingTop":"marginTop"],s=t["padding"===e?"paddingRight":"marginRight"];return[d6(i),d6(l),d6(s)]},d8=function(e){if(void 0===e&&(e="margin"),"u"<typeof window)return d5;var t=d7(e),i=document.documentElement.clientWidth,l=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,l-i+t[2]-t[0])}},d9=d3(),ce="data-scroll-locked",ct=function(e,t,i,l){var s=e.left,o=e.top,n=e.right,r=e.gap;return void 0===i&&(i="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(l,";\n   padding-right: ").concat(r,"px ").concat(l,";\n  }\n  body[").concat(ce,"] {\n    overflow: hidden ").concat(l,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(l,";"),"margin"===i&&"\n    padding-left: ".concat(s,"px;\n    padding-top: ").concat(o,"px;\n    padding-right: ").concat(n,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(r,"px ").concat(l,";\n    "),"padding"===i&&"padding-right: ".concat(r,"px ").concat(l,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(dX," {\n    right: ").concat(r,"px ").concat(l,";\n  }\n  \n  .").concat(dY," {\n    margin-right: ").concat(r,"px ").concat(l,";\n  }\n  \n  .").concat(dX," .").concat(dX," {\n    right: 0 ").concat(l,";\n  }\n  \n  .").concat(dY," .").concat(dY," {\n    margin-right: 0 ").concat(l,";\n  }\n  \n  body[").concat(ce,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(r,"px;\n  }\n")},ci=function(){var e=parseInt(document.body.getAttribute(ce)||"0",10);return isFinite(e)?e:0},cl=function(){x.useEffect(function(){return document.body.setAttribute(ce,(ci()+1).toString()),function(){var e=ci()-1;e<=0?document.body.removeAttribute(ce):document.body.setAttribute(ce,e.toString())}},[])},cs=function(e){var t=e.noRelative,i=e.noImportant,l=e.gapMode,s=void 0===l?"margin":l;cl();var o=x.useMemo(function(){return d8(s)},[s]);return x.createElement(d9,{styles:ct(o,!t,s,i?"":"!important")})},co=!1;if("u">typeof window)try{var cn=Object.defineProperty({},"passive",{get:function(){return co=!0,!0}});window.addEventListener("test",cn,cn),window.removeEventListener("test",cn,cn)}catch(e){co=!1}var cr=!!co&&{passive:!1},ca=function(e,t){if(!(e instanceof Element))return!1;var i=window.getComputedStyle(e);return"hidden"!==i[t]&&(i.overflowY!==i.overflowX||"TEXTAREA"===e.tagName||"visible"!==i[t])},cd=function(e,t){var i=t.ownerDocument,l=t;do{if("u">typeof ShadowRoot&&l instanceof ShadowRoot&&(l=l.host),cc(e,l)){var s=cp(e,l);if(s[1]>s[2])return!0}l=l.parentNode}while(l&&l!==i.body)return!1},cc=function(e,t){return"v"===e?ca(t,"overflowY"):ca(t,"overflowX")},cp=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ch=function(e,t,i,l,s){var o,n=(o=window.getComputedStyle(t).direction,"h"===e&&"rtl"===o?-1:1),r=n*l,a=i.target,d=t.contains(a),c=!1,p=r>0,h=0,u=0;do{if(!a)break;var m=cp(e,a),f=m[0],y=m[1]-m[2]-n*f;(f||y)&&cc(e,a)&&(h+=y,u+=f);var x=a.parentNode;a=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!d&&a!==document.body||d&&(t.contains(a)||t===a))return p&&(s&&1>Math.abs(h)||!s&&r>h)?c=!0:!p&&(s&&1>Math.abs(u)||!s&&-r>u)&&(c=!0),c},cu=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},cm=function(e){return[e.deltaX,e.deltaY]},cf=function(e){return e&&"current"in e?e.current:e},cy=0,cx=[];let cg=(m=function(e){var t=x.useRef([]),i=x.useRef([0,0]),l=x.useRef(),s=x.useState(cy++)[0],o=x.useState(d3)[0],n=x.useRef(e);x.useEffect(function(){n.current=e},[e]),x.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var t=(function(e,t,i){if(i||2==arguments.length)for(var l,s=0,o=t.length;s<o;s++)!l&&s in t||(l||(l=Array.prototype.slice.call(t,0,s)),l[s]=t[s]);return e.concat(l||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(cf),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var r=x.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!n.current.allowPinchZoom;var s,o=cu(e),r=i.current,a="deltaX"in e?e.deltaX:r[0]-o[0],d="deltaY"in e?e.deltaY:r[1]-o[1],c=e.target,p=Math.abs(a)>Math.abs(d)?"h":"v";if("touches"in e&&"h"===p&&"range"===c.type)return!1;var h=window.getSelection(),u=h&&h.anchorNode;if(u&&(u===c||u.contains(c)))return!1;var m=cd(p,c);if(!m)return!0;if(m?s=p:(s="v"===p?"h":"v",m=cd(p,c)),!m)return!1;if(!l.current&&"changedTouches"in e&&(a||d)&&(l.current=s),!s)return!0;var f=l.current||s;return ch(f,t,e,"h"===f?a:d,!0)},[]),a=x.useCallback(function(e){if(cx.length&&cx[cx.length-1]===o){var i="deltaY"in e?cm(e):cu(e),l=t.current.filter(function(t){var l;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(l=t.delta,l[0]===i[0]&&l[1]===i[1])})[0];if(l&&l.should){e.cancelable&&e.preventDefault();return}if(!l){var s=(n.current.shards||[]).map(cf).filter(Boolean).filter(function(t){return t.contains(e.target)});(s.length>0?r(e,s[0]):!n.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),d=x.useCallback(function(e,i,l,s){var o={name:e,delta:i,target:l,should:s,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(l)};t.current.push(o),setTimeout(function(){t.current=t.current.filter(function(e){return e!==o})},1)},[]),c=x.useCallback(function(e){i.current=cu(e),l.current=void 0},[]),p=x.useCallback(function(t){d(t.type,cm(t),t.target,r(t,e.lockRef.current))},[]),h=x.useCallback(function(t){d(t.type,cu(t),t.target,r(t,e.lockRef.current))},[]);x.useEffect(function(){return cx.push(o),e.setCallbacks({onScrollCapture:p,onWheelCapture:p,onTouchMoveCapture:h}),document.addEventListener("wheel",a,cr),document.addEventListener("touchmove",a,cr),document.addEventListener("touchstart",c,cr),function(){cx=cx.filter(function(e){return e!==o}),document.removeEventListener("wheel",a,cr),document.removeEventListener("touchmove",a,cr),document.removeEventListener("touchstart",c,cr)}},[]);var u=e.removeScrollBar,m=e.inert;return x.createElement(x.Fragment,null,m?x.createElement(o,{styles:"\n  .block-interactivity-".concat(s," {pointer-events: none;}\n  .allow-interactivity-").concat(s," {pointer-events: all;}\n")}):null,u?x.createElement(cs,{noRelative:e.noRelative,gapMode:e.gapMode}):null)},dJ.useMedium(m),d1);var cb=x.forwardRef(function(e,t){return x.createElement(d0,dU({},e,{ref:t,sideCar:cg}))});cb.classNames=d0.classNames;var cv=new WeakMap,cw=new WeakMap,cj={},cT=0,cq=function(e){return e&&(e.host||cq(e.parentNode))},ck=function(e,t,i,l){var s=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var i=cq(e);return i&&t.contains(i)?i:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});cj[i]||(cj[i]=new WeakMap);var o=cj[i],n=[],r=new Set,a=new Set(s),d=function(e){!e||r.has(e)||(r.add(e),d(e.parentNode))};s.forEach(d);var c=function(e){!e||a.has(e)||Array.prototype.forEach.call(e.children,function(e){if(r.has(e))c(e);else try{var t=e.getAttribute(l),s=null!==t&&"false"!==t,a=(cv.get(e)||0)+1,d=(o.get(e)||0)+1;cv.set(e,a),o.set(e,d),n.push(e),1===a&&s&&cw.set(e,!0),1===d&&e.setAttribute(i,"true"),s||e.setAttribute(l,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return c(t),r.clear(),cT++,function(){n.forEach(function(e){var t=cv.get(e)-1,s=o.get(e)-1;cv.set(e,t),o.set(e,s),t||(cw.has(e)||e.removeAttribute(l),cw.delete(e)),s||e.removeAttribute(i)}),--cT||(cv=new WeakMap,cv=new WeakMap,cw=new WeakMap,cj={})}},cN=function(e,t,i){void 0===i&&(i="data-aria-hidden");var l=Array.from(Array.isArray(e)?e:[e]),s=t||("u"<typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return s?(l.push.apply(l,Array.from(s.querySelectorAll("[aria-live], script"))),ck(l,s,i,"aria-hidden")):function(){return null}},cS=Symbol("radix.slottable");function cA(e){return x.isValidElement(e)&&"function"==typeof e.type&&"__radixId"in e.type&&e.type.__radixId===cS}var cC="Dialog",[cP,cE]=(0,b.createContextScope)(cC),[cM,cI]=cP(cC),cR=e=>{let{__scopeDialog:t,children:i,open:l,defaultOpen:s,onOpenChange:o,modal:n=!0}=e,r=x.useRef(null),a=x.useRef(null),[d,c]=(0,A.useControllableState)({prop:l,defaultProp:s??!1,onChange:o,caller:cC});return(0,y.jsx)(cM,{scope:t,triggerRef:r,contentRef:a,contentId:k(),titleId:k(),descriptionId:k(),open:d,onOpenChange:c,onOpenToggle:x.useCallback(()=>c(e=>!e),[c]),modal:n,children:i})};cR.displayName=cC;var cz="DialogTrigger";x.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,s=cI(cz,i),o=(0,w.useComposedRefs)(t,s.triggerRef);return(0,y.jsx)(N.Primitive.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":c1(s.open),...l,ref:o,onClick:(0,g.composeEventHandlers)(e.onClick,s.onOpenToggle)})}).displayName=cz;var c_="DialogPortal",[cO,cD]=cP(c_,{forceMount:void 0}),cV=e=>{let{__scopeDialog:t,forceMount:i,children:l,container:s}=e,o=cI(c_,t);return(0,y.jsx)(cO,{scope:t,forceMount:i,children:x.Children.map(l,e=>(0,y.jsx)(X.Presence,{present:i||o.open,children:(0,y.jsx)(dH.Portal,{asChild:!0,container:s,children:e})}))})};cV.displayName=c_;var cL="DialogOverlay",cF=x.forwardRef((e,t)=>{let i=cD(cL,e.__scopeDialog),{forceMount:l=i.forceMount,...s}=e,o=cI(cL,e.__scopeDialog);return o.modal?(0,y.jsx)(X.Presence,{present:l||o.open,children:(0,y.jsx)(cB,{...s,ref:t})}):null});cF.displayName=cL;var cH=((r=x.forwardRef((e,t)=>{let{children:i,...l}=e;if(x.isValidElement(i)){var s;let e,o,n=(s=i,(o=(e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.ref:(o=(e=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.props.ref:s.props.ref||s.ref),r=function(e,t){let i={...t};for(let l in t){let s=e[l],o=t[l];/^on[A-Z]/.test(l)?s&&o?i[l]=(...e)=>{let t=o(...e);return s(...e),t}:s&&(i[l]=s):"style"===l?i[l]={...s,...o}:"className"===l&&(i[l]=[s,o].filter(Boolean).join(" "))}return{...e,...i}}(l,i.props);return i.type!==x.Fragment&&(r.ref=t?(0,w.composeRefs)(t,n):n),x.cloneElement(i,r)}return x.Children.count(i)>1?x.Children.only(null):null})).displayName="DialogOverlay.RemoveScroll.SlotClone",l=r,(s=x.forwardRef((e,t)=>{let{children:i,...s}=e,o=x.Children.toArray(i),n=o.find(cA);if(n){let e=n.props.children,i=o.map(t=>t!==n?t:x.Children.count(e)>1?x.Children.only(null):x.isValidElement(e)?e.props.children:null);return(0,y.jsx)(l,{...s,ref:t,children:x.isValidElement(e)?x.cloneElement(e,void 0,i):null})}return(0,y.jsx)(l,{...s,ref:t,children:i})})).displayName="DialogOverlay.RemoveScroll.Slot",s),cB=x.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,s=cI(cL,i);return(0,y.jsx)(cb,{as:cH,allowPinchZoom:!0,shards:[s.contentRef],children:(0,y.jsx)(N.Primitive.div,{"data-state":c1(s.open),...l,ref:t,style:{pointerEvents:"auto",...l.style}})})}),c$="DialogContent",cU=x.forwardRef((e,t)=>{let i=cD(c$,e.__scopeDialog),{forceMount:l=i.forceMount,...s}=e,o=cI(c$,e.__scopeDialog);return(0,y.jsx)(X.Presence,{present:l||o.open,children:o.modal?(0,y.jsx)(cW,{...s,ref:t}):(0,y.jsx)(cX,{...s,ref:t})})});cU.displayName=c$;var cW=x.forwardRef((e,t)=>{let i=cI(c$,e.__scopeDialog),l=x.useRef(null),s=(0,w.useComposedRefs)(t,i.contentRef,l);return x.useEffect(()=>{let e=l.current;if(e)return cN(e)},[]),(0,y.jsx)(cY,{...e,ref:s,trapFocus:i.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,g.composeEventHandlers)(e.onCloseAutoFocus,e=>{e.preventDefault(),i.triggerRef.current?.focus()}),onPointerDownOutside:(0,g.composeEventHandlers)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,i=0===t.button&&!0===t.ctrlKey;(2===t.button||i)&&e.preventDefault()}),onFocusOutside:(0,g.composeEventHandlers)(e.onFocusOutside,e=>e.preventDefault())})}),cX=x.forwardRef((e,t)=>{let i=cI(c$,e.__scopeDialog),l=x.useRef(!1),s=x.useRef(!1);return(0,y.jsx)(cY,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(l.current||i.triggerRef.current?.focus(),t.preventDefault()),l.current=!1,s.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(l.current=!0,"pointerdown"===t.detail.originalEvent.type&&(s.current=!0));let o=t.target;i.triggerRef.current?.contains(o)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&s.current&&t.preventDefault()}})}),cY=x.forwardRef((e,t)=>{let{__scopeDialog:i,trapFocus:l,onOpenAutoFocus:s,onCloseAutoFocus:o,...n}=e,r=cI(c$,i),a=x.useRef(null),d=(0,w.useComposedRefs)(t,a);return x.useEffect(()=>{let e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??d$()),document.body.insertAdjacentElement("beforeend",e[1]??d$()),dB++,()=>{1===dB&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),dB--}},[]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(d_,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:s,onUnmountAutoFocus:o,children:(0,y.jsx)(dM.DismissableLayer,{role:"dialog",id:r.contentId,"aria-describedby":r.descriptionId,"aria-labelledby":r.titleId,"data-state":c1(r.open),...n,ref:d,onDismiss:()=>r.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(c5,{titleId:r.titleId}),(0,y.jsx)(c6,{contentRef:a,descriptionId:r.descriptionId})]})]})}),cK="DialogTitle",cQ=x.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,s=cI(cK,i);return(0,y.jsx)(N.Primitive.h2,{id:s.titleId,...l,ref:t})});cQ.displayName=cK;var cG="DialogDescription",cJ=x.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,s=cI(cG,i);return(0,y.jsx)(N.Primitive.p,{id:s.descriptionId,...l,ref:t})});cJ.displayName=cG;var cZ="DialogClose",c0=x.forwardRef((e,t)=>{let{__scopeDialog:i,...l}=e,s=cI(cZ,i);return(0,y.jsx)(N.Primitive.button,{type:"button",...l,ref:t,onClick:(0,g.composeEventHandlers)(e.onClick,()=>s.onOpenChange(!1))})});function c1(e){return e?"open":"closed"}c0.displayName=cZ;var c4="DialogTitleWarning",[c2,c3]=(0,b.createContext)(c4,{contentName:c$,titleName:cK,docsSlug:"dialog"}),c5=({titleId:e})=>{let t=c3(c4),i=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return x.useEffect(()=>{e&&(document.getElementById(e)||console.error(i))},[i,e]),null},c6=({contentRef:e,descriptionId:t})=>{let i=c3("DialogDescriptionWarning"),l=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${i.contentName}}.`;return x.useEffect(()=>{let i=e.current?.getAttribute("aria-describedby");t&&i&&(document.getElementById(t)||console.warn(l))},[l,e,t]),null},c7=e.i(41947),c7=c7;function c8({...e}){return(0,y.jsx)(cR,{"data-slot":"dialog",...e})}function c9({...e}){return(0,y.jsx)(cV,{"data-slot":"dialog-portal",...e})}function pe({className:e,...t}){return(0,y.jsx)(cF,{"data-slot":"dialog-overlay",className:(0,ed.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function pt({className:e,children:t,showCloseButton:i=!0,...l}){return(0,y.jsxs)(c9,{"data-slot":"dialog-portal",children:[(0,y.jsx)(pe,{}),(0,y.jsxs)(cU,{"data-slot":"dialog-content",className:(0,ed.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...l,children:[t,i&&(0,y.jsxs)(c0,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[(0,y.jsx)(c7.default,{}),(0,y.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function pi({className:e,...t}){return(0,y.jsx)("div",{"data-slot":"dialog-header",className:(0,ed.cn)("flex flex-col gap-2 text-center sm:text-left",e),...t})}function pl({className:e,...t}){return(0,y.jsx)("div",{"data-slot":"dialog-footer",className:(0,ed.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function ps({className:e,...t}){return(0,y.jsx)(cQ,{"data-slot":"dialog-title",className:(0,ed.cn)("text-lg leading-none font-semibold",e),...t})}function po({className:e,...t}){return(0,y.jsx)(cJ,{"data-slot":"dialog-description",className:(0,ed.cn)("text-muted-foreground text-sm",e),...t})}var pn="ScrollArea",[pr,pa]=(0,b.createContextScope)(pn),[pd,pc]=pr(pn),pp=x.forwardRef((e,t)=>{let{__scopeScrollArea:i,type:l="hover",dir:s,scrollHideDelay:o=600,...n}=e,[r,a]=x.useState(null),[d,c]=x.useState(null),[p,h]=x.useState(null),[u,m]=x.useState(null),[f,g]=x.useState(null),[b,v]=x.useState(0),[j,T]=x.useState(0),[q,k]=x.useState(!1),[S,A]=x.useState(!1),C=(0,w.useComposedRefs)(t,e=>a(e)),E=P(s);return(0,y.jsx)(pd,{scope:i,type:l,dir:E,scrollHideDelay:o,scrollArea:r,viewport:d,onViewportChange:c,content:p,onContentChange:h,scrollbarX:u,onScrollbarXChange:m,scrollbarXEnabled:q,onScrollbarXEnabledChange:k,scrollbarY:f,onScrollbarYChange:g,scrollbarYEnabled:S,onScrollbarYEnabledChange:A,onCornerWidthChange:v,onCornerHeightChange:T,children:(0,y.jsx)(N.Primitive.div,{dir:E,...n,ref:C,style:{position:"relative","--radix-scroll-area-corner-width":b+"px","--radix-scroll-area-corner-height":j+"px",...e.style}})})});pp.displayName=pn;var ph="ScrollAreaViewport",pu=x.forwardRef((e,t)=>{let{__scopeScrollArea:i,children:l,nonce:s,...o}=e,n=pc(ph,i),r=x.useRef(null),a=(0,w.useComposedRefs)(t,r,n.onViewportChange);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),(0,y.jsx)(N.Primitive.div,{"data-radix-scroll-area-viewport":"",...o,ref:a,style:{overflowX:n.scrollbarXEnabled?"scroll":"hidden",overflowY:n.scrollbarYEnabled?"scroll":"hidden",...e.style},children:(0,y.jsx)("div",{ref:n.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});pu.displayName=ph;var pm="ScrollAreaScrollbar",pf=x.forwardRef((e,t)=>{let{forceMount:i,...l}=e,s=pc(pm,e.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:n}=s,r="horizontal"===e.orientation;return x.useEffect(()=>(r?o(!0):n(!0),()=>{r?o(!1):n(!1)}),[r,o,n]),"hover"===s.type?(0,y.jsx)(py,{...l,ref:t,forceMount:i}):"scroll"===s.type?(0,y.jsx)(px,{...l,ref:t,forceMount:i}):"auto"===s.type?(0,y.jsx)(pg,{...l,ref:t,forceMount:i}):"always"===s.type?(0,y.jsx)(pb,{...l,ref:t}):null});pf.displayName=pm;var py=x.forwardRef((e,t)=>{let{forceMount:i,...l}=e,s=pc(pm,e.__scopeScrollArea),[o,n]=x.useState(!1);return x.useEffect(()=>{let e=s.scrollArea,t=0;if(e){let i=()=>{window.clearTimeout(t),n(!0)},l=()=>{t=window.setTimeout(()=>n(!1),s.scrollHideDelay)};return e.addEventListener("pointerenter",i),e.addEventListener("pointerleave",l),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",i),e.removeEventListener("pointerleave",l)}}},[s.scrollArea,s.scrollHideDelay]),(0,y.jsx)(X.Presence,{present:i||o,children:(0,y.jsx)(pg,{"data-state":o?"visible":"hidden",...l,ref:t})})}),px=x.forwardRef((e,t)=>{var i;let{forceMount:l,...s}=e,o=pc(pm,e.__scopeScrollArea),n="horizontal"===e.orientation,r=pO(()=>d("SCROLL_END"),100),[a,d]=(i={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},x.useReducer((e,t)=>i[e][t]??e,"hidden"));return x.useEffect(()=>{if("idle"===a){let e=window.setTimeout(()=>d("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(e)}},[a,o.scrollHideDelay,d]),x.useEffect(()=>{let e=o.viewport,t=n?"scrollLeft":"scrollTop";if(e){let i=e[t],l=()=>{let l=e[t];i!==l&&(d("SCROLL"),r()),i=l};return e.addEventListener("scroll",l),()=>e.removeEventListener("scroll",l)}},[o.viewport,n,d,r]),(0,y.jsx)(X.Presence,{present:l||"hidden"!==a,children:(0,y.jsx)(pb,{"data-state":"hidden"===a?"hidden":"visible",...s,ref:t,onPointerEnter:(0,g.composeEventHandlers)(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:(0,g.composeEventHandlers)(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),pg=x.forwardRef((e,t)=>{let i=pc(pm,e.__scopeScrollArea),{forceMount:l,...s}=e,[o,n]=x.useState(!1),r="horizontal"===e.orientation,a=pO(()=>{if(i.viewport){let e=i.viewport.offsetWidth<i.viewport.scrollWidth,t=i.viewport.offsetHeight<i.viewport.scrollHeight;n(r?e:t)}},10);return pD(i.viewport,a),pD(i.content,a),(0,y.jsx)(X.Presence,{present:l||o,children:(0,y.jsx)(pb,{"data-state":o?"visible":"hidden",...s,ref:t})})}),pb=x.forwardRef((e,t)=>{let{orientation:i="vertical",...l}=e,s=pc(pm,e.__scopeScrollArea),o=x.useRef(null),n=x.useRef(0),[r,a]=x.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=pM(r.viewport,r.content),c={...l,sizes:r,onSizesChange:a,hasThumb:!!(d>0&&d<1),onThumbChange:e=>o.current=e,onThumbPointerUp:()=>n.current=0,onThumbPointerDown:e=>n.current=e};function p(e,t){return function(e,t,i,l="ltr"){let s=pI(i),o=t||s/2,n=i.scrollbar.paddingStart+o,r=i.scrollbar.size-i.scrollbar.paddingEnd-(s-o),a=i.content-i.viewport;return pz([n,r],"ltr"===l?[0,a]:[-1*a,0])(e)}(e,n.current,r,t)}return"horizontal"===i?(0,y.jsx)(pv,{...c,ref:t,onThumbPositionChange:()=>{if(s.viewport&&o.current){let e=pR(s.viewport.scrollLeft,r,s.dir);o.current.style.transform=`translate3d(${e}px, 0, 0)`}},onWheelScroll:e=>{s.viewport&&(s.viewport.scrollLeft=e)},onDragScroll:e=>{s.viewport&&(s.viewport.scrollLeft=p(e,s.dir))}}):"vertical"===i?(0,y.jsx)(pw,{...c,ref:t,onThumbPositionChange:()=>{if(s.viewport&&o.current){let e=pR(s.viewport.scrollTop,r);o.current.style.transform=`translate3d(0, ${e}px, 0)`}},onWheelScroll:e=>{s.viewport&&(s.viewport.scrollTop=e)},onDragScroll:e=>{s.viewport&&(s.viewport.scrollTop=p(e))}}):null}),pv=x.forwardRef((e,t)=>{let{sizes:i,onSizesChange:l,...s}=e,o=pc(pm,e.__scopeScrollArea),[n,r]=x.useState(),a=x.useRef(null),d=(0,w.useComposedRefs)(t,a,o.onScrollbarXChange);return x.useEffect(()=>{a.current&&r(getComputedStyle(a.current))},[a]),(0,y.jsx)(pq,{"data-orientation":"horizontal",...s,ref:d,sizes:i,style:{bottom:0,left:"rtl"===o.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===o.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":pI(i)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,i)=>{if(o.viewport){var l,s;let n=o.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),l=n,s=i,l>0&&l<s&&t.preventDefault()}},onResize:()=>{a.current&&o.viewport&&n&&l({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:a.current.clientWidth,paddingStart:pE(n.paddingLeft),paddingEnd:pE(n.paddingRight)}})}})}),pw=x.forwardRef((e,t)=>{let{sizes:i,onSizesChange:l,...s}=e,o=pc(pm,e.__scopeScrollArea),[n,r]=x.useState(),a=x.useRef(null),d=(0,w.useComposedRefs)(t,a,o.onScrollbarYChange);return x.useEffect(()=>{a.current&&r(getComputedStyle(a.current))},[a]),(0,y.jsx)(pq,{"data-orientation":"vertical",...s,ref:d,sizes:i,style:{top:0,right:"ltr"===o.dir?0:void 0,left:"rtl"===o.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":pI(i)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,i)=>{if(o.viewport){var l,s;let n=o.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),l=n,s=i,l>0&&l<s&&t.preventDefault()}},onResize:()=>{a.current&&o.viewport&&n&&l({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:a.current.clientHeight,paddingStart:pE(n.paddingTop),paddingEnd:pE(n.paddingBottom)}})}})}),[pj,pT]=pr(pm),pq=x.forwardRef((e,t)=>{let{__scopeScrollArea:i,sizes:l,hasThumb:s,onThumbChange:o,onThumbPointerUp:n,onThumbPointerDown:r,onThumbPositionChange:a,onDragScroll:d,onWheelScroll:c,onResize:p,...h}=e,u=pc(pm,i),[m,f]=x.useState(null),b=(0,w.useComposedRefs)(t,e=>f(e)),v=x.useRef(null),j=x.useRef(""),T=u.viewport,q=l.content-l.viewport,k=(0,S.useCallbackRef)(c),A=(0,S.useCallbackRef)(a),C=pO(p,10);function P(e){v.current&&d({x:e.clientX-v.current.left,y:e.clientY-v.current.top})}return x.useEffect(()=>{let e=e=>{let t=e.target;m?.contains(t)&&k(e,q)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[T,m,q,k]),x.useEffect(A,[l,A]),pD(m,C),pD(u.content,C),(0,y.jsx)(pj,{scope:i,scrollbar:m,hasThumb:s,onThumbChange:(0,S.useCallbackRef)(o),onThumbPointerUp:(0,S.useCallbackRef)(n),onThumbPositionChange:A,onThumbPointerDown:(0,S.useCallbackRef)(r),children:(0,y.jsx)(N.Primitive.div,{...h,ref:b,style:{position:"absolute",...h.style},onPointerDown:(0,g.composeEventHandlers)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),v.current=m.getBoundingClientRect(),j.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",u.viewport&&(u.viewport.style.scrollBehavior="auto"),P(e))}),onPointerMove:(0,g.composeEventHandlers)(e.onPointerMove,P),onPointerUp:(0,g.composeEventHandlers)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=j.current,u.viewport&&(u.viewport.style.scrollBehavior=""),v.current=null})})})}),pk="ScrollAreaThumb",pN=x.forwardRef((e,t)=>{let{forceMount:i,...l}=e,s=pT(pk,e.__scopeScrollArea);return(0,y.jsx)(X.Presence,{present:i||s.hasThumb,children:(0,y.jsx)(pS,{ref:t,...l})})}),pS=x.forwardRef((e,t)=>{let{__scopeScrollArea:i,style:l,...s}=e,o=pc(pk,i),n=pT(pk,i),{onThumbPositionChange:r}=n,a=(0,w.useComposedRefs)(t,e=>n.onThumbChange(e)),d=x.useRef(void 0),c=pO(()=>{d.current&&(d.current(),d.current=void 0)},100);return x.useEffect(()=>{let e=o.viewport;if(e){let t=()=>{c(),d.current||(d.current=p_(e,r),r())};return r(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[o.viewport,c,r]),(0,y.jsx)(N.Primitive.div,{"data-state":n.hasThumb?"visible":"hidden",...s,ref:a,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,g.composeEventHandlers)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),i=e.clientX-t.left,l=e.clientY-t.top;n.onThumbPointerDown({x:i,y:l})}),onPointerUp:(0,g.composeEventHandlers)(e.onPointerUp,n.onThumbPointerUp)})});pN.displayName=pk;var pA="ScrollAreaCorner",pC=x.forwardRef((e,t)=>{let i=pc(pA,e.__scopeScrollArea),l=!!(i.scrollbarX&&i.scrollbarY);return"scroll"!==i.type&&l?(0,y.jsx)(pP,{...e,ref:t}):null});pC.displayName=pA;var pP=x.forwardRef((e,t)=>{let{__scopeScrollArea:i,...l}=e,s=pc(pA,i),[o,n]=x.useState(0),[r,a]=x.useState(0),d=!!(o&&r);return pD(s.scrollbarX,()=>{let e=s.scrollbarX?.offsetHeight||0;s.onCornerHeightChange(e),a(e)}),pD(s.scrollbarY,()=>{let e=s.scrollbarY?.offsetWidth||0;s.onCornerWidthChange(e),n(e)}),d?(0,y.jsx)(N.Primitive.div,{...l,ref:t,style:{width:o,height:r,position:"absolute",right:"ltr"===s.dir?0:void 0,left:"rtl"===s.dir?0:void 0,bottom:0,...e.style}}):null});function pE(e){return e?parseInt(e,10):0}function pM(e,t){let i=e/t;return isNaN(i)?0:i}function pI(e){let t=pM(e.viewport,e.content),i=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-i)*t,18)}function pR(e,t,i="ltr"){let l=pI(t),s=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,o=t.scrollbar.size-s,n=t.content-t.viewport,r=function(e,[t,i]){return Math.min(i,Math.max(t,e))}(e,"ltr"===i?[0,n]:[-1*n,0]);return pz([0,n],[0,o-l])(r)}function pz(e,t){return i=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(i-e[0])}}var p_=(e,t=()=>{})=>{let i={left:e.scrollLeft,top:e.scrollTop},l=0;return!function s(){let o={left:e.scrollLeft,top:e.scrollTop},n=i.left!==o.left,r=i.top!==o.top;(n||r)&&t(),i=o,l=window.requestAnimationFrame(s)}(),()=>window.cancelAnimationFrame(l)};function pO(e,t){let i=(0,S.useCallbackRef)(e),l=x.useRef(0);return x.useEffect(()=>()=>window.clearTimeout(l.current),[]),x.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(i,t)},[i,t])}function pD(e,t){let i=(0,S.useCallbackRef)(t);(0,j.useLayoutEffect)(()=>{let t=0;if(e){let l=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(i)});return l.observe(e),()=>{window.cancelAnimationFrame(t),l.unobserve(e)}}},[e,i])}function pV({className:e,children:t,...i}){return(0,y.jsxs)(pp,{"data-slot":"scroll-area",className:(0,ed.cn)("relative",e),...i,children:[(0,y.jsx)(pu,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:t}),(0,y.jsx)(pL,{}),(0,y.jsx)(pC,{})]})}function pL({className:e,orientation:t="vertical",...i}){return(0,y.jsx)(pf,{"data-slot":"scroll-area-scrollbar",orientation:t,className:(0,ed.cn)("flex touch-none p-px transition-colors select-none","vertical"===t&&"h-full w-2.5 border-l border-l-transparent","horizontal"===t&&"h-2.5 flex-col border-t border-t-transparent",e),...i,children:(0,y.jsx)(pN,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}var pF=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"].reduce((e,t)=>{let i=tn(`Primitive.${t}`),l=x.forwardRef((e,l)=>{let{asChild:s,...o}=e;return"u">typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,y.jsx)(s?i:t,{...o,ref:l})});return l.displayName=`Primitive.${t}`,{...e,[t]:l}},{}),pH="horizontal",pB=["horizontal","vertical"],p$=x.forwardRef((e,t)=>{var i;let{decorative:l,orientation:s=pH,...o}=e,n=(i=s,pB.includes(i))?s:pH;return(0,y.jsx)(pF.div,{"data-orientation":n,...l?{role:"none"}:{"aria-orientation":"vertical"===n?n:void 0,role:"separator"},...o,ref:t})});function pU({className:e,orientation:t="horizontal",decorative:i=!0,...l}){return(0,y.jsx)(p$,{"data-slot":"separator",decorative:i,orientation:t,className:(0,ed.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",e),...l})}p$.displayName="Separator";let pW=(0,ef.default)("bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]),pX=(0,ef.default)("bookmark-check",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]),pY=(0,ef.default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]),pK=(0,ef.default)("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),pQ=(0,ef.default)("party-popper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]),pG=(0,ef.default)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),pJ=(0,ef.default)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);function pZ({lessonId:e,title:t,type:i="theory",className:l=""}){return(0,y.jsx)("div",{className:`relative aspect-video rounded-lg bg-gradient-to-br ${{theory:"from-blue-500/20 to-purple-500/20 border-blue-500/30",practice:"from-green-500/20 to-teal-500/20 border-green-500/30",video:"from-red-500/20 to-orange-500/20 border-red-500/30",interactive:"from-purple-500/20 to-pink-500/20 border-purple-500/30"}[i]} border flex items-center justify-center ${l}`,children:(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)("span",{className:"text-4xl mb-2 block",children:{theory:"📖",practice:"✏️",video:"🎬",interactive:"🎮"}[i]}),(0,y.jsx)("p",{className:"text-sm text-slate-300 px-4",children:t})]})})}function p0(){return(0,y.jsx)("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:[...Array(50)].map((e,t)=>(0,y.jsx)("div",{className:"absolute animate-fall",style:{left:`${100*Math.random()}%`,animationDelay:`${2*Math.random()}s`,animationDuration:`${2+2*Math.random()}s`},children:["🎉","⭐","🌟","✨","🎊","💫"][Math.floor(6*Math.random())]},t))})}function p1({text:e,className:t=""}){return(0,y.jsx)("div",{className:`flex flex-wrap ${t}`,children:e.split("").map((e,t)=>(0,y.jsx)(rq.span,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.02*t,type:"spring",stiffness:300},className:" "===e?"w-2":"",children:e},t))})}function p4({children:e,onClick:t,variant:i="primary",size:l="lg",disabled:s=!1,className:o=""}){return(0,y.jsxs)(rq.button,{whileHover:{scale:s?1:1.05},whileTap:{scale:s?1:.95},onClick:t,disabled:s,className:`
        relative overflow-hidden rounded-full font-bold text-white
        bg-gradient-to-r ${{primary:"from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600",success:"from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600",secondary:"from-slate-600 via-slate-500 to-slate-600 hover:from-slate-700 hover:via-slate-600 hover:to-slate-700"}[i]} ${{md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg",xl:"px-8 py-4 text-xl"}[l]}
        shadow-lg disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-300 ${o}
      `,children:[(0,y.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"}),(0,y.jsx)("span",{className:"relative flex items-center justify-center gap-2",children:e})]})}function p2({show:e,onClose:t}){return((0,x.useEffect)(()=>{if(e){let e=setTimeout(t,3e3);return()=>clearTimeout(e)}},[e,t]),e)?(0,y.jsxs)(rq.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-50 flex items-center justify-center pointer-events-none",children:[(0,y.jsx)(p0,{}),(0,y.jsxs)(rq.div,{initial:{scale:0,rotate:-20},animate:{scale:1,rotate:0},className:"text-center",children:[(0,y.jsx)(rq.div,{animate:{y:[0,-10,0]},transition:{duration:.5,repeat:1/0},className:"text-8xl mb-4",children:"🎉"}),(0,y.jsx)("div",{className:"bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-full shadow-xl",children:(0,y.jsx)("span",{className:"text-2xl font-bold text-white",children:"Отлично! Ты молодец!"})})]})]}):null}function p3(){let{topicDialogOpen:e,setTopicDialogOpen:t,selectedTopic:i,selectedSubjectForTopic:l,progress:s,toggleTopic:o,bookmarks:n,setBookmarks:r,notes:a,setNotes:d,addExperience:c,playSound:p}=ti(),[h,u]=(0,x.useState)(0),[m,f]=(0,x.useState)(!1),[g,b]=(0,x.useState)(!1),[v,w]=(0,x.useState)(!0);if((0,x.useCallback)(()=>{u(0),f(!1),t(!1)},[t]),(0,x.useEffect)(()=>{if(!e){let e=setTimeout(()=>{u(0),f(!1)},0);return()=>clearTimeout(e)}},[e]),!i||!l)return null;let j=i.lessons[h],T=n.includes(i.id),q=s[l.id]?.[j.id]||!1,k=()=>{q||(p("success"),c("easy"===j.difficulty?15:"medium"===j.difficulty?25:40),b(!0)),o(l.id,i)},N=(e=>{switch(e){case"easy":return{label:"Легко",color:"bg-green-500/20 text-green-400 border-green-500/30",stars:1,emoji:"🌟"};case"medium":default:return{label:"Средне",color:"bg-yellow-500/20 text-yellow-400 border-yellow-500/30",stars:2,emoji:"⭐⭐"};case"hard":return{label:"Сложно",color:"bg-red-500/20 text-red-400 border-red-500/30",stars:3,emoji:"⭐⭐⭐"}}})(j.difficulty),S=i.lessons.filter(e=>s[l.id]?.[e.id]).length,A=Math.round(S/i.lessons.length*100);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(p2,{show:g,onClose:()=>b(!1)}),(0,y.jsx)(c8,{open:e,onOpenChange:t,children:(0,y.jsxs)(pt,{className:`
          max-w-4xl max-h-[90vh] overflow-hidden
          ${v?"bg-gradient-to-br from-purple-900/95 via-blue-900/95 to-indigo-900/95":"bg-slate-900"}
          border-slate-700
        `,children:[(0,y.jsx)("div",{className:"h-1.5 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"}),(0,y.jsx)(pi,{children:(0,y.jsxs)("div",{className:"flex items-start justify-between",children:[(0,y.jsxs)("div",{className:"flex-1",children:[(0,y.jsxs)("div",{className:"flex items-center gap-3 mb-2",children:[(0,y.jsx)(rq.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{w(!v),p("click")},className:`p-2 rounded-full ${v?"bg-yellow-500/20":"bg-slate-700"}`,title:v?"Обычный режим":"Детский режим",children:v?(0,y.jsx)(pG,{className:"w-5 h-5 text-yellow-400"}):(0,y.jsx)(pJ,{className:"w-5 h-5 text-slate-400"})}),(0,y.jsx)(ps,{className:"text-xl",children:v?(0,y.jsx)(p1,{text:i.title}):i.title}),q&&(0,y.jsx)(rq.div,{initial:{scale:0},animate:{scale:1},transition:{type:"spring"},children:(0,y.jsxs)(aV,{className:"bg-green-500/20 text-green-400 border-green-500/30",children:[(0,y.jsx)(aN,{className:"w-3 h-3 mr-1"}),"Пройдено"]})})]}),(0,y.jsxs)(po,{className:"flex items-center gap-2",children:[(0,y.jsx)("span",{children:l.title}),(0,y.jsx)("span",{className:"text-slate-600",children:"•"}),(0,y.jsx)("span",{children:i.description})]})]}),(0,y.jsx)("div",{className:"flex items-center gap-2",children:(0,y.jsx)(tS,{variant:"ghost",size:"icon",onClick:()=>{p("click"),T?r(n.filter(e=>e!==i.id)):r([...n,i.id])},title:T?"Убрать из закладок":"Добавить в закладки",children:T?(0,y.jsx)(rq.div,{animate:{scale:[1,1.2,1]},transition:{duration:.3},children:(0,y.jsx)(pX,{className:"w-5 h-5 text-yellow-400"})}):(0,y.jsx)(pW,{className:"w-5 h-5"})})})]})}),i.lessons.length>1&&(0,y.jsxs)("div",{className:"flex items-center gap-3 px-1",children:[(0,y.jsx)("div",{className:"flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden",children:(0,y.jsx)(rq.div,{initial:{width:0},animate:{width:`${A}%`},transition:{duration:.5},className:"bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"})}),(0,y.jsxs)("span",{className:"text-sm text-slate-400 font-medium",children:[S,"/",i.lessons.length]})]}),i.lessons.length>1&&(0,y.jsx)("div",{className:"flex gap-2 overflow-x-auto pb-2 scrollbar-hide",children:i.lessons.map((e,t)=>{let i=s[l.id]?.[e.id],o=h===t;return(0,y.jsx)(rq.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{u(t),p("click")},className:`
                      flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all
                      ${o?"bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg":i?"bg-green-500/20 text-green-400 border border-green-500/30":"bg-slate-800 text-slate-300 hover:bg-slate-700"}
                    `,children:(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsxs)("span",{children:["Урок ",t+1]}),i&&!o&&(0,y.jsx)(aN,{className:"w-4 h-4"})]})},e.id)})}),(0,y.jsxs)(ec,{defaultValue:"theory",className:"flex-1",children:[(0,y.jsxs)(ep,{className:`grid w-full grid-cols-3 ${v?"bg-purple-900/50":"bg-slate-800/50"}`,children:[(0,y.jsxs)(eh,{value:"theory",className:"flex items-center gap-2",children:[(0,y.jsx)(eg,{className:"w-4 h-4"}),(0,y.jsx)("span",{className:"hidden sm:inline",children:"Теория"})]}),(0,y.jsxs)(eh,{value:"examples",className:"flex items-center gap-2",children:[(0,y.jsx)(pY,{className:"w-4 h-4"}),(0,y.jsx)("span",{className:"hidden sm:inline",children:"Примеры"})]}),(0,y.jsxs)(eh,{value:"notes",className:"flex items-center gap-2",children:[(0,y.jsx)(eE,{className:"w-4 h-4"}),(0,y.jsx)("span",{className:"hidden sm:inline",children:"Заметки"})]})]}),(0,y.jsxs)(pV,{className:"h-[350px] mt-4 pr-4",children:[(0,y.jsxs)(eu,{value:"theory",className:"space-y-4 mt-0",children:[(0,y.jsx)(pZ,{lessonId:j.id,title:j.title,type:"theory",className:"mb-4"}),(0,y.jsxs)("div",{className:"flex flex-wrap items-center gap-3 mb-4",children:[(0,y.jsxs)(aV,{className:N.color,children:[v&&(0,y.jsx)("span",{className:"mr-1",children:N.emoji}),N.label]}),(0,y.jsxs)("div",{className:"flex items-center gap-1 text-xs text-slate-400",children:[(0,y.jsx)(aA,{className:"w-3 h-3"}),j.estimatedTime," мин"]}),(0,y.jsxs)("div",{className:"flex items-center gap-1 text-xs text-yellow-400",children:[(0,y.jsx)(eT,{className:"w-3 h-3"}),"+",(()=>{switch(j.difficulty){case"easy":return 15;case"medium":return 25;case"hard":return 40;default:return 20}})()," XP"]}),(0,y.jsx)("div",{className:"flex items-center gap-1",children:[void 0,void 0,void 0].map((e,t)=>(0,y.jsx)(ey,{className:`w-3 h-3 ${t<N.stars?"text-yellow-400 fill-yellow-400":"text-slate-600"}`},t))})]}),(0,y.jsx)(pU,{className:"bg-slate-700/50"}),(0,y.jsx)(rR,{className:`${v?"bg-purple-900/30":"bg-slate-800/30"} border-slate-700/50`,children:(0,y.jsx)(rO,{className:"py-4",children:(0,y.jsx)("div",{className:"prose prose-invert prose-sm max-w-none",children:(0,y.jsx)("p",{className:`leading-relaxed whitespace-pre-wrap ${v?"text-lg":"text-sm"}`,children:j.theory})})})}),v?(0,y.jsxs)("div",{className:"space-y-4 pt-4",children:[(0,y.jsx)(rq.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"flex justify-center",children:q?(0,y.jsxs)("div",{className:"text-center",children:[(0,y.jsx)(rq.div,{animate:{scale:[1,1.1,1]},transition:{duration:1,repeat:1/0},className:"text-6xl mb-2",children:"✅"}),(0,y.jsx)("p",{className:"text-green-400 font-bold text-lg",children:"Урок пройден!"})]}):(0,y.jsxs)(p4,{onClick:k,variant:"success",size:"xl",className:"min-w-[200px]",children:[(0,y.jsx)(pQ,{className:"w-6 h-6"}),"Изучено!",(0,y.jsx)(eS,{className:"w-6 h-6"})]})}),(0,y.jsxs)("div",{className:"flex justify-center gap-4",children:[h>0&&(0,y.jsx)(p4,{onClick:()=>{u(h-1),p("click")},variant:"secondary",size:"lg",children:"← Назад"}),h<i.lessons.length-1&&(0,y.jsx)(p4,{onClick:()=>{u(h+1),p("click")},variant:"primary",size:"lg",children:"Далее →"})]})]}):(0,y.jsxs)("div",{className:"flex items-center justify-between pt-2",children:[(0,y.jsx)("div",{className:"flex items-center gap-3",children:(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)(a3,{id:"complete",checked:q,onCheckedChange:k}),(0,y.jsx)("label",{htmlFor:"complete",className:"text-sm cursor-pointer",children:q?"Пройдено":"Отметить как пройденное"})]})}),(0,y.jsxs)("div",{className:"flex gap-2",children:[h>0&&(0,y.jsx)(tS,{variant:"outline",size:"sm",onClick:()=>u(h-1),children:"Назад"}),h<i.lessons.length-1&&(0,y.jsxs)(tS,{size:"sm",onClick:()=>u(h+1),className:"bg-gradient-to-r from-blue-600 to-purple-600",children:["Далее",(0,y.jsx)(dp,{className:"w-4 h-4 ml-1"})]}),h===i.lessons.length-1&&!q&&(0,y.jsxs)(tS,{size:"sm",onClick:k,className:"bg-gradient-to-r from-green-600 to-teal-600",children:[(0,y.jsx)(aN,{className:"w-4 h-4 mr-1"}),"Завершить"]})]})]})]}),(0,y.jsx)(eu,{value:"examples",className:"space-y-4 mt-0",children:j.examples.length>0?j.examples.map((e,t)=>(0,y.jsx)(rq.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.1*t},children:(0,y.jsx)(rR,{className:`${v?"bg-purple-900/30":"bg-slate-800/30"} border-slate-700/50`,children:(0,y.jsx)(rO,{className:"py-4",children:(0,y.jsxs)("div",{className:"flex items-start gap-3",children:[(0,y.jsx)(rq.div,{whileHover:{scale:1.1,rotate:5},className:`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${v?"bg-gradient-to-br from-yellow-500 to-orange-500":"bg-blue-500/20"}`,children:(0,y.jsx)(ex,{className:`w-5 h-5 ${v?"text-white":"text-blue-400"}`})}),(0,y.jsxs)("div",{children:[(0,y.jsxs)("p",{className:"text-xs text-slate-400 mb-1",children:["Пример ",t+1]}),(0,y.jsx)("p",{className:`leading-relaxed ${v?"text-lg":"text-sm"}`,children:e})]})]})})})},t)):(0,y.jsxs)("div",{className:"text-center py-12",children:[(0,y.jsx)(rq.div,{animate:{y:[0,-10,0]},transition:{duration:2,repeat:1/0},className:"w-16 h-16 mx-auto mb-4 rounded-full bg-slate-800/50 flex items-center justify-center",children:(0,y.jsx)(pY,{className:"w-8 h-8 text-slate-500"})}),(0,y.jsx)("p",{className:"text-slate-400",children:"Примеры пока не добавлены"}),(0,y.jsx)("p",{className:"text-xs text-slate-500 mt-1",children:"Скоро здесь появятся интересные примеры"})]})}),(0,y.jsx)(eu,{value:"notes",className:"space-y-4 mt-0",children:(0,y.jsx)(rR,{className:`${v?"bg-purple-900/30":"bg-slate-800/30"} border-slate-700/50`,children:(0,y.jsxs)(rO,{className:"py-4",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,y.jsx)(eE,{className:"w-4 h-4 text-purple-400"}),(0,y.jsx)("span",{className:"text-sm font-medium",children:"Ваши заметки"})]}),(0,y.jsx)("textarea",{className:`w-full bg-slate-900/50 border border-slate-700 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${v?"h-56 text-lg":"h-48 text-sm"}`,placeholder:v?"✏️ Напиши здесь свои мысли об уроке...":"Напишите свои заметки по этой теме...\n\n• Ключевые моменты\n• Вопросы для обсуждения\n• Идеи для практики",value:a[i.id]||"",onChange:e=>d({...a,[i.id]:e.target.value})}),(0,y.jsxs)("p",{className:"text-xs text-slate-500 mt-2 flex items-center gap-1",children:[(0,y.jsx)(ek,{className:"w-3 h-3"}),"Заметки сохраняются автоматически"]})]})})})]})]}),(0,y.jsxs)("div",{className:"flex items-center justify-between pt-2 border-t border-slate-700/50",children:[(0,y.jsxs)("div",{className:"flex items-center gap-4 text-xs text-slate-400",children:[(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(pK,{className:"w-4 h-4 text-purple-400"}),(0,y.jsxs)("span",{children:[i.lessons.length," уроков"]})]}),(0,y.jsxs)("div",{className:"flex items-center gap-1",children:[(0,y.jsx)(eT,{className:"w-4 h-4 text-yellow-400"}),(0,y.jsxs)("span",{children:["Макс. ",i.lessons.reduce((e,t)=>e+("easy"===t.difficulty?15:"medium"===t.difficulty?25:40),0)," XP"]})]})]}),(0,y.jsx)(aV,{variant:"outline",className:"text-xs",children:l.title})]})]})})]})}let p5=(0,ef.default)("circle-x",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function p6(){let{quizDialogOpen:e,setQuizDialogOpen:t,currentQuiz:i,currentQuizSubject:l,currentQuestionIndex:s,setCurrentQuestionIndex:o,selectedAnswer:n,setSelectedAnswer:r,showResult:a,setShowResult:d,quizScore:c,setQuizScore:p,userStats:h,setUserStats:u,addExperience:m,playSound:f,setPerfectQuizzesCount:x,perfectQuizzesCount:g,setCurrentCombo:b,currentCombo:v,setMaxCombo:w}=ti();if(0===i.length)return null;let j=i[s],T=(s+1)/i.length*100,q=s===i.length-1,k=n===j.correctAnswer;return(0,y.jsx)(c8,{open:e,onOpenChange:t,children:(0,y.jsxs)(pt,{className:"max-w-2xl bg-slate-900 border-slate-700",children:[(0,y.jsxs)(pi,{children:[(0,y.jsxs)("div",{className:"flex items-center justify-between",children:[(0,y.jsxs)("div",{children:[(0,y.jsxs)(ps,{className:"flex items-center gap-2",children:[(0,y.jsx)(ev,{className:"w-5 h-5 text-yellow-400"}),"Тест: ",l]}),(0,y.jsxs)(po,{children:["Вопрос ",s+1," из ",i.length]})]}),(0,y.jsxs)("div",{className:"flex items-center gap-2",children:[(0,y.jsx)(aV,{className:(e=>{switch(e){case"easy":return"bg-green-500/20 text-green-400 border-green-500/30";case"medium":return"bg-yellow-500/20 text-yellow-400 border-yellow-500/30";case"hard":return"bg-red-500/20 text-red-400 border-red-500/30";default:return"bg-slate-500/20 text-slate-400 border-slate-500/30"}})(j.difficulty),children:"easy"===j.difficulty?"Легко":"medium"===j.difficulty?"Средне":"Сложно"}),(0,y.jsxs)("div",{className:"text-sm font-medium text-yellow-400",children:["+",j.points," XP"]})]})]}),(0,y.jsx)(tq,{value:T,className:"h-2 mt-2"})]}),(0,y.jsxs)("div",{className:"py-4",children:[(0,y.jsx)(rR,{className:"bg-slate-800/50 border-slate-700 mb-4",children:(0,y.jsx)(rO,{className:"py-4",children:(0,y.jsx)("p",{className:"text-lg font-medium",children:j.question})})}),(0,y.jsx)("div",{className:"space-y-2",children:j.options.map((e,t)=>{let i=n===t,l=t===j.correctAnswer,s="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50";return a?l?s="bg-green-500/20 border-green-500/50":i&&!l&&(s="bg-red-500/20 border-red-500/50"):i&&(s="bg-blue-500/20 border-blue-500/50"),(0,y.jsx)("button",{className:`w-full text-left p-4 rounded-lg border transition-all ${s} ${!a?"cursor-pointer":"cursor-default"}`,onClick:()=>{!a&&r(t)},disabled:a,children:(0,y.jsxs)("div",{className:"flex items-center gap-3",children:[(0,y.jsx)("div",{className:`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${a&&l?"bg-green-500 text-white":a&&i&&!l?"bg-red-500 text-white":i?"bg-blue-500 text-white":"bg-slate-700"}`,children:String.fromCharCode(65+t)}),(0,y.jsx)("span",{className:"flex-1",children:e}),a&&l&&(0,y.jsx)(aN,{className:"w-5 h-5 text-green-400"}),a&&i&&!l&&(0,y.jsx)(p5,{className:"w-5 h-5 text-red-400"})]})},t)})}),a&&(0,y.jsx)(rR,{className:"mt-4 bg-blue-500/10 border-blue-500/30",children:(0,y.jsx)(rO,{className:"py-3",children:(0,y.jsxs)("p",{className:"text-sm text-blue-300",children:[(0,y.jsx)("strong",{children:"Объяснение:"})," ",j.explanation]})})})]}),(0,y.jsx)(pl,{children:(0,y.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,y.jsxs)("div",{className:"flex items-center gap-2 text-sm",children:[(0,y.jsx)(ek,{className:"w-4 h-4 text-yellow-400"}),(0,y.jsxs)("span",{children:["Счёт: ",c+(a&&k?j.points:0)]})]}),(0,y.jsx)("div",{className:"flex gap-2",children:a?(0,y.jsxs)(tS,{onClick:()=>{if(q){let e=c+(k?j.points:0),t=e===i.reduce((e,t)=>e+t.points,0);t&&x(e=>e+1),u(e=>({...e,quizzesCompleted:e.quizzesCompleted+1,perfectQuizzes:t?e.perfectQuizzes+1:e.perfectQuizzes})),m(e)}else o(s+1),r(null),d(!1)},children:[q?"Завершить":"Далее",(0,y.jsx)(dp,{className:"w-4 h-4 ml-1"})]}):(0,y.jsx)(tS,{onClick:()=>{null!==n&&(d(!0),k?(f("success"),p(e=>e+j.points),b(e=>{let t=e+1;return w(e=>Math.max(e,t)),t})):(f("error"),b(0)))},disabled:null===n,children:"Проверить"})})]})})]})})}var p7="Switch",[p8,p9]=(0,b.createContextScope)(p7),[he,ht]=p8(p7);x.forwardRef((e,t)=>{let{__scopeSwitch:i,name:l,checked:s,defaultChecked:o,required:n,disabled:r,value:a="on",onCheckedChange:d,form:c,...p}=e,[h,u]=x.useState(null),m=(0,w.useComposedRefs)(t,e=>u(e)),f=x.useRef(!1),b=!h||c||!!h.closest("form"),[v,j]=(0,A.useControllableState)({prop:s,defaultProp:o??!1,onChange:d,caller:p7});return(0,y.jsxs)(he,{scope:i,checked:v,disabled:r,children:[(0,y.jsx)(N.Primitive.button,{type:"button",role:"switch","aria-checked":v,"aria-required":n,"data-state":hs(v),"data-disabled":r?"":void 0,disabled:r,value:a,...p,ref:m,onClick:(0,g.composeEventHandlers)(e.onClick,e=>{j(e=>!e),b&&(f.current=e.isPropagationStopped(),f.current||e.stopPropagation())})}),b&&(0,y.jsx)(hl,{control:h,bubbles:!f.current,name:l,value:a,checked:v,required:n,disabled:r,form:c,style:{transform:"translateX(-100%)"}})]})}).displayName=p7;var hi="SwitchThumb";x.forwardRef((e,t)=>{let{__scopeSwitch:i,...l}=e,s=ht(hi,i);return(0,y.jsx)(N.Primitive.span,{"data-state":hs(s.checked),"data-disabled":s.disabled?"":void 0,...l,ref:t})}).displayName=hi;var hl=x.forwardRef(({__scopeSwitch:e,control:t,checked:i,bubbles:l=!0,...s},o)=>{let n=x.useRef(null),r=(0,w.useComposedRefs)(n,o),a=aL(i),d=aF(t);return x.useEffect(()=>{let e=n.current;if(!e)return;let t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(a!==i&&t){let s=new Event("click",{bubbles:l});t.call(e,i),e.dispatchEvent(s)}},[a,i,l]),(0,y.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:i,...s,tabIndex:-1,ref:r,style:{...s.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});function hs(e){return e?"checked":"unchecked"}function ho(){let{progress:e,toggleTopic:t,addExperience:i}=ti(),l=(0,x.useMemo)(()=>{let t=[];return Object.values(e).forEach(e=>{Object.entries(e).forEach(([e,i])=>{i&&t.push(e)})}),t},[e]);(0,x.useCallback)(e=>{console.log("Complete topic:",e)},[]),(0,x.useCallback)((e,t,i)=>{console.log("Complete quiz:",e,t,i)},[]);let[s,o]=(0,x.useState)("learn"),[n,r]=(0,x.useState)(0),[a,d]=(0,x.useState)(!1),[c,p]=(0,x.useState)(null),[h,u]=(0,x.useState)(!1),[m,f]=(0,x.useState)(null),g=e8.find(e=>e.id===n);return(0,y.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden",children:[(0,y.jsxs)("div",{className:"fixed inset-0 overflow-hidden pointer-events-none",children:[(0,y.jsx)("div",{className:"absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"}),(0,y.jsx)("div",{className:"absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"}),(0,y.jsx)("div",{className:"absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"}),[...Array(20)].map((e,t)=>(0,y.jsx)("div",{className:"absolute w-1 h-1 bg-white/30 rounded-full",style:{left:`${100*Math.random()}%`,top:`${100*Math.random()}%`,animationDelay:`${3*Math.random()}s`}},t))]}),(0,y.jsx)(rB,{activeTab:s,setActiveTab:o,selectedGrade:n}),(0,y.jsx)("div",{className:"pl-24 pr-4 pt-20 pb-8",children:(0,y.jsx)("div",{className:"max-w-6xl mx-auto",children:(0,y.jsxs)(ec,{value:s,onValueChange:o,children:[(0,y.jsxs)(eu,{value:"learn",className:"space-y-6",children:[(0,y.jsx)(rV,{grades:e8,selectedGrade:n,onSelectGrade:r}),g&&(0,y.jsx)(aO,{subjects:g.subjects,completedTopics:l,onOpenTopic:e=>{p(e),d(!0)},onStartQuiz:e=>{f(e),u(!0)},gradeId:n})]}),(0,y.jsx)(eu,{value:"games",className:"space-y-6",children:(0,y.jsx)(dP,{gradeId:n,onExperience:i})}),(0,y.jsx)(eu,{value:"progress",children:(0,y.jsx)(dE,{gradeId:n})}),(0,y.jsx)(eu,{value:"achievements",children:(0,y.jsx)(da,{})}),(0,y.jsx)(eu,{value:"tools",className:"space-y-6",children:(0,y.jsx)(dP,{onExperience:i,gradeId:n})})]})})}),(0,y.jsx)(p3,{}),(0,y.jsx)(p6,{})]})}function hn(){return(0,y.jsx)(tt,{children:(0,y.jsx)(ho,{})})}hl.displayName="SwitchBubbleInput",e.s(["default",()=>hn],52683)}]);