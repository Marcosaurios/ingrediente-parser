var app=function(){"use strict";function t(){}function r(t){return t()}function e(){return Object.create(null)}function n(t){t.forEach(r)}function o(t){return"function"==typeof t}function s(t,r){return t!=t?r==r:t!==r||t&&"object"==typeof t||"function"==typeof t}function u(t,r){t.appendChild(r)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function c(t){return document.createTextNode(t)}function l(){return c(" ")}function f(t,r,e,n){return t.addEventListener(r,e,n),()=>t.removeEventListener(r,e,n)}function d(t,r,e){null==e?t.removeAttribute(r):t.getAttribute(r)!==e&&t.setAttribute(r,e)}function p(t,r){r=""+r,t.wholeText!==r&&(t.data=r)}function h(t,r){t.value=null==r?"":r}let g;function b(t){g=t}function m(t){(function(){if(!g)throw new Error("Function called outside component initialization");return g})().$$.on_mount.push(t)}const v=[],$=[],x=[],w=[],C=Promise.resolve();let y=!1;function A(t){x.push(t)}const L=new Set;let _=0;function k(){const t=g;do{for(;_<v.length;){const t=v[_];_++,b(t),E(t.$$)}for(b(null),v.length=0,_=0;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const r=x[t];L.has(r)||(L.add(r),r())}x.length=0}while(v.length);for(;w.length;)w.pop()();y=!1,L.clear(),b(t)}function E(t){if(null!==t.fragment){t.update(),n(t.before_update);const r=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,r),t.after_update.forEach(A)}}const q=new Set;function z(t,r){-1===t.$$.dirty[0]&&(v.push(t),y||(y=!0,C.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[r/31|0]|=1<<r%31}function F(s,u,i,c,l,f,d,p=[-1]){const h=g;b(s);const m=s.$$={fragment:null,ctx:null,props:f,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(h?h.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:u.target||h.$$.root};d&&d(m.root);let v=!1;if(m.ctx=i?i(s,u.props||{},((t,r,...e)=>{const n=e.length?e[0]:r;return m.ctx&&l(m.ctx[t],m.ctx[t]=n)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](n),v&&z(s,t)),r})):[],m.update(),v=!0,n(m.before_update),m.fragment=!!c&&c(m.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();u.intro&&(($=s.$$.fragment)&&$.i&&(q.delete($),$.i(x))),function(t,e,s,u){const{fragment:a,on_mount:i,on_destroy:c,after_update:l}=t.$$;a&&a.m(e,s),u||A((()=>{const e=i.map(r).filter(o);c?c.push(...e):n(e),t.$$.on_mount=[]})),l.forEach(A)}(s,u.target,u.anchor,u.customElement),k()}var $,x;b(h)}function j(t,r,e,n){var o=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(o,j.prototype),o.expected=r,o.found=e,o.location=n,o.name="SyntaxError",o}function O(t,r,e){return e=e||" ",t.length>r?t:(r-=t.length,t+(e+=e.repeat(r)).slice(0,r))}function S(t,r){var e,n,o,s,u={},a=(r=void 0!==r?r:{}).grammarSource,i={start:ar},c=ar,l="gramos",f="gramo",d="kilogramos",p="kilogramo",h="litros",g="litro",b="miligramos",m="miligramo",v="mililitros",$="mililitro",x="docenas",w="docena",C="puñaditos",y="puñadito",A="puñado",L="vasos",_="vaso",k="vasitos",E="vasito",q="cucharitas",z="cucharita",F="cucharadas",O="cucharada",S="cucharaditas",R="cucharadita",I=/^[.]/,M=/^[\/]/,N=/^[0-9]/,P=/^[A-z\xC0-\xFA]/i,T=/^[\t]/,B=nr("cantidad"),U=nr("medida"),D=nr("numero de cantidad"),G=nr("decimal"),H=er(["."],!1,!1),J=nr("fraccion"),K=er(["/"],!1,!1),Q=nr("entero"),V=er([["0","9"]],!1,!1),W=nr("unidades"),X=nr("gramos"),Y=rr("gramos",!0),Z=rr("gramo",!0),tt=rr("gr.",!0),rt=rr("gr",!0),et=rr("g.",!0),nt=rr("g",!0),ot=nr("kilogramo"),st=rr("kilogramos",!0),ut=rr("kilogramo",!0),at=rr("kg.",!0),it=rr("kg",!0),ct=nr("litro"),lt=rr("litros",!0),ft=rr("litro",!0),dt=rr("l.",!0),pt=rr("l",!0),ht=nr("miligramo"),gt=rr("miligramos",!0),bt=rr("miligramo",!0),mt=rr("mg.",!0),vt=rr("mg",!0),$t=nr("mililitro"),xt=rr("mililitros",!0),wt=rr("mililitro",!0),Ct=rr("ml.",!0),yt=rr("ml",!0),At=nr("frase"),Lt=nr("ingrediente"),_t=nr("palabra"),kt=er([["A","z"],["À","ú"]],!1,!0),Et=nr("preposiciones"),qt=rr("de",!1),zt=nr("separadores"),Ft=rr(" ",!1),jt=er(["\t"],!1,!1),Ot=nr("otras medidas"),St=rr("docenas",!0),Rt=rr("docena",!0),It=rr("puñaditos",!0),Mt=rr("puñadito",!0),Nt=rr("puñado",!0),Pt=nr("recipientes"),Tt=rr("vasos",!1),Bt=rr("vaso",!1),Ut=rr("vasitos",!1),Dt=rr("vasito",!1),Gt=rr("cucharitas",!1),Ht=rr("cucharita",!1),Jt=rr("cucharadas",!1),Kt=rr("cucharada",!1),Qt=rr("cucharaditas",!1),Vt=rr("cucharadita",!1),Wt=0,Xt=[{line:1,column:1}],Yt=0,Zt=[],tr=0;if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".');c=i[r.startRule]}function rr(t,r){return{type:"literal",text:t,ignoreCase:r}}function er(t,r,e){return{type:"class",parts:t,inverted:r,ignoreCase:e}}function nr(t){return{type:"other",description:t}}function or(r){var e,n=Xt[r];if(n)return n;for(e=r-1;!Xt[e];)e--;for(n={line:(n=Xt[e]).line,column:n.column};e<r;)10===t.charCodeAt(e)?(n.line++,n.column=1):n.column++,e++;return Xt[r]=n,n}function sr(t,r){var e=or(t),n=or(r);return{source:a,start:{offset:t,line:e.line,column:e.column},end:{offset:r,line:n.line,column:n.column}}}function ur(t){Wt<Yt||(Wt>Yt&&(Yt=Wt,Zt=[]),Zt.push(t))}function ar(){return function(){var r,e,n,o,s,a;r=Wt,e=function(){var r,e,n,o;tr++,r=Wt,e=function(){var r;tr++,(r=function(){var r,e,n,o,s;tr++,r=Wt,e=Wt,(n=ir())!==u?(M.test(t.charAt(Wt))?(o=t.charAt(Wt),Wt++):(o=u,0===tr&&ur(K)),o!==u&&(s=ir())!==u?e=n=[n,o,s]:(Wt=e,e=u)):(Wt=e,e=u);r=e!==u?t.substring(r,Wt):e;tr--,r===u&&(e=u,0===tr&&ur(J));return r}())===u&&(r=function(){var r,e,n,o,s;tr++,r=Wt,e=Wt,(n=ir())===u&&(n=null);I.test(t.charAt(Wt))?(o=t.charAt(Wt),Wt++):(o=u,0===tr&&ur(H));o!==u&&(s=ir())!==u?e=n=[n,o,s]:(Wt=e,e=u);r=e!==u?t.substring(r,Wt):e;tr--,r===u&&(e=u,0===tr&&ur(G));return r}())===u&&(r=ir());tr--,r===u&&0===tr&&ur(D);return r}(),e!==u?((n=fr())===u&&(n=null),lr(),fr(),o=function(){var r,e;tr++,r=Wt,e=function(){var r;tr++,t.substr(Wt,7).toLowerCase()===x?(r=t.substr(Wt,7),Wt+=7):(r=u,0===tr&&ur(St));r===u&&(t.substr(Wt,6).toLowerCase()===w?(r=t.substr(Wt,6),Wt+=6):(r=u,0===tr&&ur(Rt)),r===u&&(t.substr(Wt,9).toLowerCase()===C?(r=t.substr(Wt,9),Wt+=9):(r=u,0===tr&&ur(It)),r===u&&(t.substr(Wt,8).toLowerCase()===y?(r=t.substr(Wt,8),Wt+=8):(r=u,0===tr&&ur(Mt)),r===u&&(t.substr(Wt,6).toLowerCase()===A?(r=t.substr(Wt,6),Wt+=6):(r=u,0===tr&&ur(Nt))))));tr--,r===u&&0===tr&&ur(Ot);return r}(),e===u&&(e=function(){var r;tr++,t.substr(Wt,5)===L?(r=L,Wt+=5):(r=u,0===tr&&ur(Tt));r===u&&(t.substr(Wt,4)===_?(r=_,Wt+=4):(r=u,0===tr&&ur(Bt)),r===u&&(t.substr(Wt,7)===k?(r=k,Wt+=7):(r=u,0===tr&&ur(Ut)),r===u&&(t.substr(Wt,6)===E?(r=E,Wt+=6):(r=u,0===tr&&ur(Dt)),r===u&&(t.substr(Wt,10)===q?(r=q,Wt+=10):(r=u,0===tr&&ur(Gt)),r===u&&(t.substr(Wt,9)===z?(r=z,Wt+=9):(r=u,0===tr&&ur(Ht)),r===u&&(t.substr(Wt,10)===F?(r=F,Wt+=10):(r=u,0===tr&&ur(Jt)),r===u&&(t.substr(Wt,9)===O?(r=O,Wt+=9):(r=u,0===tr&&ur(Kt)),r===u&&(t.substr(Wt,12)===S?(r=S,Wt+=12):(r=u,0===tr&&ur(Qt)),r===u&&(t.substr(Wt,11)===R?(r=R,Wt+=11):(r=u,0===tr&&ur(Vt)))))))))));tr--,r===u&&0===tr&&ur(Pt);return r}(),e===u&&(e=function(){var r;tr++,(r=function(){var r;tr++,t.substr(Wt,10).toLowerCase()===d?(r=t.substr(Wt,10),Wt+=10):(r=u,0===tr&&ur(st));r===u&&(t.substr(Wt,9).toLowerCase()===p?(r=t.substr(Wt,9),Wt+=9):(r=u,0===tr&&ur(ut)),r===u&&("kg."===t.substr(Wt,3).toLowerCase()?(r=t.substr(Wt,3),Wt+=3):(r=u,0===tr&&ur(at)),r===u&&("kg"===t.substr(Wt,2).toLowerCase()?(r=t.substr(Wt,2),Wt+=2):(r=u,0===tr&&ur(it)))));tr--,r===u&&0===tr&&ur(ot);return r}())===u&&(r=function(){var r;tr++,t.substr(Wt,6).toLowerCase()===l?(r=t.substr(Wt,6),Wt+=6):(r=u,0===tr&&ur(Y));r===u&&(t.substr(Wt,5).toLowerCase()===f?(r=t.substr(Wt,5),Wt+=5):(r=u,0===tr&&ur(Z)),r===u&&("gr."===t.substr(Wt,3).toLowerCase()?(r=t.substr(Wt,3),Wt+=3):(r=u,0===tr&&ur(tt)),r===u&&("gr"===t.substr(Wt,2).toLowerCase()?(r=t.substr(Wt,2),Wt+=2):(r=u,0===tr&&ur(rt)),r===u&&("g."===t.substr(Wt,2).toLowerCase()?(r=t.substr(Wt,2),Wt+=2):(r=u,0===tr&&ur(et)),r===u&&("g"===t.substr(Wt,1).toLowerCase()?(r=t.charAt(Wt),Wt++):(r=u,0===tr&&ur(nt)))))));tr--,r===u&&0===tr&&ur(X);return r}())===u&&(r=function(){var r;tr++,t.substr(Wt,6).toLowerCase()===h?(r=t.substr(Wt,6),Wt+=6):(r=u,0===tr&&ur(lt));r===u&&(t.substr(Wt,5).toLowerCase()===g?(r=t.substr(Wt,5),Wt+=5):(r=u,0===tr&&ur(ft)),r===u&&("l."===t.substr(Wt,2).toLowerCase()?(r=t.substr(Wt,2),Wt+=2):(r=u,0===tr&&ur(dt)),r===u&&("l"===t.substr(Wt,1).toLowerCase()?(r=t.charAt(Wt),Wt++):(r=u,0===tr&&ur(pt)))));tr--,r===u&&0===tr&&ur(ct);return r}())===u&&(r=function(){var r;tr++,t.substr(Wt,10).toLowerCase()===b?(r=t.substr(Wt,10),Wt+=10):(r=u,0===tr&&ur(gt));r===u&&(t.substr(Wt,9).toLowerCase()===m?(r=t.substr(Wt,9),Wt+=9):(r=u,0===tr&&ur(bt)),r===u&&("mg."===t.substr(Wt,3).toLowerCase()?(r=t.substr(Wt,3),Wt+=3):(r=u,0===tr&&ur(mt)),r===u&&("mg"===t.substr(Wt,2).toLowerCase()?(r=t.substr(Wt,2),Wt+=2):(r=u,0===tr&&ur(vt)))));tr--,r===u&&0===tr&&ur(ht);return r}())===u&&(r=function(){var r;tr++,t.substr(Wt,10).toLowerCase()===v?(r=t.substr(Wt,10),Wt+=10):(r=u,0===tr&&ur(xt));r===u&&(t.substr(Wt,9).toLowerCase()===$?(r=t.substr(Wt,9),Wt+=9):(r=u,0===tr&&ur(wt)),r===u&&("ml."===t.substr(Wt,3).toLowerCase()?(r=t.substr(Wt,3),Wt+=3):(r=u,0===tr&&ur(Ct)),r===u&&("ml"===t.substr(Wt,2).toLowerCase()?(r=t.substr(Wt,2),Wt+=2):(r=u,0===tr&&ur(yt)))));tr--,r===u&&0===tr&&ur($t);return r}());tr--,r===u&&0===tr&&ur(W);return r}()));e!==u&&fr()!==u&&lr()!==u?r=e:(Wt=r,r=u);tr--,r===u&&(e=u,0===tr&&ur(U));return r}(),o===u&&(o=null),s=e,a=n,r=(i=o)?a?`${s} ${i}`:`${s}${i}`:s):(Wt=r,r=u);var s,a,i;tr--,r===u&&(e=u,0===tr&&ur(B));return r}(),e===u&&(e=null);if(n=[],(o=fr())!==u)for(;o!==u;)n.push(o),o=fr();else n=u;n===u&&(n=null);if(o=function(){var t;tr++,t=cr(),tr--,t===u&&0===tr&&ur(Lt);return t}(),o!==u){if(s=[],(a=fr())!==u)for(;a!==u;)s.push(a),a=fr();else s=u;s===u&&(s=null),a=function(){var r,e,n,o,s,a,i,c;if(tr++,r=Wt,e=[],n=Wt,(o=cr())!==u){for(s=[],a=Wt,(i=fr())!==u&&(c=cr())!==u?a=i=[i,c]:(Wt=a,a=u);a!==u;)s.push(a),a=Wt,(i=fr())!==u&&(c=cr())!==u?a=i=[i,c]:(Wt=a,a=u);n=o=[o,s]}else Wt=n,n=u;if(n!==u)for(;n!==u;)if(e.push(n),n=Wt,(o=cr())!==u){for(s=[],a=Wt,(i=fr())!==u&&(c=cr())!==u?a=i=[i,c]:(Wt=a,a=u);a!==u;)s.push(a),a=Wt,(i=fr())!==u&&(c=cr())!==u?a=i=[i,c]:(Wt=a,a=u);n=o=[o,s]}else Wt=n,n=u;else e=u;r=e!==u?t.substring(r,Wt):e;tr--,r===u&&(e=u,0===tr&&ur(At));return r}(),a===u&&(a=null),r={amount:e,ingredient:o}}else Wt=r,r=u;return r}()}function ir(){var r,e,n;if(tr++,Wt,e=[],N.test(t.charAt(Wt))?(n=t.charAt(Wt),Wt++):(n=u,0===tr&&ur(V)),n!==u)for(;n!==u;)e.push(n),N.test(t.charAt(Wt))?(n=t.charAt(Wt),Wt++):(n=u,0===tr&&ur(V));else e=u;return e!==u&&(e=e.join("")),tr--,(r=e)===u&&(e=u,0===tr&&ur(Q)),r}function cr(){var r,e,n;if(tr++,r=Wt,e=[],P.test(t.charAt(Wt))?(n=t.charAt(Wt),Wt++):(n=u,0===tr&&ur(kt)),n!==u)for(;n!==u;)e.push(n),P.test(t.charAt(Wt))?(n=t.charAt(Wt),Wt++):(n=u,0===tr&&ur(kt));else e=u;return r=e!==u?t.substring(r,Wt):e,tr--,r===u&&(e=u,0===tr&&ur(_t)),r}function lr(){var r;return tr++,"de"===t.substr(Wt,2)?(r="de",Wt+=2):(r=u,0===tr&&ur(qt)),tr--,r===u&&0===tr&&ur(Et),r}function fr(){var r;return tr++,32===t.charCodeAt(Wt)?(r=" ",Wt++):(r=u,0===tr&&ur(Ft)),r===u&&(T.test(t.charAt(Wt))?(r=t.charAt(Wt),Wt++):(r=u,0===tr&&ur(jt))),tr--,r===u&&0===tr&&ur(zt),r}if((e=c())!==u&&Wt===t.length)return e;throw e!==u&&Wt<t.length&&ur({type:"end"}),n=Zt,o=Yt<t.length?t.charAt(Yt):null,s=Yt<t.length?sr(Yt,Yt+1):sr(Yt,Yt),new j(j.buildMessage(n,o),n,o,s)}function R(r){let e,o,s,g,b,m,v,$,x,w,C,y,A,L,_,k,E,q,z,F=r[1].amount+"",j=r[1].ingredient+"";return{c(){e=i("main"),o=i("h2"),o.textContent="Ingrediente-parser",s=l(),g=i("p"),g.textContent="Introduce un ingrediente para saber sus detalles",b=l(),m=i("input"),v=l(),$=i("div"),x=i("div"),w=c("Cantidad: "),C=i("span"),y=c(F),A=l(),L=i("div"),_=c("Ingrediente: "),k=i("span"),E=c(j),d(o,"class","svelte-1qzqahn"),d(g,"class","svelte-1qzqahn"),d(m,"type","text"),d(C,"class","bold svelte-1qzqahn"),d(x,"class","result__amount"),d(k,"class","bold svelte-1qzqahn"),d(L,"class","result__ingredient"),d($,"class","result svelte-1qzqahn"),d(e,"class","svelte-1qzqahn")},m(t,n){!function(t,r,e){t.insertBefore(r,e||null)}(t,e,n),u(e,o),u(e,s),u(e,g),u(e,b),u(e,m),h(m,r[0]),u(e,v),u(e,$),u($,x),u(x,w),u(x,C),u(C,y),u($,A),u($,L),u(L,_),u(L,k),u(k,E),q||(z=[f(m,"input",r[3]),f(m,"input",r[2])],q=!0)},p(t,[r]){1&r&&m.value!==t[0]&&h(m,t[0]),2&r&&F!==(F=t[1].amount+"")&&p(y,F),2&r&&j!==(j=t[1].ingredient+"")&&p(E,j)},i:t,o:t,d(t){t&&a(e),q=!1,n(z)}}}function I(t,r,e){let{search:n="20gr de arroz"}=r,{parsed:o={}}=r;function s(){e(1,o=S(n))}return m((()=>{s()})),t.$$set=t=>{"search"in t&&e(0,n=t.search),"parsed"in t&&e(1,o=t.parsed)},[n,o,s,function(){n=this.value,e(0,n)}]}!function(t,r){function e(){this.constructor=t}e.prototype=r.prototype,t.prototype=new e}(j,Error),j.prototype.format=function(t){var r="Error: "+this.message;if(this.location){var e,n=null;for(e=0;e<t.length;e++)if(t[e].source===this.location.source){n=t[e].text.split(/\r\n|\n|\r/g);break}var o=this.location.start,s=this.location.source+":"+o.line+":"+o.column;if(n){var u=this.location.end,a=O("",o.line.toString().length),i=n[o.line-1],c=o.line===u.line?u.column:i.length+1;r+="\n --\x3e "+s+"\n"+a+" |\n"+o.line+" | "+i+"\n"+a+" | "+O("",o.column-1)+O("",c-o.column,"^")}else r+="\n at "+s}return r},j.buildMessage=function(t,r){var e={literal:function(t){return'"'+o(t.text)+'"'},class:function(t){var r=t.parts.map((function(t){return Array.isArray(t)?s(t[0])+"-"+s(t[1]):s(t)}));return"["+(t.inverted?"^":"")+r+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function o(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function s(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function u(t){return e[t.type](t)}return"Expected "+function(t){var r,e,n=t.map(u);if(n.sort(),n.length>0){for(r=1,e=1;r<n.length;r++)n[r-1]!==n[r]&&(n[e]=n[r],e++);n.length=e}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}(t)+" but "+function(t){return t?'"'+o(t)+'"':"end of input"}(r)+" found."};return new class extends class{$destroy(){!function(t,r){const e=t.$$;null!==e.fragment&&(n(e.on_destroy),e.fragment&&e.fragment.d(r),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,r){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(r),()=>{const t=e.indexOf(r);-1!==t&&e.splice(t,1)}}$set(t){var r;this.$$set&&(r=t,0!==Object.keys(r).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),F(this,t,I,R,s,{search:0,parsed:1})}}({target:document.body,props:{search:"20gr de arroz"}})}();
//# sourceMappingURL=bundle.js.map
