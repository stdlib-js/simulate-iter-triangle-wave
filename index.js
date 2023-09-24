// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterTriangleWave=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,h,"e"),n=p.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,d,"$1."),n=p.call(n,b,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):l.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,_=Array.isArray;function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function T(r){var e,t,n,o,a,c,l,s,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,O(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){return"string"==typeof r}function F(r){var e,t,n;if(!x(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return T.apply(null,t)}var k,P=Object.prototype,V=P.toString,G=P.__defineGetter__,C=P.__defineSetter__,L=P.__lookupGetter__,$=P.__lookupSetter__;k=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||$.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var M=k;function W(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var H=Object.prototype.hasOwnProperty;function R(r,e){return null!=r&&H.call(r,e)}var B="function"==typeof Symbol?Symbol:void 0;var Z="function"==typeof B&&"symbol"==typeof B("foo")&&R(B,"iterator")&&"symbol"==typeof B.iterator?Symbol.iterator:null;function X(r){return r!=r}var J=Number.POSITIVE_INFINITY,Y=Number,q=Y.NEGATIVE_INFINITY;function z(r){return r===J||r===q}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return D&&"symbol"==typeof Symbol.toStringTag}var Q=Object.prototype.toString;var rr="function"==typeof B?B.toStringTag:"";var er=K()?function(r){var e,t,n;if(null==r)return Q.call(r);t=r[rr],e=R(r,rr);try{r[rr]=void 0}catch(e){return Q.call(r)}return n=Q.call(r),e?r[rr]=t:delete r[rr],n}:function(r){return Q.call(r)},tr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var ir,or="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ar=ir,ur="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var cr,lr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=e,r=(ur&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var sr=cr,pr="function"==typeof Uint8Array;var yr="function"==typeof Uint8Array?Uint8Array:null;var vr,dr="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,e,t;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,256,257]),t=e,r=(pr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var br=vr,gr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var wr,mr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(gr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var jr,Ar={uint16:wr,uint8:br};(jr=new Ar.uint16(1))[0]=4660;var Er=52===new Ar.uint8(jr.buffer)[0],Or=!0===Er?1:0,_r=new sr(1),Nr=new ar(_r.buffer);function Tr(r){return _r[0]=r,Nr[Or]}function Sr(r,e){var t,n,i,o;return i=(o=r*r)*o,n=o*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(o),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(o),(i=1-(t=.5*o))+(1-i-t+(o*n-r*e))}var Ur=-.16666666666666632;function Ir(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(Ur+i*t):r-(i*(.5*e-n*t)-e-n*Ur)}var xr,Fr,kr=2147483647,Pr=2146435072,Vr=!0===Er?0:1,Gr=new sr(1),Cr=new ar(Gr.buffer);!0===Er?(xr=1,Fr=0):(xr=0,Fr=1);var Lr={HIGH:xr,LOW:Fr},$r=new sr(1),Mr=new ar($r.buffer),Wr=Lr.HIGH,Hr=Lr.LOW;function Rr(r,e){return Mr[Wr]=r,Mr[Hr]=e,$r[0]}var Br,Zr,Xr=Math.floor;!0===Er?(Br=1,Zr=0):(Br=0,Zr=1);var Jr={HIGH:Br,LOW:Zr},Yr=new sr(1),qr=new ar(Yr.buffer),zr=Jr.HIGH,Dr=Jr.LOW;function Kr(r,e,t,n){return Yr[0]=r,e[n]=qr[zr],e[n+t]=qr[Dr],e}function Qr(r){return Kr(r,[0,0],1,0)}W(Qr,"assign",Kr);var re=[0,0];function ee(r,e){var t,n;return Qr.assign(r,re,1,0),t=re[0],t&=kr,n=Tr(e),Rr(t|=n&=2147483648,re[1])}function te(r){return Math.abs(r)}function ne(r,e,t,n){return X(r)||z(r)?(e[n]=r,e[n+t]=0,e):0!==r&&te(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}W((function(r){return ne(r,[0,0],1,0)}),"assign",ne);var ie=[0,0],oe=[0,0];function ae(r,e){var t,n;return 0===e||0===r||X(r)||z(r)?r:(ne(r,ie,1,0),e+=ie[1],e+=function(r){var e=Tr(r);return(e=(e&Pr)>>>20)-1023|0}(r=ie[0]),e<-1074?ee(0,r):e>1023?r<0?q:J:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Qr.assign(r,oe,1,0),t=oe[0],t&=2148532223,n*Rr(t|=e+1023<<20,oe[1])))}function ue(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var fe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],le=16777216,se=5.960464477539063e-8,pe=ue(20),ye=ue(20),ve=ue(20),de=ue(20);function be(r,e,t,n,i,o,a,u,f){var c,l,s,p,y,v,d,b,g;for(p=o,g=n[t],b=t,y=0;b>0;y++)l=se*g|0,de[y]=g-le*l|0,g=n[b-1]+l,b-=1;if(g=ae(g,i),g-=8*Xr(.125*g),g-=d=0|g,s=0,i>0?(d+=y=de[t-1]>>24-i,de[t-1]-=y<<24-i,s=de[t-1]>>23-i):0===i?s=de[t-1]>>23:g>=.5&&(s=2),s>0){for(d+=1,c=0,y=0;y<t;y++)b=de[y],0===c?0!==b&&(c=1,de[y]=16777216-b):de[y]=16777215-b;if(i>0)switch(i){case 1:de[t-1]&=8388607;break;case 2:de[t-1]&=4194303}2===s&&(g=1-g,0!==c&&(g-=ae(1,i)))}if(0===g){for(b=0,y=t-1;y>=o;y--)b|=de[y];if(0===b){for(v=1;0===de[o-v];v++);for(y=t+1;y<=t+v;y++){for(f[u+y]=fe[a+y],l=0,b=0;b<=u;b++)l+=r[b]*f[u+(y-b)];n[y]=l}return be(r,e,t+=v,n,i,o,a,u,f)}}if(0===g)for(t-=1,i-=24;0===de[t];)t-=1,i-=24;else(g=ae(g,-i))>=le?(l=se*g|0,de[t]=g-le*l|0,i+=24,de[t+=1]=l):de[t]=0|g;for(l=ae(1,i),y=t;y>=0;y--)n[y]=l*de[y],l*=se;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=ce[v]*n[y+v];ve[t-y]=l}for(l=0,y=t;y>=0;y--)l+=ve[y];for(e[0]=0===s?l:-l,l=ve[0]-l,y=1;y<=t;y++)l+=ve[y];return e[1]=0===s?l:-l,7&d}function ge(r,e,t,n){var i,o,a,u,f,c,l;for(4,(o=(t-3)/24|0)<0&&(o=0),u=t-24*(o+1),c=o-(a=n-1),l=a+4,f=0;f<=l;f++)pe[f]=c<0?0:fe[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*pe[a+(f-c)];ye[f]=i}return 4,be(r,e,4,ye,u,4,o,a,pe)}var he=Math.round;function we(r,e,t){var n,i,o,a,u;return o=r-1.5707963267341256*(n=he(.6366197723675814*r)),a=6077100506506192e-26*n,u=e>>20|0,t[0]=o-a,u-(Tr(t[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((i=o)-(o=i-(a=6077100506303966e-26*n))-a),t[0]=o-a,u-(Tr(t[0])>>20&2047)>49&&(a=84784276603689e-45*n-((i=o)-(o=i-(a=20222662487111665e-37*n))-a),t[0]=o-a)),t[1]=o-t[0]-a,n}var me=1.5707963267341256,je=6077100506506192e-26,Ae=2*je,Ee=3*je,Oe=4*je,_e=[0,0,0],Ne=[0,0];function Te(r,e){var t,n,i,o,a,u,f;if((i=Tr(r)&kr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?we(r,i,e):i<=1073928572?r>0?(f=r-me,e[0]=f-je,e[1]=f-e[0]-je,1):(f=r+me,e[0]=f+je,e[1]=f-e[0]+je,-1):r>0?(f=r-2*me,e[0]=f-Ae,e[1]=f-e[0]-Ae,2):(f=r+2*me,e[0]=f+Ae,e[1]=f-e[0]+Ae,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,e):r>0?(f=r-3*me,e[0]=f-Ee,e[1]=f-e[0]-Ee,3):(f=r+3*me,e[0]=f+Ee,e[1]=f-e[0]+Ee,-3):1075388923===i?we(r,i,e):r>0?(f=r-4*me,e[0]=f-Oe,e[1]=f-e[0]-Oe,4):(f=r+4*me,e[0]=f+Oe,e[1]=f-e[0]+Oe,-4);if(i<1094263291)return we(r,i,e);if(i>=Pr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Gr[0]=r,Cr[Vr]}(r),f=Rr(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)_e[a]=0|f,f=16777216*(f-_e[a]);for(_e[2]=f,o=3;0===_e[o-1];)o-=1;return u=ge(_e,Ne,n,o),r<0?(e[0]=-Ne[0],e[1]=-Ne[1],-u):(e[0]=Ne[0],e[1]=Ne[1],u)}var Se=[0,0];function Ue(r){var e;if(e=Tr(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Sr(r,0);if(e>=2146435072)return NaN;switch(3&Te(r,Se)){case 0:return Sr(Se[0],Se[1]);case 1:return-Ir(Se[0],Se[1]);case 2:return-Sr(Se[0],Se[1]);default:return Ir(Se[0],Se[1])}}var Ie=[0,0];function xe(r){var e;if(e=Tr(r),(e&=kr)<=1072243195)return e<1045430272?r:Ir(r,0);if(e>=Pr)return NaN;switch(3&Te(r,Ie)){case 0:return Ir(Ie[0],Ie[1]);case 1:return Sr(Ie[0],Ie[1]);case 2:return-Ir(Ie[0],Ie[1]);default:return-Sr(Ie[0],Ie[1])}}var Fe=3.141592653589793;function ke(r){var e,t;return X(r)||z(r)?NaN:0===(e=te(t=r%2))||1===e?ee(0,t):e<.25?xe(Fe*t):e<.75?ee(Ue(Fe*(e=.5-e)),t):e<1.25?(t=ee(1,t)-t,xe(Fe*t)):e<1.75?-ee(Ue(Fe*(e-=1.5)),t):(t-=ee(2,t),xe(Fe*t))}var Pe=Math.sqrt,Ve=.7853981633974483;function Ge(r){var e,t,n,i,o;if(X(r))return NaN;if(r>0?n=r:(e=!0,n=-r),n>1)return NaN;if(n>.625)i=(t=1-n)*function(r){var e,t;return 0===r?.08333333333333809:((r<0?-r:r)<=1?(e=28.536655482610616+r*(r*(6.968710824104713+r*(.002967721961301243*r-.5634242780008963))-25.56901049652825),t=342.43986579130785+r*(r*(147.0656354026815+r*(1*r-21.947795316429207))-383.8770957603691)):(e=.002967721961301243+(r=1/r)*(r*(6.968710824104713+r*(28.536655482610616*r-25.56901049652825))-.5634242780008963),t=1+r*(r*(147.0656354026815+r*(342.43986579130785*r-383.8770957603691))-21.947795316429207)),e/t)}(t),t=Pe(t+t),o=Ve-t,o-=t=t*i-6123233995736766e-32,o+=Ve;else{if(n<1e-8)return r;o=(t=n*n)*function(r){var e,t;return 0===r?.16666666666666713:((r<0?-r:r)<=1?(e=r*(19.562619833175948+r*(r*(5.444622390564711+r*(.004253011369004428*r-.6019598008014124))-16.262479672107002))-8.198089802484825,t=r*(139.51056146574857+r*(r*(70.49610280856842+r*(1*r-14.740913729888538))-147.1791292232726))-49.18853881490881):(e=.004253011369004428+(r=1/r)*(r*(5.444622390564711+r*(r*(19.562619833175948+-8.198089802484825*r)-16.262479672107002))-.6019598008014124),t=1+r*(r*(70.49610280856842+r*(r*(139.51056146574857+-49.18853881490881*r)-147.1791292232726))-14.740913729888538)),e/t)}(t),o=n*o+n}return e?-o:o}var Ce=1.5707963267948966;var Le=Array.isArray?Array.isArray:function(r){return"[object Array]"===er(r)};var $e=/./;function Me(r){return"boolean"==typeof r}var We=Boolean,He=Boolean.prototype.toString;var Re=K();function Be(r){return"object"==typeof r&&(r instanceof We||(Re?function(r){try{return He.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===er(r)))}function Ze(r){return Me(r)||Be(r)}function Xe(){return new Function("return this;")()}W(Ze,"isPrimitive",Me),W(Ze,"isObject",Be);var Je="object"==typeof self?self:null,Ye="object"==typeof window?window:null,qe="object"==typeof global?global:null,ze="object"==typeof globalThis?globalThis:null;var De=function(r){if(arguments.length){if(!Me(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Xe()}if(ze)return ze;if(Je)return Je;if(Ye)return Ye;if(qe)return qe;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=De.document&&De.document.childNodes,Qe=Int8Array;function rt(){return/^\s*function\s*([^(]*)/i}var et=/^\s*function\s*([^(]*)/i;function tt(r){return null!==r&&"object"==typeof r}function nt(r){var e,t,n,i;if(("Object"===(t=er(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=et.exec(n.toString()))return e[1]}return tt(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}W(rt,"REGEXP",et),W(tt,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Le(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(tt));var it="function"==typeof $e||"object"==typeof Qe||"function"==typeof Ke?function(r){return nt(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?nt(r).toLowerCase():e};function ot(r){return"function"===it(r)}var at,ut=Object,ft=Object.getPrototypeOf;at=ot(Object.getPrototypeOf)?ft:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===er(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ct=at;var lt=Object.prototype;function st(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!Le(r)}(r)&&(e=function(r){return null==r?null:(r=ut(r),ct(r))}(r),!e||!R(r,"constructor")&&R(e,"constructor")&&ot(e.constructor)&&"[object Function]"===er(e.constructor)&&R(e,"isPrototypeOf")&&ot(e.isPrototypeOf)&&(e===lt||function(r){var e;for(e in r)if(!R(r,e))return!1;return!0}(r)))}function pt(r){return"number"==typeof r}var yt=Y.prototype.toString;var vt=K();function dt(r){return"object"==typeof r&&(r instanceof Y||(vt?function(r){try{return yt.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function bt(r){return pt(r)||dt(r)}function gt(r){return r<J&&r>q&&Xr(e=r)===e;var e}function ht(r){return pt(r)&&gt(r)}function wt(r){return dt(r)&&gt(r.valueOf())}function mt(r){return ht(r)||wt(r)}function jt(r){return ht(r)&&r>0}function At(r){return wt(r)&&r.valueOf()>0}function Et(r){return jt(r)||At(r)}function Ot(r){return ht(r)&&r>=0}function _t(r){return wt(r)&&r.valueOf()>=0}function Nt(r){return Ot(r)||_t(r)}function Tt(r){return pt(r)&&r>=0}function St(r){return dt(r)&&r.valueOf()>=0}function Ut(r){return Tt(r)||St(r)}function It(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}function xt(r,e){return st(e)?R(e,"period")&&(r.period=e.period,!jt(e.period))?new TypeError(It("0tb8N,JM","period",e.period)):R(e,"amplitude")&&(r.amplitude=e.amplitude,!Tt(e.amplitude))?new TypeError(It("0tb4k,I9","amplitude",e.amplitude)):R(e,"offset")&&(r.offset=e.offset,!ht(e.offset))?new TypeError(It("0tb8M,JG","offset",e.offset)):R(e,"iter")&&(r.iter=e.iter,!Ot(e.iter))?new TypeError(It("0tb2t,G9","iter",e.iter)):null:new TypeError(It("0tb2V,FD",e))}return W(bt,"isPrimitive",pt),W(bt,"isObject",dt),W(mt,"isPrimitive",ht),W(mt,"isObject",wt),W(Et,"isPrimitive",jt),W(Et,"isObject",At),W(Nt,"isPrimitive",Ot),W(Nt,"isObject",_t),W(Ut,"isPrimitive",Tt),W(Ut,"isObject",St),function r(e){var t,n,i,o,a,u,f,c;if(t={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=xt(t,e)))throw o;return(a=(t.period-t.offset)%t.period)<0&&(a+=t.period),a-=1,u=2/t.period,f=t.amplitude/Ce,c=0,W(n={},"next",l),W(n,"return",s),Z&&W(n,Z,p),n;function l(){return c+=1,i||c>t.iter?{done:!0}:(a+=1,a%=t.period,{value:f*Ge(ke(u*a)),done:!1})}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function p(){return r(t)}}}));
//# sourceMappingURL=index.js.map
