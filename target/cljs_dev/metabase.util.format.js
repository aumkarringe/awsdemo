var $CLJS = require("./cljs_env");
var $jscomp = $CLJS.$jscomp;
var COMPILED = false;
require("./cljs.core.js");
var cognitect=$CLJS.cognitect || ($CLJS.cognitect = {});
var weavejester=$CLJS.weavejester || ($CLJS.weavejester = {});
var borkdude=$CLJS.borkdude || ($CLJS.borkdude = {});
var module$shadow_js_shim_module$ttag=$CLJS.module$shadow_js_shim_module$ttag || ($CLJS.module$shadow_js_shim_module$ttag = {});
var clojure=$CLJS.clojure || ($CLJS.clojure = {});
var module$shadow_js_shim_module$moment_timezone=$CLJS.module$shadow_js_shim_module$moment_timezone || ($CLJS.module$shadow_js_shim_module$moment_timezone = {});
var module$shadow_js_shim_module$moment=$CLJS.module$shadow_js_shim_module$moment || ($CLJS.module$shadow_js_shim_module$moment = {});
var tailrecursion=$CLJS.tailrecursion || ($CLJS.tailrecursion = {});
var module$shadow_js_shim_module$crc_32=$CLJS.module$shadow_js_shim_module$crc_32 || ($CLJS.module$shadow_js_shim_module$crc_32 = {});
var devtools=$CLJS.devtools || ($CLJS.devtools = {});
var cljs=$CLJS.cljs || ($CLJS.cljs = {});
var inflections=$CLJS.inflections || ($CLJS.inflections = {});
var net=$CLJS.net || ($CLJS.net = {});
var shadow=$CLJS.shadow || ($CLJS.shadow = {});
var goog=$CLJS.goog || ($CLJS.goog = {});
var camel_snake_kebab=$CLJS.camel_snake_kebab || ($CLJS.camel_snake_kebab = {});
var flatland=$CLJS.flatland || ($CLJS.flatland = {});
var lambdaisland=$CLJS.lambdaisland || ($CLJS.lambdaisland = {});
var medley=$CLJS.medley || ($CLJS.medley = {});
var no=$CLJS.no || ($CLJS.no = {});
var metabase=$CLJS.metabase || ($CLJS.metabase = {});
var malli=$CLJS.malli || ($CLJS.malli = {});
var com=$CLJS.com || ($CLJS.com = {});

$CLJS.SHADOW_ENV.setLoaded("metabase.util.format.js");

goog.provide('metabase.util.format');
metabase.util.format.format_with_unit = (function metabase$util$format$format_with_unit(n,suffix){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n.toFixed((1)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
});
/**
 * Format a time interval in nanoseconds to something more readable. (µs/ms/etc.)
 */
metabase.util.format.format_nanoseconds = (function metabase$util$format$format_nanoseconds(nanoseconds){
var n = nanoseconds;
var G__74643 = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),(1000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"\u00B5s","\u00B5s",2058494670),(1000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",1705939918),(60)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mins","mins",467369676),(60)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855),(24)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564),(7)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weeks","weeks",1844596125),(365.25 / (7))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689),Number.POSITIVE_INFINITY], null)], null);
var vec__74644 = G__74643;
var seq__74645 = cljs.core.seq(vec__74644);
var first__74646 = cljs.core.first(seq__74645);
var seq__74645__$1 = cljs.core.next(seq__74645);
var vec__74647 = first__74646;
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74647,(0),null);
var divisor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74647,(1),null);
var more = seq__74645__$1;
var n__$1 = n;
var G__74643__$1 = G__74643;
while(true){
var n__$2 = n__$1;
var vec__74660 = G__74643__$1;
var seq__74661 = cljs.core.seq(vec__74660);
var first__74662 = cljs.core.first(seq__74661);
var seq__74661__$1 = cljs.core.next(seq__74661);
var vec__74663 = first__74662;
var unit__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74663,(0),null);
var divisor__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74663,(1),null);
var more__$1 = seq__74661__$1;
if((((n__$2 > divisor__$1)) && (cljs.core.seq(more__$1)))){
var G__74721 = (n__$2 / divisor__$1);
var G__74722 = more__$1;
n__$1 = G__74721;
G__74643__$1 = G__74722;
continue;
} else {
return metabase.util.format.format_with_unit(n__$2,cljs.core.name(unit__$1));
}
break;
}
});
/**
 * Format a time interval in microseconds into something more readable.
 */
metabase.util.format.format_microseconds = (function metabase$util$format$format_microseconds(microseconds){
return metabase.util.format.format_nanoseconds((1000.0 * microseconds));
});
/**
 * Format a time interval in milliseconds into something more readable.
 */
metabase.util.format.format_milliseconds = (function metabase$util$format$format_milliseconds(milliseconds){
return metabase.util.format.format_microseconds((1000.0 * milliseconds));
});
/**
 * Format a time interval in seconds into something more readable.
 */
metabase.util.format.format_seconds = (function metabase$util$format$format_seconds(seconds){
return metabase.util.format.format_milliseconds((1000.0 * seconds));
});
/**
 * Nicely format `num-bytes` as kilobytes/megabytes/etc.
 * 
 *  (format-bytes 1024) ; -> 2.0 KB
 */
metabase.util.format.format_bytes = (function metabase$util$format$format_bytes(num_bytes){
var n = num_bytes;
var G__74675 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["B","KB","MB","GB"], null);
var vec__74676 = G__74675;
var seq__74677 = cljs.core.seq(vec__74676);
var first__74678 = cljs.core.first(seq__74677);
var seq__74677__$1 = cljs.core.next(seq__74677);
var suffix = first__74678;
var more = seq__74677__$1;
var n__$1 = n;
var G__74675__$1 = G__74675;
while(true){
var n__$2 = n__$1;
var vec__74682 = G__74675__$1;
var seq__74683 = cljs.core.seq(vec__74682);
var first__74684 = cljs.core.first(seq__74683);
var seq__74683__$1 = cljs.core.next(seq__74683);
var suffix__$1 = first__74684;
var more__$1 = seq__74683__$1;
if(((cljs.core.seq(more__$1)) && ((n__$2 >= (1024))))){
var G__74729 = (n__$2 / 1024.0);
var G__74730 = more__$1;
n__$1 = G__74729;
G__74675__$1 = G__74730;
continue;
} else {
return metabase.util.format.format_with_unit(n__$2,suffix__$1);
}
break;
}
});
/**
 * Colorize string `x` using `color`, a symbol or keyword, but only if `MB_COLORIZE_LOGS` is enabled (the default).
 *   `color` can be `green`, `red`, `yellow`, `blue`, `cyan`, `magenta`, etc. See the entire list of avaliable
 *   colors [here](https://github.com/ibdknox/colorize/blob/master/src/colorize/core.clj)
 */
metabase.util.format.colorize = (function metabase$util$format$colorize(_,x){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
});
/**
 * With one arg, converts something to a string and colorizes it. With two args, behaves like `format`, but colorizes
 *   the output.
 * 
 *  (format-color :red "%d cans" 2)
 */
metabase.util.format.format_color = (function metabase$util$format$format_color(var_args){
var G__74709 = arguments.length;
switch (G__74709) {
case 2:
return metabase.util.format.format_color.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5751__auto__ = [];
var len__5726__auto___74734 = arguments.length;
var i__5727__auto___74735 = (0);
while(true){
if((i__5727__auto___74735 < len__5726__auto___74734)){
args_arr__5751__auto__.push((arguments[i__5727__auto___74735]));

var G__74736 = (i__5727__auto___74735 + (1));
i__5727__auto___74735 = G__74736;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((2) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((2)),(0),null)):null);
return metabase.util.format.format_color.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5752__auto__);

}
});

(metabase.util.format.format_color.cljs$core$IFn$_invoke$arity$2 = (function (color,x){
return metabase.util.format.colorize(color,x);
}));

(metabase.util.format.format_color.cljs$core$IFn$_invoke$arity$variadic = (function (color,format_str,args){
return metabase.util.format.colorize(color,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,format_str,args));
}));

/** @this {Function} */
(metabase.util.format.format_color.cljs$lang$applyTo = (function (seq74706){
var G__74707 = cljs.core.first(seq74706);
var seq74706__$1 = cljs.core.next(seq74706);
var G__74708 = cljs.core.first(seq74706__$1);
var seq74706__$2 = cljs.core.next(seq74706__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74707,G__74708,seq74706__$2);
}));

(metabase.util.format.format_color.cljs$lang$maxFixedArity = (2));


//# sourceMappingURL=metabase.util.format.js.map
