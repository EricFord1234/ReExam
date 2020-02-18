!function(e){function t(i){if(n[i])
return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};
return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}
var n={};return t.m=e,t.c=n,t.p="",t(0)}

([function(e,t,n){"use strict";function i(e){
return e&&e.__esModule?e:{default:e}}
var r=n(3),o=i(r),s=n(1),a=i(s),u=n(4),c=i(u),l=c.default.create({container:document.getElementById("container"),autoclear:!1,retina:"auto",settings:{iterations:100,randomness:.60,opposite:.2,minAngle:.5,minSide:3},polygons:[],lines:[],setup:function()

{this.reset()},step:function(){
var e=this,t=~~random(this.polygons.length-1),n=this.polygons[t].subdivide(this.settings.randomness,this.settings.opposite),i=!1,r=void 0,o=void 0,s=n.length;
for(r=0;r<s;r++)if(o=n[r],o.minAngle()<this.settings.minAngle){i=!0;break}for(r=0;r<s;r++)if(o=n[r],o.minSide()<this.settings.minSide)

{i=!0;break}i||(this.polygons[t].unique.forEach(function(t){
return e.lines.push(t)}),n.forEach(function(t){e.polygons.push(t),t.draw(e)}),this.fill(),this.stroke(),this.polygons.splice(t,1))},

clear:function(){this.clearRect(0,0,this.canvas.width,this.canvas.height)},reset:function(){var e=new a.default(0,0),t=new a.default(this.width,0),n=new a.default(this.width,this.height),
    
i=new a.default(0,this.height);this.polygons=[new o.default(e,t,n,i)],this.lines=[],this.clear()},resize:function()

{this.strokeStyle="#333",this.fillStyle="#fa8072",this.lineWidth=.35},toggle:function(){this.running?this.stop():this.start()},draw:function(){for(var e=0;e<this.settings.iterations;e++)this.step()},export:function(){window.open(this.canvas.toDataURL(),"Crystallisation")}}),h=new dat.GUI;h.add(l.settings,"minSide").min(0).max(100).name("Min Side Length"),h.add(l.settings,"minAngle").min(0).max(1.2).step(.01).name("Min Angle (rad)"),h.add(l.settings,"iterations").min(1).max(100).name("Iterations"),h.add(l.settings,"randomness").min(0).max(1).step(.01).name("Randomness"),h.add(l.settings,"opposite").min(0).max(1).step(.01).name("Opposite Sides"),h.add(l,"toggle").name("Start / Stop"),h.add(l,"reset").name("Reset Polygons"),h.add(l,"clear").name("Clear Canvas"),h.add(l,"export").name("Save"),h.close()},

function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function()

{function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}

return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,e),this.x=t,this.y=i}

return i(e,[{key:"distanceSq",value:function(e){var t=e.x-this.x,n=e.y-this.y;
    
return t*t+n*n}},{key:"distance",value:function(e){var t=e.x-this.x,n=e.y-this.y;return Math.sqrt(t*t+n*n)}},{key:"angle",value:function(e){var t=e.x-this.x,n=e.y-this.y;return Math.atan2(n,t)}},{key:"lerp",value:function(t,n){var i=t.x-this.x,r=t.y-this.y;return new e(this.x+i*n,this.y+r*n)}},{key:"clone",value:function()

{return new e(this.x,this.y)}}]),e}();t.default=r},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function e(t,i){n(this,e),this.start=t,this.end=i};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function()

{function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i)

{return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=n(1),a=i(s),u=n(2),c=i(u),l=function(e,t,n){return Math.acos(e*e+t*t-n*n)/(2*e*t)},h=function(){function e(){r(this,e);for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];this.vertices=n,this.generation=0,this.unique=[]}return o(e,[{key:"subdivide",value:function()

{var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5,i=void 0,r=void 0,o=void 0,s=void 0,a=void 0,u=void 0,l=void 0,h=void 0,f=void 0,d=void 0,v=void 0;for(l=this.vertices.length,i=~~random(l),r=random()<n?~~(i+l/2)%l:~~random(l);r===i;)r=~~random(l);for(a=.5+random(t*-.5,.5*t),u=.5+random(t*-.5,.5*t),d=this.vertices[i].lerp(this.vertices[(i+1)%l],a),v=this.vertices[r].lerp(this.vertices[(r+1)%l],u),o=i,s=r,h=new e(d);o!==r;)h.vertices.push(this.vertices[o=(o+1)%l]);for(h.vertices.push(v),f=new e(v);s!==i;)f.vertices.push(this.vertices[s=(s+1)%l]);return f.vertices.push(d),h.generation=this.generation+1,f.generation=this.generation+1,h.unique.push(new c.default(d,v)),[h,f]}},

{key:"centroid",value:function()
{var e=0,t=0;return this.vertices.forEach(function(n){e+=n.x,t+=n.y}),new a.default(e/this.vertices.length,t/this.vertices.length)}},

{key:"minAngle",value:function(){var e=this,t=Number.MAX_VALUE,n=this.vertices.length,i=void 0,r=void 0,o=void 0,s=void 0,a=void 0,u=void 0,c=void 0,h=void 0;return this.vertices.forEach(function(f,d){i=e.vertices[(d-1+n)%n],r=e.vertices[(d+1+n)%n],o=i.distance(f),s=r.distance(f),a=r.distance(i),u=l(s,a,o),c=l(a,o,s),h=Math.PI-u-c,t=min(t,h)}),t}},

{key:"minSide",value:function(){var e=Number.MAX_VALUE,t=this.vertices[this.vertices.length-1];return this.vertices.forEach(function(n){e=Math.min(e,n.distanceSq(t)),t=n}),Math.sqrt(e)}},

{key:"perimeter",value:function(){var e=this.vertices[0],t=this.vertices[this.vertices.length-1],n=t.distance(e);return this.vertices.reduce(function(e,t){return n+=e.distance(t)},b),n}},

{key:"draw",value:function(e){e.beginPath(),this.vertices.forEach(function(t,n){var i=t.x,r=t.y;0===n?e.moveTo(i,r):e.lineTo(i,r)}),e.closePath()}}]),e}();t.default=h},function(e,t,n)

{!function(t,n){e.exports=n(t,t.document)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e){return"[object Array]"==Object.prototype.toString.call(e)}function i(e){return"function"==typeof e}function r(e)

{return"number"==typeof e}function o(e)

{return"string"==typeof e}function s(e)

{return E[e]||String.fromCharCode(e)}function a(e,t,n){for(var i in t)!n&&i in e||(e[i]=t[i]);return e}function u(e,t)

{return function(){e.apply(t,arguments)}}function c(e){var t={};for(var n in e)"webkitMovementX"!==n&&"webkitMovementY"!==n&&(i(e[n])?t[n]=u(e[n],e):t[n]=e[n]);return t}function l(e)

{function t(t){i(t)&&t.apply(e,[].splice.call(arguments,1))}function n(e){for(L=0;L<ee.length;L++)j=ee[L],o(j)?_[(e?"add":"remove")+"EventListener"].call(_,j,M,!1):i(j)?M=j:_=j}function r(){R(P),P=O(r),V||(t(e.setup),V=i(e.setup)),Q||(t(e.resize),Q=i(e.resize)),e.running&&!H&&(e.dt=(q=+new Date)-e.now,e.millis+=e.dt,e.now=q,t(e.update),Z&&(e.retina&&(e.save(),e.scale(K,K)),e.autoclear&&e.clear()),t(e.draw),Z&&e.retina&&e.restore()),H=++H%e.interval}function u(){_=J?e.style:e.canvas,N=J?"px":"",X=e.width,F=e.height,e.fullscreen&&(F=e.height=x.innerHeight,X=e.width=x.innerWidth),e.retina&&Z&&K&&(_.style.height=F+"px",_.style.width=X+"px",X*=K,F*=K),_.height!==F&&(_.height=F+N),_.width!==X&&(_.width=X+N),V&&t(e.resize)}function l(t,n)

{return I=n.getBoundingClientRect(),t.x=t.pageX-I.left-(x.scrollX||x.pageXOffset),t.y=t.pageY-I.top-(x.scrollY||x.pageYOffset),e.retina&&Z&&K&&(t.x*=K,t.y*=K),t}function h(t,n)

{return l(t,e.element),n=n||{},n.ox=n.x||t.x,n.oy=n.y||t.y,n.x=t.x,n.y=t.y,n.dx=n.x-n.ox,n.dy=n.y-n.oy,n}function f(e)

{if(e.preventDefault(),D=c(e),D.originalEvent=e,D.touches)for(Y.length=D.touches.length,L=0;L<D.touches.length;L++)Y[L]=h(D.touches[L],Y[L]);else Y.length=0,Y[0]=h(D,$);return a($,Y[0],!0),D}function d(n){for(n=f(n),U=(W=ee.indexOf(z=n.type))-1,e.dragging=!!/down|start/.test(z)||!/up|end/.test(z)&&e.dragging;U;)o(ee[U])?t(e[ee[U--]],n):o(ee[W])?t(e[ee[W++]],n):U=0}function v(n)

{B=n.keyCode,G="keyup"==n.type,te[B]=te[s(B)]=!G,t(e[n.type],n)}function g(n)

{e.autopause&&("blur"==n.type?k:m)(),t(e[n.type],n)}function m(){e.now=+new Date,e.running=!0}function k(){e.running=!1}function S()

{(e.running?k:m)()}function A(){Z&&e.clearRect(0,0,e.width,e.height)}function C()

{T=e.element.parentNode,L=b.indexOf(e),T&&T.removeChild(e.element),~L&&b.splice(L,1),n(!1),k()}var P,M,_,T,I,L,N,q,j,D,z,B,G,U,W,X,F,H=0,Y=[],Q=!1,V=!1,K=x.devicePixelRatio||1,J=e.type==y,Z=e.type==p,$={x:0,y:0,ox:0,oy:0,dx:0,dy:0},ee=[e.eventTarget||e.element,d,"mousedown","touchstart",d,"mousemove","touchmove",d,"mouseup","touchend",d,"click",d,"mouseout",d,"mouseover",w,v,"keydown","keyup",x,g,"focus","blur",u,"resize"],te={};for(B in E)te[E[B]]=!1;return a(e,
    
{touches:Y,mouse:$,keys:te,dragging:!1,running:!1,millis:0,now:NaN,dt:NaN,destroy:C,toggle:S,clear:A,start:m,stop:k}),b.push(e),e.autostart&&m(),n(!0),u(),r(),e}for(var h,f,d="E LN10 LN2 LOG2E LOG10E PI SQRT1_2 SQRT2 abs acos asin atan ceil cos exp floor log round sin sqrt tan atan2 pow max min".split(" "),v="__hasSketch",g=Math,p="canvas",m="webgl",y="dom",w=t,x=e,b=[],k={fullscreen:!0,autostart:!0,autoclear:!0,autopause:!0,container:w.body,interval:1,globals:!0,retina:!1,type:p},E={8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"},

S={CANVAS:p,WEB_GL:m,WEBGL:m,DOM:y,instances:b,install:function(e){if(!e[v])
    
{for(var t=0;t<d.length;t++)e[d[t]]=g[d[t]];a(e,{TWO_PI:2*g.PI,HALF_PI:g.PI/2,QUARTER_PI:g.PI/4,random:function(e,t)
    
{return n(e)?e[~~(g.random()*e.length)]:(r(t)||(t=e||1,e=0),e+g.random()*(t-e))},lerp:function(e,t,n)

{return e+n*(t-e)},map:function(e,t,n,i,r){return(e-t)/(n-t)*(r-i)+i}}),e[v]=!0}},create:function(e)

{return e=a(e||{},k),e.globals&&S.install(self),h=e.element=e.element||w.createElement(e.type===y?"div":"canvas"),f=e.context=e.context||function()

{switch(e.type)
    
{case p:return h.getContext("2d",e);case m:return h.getContext("webgl",e)||h.getContext("experimental-webgl",e);case y:return h.canvas=h}}(),(e.container||w.body).appendChild(h),S.augment(f,e)},augment:function(e,t)

{return t=a(t||{},k),t.element=e.canvas||e,t.element.className+=" sketch",a(e,t,!0),l(e)}},A=["ms","moz","webkit","o"],C=self,P=0,M="AnimationFrame",_="request"+M,T="cancel"+M,O=C[_],R=C[T],I=0;I<A.length&&!O;I++)O=C[A[I]+"Request"+M],R=C[A[I]+"Cancel"+M];return C[_]=O=O||function(e){var t=+new Date,n=g.max(0,16-(t-P)),i=setTimeout(function(){e(t+n)},n);return P=t+n,i},C[T]=R=R||function(e){clearTimeout(e)},S})}]);