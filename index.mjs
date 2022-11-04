// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sinpi@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-asin@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-half-pi@v0.0.8-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function a(e,t){return n(t)?o(t,"period")&&(e.period=t.period,!m(t.period))?new TypeError(f("0Rh8f","period",t.period)):o(t,"amplitude")&&(e.amplitude=t.amplitude,!l(t.amplitude))?new TypeError(f("0Rh4x","amplitude",t.amplitude)):o(t,"offset")&&(e.offset=t.offset,!d(t.offset))?new TypeError(f("0Rh8e","offset",t.offset)):o(t,"iter")&&(e.iter=t.iter,!p(t.iter))?new TypeError(f("0Rh35","iter",t.iter)):null:new TypeError(f("0Rh2h",t))}function h(n){var o,d,m,p,l,f,j,u;if(o={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(p=a(o,n)))throw p;return(l=(o.period-o.offset)%o.period)<0&&(l+=o.period),l-=1,f=2/o.period,j=o.amplitude/r,u=0,e(d={},"next",v),e(d,"return",c),t&&e(d,t,g),d;function v(){return u+=1,m||u>o.iter?{done:!0}:(l+=1,l%=o.period,{value:j*i(s(f*l)),done:!1})}function c(e){return m=!0,arguments.length?{value:e,done:!0}:{done:!0}}function g(){return h(o)}}export{h as default};
//# sourceMappingURL=index.mjs.map
