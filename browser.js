// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,h,"$1e"),n=l.call(n,b,"e"),n=l.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,v,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,t,n,o,a,f,c,s,l,p,y,d,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))f+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,v=void 0,(v=y-p.length)<0?p:p=d?p+m(v):m(v)+p)),f+=n.arg||"",c+=1}return f}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=N.exec(r);n;)(e=r.slice(i,N.lastIndex-n[0].length)).length&&t.push(e),t.push(S(n)),i=N.lastIndex,n=N.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function U(r){var e,t;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[T(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return _.apply(null,e)}var I,x=Object.prototype,k=x.toString,F=x.__defineGetter__,P=x.__defineSetter__,V=x.__lookupGetter__,C=x.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=x,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&P&&P.call(r,e,t.set),r};var G=I;function L(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var $=Object.prototype.hasOwnProperty;function W(r,e){return null!=r&&$.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,M="function"==typeof H&&"symbol"==typeof H("foo")&&W(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;function R(r){return r!=r}var B=Number.POSITIVE_INFINITY,Z=Number,X=Z.NEGATIVE_INFINITY;function Y(r){return r===B||r===X}var q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return q&&"symbol"==typeof Symbol.toStringTag}var D,J=Object.prototype.toString,K="function"==typeof H?H.toStringTag:"",Q=z()?function(r){var e,t,n;if(null==r)return J.call(r);t=r[K],e=W(r,K);try{r[K]=void 0}catch(e){return J.call(r)}return n=J.call(r),e?r[K]=t:delete r[K],n}:function(r){return J.call(r)},rr="function"==typeof Uint32Array,er="function"==typeof Uint32Array?Uint32Array:null,tr="function"==typeof Uint32Array?Uint32Array:void 0;D=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===Q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr,ir=D,or="function"==typeof Float64Array,ar="function"==typeof Float64Array?Float64Array:null,ur="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===Q(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=nr,sr="function"==typeof Uint8Array,lr="function"==typeof Uint8Array?Uint8Array:null,pr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,256,257]),t=e,r=(sr&&t instanceof Uint8Array||"[object Uint8Array]"===Q(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,dr=fr,vr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,br="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(vr&&t instanceof Uint16Array||"[object Uint16Array]"===Q(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var hr,wr={uint16:yr,uint8:dr};(hr=new wr.uint16(1))[0]=4660;var mr=52===new wr.uint8(hr.buffer)[0],jr=!0===mr?1:0,Ar=new cr(1),Er=new ir(Ar.buffer);function Or(r){return Ar[0]=r,Er[jr]}function _r(r,e){var t,n,i,o;return i=(o=r*r)*o,n=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*n-r*e))}var Nr=-.16666666666666632,Sr=.00833333333332249,Tr=-.0001984126982985795,Ur=27557313707070068e-22,Ir=-2.5050760253406863e-8,xr=1.58969099521155e-10;function kr(r,e){var t,n,i;return t=Sr+(i=r*r)*(Tr+i*Ur)+i*(i*i)*(Ir+i*xr),n=i*r,0===e?r+n*(Nr+i*t):r-(i*(.5*e-n*t)-e-n*Nr)}var Fr,Pr,Vr=2147483647,Cr=2146435072,Gr=1048575,Lr=!0===mr?0:1,$r=new cr(1),Wr=new ir($r.buffer);!0===mr?(Fr=1,Pr=0):(Fr=0,Pr=1);var Hr={HIGH:Fr,LOW:Pr},Mr=new cr(1),Rr=new ir(Mr.buffer),Br=Hr.HIGH,Zr=Hr.LOW;function Xr(r,e){return Rr[Br]=r,Rr[Zr]=e,Mr[0]}var Yr,qr,zr=Math.floor,Dr=1023,Jr=1023,Kr=-1023,Qr=-1074,re=2147483648;!0===mr?(Yr=1,qr=0):(Yr=0,qr=1);var ee={HIGH:Yr,LOW:qr},te=new cr(1),ne=new ir(te.buffer),ie=ee.HIGH,oe=ee.LOW;function ae(r,e,t,n){return te[0]=r,e[n]=ne[ie],e[n+t]=ne[oe],e}function ue(r){return ae(r,[0,0],1,0)}L(ue,"assign",ae);var fe=[0,0];function ce(r,e){var t,n;return ue.assign(r,fe,1,0),t=fe[0],t&=Vr,n=Or(e),Xr(t|=n&=re,fe[1])}var se=22250738585072014e-324;function le(r){return Math.abs(r)}var pe=4503599627370496;function ye(r,e,t,n){return R(r)||Y(r)?(e[n]=r,e[n+t]=0,e):0!==r&&le(r)<se?(e[n]=r*pe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}L((function(r){return ye(r,[0,0],1,0)}),"assign",ye);var de=2220446049250313e-31,ve=2148532223,ge=[0,0],be=[0,0];function he(r,e){var t,n;return 0===e||0===r||R(r)||Y(r)?r:(ye(r,ge,1,0),r=ge[0],e+=ge[1],e+=function(r){var e=Or(r);return(e=(e&Cr)>>>20)-Dr|0}(r),e<Qr?ce(0,r):e>Jr?r<0?X:B:(e<=Kr?(e+=52,n=de):n=1,ue.assign(r,be,1,0),t=be[0],t&=ve,n*Xr(t|=e+Dr<<20,be[1])))}function we(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var me=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ae=16777216,Ee=5.960464477539063e-8,Oe=we(20),_e=we(20),Ne=we(20),Se=we(20);function Te(r,e,t,n,i,o,a,u,f){var c,s,l,p,y,d,v,g,b;for(p=o,b=n[t],g=t,y=0;g>0;y++)s=Ee*b|0,Se[y]=b-Ae*s|0,b=n[g-1]+s,g-=1;if(b=he(b,i),b-=8*zr(.125*b),b-=v=0|b,l=0,i>0?(v+=y=Se[t-1]>>24-i,Se[t-1]-=y<<24-i,l=Se[t-1]>>23-i):0===i?l=Se[t-1]>>23:b>=.5&&(l=2),l>0){for(v+=1,c=0,y=0;y<t;y++)g=Se[y],0===c?0!==g&&(c=1,Se[y]=16777216-g):Se[y]=16777215-g;if(i>0)switch(i){case 1:Se[t-1]&=8388607;break;case 2:Se[t-1]&=4194303}2===l&&(b=1-b,0!==c&&(b-=he(1,i)))}if(0===b){for(g=0,y=t-1;y>=o;y--)g|=Se[y];if(0===g){for(d=1;0===Se[o-d];d++);for(y=t+1;y<=t+d;y++){for(f[u+y]=me[a+y],s=0,g=0;g<=u;g++)s+=r[g]*f[u+(y-g)];n[y]=s}return Te(r,e,t+=d,n,i,o,a,u,f)}}if(0===b)for(t-=1,i-=24;0===Se[t];)t-=1,i-=24;else(b=he(b,-i))>=Ae?(s=Ee*b|0,Se[t]=b-Ae*s|0,i+=24,Se[t+=1]=s):Se[t]=0|b;for(s=he(1,i),y=t;y>=0;y--)n[y]=s*Se[y],s*=Ee;for(y=t;y>=0;y--){for(s=0,d=0;d<=p&&d<=t-y;d++)s+=je[d]*n[y+d];Ne[t-y]=s}for(s=0,y=t;y>=0;y--)s+=Ne[y];for(e[0]=0===l?s:-s,s=Ne[0]-s,y=1;y<=t;y++)s+=Ne[y];return e[1]=0===l?s:-s,7&v}function Ue(r,e,t,n){var i,o,a,u,f,c,s;for((o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=n-1),s=a+4,f=0;f<=s;f++)Oe[f]=c<0?0:me[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*Oe[a+(f-c)];_e[f]=i}return Te(r,e,4,_e,u,4,o,a,Oe)}var Ie=Math.round,xe=.6366197723675814,ke=1.5707963267341256,Fe=6077100506506192e-26,Pe=6077100506303966e-26,Ve=20222662487959506e-37,Ce=20222662487111665e-37,Ge=84784276603689e-45,Le=2047;function $e(r,e,t){var n,i,o,a,u;return o=r-(n=Ie(r*xe))*ke,a=n*Fe,u=e>>20|0,t[0]=o-a,u-(Or(t[0])>>20&Le)>16&&(a=n*Ve-((i=o)-(o=i-(a=n*Pe))-a),t[0]=o-a,u-(Or(t[0])>>20&Le)>49&&(a=n*Ge-((i=o)-(o=i-(a=n*Ce))-a),t[0]=o-a)),t[1]=o-t[0]-a,n}var We=0,He=16777216,Me=1.5707963267341256,Re=6077100506506192e-26,Be=2*Re,Ze=3*Re,Xe=4*Re,Ye=598523,qe=1072243195,ze=1073928572,De=1074752122,Je=1074977148,Ke=1075183036,Qe=1075388923,rt=1075594811,et=1094263291,tt=[0,0,0],nt=[0,0];function it(r,e){var t,n,i,o,a,u,f;if((i=Or(r)&Vr|0)<=qe)return e[0]=r,e[1]=0,0;if(i<=De)return(i&Gr)===Ye?$e(r,i,e):i<=ze?r>0?(f=r-Me,e[0]=f-Re,e[1]=f-e[0]-Re,1):(f=r+Me,e[0]=f+Re,e[1]=f-e[0]+Re,-1):r>0?(f=r-2*Me,e[0]=f-Be,e[1]=f-e[0]-Be,2):(f=r+2*Me,e[0]=f+Be,e[1]=f-e[0]+Be,-2);if(i<=rt)return i<=Ke?i===Je?$e(r,i,e):r>0?(f=r-3*Me,e[0]=f-Ze,e[1]=f-e[0]-Ze,3):(f=r+3*Me,e[0]=f+Ze,e[1]=f-e[0]+Ze,-3):i===Qe?$e(r,i,e):r>0?(f=r-4*Me,e[0]=f-Xe,e[1]=f-e[0]-Xe,4):(f=r+4*Me,e[0]=f+Xe,e[1]=f-e[0]+Xe,-4);if(i<et)return $e(r,i,e);if(i>=Cr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return $r[0]=r,Wr[Lr]}(r),f=Xr(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)tt[a]=0|f,f=(f-tt[a])*He;for(tt[2]=f,o=3;tt[o-1]===We;)o-=1;return u=Ue(tt,nt,n,o),r<0?(e[0]=-nt[0],e[1]=-nt[1],-u):(e[0]=nt[0],e[1]=nt[1],u)}var ot=[0,0],at=2147483647,ut=1072243195,ft=1044381696,ct=2146435072;function st(r){var e;if(e=Or(r),(e&=at)<=ut)return e<ft?1:_r(r,0);if(e>=ct)return NaN;switch(3&it(r,ot)){case 0:return _r(ot[0],ot[1]);case 1:return-kr(ot[0],ot[1]);case 2:return-_r(ot[0],ot[1]);default:return kr(ot[0],ot[1])}}var lt=1072243195,pt=1045430272,yt=[0,0];function dt(r){var e;if(e=Or(r),(e&=Vr)<=lt)return e<pt?r:kr(r,0);if(e>=Cr)return NaN;switch(3&it(r,yt)){case 0:return kr(yt[0],yt[1]);case 1:return _r(yt[0],yt[1]);case 2:return-kr(yt[0],yt[1]);default:return-_r(yt[0],yt[1])}}var vt=3.141592653589793;var gt=Math.sqrt,bt=.7853981633974483,ht=6123233995736766e-32;function wt(r){var e,t,n,i,o;if(R(r))return NaN;if(r>0?n=r:(e=!0,n=-r),n>1)return NaN;if(n>.625)i=(t=1-n)*function(r){var e,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/t)}(t),t=gt(t+t),o=bt-t,o-=t=t*i-ht,o+=bt;else{if(n<1e-8)return r;o=(t=n*n)*function(r){var e,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/t)}(t),o=n*o+n}return e?-o:o}var mt=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)},jt=/./;function At(r){return"boolean"==typeof r}var Et=Boolean,Ot=Boolean.prototype.toString,_t=z();function Nt(r){return"object"==typeof r&&(r instanceof Et||(_t?function(r){try{return Ot.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function St(r){return At(r)||Nt(r)}L(St,"isPrimitive",At),L(St,"isObject",Nt);var Tt="object"==typeof self?self:null,Ut="object"==typeof window?window:null,It="object"==typeof globalThis?globalThis:null,xt=function(r){if(arguments.length){if(!At(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(It)return It;if(Tt)return Tt;if(Ut)return Ut;throw new Error("unexpected error. Unable to resolve global object.")}(),kt=xt.document&&xt.document.childNodes,Ft=Int8Array;function Pt(){return/^\s*function\s*([^(]*)/i}var Vt=/^\s*function\s*([^(]*)/i;function Ct(r){return null!==r&&"object"==typeof r}function Gt(r){var e,t,n,i;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Vt.exec(n.toString()))return e[1]}return Ct(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(Pt,"REGEXP",Vt),L(Ct,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!mt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ct));var Lt="function"==typeof jt||"object"==typeof Ft||"function"==typeof kt?function(r){return Gt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?Gt(r).toLowerCase():e};function $t(r){return"function"===Lt(r)}var Wt,Ht=Object,Mt=Object.getPrototypeOf;Wt=$t(Object.getPrototypeOf)?Mt:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Rt=Wt,Bt=Object.prototype;function Zt(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!mt(r)}(r)&&(e=function(r){return null==r?null:(r=Ht(r),Rt(r))}(r),!e||!W(r,"constructor")&&W(e,"constructor")&&$t(e.constructor)&&"[object Function]"===Q(e.constructor)&&W(e,"isPrototypeOf")&&$t(e.isPrototypeOf)&&(e===Bt||function(r){var e;for(e in r)if(!W(r,e))return!1;return!0}(r)))}function Xt(r){return"number"==typeof r}var Yt=Z.prototype.toString,qt=z();function zt(r){return"object"==typeof r&&(r instanceof Z||(qt?function(r){try{return Yt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Q(r)))}function Dt(r){return Xt(r)||zt(r)}function Jt(r){return r<B&&r>X&&zr(e=r)===e;var e}function Kt(r){return Xt(r)&&Jt(r)}function Qt(r){return zt(r)&&Jt(r.valueOf())}function rn(r){return Kt(r)||Qt(r)}function en(r){return Kt(r)&&r>0}function tn(r){return Qt(r)&&r.valueOf()>0}function nn(r){return en(r)||tn(r)}function on(r){return Kt(r)&&r>=0}function an(r){return Qt(r)&&r.valueOf()>=0}function un(r){return on(r)||an(r)}function fn(r){return Xt(r)&&r>=0}function cn(r){return zt(r)&&r.valueOf()>=0}function sn(r){return fn(r)||cn(r)}function ln(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}return L(Dt,"isPrimitive",Xt),L(Dt,"isObject",zt),L(rn,"isPrimitive",Kt),L(rn,"isObject",Qt),L(nn,"isPrimitive",en),L(nn,"isObject",tn),L(un,"isPrimitive",on),L(un,"isObject",an),L(sn,"isPrimitive",fn),L(sn,"isObject",cn),function r(e){var t,n,i,o,a,u,f,c;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=function(r,e){return Zt(e)?W(e,"period")&&(r.period=e.period,!en(e.period))?new TypeError(ln("0tb8N","period",e.period)):W(e,"amplitude")&&(r.amplitude=e.amplitude,!fn(e.amplitude))?new TypeError(ln("0tb4k","amplitude",e.amplitude)):W(e,"offset")&&(r.offset=e.offset,!Kt(e.offset))?new TypeError(ln("0tb8M","offset",e.offset)):W(e,"iter")&&(r.iter=e.iter,!on(e.iter))?new TypeError(ln("0tb2t","iter",e.iter)):null:new TypeError(ln("0tb2V",e))}(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=2/t.period,f=t.amplitude/1.5707963267948966,c=0,L(n={},"next",(function(){return c+=1,i||c>t.iter?{done:!0}:(a+=1,{value:f*wt((r=u*(a%=t.period),R(r)||Y(r)?NaN:0===(e=le(n=r%2))||1===e?ce(0,n):e<.25?dt(vt*n):e<.75?ce(st(vt*(e=.5-e)),n):e<1.25?(n=ce(1,n)-n,dt(vt*n)):e<1.75?-ce(st(vt*(e-=1.5)),n):(n-=ce(2,n),dt(vt*n)))),done:!1});var r,e,n})),L(n,"return",(function(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}})),M&&L(n,M,(function(){return r(t)})),n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterTriangleWave=e();
//# sourceMappingURL=browser.js.map
