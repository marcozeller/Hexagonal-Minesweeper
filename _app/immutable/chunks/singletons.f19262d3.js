import{n as d,s as v}from"./scheduler.bc760b9c.js";const u=[];function p(e,t=d){let n;const o=new Set;function a(s){if(v(e,s)&&(e=s,n)){const c=!u.length;for(const l of o)l[1](),u.push(l,e);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function i(s){a(s(e))}function r(s,c=d){const l=[s,c];return o.add(l),o.size===1&&(n=t(a,i)||d),s(e),()=>{o.delete(l),o.size===0&&n&&(n(),n=null)}}return{set:a,update:i,subscribe:r}}var g;const m=((g=globalThis.__sveltekit_1s4wahl)==null?void 0:g.base)??"/Hexagonal-Minesweeper";var k;const E=((k=globalThis.__sveltekit_1s4wahl)==null?void 0:k.assets)??m,A="1697031483338",y="sveltekit:snapshot",I="sveltekit:scroll",x="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function w(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=w(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,a=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(n==null?void 0:n.origin)===location.origin&&e.hasAttribute("download");return{url:n,external:a,target:o,download:i}}function P(e){let t=null,n=null,o=null,a=null,i=null,r=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),a===null&&(a=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),r===null&&(r=f(s,"replacestate")),s=w(s);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:b[o??"off"],preload_data:b[a??"off"],keep_focus:c(t),noscroll:c(n),reload:c(i),replace_state:c(r)}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(r=>r)}function a(r){n=!1,t.set(r)}function i(r){let s;return t.subscribe(c=>{(s===void 0||n&&c!==s)&&r(s=c)})}return{notify:o,set:a,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);try{const a=await fetch(`${E}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const r=(await a.json()).version!==A;return r&&(e(!0),clearTimeout(n)),r}catch{return!1}}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function V(e){e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:R()};export{x as I,_ as P,I as S,y as a,N as b,P as c,Y as d,m as e,L as f,O as g,V as h,S as i,U as s};
