(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=s(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qs(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const j={},rt=[],ke=()=>{},Zi=()=>!1,as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Gs=e=>e.startsWith("onUpdate:"),ue=Object.assign,zs=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Qi=Object.prototype.hasOwnProperty,L=(e,t)=>Qi.call(e,t),$=Array.isArray,lt=e=>Ht(e)==="[object Map]",fs=e=>Ht(e)==="[object Set]",_n=e=>Ht(e)==="[object Date]",D=e=>typeof e=="function",te=e=>typeof e=="string",Me=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",Gn=e=>(Y(e)||D(e))&&D(e.then)&&D(e.catch),zn=Object.prototype.toString,Ht=e=>zn.call(e),Xi=e=>Ht(e).slice(8,-1),Jn=e=>Ht(e)==="[object Object]",Js=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ct=qs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),us=e=>{const t=Object.create(null);return s=>t[s]||(t[s]=e(s))},eo=/-(\w)/g,Se=us(e=>e.replace(eo,(t,s)=>s?s.toUpperCase():"")),to=/\B([A-Z])/g,et=us(e=>e.replace(to,"-$1").toLowerCase()),ds=us(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=us(e=>e?`on${ds(e)}`:""),je=(e,t)=>!Object.is(e,t),zt=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Fs=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Xt=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let vn;const hs=()=>vn||(vn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ys(e){if($(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],i=te(n)?oo(n):Ys(n);if(i)for(const o in i)t[o]=i[o]}return t}else if(te(e)||Y(e))return e}const so=/;(?![^(]*\))/g,no=/:([^]+)/,io=/\/\*[^]*?\*\//g;function oo(e){const t={};return e.replace(io,"").split(so).forEach(s=>{if(s){const n=s.split(no);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function we(e){let t="";if(te(e))t=e;else if($(e))for(let s=0;s<e.length;s++){const n=we(e[s]);n&&(t+=n+" ")}else if(Y(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const ro="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lo=qs(ro);function Yn(e){return!!e||e===""}function co(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=ps(e[n],t[n]);return s}function ps(e,t){if(e===t)return!0;let s=_n(e),n=_n(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=Me(e),n=Me(t),s||n)return e===t;if(s=$(e),n=$(t),s||n)return s&&n?co(e,t):!1;if(s=Y(e),n=Y(t),s||n){if(!s||!n)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),a=t.hasOwnProperty(r);if(l&&!a||!l&&a||!ps(e[r],t[r]))return!1}}return String(e)===String(t)}function ao(e,t){return e.findIndex(s=>ps(s,t))}const Zn=e=>!!(e&&e.__v_isRef===!0),ee=e=>te(e)?e:e==null?"":$(e)||Y(e)&&(e.toString===zn||!D(e.toString))?Zn(e)?ee(e.value):JSON.stringify(e,Qn,2):String(e),Qn=(e,t)=>Zn(t)?Qn(e,t.value):lt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,i],o)=>(s[Cs(n,o)+" =>"]=i,s),{})}:fs(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Cs(s))}:Me(t)?Cs(t):Y(t)&&!$(t)&&!Jn(t)?String(t):t,Cs=(e,t="")=>{var s;return Me(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pe;class fo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=pe,!t&&pe&&(this.index=(pe.scopes||(pe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=pe;try{return pe=this,t()}finally{pe=s}}}on(){++this._on===1&&(this.prevScope=pe,pe=this)}off(){this._on>0&&--this._on===0&&(pe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function uo(){return pe}let G;const Ts=new WeakSet;class Xn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,pe&&pe.active&&pe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ts.has(this)&&(Ts.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ti(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yn(this),si(this);const t=G,s=xe;G=this,xe=!0;try{return this.fn()}finally{ni(this),G=t,xe=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xs(t);this.deps=this.depsTail=void 0,yn(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ts.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ds(this)&&this.run()}get dirty(){return Ds(this)}}let ei=0,Tt,It;function ti(e,t=!1){if(e.flags|=8,t){e.next=It,It=e;return}e.next=Tt,Tt=e}function Zs(){ei++}function Qs(){if(--ei>0)return;if(It){let t=It;for(It=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Tt;){let t=Tt;for(Tt=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function si(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function ni(e){let t,s=e.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),Xs(n),ho(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=s}function Ds(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(ii(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function ii(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===kt)||(e.globalVersion=kt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ds(e))))return;e.flags|=2;const t=e.dep,s=G,n=xe;G=e,xe=!0;try{si(e);const i=e.fn(e._value);(t.version===0||je(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{G=s,xe=n,ni(e),e.flags&=-3}}function Xs(e,t=!1){const{dep:s,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let o=s.computed.deps;o;o=o.nextDep)Xs(o,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function ho(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let xe=!0;const oi=[];function We(){oi.push(xe),xe=!1}function Ne(){const e=oi.pop();xe=e===void 0?!0:e}function yn(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=G;G=void 0;try{t()}finally{G=s}}}let kt=0;class po{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class en{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!G||!xe||G===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==G)s=this.activeLink=new po(G,this),G.deps?(s.prevDep=G.depsTail,G.depsTail.nextDep=s,G.depsTail=s):G.deps=G.depsTail=s,ri(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=G.depsTail,s.nextDep=void 0,G.depsTail.nextDep=s,G.depsTail=s,G.deps===s&&(G.deps=n)}return s}trigger(t){this.version++,kt++,this.notify(t)}notify(t){Zs();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Qs()}}}function ri(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)ri(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Hs=new WeakMap,Xe=Symbol(""),Ws=Symbol(""),Mt=Symbol("");function ie(e,t,s){if(xe&&G){let n=Hs.get(e);n||Hs.set(e,n=new Map);let i=n.get(s);i||(n.set(s,i=new en),i.map=n,i.key=s),i.track()}}function De(e,t,s,n,i,o){const r=Hs.get(e);if(!r){kt++;return}const l=a=>{a&&a.trigger()};if(Zs(),t==="clear")r.forEach(l);else{const a=$(e),d=a&&Js(s);if(a&&s==="length"){const u=Number(n);r.forEach((p,C)=>{(C==="length"||C===Mt||!Me(C)&&C>=u)&&l(p)})}else switch((s!==void 0||r.has(void 0))&&l(r.get(s)),d&&l(r.get(Mt)),t){case"add":a?d&&l(r.get("length")):(l(r.get(Xe)),lt(e)&&l(r.get(Ws)));break;case"delete":a||(l(r.get(Xe)),lt(e)&&l(r.get(Ws)));break;case"set":lt(e)&&l(r.get(Xe));break}}Qs()}function nt(e){const t=V(e);return t===e?t:(ie(t,"iterate",Mt),ye(e)?t:t.map(se))}function gs(e){return ie(e=V(e),"iterate",Mt),e}const go={__proto__:null,[Symbol.iterator](){return Is(this,Symbol.iterator,se)},concat(...e){return nt(this).concat(...e.map(t=>$(t)?nt(t):t))},entries(){return Is(this,"entries",e=>(e[1]=se(e[1]),e))},every(e,t){return $e(this,"every",e,t,void 0,arguments)},filter(e,t){return $e(this,"filter",e,t,s=>s.map(se),arguments)},find(e,t){return $e(this,"find",e,t,se,arguments)},findIndex(e,t){return $e(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $e(this,"findLast",e,t,se,arguments)},findLastIndex(e,t){return $e(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $e(this,"forEach",e,t,void 0,arguments)},includes(...e){return Es(this,"includes",e)},indexOf(...e){return Es(this,"indexOf",e)},join(e){return nt(this).join(e)},lastIndexOf(...e){return Es(this,"lastIndexOf",e)},map(e,t){return $e(this,"map",e,t,void 0,arguments)},pop(){return yt(this,"pop")},push(...e){return yt(this,"push",e)},reduce(e,...t){return Sn(this,"reduce",e,t)},reduceRight(e,...t){return Sn(this,"reduceRight",e,t)},shift(){return yt(this,"shift")},some(e,t){return $e(this,"some",e,t,void 0,arguments)},splice(...e){return yt(this,"splice",e)},toReversed(){return nt(this).toReversed()},toSorted(e){return nt(this).toSorted(e)},toSpliced(...e){return nt(this).toSpliced(...e)},unshift(...e){return yt(this,"unshift",e)},values(){return Is(this,"values",se)}};function Is(e,t,s){const n=gs(e),i=n[t]();return n!==e&&!ye(e)&&(i._next=i.next,i.next=()=>{const o=i._next();return o.value&&(o.value=s(o.value)),o}),i}const mo=Array.prototype;function $e(e,t,s,n,i,o){const r=gs(e),l=r!==e&&!ye(e),a=r[t];if(a!==mo[t]){const p=a.apply(e,o);return l?se(p):p}let d=s;r!==e&&(l?d=function(p,C){return s.call(this,se(p),C,e)}:s.length>2&&(d=function(p,C){return s.call(this,p,C,e)}));const u=a.call(r,d,n);return l&&i?i(u):u}function Sn(e,t,s,n){const i=gs(e);let o=s;return i!==e&&(ye(e)?s.length>3&&(o=function(r,l,a){return s.call(this,r,l,a,e)}):o=function(r,l,a){return s.call(this,r,se(l),a,e)}),i[t](o,...n)}function Es(e,t,s){const n=V(e);ie(n,"iterate",Mt);const i=n[t](...s);return(i===-1||i===!1)&&on(s[0])?(s[0]=V(s[0]),n[t](...s)):i}function yt(e,t,s=[]){We(),Zs();const n=V(e)[t].apply(e,s);return Qs(),Ne(),n}const _o=qs("__proto__,__v_isRef,__isVue"),li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Me));function vo(e){Me(e)||(e=String(e));const t=V(this);return ie(t,"has",e),t.hasOwnProperty(e)}class ci{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return o;if(s==="__v_raw")return n===(i?o?Oo:di:o?ui:fi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const r=$(t);if(!i){let a;if(r&&(a=go[s]))return a;if(s==="hasOwnProperty")return vo}const l=Reflect.get(t,s,re(t)?t:n);return(Me(s)?li.has(s):_o(s))||(i||ie(t,"get",s),o)?l:re(l)?r&&Js(s)?l:l.value:Y(l)?i?hi(l):sn(l):l}}class ai extends ci{constructor(t=!1){super(!1,t)}set(t,s,n,i){let o=t[s];if(!this._isShallow){const a=Be(o);if(!ye(n)&&!Be(n)&&(o=V(o),n=V(n)),!$(t)&&re(o)&&!re(n))return a?!1:(o.value=n,!0)}const r=$(t)&&Js(s)?Number(s)<t.length:L(t,s),l=Reflect.set(t,s,n,re(t)?t:i);return t===V(i)&&(r?je(n,o)&&De(t,"set",s,n):De(t,"add",s,n)),l}deleteProperty(t,s){const n=L(t,s);t[s];const i=Reflect.deleteProperty(t,s);return i&&n&&De(t,"delete",s,void 0),i}has(t,s){const n=Reflect.has(t,s);return(!Me(s)||!li.has(s))&&ie(t,"has",s),n}ownKeys(t){return ie(t,"iterate",$(t)?"length":Xe),Reflect.ownKeys(t)}}class yo extends ci{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const So=new ai,bo=new yo,wo=new ai(!0);const Ns=e=>e,Kt=e=>Reflect.getPrototypeOf(e);function xo(e,t,s){return function(...n){const i=this.__v_raw,o=V(i),r=lt(o),l=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,d=i[e](...n),u=s?Ns:t?es:se;return!t&&ie(o,"iterate",a?Ws:Xe),{next(){const{value:p,done:C}=d.next();return C?{value:p,done:C}:{value:l?[u(p[0]),u(p[1])]:u(p),done:C}},[Symbol.iterator](){return this}}}}function qt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Co(e,t){const s={get(i){const o=this.__v_raw,r=V(o),l=V(i);e||(je(i,l)&&ie(r,"get",i),ie(r,"get",l));const{has:a}=Kt(r),d=t?Ns:e?es:se;if(a.call(r,i))return d(o.get(i));if(a.call(r,l))return d(o.get(l));o!==r&&o.get(i)},get size(){const i=this.__v_raw;return!e&&ie(V(i),"iterate",Xe),Reflect.get(i,"size",i)},has(i){const o=this.__v_raw,r=V(o),l=V(i);return e||(je(i,l)&&ie(r,"has",i),ie(r,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const r=this,l=r.__v_raw,a=V(l),d=t?Ns:e?es:se;return!e&&ie(a,"iterate",Xe),l.forEach((u,p)=>i.call(o,d(u),d(p),r))}};return ue(s,e?{add:qt("add"),set:qt("set"),delete:qt("delete"),clear:qt("clear")}:{add(i){!t&&!ye(i)&&!Be(i)&&(i=V(i));const o=V(this);return Kt(o).has.call(o,i)||(o.add(i),De(o,"add",i,i)),this},set(i,o){!t&&!ye(o)&&!Be(o)&&(o=V(o));const r=V(this),{has:l,get:a}=Kt(r);let d=l.call(r,i);d||(i=V(i),d=l.call(r,i));const u=a.call(r,i);return r.set(i,o),d?je(o,u)&&De(r,"set",i,o):De(r,"add",i,o),this},delete(i){const o=V(this),{has:r,get:l}=Kt(o);let a=r.call(o,i);a||(i=V(i),a=r.call(o,i)),l&&l.call(o,i);const d=o.delete(i);return a&&De(o,"delete",i,void 0),d},clear(){const i=V(this),o=i.size!==0,r=i.clear();return o&&De(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=xo(i,e,t)}),s}function tn(e,t){const s=Co(e,t);return(n,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(L(s,i)&&i in n?s:n,i,o)}const To={get:tn(!1,!1)},Io={get:tn(!1,!0)},Eo={get:tn(!0,!1)};const fi=new WeakMap,ui=new WeakMap,di=new WeakMap,Oo=new WeakMap;function Ao(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Po(e){return e.__v_skip||!Object.isExtensible(e)?0:Ao(Xi(e))}function sn(e){return Be(e)?e:nn(e,!1,So,To,fi)}function ko(e){return nn(e,!1,wo,Io,ui)}function hi(e){return nn(e,!0,bo,Eo,di)}function nn(e,t,s,n,i){if(!Y(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Po(e);if(o===0)return e;const r=i.get(e);if(r)return r;const l=new Proxy(e,o===2?n:s);return i.set(e,l),l}function ct(e){return Be(e)?ct(e.__v_raw):!!(e&&e.__v_isReactive)}function Be(e){return!!(e&&e.__v_isReadonly)}function ye(e){return!!(e&&e.__v_isShallow)}function on(e){return e?!!e.__v_raw:!1}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Mo(e){return!L(e,"__v_skip")&&Object.isExtensible(e)&&Fs(e,"__v_skip",!0),e}const se=e=>Y(e)?sn(e):e,es=e=>Y(e)?hi(e):e;function re(e){return e?e.__v_isRef===!0:!1}function X(e){return Ro(e,!1)}function Ro(e,t){return re(e)?e:new $o(e,t)}class $o{constructor(t,s){this.dep=new en,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:V(t),this._value=s?t:se(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||ye(t)||Be(t);t=n?t:V(t),je(t,s)&&(this._rawValue=t,this._value=n?t:se(t),this.dep.trigger())}}function Fo(e){return re(e)?e.value:e}const Do={get:(e,t,s)=>t==="__v_raw"?e:Fo(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const i=e[t];return re(i)&&!re(s)?(i.value=s,!0):Reflect.set(e,t,s,n)}};function pi(e){return ct(e)?e:new Proxy(e,Do)}class Ho{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new en(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=kt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return ti(this,!0),!0}get value(){const t=this.dep.track();return ii(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Wo(e,t,s=!1){let n,i;return D(e)?n=e:(n=e.get,i=e.set),new Ho(n,i,s)}const Gt={},ts=new WeakMap;let Ze;function No(e,t=!1,s=Ze){if(s){let n=ts.get(s);n||ts.set(s,n=[]),n.push(e)}}function Vo(e,t,s=j){const{immediate:n,deep:i,once:o,scheduler:r,augmentJob:l,call:a}=s,d=E=>i?E:ye(E)||i===!1||i===0?He(E,1):He(E);let u,p,C,O,I=!1,y=!1;if(re(e)?(p=()=>e.value,I=ye(e)):ct(e)?(p=()=>d(e),I=!0):$(e)?(y=!0,I=e.some(E=>ct(E)||ye(E)),p=()=>e.map(E=>{if(re(E))return E.value;if(ct(E))return d(E);if(D(E))return a?a(E,2):E()})):D(e)?t?p=a?()=>a(e,2):e:p=()=>{if(C){We();try{C()}finally{Ne()}}const E=Ze;Ze=u;try{return a?a(e,3,[O]):e(O)}finally{Ze=E}}:p=ke,t&&i){const E=p,B=i===!0?1/0:i;p=()=>He(E(),B)}const k=uo(),A=()=>{u.stop(),k&&k.active&&zs(k.effects,u)};if(o&&t){const E=t;t=(...B)=>{E(...B),A()}}let R=y?new Array(e.length).fill(Gt):Gt;const W=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const B=u.run();if(i||I||(y?B.some((Z,H)=>je(Z,R[H])):je(B,R))){C&&C();const Z=Ze;Ze=u;try{const H=[B,R===Gt?void 0:y&&R[0]===Gt?[]:R,O];R=B,a?a(t,3,H):t(...H)}finally{Ze=Z}}}else u.run()};return l&&l(W),u=new Xn(p),u.scheduler=r?()=>r(W,!1):W,O=E=>No(E,!1,u),C=u.onStop=()=>{const E=ts.get(u);if(E){if(a)a(E,4);else for(const B of E)B();ts.delete(u)}},t?n?W(!0):R=u.run():r?r(W.bind(null,!0),!0):u.run(),A.pause=u.pause.bind(u),A.resume=u.resume.bind(u),A.stop=A,A}function He(e,t=1/0,s){if(t<=0||!Y(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),t--,re(e))He(e.value,t,s);else if($(e))for(let n=0;n<e.length;n++)He(e[n],t,s);else if(fs(e)||lt(e))e.forEach(n=>{He(n,t,s)});else if(Jn(e)){for(const n in e)He(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&He(e[n],t,s)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wt(e,t,s,n){try{return n?e(...n):e()}catch(i){ms(i,t,s)}}function Re(e,t,s,n){if(D(e)){const i=Wt(e,t,s,n);return i&&Gn(i)&&i.catch(o=>{ms(o,t,s)}),i}if($(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Re(e[o],t,s,n));return i}}function ms(e,t,s,n=!0){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||j;if(t){let l=t.parent;const a=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const u=l.ec;if(u){for(let p=0;p<u.length;p++)if(u[p](e,a,d)===!1)return}l=l.parent}if(o){We(),Wt(o,null,10,[e,a,d]),Ne();return}}Lo(e,s,i,n,r)}function Lo(e,t,s,n=!0,i=!1){if(i)throw e;console.error(e)}const ae=[];let Ae=-1;const at=[];let Le=null,it=0;const gi=Promise.resolve();let ss=null;function mi(e){const t=ss||gi;return e?t.then(this?e.bind(this):e):t}function Uo(e){let t=Ae+1,s=ae.length;for(;t<s;){const n=t+s>>>1,i=ae[n],o=Rt(i);o<e||o===e&&i.flags&2?t=n+1:s=n}return t}function rn(e){if(!(e.flags&1)){const t=Rt(e),s=ae[ae.length-1];!s||!(e.flags&2)&&t>=Rt(s)?ae.push(e):ae.splice(Uo(t),0,e),e.flags|=1,_i()}}function _i(){ss||(ss=gi.then(yi))}function jo(e){$(e)?at.push(...e):Le&&e.id===-1?Le.splice(it+1,0,e):e.flags&1||(at.push(e),e.flags|=1),_i()}function bn(e,t,s=Ae+1){for(;s<ae.length;s++){const n=ae[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;ae.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function vi(e){if(at.length){const t=[...new Set(at)].sort((s,n)=>Rt(s)-Rt(n));if(at.length=0,Le){Le.push(...t);return}for(Le=t,it=0;it<Le.length;it++){const s=Le[it];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Le=null,it=0}}const Rt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function yi(e){try{for(Ae=0;Ae<ae.length;Ae++){const t=ae[Ae];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Wt(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ae<ae.length;Ae++){const t=ae[Ae];t&&(t.flags&=-2)}Ae=-1,ae.length=0,vi(),ss=null,(ae.length||at.length)&&yi()}}let _e=null,Si=null;function ns(e){const t=_e;return _e=e,Si=e&&e.type.__scopeId||null,t}function Bo(e,t=_e,s){if(!t||e._n)return e;const n=(...i)=>{n._d&&kn(-1);const o=ns(t);let r;try{r=e(...i)}finally{ns(o),n._d&&kn(1)}return r};return n._n=!0,n._c=!0,n._d=!0,n}function wt(e,t){if(_e===null)return e;const s=Ss(_e),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,r,l,a=j]=t[i];o&&(D(o)&&(o={mounted:o,updated:o}),o.deep&&He(r),n.push({dir:o,instance:s,value:r,oldValue:void 0,arg:l,modifiers:a}))}return e}function Je(e,t,s,n){const i=e.dirs,o=t&&t.dirs;for(let r=0;r<i.length;r++){const l=i[r];o&&(l.oldValue=o[r].value);let a=l.dir[n];a&&(We(),Re(a,s,8,[e.el,l,e,t]),Ne())}}const Ko=Symbol("_vte"),qo=e=>e.__isTeleport;function ln(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ln(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Et(e,t,s,n,i=!1){if($(e)){e.forEach((I,y)=>Et(I,t&&($(t)?t[y]:t),s,n,i));return}if(Ot(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Et(e,t,s,n.component.subTree);return}const o=n.shapeFlag&4?Ss(n.component):n.el,r=i?null:o,{i:l,r:a}=e,d=t&&t.r,u=l.refs===j?l.refs={}:l.refs,p=l.setupState,C=V(p),O=p===j?()=>!1:I=>L(C,I);if(d!=null&&d!==a&&(te(d)?(u[d]=null,O(d)&&(p[d]=null)):re(d)&&(d.value=null)),D(a))Wt(a,l,12,[r,u]);else{const I=te(a),y=re(a);if(I||y){const k=()=>{if(e.f){const A=I?O(a)?p[a]:u[a]:a.value;i?$(A)&&zs(A,o):$(A)?A.includes(o)||A.push(o):I?(u[a]=[o],O(a)&&(p[a]=u[a])):(a.value=[o],e.k&&(u[e.k]=a.value))}else I?(u[a]=r,O(a)&&(p[a]=r)):y&&(a.value=r,e.k&&(u[e.k]=r))};r?(k.id=-1,me(k,s)):k()}}}hs().requestIdleCallback;hs().cancelIdleCallback;const Ot=e=>!!e.type.__asyncLoader,wi=e=>e.type.__isKeepAlive;function Go(e,t){xi(e,"a",t)}function zo(e,t){xi(e,"da",t)}function xi(e,t,s=oe){const n=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(_s(t,n,s),s){let i=s.parent;for(;i&&i.parent;)wi(i.parent.vnode)&&Jo(n,t,s,i),i=i.parent}}function Jo(e,t,s,n){const i=_s(t,e,n,!0);Nt(()=>{zs(n[t],i)},s)}function _s(e,t,s=oe,n=!1){if(s){const i=s[e]||(s[e]=[]),o=t.__weh||(t.__weh=(...r)=>{We();const l=Vt(s),a=Re(t,s,e,r);return l(),Ne(),a});return n?i.unshift(o):i.push(o),o}}const Ve=e=>(t,s=oe)=>{(!Dt||e==="sp")&&_s(e,(...n)=>t(...n),s)},Yo=Ve("bm"),pt=Ve("m"),Zo=Ve("bu"),Qo=Ve("u"),Xo=Ve("bum"),Nt=Ve("um"),er=Ve("sp"),tr=Ve("rtg"),sr=Ve("rtc");function nr(e,t=oe){_s("ec",e,t)}const ir="components";function ot(e,t){return rr(ir,e,!0,t)||e}const or=Symbol.for("v-ndc");function rr(e,t,s=!0,n=!1){const i=_e||oe;if(i){const o=i.type;{const l=zr(o,!1);if(l&&(l===t||l===Se(t)||l===ds(Se(t))))return o}const r=wn(i[e]||o[e],t)||wn(i.appContext[e],t);return!r&&n?o:r}}function wn(e,t){return e&&(e[t]||e[Se(t)]||e[ds(Se(t))])}function ft(e,t,s,n){let i;const o=s,r=$(e);if(r||te(e)){const l=r&&ct(e);let a=!1,d=!1;l&&(a=!ye(e),d=Be(e),e=gs(e)),i=new Array(e.length);for(let u=0,p=e.length;u<p;u++)i[u]=t(a?d?es(se(e[u])):se(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,o)}else if(Y(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>t(l,a,void 0,o));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,d=l.length;a<d;a++){const u=l[a];i[a]=t(e[u],u,a,o)}}else i=[];return i}const Vs=e=>e?Bi(e)?Ss(e):Vs(e.parent):null,At=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Vs(e.parent),$root:e=>Vs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ti(e),$forceUpdate:e=>e.f||(e.f=()=>{rn(e.update)}),$nextTick:e=>e.n||(e.n=mi.bind(e.proxy)),$watch:e=>Or.bind(e)}),Os=(e,t)=>e!==j&&!e.__isScriptSetup&&L(e,t),lr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:i,props:o,accessCache:r,type:l,appContext:a}=e;let d;if(t[0]!=="$"){const O=r[t];if(O!==void 0)switch(O){case 1:return n[t];case 2:return i[t];case 4:return s[t];case 3:return o[t]}else{if(Os(n,t))return r[t]=1,n[t];if(i!==j&&L(i,t))return r[t]=2,i[t];if((d=e.propsOptions[0])&&L(d,t))return r[t]=3,o[t];if(s!==j&&L(s,t))return r[t]=4,s[t];Ls&&(r[t]=0)}}const u=At[t];let p,C;if(u)return t==="$attrs"&&ie(e.attrs,"get",""),u(e);if((p=l.__cssModules)&&(p=p[t]))return p;if(s!==j&&L(s,t))return r[t]=4,s[t];if(C=a.config.globalProperties,L(C,t))return C[t]},set({_:e},t,s){const{data:n,setupState:i,ctx:o}=e;return Os(i,t)?(i[t]=s,!0):n!==j&&L(n,t)?(n[t]=s,!0):L(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:i,propsOptions:o}},r){let l;return!!s[r]||e!==j&&L(e,r)||Os(t,r)||(l=o[0])&&L(l,r)||L(n,r)||L(At,r)||L(i.config.globalProperties,r)},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:L(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function xn(e){return $(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Ls=!0;function cr(e){const t=Ti(e),s=e.proxy,n=e.ctx;Ls=!1,t.beforeCreate&&Cn(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:l,provide:a,inject:d,created:u,beforeMount:p,mounted:C,beforeUpdate:O,updated:I,activated:y,deactivated:k,beforeDestroy:A,beforeUnmount:R,destroyed:W,unmounted:E,render:B,renderTracked:Z,renderTriggered:H,errorCaptured:be,serverPrefetch:st,expose:qe,inheritAttrs:gt,components:Lt,directives:Ut,filters:bs}=t;if(d&&ar(d,n,null),r)for(const Q in r){const K=r[Q];D(K)&&(n[Q]=K.bind(s))}if(i){const Q=i.call(s,s);Y(Q)&&(e.data=sn(Q))}if(Ls=!0,o)for(const Q in o){const K=o[Q],Ge=D(K)?K.bind(s,s):D(K.get)?K.get.bind(s,s):ke,jt=!D(K)&&D(K.set)?K.set.bind(s):ke,ze=un({get:Ge,set:jt});Object.defineProperty(n,Q,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ce=>ze.value=Ce})}if(l)for(const Q in l)Ci(l[Q],n,s,Q);if(a){const Q=D(a)?a.call(s):a;Reflect.ownKeys(Q).forEach(K=>{gr(K,Q[K])})}u&&Cn(u,e,"c");function le(Q,K){$(K)?K.forEach(Ge=>Q(Ge.bind(s))):K&&Q(K.bind(s))}if(le(Yo,p),le(pt,C),le(Zo,O),le(Qo,I),le(Go,y),le(zo,k),le(nr,be),le(sr,Z),le(tr,H),le(Xo,R),le(Nt,E),le(er,st),$(qe))if(qe.length){const Q=e.exposed||(e.exposed={});qe.forEach(K=>{Object.defineProperty(Q,K,{get:()=>s[K],set:Ge=>s[K]=Ge})})}else e.exposed||(e.exposed={});B&&e.render===ke&&(e.render=B),gt!=null&&(e.inheritAttrs=gt),Lt&&(e.components=Lt),Ut&&(e.directives=Ut),st&&bi(e)}function ar(e,t,s=ke){$(e)&&(e=Us(e));for(const n in e){const i=e[n];let o;Y(i)?"default"in i?o=Jt(i.from||n,i.default,!0):o=Jt(i.from||n):o=Jt(i),re(o)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[n]=o}}function Cn(e,t,s){Re($(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Ci(e,t,s,n){let i=n.includes(".")?Wi(s,n):()=>s[n];if(te(e)){const o=t[e];D(o)&&Ps(i,o)}else if(D(e))Ps(i,e.bind(s));else if(Y(e))if($(e))e.forEach(o=>Ci(o,t,s,n));else{const o=D(e.handler)?e.handler.bind(s):t[e.handler];D(o)&&Ps(i,o,e)}}function Ti(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let a;return l?a=l:!i.length&&!s&&!n?a=t:(a={},i.length&&i.forEach(d=>is(a,d,r,!0)),is(a,t,r)),Y(t)&&o.set(t,a),a}function is(e,t,s,n=!1){const{mixins:i,extends:o}=t;o&&is(e,o,s,!0),i&&i.forEach(r=>is(e,r,s,!0));for(const r in t)if(!(n&&r==="expose")){const l=fr[r]||s&&s[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const fr={data:Tn,props:In,emits:In,methods:xt,computed:xt,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:xt,directives:xt,watch:dr,provide:Tn,inject:ur};function Tn(e,t){return t?e?function(){return ue(D(e)?e.call(this,this):e,D(t)?t.call(this,this):t)}:t:e}function ur(e,t){return xt(Us(e),Us(t))}function Us(e){if($(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function xt(e,t){return e?ue(Object.create(null),e,t):t}function In(e,t){return e?$(e)&&$(t)?[...new Set([...e,...t])]:ue(Object.create(null),xn(e),xn(t??{})):t}function dr(e,t){if(!e)return t;if(!t)return e;const s=ue(Object.create(null),e);for(const n in t)s[n]=ce(e[n],t[n]);return s}function Ii(){return{app:null,config:{isNativeTag:Zi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hr=0;function pr(e,t){return function(n,i=null){D(n)||(n=ue({},n)),i!=null&&!Y(i)&&(i=null);const o=Ii(),r=new WeakSet,l=[];let a=!1;const d=o.app={_uid:hr++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Yr,get config(){return o.config},set config(u){},use(u,...p){return r.has(u)||(u&&D(u.install)?(r.add(u),u.install(d,...p)):D(u)&&(r.add(u),u(d,...p))),d},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),d},component(u,p){return p?(o.components[u]=p,d):o.components[u]},directive(u,p){return p?(o.directives[u]=p,d):o.directives[u]},mount(u,p,C){if(!a){const O=d._ceVNode||ne(n,i);return O.appContext=o,C===!0?C="svg":C===!1&&(C=void 0),e(O,u,C),a=!0,d._container=u,u.__vue_app__=d,Ss(O.component)}},onUnmount(u){l.push(u)},unmount(){a&&(Re(l,d._instance,16),e(null,d._container),delete d._container.__vue_app__)},provide(u,p){return o.provides[u]=p,d},runWithContext(u){const p=ut;ut=d;try{return u()}finally{ut=p}}};return d}}let ut=null;function gr(e,t){if(oe){let s=oe.provides;const n=oe.parent&&oe.parent.provides;n===s&&(s=oe.provides=Object.create(n)),s[e]=t}}function Jt(e,t,s=!1){const n=oe||_e;if(n||ut){let i=ut?ut._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return s&&D(t)?t.call(n&&n.proxy):t}}const Ei={},Oi=()=>Object.create(Ei),Ai=e=>Object.getPrototypeOf(e)===Ei;function mr(e,t,s,n=!1){const i={},o=Oi();e.propsDefaults=Object.create(null),Pi(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);s?e.props=n?i:ko(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function _r(e,t,s,n){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,l=V(i),[a]=e.propsOptions;let d=!1;if((n||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let C=u[p];if(vs(e.emitsOptions,C))continue;const O=t[C];if(a)if(L(o,C))O!==o[C]&&(o[C]=O,d=!0);else{const I=Se(C);i[I]=js(a,l,I,O,e,!1)}else O!==o[C]&&(o[C]=O,d=!0)}}}else{Pi(e,t,i,o)&&(d=!0);let u;for(const p in l)(!t||!L(t,p)&&((u=et(p))===p||!L(t,u)))&&(a?s&&(s[p]!==void 0||s[u]!==void 0)&&(i[p]=js(a,l,p,void 0,e,!0)):delete i[p]);if(o!==l)for(const p in o)(!t||!L(t,p))&&(delete o[p],d=!0)}d&&De(e.attrs,"set","")}function Pi(e,t,s,n){const[i,o]=e.propsOptions;let r=!1,l;if(t)for(let a in t){if(Ct(a))continue;const d=t[a];let u;i&&L(i,u=Se(a))?!o||!o.includes(u)?s[u]=d:(l||(l={}))[u]=d:vs(e.emitsOptions,a)||(!(a in n)||d!==n[a])&&(n[a]=d,r=!0)}if(o){const a=V(s),d=l||j;for(let u=0;u<o.length;u++){const p=o[u];s[p]=js(i,a,p,d[p],e,!L(d,p))}}return r}function js(e,t,s,n,i,o){const r=e[s];if(r!=null){const l=L(r,"default");if(l&&n===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&D(a)){const{propsDefaults:d}=i;if(s in d)n=d[s];else{const u=Vt(i);n=d[s]=a.call(null,t),u()}}else n=a;i.ce&&i.ce._setProp(s,n)}r[0]&&(o&&!l?n=!1:r[1]&&(n===""||n===et(s))&&(n=!0))}return n}const vr=new WeakMap;function ki(e,t,s=!1){const n=s?vr:t.propsCache,i=n.get(e);if(i)return i;const o=e.props,r={},l=[];let a=!1;if(!D(e)){const u=p=>{a=!0;const[C,O]=ki(p,t,!0);ue(r,C),O&&l.push(...O)};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!a)return Y(e)&&n.set(e,rt),rt;if($(o))for(let u=0;u<o.length;u++){const p=Se(o[u]);En(p)&&(r[p]=j)}else if(o)for(const u in o){const p=Se(u);if(En(p)){const C=o[u],O=r[p]=$(C)||D(C)?{type:C}:ue({},C),I=O.type;let y=!1,k=!0;if($(I))for(let A=0;A<I.length;++A){const R=I[A],W=D(R)&&R.name;if(W==="Boolean"){y=!0;break}else W==="String"&&(k=!1)}else y=D(I)&&I.name==="Boolean";O[0]=y,O[1]=k,(y||L(O,"default"))&&l.push(p)}}const d=[r,l];return Y(e)&&n.set(e,d),d}function En(e){return e[0]!=="$"&&!Ct(e)}const cn=e=>e[0]==="_"||e==="$stable",an=e=>$(e)?e.map(Pe):[Pe(e)],yr=(e,t,s)=>{if(t._n)return t;const n=Bo((...i)=>an(t(...i)),s);return n._c=!1,n},Mi=(e,t,s)=>{const n=e._ctx;for(const i in e){if(cn(i))continue;const o=e[i];if(D(o))t[i]=yr(i,o,n);else if(o!=null){const r=an(o);t[i]=()=>r}}},Ri=(e,t)=>{const s=an(t);e.slots.default=()=>s},$i=(e,t,s)=>{for(const n in t)(s||!cn(n))&&(e[n]=t[n])},Sr=(e,t,s)=>{const n=e.slots=Oi();if(e.vnode.shapeFlag&32){const i=t.__;i&&Fs(n,"__",i,!0);const o=t._;o?($i(n,t,s),s&&Fs(n,"_",o,!0)):Mi(t,n)}else t&&Ri(e,t)},br=(e,t,s)=>{const{vnode:n,slots:i}=e;let o=!0,r=j;if(n.shapeFlag&32){const l=t._;l?s&&l===1?o=!1:$i(i,t,s):(o=!t.$stable,Mi(t,i)),r=t}else t&&(Ri(e,t),r={default:1});if(o)for(const l in i)!cn(l)&&r[l]==null&&delete i[l]},me=Fr;function wr(e){return xr(e)}function xr(e,t){const s=hs();s.__VUE__=!0;const{insert:n,remove:i,patchProp:o,createElement:r,createText:l,createComment:a,setText:d,setElementText:u,parentNode:p,nextSibling:C,setScopeId:O=ke,insertStaticContent:I}=e,y=(c,f,h,_=null,g=null,m=null,x=void 0,b=null,S=!!f.dynamicChildren)=>{if(c===f)return;c&&!St(c,f)&&(_=Bt(c),Ce(c,g,m,!0),c=null),f.patchFlag===-2&&(S=!1,f.dynamicChildren=null);const{type:v,ref:M,shapeFlag:T}=f;switch(v){case ys:k(c,f,h,_);break;case Ke:A(c,f,h,_);break;case ks:c==null&&R(f,h,_,x);break;case fe:Lt(c,f,h,_,g,m,x,b,S);break;default:T&1?B(c,f,h,_,g,m,x,b,S):T&6?Ut(c,f,h,_,g,m,x,b,S):(T&64||T&128)&&v.process(c,f,h,_,g,m,x,b,S,_t)}M!=null&&g?Et(M,c&&c.ref,m,f||c,!f):M==null&&c&&c.ref!=null&&Et(c.ref,null,m,c,!0)},k=(c,f,h,_)=>{if(c==null)n(f.el=l(f.children),h,_);else{const g=f.el=c.el;f.children!==c.children&&d(g,f.children)}},A=(c,f,h,_)=>{c==null?n(f.el=a(f.children||""),h,_):f.el=c.el},R=(c,f,h,_)=>{[c.el,c.anchor]=I(c.children,f,h,_,c.el,c.anchor)},W=({el:c,anchor:f},h,_)=>{let g;for(;c&&c!==f;)g=C(c),n(c,h,_),c=g;n(f,h,_)},E=({el:c,anchor:f})=>{let h;for(;c&&c!==f;)h=C(c),i(c),c=h;i(f)},B=(c,f,h,_,g,m,x,b,S)=>{f.type==="svg"?x="svg":f.type==="math"&&(x="mathml"),c==null?Z(f,h,_,g,m,x,b,S):st(c,f,g,m,x,b,S)},Z=(c,f,h,_,g,m,x,b)=>{let S,v;const{props:M,shapeFlag:T,transition:P,dirs:F}=c;if(S=c.el=r(c.type,m,M&&M.is,M),T&8?u(S,c.children):T&16&&be(c.children,S,null,_,g,As(c,m),x,b),F&&Je(c,null,_,"created"),H(S,c,c.scopeId,x,_),M){for(const q in M)q!=="value"&&!Ct(q)&&o(S,q,null,M[q],m,_);"value"in M&&o(S,"value",null,M.value,m),(v=M.onVnodeBeforeMount)&&Oe(v,_,c)}F&&Je(c,null,_,"beforeMount");const N=Cr(g,P);N&&P.beforeEnter(S),n(S,f,h),((v=M&&M.onVnodeMounted)||N||F)&&me(()=>{v&&Oe(v,_,c),N&&P.enter(S),F&&Je(c,null,_,"mounted")},g)},H=(c,f,h,_,g)=>{if(h&&O(c,h),_)for(let m=0;m<_.length;m++)O(c,_[m]);if(g){let m=g.subTree;if(f===m||Vi(m.type)&&(m.ssContent===f||m.ssFallback===f)){const x=g.vnode;H(c,x,x.scopeId,x.slotScopeIds,g.parent)}}},be=(c,f,h,_,g,m,x,b,S=0)=>{for(let v=S;v<c.length;v++){const M=c[v]=b?Ue(c[v]):Pe(c[v]);y(null,M,f,h,_,g,m,x,b)}},st=(c,f,h,_,g,m,x)=>{const b=f.el=c.el;let{patchFlag:S,dynamicChildren:v,dirs:M}=f;S|=c.patchFlag&16;const T=c.props||j,P=f.props||j;let F;if(h&&Ye(h,!1),(F=P.onVnodeBeforeUpdate)&&Oe(F,h,f,c),M&&Je(f,c,h,"beforeUpdate"),h&&Ye(h,!0),(T.innerHTML&&P.innerHTML==null||T.textContent&&P.textContent==null)&&u(b,""),v?qe(c.dynamicChildren,v,b,h,_,As(f,g),m):x||K(c,f,b,null,h,_,As(f,g),m,!1),S>0){if(S&16)gt(b,T,P,h,g);else if(S&2&&T.class!==P.class&&o(b,"class",null,P.class,g),S&4&&o(b,"style",T.style,P.style,g),S&8){const N=f.dynamicProps;for(let q=0;q<N.length;q++){const U=N[q],de=T[U],he=P[U];(he!==de||U==="value")&&o(b,U,de,he,g,h)}}S&1&&c.children!==f.children&&u(b,f.children)}else!x&&v==null&&gt(b,T,P,h,g);((F=P.onVnodeUpdated)||M)&&me(()=>{F&&Oe(F,h,f,c),M&&Je(f,c,h,"updated")},_)},qe=(c,f,h,_,g,m,x)=>{for(let b=0;b<f.length;b++){const S=c[b],v=f[b],M=S.el&&(S.type===fe||!St(S,v)||S.shapeFlag&198)?p(S.el):h;y(S,v,M,null,_,g,m,x,!0)}},gt=(c,f,h,_,g)=>{if(f!==h){if(f!==j)for(const m in f)!Ct(m)&&!(m in h)&&o(c,m,f[m],null,g,_);for(const m in h){if(Ct(m))continue;const x=h[m],b=f[m];x!==b&&m!=="value"&&o(c,m,b,x,g,_)}"value"in h&&o(c,"value",f.value,h.value,g)}},Lt=(c,f,h,_,g,m,x,b,S)=>{const v=f.el=c?c.el:l(""),M=f.anchor=c?c.anchor:l("");let{patchFlag:T,dynamicChildren:P,slotScopeIds:F}=f;F&&(b=b?b.concat(F):F),c==null?(n(v,h,_),n(M,h,_),be(f.children||[],h,M,g,m,x,b,S)):T>0&&T&64&&P&&c.dynamicChildren?(qe(c.dynamicChildren,P,h,g,m,x,b),(f.key!=null||g&&f===g.subTree)&&Fi(c,f,!0)):K(c,f,h,M,g,m,x,b,S)},Ut=(c,f,h,_,g,m,x,b,S)=>{f.slotScopeIds=b,c==null?f.shapeFlag&512?g.ctx.activate(f,h,_,x,S):bs(f,h,_,g,m,x,S):dn(c,f,S)},bs=(c,f,h,_,g,m,x)=>{const b=c.component=jr(c,_,g);if(wi(c)&&(b.ctx.renderer=_t),Br(b,!1,x),b.asyncDep){if(g&&g.registerDep(b,le,x),!c.el){const S=b.subTree=ne(Ke);A(null,S,f,h)}}else le(b,c,f,h,g,m,x)},dn=(c,f,h)=>{const _=f.component=c.component;if(Rr(c,f,h))if(_.asyncDep&&!_.asyncResolved){Q(_,f,h);return}else _.next=f,_.update();else f.el=c.el,_.vnode=f},le=(c,f,h,_,g,m,x)=>{const b=()=>{if(c.isMounted){let{next:T,bu:P,u:F,parent:N,vnode:q}=c;{const Ie=Di(c);if(Ie){T&&(T.el=q.el,Q(c,T,x)),Ie.asyncDep.then(()=>{c.isUnmounted||b()});return}}let U=T,de;Ye(c,!1),T?(T.el=q.el,Q(c,T,x)):T=q,P&&zt(P),(de=T.props&&T.props.onVnodeBeforeUpdate)&&Oe(de,N,T,q),Ye(c,!0);const he=An(c),Te=c.subTree;c.subTree=he,y(Te,he,p(Te.el),Bt(Te),c,g,m),T.el=he.el,U===null&&$r(c,he.el),F&&me(F,g),(de=T.props&&T.props.onVnodeUpdated)&&me(()=>Oe(de,N,T,q),g)}else{let T;const{el:P,props:F}=f,{bm:N,m:q,parent:U,root:de,type:he}=c,Te=Ot(f);Ye(c,!1),N&&zt(N),!Te&&(T=F&&F.onVnodeBeforeMount)&&Oe(T,U,f),Ye(c,!0);{de.ce&&de.ce._def.shadowRoot!==!1&&de.ce._injectChildStyle(he);const Ie=c.subTree=An(c);y(null,Ie,h,_,c,g,m),f.el=Ie.el}if(q&&me(q,g),!Te&&(T=F&&F.onVnodeMounted)){const Ie=f;me(()=>Oe(T,U,Ie),g)}(f.shapeFlag&256||U&&Ot(U.vnode)&&U.vnode.shapeFlag&256)&&c.a&&me(c.a,g),c.isMounted=!0,f=h=_=null}};c.scope.on();const S=c.effect=new Xn(b);c.scope.off();const v=c.update=S.run.bind(S),M=c.job=S.runIfDirty.bind(S);M.i=c,M.id=c.uid,S.scheduler=()=>rn(M),Ye(c,!0),v()},Q=(c,f,h)=>{f.component=c;const _=c.vnode.props;c.vnode=f,c.next=null,_r(c,f.props,_,h),br(c,f.children,h),We(),bn(c),Ne()},K=(c,f,h,_,g,m,x,b,S=!1)=>{const v=c&&c.children,M=c?c.shapeFlag:0,T=f.children,{patchFlag:P,shapeFlag:F}=f;if(P>0){if(P&128){jt(v,T,h,_,g,m,x,b,S);return}else if(P&256){Ge(v,T,h,_,g,m,x,b,S);return}}F&8?(M&16&&mt(v,g,m),T!==v&&u(h,T)):M&16?F&16?jt(v,T,h,_,g,m,x,b,S):mt(v,g,m,!0):(M&8&&u(h,""),F&16&&be(T,h,_,g,m,x,b,S))},Ge=(c,f,h,_,g,m,x,b,S)=>{c=c||rt,f=f||rt;const v=c.length,M=f.length,T=Math.min(v,M);let P;for(P=0;P<T;P++){const F=f[P]=S?Ue(f[P]):Pe(f[P]);y(c[P],F,h,null,g,m,x,b,S)}v>M?mt(c,g,m,!0,!1,T):be(f,h,_,g,m,x,b,S,T)},jt=(c,f,h,_,g,m,x,b,S)=>{let v=0;const M=f.length;let T=c.length-1,P=M-1;for(;v<=T&&v<=P;){const F=c[v],N=f[v]=S?Ue(f[v]):Pe(f[v]);if(St(F,N))y(F,N,h,null,g,m,x,b,S);else break;v++}for(;v<=T&&v<=P;){const F=c[T],N=f[P]=S?Ue(f[P]):Pe(f[P]);if(St(F,N))y(F,N,h,null,g,m,x,b,S);else break;T--,P--}if(v>T){if(v<=P){const F=P+1,N=F<M?f[F].el:_;for(;v<=P;)y(null,f[v]=S?Ue(f[v]):Pe(f[v]),h,N,g,m,x,b,S),v++}}else if(v>P)for(;v<=T;)Ce(c[v],g,m,!0),v++;else{const F=v,N=v,q=new Map;for(v=N;v<=P;v++){const ge=f[v]=S?Ue(f[v]):Pe(f[v]);ge.key!=null&&q.set(ge.key,v)}let U,de=0;const he=P-N+1;let Te=!1,Ie=0;const vt=new Array(he);for(v=0;v<he;v++)vt[v]=0;for(v=F;v<=T;v++){const ge=c[v];if(de>=he){Ce(ge,g,m,!0);continue}let Ee;if(ge.key!=null)Ee=q.get(ge.key);else for(U=N;U<=P;U++)if(vt[U-N]===0&&St(ge,f[U])){Ee=U;break}Ee===void 0?Ce(ge,g,m,!0):(vt[Ee-N]=v+1,Ee>=Ie?Ie=Ee:Te=!0,y(ge,f[Ee],h,null,g,m,x,b,S),de++)}const gn=Te?Tr(vt):rt;for(U=gn.length-1,v=he-1;v>=0;v--){const ge=N+v,Ee=f[ge],mn=ge+1<M?f[ge+1].el:_;vt[v]===0?y(null,Ee,h,mn,g,m,x,b,S):Te&&(U<0||v!==gn[U]?ze(Ee,h,mn,2):U--)}}},ze=(c,f,h,_,g=null)=>{const{el:m,type:x,transition:b,children:S,shapeFlag:v}=c;if(v&6){ze(c.component.subTree,f,h,_);return}if(v&128){c.suspense.move(f,h,_);return}if(v&64){x.move(c,f,h,_t);return}if(x===fe){n(m,f,h);for(let T=0;T<S.length;T++)ze(S[T],f,h,_);n(c.anchor,f,h);return}if(x===ks){W(c,f,h);return}if(_!==2&&v&1&&b)if(_===0)b.beforeEnter(m),n(m,f,h),me(()=>b.enter(m),g);else{const{leave:T,delayLeave:P,afterLeave:F}=b,N=()=>{c.ctx.isUnmounted?i(m):n(m,f,h)},q=()=>{T(m,()=>{N(),F&&F()})};P?P(m,N,q):q()}else n(m,f,h)},Ce=(c,f,h,_=!1,g=!1)=>{const{type:m,props:x,ref:b,children:S,dynamicChildren:v,shapeFlag:M,patchFlag:T,dirs:P,cacheIndex:F}=c;if(T===-2&&(g=!1),b!=null&&(We(),Et(b,null,h,c,!0),Ne()),F!=null&&(f.renderCache[F]=void 0),M&256){f.ctx.deactivate(c);return}const N=M&1&&P,q=!Ot(c);let U;if(q&&(U=x&&x.onVnodeBeforeUnmount)&&Oe(U,f,c),M&6)Yi(c.component,h,_);else{if(M&128){c.suspense.unmount(h,_);return}N&&Je(c,null,f,"beforeUnmount"),M&64?c.type.remove(c,f,h,_t,_):v&&!v.hasOnce&&(m!==fe||T>0&&T&64)?mt(v,f,h,!1,!0):(m===fe&&T&384||!g&&M&16)&&mt(S,f,h),_&&hn(c)}(q&&(U=x&&x.onVnodeUnmounted)||N)&&me(()=>{U&&Oe(U,f,c),N&&Je(c,null,f,"unmounted")},h)},hn=c=>{const{type:f,el:h,anchor:_,transition:g}=c;if(f===fe){Ji(h,_);return}if(f===ks){E(c);return}const m=()=>{i(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:x,delayLeave:b}=g,S=()=>x(h,m);b?b(c.el,m,S):S()}else m()},Ji=(c,f)=>{let h;for(;c!==f;)h=C(c),i(c),c=h;i(f)},Yi=(c,f,h)=>{const{bum:_,scope:g,job:m,subTree:x,um:b,m:S,a:v,parent:M,slots:{__:T}}=c;On(S),On(v),_&&zt(_),M&&$(T)&&T.forEach(P=>{M.renderCache[P]=void 0}),g.stop(),m&&(m.flags|=8,Ce(x,c,f,h)),b&&me(b,f),me(()=>{c.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},mt=(c,f,h,_=!1,g=!1,m=0)=>{for(let x=m;x<c.length;x++)Ce(c[x],f,h,_,g)},Bt=c=>{if(c.shapeFlag&6)return Bt(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const f=C(c.anchor||c.el),h=f&&f[Ko];return h?C(h):f};let ws=!1;const pn=(c,f,h)=>{c==null?f._vnode&&Ce(f._vnode,null,null,!0):y(f._vnode||null,c,f,null,null,null,h),f._vnode=c,ws||(ws=!0,bn(),vi(),ws=!1)},_t={p:y,um:Ce,m:ze,r:hn,mt:bs,mc:be,pc:K,pbc:qe,n:Bt,o:e};return{render:pn,hydrate:void 0,createApp:pr(pn)}}function As({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Ye({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Cr(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fi(e,t,s=!1){const n=e.children,i=t.children;if($(n)&&$(i))for(let o=0;o<n.length;o++){const r=n[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=Ue(i[o]),l.el=r.el),!s&&l.patchFlag!==-2&&Fi(r,l)),l.type===ys&&(l.el=r.el),l.type===Ke&&!l.el&&(l.el=r.el)}}function Tr(e){const t=e.slice(),s=[0];let n,i,o,r,l;const a=e.length;for(n=0;n<a;n++){const d=e[n];if(d!==0){if(i=s[s.length-1],e[i]<d){t[n]=i,s.push(n);continue}for(o=0,r=s.length-1;o<r;)l=o+r>>1,e[s[l]]<d?o=l+1:r=l;d<e[s[o]]&&(o>0&&(t[n]=s[o-1]),s[o]=n)}}for(o=s.length,r=s[o-1];o-- >0;)s[o]=r,r=t[r];return s}function Di(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Di(t)}function On(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ir=Symbol.for("v-scx"),Er=()=>Jt(Ir);function Ps(e,t,s){return Hi(e,t,s)}function Hi(e,t,s=j){const{immediate:n,deep:i,flush:o,once:r}=s,l=ue({},s),a=t&&n||!t&&o!=="post";let d;if(Dt){if(o==="sync"){const O=Er();d=O.__watcherHandles||(O.__watcherHandles=[])}else if(!a){const O=()=>{};return O.stop=ke,O.resume=ke,O.pause=ke,O}}const u=oe;l.call=(O,I,y)=>Re(O,u,I,y);let p=!1;o==="post"?l.scheduler=O=>{me(O,u&&u.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(O,I)=>{I?O():rn(O)}),l.augmentJob=O=>{t&&(O.flags|=4),p&&(O.flags|=2,u&&(O.id=u.uid,O.i=u))};const C=Vo(e,t,l);return Dt&&(d?d.push(C):a&&C()),C}function Or(e,t,s){const n=this.proxy,i=te(e)?e.includes(".")?Wi(n,e):()=>n[e]:e.bind(n,n);let o;D(t)?o=t:(o=t.handler,s=t);const r=Vt(this),l=Hi(i,o.bind(n),s);return r(),l}function Wi(e,t){const s=t.split(".");return()=>{let n=e;for(let i=0;i<s.length&&n;i++)n=n[s[i]];return n}}const Ar=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Se(t)}Modifiers`]||e[`${et(t)}Modifiers`];function Pr(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||j;let i=s;const o=t.startsWith("update:"),r=o&&Ar(n,t.slice(7));r&&(r.trim&&(i=s.map(u=>te(u)?u.trim():u)),r.number&&(i=s.map(Xt)));let l,a=n[l=xs(t)]||n[l=xs(Se(t))];!a&&o&&(a=n[l=xs(et(t))]),a&&Re(a,e,6,i);const d=n[l+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Re(d,e,6,i)}}function Ni(e,t,s=!1){const n=t.emitsCache,i=n.get(e);if(i!==void 0)return i;const o=e.emits;let r={},l=!1;if(!D(e)){const a=d=>{const u=Ni(d,t,!0);u&&(l=!0,ue(r,u))};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(Y(e)&&n.set(e,null),null):($(o)?o.forEach(a=>r[a]=null):ue(r,o),Y(e)&&n.set(e,r),r)}function vs(e,t){return!e||!as(t)?!1:(t=t.slice(2).replace(/Once$/,""),L(e,t[0].toLowerCase()+t.slice(1))||L(e,et(t))||L(e,t))}function An(e){const{type:t,vnode:s,proxy:n,withProxy:i,propsOptions:[o],slots:r,attrs:l,emit:a,render:d,renderCache:u,props:p,data:C,setupState:O,ctx:I,inheritAttrs:y}=e,k=ns(e);let A,R;try{if(s.shapeFlag&4){const E=i||n,B=E;A=Pe(d.call(B,E,u,p,O,C,I)),R=l}else{const E=t;A=Pe(E.length>1?E(p,{attrs:l,slots:r,emit:a}):E(p,null)),R=t.props?l:kr(l)}}catch(E){Pt.length=0,ms(E,e,1),A=ne(Ke)}let W=A;if(R&&y!==!1){const E=Object.keys(R),{shapeFlag:B}=W;E.length&&B&7&&(o&&E.some(Gs)&&(R=Mr(R,o)),W=ht(W,R,!1,!0))}return s.dirs&&(W=ht(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(s.dirs):s.dirs),s.transition&&ln(W,s.transition),A=W,ns(k),A}const kr=e=>{let t;for(const s in e)(s==="class"||s==="style"||as(s))&&((t||(t={}))[s]=e[s]);return t},Mr=(e,t)=>{const s={};for(const n in e)(!Gs(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function Rr(e,t,s){const{props:n,children:i,component:o}=e,{props:r,children:l,patchFlag:a}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&a>=0){if(a&1024)return!0;if(a&16)return n?Pn(n,r,d):!!r;if(a&8){const u=t.dynamicProps;for(let p=0;p<u.length;p++){const C=u[p];if(r[C]!==n[C]&&!vs(d,C))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:n===r?!1:n?r?Pn(n,r,d):!0:!!r;return!1}function Pn(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const o=n[i];if(t[o]!==e[o]&&!vs(s,o))return!0}return!1}function $r({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const Vi=e=>e.__isSuspense;function Fr(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):jo(e)}const fe=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),Ke=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),Pt=[];let ve=null;function z(e=!1){Pt.push(ve=e?null:[])}function Dr(){Pt.pop(),ve=Pt[Pt.length-1]||null}let $t=1;function kn(e,t=!1){$t+=e,e<0&&ve&&t&&(ve.hasOnce=!0)}function Li(e){return e.dynamicChildren=$t>0?ve||rt:null,Dr(),$t>0&&ve&&ve.push(e),e}function J(e,t,s,n,i,o){return Li(w(e,t,s,n,i,o,!0))}function Hr(e,t,s,n,i){return Li(ne(e,t,s,n,i,!0))}function Ui(e){return e?e.__v_isVNode===!0:!1}function St(e,t){return e.type===t.type&&e.key===t.key}const ji=({key:e})=>e??null,Yt=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?te(e)||re(e)||D(e)?{i:_e,r:e,k:t,f:!!s}:e:null);function w(e,t=null,s=null,n=0,i=null,o=e===fe?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ji(t),ref:t&&Yt(t),scopeId:Si,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:_e};return l?(fn(a,s),o&128&&e.normalize(a)):s&&(a.shapeFlag|=te(s)?8:16),$t>0&&!r&&ve&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&ve.push(a),a}const ne=Wr;function Wr(e,t=null,s=null,n=0,i=null,o=!1){if((!e||e===or)&&(e=Ke),Ui(e)){const l=ht(e,t,!0);return s&&fn(l,s),$t>0&&!o&&ve&&(l.shapeFlag&6?ve[ve.indexOf(e)]=l:ve.push(l)),l.patchFlag=-2,l}if(Jr(e)&&(e=e.__vccOpts),t){t=Nr(t);let{class:l,style:a}=t;l&&!te(l)&&(t.class=we(l)),Y(a)&&(on(a)&&!$(a)&&(a=ue({},a)),t.style=Ys(a))}const r=te(e)?1:Vi(e)?128:qo(e)?64:Y(e)?4:D(e)?2:0;return w(e,t,s,n,i,r,o,!0)}function Nr(e){return e?on(e)||Ai(e)?ue({},e):e:null}function ht(e,t,s=!1,n=!1){const{props:i,ref:o,patchFlag:r,children:l,transition:a}=e,d=t?Vr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:d,key:d&&ji(d),ref:t&&t.ref?s&&o?$(o)?o.concat(Yt(t)):[o,Yt(t)]:Yt(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==fe?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ht(e.ssContent),ssFallback:e.ssFallback&&ht(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&ln(u,a.clone(u)),u}function Ft(e=" ",t=0){return ne(ys,null,e,t)}function Zt(e="",t=!1){return t?(z(),Hr(Ke,null,e)):ne(Ke,null,e)}function Pe(e){return e==null||typeof e=="boolean"?ne(Ke):$(e)?ne(fe,null,e.slice()):Ui(e)?Ue(e):ne(ys,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ht(e)}function fn(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if($(t))s=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),fn(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=t._;!i&&!Ai(t)?t._ctx=_e:i===3&&_e&&(_e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else D(t)?(t={default:t,_ctx:_e},s=32):(t=String(t),n&64?(s=16,t=[Ft(t)]):s=8);e.children=t,e.shapeFlag|=s}function Vr(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=we([t.class,n.class]));else if(i==="style")t.style=Ys([t.style,n.style]);else if(as(i)){const o=t[i],r=n[i];r&&o!==r&&!($(o)&&o.includes(r))&&(t[i]=o?[].concat(o,r):r)}else i!==""&&(t[i]=n[i])}return t}function Oe(e,t,s,n=null){Re(e,t,7,[s,n])}const Lr=Ii();let Ur=0;function jr(e,t,s){const n=e.type,i=(t?t.appContext:e.appContext)||Lr,o={uid:Ur++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ki(n,i),emitsOptions:Ni(n,i),emit:null,emitted:null,propsDefaults:j,inheritAttrs:n.inheritAttrs,ctx:j,data:j,props:j,attrs:j,slots:j,refs:j,setupState:j,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Pr.bind(null,o),e.ce&&e.ce(o),o}let oe=null,os,Bs;{const e=hs(),t=(s,n)=>{let i;return(i=e[s])||(i=e[s]=[]),i.push(n),o=>{i.length>1?i.forEach(r=>r(o)):i[0](o)}};os=t("__VUE_INSTANCE_SETTERS__",s=>oe=s),Bs=t("__VUE_SSR_SETTERS__",s=>Dt=s)}const Vt=e=>{const t=oe;return os(e),e.scope.on(),()=>{e.scope.off(),os(t)}},Mn=()=>{oe&&oe.scope.off(),os(null)};function Bi(e){return e.vnode.shapeFlag&4}let Dt=!1;function Br(e,t=!1,s=!1){t&&Bs(t);const{props:n,children:i}=e.vnode,o=Bi(e);mr(e,n,o,t),Sr(e,i,s||t);const r=o?Kr(e,t):void 0;return t&&Bs(!1),r}function Kr(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,lr);const{setup:n}=s;if(n){We();const i=e.setupContext=n.length>1?Gr(e):null,o=Vt(e),r=Wt(n,e,0,[e.props,i]),l=Gn(r);if(Ne(),o(),(l||e.sp)&&!Ot(e)&&bi(e),l){if(r.then(Mn,Mn),t)return r.then(a=>{Rn(e,a)}).catch(a=>{ms(a,e,0)});e.asyncDep=r}else Rn(e,r)}else Ki(e)}function Rn(e,t,s){D(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Y(t)&&(e.setupState=pi(t)),Ki(e)}function Ki(e,t,s){const n=e.type;e.render||(e.render=n.render||ke);{const i=Vt(e);We();try{cr(e)}finally{Ne(),i()}}}const qr={get(e,t){return ie(e,"get",""),e[t]}};function Gr(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,qr),slots:e.slots,emit:e.emit,expose:t}}function Ss(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(pi(Mo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in At)return At[s](e)},has(t,s){return s in t||s in At}})):e.proxy}function zr(e,t=!0){return D(e)?e.displayName||e.name:e.name||t&&e.__name}function Jr(e){return D(e)&&"__vccOpts"in e}const un=(e,t)=>Wo(e,t,Dt),Yr="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ks;const $n=typeof window<"u"&&window.trustedTypes;if($n)try{Ks=$n.createPolicy("vue",{createHTML:e=>e})}catch{}const qi=Ks?e=>Ks.createHTML(e):e=>e,Zr="http://www.w3.org/2000/svg",Qr="http://www.w3.org/1998/Math/MathML",Fe=typeof document<"u"?document:null,Fn=Fe&&Fe.createElement("template"),Xr={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const i=t==="svg"?Fe.createElementNS(Zr,e):t==="mathml"?Fe.createElementNS(Qr,e):s?Fe.createElement(e,{is:s}):Fe.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Fe.createTextNode(e),createComment:e=>Fe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Fe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,i,o){const r=s?s.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),s),!(i===o||!(i=i.nextSibling)););else{Fn.innerHTML=qi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const l=Fn.content;if(n==="svg"||n==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,s)}return[r?r.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},el=Symbol("_vtc");function tl(e,t,s){const n=e[el];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const rs=Symbol("_vod"),Gi=Symbol("_vsh"),sl={beforeMount(e,{value:t},{transition:s}){e[rs]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):bt(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:n}){!t!=!s&&(n?t?(n.beforeEnter(e),bt(e,!0),n.enter(e)):n.leave(e,()=>{bt(e,!1)}):bt(e,t))},beforeUnmount(e,{value:t}){bt(e,t)}};function bt(e,t){e.style.display=t?e[rs]:"none",e[Gi]=!t}const nl=Symbol(""),il=/(^|;)\s*display\s*:/;function ol(e,t,s){const n=e.style,i=te(s);let o=!1;if(s&&!i){if(t)if(te(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();s[l]==null&&Qt(n,l,"")}else for(const r in t)s[r]==null&&Qt(n,r,"");for(const r in s)r==="display"&&(o=!0),Qt(n,r,s[r])}else if(i){if(t!==s){const r=n[nl];r&&(s+=";"+r),n.cssText=s,o=il.test(s)}}else t&&e.removeAttribute("style");rs in e&&(e[rs]=o?n.display:"",e[Gi]&&(n.display="none"))}const Dn=/\s*!important$/;function Qt(e,t,s){if($(s))s.forEach(n=>Qt(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=rl(e,t);Dn.test(s)?e.setProperty(et(n),s.replace(Dn,""),"important"):e[n]=s}}const Hn=["Webkit","Moz","ms"],Ms={};function rl(e,t){const s=Ms[t];if(s)return s;let n=Se(t);if(n!=="filter"&&n in e)return Ms[t]=n;n=ds(n);for(let i=0;i<Hn.length;i++){const o=Hn[i]+n;if(o in e)return Ms[t]=o}return t}const Wn="http://www.w3.org/1999/xlink";function Nn(e,t,s,n,i,o=lo(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Wn,t.slice(6,t.length)):e.setAttributeNS(Wn,t,s):s==null||o&&!Yn(s)?e.removeAttribute(t):e.setAttribute(t,o?"":Me(s)?String(s):s)}function Vn(e,t,s,n,i){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?qi(s):s);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,a=s==null?e.type==="checkbox"?"on":"":String(s);(l!==a||!("_value"in e))&&(e.value=a),s==null&&e.removeAttribute(t),e._value=s;return}let r=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=Yn(s):s==null&&l==="string"?(s="",r=!0):l==="number"&&(s=0,r=!0)}try{e[t]=s}catch{}r&&e.removeAttribute(i||t)}function Qe(e,t,s,n){e.addEventListener(t,s,n)}function ll(e,t,s,n){e.removeEventListener(t,s,n)}const Ln=Symbol("_vei");function cl(e,t,s,n,i=null){const o=e[Ln]||(e[Ln]={}),r=o[t];if(n&&r)r.value=n;else{const[l,a]=al(t);if(n){const d=o[t]=dl(n,i);Qe(e,l,d,a)}else r&&(ll(e,l,r,a),o[t]=void 0)}}const Un=/(?:Once|Passive|Capture)$/;function al(e){let t;if(Un.test(e)){t={};let n;for(;n=e.match(Un);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):et(e.slice(2)),t]}let Rs=0;const fl=Promise.resolve(),ul=()=>Rs||(fl.then(()=>Rs=0),Rs=Date.now());function dl(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;Re(hl(n,s.value),t,5,[n])};return s.value=e,s.attached=ul(),s}function hl(e,t){if($(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const jn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pl=(e,t,s,n,i,o)=>{const r=i==="svg";t==="class"?tl(e,n,r):t==="style"?ol(e,s,n):as(t)?Gs(t)||cl(e,t,s,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):gl(e,t,n,r))?(Vn(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Nn(e,t,n,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!te(n))?Vn(e,Se(t),n,o,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),Nn(e,t,n,r))};function gl(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&jn(t)&&D(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return jn(t)&&te(s)?!1:t in e}const ls=e=>{const t=e.props["onUpdate:modelValue"]||!1;return $(t)?s=>zt(t,s):t};function ml(e){e.target.composing=!0}function Bn(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const dt=Symbol("_assign"),$s={created(e,{modifiers:{lazy:t,trim:s,number:n}},i){e[dt]=ls(i);const o=n||i.props&&i.props.type==="number";Qe(e,t?"change":"input",r=>{if(r.target.composing)return;let l=e.value;s&&(l=l.trim()),o&&(l=Xt(l)),e[dt](l)}),s&&Qe(e,"change",()=>{e.value=e.value.trim()}),t||(Qe(e,"compositionstart",ml),Qe(e,"compositionend",Bn),Qe(e,"change",Bn))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:n,trim:i,number:o}},r){if(e[dt]=ls(r),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?Xt(e.value):e.value,a=t??"";l!==a&&(document.activeElement===e&&e.type!=="range"&&(n&&t===s||i&&e.value.trim()===a)||(e.value=a))}},_l={deep:!0,created(e,{value:t,modifiers:{number:s}},n){const i=fs(t);Qe(e,"change",()=>{const o=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>s?Xt(cs(r)):cs(r));e[dt](e.multiple?i?new Set(o):o:o[0]),e._assigning=!0,mi(()=>{e._assigning=!1})}),e[dt]=ls(n)},mounted(e,{value:t}){Kn(e,t)},beforeUpdate(e,t,s){e[dt]=ls(s)},updated(e,{value:t}){e._assigning||Kn(e,t)}};function Kn(e,t){const s=e.multiple,n=$(t);if(!(s&&!n&&!fs(t))){for(let i=0,o=e.options.length;i<o;i++){const r=e.options[i],l=cs(r);if(s)if(n){const a=typeof l;a==="string"||a==="number"?r.selected=t.some(d=>String(d)===String(l)):r.selected=ao(t,l)>-1}else r.selected=t.has(l);else if(ps(cs(r),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function cs(e){return"_value"in e?e._value:e.value}const vl=ue({patchProp:pl},Xr);let qn;function yl(){return qn||(qn=wr(vl))}const Sl=(...e)=>{const t=yl().createApp(...e),{mount:s}=t;return t.mount=n=>{const i=wl(n);if(!i)return;const o=t._component;!D(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=s(i,!1,bl(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t};function bl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wl(e){return te(e)?document.querySelector(e):e}const tt=(e,t)=>{const s=e.__vccOpts||e;for(const[n,i]of t)s[n]=i;return s},xl={name:"Navigation",props:{sections:{type:Array,required:!0},currentSection:{type:String,default:""}},emits:["navigate"],setup(e,{emit:t}){const s=X(!1),n=X(!1),i=X("speechSynthesis"in window),o=()=>{s.value=window.scrollY>50},r=()=>{n.value=!n.value},l=a=>{t("navigate",a),n.value=!1};return pt(()=>{window.addEventListener("scroll",o)}),Nt(()=>{window.removeEventListener("scroll",o)}),{isScrolled:s,isMenuOpen:n,speechSupported:i,toggleMenu:r,navigateToSection:l}}},Cl={class:"nav-container"},Tl=["onClick"],Il={class:"nav-icon"},El={class:"nav-text"},Ol={key:0,class:"speech-indicator"};function Al(e,t,s,n,i,o){return z(),J("nav",{class:we(["navigation",{scrolled:n.isScrolled}])},[w("div",Cl,[w("div",{class:"nav-logo",onClick:t[0]||(t[0]=r=>e.$emit("navigate","welcome"))},t[2]||(t[2]=[w("span",{class:"logo-icon"},"🇸🇬",-1),w("span",{class:"logo-text"},"新加坡攻略",-1)])),w("button",{class:we(["nav-toggle",{active:n.isMenuOpen}]),onClick:t[1]||(t[1]=(...r)=>n.toggleMenu&&n.toggleMenu(...r))},t[3]||(t[3]=[w("span",null,null,-1),w("span",null,null,-1),w("span",null,null,-1)]),2),w("div",{class:we(["nav-menu",{active:n.isMenuOpen}])},[(z(!0),J(fe,null,ft(s.sections,r=>(z(),J("a",{key:r.id,onClick:l=>n.navigateToSection(r.id),class:we(["nav-link",{active:s.currentSection===r.id}])},[w("span",Il,ee(r.icon),1),w("span",El,ee(r.title),1)],10,Tl))),128))],2),n.speechSupported?(z(),J("div",Ol,t[4]||(t[4]=[w("span",{class:"indicator-icon"},"🔊",-1),w("span",{class:"indicator-text"},"点击英文播放语音",-1)]))):Zt("",!0)])],2)}const Pl=tt(xl,[["render",Al],["__scopeId","data-v-9fa4576f"]]),kl={name:"SpeechText",props:{text:{type:String,required:!0},autoDetect:{type:Boolean,default:!0},forceEnglish:{type:Boolean,default:!1}},setup(e){const t=X(!1),s=X("speechSynthesis"in window),n=un(()=>{if(e.forceEnglish)return!0;if(!e.autoDetect)return!1;const r=/[a-zA-Z]/.test(e.text),l=/[\u4e00-\u9fa5]/.test(e.text);if(r&&!l)return!0;if(r&&l){const a=(e.text.match(/[a-zA-Z]/g)||[]).length,d=(e.text.match(/[\u4e00-\u9fa5]/g)||[]).length;return a>d}return!1}),i=r=>{if(!s.value){console.warn("浏览器不支持语音合成");return}window.speechSynthesis.cancel();const l=new SpeechSynthesisUtterance(r);l.lang="en-US",l.rate=.8,l.pitch=1,l.volume=1,l.onstart=()=>{t.value=!0},l.onend=()=>{t.value=!1},l.onerror=u=>{console.error("语音播放错误:",u.error),t.value=!1};const a=window.speechSynthesis.getVoices(),d=a.find(u=>u.lang.startsWith("en")&&u.name.includes("Google"))||a.find(u=>u.lang.startsWith("en"));d&&(l.voice=d),window.speechSynthesis.speak(l)};return{isSpeaking:t,speechSupported:s,isEnglish:n,handleClick:()=>{!n.value||!s.value||(t.value?(window.speechSynthesis.cancel(),t.value=!1):i(e.text))}}}},Ml=["title"];function Rl(e,t,s,n,i,o){return z(),J("span",{class:we(["speech-text",{speaking:n.isSpeaking,clickable:n.isEnglish,disabled:!n.speechSupported}]),onClick:t[0]||(t[0]=(...r)=>n.handleClick&&n.handleClick(...r)),title:n.isEnglish?"点击播放语音":""},ee(s.text),11,Ml)}const $l=tt(kl,[["render",Rl],["__scopeId","data-v-7b8351b7"]]),Fl={name:"WelcomeSection",components:{SpeechText:$l},setup(){const e=X([{id:1,icon:"🗣️",title:"语音播放",description:"点击任何英文文本即可听到标准发音，提升英语交流能力"},{id:2,icon:"📍",title:"详细攻略",description:"四天完整行程规划，包含景点、美食、交通、购物全方位指南"},{id:3,icon:"💬",title:"实用对话",description:"1200+句英语对话，涵盖住宿、餐饮、购物、紧急情况等各种场景"},{id:4,icon:"🍽️",title:"美食指南",description:"详细到菜名的美食推荐，包含价格、地址、点餐用语"},{id:5,icon:"🚇",title:"交通指南",description:"地铁、公交、出租车、Grab等各种交通方式详细使用攻略"},{id:6,icon:"🛍️",title:"购物攻略",description:"乌节路、牛车水等购物区域完整指南，包含退税流程"}]),t=X([{id:1,icon:"📅",title:"查看行程",description:"浏览四天详细行程安排"},{id:2,icon:"🗣️",title:"学习对话",description:"点击英文文本练习发音"},{id:3,icon:"🍜",title:"探索美食",description:"发现新加坡特色美食"},{id:4,icon:"🚇",title:"了解交通",description:"掌握出行交通方式"}]),s=X([{id:1,number:"4天",label:"完整行程"},{id:2,number:"1200+",label:"英语对话"},{id:3,number:"100+",label:"景点美食"},{id:4,number:"9个",label:"专题攻略"}]);return{features:e,quickStartItems:t,stats:s}}},Dl={id:"welcome",class:"welcome-section"},Hl={class:"welcome-container"},Wl={class:"features-grid"},Nl={class:"feature-icon"},Vl={class:"feature-title"},Ll={class:"feature-description"},Ul={class:"quick-start"},jl={class:"quick-start-grid"},Bl={class:"quick-item-icon"},Kl={class:"quick-item-content"},ql={class:"quick-item-title"},Gl={class:"quick-item-description"},zl={class:"speech-demo"},Jl={class:"demo-text"},Yl={class:"stats-section"},Zl={class:"stat-number"},Ql={class:"stat-label"};function Xl(e,t,s,n,i,o){const r=ot("SpeechText");return z(),J("section",Dl,[w("div",Hl,[t[3]||(t[3]=w("div",{class:"welcome-header"},[w("h1",{class:"welcome-title"},[w("span",{class:"title-icon"},"🇸🇬"),Ft(" 新加坡四天三夜旅游攻略 ")]),w("p",{class:"welcome-subtitle"}," 超详细攻略 · 1200+句英语对话 · 点击英文即可语音播放 ")],-1)),w("div",Wl,[(z(!0),J(fe,null,ft(n.features,l=>(z(),J("div",{class:"feature-card",key:l.id},[w("div",Nl,ee(l.icon),1),w("h3",Vl,ee(l.title),1),w("p",Ll,ee(l.description),1)]))),128))]),w("div",Ul,[t[0]||(t[0]=w("h2",{class:"quick-start-title"},"🚀 快速开始",-1)),w("div",jl,[(z(!0),J(fe,null,ft(n.quickStartItems,l=>(z(),J("div",{class:"quick-start-item",key:l.id},[w("div",Bl,ee(l.icon),1),w("div",Kl,[w("h4",ql,ee(l.title),1),w("p",Gl,ee(l.description),1)])]))),128))])]),w("div",zl,[t[1]||(t[1]=w("h3",{class:"demo-title"},"🔊 语音功能演示",-1)),t[2]||(t[2]=w("p",{class:"demo-description"},"点击下面的英文文本试试语音播放功能：",-1)),w("div",Jl,[ne(r,{text:"Hello! Welcome to Singapore!"}),ne(r,{text:"This is an amazing travel guide."}),ne(r,{text:"Click any English text to hear pronunciation."})])]),w("div",Yl,[(z(!0),J(fe,null,ft(n.stats,l=>(z(),J("div",{class:"stat-item",key:l.id},[w("div",Zl,ee(l.number),1),w("div",Ql,ee(l.label),1)]))),128))])])])}const ec=tt(Fl,[["render",Xl],["__scopeId","data-v-3481a185"]]),tc={name:"GuideSection",props:{title:{type:String,required:!0},content:{type:String,required:!0},icon:{type:String,default:"📖"}},setup(e){return{processedContent:un(()=>{let s=e.content;return s=s.replace(/^### (.*$)/gim,"<h3>$1</h3>").replace(/^## (.*$)/gim,"<h2>$1</h2>").replace(/^# (.*$)/gim,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/```([\s\S]*?)```/g,"<pre><code>$1</code></pre>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank">$1</a>').replace(/\n/g,"<br>"),s=s.replace(/"([^"]*[a-zA-Z][^"]*)"/g,`<span class="speech-text clickable" onclick="speakText('$1')">$1</span>`),s=s.replace(/\|(.+)\|/g,(n,i)=>"<tr>"+i.split("|").map(r=>r.trim()).map(r=>`<td>${r}</td>`).join("")+"</tr>"),s})}},mounted(){window.speakText=e=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const t=new SpeechSynthesisUtterance(e);t.lang="en-US",t.rate=.8,t.pitch=1,t.volume=1;const s=window.speechSynthesis.getVoices(),n=s.find(i=>i.lang.startsWith("en")&&i.name.includes("Google"))||s.find(i=>i.lang.startsWith("en"));n&&(t.voice=n),window.speechSynthesis.speak(t)}}}},sc={class:"guide-section"},nc={class:"section-header"},ic={class:"section-title"},oc={class:"section-icon"},rc={class:"section-content"},lc=["innerHTML"];function cc(e,t,s,n,i,o){return z(),J("section",sc,[w("div",nc,[w("h2",ic,[w("span",oc,ee(s.icon),1),Ft(" "+ee(s.title),1)])]),w("div",rc,[w("div",{innerHTML:n.processedContent,class:"content-html"},null,8,lc)])])}const ac=tt(tc,[["render",cc],["__scopeId","data-v-aad81232"]]),fc={name:"SpeechControls",props:{isSpeaking:{type:Boolean,default:!1},speechSupported:{type:Boolean,default:!1}},emits:["toggle-speech","stop-speech"],setup(e,{emit:t}){const s=X(!1),n=X([]),i=X(.8),o=X(1),r=X(1),l=X(""),a=()=>{if("speechSynthesis"in window){const I=window.speechSynthesis.getVoices();n.value=I.filter(y=>y.lang.startsWith("en")).sort((y,k)=>y.name.localeCompare(k.name))}},d=()=>{s.value=!s.value},u=()=>{const I={rate:i.value,pitch:o.value,volume:r.value,voice:l.value};localStorage.setItem("speechSettings",JSON.stringify(I)),window.speechSettings=I},p=()=>{if("speechSynthesis"in window){window.speechSynthesis.cancel();const I=new SpeechSynthesisUtterance("Hello! This is a test of the speech synthesis.");if(I.rate=parseFloat(i.value),I.pitch=parseFloat(o.value),I.volume=parseFloat(r.value),I.lang="en-US",l.value){const y=n.value.find(k=>k.name===l.value);y&&(I.voice=y)}window.speechSynthesis.speak(I)}},C=()=>{i.value=.8,o.value=1,r.value=1,l.value="",u()},O=()=>{try{const I=localStorage.getItem("speechSettings");if(I){const y=JSON.parse(I);i.value=y.rate||.8,o.value=y.pitch||1,r.value=y.volume||1,l.value=y.voice||""}}catch(I){console.warn("加载语音设置失败:",I)}};return pt(()=>{a(),O(),u(),"speechSynthesis"in window&&(window.speechSynthesis.onvoiceschanged=a)}),{showSettings:s,availableVoices:n,speechRate:i,speechPitch:o,speechVolume:r,selectedVoice:l,toggleSettings:d,updateSpeechSettings:u,testSpeech:p,resetSettings:C}}},uc={class:"speech-controls"},dc=["disabled"],hc={key:0},pc={key:1},gc={class:"speech-tooltip"},mc={key:1,class:"settings-panel"},_c={class:"settings-header"},vc={class:"settings-content"},yc={class:"setting-item"},Sc={class:"setting-value"},bc={class:"setting-item"},wc={class:"setting-value"},xc={class:"setting-item"},Cc={class:"setting-value"},Tc={key:0,class:"setting-item"},Ic=["value"],Ec={class:"setting-item"},Oc={class:"setting-item"};function Ac(e,t,s,n,i,o){return z(),J("div",uc,[w("button",{class:we(["speech-btn",{disabled:!s.speechSupported,active:s.isSpeaking}]),onClick:t[0]||(t[0]=r=>e.$emit("toggle-speech")),disabled:!s.speechSupported},[s.isSpeaking?(z(),J("span",hc,"🔴")):(z(),J("span",pc,"🔊")),w("div",gc,ee(s.isSpeaking?"停止语音":"启用语音播放"),1)],10,dc),s.isSpeaking?(z(),J("button",{key:0,class:"speech-btn stop-btn",onClick:t[1]||(t[1]=r=>e.$emit("stop-speech"))},t[14]||(t[14]=[Ft(" ⏹️ "),w("div",{class:"speech-tooltip"},"停止播放",-1)]))):Zt("",!0),w("button",{class:we(["speech-btn settings-btn",{active:n.showSettings}]),onClick:t[2]||(t[2]=(...r)=>n.toggleSettings&&n.toggleSettings(...r))},t[15]||(t[15]=[Ft(" ⚙️ "),w("div",{class:"speech-tooltip"},"语音设置",-1)]),2),n.showSettings?(z(),J("div",mc,[w("div",_c,[t[16]||(t[16]=w("h4",null,"语音设置",-1)),w("button",{class:"close-btn",onClick:t[3]||(t[3]=r=>n.showSettings=!1)},"×")]),w("div",vc,[w("div",yc,[t[17]||(t[17]=w("label",null,"语速",-1)),wt(w("input",{type:"range",min:"0.5",max:"2",step:"0.1","onUpdate:modelValue":t[4]||(t[4]=r=>n.speechRate=r),onInput:t[5]||(t[5]=(...r)=>n.updateSpeechSettings&&n.updateSpeechSettings(...r))},null,544),[[$s,n.speechRate]]),w("span",Sc,ee(n.speechRate)+"x",1)]),w("div",bc,[t[18]||(t[18]=w("label",null,"音调",-1)),wt(w("input",{type:"range",min:"0.5",max:"2",step:"0.1","onUpdate:modelValue":t[6]||(t[6]=r=>n.speechPitch=r),onInput:t[7]||(t[7]=(...r)=>n.updateSpeechSettings&&n.updateSpeechSettings(...r))},null,544),[[$s,n.speechPitch]]),w("span",wc,ee(n.speechPitch),1)]),w("div",xc,[t[19]||(t[19]=w("label",null,"音量",-1)),wt(w("input",{type:"range",min:"0",max:"1",step:"0.1","onUpdate:modelValue":t[8]||(t[8]=r=>n.speechVolume=r),onInput:t[9]||(t[9]=(...r)=>n.updateSpeechSettings&&n.updateSpeechSettings(...r))},null,544),[[$s,n.speechVolume]]),w("span",Cc,ee(Math.round(n.speechVolume*100))+"%",1)]),n.availableVoices.length>0?(z(),J("div",Tc,[t[21]||(t[21]=w("label",null,"语音",-1)),wt(w("select",{"onUpdate:modelValue":t[10]||(t[10]=r=>n.selectedVoice=r),onChange:t[11]||(t[11]=(...r)=>n.updateSpeechSettings&&n.updateSpeechSettings(...r))},[t[20]||(t[20]=w("option",{value:""},"默认语音",-1)),(z(!0),J(fe,null,ft(n.availableVoices,r=>(z(),J("option",{key:r.name,value:r.name},ee(r.name)+" ("+ee(r.lang)+") ",9,Ic))),128))],544),[[_l,n.selectedVoice]])])):Zt("",!0),w("div",Ec,[w("button",{class:"test-btn",onClick:t[12]||(t[12]=(...r)=>n.testSpeech&&n.testSpeech(...r))}," 🎵 测试语音 ")]),w("div",Oc,[w("button",{class:"reset-btn",onClick:t[13]||(t[13]=(...r)=>n.resetSettings&&n.resetSettings(...r))}," 🔄 重置设置 ")])])])):Zt("",!0)])}const Pc=tt(fc,[["render",Ac],["__scopeId","data-v-f302423f"]]),kc={name:"BackToTop",emits:["click"],setup(){const e=X(!1),t=()=>{e.value=window.scrollY>300};return pt(()=>{window.addEventListener("scroll",t)}),Nt(()=>{window.removeEventListener("scroll",t)}),{visible:e}}};function Mc(e,t,s,n,i,o){return z(),J("button",{class:we(["back-to-top",{visible:n.visible}]),onClick:t[0]||(t[0]=r=>e.$emit("click"))},t[1]||(t[1]=[w("span",{class:"arrow"},"↑",-1),w("span",{class:"text"},"顶部",-1)]),2)}const Rc=tt(kc,[["render",Mc],["__scopeId","data-v-c1256315"]]);function $c(){const e=X(!1),t=X(!1),s=X(null),n=()=>(t.value="speechSynthesis"in window,t.value),i=()=>{try{const I=localStorage.getItem("speechSettings");if(I)return JSON.parse(I)}catch(I){console.warn("获取语音设置失败:",I)}return{rate:.9,pitch:1.1,volume:.9,voice:""}},o=(I,y={})=>t.value?new Promise((k,A)=>{r();const R=new SpeechSynthesisUtterance(I),W={...i(),...y};if(R.lang=y.lang||"en-US",R.rate=parseFloat(W.rate),R.pitch=parseFloat(W.pitch),R.volume=parseFloat(W.volume),W.voice){const B=window.speechSynthesis.getVoices().find(Z=>Z.name===W.voice);B&&(R.voice=B)}else{const E=window.speechSynthesis.getVoices(),Z=[E.find(H=>H.name.includes("Google US English")),E.find(H=>H.name.includes("Google")&&H.lang==="en-US"),E.find(H=>H.name.includes("Microsoft Zira")),E.find(H=>H.name.includes("Microsoft David")),E.find(H=>H.name.includes("Microsoft")&&H.lang==="en-US"),E.find(H=>H.name.includes("Samantha")),E.find(H=>H.name.includes("Alex")),E.find(H=>H.name.includes("Victoria")),E.find(H=>H.lang==="en-US"&&H.localService),E.find(H=>H.lang==="en-GB"&&H.localService),E.find(H=>H.lang.startsWith("en"))].find(H=>H);Z&&(R.voice=Z,console.log("使用优化语音:",Z.name,Z.lang))}R.onstart=()=>{e.value=!0,s.value=R},R.onend=()=>{e.value=!1,s.value=null,k()},R.onerror=E=>{console.error("语音播放错误:",E.error),e.value=!1,s.value=null,A(new Error(`Speech synthesis error: ${E.error}`))},R.onpause=()=>{e.value=!1},R.onresume=()=>{e.value=!0};try{window.speechSynthesis.speak(R)}catch(E){console.error("播放语音失败:",E),e.value=!1,s.value=null,A(E)}}):(console.warn("浏览器不支持语音合成"),Promise.reject(new Error("Speech synthesis not supported"))),r=()=>{t.value&&window.speechSynthesis.speaking&&(window.speechSynthesis.cancel(),e.value=!1,s.value=null)},l=()=>{t.value&&window.speechSynthesis.speaking&&(window.speechSynthesis.pause(),e.value=!1)},a=()=>{t.value&&window.speechSynthesis.paused&&(window.speechSynthesis.resume(),e.value=!0)},d=()=>{e.value?r():window.speechSynthesis.paused&&a()},u=()=>t.value?window.speechSynthesis.getVoices():[],p=()=>u().filter(I=>I.lang.startsWith("en")),C=I=>{const y=/[a-zA-Z]/.test(I),k=/[\u4e00-\u9fa5]/.test(I);if(y&&!k)return"en";if(k&&!y)return"zh";if(y&&k){const A=(I.match(/[a-zA-Z]/g)||[]).length,R=(I.match(/[\u4e00-\u9fa5]/g)||[]).length;return A>R?"en":"zh"}return"en"},O=(I,y={})=>{const A=C(I)==="zh"?"zh-CN":"en-US";return o(I,{...y,lang:A})};return pt(()=>{n(),t.value&&(window.speechSynthesis.onvoiceschanged=()=>{})}),{isSpeaking:e,speechSupported:t,speak:o,stopSpeech:r,pauseSpeech:l,resumeSpeech:a,toggleSpeech:d,getVoices:u,getEnglishVoices:p,detectLanguage:C,smartSpeak:O,getSpeechSettings:i}}function Fc(){const e=X(""),t=X(!1),s=(y,k=80)=>{const A=document.getElementById(y);if(A){const R=A.offsetTop-k;window.scrollTo({top:R,behavior:"smooth"})}},n=y=>{s(y),e.value=y},i=()=>{window.scrollTo({top:0,behavior:"smooth"})},o=()=>{const y=document.querySelectorAll("[id]"),k=window.scrollY+100;let A="";return y.forEach(R=>{const W=R.offsetTop,E=R.offsetHeight;k>=W&&k<W+E&&(A=R.id)}),A},r=()=>{t.value=window.scrollY>300;const y=o();y&&y!==e.value&&(e.value=y)},a=((y,k)=>{let A;return function(){const R=arguments,W=this;A||(y.apply(W,R),A=!0,setTimeout(()=>A=!1,k))}})(r,100),d=(y,k=500)=>{const A=window.scrollY,R=y-A,W=performance.now(),E=Z=>Z<.5?2*Z*Z:-1+(4-2*Z)*Z,B=Z=>{const H=Z-W,be=Math.min(H/k,1),st=E(be);window.scrollTo(0,A+R*st),be<1&&requestAnimationFrame(B)};requestAnimationFrame(B)},u=y=>{const k=y.getBoundingClientRect(),A=window.innerHeight;return{isVisible:k.top<A&&k.bottom>0,visibilityRatio:Math.max(0,Math.min(1,(Math.min(k.bottom,A)-Math.max(k.top,0))/k.height)),distanceFromTop:k.top,distanceFromBottom:A-k.bottom}},p=(y,k=.5)=>{const A=u(y);return A.isVisible&&A.visibilityRatio>=k},C=()=>{const y=Array.from(document.querySelectorAll("[id]")),k=y.findIndex(A=>A.id===e.value);if(k>=0&&k<y.length-1){const A=y[k+1];s(A.id)}},O=()=>{const y=Array.from(document.querySelectorAll("[id]")),k=y.findIndex(A=>A.id===e.value);if(k>0){const A=y[k-1];s(A.id)}},I=y=>{if(y.ctrlKey||y.metaKey)switch(y.key){case"ArrowUp":y.preventDefault(),O();break;case"ArrowDown":y.preventDefault(),C();break;case"Home":y.preventDefault(),i();break;case"End":y.preventDefault(),window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});break}};return pt(()=>{window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("keydown",I),r()}),Nt(()=>{window.removeEventListener("scroll",a),window.removeEventListener("keydown",I)}),{currentSection:e,showBackToTop:t,scrollToElement:s,scrollToSection:n,scrollToTop:i,smoothScrollTo:d,getElementVisibility:u,isElementInViewport:p,scrollToNextSection:C,scrollToPrevSection:O}}const Dc=[{id:"day1",title:"第一天行程",icon:"📅",content:`
## 🌟 第一天：文化地标游

### 🛬 上午：星耀樟宜 (Jewel Changi Airport)
**时间**: 9:00-11:00
**地点**: 樟宜机场T1航站楼
**亮点**: 
- 全球最高室内瀑布 "Rain Vortex"
- 森林谷 "Forest Valley" 
- 天空之网 "Sky Net"

**实用英文对话**:
"Excuse me, where is the Rain Vortex?" (请问雨漩涡在哪里？)
"How do I get to Forest Valley?" (怎么去森林谷？)
"What time does the light show start?" (灯光秀几点开始？)

### 🏛️ 中午：福康宁公园 (Fort Canning Park)
**时间**: 12:00-14:00
**交通**: 地铁红线 City Hall站，步行10分钟
**亮点**:
- 新加坡历史发源地
- 考古挖掘现场
- 香料花园

**实用英文对话**:
"Is there a guided tour available?" (有导览服务吗？)
"What's the historical significance of this place?" (这个地方有什么历史意义？)
"Can I take photos here?" (这里可以拍照吗？)

### 🏛️ 下午：新加坡国家博物馆 (National Museum)
**时间**: 14:30-16:30
**门票**: S$15 (成人)
**亮点**:
- 新加坡历史展览
- 互动多媒体展示
- 建筑艺术欣赏

**实用英文对话**:
"Do you have an audio guide in English?" (有英文语音导览吗？)
"How long does it take to see the main exhibition?" (看主要展览需要多长时间？)
"Is photography allowed inside?" (里面可以拍照吗？)

### 🦁 傍晚：鱼尾狮公园 (Merlion Park)
**时间**: 17:00-18:30
**交通**: 地铁红/绿线 Raffles Place站
**亮点**:
- 新加坡地标鱼尾狮雕像
- 滨海湾全景
- 金沙酒店夜景

**实用英文对话**:
"Could you take a photo of us with the Merlion?" (能帮我们和鱼尾狮拍张照吗？)
"What's the best angle for photos?" (最佳拍照角度是什么？)
"When is the best time for sunset photos?" (什么时候拍日落照片最好？)

### 🌸 晚上：滨海湾花园 (Gardens by the Bay)
**时间**: 19:00-21:30
**门票**: 户外免费，温室S$28
**亮点**:
- 超级树灯光秀 (19:45 & 20:45)
- 云雾林和花穹温室
- 空中走道

**实用英文对话**:
"What time is the light show?" (灯光秀几点开始？)
"Where's the best spot to watch?" (最佳观看位置在哪里？)
"How much are the conservatory tickets?" (温室门票多少钱？)

### 🍽️ 夜宵：克拉码头 (Clarke Quay)
**时间**: 22:00-23:30
**特色**: 河畔餐饮娱乐区
**推荐**: 
- 新加坡司令鸡尾酒
- 河畔夜景
- 各国料理

**实用英文对话**:
"Do you have a table with river view?" (有河景桌位吗？)
"What's your signature cocktail?" (你们的招牌鸡尾酒是什么？)
"Is there live music tonight?" (今晚有现场音乐吗？)

### 💰 第一天预算参考
- **交通**: S$8-12 (地铁一日票)
- **门票**: S$43 (博物馆S$15 + 滨海湾花园S$28)
- **餐饮**: S$50-80
- **总计**: S$101-135

### 📱 实用APP推荐
- **MyTransport.SG**: 地铁路线查询
- **Gardens by the Bay**: 官方APP，查看活动时间
- **Google Translate**: 语言翻译助手
`},{id:"day2",title:"第二天行程",icon:"🦁",content:`
## 🐾 第二天：动物园主题日

### 🦜 上午：裕廊飞禽公园 (Jurong Bird Park)
**时间**: 9:00-12:00
**门票**: S$37 (成人)
**交通**: 地铁绿线 Boon Lay站，转乘194路公交
**亮点**:
- 4000多只鸟类
- 飞禽表演秀
- 瀑布鸟舍

**实用英文对话**:
"What time is the bird show?" (鸟类表演几点？)
"Can I feed the birds?" (可以喂鸟吗？)
"Where is the penguin exhibit?" (企鹅展区在哪里？)
"Do you have a map?" (有地图吗？)

### 🐘 下午：新加坡动物园 (Singapore Zoo)
**时间**: 13:00-17:00
**门票**: S$39 (成人)
**交通**: 地铁红线 Ang Mo Kio站，转乘138路公交
**亮点**:
- 开放式动物园设计
- 大象表演
- 白犀牛

**实用英文对话**:
"What time is the elephant show?" (大象表演几点？)
"Where can I see the white rhinos?" (哪里可以看白犀牛？)
"Is there a tram tour?" (有观光车吗？)
"Can I bring my own food?" (可以带自己的食物吗？)

### 🐼 傍晚：河川生态园 (River Safari)
**时间**: 17:30-19:00
**门票**: S$37 (成人)
**亮点**:
- 大熊猫凯凯和嘉嘉
- 亚马逊河探险
- 海牛馆

**实用英文对话**:
"Where are the giant pandas?" (大熊猫在哪里？)
"What time do they feed the pandas?" (什么时候喂熊猫？)
"How long is the Amazon River Quest?" (亚马逊河探险多长时间？)

### 🌙 夜晚：夜间野生动物园 (Night Safari)
**时间**: 19:30-22:30
**门票**: S$49 (成人)
**亮点**:
- 全球首个夜间动物园
- 夜行动物观察
- 部落表演

**实用英文对话**:
"What animals are most active at night?" (什么动物晚上最活跃？)
"Can I use flash photography?" (可以用闪光灯拍照吗？)
"Where does the tram tour start?" (观光车从哪里开始？)
"What time is the tribal show?" (部落表演几点？)

### 🍽️ 餐饮推荐

#### 午餐：动物园内餐厅
**推荐**: Ah Meng Restaurant
**特色**: 以著名红毛猩猩阿明命名
**价格**: S$15-25/人

**实用英文对话**:
"Do you have vegetarian options?" (有素食选择吗？)
"What's the children's menu?" (儿童菜单有什么？)
"Can we eat outside?" (可以在外面用餐吗？)

#### 晚餐：夜间动物园
**推荐**: Ulu Ulu Safari Restaurant
**特色**: 自助晚餐配表演
**价格**: S$48/成人

**实用英文对话**:
"Is the buffet included with admission?" (自助餐包含在门票里吗？)
"What time does the dinner show start?" (晚餐表演几点开始？)
"Do you have halal food?" (有清真食物吗？)

### 🚌 交通攻略

#### 动物园专线巴士
- **Mandai Express**: 直达四个动物园
- **价格**: S$1/程 (EZ-Link卡)
- **班次**: 15-20分钟一班

#### 套票优惠
- **Park Hopper**: 任选2个园区 S$54
- **Park Hopper Plus**: 任选3个园区 S$72
- **Grand Package**: 4个园区全包 S$88

**实用英文对话**:
"Where can I buy the Park Hopper ticket?" (哪里可以买套票？)
"Is the shuttle bus free?" (班车免费吗？)
"How often does the bus run?" (班车多久一班？)

### 💰 第二天预算参考
- **门票**: S$88 (四园套票)
- **交通**: S$10-15
- **餐饮**: S$60-80
- **总计**: S$158-183

### 📸 拍照小贴士
- **最佳时间**: 上午10-11点，下午4-5点
- **推荐地点**: 
  - 飞禽公园瀑布鸟舍
  - 动物园大象表演台
  - 河川生态园熊猫馆
  - 夜间动物园入口

**实用英文对话**:
"Could you take a photo of us?" (能帮我们拍张照吗？)
"What's the best spot for photos?" (最佳拍照地点在哪里？)
"Can I use a tripod here?" (这里可以用三脚架吗？)
`},{id:"english-guide",title:"英文对话指南",icon:"🗣️",content:`
## 🗣️ 实用英文对话指南

### 🏨 住宿场景 (Accommodation)

#### 酒店入住
"Good morning, I have a reservation under the name Smith." (早上好，我用史密斯的名字预订了房间)
"Could I see your passport, please?" (能看一下您的护照吗？)
"What time is check-out?" (退房时间是几点？)
"Could I get a wake-up call at 8 AM?" (能在早上8点叫醒我吗？)

#### 房间服务
"The air conditioning is not working." (空调不工作)
"Could I get some extra towels?" (能给我一些额外的毛巾吗？)
"Where is the ice machine?" (制冰机在哪里？)
"Is there room service available?" (有客房服务吗？)

### 🚇 交通场景 (Transportation)

#### 地铁购票
"Where can I buy an EZ-Link card?" (哪里可以买易通卡？)
"How much does it cost to Marina Bay?" (到滨海湾多少钱？)
"Which line goes to Changi Airport?" (哪条线去樟宜机场？)
"Do I need to transfer?" (需要换乘吗？)

#### 出租车/Grab
"Could you take me to Sentosa Island?" (能带我去圣淘沙岛吗？)
"How much will it cost?" (要多少钱？)
"Please use the meter." (请打表)
"Could you wait for me here?" (能在这里等我吗？)

### 🍽️ 餐饮场景 (Dining)

#### 小贩中心点餐
"What do you recommend?" (您推荐什么？)
"Is this dish spicy?" (这道菜辣吗？)
"Can you make it less spicy?" (能做得不那么辣吗？)
"How much is the chicken rice?" (鸡饭多少钱？)

#### 餐厅用餐
"Table for two, please." (请给我们两人桌)
"Could I see the menu?" (能看看菜单吗？)
"What's your signature dish?" (你们的招牌菜是什么？)
"Could I have the bill, please?" (能结账吗？)

### 🛍️ 购物场景 (Shopping)

#### 询问商品
"Do you have this in a different size?" (有其他尺寸吗？)
"How much is this?" (这个多少钱？)
"Can I try this on?" (我可以试穿吗？)
"Do you accept credit cards?" (接受信用卡吗？)

#### 退税咨询
"Can I get a tax refund?" (我可以退税吗？)
"What's the minimum amount?" (最低金额是多少？)
"Where do I claim the refund?" (在哪里申请退款？)

### 🎡 景点场景 (Attractions)

#### 购票咨询
"How much are adult tickets?" (成人票多少钱？)
"Do you have student discounts?" (有学生折扣吗？)
"What time does it open?" (几点开门？)
"How long does a visit take?" (参观需要多长时间？)

#### 游览咨询
"Where is the information desk?" (咨询台在哪里？)
"Do you have a map?" (有地图吗？)
"What time is the next show?" (下场表演几点？)
"Can I take photos here?" (这里可以拍照吗？)

### 🚨 紧急场景 (Emergency)

#### 医疗急救
"I need a doctor." (我需要医生)
"Where is the nearest hospital?" (最近的医院在哪里？)
"I'm allergic to..." (我对...过敏)
"Could you call an ambulance?" (能叫救护车吗？)

#### 报警求助
"I need to report a theft." (我需要报案)
"Someone stole my wallet." (有人偷了我的钱包)
"Where is the police station?" (警察局在哪里？)
"I'm lost, can you help me?" (我迷路了，能帮我吗？)

### 💡 发音小贴士

#### 重要地名发音
- **Marina Bay** [mə'riːnə beɪ] 滨海湾
- **Sentosa** [sen'təʊsə] 圣淘沙  
- **Orchard Road** ['ɔːtʃəd rəʊd] 乌节路
- **Chinatown** ['tʃaɪnətaʊn] 牛车水
- **Little India** ['lɪtl 'ɪndiə] 小印度

#### 常用短语重音
- **Excuse me** [ɪk'skjuːz miː] (重音在excuse)
- **Thank you** [θæŋk juː] (重音在thank)
- **How much** [haʊ mʌtʃ] (重音在much)
- **Where is** [weər ɪz] (重音在where)

### 🎯 实用表达技巧

#### 礼貌用语
- 开始对话: "Excuse me" / "Sorry to bother you"
- 请求帮助: "Could you help me?" / "Would you mind...?"
- 表示感谢: "Thank you so much" / "I really appreciate it"
- 道歉: "I'm sorry" / "My apologies"

#### 确认理解
- "Could you repeat that?" (能重复一遍吗？)
- "I don't understand." (我不明白)
- "Could you speak slower?" (能说慢一点吗？)
- "What does this mean?" (这是什么意思？)

#### 表达需求
- "I need..." (我需要...)
- "I would like..." (我想要...)
- "Could I have...?" (我可以要...吗？)
- "Is it possible to...?" (可能...吗？)
`},{id:"food-guide",title:"美食指南",icon:"🍜",content:`
## 🍜 新加坡美食指南

### 🐔 海南鸡饭 (Hainanese Chicken Rice)
**英文名**: Hainanese Chicken Rice
**价格**: S$3.5-8
**特色**: 新加坡国菜，嫩滑白切鸡配香米饭

#### 推荐餐厅
1. **天天海南鸡饭 (Tian Tian)**
   - 地址: Maxwell Food Centre #01-10
   - 特色: 米其林推荐，排队名店

2. **文东记 (Boon Tong Kee)**
   - 地址: 多家分店
   - 特色: 连锁品牌，品质稳定

#### 点餐英文对话
"One plate of chicken rice, please." (请来一份鸡饭)
"White chicken or roasted chicken?" (白切鸡还是烧鸡？)
"Can I have extra rice?" (可以多加点米饭吗？)
"With soup, please." (要配汤)

### 🍲 肉骨茶 (Bak Kut Teh)
**英文名**: Pork Rib Soup
**价格**: S$7-15
**特色**: 胡椒香浓的排骨汤

#### 推荐餐厅
1. **松发肉骨茶 (Song Fa)**
   - 地址: 11 New Bridge Road
   - 特色: 胡椒味浓郁，配油条

2. **发起人肉骨茶 (Founder)**
   - 地址: 347 Balestier Road
   - 特色: 药材香味，汤色清澈

#### 点餐对话
"One bowl of bak kut teh, please." (请来一碗肉骨茶)
"Do you have youtiao?" (有油条吗？)
"Can I have extra soup?" (可以加汤吗？)

### 🍜 叻沙 (Laksa)
**英文名**: Spicy Coconut Noodle Soup
**价格**: S$4-8
**特色**: 椰浆咖喱汤底配米粉

#### 叻沙种类
- **Katong Laksa**: 加东叻沙，用勺子吃
- **Curry Laksa**: 咖喱叻沙，椰浆味浓
- **Assam Laksa**: 亚参叻沙，酸辣口味

#### 推荐餐厅
1. **328加东叻沙 (328 Katong Laksa)**
   - 地址: 51 East Coast Road
   - 特色: 加东叻沙发源地

#### 点餐对话
"One bowl of laksa, please." (请来一碗叻沙)
"Extra prawns, please." (多加虾)
"Is it very spicy?" (很辣吗？)

### 🍛 椰浆饭 (Nasi Lemak)
**英文名**: Coconut Rice
**价格**: S$3-8
**特色**: 椰浆煮制的香米饭配参巴辣椒酱

#### 经典配菜
- **Ikan Bilis**: 江鱼仔 (小银鱼干)
- **Sambal**: 参巴辣椒酱
- **Cucumber**: 黄瓜片
- **Peanuts**: 花生米
- **Fried Chicken**: 炸鸡

#### 点餐对话
"One nasi lemak with fried chicken." (一份椰浆饭配炸鸡)
"Extra sambal, please." (多加参巴酱)
"Can I have it less spicy?" (可以不要那么辣吗？)

### ☕ 咖椰吐司 (Kaya Toast)
**英文名**: Coconut Jam Toast
**价格**: S$2-6
**特色**: 咖椰酱吐司配半熟蛋

#### 套餐组合
- **Kaya Toast Set**: 咖椰吐司套餐
- **Soft-boiled Eggs**: 半熟蛋
- **Kopi/Teh**: 咖啡/茶

#### 推荐餐厅
**亚坤咖椰吐司 (Ya Kun Kaya Toast)**
- 地址: 多家分店
- 特色: 连锁老字号

#### 点餐对话
"One kaya toast set, please." (请来一份咖椰吐司套餐)
"Kopi-O kosong." (黑咖啡无糖)
"How do I eat the soft-boiled egg?" (半熟蛋怎么吃？)

### 🍹 本地饮品

#### 南洋咖啡
- **Kopi**: 咖啡加炼乳
- **Kopi-O**: 黑咖啡加糖
- **Kopi-C**: 咖啡加淡奶和糖
- **Kopi Kosong**: 黑咖啡无糖

#### 茶类选择
- **Teh**: 奶茶
- **Teh-O**: 柠檬茶
- **Teh Tarik**: 拉茶

#### 点餐对话
"One kopi-O, please." (请来一杯黑咖啡)
"Teh tarik, less sweet." (拉茶，少糖)
"What's the difference between kopi and kopi-O?" (咖啡和黑咖啡有什么区别？)

### 🏪 小贩中心攻略

#### 著名小贩中心
1. **Maxwell Food Centre**
   - 地址: 1 Kadayanallur Street
   - 特色: 天天海南鸡饭、真真粥品

2. **Newton Food Centre**
   - 地址: 500 Clemenceau Avenue North
   - 特色: 海鲜、沙爹、烧烤

3. **Lau Pa Sat**
   - 地址: 18 Raffles Quay
   - 特色: 历史建筑，晚上沙爹街

#### 用餐流程
1. **找座位**: 先用纸巾或包占座
2. **点餐**: 到各摊位点餐
3. **付款**: 现金为主，部分接受电子支付
4. **等餐**: 摊主会送到座位或自取

#### 实用对话
"Is this seat taken?" (这个座位有人吗？)
"Can you deliver to table 15?" (能送到15号桌吗？)
"Do you accept credit cards?" (接受信用卡吗？)
"Where can I return the plates?" (餐具在哪里归还？)
`}],Hc={name:"App",components:{Navigation:Pl,WelcomeSection:ec,GuideSection:ac,SpeechControls:Pc,BackToTop:Rc},setup(){const{isSpeaking:e,speechSupported:t,toggleSpeech:s,stopSpeech:n}=$c(),{currentSection:i,showBackToTop:o,scrollToSection:r,scrollToTop:l}=Fc();return{sections:X(Dc),currentSection:i,showBackToTop:o,isSpeaking:e,speechSupported:t,scrollToSection:r,scrollToTop:l,toggleSpeech:s,stopSpeech:n}}},Wc={id:"app"},Nc={class:"main-content"},Vc=["id"];function Lc(e,t,s,n,i,o){const r=ot("Navigation"),l=ot("WelcomeSection"),a=ot("GuideSection"),d=ot("SpeechControls"),u=ot("BackToTop");return z(),J("div",Wc,[ne(r,{sections:n.sections,onNavigate:n.scrollToSection,"current-section":n.currentSection},null,8,["sections","onNavigate","current-section"]),w("main",Nc,[ne(l),(z(!0),J(fe,null,ft(n.sections,p=>(z(),J("div",{key:p.id,id:p.id},[ne(a,{title:p.title,content:p.content,icon:p.icon},null,8,["title","content","icon"])],8,Vc))),128))]),ne(d,{"is-speaking":n.isSpeaking,"speech-supported":n.speechSupported,onToggleSpeech:n.toggleSpeech,onStopSpeech:n.stopSpeech},null,8,["is-speaking","speech-supported","onToggleSpeech","onStopSpeech"]),wt(ne(u,{onClick:n.scrollToTop},null,8,["onClick"]),[[sl,n.showBackToTop]])])}const Uc=tt(Hc,[["render",Lc],["__scopeId","data-v-d61b8850"]]),zi=Sl(Uc);zi.config.globalProperties.$speechSupported="speechSynthesis"in window;zi.mount("#app");
