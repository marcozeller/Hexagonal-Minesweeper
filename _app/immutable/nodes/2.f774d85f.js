import{s as q,e as V,i as p,y,d as u,A as J,f as b,l as w,g as k,h as D,m as H,j as z,x as I,n as S,B as K,C as j,a as L,c as O,p as Q,D as R}from"../chunks/scheduler.ccece44f.js";import{S as N,i as P,a as m,c as F,t as v,g as G,f as T,b as U,d as W,m as X,e as Y}from"../chunks/index.5a871b76.js";function E(f){return(f==null?void 0:f.length)!==void 0?f:Array.from(f)}function Z(f){let n,a;return{c(){n=b("div"),a=w(f[1]),this.h()},l(o){n=k(o,"DIV",{class:!0});var t=D(n);a=H(t,f[1]),t.forEach(u),this.h()},h(){z(n,"class","hexagon open svelte-1se9g3")},m(o,t){p(o,n,t),I(n,a)},p(o,t){t&2&&S(a,o[1])},d(o){o&&u(n)}}}function x(f){let n,a;return{c(){n=b("div"),a=w(f[1]),this.h()},l(o){n=k(o,"DIV",{class:!0});var t=D(n);a=H(t,f[1]),t.forEach(u),this.h()},h(){z(n,"class","hexagon red svelte-1se9g3")},m(o,t){p(o,n,t),I(n,a)},p(o,t){t&2&&S(a,o[1])},d(o){o&&u(n)}}}function $(f){let n,a,o;return{c(){n=b("div"),this.h()},l(t){n=k(t,"DIV",{class:!0}),D(n).forEach(u),this.h()},h(){z(n,"class","hexagon hidden svelte-1se9g3")},m(t,s){p(t,n,s),a||(o=K(n,"click",f[2]),a=!0)},p:y,d(t){t&&u(n),a=!1,o()}}}function ee(f){let n;function a(s,i){if(s[0]=="hidden")return $;if(s[0]=="open"&&s[1]=="mine")return x;if(s[0]=="open")return Z}let o=a(f),t=o&&o(f);return{c(){t&&t.c(),n=V()},l(s){t&&t.l(s),n=V()},m(s,i){t&&t.m(s,i),p(s,n,i)},p(s,[i]){o===(o=a(s))&&t?t.p(s,i):(t&&t.d(1),t=o&&o(s),t&&(t.c(),t.m(n.parentNode,n)))},i:y,o:y,d(s){s&&u(n),t&&t.d(s)}}}function te(f,n,a){const o=J();let{content:t}=n,{state:s}=n,{x:i}=n,{y:c}=n;const e=()=>{console.log(`clicked on ${i}, ${c}`),a(0,s="open"),t==0&&o("zero_uncovered",{x:i,y:c})};return f.$$set=l=>{"content"in l&&a(1,t=l.content),"state"in l&&a(0,s=l.state),"x"in l&&a(3,i=l.x),"y"in l&&a(4,c=l.y)},[s,t,e,i,c]}class ne extends N{constructor(n){super(),P(this,n,te,ee,q,{content:1,state:0,x:3,y:4})}}function A(f,n,a){const o=f.slice();return o[5]=n[a],o[7]=a,o}function C(f,n,a){const o=f.slice();return o[8]=n[a],o[9]=n,o[10]=a,o}function M(f){let n,a,o;function t(i){f[2](i,f[8])}let s={content:f[8].content,x:f[7],y:f[10]};return f[8].state!==void 0&&(s.state=f[8].state),n=new ne({props:s}),Q.push(()=>T(n,"state",t)),n.$on("zero_uncovered",f[1]),{c(){U(n.$$.fragment)},l(i){W(n.$$.fragment,i)},m(i,c){X(n,i,c),o=!0},p(i,c){f=i;const e={};c&1&&(e.content=f[8].content),!a&&c&1&&(a=!0,e.state=f[8].state,R(()=>a=!1)),n.$set(e)},i(i){o||(m(n.$$.fragment,i),o=!0)},o(i){v(n.$$.fragment,i),o=!1},d(i){Y(n,i)}}}function B(f){let n,a,o,t=E(f[5]),s=[];for(let c=0;c<t.length;c+=1)s[c]=M(C(f,t,c));const i=c=>v(s[c],1,1,()=>{s[c]=null});return{c(){n=b("div");for(let c=0;c<s.length;c+=1)s[c].c();a=L(),this.h()},l(c){n=k(c,"DIV",{class:!0});var e=D(n);for(let l=0;l<s.length;l+=1)s[l].l(e);a=O(e),e.forEach(u),this.h()},h(){z(n,"class","row svelte-1ndgb09")},m(c,e){p(c,n,e);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(n,null);I(n,a),o=!0},p(c,e){if(e&3){t=E(c[5]);let l;for(l=0;l<t.length;l+=1){const r=C(c,t,l);s[l]?(s[l].p(r,e),m(s[l],1)):(s[l]=M(r),s[l].c(),m(s[l],1),s[l].m(n,a))}for(G(),l=t.length;l<s.length;l+=1)i(l);F()}},i(c){if(!o){for(let e=0;e<t.length;e+=1)m(s[e]);o=!0}},o(c){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)v(s[e]);o=!1},d(c){c&&u(n),j(s,c)}}}function le(f){let n,a,o=E(f[0]),t=[];for(let i=0;i<o.length;i+=1)t[i]=B(A(f,o,i));const s=i=>v(t[i],1,1,()=>{t[i]=null});return{c(){n=b("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){n=k(i,"DIV",{class:!0});var c=D(n);for(let e=0;e<t.length;e+=1)t[e].l(c);c.forEach(u),this.h()},h(){z(n,"class","field svelte-1ndgb09")},m(i,c){p(i,n,c);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(n,null);a=!0},p(i,[c]){if(c&3){o=E(i[0]);let e;for(e=0;e<o.length;e+=1){const l=A(i,o,e);t[e]?(t[e].p(l,c),m(t[e],1)):(t[e]=B(l),t[e].c(),m(t[e],1),t[e].m(n,null))}for(G(),e=o.length;e<t.length;e+=1)s(e);F()}},i(i){if(!a){for(let c=0;c<o.length;c+=1)m(t[c]);a=!0}},o(i){t=t.filter(Boolean);for(let c=0;c<t.length;c+=1)v(t[c]);a=!1},d(i){i&&u(n),j(t,i)}}}let h=8,oe=8;function se(f,n,a){let o=Array(h).fill(null);for(let e=0;e<h;e++)o[e]=Array(h).fill(null);for(let e=0;e<h;e++)for(let l=0;l<h;l++)o[e][l]={state:"hidden",content:0};for(let e=0;e<oe;e++){let l=Math.floor(Math.random()*h),r=Math.floor(Math.random()*h);if(o[l][r].content==="mine"){e--;continue}o[l][r]={state:"hidden",content:"mine"}}const t=(e,l)=>{let r=[];return l>0&&r.push([e,l-1]),l<h-1&&r.push([e,l+1]),e%2==0?(e>0&&r.push([e-1,l]),e>0&&l<h-1&&r.push([e-1,l+1]),e<h-1&&r.push([e+1,l]),e<h-1&&l<h-1&&r.push([e+1,l+1])):e%2==1&&(e>0&&l>0&&r.push([e-1,l-1]),e>0&&r.push([e-1,l]),e<h-1&&l>0&&r.push([e+1,l-1]),e<h-1&&r.push([e+1,l])),r};for(let e=0;e<h;e++)for(let l=0;l<h;l++){if(o[e][l].content==="mine")continue;let r=t(e,l);for(let _=0;_<r.length;_++){let[d,g]=r[_];o[d][g].content==="mine"&&o[e][l].content++}}const s=(e,l)=>{let r=t(e,l);console.log(r);for(let _=0;_<r.length;_++){let[d,g]=r[_];o[d][g].content==0&&o[d][g].state!="open"&&(a(0,o[d][g].state="open",o),s(d,g)),a(0,o[d][g].state="open",o)}},i=e=>{let l=e.detail.x,r=e.detail.y;console.log("zero uncovered",l,r),s(l,r)};function c(e,l){f.$$.not_equal(l.state,e)&&(l.state=e,a(0,o))}return[o,i,c]}class ae extends N{constructor(n){super(),P(this,n,se,le,q,{})}}export{ae as component};