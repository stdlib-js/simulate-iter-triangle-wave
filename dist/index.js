"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=l(function(R,m){
var T=require('@stdlib/assert-is-plain-object/dist'),a=require('@stdlib/assert-has-own-property/dist'),x=require('@stdlib/assert-is-integer/dist').isPrimitive,E=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,N=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,h=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,n=require('@stdlib/error-tools-fmtprodmsg/dist');function I(r,e){return T(e)?a(e,"period")&&(r.period=e.period,!E(e.period))?new TypeError(n('0tb8N',"period",e.period)):a(e,"amplitude")&&(r.amplitude=e.amplitude,!h(e.amplitude))?new TypeError(n('0tb4k',"amplitude",e.amplitude)):a(e,"offset")&&(r.offset=e.offset,!x(e.offset))?new TypeError(n('0tb8M',"offset",e.offset)):a(e,"iter")&&(r.iter=e.iter,!N(e.iter))?new TypeError(n('0tb2t',"iter",e.iter)):null:new TypeError(n('0tb2V',e));}m.exports=I
});var b=l(function(S,c){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/symbol-iterator/dist'),j=require('@stdlib/math-base-special-sinpi/dist'),F=require('@stdlib/math-base-special-asin/dist'),L=require('@stdlib/constants-float64-half-pi/dist'),A=p();function q(r){var e,t,o,u,i,d,s,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(u=A(e,r),u))throw u;return i=(e.period-e.offset)%e.period,i<0&&(i+=e.period),i-=1,d=2/e.period,s=e.amplitude/L,v=0,t={},f(t,"next",y),f(t,"return",O),g&&f(t,g,P),t;function y(){return v+=1,o||v>e.iter?{done:!0}:(i+=1,i%=e.period,{value:s*F(j(d*i)),done:!1})}function O(w){return o=!0,arguments.length?{value:w,done:!0}:{done:!0}}function P(){return q(e)}}c.exports=q
});var G=b();module.exports=G;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
