"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=s(function(p,t){
var n=require('@stdlib/assert-has-own-property/dist'),c=require('@stdlib/string-base-lowercase/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function l(a){var r,e,i;if(typeof a!="object"||a===null)throw new TypeError(v('2pV47',a));r={};for(e in a)n(a,e)&&(e===""?r[e]=a[e]:(i=c(e.charAt(0))+e.slice(1),r[i]=a[e]));return r}t.exports=l
});var o=u();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
