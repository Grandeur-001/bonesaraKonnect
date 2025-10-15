import{c as P,L as he,a as F,b as p,F as H,l as Y,J as X,i as g,d as s,f,t as x,I as xe,M as y,v as d,N as G,G as ke,O as Fe,Q as B,m as j,k as A,K as O,w as C,r as we,R as J,h as I,n as _,_ as Ce,S as _e}from"./index-BrP7QYip.js";import{b as D,T as Q,c as Se}from"./Card.styled-GmxDs0O_.js";import{a as Te}from"./Spacing.styled-Df1s7Hl3.js";import{_ as Ve}from"./Hero-2-eQU1Zd8b.js";import{a as $e,b as je}from"./Typography.styled-DYFqND-x.js";/**
 * @license lucide-vue-next v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=P("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=P("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=P("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);/**
 * @license lucide-vue-next v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=P("message-circle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.535.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=P("twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),ze={name:"HollowDotsSpinner",props:{animationDuration:{type:Number,default:1e3},dotSize:{type:Number,default:15},dotsNum:{type:Number,default:3},color:{type:String,default:"#fff"}},computed:{horizontalMargin(){return this.dotSize/2},spinnerStyle(){return{height:`${this.dotSize}px`,width:`${(this.dotSize+this.horizontalMargin*2)*this.dotsNum}px`}},dotStyle(){return{animationDuration:`${this.animationDuration}ms`,width:`${this.dotSize}px`,height:`${this.dotSize}px`,margin:`0 ${this.horizontalMargin}px`,borderWidth:`${this.dotSize/5}px`,borderColor:this.color}},dotsStyles(){const e=[],i=this.animationDuration;for(let a=1;a<=this.dotsNum;a++)e.push({animationDelay:`${i*a*.3}ms`,...this.dotStyle});return e}}};function Pe(e,t,i,a,n,l){return p(),F("div",{class:"hollow-dots-spinner",style:X(l.spinnerStyle)},[(p(!0),F(H,null,Y(l.dotsStyles,(r,u)=>(p(),F("div",{key:u,class:"dot",style:X(r)},null,4))),128))],4)}var Ae=he(ze,[["render",Pe]]);const Le={class:"z-[9999999] opacity-[0.9] h-full w-full fixed top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center bg-black"},qe={class:"flex absolute bottom-6 justify-center flex-col text-center"},De={class:"font-bold"},Ee={class:"text-[var(--text-secondary)]"},We={__name:"RequestLoader",props:{Title:{type:String},Message:{type:String}},setup(e){return(t,i)=>(p(),F("div",Le,[g(f(Ae),{color:"var(--accent-orange)"}),s("div",qe,[s("p",De,x(e.Title),1),s("p",Ee,x(e.Message),1)])]))}},L=xe`
    input, textarea {
        width: 100%;
        padding: 14px 20px;
        border: 1px solid var(--border-gray);
        border-radius: 12px;
        color: var(--text-primary);
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        resize: none;
        box-sizing: border-box;
        background: transparent;
    }

    /* Placeholder styling */
    input::placeholder,
    textarea::placeholder {
        color: var(--text-secondary);
        opacity: 0.8;
        transition: opacity 0.3s ease;
    }

    /* Hover effects */
    input:hover,
    textarea:hover {
        border-color: var(--line-gray);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(-1px);
    }

    input:hover::placeholder,
    textarea:hover::placeholder {
        opacity: 1;
    }

    /* Focus effects */
    input:focus,
    textarea:focus {
        border: 2px solid transparent;
        background: linear-gradient(var(--bg-dark), var(--bg-dark)) padding-box,
                    var(--linear-gradient) border-box;
        box-shadow: 
        0 0 0 1px transparent,
        0 8px 32px rgba(255, 167, 38, 0.15),
        0 4px 16px rgba(239, 83, 80, 0.1);
        transform: translateY(-2px);
    }

    input:focus::placeholder,
    textarea:focus::placeholder {
        opacity: 0.6;
        transform: translateY(-2px);
    }

    /* Active effects */
    input:active,
    textarea:active {
        transform: translateY(0);
        box-shadow: 
        0 0 0 1px transparent,
        0 4px 16px rgba(255, 167, 38, 0.2);
    }

    /* Specific textarea styling */
    textarea {
        min-height: 120px;
        max-height: 300px;
        resize: vertical;
        line-height: 1.6;
    }

    /* Enhanced focus with gradient border animation */
    input:focus,
    textarea:focus {
        animation: borderGlow 2s ease-in-out infinite alternate;
    }

    @keyframes borderGlow {
        0% {
        box-shadow: 
            0 0 0 1px transparent,
            0 8px 32px rgba(255, 167, 38, 0.15),
            0 4px 16px rgba(239, 83, 80, 0.1);
        }
        100% {
        box-shadow: 
            0 0 0 1px transparent,
            0 8px 32px rgba(255, 167, 38, 0.25),
            0 4px 16px rgba(239, 83, 80, 0.2);
        }
    }

    /* Disabled state */
    input:disabled,
    textarea:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        background: rgba(13, 13, 13, 0.5);
        border-color: var(--border-gray);
    }

    input:disabled:hover,
    textarea:disabled:hover {
        transform: none;
        box-shadow: none;
    }

    /* Error state */
    input.error,
    textarea.error {
        border-color: var(--accent-red);
        background: var(--accent-red-faded);
    }

    input.error:focus,
    textarea.error:focus {
        box-shadow: 
        0 0 0 1px transparent,
        0 8px 32px rgba(239, 83, 80, 0.3),
        0 4px 16px rgba(239, 83, 80, 0.2);
    }

    /* Success state */
    input.success,
    textarea.success {
        border-color: var(--accent-orange);
        background: var(--accent-orange-faded);
    }

    input.success:focus,
    textarea.success:focus {
        box-shadow: 
        0 0 0 1px transparent,
        0 8px 32px rgba(255, 167, 38, 0.3),
        0 4px 16px rgba(255, 167, 38, 0.2);
    }

`,Z=y({name:"CCloseButton",props:{dark:Boolean,disabled:Boolean,white:Boolean},emits:["click"],setup(e,{emit:t}){const i=()=>{e.disabled||t("click")};return()=>d("button",{type:"button",class:["btn","btn-close",{"btn-close-white":e.white},e.disabled],"aria-label":"Close",disabled:e.disabled,...e.dark&&{"data-coreui-theme":"dark"},onClick:i})}}),S={type:String,validator:e=>["primary","secondary","success","danger","warning","info","dark","light","link","transparent"].includes(e)},He={type:String,validator:e=>["primary","secondary","success","danger","warning","info","dark","light","primary-emphasis","secondary-emphasis","success-emphasis","danger-emphasis","warning-emphasis","info-emphasis","light-emphasis","body","body-emphasis","body-secondary","body-tertiary","black","black-50","white","white-50"].includes(e)},le=y({name:"CCard",props:{color:S,textBgColor:S,textColor:He},setup(e,{slots:t}){return()=>d("div",{class:["card",{[`bg-${e.color}`]:e.color,[`text-${e.textColor}`]:e.textColor,[`text-bg-${e.textBgColor}`]:e.textBgColor}]},t.default&&t.default())}}),oe=y({name:"CCardBody",setup(e,{slots:t}){return()=>d("div",{class:"card-body"},t.default&&t.default())}}),Ye=y({name:"CForm",props:{validated:Boolean},setup(e,{slots:t}){return()=>d("form",{class:[{"was-validated":e.validated}]},t.default&&t.default())}}),E=y({name:"CFormFeedback",props:{as:{type:String,default:"div"},invalid:Boolean,tooltip:Boolean,valid:Boolean},setup(e,{slots:t}){return()=>d(e.as,{class:[{[`invalid-${e.tooltip?"tooltip":"feedback"}`]:e.invalid,[`valid-${e.tooltip?"tooltip":"feedback"}`]:e.valid}]},t.default&&t.default())}}),ee=y({name:"CFormControlValidation",inheritAttrs:!1,props:{describedby:String,feedback:String,feedbackInvalid:String,feedbackValid:String,invalid:Boolean,tooltipFeedback:Boolean,valid:Boolean},setup(e,{slots:t}){return()=>[e.feedback&&(e.valid||e.invalid)&&d(E,{...e.invalid&&{id:e.describedby},invalid:e.invalid,tooltip:e.tooltipFeedback,valid:e.valid},{default:()=>t.feedback&&t.feedback()||e.feedback}),(e.feedbackInvalid||t.feedbackInvalid)&&d(E,{id:e.describedby,invalid:!0,tooltip:e.tooltipFeedback},{default:()=>t.feedbackInvalid&&t.feedbackInvalid()||e.feedbackInvalid}),(e.feedbackValid||t.feedbackValid)&&d(E,{tooltip:e.tooltipFeedback,valid:!0},{default:()=>t.feedbackValid&&t.feedbackValid()||e.feedbackValid})]}}),te=y({name:"CFormLabel",props:{customClassName:[Array,String]},setup(e,{slots:t}){return()=>d("label",{class:e.customClassName??"form-label"},t.default&&t.default())}}),Ue=y({name:"CFormFloating",setup(e,{slots:t}){return()=>d("div",{class:"form-floating"},t.default&&t.default())}}),ae=y({name:"CFormText",props:{as:{type:String,default:"div"}},setup(e,{slots:t}){return()=>d(e.as,{class:"form-text"},t.default&&t.default())}}),de=y({name:"CFormControlWrapper",inheritAttrs:!1,props:{...ee.props,floatingClassName:String,floatingLabel:String,id:{type:String},label:String,text:String},setup(e,{slots:t}){const i=()=>d(ee,{describedby:e.describedby,feedback:e.feedback,feedbackInvalid:e.feedbackInvalid,feedbackValid:e.feedbackValid,invalid:e.invalid,tooltipFeedback:e.tooltipFeedback,valid:e.valid},{...t.feedback&&{feedback:()=>t.feedback&&t.feedback()},...t.feedbackInvalid&&{feedbackInvalid:()=>t.feedbackInvalid&&t.feedbackInvalid()},...t.feedbackValid&&{feedbackValid:()=>t.feedbackInvalid&&t.feedbackInvalid()}});return()=>e.floatingLabel?d(Ue,{class:e.floatingClassName},()=>[t.default&&t.default(),d(te,{for:e.id},{default:()=>t.label&&t.label()||e.label||e.floatingLabel}),(e.text||t.text)&&d(ae,{id:e.describedby},{default:()=>t.text&&t.text()||e.text}),i()]):[(e.label||t.label)&&d(te,{for:e.id},{default:()=>t.label&&t.label()||e.label}),t.default&&t.default(),(e.text||t.text)&&d(ae,{id:e.describedby},{default:()=>t.text&&t.text()||e.text}),i()]}}),Ge=typeof window>"u"?class extends Object{}:window.File,W=y({name:"CFormInput",props:{disabled:Boolean,feedback:String,feedbackInvalid:String,feedbackValid:String,floatingLabel:String,id:String,invalid:Boolean,label:String,modelValue:[Ge,Number,String],plainText:Boolean,readonly:Boolean,size:{type:String,validator:e=>["sm","lg"].includes(e)},text:String,tooltipFeedback:Boolean,type:{type:String,default:"text"},valid:Boolean},emits:["change","input","update:modelValue"],setup(e,{attrs:t,emit:i,slots:a}){const n=r=>{const u=r.target;i("change",r),i("update:modelValue",u.value)},l=r=>{const u=r.target;i("input",r),i("update:modelValue",u.value)};return()=>d(de,{...typeof t["aria-describedby"]=="string"&&{describedby:t["aria-describedby"]},feedback:e.feedback,feedbackInvalid:e.feedbackInvalid,feedbackValid:e.feedbackValid,floatingLabel:e.floatingLabel,id:e.id,invalid:e.invalid,label:e.label,text:e.text,tooltipFeedback:e.tooltipFeedback,valid:e.valid},{default:()=>d("input",{id:e.id,...t,class:[e.plainText?"form-control-plaintext":"form-control",{"form-control-color":e.type==="color",[`form-control-${e.size}`]:e.size,"is-invalid":e.invalid,"is-valid":e.valid},t.class],disabled:e.disabled,onChange:r=>n(r),onInput:r=>l(r),readonly:e.readonly,type:e.type,...(e.modelValue||e.modelValue===0)&&{value:e.modelValue}},a.default&&a.default()),...a.feedback&&{feedback:()=>a.feedback&&a.feedback()},...a.feedbackInvalid&&{feedbackInvalid:()=>a.feedbackInvalid&&a.feedbackInvalid()},...a.feedbackValid&&{feedbackValid:()=>a.feedbackInvalid&&a.feedbackInvalid()},...a.label&&{label:()=>a.label&&a.label()},...a.text&&{text:()=>a.text&&a.text()}})}}),Re=y({name:"CFormTextarea",props:{disabled:Boolean,feedback:String,feedbackInvalid:String,feedbackValid:String,floatingLabel:String,id:String,invalid:Boolean,label:String,modelValue:String,plainText:Boolean,readonly:Boolean,text:String,tooltipFeedback:Boolean,valid:Boolean},emits:["change","input","update:modelValue"],setup(e,{attrs:t,emit:i,slots:a}){const n=r=>{const u=r.target;i("change",r),i("update:modelValue",u.value)},l=r=>{const u=r.target;i("input",r),i("update:modelValue",u.value)};return()=>d(de,{...typeof t["aria-describedby"]=="string"&&{describedby:t["aria-describedby"]},feedback:e.feedback,feedbackInvalid:e.feedbackInvalid,feedbackValid:e.feedbackValid,floatingLabel:e.floatingLabel,id:e.id,invalid:e.invalid,label:e.label,text:e.text,tooltipFeedback:e.tooltipFeedback,valid:e.valid},{default:()=>d("textarea",{id:e.id,...t,disabled:e.disabled,readonly:e.readonly,class:[e.plainText?"form-control-plaintext":"form-control",{"is-invalid":e.invalid,"is-valid":e.valid},t.class],onChange:r=>n(r),onInput:r=>l(r),...e.modelValue&&{value:e.modelValue}},a.default&&a.default()),...a.feedback&&{feedback:()=>a.feedback&&a.feedback()},...a.feedbackInvalid&&{feedbackInvalid:()=>a.feedbackInvalid&&a.feedbackInvalid()},...a.feedbackValid&&{feedbackValid:()=>a.feedbackInvalid&&a.feedbackInvalid()},...a.label&&{label:()=>a.label&&a.label()},...a.text&&{text:()=>a.text&&a.text()}})}}),Ke=y({name:"CProgressBar",props:{animated:Boolean,color:S,value:{type:Number,default:0},variant:{type:String,validator:e=>e==="striped"}},setup(e,{slots:t}){const i=G("stacked",!1);return()=>d("div",{class:["progress-bar",`bg-${e.color}`,{[`progress-bar-${e.variant}`]:e.variant,"progress-bar-animated":e.animated}],...!i&&{style:{width:`${e.value}%`}}},t.default&&t.default())}}),se=y({name:"CProgress",props:{animated:Boolean,color:S,height:Number,progressBarClassName:String,thin:Boolean,value:{type:Number,default:0},variant:{type:String,validator:e=>e==="striped"},white:Boolean},setup(e,{slots:t}){const i=G("stacked",!1);return()=>d("div",{class:["progress",{"progress-thin":e.thin,"progress-white":e.white}],style:{...e.height?{height:`${e.height}px`}:{},...i?{width:`${e.value}%`}:{}},...e.value!==void 0&&{role:"progressbar","aria-valuenow":e.value,"aria-valuemin":0,"aria-valuemax":100}},t.default&&t.default().some(a=>a.type.name==="CProgressBar")?t.default().map(a=>a.type.name==="CProgressBar"?d(a,{...e.animated&&{animated:e.animated},...e.color&&{color:e.color},...e.value&&{value:e.value},...e.variant&&{variant:e.variant}}):a):d(Ke,{...e.progressBarClassName&&{class:e.progressBarClassName},animated:e.animated,color:e.color,value:e.value,variant:e.variant},()=>t.default&&t.default()))}});y({name:"CToastClose",props:{as:String,...Z.props},emits:["close"],setup(e,{slots:t,emit:i}){const a=G("updateVisible"),n=()=>{i("close"),a(!1)};return()=>e.as?d(ke(e.as),{onClick:()=>{n()}},()=>t.default&&t.default()):d(Z,{...e,onClick:()=>{n()}})}});const Xe={silent:!1,logLevel:"warn"};function T(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}const Je=()=>({func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}),ue=Object.prototype,ce=ue.toString,Qe=ue.hasOwnProperty,fe=/^\s*function (\w+)/;function ie(e){const t=e?.type??e;if(t){const i=t.toString().match(fe);return i?i[1]:""}return""}function Ze(e){if(e==null)return"";const t=e.constructor.toString().match(fe);return t?t[1].replace(/^Async/,""):""}function re(e){return"structuredClone"in globalThis?structuredClone(e):Array.isArray(e)?[...e]:T(e)?Object.assign({},e):e}function et(){}let m=et;const N=(e,t)=>Qe.call(e,t),tt=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},M=Array.isArray||function(t){return ce.call(t)==="[object Array]"},z=e=>ce.call(e)==="[object Function]",U=(e,t)=>T(e)&&N(e,"_vueTypes_name")&&(!t||e._vueTypes_name===t),be=e=>T(e)&&(N(e,"type")||["_vueTypes_name","validator","default","required"].some(t=>N(e,t)));function me(e,t){return Object.defineProperty(e.bind(t),"__original",{value:e})}function $(e,t,i=!1){let a,n=!0,l="";T(e)?a=e:a={type:e};const r=U(a)?a._vueTypes_name+" - ":"";if(be(a)&&a.type!==null){if(a.type===void 0||a.type===!0||!a.required&&t==null)return n;M(a.type)?(n=a.type.some(u=>$(u,t,!0)===!0),l=a.type.map(u=>ie(u)).join(" or ")):(l=ie(a),l==="Array"?n=M(t):l==="Object"?n=T(t):l==="String"||l==="Number"||l==="Boolean"||l==="Function"?n=Ze(t)===l:n=t instanceof a.type)}if(!n){const u=`${r}value "${t}" should be of type "${l}"`;return i===!1?(m(u),!1):u}if(N(a,"validator")&&z(a.validator)){const u=m,v=[];if(m=c=>{v.push(c)},n=a.validator(t),m=u,!n){const c=(v.length>1?"* ":"")+v.join(`
* `);return v.length=0,i===!1?(m(c),n):c}}return n}function k(e,t){const i=Object.defineProperties(t,{_vueTypes_name:{value:e,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(n){if(n===void 0){if(this.type===Boolean||Array.isArray(this.type)&&this.type.includes(Boolean)){this.default=void 0;return}return N(this,"default")&&delete this.default,this}return!z(n)&&$(this,n,!0)!==!0?(m(`${this._vueTypes_name} - invalid default value: "${n}"`),this):(M(n)?this.default=()=>re(n):T(n)?this.default=()=>re(n):this.default=n,this)}}}),{validator:a}=i;return z(a)&&(i.validator=me(a,i)),i}function V(e,t){const i=k(e,t);return Object.defineProperty(i,"validate",{value(a){return z(this.validator)&&m(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=me(a,this),this}})}function q(e){return e.replace(/^(?!\s*$)/gm,"  ")}const at=()=>V("any",{}),it=()=>V("function",{type:Function}),ne=()=>V("boolean",{type:Boolean}),rt=()=>V("string",{type:String}),nt=()=>V("number",{type:Number}),lt=()=>V("array",{type:Array}),ot=()=>V("object",{type:Object}),dt=()=>k("integer",{type:Number,validator(e){const t=tt(e);return t===!1&&m(`integer - "${e}" is not an integer`),t}}),st=()=>k("symbol",{validator(e){const t=typeof e=="symbol";return t===!1&&m(`symbol - invalid value "${e}"`),t}}),ut=()=>Object.defineProperty({type:null,validator(e){const t=e===null;return t===!1&&m("nullable - value should be null"),t}},"_vueTypes_name",{value:"nullable"});function ct(e,t="custom validation failed"){if(typeof e!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return k(e.name||"<<anonymous function>>",{type:null,validator(i){const a=e(i);return a||m(`${this._vueTypes_name} - ${t}`),a}})}function ft(e){if(!M(e))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const t=`oneOf - value should be one of "${e.map(a=>typeof a=="symbol"?a.toString():a).join('", "')}".`,i={validator(a){const n=e.indexOf(a)!==-1;return n||m(t),n}};if(e.indexOf(null)===-1){const a=e.reduce((n,l)=>{if(l!=null){const r=l.constructor;n.indexOf(r)===-1&&n.push(r)}return n},[]);a.length>0&&(i.type=a)}return k("oneOf",i)}function bt(e){if(!M(e))throw new TypeError("[VueTypes error]: You must provide an array as argument");let t=!1,i=!1,a=[];for(let l=0;l<e.length;l+=1){const r=e[l];if(be(r)){if(z(r.validator)&&(t=!0),U(r,"oneOf")&&r.type){a=a.concat(r.type);continue}if(U(r,"nullable")){i=!0;continue}if(r.type===!0||!r.type){m('oneOfType - invalid usage of "true" and "null" as types.');continue}a=a.concat(r.type)}else a.push(r)}a=a.filter((l,r)=>a.indexOf(l)===r);const n=i===!1&&a.length>0?a:null;return t?k("oneOfType",{type:n,validator(l){const r=[],u=e.some(v=>{const c=$(v,l,!0);return typeof c=="string"&&r.push(c),c===!0});return u||m(`oneOfType - provided value does not match any of the ${r.length} passed-in validators:
${q(r.join(`
`))}`),u}}):k("oneOfType",{type:n})}function mt(e){return k("arrayOf",{type:Array,validator(t){let i="";const a=t.every(n=>(i=$(e,n,!0),i===!0));return a||m(`arrayOf - value validation error:
${q(i)}`),a}})}function gt(e){return k("instanceOf",{type:e})}function yt(e){return k("objectOf",{type:Object,validator(t){let i="";if(!T(t))return!1;const a=Object.keys(t).every(n=>(i=$(e,t[n],!0),i===!0));return a||m(`objectOf - value validation error:
${q(i)}`),a}})}function R(e){const t=Object.keys(e),i=t.filter(n=>!!e[n]?.required),a=k("shape",{type:Object,validator(n){if(!T(n))return!1;const l=Object.keys(n);if(i.length>0&&i.some(r=>l.indexOf(r)===-1)){const r=i.filter(u=>l.indexOf(u)===-1);return r.length===1?m(`shape - required property "${r[0]}" is not defined.`):m(`shape - required properties "${r.join('", "')}" are not defined.`),!1}return l.every(r=>{if(t.indexOf(r)===-1)return this._vueTypes_isLoose===!0?!0:(m(`shape - shape definition does not include a "${r}" property. Allowed keys: "${t.join('", "')}".`),!1);const u=e[r],v=$(u,n[r],!0);return typeof v=="string"&&m(`shape - "${r}" property validation error:
 ${q(v)}`),v===!0})}});return Object.defineProperty(a,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(a,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),a}var vt=Object.defineProperty,pt=(e,t,i)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t,i)=>(pt(e,typeof t!="symbol"?t+"":t,i),i);const ht=(()=>{var e;return e=class{static get any(){return at()}static get func(){return it().def(this.defaults.func)}static get bool(){return this.defaults.bool===void 0?ne():ne().def(this.defaults.bool)}static get string(){return rt().def(this.defaults.string)}static get number(){return nt().def(this.defaults.number)}static get array(){return lt().def(this.defaults.array)}static get object(){return ot().def(this.defaults.object)}static get integer(){return dt().def(this.defaults.integer)}static get symbol(){return st()}static get nullable(){return ut()}static extend(...t){m("VueTypes.extend has been removed. Use the ES6+ method instead. See https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#extending-namespaced-validators-in-es6 for details.")}},h(e,"defaults",{}),h(e,"sensibleDefaults"),h(e,"config",Xe),h(e,"custom",ct),h(e,"oneOf",ft),h(e,"instanceOf",gt),h(e,"oneOfType",bt),h(e,"arrayOf",mt),h(e,"objectOf",yt),h(e,"shape",R),h(e,"utils",{validate(t,i){return $(i,t,!0)===!0},toType(t,i,a=!1){return a?V(t,i):k(t,i)}}),e})();function xt(e=Je()){var t;return t=class extends ht{static get sensibleDefaults(){return{...this.defaults}}static set sensibleDefaults(i){if(i===!1){this.defaults={};return}if(i===!0){this.defaults={...e};return}this.defaults={...i}}},h(t,"defaults",{...e}),t}class Gt extends xt(){}y({name:"CWidgetStatsB",props:{color:S,inverse:Boolean,progress:R({color:S,value:{type:Number,default:0}}),text:String,title:String,value:{type:[Number,String],default:0}},setup(e,{slots:t}){return()=>d(le,{class:[{"text-white":e.inverse}],color:e.color},()=>d(oe,{class:"card-body"},()=>[(e.value||t.value)&&d("div",{class:"fs-4 fw-semibold"},{default:()=>t.value&&t.value()||e.value}),(e.title||t.title)&&d("div",{},{default:()=>t.title&&t.title()||e.title}),d(se,{class:"my-2",...e.progress&&e.progress.color&&{color:e.progress.color},height:4,...e.progress&&e.progress.value&&{value:e.progress.value},white:e.inverse}),(e.text||t.text)&&d("small",{class:[e.inverse?"text-white text-opacity-75":"text-body-secondary"]},{default:()=>t.text&&t.text()||e.text})]))}});y({name:"CWidgetStatsC",props:{color:S,inverse:Boolean,progress:R({color:S,value:{type:Number,default:0}}),title:String,value:{type:[Number,String],default:0}},setup(e,{slots:t}){return()=>d(le,{class:[{"text-white":e.inverse}],color:e.color},()=>d(oe,{class:"card-body"},()=>[t.icon&&d("div",{class:["text-end mb-4",e.inverse?"text-white text-opacity-75":"text-body-secondary"]},t.icon&&t.icon()),(e.value||t.value)&&d("div",{class:"fs-4 fw-semibold"},{default:()=>t.value&&t.value()||e.value}),(e.title||t.title)&&d("div",{class:["text-uppercase fw-semibold small",e.inverse?"text-white text-opacity-75":"text-body-secondary"]},{default:()=>t.title&&t.title()||e.title}),d(se,{class:"my-2",...e.progress&&e.progress.color&&{color:e.progress.color},height:4,...e.progress&&e.progress.value&&{value:e.progress.value},white:e.inverse})]))}});function kt(){const{copy:e,copied:t,isSupported:i}=Fe();return{copyText:async n=>{if(!i.value){B.error("Clipboard API not supported");return}try{await e(n),B.success(`${n} copied to clipboard!`,1400)}catch{B.error("Failed to copy text")}},copied:t}}const Ft={class:"overflow-x-hidden"},wt={class:"flex-1 flex items-center justify-center relative px-4"},Ct={class:"w-full max-w-7xl mx-auto py-16"},_t={class:"grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 max-w-[800px] md:max-w-[90%] mx-auto"},St={class:"flex items-center justify-between w-full mb-4"},Tt={class:"w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFFFFF15] to-[#FFFFFF08] flex items-center justify-center text-[#FFFFFF80]"},Vt=["onClick"],$t={class:"mb-4"},jt={class:"text-[16px] font-medium"},Bt={class:"mb-4 w-full"},Ot={class:"text-[14px] font-mono text-[#FFFFFF90] bg-[#FFFFFF05] px-3 py-2 rounded-lg border border-[#F9F8FF08]"},It={class:"text-[12px] text-[#FFFFFF70] leading-relaxed"},Nt={key:0,class:"text-red-500"},Mt={key:0,class:"text-red-500"},zt={key:0,class:"text-red-500"},Pt={key:0,class:"text-red-500"},At={class:"space-y-6"},Lt=["id"],qt={class:"text-[12px] text-[var(--text-secondary)] leading-relaxed"},Rt={__name:"Contact",setup(e){document.title="Bonasera Konnect | Contact Us";const t=[{id:"email",title:"Email Support",badge:"Email",icon:Ie,value:"support@example.com",description:"Get help via email. We typically respond within 24 hours."},{id:"twitter",title:"Twitter/X",badge:"Social Media",icon:Me,value:"@bonasera_konnect",description:"Follow us for updates and quick support on Twitter/X."},{id:"whatsapp",title:"WhatsApp",badge:"Instant Messaging",icon:Ne,value:"+234 800 123 4567",description:"Chat with us directly on WhatsApp for immediate assistance."}],{copyText:i,copied:a}=kt();let n=j(!1);const l=j(""),r=j(""),u=j(""),v=j(""),c=j({name:"",email:"",subject:"",message:""}),ge=w=>/^.+@.+\..+$/.test(w),ye=()=>{let w=!0;return c.value={name:"",email:"",subject:"",message:""},l.value||(c.value.name="Name is required",w=!1),ge(r.value)||(c.value.email="Invalid email",w=!1),u.value.length<3&&(c.value.subject="Subject is too short",w=!1),v.value.length<10&&(c.value.message="Message must be at least 10 characters",w=!1),w},ve=async()=>{if(!ye())return;const w={name:l.value,email:r.value,subject:u.value,message:v.value};try{window.addEventListener("scroll",b=>{b.preventDefault()}),n.value=!0;const o=await _e.post("/contact",w);console.log(o),o.status===200?(B.success(o.data.message,2e3),successMessage=o.data.message,l.value="",r.value="",u.value="",v.value=""):B.danger(o.data.error||"Something went wrong",2e3)}catch(o){const b=o.response?.data?.error||o.response?.data?.message;console.error("Submission error:",o),B.danger(`Failed - ${b}`,2e3)}finally{n.value=!1}},pe=[{id:1,title:"How quickly do you respond to inquiries?",description:"We typically respond to email inquiries within 24 hours. For urgent matters, WhatsApp and Twitter/X usually provide faster response times."},{id:2,title:" What information should I include in my message?",description:"Please include your name, email, a detailed description of your project or inquiry, and any relevant details that might help us understand your needs better."},{id:3,title:"Do you offer custom development services?",description:"Yes, we provide custom development services tailored to your specific requirements. Contact us with your project details, and we'll get back to you with more information."}];return(w,o)=>(p(),F("div",Ft,[f(n)?(p(),A(We,{key:0,Title:"Sending",Message:"Please wait while you message is being sent..."})):O("",!0),s("div",null,[g(f(Te),{class:"pt-10"}),g(Ve,{badge:"Contact Us",title:"Get In Touch",paragraph:"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}),s("div",wt,[o[13]||(o[13]=s("div",{class:"hidden lg:block absolute opacity-5 top-[20%] left-0 w-[400px] h-[400px] rounded-full bg-[#e1c4ff] blur-[120px] -translate-x-1/2"},null,-1)),o[14]||(o[14]=s("div",{class:"hidden lg:block absolute opacity-5 bottom-[20%] right-0 w-[400px] h-[400px] rounded-full bg-[#e1c4ff] blur-[120px] translate-x-1/2"},null,-1)),s("div",Ct,[s("div",_t,[(p(),F(H,null,Y(t,b=>g(f(D),{key:b.id,class:"group bg-[#FFFFFF03] rounded-[16px] p-6 hover:border-[#F9F8FF20] border border-[#F9F8FF0F] transition-all duration-200 cursor-pointer"},{default:C(()=>[s("div",St,[s("div",Tt,[(p(),A(we(b.icon)))]),s("button",{onClick:J(K=>f(i)(b.value),["stop"]),class:"w-12 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 p-2 hover:bg-[#FFFFFF15] rounded-lg transition-all"},[f(a)?(p(),A(f(Be),{key:1,size:"20",color:"green"})):(p(),A(f(Oe),{key:0,size:"20",color:"#444444"}))],8,Vt)]),s("div",$t,[g(f(Q),{class:"flex items-center gap-2 mb-2"},{default:C(()=>[s("h3",jt,x(b.title),1),o[4]||(o[4]=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"lucide lucide-external-link w-4 h-4 text-[#FFFFFF60] opacity-0 group-hover:opacity-100 transition-opacity"},[s("path",{d:"M15 3h6v6"}),s("path",{d:"M10 14 21 3"}),s("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"})],-1))]),_:2,__:[4]},1024),g(f(Se),null,{default:C(()=>[I(x(b.badge),1)]),_:2},1024)]),s("div",Bt,[s("p",Ot,x(b.value),1)]),s("p",It,x(b.description),1)]),_:2},1024)),64))]),g(f(D),{class:"p-[28px] max-w-[800px] mt-0 mx-auto bg-[#FFFFFF03] border border-[var(--border-gray)] rounded-xl shadow-lg mb-10"},{default:C(()=>[g(f($e),{class:"font-bold",style:{"text-align":"center","margin-bottom":"30px",color:"var(--text-clr)"}},{default:C(()=>o[5]||(o[5]=[I("Send us a Message")])),_:1,__:[5]}),g(f(Ye),{onSubmit:J(ve,["prevent"]),class:"space-y-4 w-full"},{default:C(()=>[s("div",{class:_(`${f(L)} group mb-5 flex flex-col gap-2`)},[o[6]||(o[6]=s("label",{for:"name",class:"font-medium"},"Full Name",-1)),g(f(W),{modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=b=>l.value=b),class:_(c.value.name?"error":""),id:"name",type:"text",placeholder:"John Doe"},null,8,["modelValue","class"]),c.value.name?(p(),F("small",Nt,x(c.value.name),1)):O("",!0)],2),s("div",{class:_(`${f(L)} group mb-5 flex flex-col gap-2`)},[o[7]||(o[7]=s("label",{for:"email",class:"font-medium"},"Email",-1)),g(f(W),{modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=b=>r.value=b),class:_(c.value.email?"error":""),id:"email",type:"email",placeholder:"john@example.com"},null,8,["modelValue","class"]),c.value.email?(p(),F("small",Mt,x(c.value.email),1)):O("",!0)],2),s("div",{class:_(`${f(L)} group mb-5 flex flex-col gap-2`)},[o[8]||(o[8]=s("label",{for:"subject",class:"font-medium"},"Subject",-1)),g(f(W),{modelValue:u.value,"onUpdate:modelValue":o[2]||(o[2]=b=>u.value=b),class:_(c.value.subject?"error":""),id:"subject",type:"text",placeholder:"Subject"},null,8,["modelValue","class"]),c.value.subject?(p(),F("small",zt,x(c.value.subject),1)):O("",!0)],2),s("div",{class:_(`${f(L)} group mb-5 flex flex-col gap-2`)},[o[9]||(o[9]=s("label",{for:"message",class:"font-medium"},"Message",-1)),g(f(Re),{modelValue:v.value,"onUpdate:modelValue":o[3]||(o[3]=b=>v.value=b),class:_(c.value.message?"error":""),id:"message",placeholder:"Your message here..."},null,8,["modelValue","class"]),c.value.message?(p(),F("small",Pt,x(c.value.message),1)):O("",!0)],2),o[11]||(o[11]=s("br",null,null,-1)),g(Ce,null,{default:C(()=>o[10]||(o[10]=[I("Submit")])),_:1,__:[10]})]),_:1,__:[11]})]),_:1}),g(f(D),{class:"p-6 md:p-8 border border-[#F9F8FF0F] max-w-[800px] md:max-w-[90%] mx-auto"},{default:C(()=>[g(f(Q),{class:""},{default:C(()=>o[12]||(o[12]=[I("Frequently Asked Questions")])),_:1,__:[12]}),s("div",At,[(p(),F(H,null,Y(pe,(b,K)=>s("div",{key:K,id:"contactFaq-"+b.id,class:"border-b border-[#F9F8FF10] pb-4"},[g(f(je),{class:"mb-2 text-"},{default:C(()=>[I(x(b.title),1)]),_:2},1024),s("p",qt,x(b.description),1)],8,Lt)),64))])]),_:1})])])])]))}};export{Rt as default};
