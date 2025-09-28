import{x as E,J,p as b,k,b as A,w as g,y as R,f as l,A as T,L as Q,M as z,E as Ce,N as re,D as U,O as Ae,P as ce,Q as Ee,F as V,S as $e,U as Be,i as S,V as Ne,G as ke,s as pe,o as te,q as Fe,z as fe,W as Y,B as De,X as Oe,Y as ze,Z as Pe,$ as Re,I as y,a0 as Le,a as W,d as x,l as Z,n as C,u as Ue,t as B,h as P,_ as Ve}from"./index-5qB3zWAt.js";import{_ as je}from"./Hero-2-gan1PoOh.js";import{T as ie,d as se,D as le,b as de}from"./Card.styled-uua4Zg5B.js";import"./ScrollTicker.styled-CXKUa8Jt.js";import{_ as Ke}from"./LinkBtn-B3ZaVFH4.js";function q(e,t){const n=typeof e=="string"&&!t?`${e}Context`:t,a=Symbol(n);return[r=>{const s=Ce(a,r);if(s||s===null)return s;throw new Error(`Injection \`${a.toString()}\` not found. Component must be used within ${Array.isArray(e)?`one of the following components: ${e.join(", ")}`:`\`${e}\``}`)},r=>(Re(a,r),r)]}function He(e){return ze()?(Pe(e),!0):!1}function We(e){let t=!1,n;const a=Be(!0);return(...r)=>(t||(n=a.run(()=>e(...r)),t=!0),n)}function Ge(e){return typeof e=="function"?e():l(e)}const me=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Je=e=>typeof e<"u";function j(e){var t;const n=Ge(e);return(t=n?.$el)!=null?t:n}const ve=me?window:void 0;function Qe(){const e=b(!1),t=Q();return t&&te(()=>{e.value=!0},t),e}function Ye(e){const t=Qe();return T(()=>(t.value,!!e()))}function qe(e){return JSON.parse(JSON.stringify(e))}function Xe(e,t,n={}){const{window:a=ve,...r}=n;let s;const i=Ye(()=>a&&"ResizeObserver"in a),o=()=>{s&&(s.disconnect(),s=void 0)},d=T(()=>Array.isArray(e)?e.map(f=>j(f)):[j(e)]),u=z(d,f=>{if(o(),i.value&&a){s=new ResizeObserver(t);for(const I of f)I&&s.observe(I,r)}},{immediate:!0,flush:"post"}),c=()=>{o(),u()};return He(c),{isSupported:i,stop:c}}function ge(e,t,n,a={}){var r,s,i;const{clone:o=!1,passive:d=!1,eventName:u,deep:c=!1,defaultValue:f,shouldEmit:I}=a,w=Q(),D=n||w?.emit||((r=w?.$emit)==null?void 0:r.bind(w))||((i=(s=w?.proxy)==null?void 0:s.$emit)==null?void 0:i.bind(w?.proxy));let N=u;t||(t="modelValue"),N=N||`update:${t.toString()}`;const p=h=>o?typeof o=="function"?o(h):qe(h):h,m=()=>Je(e[t])?p(e[t]):f,_=h=>{I?I(h)&&D(N,h):D(N,h)};if(d){const h=m(),$=b(h);let M=!1;return z(()=>e[t],O=>{M||(M=!0,$.value=p(O),Y(()=>M=!1))}),z($,O=>{!M&&(O!==e[t]||c)&&_(O)},{deep:c}),$}else return T({get(){return m()},set(h){_(h)}})}function ae(e){return e?e.flatMap(t=>t.type===V?ae(t.children):[t]):[]}function ue(){let e=document.activeElement;if(e==null)return null;for(;e!=null&&e.shadowRoot!=null&&e.shadowRoot.activeElement!=null;)e=e.shadowRoot.activeElement;return e}const[he,Vt]=q("ConfigProvider");function be(e){const t=he({dir:b("ltr")});return T(()=>{var n;return e?.value||((n=t.dir)==null?void 0:n.value)||"ltr"})}function K(){const e=Q(),t=b(),n=T(()=>{var i,o;return["#text","#comment"].includes((i=t.value)==null?void 0:i.$el.nodeName)?(o=t.value)==null?void 0:o.$el.nextElementSibling:j(t)}),a=Object.assign({},e.exposed),r={};for(const i in e.props)Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>e.props[i]});if(Object.keys(a).length>0)for(const i in a)Object.defineProperty(r,i,{enumerable:!0,configurable:!0,get:()=>a[i]});Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>e.vnode.el}),e.exposed=r;function s(i){t.value=i,i&&(Object.defineProperty(r,"$el",{enumerable:!0,configurable:!0,get:()=>i instanceof Element?i:i.$el}),e.exposed=r)}return{forwardRef:s,currentRef:t,currentElement:n}}let Ze=0;function ye(e,t="radix"){const n=he({useId:void 0});return re?`${t}-${re()}`:n.useId?`${t}-${n.useId()}`:`${t}-${++Ze}`}function et(e,t){const n=b(e);function a(r){return t[n.value][r]??n.value}return{state:n,dispatch:r=>{n.value=a(r)}}}const ne=E({name:"PrimitiveSlot",inheritAttrs:!1,setup(e,{attrs:t,slots:n}){return()=>{var a,r;if(!n.default)return null;const s=ae(n.default()),i=s.findIndex(c=>c.type!==Ae);if(i===-1)return s;const o=s[i];(a=o.props)==null||delete a.ref;const d=o.props?ce(t,o.props):t;t.class&&(r=o.props)!=null&&r.class&&delete o.props.class;const u=Ee(o,d);for(const c in d)c.startsWith("on")&&(u.props||(u.props={}),u.props[c]=d[c]);return s.length===1?u:(s[i]=u,s)}}}),L=E({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(e,{attrs:t,slots:n}){const a=e.asChild?"template":e.as;return typeof a=="string"&&["area","img","input"].includes(a)?()=>U(a,t):a!=="template"?()=>U(e.as,t,{default:n.default}):()=>U(ne,t,{default:n.default})}});function xe(){const e=b(),t=T(()=>{var n,a;return["#text","#comment"].includes((n=e.value)==null?void 0:n.$el.nodeName)?(a=e.value)==null?void 0:a.$el.nextElementSibling:j(e)});return{primitiveElement:e,currentElement:t}}function tt(e,t){var n;const a=b({}),r=b("none"),s=b(e),i=e.value?"mounted":"unmounted";let o;const d=((n=t.value)==null?void 0:n.ownerDocument.defaultView)??ve,{state:u,dispatch:c}=et(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),f=p=>{var m;if(me){const _=new CustomEvent(p,{bubbles:!1,cancelable:!1});(m=t.value)==null||m.dispatchEvent(_)}};z(e,async(p,m)=>{var _;const h=m!==p;if(await Y(),h){const $=r.value,M=G(t.value);p?(c("MOUNT"),f("enter"),M==="none"&&f("after-enter")):M==="none"||((_=a.value)==null?void 0:_.display)==="none"?(c("UNMOUNT"),f("leave"),f("after-leave")):m&&$!==M?(c("ANIMATION_OUT"),f("leave")):(c("UNMOUNT"),f("after-leave"))}},{immediate:!0});const I=p=>{const m=G(t.value),_=m.includes(p.animationName),h=u.value==="mounted"?"enter":"leave";if(p.target===t.value&&_&&(f(`after-${h}`),c("ANIMATION_END"),!s.value)){const $=t.value.style.animationFillMode;t.value.style.animationFillMode="forwards",o=d?.setTimeout(()=>{var M;((M=t.value)==null?void 0:M.style.animationFillMode)==="forwards"&&(t.value.style.animationFillMode=$)})}p.target===t.value&&m==="none"&&c("ANIMATION_END")},w=p=>{p.target===t.value&&(r.value=G(t.value))},D=z(t,(p,m)=>{p?(a.value=getComputedStyle(p),p.addEventListener("animationstart",w),p.addEventListener("animationcancel",I),p.addEventListener("animationend",I)):(c("ANIMATION_END"),o!==void 0&&d?.clearTimeout(o),m?.removeEventListener("animationstart",w),m?.removeEventListener("animationcancel",I),m?.removeEventListener("animationend",I))},{immediate:!0}),N=z(u,()=>{const p=G(t.value);r.value=u.value==="mounted"?p:"none"});return fe(()=>{D(),N()}),{isPresent:T(()=>["mounted","unmountSuspended"].includes(u.value))}}function G(e){return e&&getComputedStyle(e).animationName||"none"}const at=E({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(e,{slots:t,expose:n}){var a;const{present:r,forceMount:s}=J(e),i=b(),{isPresent:o}=tt(r,i);n({present:o});let d=t.default({present:o});d=ae(d||[]);const u=Q();if(d&&d?.length>1){const c=(a=u?.parent)!=null&&a.type.name?`<${u.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${c}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(f=>`  - ${f}`).join(`
`)].join(`
`))}return()=>s.value||r.value||o.value?U(t.default({present:o})[0],{ref:c=>{const f=j(c);return typeof f?.hasAttribute>"u"||(f!=null&&f.hasAttribute("data-radix-popper-content-wrapper")?i.value=f.firstElementChild:i.value=f),f}}):null}});$e({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});We(()=>b([]));const nt="data-radix-vue-collection-item",[oe,ot]=q("CollectionProvider");function rt(e=nt){const t=b(new Map),n=b(),a=ot({collectionRef:n,itemMap:t,attrName:e}),{getItems:r}=we(a),s=T(()=>Array.from(a.itemMap.value.values())),i=T(()=>a.itemMap.value.size);return{getItems:r,reactiveItems:s,itemMapSize:i}}const it=E({name:"CollectionSlot",setup(e,{slots:t}){const n=oe(),{primitiveElement:a,currentElement:r}=xe();return z(r,()=>{n.collectionRef.value=r.value}),()=>U(ne,{ref:a},t)}}),st=E({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(e,{slots:t,attrs:n}){const a=oe(),{primitiveElement:r,currentElement:s}=xe();return De(i=>{if(s.value){const o=Oe(s.value);a.itemMap.value.set(o,{ref:s.value,value:e.value}),i(()=>a.itemMap.value.delete(o))}}),()=>U(ne,{...n,[a.attrName]:"",ref:r},t)}});function we(e){const t=e??oe();return{getItems:()=>{const n=t.collectionRef.value;if(!n)return[];const a=Array.from(n.querySelectorAll(`[${t.attrName}]`));return Array.from(t.itemMap.value.values()).sort((r,s)=>a.indexOf(r.ref)-a.indexOf(s.ref))}}}const lt="rovingFocusGroup.onEntryFocus",dt={bubbles:!1,cancelable:!0},ut={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function ct(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function pt(e,t,n){const a=ct(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(a))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(a)))return ut[a]}function _e(e,t=!1){const n=ue();for(const a of e)if(a===n||(a.focus({preventScroll:t}),ue()!==n))return}function ft(e,t){return e.map((n,a)=>e[(t+a)%e.length])}const[mt,vt]=q("RovingFocusGroup"),gt=E({__name:"RovingFocusGroup",props:{orientation:{default:void 0},dir:{},loop:{type:Boolean,default:!1},currentTabStopId:{},defaultCurrentTabStopId:{},preventScrollOnEntryFocus:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},emits:["entryFocus","update:currentTabStopId"],setup(e,{expose:t,emit:n}){const a=e,r=n,{loop:s,orientation:i,dir:o}=J(a),d=be(o),u=ge(a,"currentTabStopId",r,{defaultValue:a.defaultCurrentTabStopId,passive:a.currentTabStopId===void 0}),c=b(!1),f=b(!1),I=b(0),{getItems:w}=rt();function D(p){const m=!f.value;if(p.currentTarget&&p.target===p.currentTarget&&m&&!c.value){const _=new CustomEvent(lt,dt);if(p.currentTarget.dispatchEvent(_),r("entryFocus",_),!_.defaultPrevented){const h=w().map(F=>F.ref).filter(F=>F.dataset.disabled!==""),$=h.find(F=>F.getAttribute("data-active")==="true"),M=h.find(F=>F.id===u.value),O=[$,M,...h].filter(Boolean);_e(O,a.preventScrollOnEntryFocus)}}f.value=!1}function N(){setTimeout(()=>{f.value=!1},1)}return t({getItems:w}),vt({loop:s,dir:d,orientation:i,currentTabStopId:u,onItemFocus:p=>{u.value=p},onItemShiftTab:()=>{c.value=!0},onFocusableItemAdd:()=>{I.value++},onFocusableItemRemove:()=>{I.value--}}),(p,m)=>(A(),k(l(it),null,{default:g(()=>[S(l(L),{tabindex:c.value||I.value===0?-1:0,"data-orientation":l(i),as:p.as,"as-child":p.asChild,dir:l(d),style:{outline:"none"},onMousedown:m[0]||(m[0]=_=>f.value=!0),onMouseup:N,onFocus:D,onBlur:m[1]||(m[1]=_=>c.value=!1)},{default:g(()=>[R(p.$slots,"default")]),_:3},8,["tabindex","data-orientation","as","as-child","dir"])]),_:3}))}}),ht=E({__name:"RovingFocusItem",props:{tabStopId:{},focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!0},allowShiftKey:{type:Boolean},asChild:{type:Boolean},as:{default:"span"}},setup(e){const t=e,n=mt(),a=T(()=>t.tabStopId||ye()),r=T(()=>n.currentTabStopId.value===a.value),{getItems:s}=we();te(()=>{t.focusable&&n.onFocusableItemAdd()}),fe(()=>{t.focusable&&n.onFocusableItemRemove()});function i(o){if(o.key==="Tab"&&o.shiftKey){n.onItemShiftTab();return}if(o.target!==o.currentTarget)return;const d=pt(o,n.orientation.value,n.dir.value);if(d!==void 0){if(o.metaKey||o.ctrlKey||o.altKey||!t.allowShiftKey&&o.shiftKey)return;o.preventDefault();let u=[...s().map(c=>c.ref).filter(c=>c.dataset.disabled!=="")];if(d==="last")u.reverse();else if(d==="prev"||d==="next"){d==="prev"&&u.reverse();const c=u.indexOf(o.currentTarget);u=n.loop.value?ft(u,c+1):u.slice(c+1)}Y(()=>_e(u))}}return(o,d)=>(A(),k(l(st),null,{default:g(()=>[S(l(L),{tabindex:r.value?0:-1,"data-orientation":l(n).orientation.value,"data-active":o.active,"data-disabled":o.focusable?void 0:"",as:o.as,"as-child":o.asChild,onMousedown:d[0]||(d[0]=u=>{o.focusable?l(n).onItemFocus(a.value):u.preventDefault()}),onFocus:d[1]||(d[1]=u=>l(n).onItemFocus(a.value)),onKeydown:i},{default:g(()=>[R(o.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}});function bt(){if(typeof matchMedia=="function")return matchMedia("(pointer:coarse)").matches?"coarse":"fine"}bt();const[X,yt]=q("TabsRoot"),xt=E({__name:"TabsRoot",props:{defaultValue:{},orientation:{default:"horizontal"},dir:{},activationMode:{default:"automatic"},modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,a=t,{orientation:r,dir:s}=J(n),i=be(s);K();const o=ge(n,"modelValue",a,{defaultValue:n.defaultValue,passive:n.modelValue===void 0}),d=b();return yt({modelValue:o,changeModelValue:u=>{o.value=u},orientation:r,dir:i,activationMode:n.activationMode,baseId:ye(void 0,"radix-vue-tabs"),tabsList:d}),(u,c)=>(A(),k(l(L),{dir:l(i),"data-orientation":l(r),"as-child":u.asChild,as:u.as},{default:g(()=>[R(u.$slots,"default",{modelValue:l(o)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),wt=E({__name:"TabsList",props:{loop:{type:Boolean,default:!0},asChild:{type:Boolean},as:{}},setup(e){const t=e,{loop:n}=J(t),{forwardRef:a,currentElement:r}=K(),s=X();return s.tabsList=r,(i,o)=>(A(),k(l(gt),{"as-child":"",orientation:l(s).orientation.value,dir:l(s).dir.value,loop:l(n)},{default:g(()=>[S(l(L),{ref:l(a),role:"tablist","as-child":i.asChild,as:i.as,"aria-orientation":l(s).orientation.value},{default:g(()=>[R(i.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}});function Te(e,t){return`${e}-trigger-${t}`}function Ie(e,t){return`${e}-content-${t}`}const _t=E({__name:"TabsContent",props:{value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(e){const t=e,{forwardRef:n}=K(),a=X(),r=T(()=>Te(a.baseId,t.value)),s=T(()=>Ie(a.baseId,t.value)),i=T(()=>t.value===a.modelValue.value),o=b(i.value);return te(()=>{requestAnimationFrame(()=>{o.value=!1})}),(d,u)=>(A(),k(l(at),{present:i.value,"force-mount":""},{default:g(({present:c})=>[S(l(L),{id:s.value,ref:l(n),"as-child":d.asChild,as:d.as,role:"tabpanel","data-state":i.value?"active":"inactive","data-orientation":l(a).orientation.value,"aria-labelledby":r.value,hidden:!c.value,tabindex:"0",style:Fe({animationDuration:o.value?"0s":void 0})},{default:g(()=>[d.forceMount||i.value?R(d.$slots,"default",{key:0}):pe("",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),Tt=E({__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},asChild:{type:Boolean},as:{default:"button"}},setup(e){const t=e,{forwardRef:n}=K(),a=X(),r=T(()=>Te(a.baseId,t.value)),s=T(()=>Ie(a.baseId,t.value)),i=T(()=>t.value===a.modelValue.value);return(o,d)=>(A(),k(l(ht),{"as-child":"",focusable:!o.disabled,active:i.value},{default:g(()=>[S(l(L),{id:r.value,ref:l(n),role:"tab",type:o.as==="button"?"button":void 0,as:o.as,"as-child":o.asChild,"aria-selected":i.value?"true":"false","aria-controls":s.value,"data-state":i.value?"active":"inactive",disabled:o.disabled,"data-disabled":o.disabled?"":void 0,"data-orientation":l(a).orientation.value,onMousedown:d[0]||(d[0]=ke(u=>{!o.disabled&&u.ctrlKey===!1?l(a).changeModelValue(o.value):u.preventDefault()},["left"])),onKeydown:d[1]||(d[1]=Ne(u=>l(a).changeModelValue(o.value),["enter","space"])),onFocus:d[2]||(d[2]=()=>{const u=l(a).activationMode!=="manual";!i.value&&!o.disabled&&u&&l(a).changeModelValue(o.value)})},{default:g(()=>[R(o.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),It=E({__name:"TabsIndicator",props:{asChild:{type:Boolean},as:{}},setup(e){const t=e,n=X();K();const a=b(),r=b({size:null,position:null});z(()=>[n.modelValue.value,n?.dir.value],async()=>{await Y(),s()},{immediate:!0}),Xe([n.tabsList,a],s);function s(){var i;a.value=(i=n.tabsList.value)==null?void 0:i.querySelector('[role="tab"][data-state="active"]'),a.value&&(n.orientation.value==="horizontal"?r.value={size:a.value.offsetWidth,position:a.value.offsetLeft}:r.value={size:a.value.offsetHeight,position:a.value.offsetTop})}return(i,o)=>typeof r.value.size=="number"?(A(),k(l(L),ce({key:0},t,{style:{"--radix-tabs-indicator-size":`${r.value.size}px`,"--radix-tabs-indicator-position":`${r.value.position}px`}}),{default:g(()=>[R(i.$slots,"default")]),_:3},16,["style"])):pe("",!0)}}),St=[{id:1,imageUrl:"https://solution25.com/wp-content/uploads/2022/08/ui-ux-design-for-beginners-2048x1560.jpg",badge:"UI/UX",title:"5 Principles We Use to Design User-Friendly Interfaces",description:"Explore the design principles that guide our team in creating intuitive, accessible, and delightful user experiences.",readmore:"/blog/ui-ux-principles"},{id:2,imageUrl:"https://www.simplilearn.com/ice9/free_resources_article_thumb/is_web_development_good_career.jpg",badge:"Development",title:"React vs Vue vs Angular: What’s Best for Your Project in 2025",description:" A breakdown of the top frontend frameworks, their strengths, weaknesses, and when to use each.",readmore:"/blog/framework-comparison"},{id:3,imageUrl:"https://matimtl.ca/wp-content/uploads/2022/04/app20development20cost.jpg",badge:"Mobile",title:"Cross-Platform vs Native Apps: Which Should You Build?",description:"Weigh the pros and cons of native vs cross-platform mobile development to make the right choice for your business.",readmore:"/blog/cross-vs-native"}],ee=[{id:1,name:"web-dev",title:"Web Development",category:"Web Development",categoryClass:"",contentTitle:"Building Modern Web Applications with Next.js 15",description:"Discover the latest features and best practices for creating lightning-fast, scalable web applications. From server components to advanced routing, we'll guide you through the cutting-edge techniques that define modern web development.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Sarah Chen",date:"Dec 15, 2024",readTime:"8 min read",badge:{text:"Latest",type:"latest"}},{id:2,name:"ui-ux",title:"UI/UX Design",category:"UI/UX Design",categoryClass:"ui-tag",contentTitle:"The Psychology of User Interface Design",description:"Explore how cognitive psychology principles can transform your design process. Learn to create interfaces that not only look stunning but also provide intuitive user experiences that convert visitors into loyal customers.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Marcus Rodriguez",date:"Dec 12, 2024",readTime:"12 min read",badge:{text:"Trending",type:"trending"}},{id:3,name:"app-dev",title:"App Development",category:"App Development",categoryClass:"app-tag",contentTitle:"Cross-Platform Mobile Apps: React Native vs Flutter",description:"A comprehensive comparison of the two leading cross-platform frameworks. Discover which technology stack aligns with your project goals and learn the pros and cons from real-world development experiences.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Alex Kim",date:"Dec 10, 2024",readTime:"15 min read",badge:{text:"Featured",type:"featured"}},{id:4,name:"tech-trends",title:"Tech Trends",category:"Tech Trends",categoryClass:"trends-tag",contentTitle:"AI Integration in Modern Software Development",description:"How artificial intelligence is revolutionizing the way we build software. From automated code generation to intelligent testing, explore the tools and techniques that are shaping the future of development workflows.",image:"https://th.bing.com/th/id/OIP.sClZQ7mHH6z1J5K-MLGL3QHaFJ?w=262&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",author:"Dr. Emily Watson",date:"Dec 8, 2024",readTime:"10 min read",badge:{text:"Hot",type:"hot"}}],Mt={class:"p-7 md:p-9"},Ct={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 md:p-9"},At=["src"],Et={class:"p-6 flex flex-col flex-1"},$t={class:"bg-[var(--fading-gray)] px-6 py-2 w-32 rounded-full flex justify-center items-center text-sm text-[var(--text-secondary)] mb-2"},Bt=["src","alt"],Nt={class:"author"},kt={class:"date"},Ft={class:"read-time"},Dt={class:"w-[190px]"},jt={__name:"Blog",setup(e){document.title="Bonasera Konnect | Blogs",b("first");const t="Bonasera Konnect";Ue();const n=y`
      background: var(--bg-dark);
      min-height: 100vh;
      padding: 2rem 1rem;
    `,a=Le`
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    `,r=y`
      position: relative;
      display: flex;
      gap: 0.25rem;
      backdrop-filter: blur(10px);
      padding: 0.375rem;
      border-radius: 16px;
      border: 1px solid var(--border-gray);
      overflow-x: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &:hover{
        background: var(--fading-gray);
      }
      &::-webkit-scrollbar {
        display: none;
      }

      /* Mobile responsiveness */
      @media (max-width: 640px) {
        gap: 0.125rem;
        padding: 0.25rem;
        border-radius: 12px;
      }

      @media (max-width: 320px) {
        padding: 0.1875rem;
        gap: 0.0625rem;
      }
    `,s=y`
      position: relative;
      background: transparent;
      color: var(--text-secondary);
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.25rem;
      padding: 0.75rem 1.5rem;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
      min-width: fit-content;
      z-index: 2;

      &:hover {
        color: var(--text-primary);
        background: var(--accent-red-faded);
        transform: translateY(-1px);
      }

      &[data-state="active"] {
        background: var(--linear-gradient);
        color: white;
        box-shadow: 
          0 4px 12px rgba(239, 83, 80, 0.4),
          0 2px 4px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid var(--accent-orange);
        outline-offset: 2px;
      }

      /* Mobile responsiveness */
      @media (max-width: 768px) {
        padding: 0.625rem 1.25rem;
        font-size: 0.8125rem;
      }

      @media (max-width: 640px) {
        padding: 0.5rem 1rem;
        font-size: 0.75rem;
        border-radius: 10px;
      }

      @media (max-width: 480px) {
        padding: 0.4375rem 0.875rem;
        font-size: 0.6875rem;
      }

      @media (max-width: 320px) {
        padding: 0.375rem 0.75rem;
        font-size: 0.625rem;
        border-radius: 8px;
      }
    `,i=y`
      // position: absolute;
      // background: red;
      // height: 100px;
      // border-radius: 12px;
      // transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      // z-index: 1;
      // box-shadow: 
      //   0 4px 12px rgba(239, 83, 80, 0.4),
      //   0 2px 4px rgba(0, 0, 0, 0.2);

      // @media (max-width: 640px) {
      //   border-radius: 10px;
      // }

      // @media (max-width: 320px) {
      //   border-radius: 8px;
      // }
    `,o=y`
      animation: ${a} 0.5s ease-in-out;
    `,d=y`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: center;
      border: 1px solid var(--line-gray);
      border-radius: 16px;
      padding: 2rem;
      backdrop-filter: blur(10px);

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
      }

      @media (max-width: 480px) {
        padding: 1.9rem;
        gap: 1.5rem;
      }


    `,u=y`
      position: relative;
      overflow: hidden;
      border-radius: 12px;
    `,c=y`
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
      transition: transform 0.3s ease;

      &:hover{
        transform: scale(1.05);
      }
    `,f=y`
      position: absolute;
      top: 1rem;
      right: 1rem;
    `,I=y`
      background: var(--linear-gradient);
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    `,w=y`
      background: linear-gradient(90deg, #9C27B0 0%, #E91E63 100%);
    `,D=y`
      background: linear-gradient(90deg, #9C27B0 0%, #E91E63 100%);
    `,N=y`
      background: linear-gradient(90deg, #2196F3 0%, #00BCD4 100%);
    `,p=y`
      background: linear-gradient(90deg, #FF5722 0%, #FF9800 100%);
    `,m=y`
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    `,_=y`
      display: inline-block;
      background: var(--accent-red-faded);
      color: var(--accent-red);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      width: fit-content;
    `,h=y`
      background: var(--accent-orange-faded);
      color: var(--accent-orange);
    `,$=y`
      background: rgba(33, 150, 243, 0.1);
      color: #2196F3;
    `,M=y`
      background: rgba(156, 39, 176, 0.1);
      color: #9C27B0;
    `,O=y`
      display: flex;
      gap: 1.5rem;
      font-size: 0.875rem;
      color: var(--text-secondary);

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    `,F={"ui-tag":h,"app-tag":$,"trends-tag":M},Se={latest:w,trending:D,featured:N,hot:p};return(Ot,H)=>(A(),W(V,null,[x("div",Mt,[S(je,{badge:`${l(t)}'s Blog`,title:"Insights, Innovation & Tech Stories",paragraph:"Explore expert articles, industry trends, and behind-the-scenes stories from our engineers, designers, and innovators at Bonasera Konnect."},null,8,["badge"])]),x("div",Ct,[(A(!0),W(V,null,Z(l(St),(v,Me)=>(A(),k(l(de),{key:Me,id:v.id,class:"float-in group flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"},{default:g(()=>[x("img",{src:v.imageUrl,alt:"Blog Post",class:"object-cover w-full h-52 group-hover:scale-125 transition-all"},null,8,At),x("div",Et,[x("span",$t,B(v.badge),1),S(l(ie),{class:C(l(se))},{default:g(()=>[P(B(v.title),1)]),_:2},1032,["class"]),S(l(le),{class:"flex-1"},{default:g(()=>[P(B(v.description),1)]),_:2},1024),S(Ke,{href:v.readmore},{default:g(()=>H[0]||(H[0]=[P(" Read more ")])),_:2,__:[0]},1032,["href"])])]),_:2},1032,["id"]))),128))]),x("div",{class:C(`${n} p-5`)},[S(l(xt),{"default-value":l(ee)[0]?.name,class:"w-full"},{default:g(()=>[S(l(wt),{class:C(r)},{default:g(()=>[(A(!0),W(V,null,Z(l(ee),v=>(A(),k(l(Tt),{key:v.name,value:v.name,class:C(s)},{default:g(()=>[P(B(v.title),1)]),_:2},1032,["value"]))),128))]),_:1}),S(l(It),{class:C(i)}),x("div",null,[(A(!0),W(V,null,Z(l(ee),v=>(A(),k(l(_t),{id:v.id,key:v.name,value:v.name,"aria-label":v.name},{default:g(()=>[x("div",{class:C(`${o} mt-[2rem]`)},[S(l(de),{class:C(d)},{default:g(()=>[x("div",{class:C(u)},[x("img",{src:v.image,alt:v.title,class:C(c)},null,8,Bt),x("div",{class:C(f)},[x("div",{class:C([I,Se[v.badge.type]])},B(v.badge.text),3)])]),x("div",{class:C(m)},[x("div",{class:C([_,F[v.categoryClass]])},B(v.category),3),S(l(ie),{class:C(l(se))},{default:g(()=>[P(B(v.contentTitle),1)]),_:2},1032,["class"]),S(l(le),{class:"w-full"},{default:g(()=>[P(B(v.description),1)]),_:2},1024),x("div",{class:C(O)},[x("span",Nt,"By "+B(v.author),1),x("span",kt,B(v.date),1),x("span",Ft,B(v.readTime),1)]),x("div",Dt,[S(Ve,{class:"w-fit"},{default:g(()=>H[1]||(H[1]=[P(" Read Full Article ")])),_:1,__:[1]})])])]),_:2},1024)],2)]),_:2},1032,["id","value","aria-label"]))),128))])]),_:1},8,["default-value"])],2)],64))}};export{jt as default};
